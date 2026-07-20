import { render, screen, fireEvent } from "@testing-library/react";
import Reservations from "./pages/Reservations";
import { initializeTimes, updateTimes } from "./App";

// Reusable test props for the Reservations component.
// These prevent errors because Reservations expects these props.
const reservationProps = {
  availableTimes: ["17:00", "18:00", "19:00"],
  dispatch: jest.fn(),
  submitForm: jest.fn(),
};

// Runs before EACH test.
// We replace the real fetchAPI with a predictable fake function.
beforeEach(() => {
  global.fetchAPI = jest.fn(() => [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

// Clears call history between tests.
// This keeps one test from affecting another.
afterEach(() => {
  jest.clearAllMocks();
});

test("Renders the Reservation heading", () => {
  render(<Reservations {...reservationProps} />);

  const headingElement = screen.getByText("Reservations");

  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes returns available times from fetchAPI", () => {
  const result = initializeTimes();

  expect(global.fetchAPI).toHaveBeenCalledTimes(1);

  // Verifies that initializeTimes passed a Date object to fetchAPI.
  expect(global.fetchAPI).toHaveBeenCalledWith(expect.any(Date));

  expect(result).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

test("updateTimes returns available times for the selected date", () => {
  const currentState = ["17:00", "18:00", "19:00"];

  const action = {
    type: "date_changed",
    date: "2026-07-25",
  };

  const result = updateTimes(currentState, action);

  expect(global.fetchAPI).toHaveBeenCalledTimes(1);

  // Verifies that the selected date string was converted into a Date object.
  expect(global.fetchAPI).toHaveBeenCalledWith(expect.any(Date));

  expect(result).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

/* ==================================================
   HTML5 VALIDATION ATTRIBUTE TESTS
================================================== */

test("name input has the correct validation attributes", () => {
  render(<Reservations {...reservationProps} />);

  const nameInput = screen.getByLabelText("Name");

  expect(nameInput).toBeRequired();
  expect(nameInput).toHaveAttribute("type", "text");
  expect(nameInput).toHaveAttribute("minLength", "2");
  expect(nameInput).toHaveAttribute("maxLength", "50");
});

test("email input has the correct validation attributes", () => {
  render(<Reservations {...reservationProps} />);

  const emailInput = screen.getByLabelText("Email");

  expect(emailInput).toBeRequired();
  expect(emailInput).toHaveAttribute("type", "email");
});

test("date input has the correct validation attributes", () => {
  render(<Reservations {...reservationProps} />);

  const dateInput = screen.getByLabelText("Date");
  const today = new Date().toISOString().split("T")[0];

  expect(dateInput).toBeRequired();
  expect(dateInput).toHaveAttribute("type", "date");
  expect(dateInput).toHaveAttribute("min", today);
});

test("time field is required", () => {
  render(<Reservations {...reservationProps} />);

  const timeSelect = screen.getByLabelText("Time");

  expect(timeSelect).toBeRequired();
  expect(timeSelect).toHaveValue("");
});

test("occasion field is required", () => {
  render(<Reservations {...reservationProps} />);

  const occasionSelect = screen.getByLabelText("Occasion");

  expect(occasionSelect).toBeRequired();
  expect(occasionSelect).toHaveValue("");
});

test("guest input has the correct validation attributes", () => {
  render(<Reservations {...reservationProps} />);

  const guestsInput = screen.getByLabelText("Number of Guests");

  expect(guestsInput).toBeRequired();
  expect(guestsInput).toHaveAttribute("type", "number");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "20");
});

/* ==================================================
   REACT / JAVASCRIPT VALIDATION TESTS
================================================== */

test("submit button is disabled when the form is invalid", () => {
  render(<Reservations {...reservationProps} />);

  const submitButton = screen.getByRole("button", {
    name: "Submit",
  });

  // The form starts empty, so it should not be valid yet.
  expect(submitButton).toBeDisabled();
});

test("submit button stays disabled when guests is below the minimum", () => {
  render(<Reservations {...reservationProps} />);

  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 7);

  const formattedDate = futureDate.toISOString().split("T")[0];

  fireEvent.input(screen.getByLabelText("Name"), {
    target: { value: "Christopher Perez" },
  });

  fireEvent.input(screen.getByLabelText("Email"), {
    target: { value: "christopher@example.com" },
  });

  fireEvent.change(screen.getByLabelText("Date"), {
    target: { value: formattedDate },
  });

  fireEvent.change(screen.getByLabelText("Time"), {
    target: { value: "17:00" },
  });

  fireEvent.change(screen.getByLabelText("Occasion"), {
    target: { value: "birthday" },
  });

  // Invalid because the minimum number of guests is 1.
  fireEvent.input(screen.getByLabelText("Number of Guests"), {
    target: { value: "0" },
  });

  expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
});

test("submit button is enabled when all form fields are valid", () => {
  render(<Reservations {...reservationProps} />);

  // Use a future date so this test does not expire later.
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 7);

  const formattedDate = futureDate.toISOString().split("T")[0];

  fireEvent.input(screen.getByLabelText("Name"), {
    target: { value: "Christopher Perez" },
  });

  fireEvent.input(screen.getByLabelText("Email"), {
    target: { value: "christopher@example.com" },
  });

  fireEvent.change(screen.getByLabelText("Date"), {
    target: { value: formattedDate },
  });

  fireEvent.change(screen.getByLabelText("Time"), {
    target: { value: "17:00" },
  });

  fireEvent.change(screen.getByLabelText("Occasion"), {
    target: { value: "birthday" },
  });

  fireEvent.input(screen.getByLabelText("Number of Guests"), {
    target: { value: "4" },
  });

  expect(screen.getByRole("button", { name: "Submit" })).toBeEnabled();
});
