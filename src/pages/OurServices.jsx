import "./OurServices.css";

const industries = [
  {
    number: "01",
    icon: "factory",
    title: "Manufacturing",
    intro:
      "Reliable manpower support for manufacturing units, production environments and industrial operations.",
    services: [
      "Machine Operators",
      "Production Helpers",
      "Loading & Unloading Workers",
      "Packing Staff",
      "Sorting Workers",
      "Material Handling Workforce",
      "General Helpers",
      "Housekeeping Staff",
    ],
    workforce:
      "Skilled machine operators, production support staff and general workforce.",
  },

  {
    number: "02",
    icon: "warehouse",
    title: "Warehousing & Logistics",
    intro:
      "Flexible workforce for warehouses, distribution centres and logistics operations where reliable manpower is essential.",
    services: [
      "Loading Workers",
      "Unloading Workers",
      "Packing Staff",
      "Sorting Workers",
      "Material Handlers",
      "Warehouse Helpers",
      "Dispatch Support",
      "General Labour",
    ],
    workforce:
      "General and operational manpower for warehouse and logistics activities.",
  },

  {
    number: "03",
    icon: "construction",
    title: "Construction",
    intro:
      "Manpower support for construction sites and project operations, covering both skilled trades and general workforce.",
    services: [
      "Masons",
      "Carpenters",
      "Electricians",
      "Plumbers",
      "Welders",
      "Fitters",
      "Site Helpers",
      "General Labour",
    ],
    workforce:
      "Skilled tradesmen, technicians, helpers and general site workforce.",
  },

  {
    number: "04",
    icon: "account_balance",
    title: "Infrastructure",
    intro:
      "Workforce solutions for infrastructure projects requiring dependable skilled and general manpower across different project activities.",
    services: [
      "Machine Operators",
      "Skilled Technicians",
      "Electricians",
      "Welders",
      "Fitters",
      "General Helpers",
      "Material Handling",
      "Site Support Workforce",
    ],
    workforce:
      "Technical, skilled and general manpower based on project requirements.",
  },

  {
    number: "05",
    icon: "business_center",
    title: "Commercial Operations",
    intro:
      "Workforce support for commercial establishments and businesses requiring operational, support and facility manpower.",
    services: [
      "Housekeeping Staff",
      "General Helpers",
      "Loading & Unloading",
      "Packing Staff",
      "Sorting Workforce",
      "Utility Support",
      "Maintenance Support",
      "General Workforce",
    ],
    workforce:
      "Flexible operational and support manpower for commercial environments.",
  },

  {
    number: "06",
    icon: "apartment",
    title: "Facility Operations",
    intro:
      "Dedicated manpower for maintaining day-to-day facility operations, cleanliness, support activities and outdoor requirements.",
    services: [
      "Housekeeping Staff",
      "Facility Helpers",
      "Horticulture Workers",
      "General Helpers",
      "Loading & Unloading",
      "Utility Workers",
      "Cleaning Support",
      "General Labour",
    ],
    workforce:
      "Housekeeping, horticulture, utility and general support workforce.",
  },
];

const manpowerTypes = [
  {
    icon: "engineering",
    title: "Skilled Manpower",
    description:
      "Machine operators, electricians, welders, fitters, technicians, carpenters, masons and other skilled trades.",
  },
  {
    icon: "groups",
    title: "Unskilled & General Manpower",
    description:
      "General helpers, labour, loading, unloading, packing, sorting and material handling workforce.",
  },
  {
    icon: "cleaning_services",
    title: "Support Workforce",
    description:
      "Housekeeping, horticulture, facility support and other operational workforce requirements.",
  },
];

