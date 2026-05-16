import LogoF from "../images/LLfooter.png";

function Footer() {
  return (
    <footer>
      <img src={LogoF} alt="Footer Logo" />
      {/* column 1 */}
      <section className="footer-column">
        <h3>Doormat Navigation</h3>
        <ul className="footer-list">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order">Order Online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </section>
      {/* column 2 */}
      <section className="footer-column">
        <h3>Contact</h3>
        <ul className="footer-list">
          <li>Address: 123 Main Street, Anytown, USA</li>
          <li>Phone: (123) 456-7890</li>
          <li>Email: info@doormat.com</li>
        </ul>
      </section>
      {/* column 3 */}
      <section className="footer-column">
        <h3>Social Media Links</h3>
        <ul className="footer-list">
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
