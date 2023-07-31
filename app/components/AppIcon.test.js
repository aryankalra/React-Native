import React from "react";
import { render } from "@testing-library/react-native";
import AppIcon from "./AppIcon";

describe("AppIcon", () => {
  it("renders without error", () => {
    render(<AppIcon name="book" />);
  });
});
