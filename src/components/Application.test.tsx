import { render, screen } from "@testing-library/react";
import { Application } from "./Application";
import userEvent from "@testing-library/user-event";

test("renders component", () => {
  render(<Application />);
  const countElement = screen.getByRole("heading");
  expect(countElement).toBeInTheDocument();
  const incrementButton = screen.getByRole("button", {
    name: "Increment",
  });
  expect(incrementButton).toBeInTheDocument();
});

test("renders a count of 0", () => {
  render(<Application />);
  const countEle = screen.getByRole("heading");
  expect(countEle).toHaveTextContent("0");
});

test("renders a count of 1 after clicking the button", async () => {
  render(<Application />);
  const incrementButton = screen.getByRole("button", {
    name: "Increment",
  });
  await userEvent.click(incrementButton);
  const countEle = screen.getByRole("heading");
  expect(countEle).toHaveTextContent("1");
});

test("renders a count of 10 after clicking the button", async () => {
  render(<Application />);
  const amountInput = screen.getByRole("spinbutton");
  await userEvent.type(amountInput, "10");

  expect(amountInput).toHaveValue(10);
  const setButton = screen.getByRole("button", {
    name: "Set",
  });
  await userEvent.click(setButton);
  const countEle = screen.getByRole("heading");
  expect(countEle).toHaveTextContent("10");
});

test("renders focus while clicking tab button", async () => {
  render(<Application />);
  const amountInput = screen.getByRole("spinbutton");
  const incrementButton = screen.getByRole("button", { name: "Increment" });
  const setButton = screen.getByRole("button", { name: "Set" });
  await userEvent.tab();
  expect(incrementButton).toHaveFocus();
  await userEvent.tab();
  expect(amountInput).toHaveFocus();
  await userEvent.tab();
  expect(setButton).not.toHaveFocus();
});
