import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./example-2";

describe.skip("example-2 > App with render message", () => {
  test("renders App component", () => {
    console.log(
      "🏋️‍♀️ 0 - Initial bootstrap logic. Transform React Components in DOM Elements"
    );
    render(<App />);

    console.log("👀 1 - Checking the output of the render method");
    screen.debug();
  });
});
