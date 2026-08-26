import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">

      <div className="navbar-container">

        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
        >
          <span className="brand-mark">
            SJ
          </span>

          <span className="brand-name">
            ShreeJi Enterprises
          </span>
        </Link>


        <nav
          className={`desktop-nav ${
            menuOpen ? "mobile-open" : ""
          }`}
        >

          <NavLink
            to="/"
            end
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
          >
            About Us
          </NavLink>

          <NavLink
            to="/services"
            onClick={closeMenu}
          >
            Our Services
          </NavLink>

          <NavLink
            to="/labour-categories"
            onClick={closeMenu}
          >
            Labour Categories
          </NavLink>

          <NavLink
            to="/industries-served"
            onClick={closeMenu}
          >
            Industries Served
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
          >
            Contact Us
          </NavLink>

          <a
            className="mobile-call-button"
            href="tel:+917379433305"
            onClick={closeMenu}
          >
            <span className="material-symbols-outlined">
              call
            </span>

            Call +91 73794 33305
          </a>

        </nav>


        <a
          href="tel:+917379433305"
          className="header-call"
        >
          <span className="material-symbols-outlined">
            call
          </span>

          <span>Call Now</span>
        </a>


        <button
          type="button"
          className={`menu-toggle ${
            menuOpen ? "active" : ""
          }`}
          onClick={() =>
            setMenuOpen((current) => !current)
          }
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

      </div>

    </header>
  );
}

export default Navbar;
