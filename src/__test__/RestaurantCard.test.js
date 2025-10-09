import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import RestaurantData from "../mocks/RestaurantData.json";
import { withLabel } from "../components/RestaurantCard";
import "@testing-library/jest-dom";
it("should get the name ", () => {
  render(<RestaurantCard resData={RestaurantData} />);
  const name = screen.getByText("Theobroma");
  expect(name).toBeInTheDocument();
});
it("should show the label of veg ", () => {
  const VegRestaurant = withLabel(RestaurantCard);
  render(<VegRestaurant resData={RestaurantData} />);
  const name = screen.getByText("Theobroma");
  expect(name).toBeInTheDocument();
});
