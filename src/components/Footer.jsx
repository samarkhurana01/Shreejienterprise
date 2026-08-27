import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-inner">

        {/* BRAND */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo">

            <img
              src={logo}
              alt="ShreeJi Enterprises"
              className="footer-logo-image"
            />

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
            href="tel:+917379433305"
            className="footer-phone"
          >
            <span className="material-symbols-outlined">
              phone
            </span>

            +91 73794 33305
          </a>
          <a
            href="tel:+917379433305"
            className="footer-phone"
          >
            <span className="material-symbols-outlined">
              phone
            </span>

            +91 95697 17055
          </a>
          <a
            href="mailto:shivank152@gmail.com"
            className="footer-phone"
          >
            <span className="material-symbols-outlined">
              email
            </span>

            shivank152@gmail.com
          </a>

        </div>


        {/* QUICK LINKS */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/services">
            Our Services
          </Link>

          <Link to="/labour-categories">
            Labour Categories
          </Link>

          <Link to="/industries-served">
            Industries Served
          </Link>

          <Link to="/contact">
            Contact Us
          </Link>

        </div>


        {/* LABOUR CATEGORIES */}
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

          <Link to="/labour-categories">
            Plumber
          </Link>

          <Link to="/labour-categories">
            Helper / Unskilled
          </Link>

        </div>


        {/* SERVICE AREAS */}
        <div className="footer-column">

          <h3>Service Areas</h3>

          <span>
            Noida &amp; Greater Noida
          </span>

          <span>
            Delhi NCR
          </span>

          <span>
            Gurgaon
          </span>

          <span>
            Ghaziabad
          </span>

          <span>
            Faridabad
          </span>

          <span>
            Nearby NCR Areas
          </span>

        </div>

      </div>


      {/* BOTTOM */}
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