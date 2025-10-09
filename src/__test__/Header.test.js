import Header from "../components/Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";

// ✅ Mock SVG imports (handles new URL(..., import.meta.url))
jest.mock("../assets/cart.svg", () => "cart.svg");
jest.mock("../assets/logo.svg", () => "logo.svg");

// ✅ Mock global URL (needed if your component calls new URL())
global.URL = class {
  constructor(path, base) {
    this.href = path; // just store the path for Jest environment
  }
};

describe("Header Component", () => {
  it("should load the header component with the Login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  it("should change to Logout when Login is clicked", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});
