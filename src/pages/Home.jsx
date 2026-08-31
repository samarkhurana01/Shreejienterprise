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
      title: "Loading & Unloading Workers",
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
        "Skilled and unskilled workforce for residential, commercial and large-scale construction projects in Kundli and Sonipat.",
    },
    {
      icon: "factory",
      title: "Industrial",
      description:
        "Reliable industrial manpower for factories, plants, production units and manufacturing operations in Kundli and Sonipat.",
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
        "Manpower support for infrastructure development, civil works and major projects.",
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
    "Kundli",
    "Sonipat",
    "Delhi NCR",
    "Noida",
    "Greater Noida",
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
        aria-labelledby="home-hero-title"
      >
        <div className="hero-background" />

        <div className="hero-overlay" />

        <div className="hero-inner">
          <div className="hero-content">

            <div className="hero-badge">
              <span
                className="material-symbols-outlined"
                aria-hidden="true"
              >
                verified
              </span>

              <span>
                Manpower & Labour Contractor in Kundli, Sonipat
              </span>
            </div>

            <h1 id="home-hero-title">
              Manpower & Labour Contractor in Kundli, Sonipat
            </h1>

            <p>
              ShreeJi Enterprises is a manpower and labour contractor
              in Kundli, Sonipat, providing reliable skilled,
              semi-skilled and unskilled workforce for industrial,
              commercial, construction, warehousing and infrastructure
              requirements.
            </p>

            <div className="hero-buttons">

              <Link
                to="/contact"
                className="button button-orange"
                aria-label="Request manpower from ShreeJi Enterprises"
              >
                <span>Get Manpower</span>

                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </Link>

              <a
                href="tel:+917379433305"
                className="button button-outline"
                aria-label="Call ShreeJi Enterprises"
              >
                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                >
                  call
                </span>

                <span>Contact Us</span>
              </a>

            </div>

            <div className="hero-services">
              <span>Skilled Workforce</span>
              <span>Unskilled Workforce</span>
              <span>Manpower Contractor</span>
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
                Reliable Manpower Contractor in Kundli, Sonipat
              </h2>

              <div className="orange-line" />

              <p>
                ShreeJi Enterprises provides dependable skilled,
                semi-skilled and unskilled manpower for construction,
                industrial, commercial, warehousing and infrastructure
                requirements. Based in Kundli, Sonipat, we provide
                practical workforce and labour contractor solutions
                for businesses, factories, warehouses and projects
                across the local area and nearby Delhi NCR locations.
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

      <section
        className="section skilled-section"
        aria-labelledby="skilled-heading"
      >
        <div className="container">

          <div className="section-heading">

            <span className="eyebrow">
              SKILLED MANPOWER
            </span>

            <h2 id="skilled-heading">
              Skilled Manpower & Labour Categories in Kundli
            </h2>

            <div className="orange-line center-line" />

            <p>
              Experienced workers and technical professionals for
              specialized construction, industrial and operational
              requirements in Kundli, Sonipat and nearby areas.
            </p>

          </div>

          <div className="skilled-grid">

            {skilledWorkers.map((worker) => (
              <article
                className="skilled-card"
                key={worker.title}
              >

                <div className="service-icon">
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
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

                <Link
                  to="/labour-categories"
                  aria-label={`View ${worker.title} manpower category`}
                >
                  View Category

                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
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

      <section
        className="section general-section"
        aria-labelledby="general-heading"
      >
        <div className="container">

          <div className="general-header">

            <div>

              <span className="eyebrow">
                GENERAL MANPOWER
              </span>

              <h2 id="general-heading">
                Unskilled & Support Workforce in Kundli
              </h2>

              <div className="orange-line" />

            </div>

            <p>
              Flexible workforce for construction sites, factories,
              logistics, warehouses, support services and general
              labour requirements across Kundli and Sonipat.
            </p>

          </div>

          <div className="general-grid">

            {generalWorkers.map((worker) => (
              <article
                className="general-card"
                key={worker.title}
              >

                <div className="general-icon">
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
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
                Tell us your workforce requirement in Kundli or Sonipat.
              </span>

            </div>

            <Link
              to="/contact"
              className="button button-orange"
            >
              Request Manpower

              <span
                className="material-symbols-outlined"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section
        className="section industries-section"
        aria-labelledby="industries-heading"
      >
        <div className="container">

          <div className="section-heading">

            <span className="eyebrow">
              INDUSTRIES WE SERVE
            </span>

            <h2 id="industries-heading">
              Industrial & Commercial Manpower Supply in Kundli
            </h2>

            <div className="orange-line center-line" />

            <p>
              Workforce solutions for construction, factories,
              manufacturing, infrastructure, warehousing, logistics
              and commercial operations in Kundli and Sonipat.
            </p>

          </div>

          <div className="industries-grid">

            {industries.map((industry) => (
              <article
                className="industry-card"
                key={industry.title}
              >

                <div className="industry-icon">
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    {industry.icon}
                  </span>
                </div>

                <h3>
                  {industry.title}
                </h3>

                <p>
                  {industry.description}
                </p>

                <Link
                  to="/industries-served"
                  aria-label={`Explore ${industry.title} manpower services`}
                >
                  Explore Industry

                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
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

      <section
        className="section why-section"
        aria-labelledby="why-heading"
      >
        <div className="container">

          <div className="why-grid">

            <div className="why-image">

              <img
                src={heroImage}
                alt="Manpower workforce working on a construction and industrial project in Kundli"
                loading="lazy"
              />

              <div className="image-label">

                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                >
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

              <h2 id="why-heading">
                A Reliable Workforce Partner in Kundli & Sonipat
              </h2>

              <div className="orange-line" />

              <p>
                From individual skilled workers to larger workforce
                requirements, ShreeJi Enterprises focuses on practical
                manpower solutions that fit your project, site and
                operational needs. We serve businesses looking for
                manpower supply and labour contractor services in
                Kundli, Sonipat and nearby industrial areas.
              </p>

              <div className="benefits-grid">

                {benefits.map((benefit) => (
                  <div
                    className="benefit"
                    key={benefit.title}
                  >

                    <div className="benefit-icon">
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
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

      <section
        className="section areas-section"
        aria-labelledby="areas-heading"
      >
        <div className="container">

          <div className="areas-inner">

            <div className="areas-content">

              <span className="eyebrow">
                SERVICE AREAS
              </span>

              <h2 id="areas-heading">
                Manpower Supply in Kundli & Sonipat
              </h2>

              <div className="orange-line" />

              <p>
                ShreeJi Enterprises is based in Kundli, Sonipat and
                provides manpower supply and labour contractor services
                for businesses, factories, warehouses and projects
                across Kundli, Sonipat and nearby industrial areas.
              </p>

              <div className="areas-list">

                {areas.map((area) => (
                  <span
                    className="area-tag"
                    key={area}
                  >
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      location_on
                    </span>

                    {area}
                  </span>
                ))}

              </div>

            </div>


            {/* =================================================
                LOCATION MAP
            ================================================= */}

            <div className="areas-map">

              <iframe
                title="ShreeJi Enterprises manpower contractor location in Kundli, Sonipat, Haryana"
                src="https://www.google.com/maps?q=Dahiya+Complex,+B-12,+near+Shree+Makhan+Bhog,+Kundli,+Sonipat,+Haryana+131028,+India&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="map-overlay">

                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                >
                  location_on
                </span>

                <div>

                  <strong>
                    Kundli, Sonipat
                  </strong>

                  <span>
                    Dahiya Complex, B-12, Near Shree Makhan Bhog,
                    Kundli, Sonipat, Haryana 131028.
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

      <section
        className="contact-cta"
        aria-labelledby="cta-heading"
      >
        <div className="container">

          <div className="cta-inner">

            <div className="cta-content">

              <span className="eyebrow eyebrow-light">
                GET IN TOUCH
              </span>

              <h2 id="cta-heading">
                Looking for a Manpower Contractor in Kundli?
              </h2>

              <p>
                Share your workforce requirement with ShreeJi
                Enterprises and let us help you find the right
                skilled, semi-skilled or unskilled manpower for
                your project in Kundli or Sonipat.
              </p>

            </div>

            <div className="cta-actions">

              <Link
                to="/contact"
                className="button button-orange"
              >
                Get Manpower

                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </Link>

              <a
                href="mailto:shivank152p@gmail.com"
                className="cta-email"
              >
                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                >
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
        <span
          className="material-symbols-outlined"
          aria-hidden="true"
        >
          chat
        </span>
      </a>

    </div>
  );
}

export default Home;
