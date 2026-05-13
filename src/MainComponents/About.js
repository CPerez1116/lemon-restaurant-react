import mario from "../images/Mario and Adrian A.jpg";

function About() {
  return (
    <section className="about">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          At Little Lemon, we are passionate about bringing fresh, authentic
          Mediterranean flavors to our community. Inspired by traditional family
          recipes and modern culinary techniques, our restaurant blends vibrant
          ingredients with a warm, welcoming atmosphere. Whether you’re joining
          us for a casual meal or a special occasion, we strive to deliver
          exceptional service and unforgettable dining experiences. Every dish
          is crafted with care, using high-quality ingredients to ensure bold
          flavors in every bite.
        </p>
      </div>
      <img src={mario} alt="picture of owners" />
    </section>
  );
}

export default About;
