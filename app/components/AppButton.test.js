import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import AppButton from "../components/AppButton";

describe("AppButton", () => {
  it("renders correctly with the provided title", () => {
    const { getByText } = render(<AppButton title="Test Button" />);

    // Check if the button text is rendered correctly
    expect(getByText("Test Button")).toBeTruthy();
  });

  it("calls the onPress function when the button is pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <AppButton title="Test Button" onPress={onPressMock} />
    );

    // Simulate pressing the button
    fireEvent.press(getByText("Test Button"));

    // Check if the onPress function is called
    expect(onPressMock).toHaveBeenCalled();
  });
});
