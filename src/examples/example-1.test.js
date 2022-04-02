import { sum } from "./example-1.js";

describe.skip("example-1 > Sum util", () => {
  test("should return 2 when trying to sum 1 + 1", () => {
    expect(sum(1, 1)).toBe(2);
  });

  test("should return 1 when trying to sum 2 + (-1)", () => {
    expect(sum(2, -1)).toBe(1);
  });

  test("should return null when a invalid number is passed", () => {
    expect(sum("asd", "-1")).toBe(null);
  });
});
