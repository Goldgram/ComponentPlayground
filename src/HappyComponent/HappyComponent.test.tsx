import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HappyComponent } from "./HappyComponent";

test("renders learn react link", () => {
  render(<HappyComponent title="Puppy" />);

  expect(screen.getByText("Title: Puppy")).toBeVisible();
  expect(screen.getByText("Count: 1")).toBeVisible();

  const button = screen.getByRole("button", { name: /Double now/ });
  expect(button).toBeVisible();

  userEvent.click(button);

  expect(screen.getByText("Count: 2")).toBeVisible();

  userEvent.click(button);

  expect(screen.getByText("Count: 4")).toBeVisible();

  userEvent.click(button);

  expect(screen.getByText("Count: 8")).toBeVisible();
});
