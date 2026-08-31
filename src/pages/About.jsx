import { Link } from "react-router-dom";
import "./About.css";

const skilledServices = [
  {
    icon: "precision_manufacturing",
    title: "Machine Operators",
    text: "Workforce for machinery, production and industrial operations in Kundli and Sonipat.",
  },
  {
    icon: "electrical_services",
    title: "Electricians",
    text: "Skilled electrical manpower for commercial, construction and industrial requirements.",
  },
  {
    icon: "construction",
    title: "Welders",
    text: "Experienced manpower for welding, fabrication and industrial site operations.",
  },
  {
    icon: "engineering",
    title: "Fitters & Technicians",
    text: "Technical workforce for equipment, maintenance and industrial operational needs.",
  },
];

const generalServices = [
  {
    icon: "local_shipping",
    title: "Loading & Unloading",
  },
  {
    icon: "inventory_2",
    title: "Packing & Sorting",
  },
  {
    icon: "cleaning_services",
    title: "Housekeeping",
  },
  {
    icon: "yard",
    title: "Horticulture",
  },
];

const industries = [
  "Manufacturing",
  "Warehousing & Logistics",
  "Construction",
  "Infrastructure",
  "Commercial Operations",
  "Facility Operations",
];

const process = [
  {
    number: "01",
    icon: "search",
    title: "Understand",
    text: "We understand your workforce requirement, work environment and operational needs.",
  },
  {
    number: "02",
    icon: "groups",
    title: "Identify",
    text: "We identify the appropriate skilled or general manpower according to the requirement.",
  },
  {
    number: "03",
    icon: "person_add",
    title: "Deploy",
    text: "The required workforce is arranged for the specified project or operational requirement.",
  },
  {
    number: "04",
    icon: "support_agent",
    title: "Support",
    text: "We remain available to support changing workforce requirements and operational needs.",
  },
];

const reasons = [
  {
    icon: "verified",
    title: "Skilled & Unskilled",
    text: "One manpower partner for both technical and general workforce requirements.",
  },
  {
    icon: "category",
    title: "Multiple Services",
    text: "From machine operators to packing, sorting, housekeeping and horticulture.",
  },
  {
    icon: "business",
    title: "Multiple Sectors",
    text: "Workforce solutions for industrial, commercial, construction and operational needs.",
  },
  {
    icon: "speed",
    title: "Flexible Requirements",
    text: "Manpower solutions can be aligned with your project and operational requirements.",
  },
];

