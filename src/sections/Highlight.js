import salad from "../images/greek salad.jpg";
import bruchetta from "../images/bruchetta.svg";
import lemonDessert from "../images/lemon dessert.jpg";
import { Link } from "react-router-dom";

function Highlight() {
  return (
    <section className="highlight">
      <div className="highlight-header">
        <h2>This Week's specials!</h2>
        <Link to="/order" className="highlight-link">
          Online menu
        </Link>
      </div>
      {/* cards for weekly specials */}
      <div className="specials-container">
        <article className="card">
          <img src={salad} alt="Greek Salad Bowl" />
          <div className="card-content">
            <div className="card-header">
              <h3>Greek salad</h3>
              <span className="card-price">$12.99</span>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <Link to="/order" className="highlight-link">
              Order a delivery
            </Link>
          </div>
        </article>

        <article className="card">
          <img src={bruchetta} alt="Bruchetta Plate" />
          <div className="card-content">
            <div className="card-header">
              <h3>Bruchetta</h3>
              <span className="card-price">$5.99</span>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <Link to="/order" className="highlight-link">
              Order a delivery
            </Link>
          </div>
        </article>

        <article className="card">
          <img src={lemonDessert} alt="Lemon Dessert" />
          <div className="card-content">
            <div className="card-header">
              <h3>Lemon Dessert</h3>
              <span className="card-price">$5.99</span>
            </div>
            <p>
              This comes straight from grandma's recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <Link to="/order" className="highlight-link">
              Order a delivery
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Highlight;
