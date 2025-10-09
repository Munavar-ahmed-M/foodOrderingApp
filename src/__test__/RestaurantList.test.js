import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MockResList from "../mocks/MockResList";
import { act } from "react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockResList);
    },
  });
});
describe("this are the testcases for the Restaurant List", () => {
  // beforeAll(() => {
  //   console.log("before all");
  // });
  // beforeEach(() => {
  //   console.log("Before Each");
  // });
  it("should search restaurant card for pizza hut input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    const searchButton = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");
    await act(async () => {
      fireEvent.change(searchInput, {
        target: {
          value: "pizza hut",
        },
      });
      fireEvent.click(searchButton);
    });
    const resList = screen.getAllByTestId("resCard");
    expect(resList.length).toBe(1);
  });
  it("should give the top restaurant List ", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });
    const topRatedResButton = screen.getByRole("button", {
      name: "Top Rated Restaurant",
    });
    await act(async () => fireEvent.click(topRatedResButton));
    const resList = screen.getAllByTestId("resCard");
    expect(resList.length).toBe(10);
  });
});