function About() {
  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="about-hero"
        aria-labelledby="about-hero-title"
      >

        <div className="about-hero-background" />

        <div className="about-hero-overlay" />

        <div className="container about-hero-inner">

          <div className="about-hero-content">

            <span className="about-hero-label">
              ABOUT SHREEJI ENTERPRISES
            </span>

            <h1 id="about-hero-title">
              Manpower Contractor
              <span> in Kundli, Sonipat</span>
            </h1>

            <p>
              ShreeJi Enterprises provides skilled, semi-skilled
              and unskilled manpower solutions for industrial,
              commercial, construction, warehousing and operational
              requirements in Kundli, Sonipat and nearby areas.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <section className="about-introduction">

        <div className="container">

          <div className="about-intro-grid">

            {/* CONTENT */}

            <div className="about-intro-content">

              <span className="eyebrow">
                WHO WE ARE
              </span>

              <h2>
                A Manpower Partner
                Built Around Your Needs
              </h2>

              <div className="orange-line" />

              <p>
                ShreeJi Enterprises is a manpower and labour
                contractor based in Kundli, Sonipat, providing
                workforce solutions for businesses, factories,
                construction projects, warehouses and commercial
                operations.
              </p>

              <p>
                Our manpower services cover skilled workforce
                requirements such as machine operators, electricians,
                welders, fitters and technicians, along with general
                and unskilled workforce for loading, unloading,
                packing, sorting, housekeeping and horticulture.
              </p>

              <p>
                We work with businesses that need dependable
                manpower support in Kundli and Sonipat, with
                workforce solutions that can also support nearby
                industrial and commercial areas.
              </p>

            </div>


            {/* IMAGE 1 */}

            <div className="about-intro-image">

              <img
                src="/images/workforce.png"
                alt="Workforce providing manpower support for industrial operations in Kundli, Sonipat"
                loading="lazy"
              />

              <div className="intro-image-card">

                <div className="intro-image-card-icon">
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    groups
                  </span>
                </div>

                <div>
                  <strong>
                    Skilled &amp; Unskilled
                  </strong>

                  <span>
                    Manpower Solutions in Kundli
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT WE PROVIDE
      ===================================================== */}

      <section
        className="provide-section"
        aria-labelledby="provide-heading"
      >

        <div className="container">

          <div className="section-heading">

            <span className="eyebrow">
              WHAT WE PROVIDE
            </span>

            <h2 id="provide-heading">
              Skilled &amp; Unskilled Manpower in Kundli
            </h2>

            <div className="orange-line center-line" />

            <p>
              Our manpower supply services cover skilled,
              technical, general and operational workforce
              requirements for businesses in Kundli, Sonipat
              and nearby areas.
            </p>

          </div>


          <div className="provide-grid">

            {/* SKILLED */}

            <div className="provide-column">

              <div className="provide-header">

                <div className="provide-header-icon">
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    engineering
                  </span>
                </div>

                <div>
                  <span>01</span>

                  <h3>
                    Skilled Manpower
                  </h3>
                </div>

              </div>

              <p className="provide-description">
                Skilled workforce for technical, machinery,
                maintenance and industrial project requirements
                in Kundli and Sonipat.
              </p>

              <div className="provide-list">

                {skilledServices.map((service) => (
                  <div
                    className="provide-item"
                    key={service.title}
                  >

                    <div className="provide-item-icon">

                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        {service.icon}
                      </span>

                    </div>

                    <div>

                      <h4>
                        {service.title}
                      </h4>

                      <p>
                        {service.text}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </div>


            {/* GENERAL */}

            <div className="provide-column general-column">

              <div className="provide-header">

                <div className="provide-header-icon orange-icon">

                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    groups
                  </span>

                </div>

                <div>

                  <span>02</span>

                  <h3>
                    General &amp; Unskilled
                  </h3>

                </div>

              </div>

              <p className="provide-description">
                General workforce for logistics, warehouse,
                facility, construction site and day-to-day
                operational requirements.
              </p>

              <div className="general-service-grid">

                {generalServices.map((service) => (
                  <div
                    className="general-service"
                    key={service.title}
                  >

                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      {service.icon}
                    </span>

                    <strong>
                      {service.title}
                    </strong>

                  </div>
                ))}

              </div>

              <div className="general-note">

                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                >
                  check_circle
                </span>

                <span>
                  Additional general workforce can be arranged
                  according to your project or operational
                  requirement.
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR APPROACH
      ===================================================== */}

      <section
        className="approach-section"
        aria-labelledby="approach-heading"
      >

        <div className="container">

          <div className="section-heading">

            <span className="eyebrow">
              OUR APPROACH
            </span>

            <h2 id="approach-heading">
              Simple. Practical. Requirement-Focused.
            </h2>

            <div className="orange-line center-line" />

            <p>
              We keep the manpower supply process straightforward
              so businesses in Kundli and Sonipat can focus on
              their operations.
            </p>

          </div>


          <div className="process-grid">

            {process.map((item) => (
              <article
                className="process-card"
                key={item.number}
              >

                <div className="process-top">

                  <span className="process-number">
                    {item.number}
                  </span>

                  <span
                    className="material-symbols-outlined process-icon"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY SHREEJI
      ===================================================== */}

      <section
        className="why-about-section"
        aria-labelledby="why-about-heading"
      >

        <div className="container">

          <div className="why-about-grid">

            {/* IMAGE 2 */}

            <div className="why-about-image">

              <img
                src="/images/packaging.png"
                alt="Packaging and warehouse manpower operations in Kundli, Sonipat"
                loading="lazy"
              />

              <div className="why-image-overlay">

                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                >
                  verified
                </span>

                <div>

                  <strong>
                    Workforce Solutions
                  </strong>

                  <span>
                    Reliable manpower support for business operations
                  </span>

                </div>

              </div>

            </div>


            {/* CONTENT */}

            <div className="why-about-content">

              <span className="eyebrow">
                WHY SHREEJI ENTERPRISES
              </span>

              <h2 id="why-about-heading">
                Your Workforce Partner in Kundli &amp; Sonipat
              </h2>

              <div className="orange-line" />

              <p>
                Businesses often need different categories of
                manpower at different stages of their operations.
                ShreeJi Enterprises provides a broad workforce
                solution for companies looking for a manpower
                contractor in Kundli and Sonipat.
              </p>

              <div className="reason-list">

                {reasons.map((reason) => (
                  <div
                    className="reason"
                    key={reason.title}
                  >

                    <div className="reason-icon">

                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        {reason.icon}
                      </span>

                    </div>

                    <div>

                      <h3>
                        {reason.title}
                      </h3>

                      <p>
                        {reason.text}
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
          INDUSTRIES
      ===================================================== */}

      <section
        className="about-industries-section"
        aria-labelledby="about-industries-heading"
      >

        <div className="container">

          <div className="industry-intro">

            <div>

              <span className="eyebrow">
                SECTORS WE SUPPORT
              </span>

              <h2 id="about-industries-heading">
                Workforce Across Kundli &amp; Sonipat Industries
              </h2>

              <div className="orange-line" />

            </div>

            <p>
              Our manpower supply solutions support different
              business environments and operational requirements
              across Kundli, Sonipat and nearby industrial areas.
            </p>

          </div>


          <div className="about-industry-list">

            {industries.map((industry, index) => (
              <div
                className="about-industry"
                key={industry}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                  {industry}
                </strong>

                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        className="about-cta"
        aria-labelledby="about-cta-heading"
      >

        <div className="container">

          <div className="about-cta-inner">

            <div>

              <span className="eyebrow eyebrow-light">
                NEED WORKFORCE?
              </span>

              <h2 id="about-cta-heading">
                Looking for a Manpower Contractor in Kundli?
              </h2>

              <p>
                Tell us what type of skilled, semi-skilled or
                unskilled manpower you need in Kundli or Sonipat
                and we'll help you identify the right workforce
                category.
              </p>

            </div>

            <div className="about-cta-actions">

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

              <a
                href="mailto:shreejienterprises@gmail.com"
                className="button button-outline"
              >
                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                >
                  mail
                </span>

                Contact Us
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;
