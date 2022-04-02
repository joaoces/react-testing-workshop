import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import App from "./example-4";
import userEvent from "@testing-library/user-event";

describe.skip("example-4 > Simple form with input and button", () => {
  test("should render an input and submit button", async () => {
    console.log("🏋️‍♀️ 0 - Initial bootstrap logic.");
    // Mocks
    const expectedResponse = "My favourite text input is getByText";
    const onSubmitMock = jest.fn(() => {});

    //Render
    render(<App onClickSubmit={onSubmitMock} />);

    console.log("👀 1 - Checking the output of the render method");
    screen.debug();

    console.log("🎯 2 - Gettings form elements");
    const favoriteQueryInput = screen.getByLabelText("Favorite Query:");
    const submitButton = screen.getByText("Submit!");

    console.log(submitButton);

    console.log("👷 3.1 - Type the expected response");
    await userEvent.type(favoriteQueryInput, expectedResponse);

    console.log("👷 3.2 - Click the submit response");
    await fireEvent.click(screen.getByText("Submit!"));

    console.log(
      "🧪 4.1 - Expect that onSubmitMock is called with the typed response"
    );
    expect(onSubmitMock).toHaveBeenCalledWith(expectedResponse);
  });
});
