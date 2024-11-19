import React from "react";
import { render, screen } from "@testing-library/react";
import DropdownMenu from "./dropDown";

test("renders the DropdownMenu component", () => {
  render(<DropdownMenu />);
  
  // Check if input is rendered with formatted date
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();
});
