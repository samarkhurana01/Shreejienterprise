import "./Home.css";

const skilledManpower = [
  {
    icon: "precision_manufacturing",
    title: "Machine Operators",
    description:
      "Trained operators for industrial and production machinery.",
  },
  {
    icon: "electrical_services",
    title: "Electricians",
    description:
      "Skilled electrical workforce for industrial and commercial requirements.",
  },
  {
    icon: "construction",
    title: "Welders",
    description:
      "Experienced welding workforce for fabrication and industrial work.",
  },
  {
    icon: "engineering",
    title: "Fitters & Technicians",
    description:
      "Technical manpower for machinery, maintenance and site operations.",
  },
  {
    icon: "carpenter",
    title: "Carpenters",
    description:
      "Skilled carpenters for installation, finishing and site work.",
  },
  {
    icon: "plumbing",
    title: "Plumbers",
    description:
      "Experienced plumbing workforce for commercial and industrial projects.",
  },
];

const generalManpower = [
  {
    icon: "local_shipping",
    title: "Loading",
  },
  {
    icon: "inventory_2",
    title: "Unloading",
  },
  {
    icon: "package_2",
    title: "Packing",
  },
  {
    icon: "sort",
    title: "Sorting",
  },
  {
    icon: "cleaning_services",
    title: "Housekeeping",
  },
  {
    icon: "yard",
    title: "Horticulture",
  },
  {
    icon: "groups",
    title: "General Helpers",
  },
  {
    icon: "badge",
    title: "Placement",
  },
];

const industries = [
  {
    icon: "factory",
    title: "Manufacturing",
    description:
      "Reliable workforce for production, machinery and factory operations.",
  },
  {
    icon: "warehouse",
    title: "Warehousing & Logistics",
    description:
      "Manpower for loading, unloading, packing, sorting and material handling.",
  },
  {
    icon: "construction",
    title: "Construction",
    description:
      "Skilled trades and general workforce for construction projects.",
  },
  {
    icon: "account_balance",
    title: "Commercial",
    description:
      "Workforce solutions for offices, commercial facilities and operations.",
  },
  {
    icon: "apartment",
    title: "Infrastructure",
    description:
      "Flexible manpower deployment for large infrastructure projects.",
  },
  {
    icon: "business_center",
    title: "Facility Operations",
    description:
      "Housekeeping, utility, horticulture and support manpower.",
  },
];

const benefits = [
  {
    icon: "verified",
    title: "Reliable Workforce",
    description:
      "Manpower solutions focused on reliability and project requirements.",
  },
  {
    icon: "groups",
    title: "Skilled & Unskilled",
    description:
      "From machine operators and technicians to general helpers.",
  },
  {
    icon: "speed",
    title: "Quick Deployment",
    description:
      "Workforce support for changing project and operational demands.",
  },
  {
    icon: "business",
    title: "All Sectors",
    description:
      "Manpower solutions for industrial, commercial and service sectors.",
  },
];

const serviceAreas = [
  "Noida",
  "Greater Noida",
  "Delhi NCR",
  "Gurgaon",
  "Ghaziabad",
  "Faridabad",
];

