import heroImg from "../images/hero.jpg";

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
          <button className="hero-button">Reserve a Table</button>
        </div>
        <img src={heroImg} alt="Hero Food" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
