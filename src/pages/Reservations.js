import { useState } from "react";

function Reservations({ availableTimes = [], dispatch, submitForm }) {
  const [isFormValid, setIsFormValid] = useState(false);

  // Runs whenever the user types, selects a value, or changes a field.
  function checkFormValidity(e) {
    const form = e.currentTarget;

    // checkValidity() returns true when every HTML5 rule passes.
    setIsFormValid(form.checkValidity());
  }

  function handleDateChange(e) {
    dispatch({
      type: "date_changed",
      date: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;

    // Prevent submission if any HTML5 validation rule fails.
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);

    const bookingData = {
      name: formData.get("name"),
      email: formData.get("email"),
      date: formData.get("date"),
      time: formData.get("time"),
      occasion: formData.get("occasion"),
      guests: Number(formData.get("guests")),
    };

    submitForm(bookingData);
  }

  // Prevent reservations for dates before today.
  const today = new Date().toISOString().split("T")[0];

  return (
    <main className="reservation-page">
      <section className="reservation-header" aria-label="Reservation Header">
        <h1>Reservations</h1>
        <p>Book your table online</p>
      </section>

      <form
        className="reservation-form"
        aria-label="Reservation Form"
        onSubmit={handleSubmit}
        onChange={checkFormValidity}
        onInput={checkFormValidity}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          minLength="2"
          maxLength="50"
          required
        />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          min={today}
          onChange={handleDateChange}
          required
        />

        <label htmlFor="time">Time</label>
        <select id="time" name="time" required>
          <option value="">Select a time</option>

          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion" required>
          <option value="">Select an occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="date-night">Date Night</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="20"
          required
        />

        <button type="submit" aria-label="On Click" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </main>
  );
}

export default Reservations;
