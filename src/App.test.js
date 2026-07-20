import { render, screen } from "@testing-library/react";
import Reservations from "./pages/Reservations";
import { initializeTimes, updateTimes } from "./App";

// Runs before EACH test.
// We "mock" fetchAPI so our tests don't rely on the real API.
// Instead, whenever initializeTimes() or updateTimes() calls fetchAPI,
// it will return this predictable list of times.
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

// Clears the mock between tests.
// Prevents one test from affecting another.
afterEach(() => {
  jest.clearAllMocks();
});

test("Renders the Reservation heading", () => {
  // Render the Reservations component just like React would.
  render(
    <Reservations
      availableTimes={[]}
      dispatch={jest.fn()}
      submitForm={jest.fn()}
    />,
  );

  // Look for the text "Reservations" on the page.
  const headingElement = screen.getByText("Reservations");

  // Verify the heading exists.
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes returns available times from fetchAPI", () => {
  // Call the function we're testing.
  const result = initializeTimes();

  // Verify fetchAPI was actually called.
  expect(global.fetchAPI).toHaveBeenCalledTimes(1);

  // expect.any(Date) means:
  // "I don't care which Date object was used,
  // only that it WAS a Date object."
  expect(global.fetchAPI).toHaveBeenCalledWith(expect.any(Date));

  // Verify initializeTimes returned exactly what fetchAPI returned.
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
  // Current state before selecting a new date.
  const currentState = ["17:00", "18:00", "19:00"];

  // Simulate the action sent by dispatch()
  // when the user changes the reservation date.
  const action = {
    type: "date_changed",
    date: "2026-07-25",
  };

  // Run the reducer.
  const result = updateTimes(currentState, action);

  // Verify fetchAPI was called.
  expect(global.fetchAPI).toHaveBeenCalledTimes(1);

  // Verify updateTimes converted the selected date
  // into a Date object before sending it to fetchAPI.
  expect(global.fetchAPI).toHaveBeenCalledWith(expect.any(Date));

  // Verify the reducer returned the new available times.
  expect(result).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});
