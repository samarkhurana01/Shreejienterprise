import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-inner">

        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            <span className="footer-logo-mark">
              SJ
            </span>

            <span>
              ShreeJi Enterprises
            </span>
          </Link>

          <p>
            Trusted labour contractor and manpower supply
            partner for construction, industrial and
            infrastructure projects across North India.
          </p>

          <a
            href="tel:+919876543210"
            className="footer-phone"
          >
            <span className="material-symbols-outlined">
              phone
            </span>

            +91 98765 43210
          </a>

        </div>

        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/services">
            Our Services
          </Link>

          <Link to="/contact">
            Contact Us
          </Link>

        </div>

        <div className="footer-column">

          <h3>Labour Categories</h3>

          <Link to="/labour-categories">
            Mason
          </Link>

          <Link to="/labour-categories">
            Carpenter
          </Link>

          <Link to="/labour-categories">
            Electrician
          </Link>

          <Link to="/labour-categories">
            Welder
          </Link>

        </div>

        <div className="footer-column">

          <h3>Service Areas</h3>

          <span>Noida &amp; Greater Noida</span>
          <span>Delhi NCR</span>
          <span>Gurgaon</span>
          <span>Ghaziabad</span>
          <span>Faridabad</span>

        </div>

      </div>

      <div className="footer-bottom">

        <div className="footer-bottom-inner">

          <span>
            © 2026 ShreeJi Enterprises. All rights reserved.
          </span>

          <span>
            Labour Contractor &amp; Manpower Supply Services
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;