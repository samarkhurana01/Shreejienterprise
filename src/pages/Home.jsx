import { Link } from "react-router-dom";
import "./Home.css";

import heroImage from "../assets/hero-construction.jpg";

function Home() {
  const skilledWorkers = [
    {
      icon: "engineering",
      title: "Masons",
      description:
        "Experienced masons for residential, commercial and industrial construction projects.",
    },
    {
      icon: "carpenter",
      title: "Carpenters",
      description:
        "Skilled carpenters for structural, finishing and interior construction requirements.",
    },
    {
      icon: "bolt",
      title: "Electricians",
      description:
        "Qualified electricians for industrial, commercial and construction electrical work.",
    },
    {
      icon: "plumbing",
      title: "Plumbers",
      description:
        "Reliable plumbing workforce for construction, maintenance and facility requirements.",
    },
    {
      icon: "handyman",
      title: "Welders",
      description:
        "Skilled welders for fabrication, structural steel and industrial work.",
    },
    {
      icon: "precision_manufacturing",
      title: "Technicians",
      description:
        "Technical manpower for industrial operations, maintenance and specialized requirements.",
    },
  ];

  const generalWorkers = [
    {
      icon: "construction",
      title: "Construction Workers",
    },
    {
      icon: "inventory_2",
      title: "Warehouse Workers",
    },
    {
      icon: "local_shipping",
      title: "Loading & Unloading",
    },
    {
      icon: "cleaning_services",
      title: "Housekeeping Staff",
    },
    {
      icon: "agriculture",
      title: "General Labour",
    },
    {
      icon: "factory",
      title: "Factory Workers",
    },
    {
      icon: "landscape",
      title: "Site Workers",
    },
    {
      icon: "groups",
      title: "Support Staff",
    },
  ];

  const industries = [
    {
      icon: "construction",
      title: "Construction",
      description:
        "Skilled and unskilled workforce for residential, commercial and large-scale construction projects.",
    },
    {
      icon: "factory",
      title: "Industrial",
      description:
        "Reliable manpower for factories, plants, production units and industrial operations.",
    },
    {
      icon: "warehouse",
      title: "Warehousing",
      description:
        "Workforce for warehouses, logistics, inventory handling, loading and unloading operations.",
    },
    {
      icon: "apartment",
      title: "Infrastructure",
      description:
        "Manpower support for infrastructure development and major civil projects.",
    },
    {
      icon: "business",
      title: "Commercial",
      description:
        "Flexible manpower solutions for commercial establishments and business facilities.",
    },
    {
      icon: "settings",
      title: "Facility Operations",
      description:
        "Support workforce for maintenance, housekeeping and day-to-day facility operations.",
    },
  ];

  const benefits = [
    {
      icon: "verified",
      title: "Reliable Workforce",
      description:
        "Dependable manpower selected according to project requirements.",
    },
    {
      icon: "groups",
      title: "Skilled & Unskilled",
      description:
        "Wide range of workforce categories for different industries.",
    },
    {
      icon: "schedule",
      title: "Timely Deployment",
      description:
        "Fast manpower deployment to help keep your projects on schedule.",
    },
    {
      icon: "business_center",
      title: "Industry Experience",
      description:
        "Workforce solutions designed around practical site requirements.",
    },
  ];

  const areas = [
    "Noida",
    "Greater Noida",
    "Delhi NCR",
    "Gurgaon",
    "Ghaziabad",
    "Faridabad",
    "Jewar",
    "Dadri",
  ];

  return (
    <div className="home">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="hero"
        style={{
          "--hero-image": `url("${heroImage}")`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-inner">
          <div className="hero-content">

            <div className="hero-badge">
              <span className="material-symbols-outlined">
                verified
              </span>

              <span>
                Trusted Manpower Supply Partner
              </span>
            </div>

            <h1>
              Skilled &amp; Unskilled Manpower
              <br />
              for Every Industry
            </h1>

            <p>
              Reliable workforce solutions for industrial,
              commercial, construction, warehousing and
              infrastructure requirements.
            </p>

            <div className="hero-buttons">

              <Link
                to="/contact"
                className="button button-orange"
              >
                <span>Get Manpower</span>

                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </Link>

              <a
                href="tel:+917379433305"
                className="button button-outline"
              >
                <span className="material-symbols-outlined">
                  call
                </span>

                <span>Contact Us</span>
              </a>

            </div>

            <div className="hero-services">
              <span>Skilled Workforce</span>
              <span>Unskilled Workforce</span>
              <span>All Sectors</span>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="intro-section">
        <div className="container">

          <div className="intro-grid">

            <div className="intro-content">

              <span className="eyebrow">
                SHREEJI ENTERPRISES
              </span>

              <h2>
                Manpower You Can Depend On
              </h2>

              <div className="orange-line"></div>

              <p>
                ShreeJi Enterprises provides dependable skilled
                and unskilled manpower for construction,
                industrial, commercial, warehousing and
                infrastructure requirements. We help businesses
                find the right workforce for their operational
                and project needs.
              </p>

            </div>

            <div className="stats-grid">

              <div className="stat-card">
                <strong>Skilled</strong>
                <span>Workforce</span>
              </div>

              <div className="stat-card">
                <strong>Unskilled</strong>
                <span>Workforce</span>
              </div>

              <div className="stat-card">
                <strong>Multiple</strong>
                <span>Industries</span>
              </div>

              <div className="stat-card">
                <strong>Flexible</strong>
                <span>Deployment</span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SKILLED WORKFORCE
      ===================================================== */}

      <section className="section skilled-section">
        <div className="container">

          <div className="section-heading">

            <span className="eyebrow">
              SKILLED MANPOWER
            </span>

            <h2>
              Skilled Workforce Categories
            </h2>

            <div className="orange-line center-line"></div>

            <p>
              Experienced workers and technical professionals
              for specialized project and operational
              requirements.
            </p>

          </div>

          <div className="skilled-grid">

            {skilledWorkers.map((worker) => (
              <article
                className="skilled-card"
                key={worker.title}
              >

                <div className="service-icon">
                  <span className="material-symbols-outlined">
                    {worker.icon}
                  </span>
                </div>

                <div className="service-card-content">

                  <h3>
                    {worker.title}
                  </h3>

                  <p>
                    {worker.description}
                  </p>

                </div>

                <Link to="/labour-categories">
                  View Category

                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </Link>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          GENERAL / UNSKILLED
      ===================================================== */}

      <section className="section general-section">
        <div className="container">

          <div className="general-header">

            <div>

              <span className="eyebrow">
                GENERAL MANPOWER
              </span>

              <h2>
                Unskilled &amp; Support Workforce
              </h2>

              <div className="orange-line"></div>

            </div>

            <p>
              Flexible workforce for site operations,
              logistics, warehousing, support services and
              general labour requirements.
            </p>

          </div>

          <div className="general-grid">

            {generalWorkers.map((worker) => (
              <article
                className="general-card"
                key={worker.title}
              >

                <div className="general-icon">
                  <span className="material-symbols-outlined">
                    {worker.icon}
                  </span>
                </div>

                <h3>
                  {worker.title}
                </h3>

              </article>
            ))}

          </div>

          <div className="general-cta">

            <div>
              <strong>
                Need manpower for your project?
              </strong>

              <span>
                Tell us your requirement and workforce needs.
              </span>
            </div>

            <Link
              to="/contact"
              className="button button-orange"
            >
              Request Manpower

              <span className="material-symbols-outlined">
                arrow_forward
              </span>
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="section industries-section">
        <div className="container">

          <div className="section-heading">

            <span className="eyebrow">
              INDUSTRIES WE SERVE
            </span>

            <h2>
              Manpower Across Multiple Industries
            </h2>

            <div className="orange-line center-line"></div>

            <p>
              Workforce solutions for businesses and projects
              across construction, industrial, commercial,
              infrastructure and logistics sectors.
            </p>

          </div>

          <div className="industries-grid">

            {industries.map((industry) => (
              <article
                className="industry-card"
                key={industry.title}
              >

                <div className="industry-icon">
                  <span className="material-symbols-outlined">
                    {industry.icon}
                  </span>
                </div>

                <h3>
                  {industry.title}
                </h3>

                <p>
                  {industry.description}
                </p>

                <Link to="/industries-served">
                  Explore Industry

                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </Link>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY SHREEJI
      ===================================================== */}

      <section className="section why-section">
        <div className="container">

          <div className="why-grid">

            <div className="why-image">

              <img
                src={heroImage}
                alt="ShreeJi Enterprises manpower workforce"
              />

              <div className="image-label">

                <span className="material-symbols-outlined">
                  verified
                </span>

                <span>
                  Trusted Workforce Solutions
                </span>

              </div>

            </div>

            <div className="why-content">

              <span className="eyebrow">
                WHY SHREEJI ENTERPRISES
              </span>

              <h2>
                A Workforce Partner Built Around Your Requirements
              </h2>

              <div className="orange-line"></div>

              <p>
                From individual skilled workers to larger
                workforce requirements, we focus on providing
                practical manpower solutions that fit your
                project, site and operational needs.
              </p>

              <div className="benefits-grid">

                {benefits.map((benefit) => (
                  <div
                    className="benefit"
                    key={benefit.title}
                  >

                    <div className="benefit-icon">
                      <span className="material-symbols-outlined">
                        {benefit.icon}
                      </span>
                    </div>

                    <div>

                      <h3>
                        {benefit.title}
                      </h3>

                      <p>
                        {benefit.description}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICE AREAS
      ===================================================== */}

      <section className="section areas-section">
        <div className="container">

          <div className="areas-inner">

            <div className="areas-content">

              <span className="eyebrow">
                SERVICE AREAS
              </span>

              <h2>
                Manpower Supply Across North India
              </h2>

              <div className="orange-line"></div>

              <p>
                We support projects and businesses with
                manpower requirements across Noida, Greater
                Noida, Delhi NCR and surrounding regions.
              </p>

              <div className="areas-list">

                {areas.map((area) => (
                  <span
                    className="area-tag"
                    key={area}
                  >
                    <span className="material-symbols-outlined">
                      location_on
                    </span>

                    {area}
                  </span>
                ))}

              </div>

            </div>


            {/* =================================================
                DELHI NCR MAP
            ================================================= */}

            <div className="areas-map">

              <iframe
                title="Delhi NCR Map"
                src="https://www.google.com/maps?q=Dahiya+Complex,+B-12,+near+Shree+Makhan+Bhog,+Kundli,+Sonipat,+Haryana+131028,+India&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="map-overlay">

                <span className="material-symbols-outlined">
                  location_on
                </span>

                <div>
                  <strong>
                    Delhi NCR
                  </strong>

                  <span>
                    Serving manpower requirements across
                    Delhi, Noida, Greater Noida, Gurgaon,
                    Ghaziabad &amp; Faridabad.
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="contact-cta">
        <div className="container">

          <div className="cta-inner">

            <div className="cta-content">

              <span className="eyebrow eyebrow-light">
                GET IN TOUCH
              </span>

              <h2>
                Looking for Reliable Manpower?
              </h2>

              <p>
                Share your workforce requirement with
                ShreeJi Enterprises and let us help you find
                the right manpower for your project.
              </p>

            </div>

            <div className="cta-actions">

              <Link
                to="/contact"
                className="button button-orange"
              >
                Get Manpower

                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </Link>

              <a
                href="mailto:shivank152p@gmail.com"
                className="cta-email"
              >
                <span className="material-symbols-outlined">
                  mail
                </span>

                shivank152p@gmail.com
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHATSAPP
      ===================================================== */}

      <a
        href="https://wa.me/917379433305"
        className="whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact ShreeJi Enterprises on WhatsApp"
      >
        <span className="material-symbols-outlined">
          chat
        </span>
      </a>

    </div>
  );
}

export default Home;