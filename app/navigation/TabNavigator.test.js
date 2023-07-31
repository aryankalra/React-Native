import React from "react";
import { render } from "@testing-library/react-native";
import TabNavigator from "./TabNavigator";

// Mock the createBottomTabNavigator function from @react-navigation/bottom-tabs
jest.mock("@react-navigation/bottom-tabs", () => ({
  createBottomTabNavigator: jest.fn(() => ({
    Navigator: jest.fn(({ children }) => <>{children}</>),
    Screen: jest.fn(),
  })),
}));

// Mock the individual screens, components, or navigators used in TabNavigator
jest.mock("../screens/HomeScreen", () => "MockedHomeScreen");
jest.mock("../screens/MyBooksScreen", () => "MockedMyBooksScreen");
jest.mock("../screens/NewBookScreen", () => "MockedNewBookScreen");
jest.mock("../components/AppIcon", () => "MockedAppIcon");
jest.mock("./HomeNavigator", () => "MockedHomeNavigator");

describe("TabNavigator", () => {
  it("renders without error", () => {
    render(<TabNavigator />);
  });
});
