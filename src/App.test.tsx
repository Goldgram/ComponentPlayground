import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders hello app", () => {
  render(<App />);
  const appText = screen.getByText(/Hello App/i);
  expect(appText).toBeInTheDocument();
});