function OurServices() {
  return (
    <main className="services-page">

      {/* HERO */}

      <section className="services-hero">

        <div className="services-hero-bg" />

        <div className="services-hero-overlay" />

        <div className="container services-hero-content">

          <span className="hero-eyebrow">
            OUR SERVICES
          </span>

          <h1>
            Manpower Solutions
            <span>Across Multiple Industries</span>
          </h1>

          <p>
            ShreeJi Enterprises provides skilled, unskilled
            and general manpower for businesses, projects
            and operational requirements across different
            sectors.
          </p>

          <a
            href="#industries"
            className="services-hero-button"
          >
            Explore Our Services

            <span className="material-symbols-outlined">
              arrow_downward
            </span>
          </a>

        </div>

      </section>


      {/* INTRO */}

      <section className="services-intro">

        <div className="container">

          <div className="services-intro-grid">

            <div>

              <span className="eyebrow">
                WORKFORCE SOLUTIONS
              </span>

              <h2>
                The Right Manpower
                for the Right Requirement
              </h2>

              <div className="orange-line" />

            </div>

            <p>
              Different industries require different
              categories of manpower. ShreeJi Enterprises
              provides workforce solutions according to
              the nature of work, operational requirement
              and workforce category.
            </p>

          </div>

        </div>

      </section>


      {/* MANPOWER TYPES */}

      <section className="manpower-types">

        <div className="container">

          <div className="section-heading">

            <span className="eyebrow">
              WHAT WE PROVIDE
            </span>

            <h2>
              More Than Just General Labour
            </h2>

            <p>
              From technical workers and machine operators
              to general helpers and facility support staff,
              our workforce categories cover a wide range
              of business requirements.
            </p>

          </div>

          <div className="manpower-type-grid">

            {manpowerTypes.map((type) => (
              <article
                className="manpower-type-card"
                key={type.title}
              >

                <div className="manpower-type-icon">

                  <span className="material-symbols-outlined">
                    {type.icon}
                  </span>

                </div>

                <h3>
                  {type.title}
                </h3>

                <p>
                  {type.description}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* INDUSTRIES */}

      <section
        className="industries-detail"
        id="industries"
      >

        <div className="container">

          <div className="section-heading">

            <span className="eyebrow">
              SECTORS WE SUPPORT
            </span>

            <h2>
              Workforce Across Multiple Industries
            </h2>

            <p>
              Our manpower solutions can support different
              business environments and operational
              requirements.
            </p>

          </div>


          <div className="industry-details">

            {industries.map((industry) => (
              <article
                className="industry-detail-card"
                key={industry.title}
              >

                <div className="industry-detail-top">

                  <div className="industry-number">
                    {industry.number}
                  </div>

                  <div className="industry-detail-icon">

                    <span className="material-symbols-outlined">
                      {industry.icon}
                    </span>

                  </div>

                </div>


                <h3>
                  {industry.title}
                </h3>

                <p className="industry-intro">
                  {industry.intro}
                </p>


                <div className="industry-divider" />


                <h4>
                  Manpower We Provide
                </h4>

                <div className="industry-services">

                  {industry.services.map((service) => (
                    <div
                      className="industry-service"
                      key={service}
                    >

                      <span className="material-symbols-outlined">
                        check
                      </span>

                      <span>
                        {service}
                      </span>

                    </div>
                  ))}

                </div>


                <div className="industry-workforce">

                  <span className="material-symbols-outlined">
                    groups
                  </span>

                  <div>

                    <strong>
                      Workforce Category
                    </strong>

                    <p>
                      {industry.workforce}
                    </p>

                  </div>

                </div>


                <a
                  href="#contact"
                  className="industry-enquire"
                >
                  Enquire for {industry.title}

                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </a>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* PROCESS */}

      <section className="service-process">

        <div className="container">

          <div className="process-heading">

            <div>

              <span className="eyebrow">
                HOW IT WORKS
              </span>

              <h2>
                Simple Manpower Procurement
              </h2>

              <div className="orange-line" />

            </div>

            <p>
              Tell us what workforce you need and we
              can understand the requirement before
              arranging the appropriate manpower.
            </p>

          </div>


          <div className="process-steps">

            <div className="process-step">

              <span>01</span>

              <div>
                <h3>
                  Share Requirement
                </h3>

                <p>
                  Tell us the type and quantity of
                  manpower required.
                </p>
              </div>

            </div>


            <div className="process-step">

              <span>02</span>

              <div>
                <h3>
                  Workforce Category
                </h3>

                <p>
                  We understand whether the requirement
                  is skilled, unskilled or support workforce.
                </p>
              </div>

            </div>


            <div className="process-step">

              <span>03</span>

              <div>
                <h3>
                  Manpower Deployment
                </h3>

                <p>
                  Workforce is arranged according to
                  the agreed operational requirement.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section
        className="services-cta"
        id="contact"
      >

        <div className="container">

          <div className="services-cta-inner">

            <div>

              <span className="eyebrow">
                NEED MANPOWER?
              </span>

              <h2>
                Tell Us What Your Business Needs
              </h2>

              <p>
                Skilled manpower, machine operators,
                general labour, loading, packing,
                housekeeping or other workforce
                requirements — contact ShreeJi Enterprises.
              </p>

            </div>

            <div className="services-cta-actions">

              <a
                href="mailto:shreejienterprises@gmail.com"
                className="button-orange"
              >
                Request Manpower

                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </a>

              <a
                href="mailto:shreejienterprises@gmail.com"
                className="button-white"
              >
                Contact Us
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default OurServices;