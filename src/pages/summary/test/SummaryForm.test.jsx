import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe("Test SummaryForm", () => {
  beforeEach(() => {
    render(<SummaryForm />);
  });

  test("initial conditions", () => {
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });

    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });

    expect(confirmButton).toBeDisabled();
  });

  test("Checkbox disables button on first click and enables on second click", () => {
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });

    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });

    fireEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    fireEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
  });
});
