import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">

        <Link to="/" className="brand">
          <span className="brand-mark">SJ</span>
          <span>ShreeJi Enterprises</span>
        </Link>

        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/labour-categories">
            Labour Categories
          </Link>
          <Link to="/industries">
            Industries Served
          </Link>
          <Link to="/contact">
            Contact Us
          </Link>
        </nav>

        <a
          href="tel:+919876543210"
          className="navbar-call"
        >
          CALL NOW
        </a>

      </div>
    </header>
  );
}

export default Navbar;