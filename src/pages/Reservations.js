function Reservations({ availableTimes = [], dispatch, submitForm }) {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
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

  return (
    <main className="reservation-page">
      <section className="reservation-header">
        <h1>Reservations</h1>
        <p>Book your table online</p>
      </section>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          required
          onChange={(e) =>
            dispatch({ type: "date_changed", date: e.target.value })
          }
        />

        <label htmlFor="time">Time</label>
        <select id="time" name="time" required>
          <option value="">Select a time</option>

          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion">
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

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default Reservations;
