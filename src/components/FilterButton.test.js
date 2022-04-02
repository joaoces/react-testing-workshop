import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import FilterButton from "./FilterButton";

describe.skip("FilterButton", () => {
  test("React Testing Library works!", () => {
    render(<FilterButton />);

    // screen.debug();
  });
});
