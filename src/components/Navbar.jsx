import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../assets/logo.png";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="navbar-container">

        {/* BRAND */}
        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
        >
          <img
             src={logo}
            alt="ShreeJi Enterprises"
            className="brand-logo"
          />

          <span className="brand-name">
            ShreeJi Enterprises
          </span>
        </Link>

        {/* NAVIGATION */}
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

          {/* MOBILE CALL */}
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

        {/* DESKTOP CALL */}
        <a
          href="tel:+917379433305"
          className="header-call"
        >
          <span className="material-symbols-outlined">
            call
          </span>

          <span>Call Now</span>
        </a>

        {/* MOBILE MENU */}
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