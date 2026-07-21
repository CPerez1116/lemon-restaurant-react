import heroImg from "../images/hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Experience the best Mediterranean cuisine in Chicago at Little Lemon
            restaurant, where tradition meets innovation!
          </p>
          <Link to="/reservations" className="hero-button">
            Reserve a Table
          </Link>
        </div>
        <img src={heroImg} alt="Hero Food" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
