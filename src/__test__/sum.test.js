import { sum } from "../components/sum";
import "@testing-library/jest-dom";
test("test case for adding two numbers ", () => {
  const result = sum(3, 5);
  expect(result).toBe(8);
});