function Home() {
  return (
    <main className="home">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="hero">

        <div className="hero-background" />

        <div className="hero-overlay" />

        <div className="hero-inner">

          <div className="hero-content">

            <div className="hero-badge">
              <span className="material-symbols-outlined">
                verified
              </span>

              Trusted Manpower Supply Partner
            </div>

            <h1>
              Skilled &amp; Unskilled
              <span> Manpower for Every Industry</span>
            </h1>

            <p>
              Reliable workforce solutions for industrial,
              commercial, construction, warehousing and
              infrastructure requirements.
            </p>

            <div className="hero-buttons">

              <a
                href="#contact"
                className="button button-orange"
              >
                Get Manpower

                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </a>

              <a
                href="#contact"
                className="button button-outline"
              >
                <span className="material-symbols-outlined">
                  phone
                </span>

                Contact Us
              </a>

            </div>

            <div className="hero-services">

              <span>
                Skilled Workforce
              </span>

              <span>
                Unskilled Workforce
              </span>

              <span>
                All Sectors
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          INTRO / STATS
      ========================================= */}

      <section className="intro-section">

        <div className="container">

          <div className="intro-grid">

            <div className="intro-content">

              <span className="eyebrow">
                SHREEJI ENTERPRISES
              </span>

              <h2>
                Workforce Solutions
                Built Around Your Requirement
              </h2>

              <div className="orange-line" />

              <p>
                ShreeJi Enterprises provides skilled and
                unskilled manpower for all sectors. From
                machine operators and technical workers
                to loading, unloading, packing, sorting,
                housekeeping and general workforce, we
                help businesses meet their manpower
                requirements.
              </p>

            </div>

            <div className="stats-grid">

              <div className="stat-card">
                <strong>Skilled</strong>
                <span>Manpower</span>
              </div>

              <div className="stat-card">
                <strong>Unskilled</strong>
                <span>Manpower</span>
              </div>

              <div className="stat-card">
                <strong>All</strong>
                <span>Sectors</span>
              </div>

              <div className="stat-card">
                <strong>Flexible</strong>
                <span>Deployment</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          SKILLED MANPOWER
      ========================================= */}

      <section
        className="section skilled-section"
        id="skilled-manpower"
      >

        <div className="container">

          <div className="section-heading">

            <span className="eyebrow">
              SKILLED MANPOWER
            </span>

            <h2>
              Skilled Workforce for
              Technical &amp; Industrial Needs
            </h2>

            <div className="orange-line center-line" />

            <p>
              Get experienced and skilled manpower for
              technical, production, maintenance and
              project requirements.
            </p>

          </div>

          <div className="skilled-grid">

            {skilledManpower.map((worker) => (
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

                <a href="#contact">
                  Hire Workforce

                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </a>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================
          UNSKILLED MANPOWER
      ========================================= */}

      <section
        className="section general-section"
        id="unskilled-manpower"
      >

        <div className="container">

          <div className="general-header">

            <div>

              <span className="eyebrow">
                UNSKILLED &amp; GENERAL MANPOWER
              </span>

              <h2>
                Reliable Workforce for
                Day-to-Day Operations
              </h2>

              <div className="orange-line" />

            </div>

            <p>
              Flexible manpower for operational,
              warehouse, facility and site-support
              requirements.
            </p>

          </div>

          <div className="general-grid">

            {generalManpower.map((service) => (
              <article
                className="general-card"
                key={service.title}
              >

                <div className="general-icon">

                  <span className="material-symbols-outlined">
                    {service.icon}
                  </span>

                </div>

                <h3>
                  {service.title}
                </h3>

              </article>
            ))}

          </div>

          <div className="general-cta">

            <div>

              <strong>
                Need general manpower for your operation?
              </strong>

              <span>
                Tell us your requirement and workforce size.
              </span>

            </div>

            <a
              href="#contact"
              className="button button-orange"
            >
              Request Manpower

              <span className="material-symbols-outlined">
                arrow_forward
              </span>
            </a>

          </div>

        </div>

      </section>

      {/* =========================================
          INDUSTRIES
      ========================================= */}

      <section
        className="section industries-section"
        id="industries"
      >

        <div className="container">

          <div className="section-heading">

            <span className="eyebrow">
              INDUSTRIES WE SERVE
            </span>

            <h2>
              Manpower for Multiple Sectors
            </h2>

            <div className="orange-line center-line" />

            <p>
              Workforce solutions designed around the
              operational needs of different industries.
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

                <a href="#contact">
                  Enquire Now

                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </a>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================
          WHY SHREEJI
      ========================================= */}

      <section className="section why-section">

        <div className="container">

          <div className="why-grid">

            <div className="why-image">

              <img
                src="/images/workforce.jpg"
                alt="ShreeJi Enterprises manpower workforce"
              />

              <div className="image-label">
                <span className="material-symbols-outlined">
                  groups
                </span>

                Skilled &amp; Unskilled Workforce
              </div>

            </div>

            <div className="why-content">

              <span className="eyebrow">
                WHY SHREEJI ENTERPRISES
              </span>

              <h2>
                The Workforce You Need,
                When You Need It
              </h2>

              <div className="orange-line" />

              <p>
                Every business has different manpower
                requirements. We provide workforce
                solutions based on your operational needs,
                project requirements and workforce
                category.
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

      {/* =========================================
          SERVICE AREAS
      ========================================= */}

      <section className="section areas-section">

        <div className="container">

          <div className="areas-inner">

            <div className="areas-content">

              <span className="eyebrow">
                SERVICE AREAS
              </span>

              <h2>
                Serving Businesses Across
                Delhi NCR
              </h2>

              <div className="orange-line" />

              <p>
                We support businesses and projects across
                major industrial, commercial and
                operational locations in the Delhi NCR
                region.
              </p>

              <div className="areas-list">

                {serviceAreas.map((area) => (
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

            <div className="areas-visual">

              <span className="material-symbols-outlined">
                location_on
              </span>

              <strong>
                Delhi NCR
              </strong>

              <span>
                Workforce deployment across
                key business locations
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          CONTACT CTA
      ========================================= */}

      <section
        className="contact-cta"
        id="contact"
      >

        <div className="container">

          <div className="cta-inner">

            <div className="cta-content">

              <span className="eyebrow eyebrow-light">
                NEED MANPOWER?
              </span>

              <h2>
                Tell Us Your Manpower
                Requirement
              </h2>

              <p>
                Skilled manpower, unskilled manpower,
                machine operators, general labour or
                operational workforce — let us know what
                your business needs.
              </p>

            </div>

            <div className="cta-actions">

              <a
                href="mailto:shreejienterprises@gmail.com"
                className="button button-orange"
              >
                Send Requirement

                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </a>

              <a
                href="mailto:shreejienterprises@gmail.com"
                className="cta-email"
              >
                <span className="material-symbols-outlined">
                  mail
                </span>

                Contact ShreeJi Enterprises
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          WHATSAPP
      ========================================= */}

      <a
        href="#contact"
        className="whatsapp"
        aria-label="Contact ShreeJi Enterprises"
      >
        <span className="material-symbols-outlined">
          chat
        </span>
      </a>

    </main>
  );
}

export default Home;