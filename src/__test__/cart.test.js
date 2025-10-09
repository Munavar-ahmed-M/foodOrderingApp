import { json, useParams } from "react-router-dom";
import Cart from "../pages/Cart";
import ResMenu from "../pages/ResMenu";
import MockResMenu from "./../mocks/MockResMenu.json";
import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { act } from "react";
import mockCategoryData from "../mocks/ResMenuCategory.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
jest.mock("react-router", () => ({ useParams: () => ({ id: "17819" }) }));
jest.mock("../utils/useRestaurantMenu", () => ({
  __esModule: true,
  default: () => ({
    resInfo: MockResMenu,
    Cards: mockCategoryData,
  }),
}));
// useRestaurantMenu.mockReturnValue({
//   resInfo: MockResMenu,
//   Cards: CategoryData,
// });

it("should add the items into the cart  ", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <Cart />
        <ResMenu />
      </Provider>
    )
  );
  const rolls = screen.getByText("Rolls (15)");
  fireEvent.click(rolls);
  const addbtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addbtn[0]);
  fireEvent.click(addbtn[1]);
  const cartItem = screen.getAllByTestId("cartItem");
  expect(cartItem.length).toBe(2);
});
