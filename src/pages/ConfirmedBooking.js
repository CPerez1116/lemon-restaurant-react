import { Link } from "react-router-dom";

function ConfirmedBooking() {
  return (
    <main className="confirmed-booking">
      <section className="confirmed-booking-card">
        <div className="success-icon">✓</div>

        <h1>Booking Confirmed!</h1>

        <p>
          Thank you for choosing <strong>Little Lemon</strong>.
          <br />
          Your reservation has been successfully confirmed.
        </p>

        <p className="confirmation-note">We look forward to serving you!</p>

        <Link to="/" className="confirmation-btn">
          Return Home
        </Link>
      </section>
    </main>
  );
}

export default ConfirmedBooking;
