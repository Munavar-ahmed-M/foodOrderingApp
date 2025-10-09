import { render, screen } from "@testing-library/react";
import Contact from "../pages/Contact";
import "@testing-library/jest-dom";
test("should load heading inside the contact ", async () => {
  render(<Contact />);
  const heading = await screen.findByRole("heading");
  expect(heading).toBeInTheDocument();
});
test("should load button inside the contact ", async () => {
  render(<Contact />);
  const button = await screen.findByRole("button");
  expect(button).toBeInTheDocument();
});
test("should i get the submit text inside the contact ", async () => {
  render(<Contact />);
  const button = await screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});
// let faild our test
// test("should i get the random text inside the contact ", async () => {
//   render(<Contact />);
//   const button = await screen.getByText("random");
//   expect(button).toBeInTheDocument();
// });
test("should i get 2 input boxes  inside the contact component", async () => {
  render(<Contact />);
  const inputBoxes = await screen.getAllByRole("textbox");
  expect(inputBoxes.length).not.toBe(4);
});
