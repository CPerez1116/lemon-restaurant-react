import cust1 from "../images/customer1.jpg";
import cust2 from "../images/customer2.jpg";
import cust3 from "../images/customer5.jpg";
import StarRating from "./StarRating";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>

      <div className="testimonial-container">
        {/* customer 1 */}
        <article className="testimonial-card">
          <img src={cust1} alt="Customer" />
          <h4>John Doe</h4>
          <StarRating value={5} />
          <p>Great service!</p>
        </article>

        {/* customer 2 */}
        <article className="testimonial-card">
          <img src={cust2} alt="Customer" />
          <h4>Jane Smith</h4>
          <StarRating value={4} />
          <p>Excellent food and friendly staff.</p>
        </article>

        {/* customer 3 */}
        <article className="testimonial-card">
          <img src={cust3} alt="Customer" />
          <h4>John Smith</h4>
          <StarRating value={5} />
          <p>Great enviroment, love the food!</p>
        </article>
      </div>
    </section>
  );
}

export default Testimonials;
