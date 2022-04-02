import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./example-3";

describe.skip("example-3 > Simple form with input and button", () => {
  test("should render an input and submit button", () => {
    console.log(
      "🏋️‍♀️ 0 - Initial bootstrap logic. Transform React Components in DOM Elements"
    );
    render(<App />);

    console.log("👀 1 - Checking the output of the render method");
    screen.debug();

    console.log("🎯 2 - Gettings form elements");
    const favoriteQueryInput = screen.getByLabelText("Favorite Query:");
    const submitButton = screen.getByText("Submit!");

    console.log("🧪 3.1 - Assert that the input exists");
    expect(favoriteQueryInput).toBeInTheDocument();

    console.log("🧪 3.2 - Assert that the button exists");
    expect(submitButton).toBeInTheDocument();
  });
});
