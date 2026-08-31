import { Link } from "react-router-dom";
import "./OurServices.css";

const industries = [
  {
    number: "01",
    icon: "factory",
    title: "Manufacturing",
    intro:
      "Reliable manpower supply for manufacturing units, production environments and industrial operations in Kundli and Sonipat.",
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
      "Flexible warehouse manpower for distribution centres and logistics operations where reliable workforce is essential.",
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
      "Skilled and unskilled labour contractor support for construction sites and project operations in Kundli and Sonipat.",
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
      "Workforce support for commercial establishments and businesses requiring operational, support and facility manpower in Kundli and Sonipat.",
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
      "Dedicated facility manpower for day-to-day operations, cleanliness, support activities and outdoor requirements in Kundli and nearby areas.",
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
      "Machine operators, electricians, welders, fitters, technicians, carpenters, masons and other skilled trades for businesses in Kundli and Sonipat.",
  },
  {
    icon: "groups",
    title: "Unskilled & General Manpower",
    description:
      "General helpers, labour, loading, unloading, packing, sorting and material handling workforce for operational requirements.",
  },
  {
    icon: "cleaning_services",
    title: "Support Workforce",
    description:
      "Housekeeping, horticulture, facility support and other operational workforce requirements for commercial and industrial facilities.",
  },
];

function OurServices() {
  return (
    <main className="services-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="services-hero"
        aria-labelledby="services-hero-title"
      >

        <div className="services-hero-bg" />

        <div className="services-hero-overlay" />

        <div className="container services-hero-content">

          <span className="hero-eyebrow">
            MANPOWER SUPPLY SERVICES IN KUNDLI
          </span>

          <h1 id="services-hero-title">
            Manpower Supply &amp;
            <span> Labour Contractor Services in Kundli</span>
          </h1>

          <p>
            ShreeJi Enterprises provides skilled, semi-skilled,
            unskilled and general manpower for industrial,
            commercial, construction, warehousing and
            infrastructure requirements across Kundli,
            Sonipat and nearby areas.
          </p>

          <a
            href="#industries"
            className="services-hero-button"
            aria-label="Explore manpower supply services"
          >
            Explore Our Services

            <span
              className="material-symbols-outlined"
              aria-hidden="true"
            >
              arrow_downward
            </span>
          </a>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="services-intro">

        <div className="container">

          <div className="services-intro-grid">

            <div>

              <span className="eyebrow">
                MANPOWER &amp; LABOUR SERVICES
              </span>

              <h2>
                Manpower Solutions for Businesses in Kundli &amp; Sonipat
              </h2>

              <div className="orange-line" />

            </div>

            <p>
              ShreeJi Enterprises is a manpower supply and labour
              contractor serving businesses in Kundli and Sonipat.
              We provide workforce according to the nature of work,
              operational requirement, industry and manpower category.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          MANPOWER TYPES
      ===================================================== */}

      <section
        className="manpower-types"
        aria-labelledby="manpower-types-heading"
      >

        <div className="container">

          <div className="section-heading">

            <span className="eyebrow">
              WHAT WE PROVIDE
            </span>

            <h2 id="manpower-types-heading">
              Skilled, Unskilled &amp; Support Manpower in Kundli
            </h2>

            <p>
              From technical workers and machine operators to
              general labour, warehouse workers and facility
              support staff, our manpower categories cover a
              wide range of business requirements in Kundli
              and Sonipat.
            </p>

          </div>

          <div className="manpower-type-grid">

            {manpowerTypes.map((type) => (
              <article
                className="manpower-type-card"
                key={type.title}
              >

                <div className="manpower-type-icon">

                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
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


      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section
        className="industries-detail"
        id="industries"
        aria-labelledby="industries-heading"
      >

        <div className="container">

          <div className="section-heading">

            <span className="eyebrow">
              INDUSTRIES WE SERVE
            </span>

            <h2 id="industries-heading">
              Industrial &amp; Commercial Manpower Services in Sonipat
            </h2>

            <p>
              Our manpower supply services support manufacturing,
              warehousing, construction, infrastructure, commercial
              and facility operations across Kundli, Sonipat and
              nearby industrial areas.
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

                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
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

                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        check
                      </span>

                      <span>
                        {service}
                      </span>

                    </div>
                  ))}

                </div>


                <div className="industry-workforce">

                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
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


                <Link
                  to="/contact"
                  className="industry-enquire"
                  aria-label={`Enquire about ${industry.title} manpower services`}
                >
                  Enquire for {industry.title}

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
          PROCESS
      ===================================================== */}

      <section
        className="service-process"
        aria-labelledby="process-heading"
      >

        <div className="container">

          <div className="process-heading">

            <div>

              <span className="eyebrow">
                HOW IT WORKS
              </span>

              <h2 id="process-heading">
                Simple Manpower Procurement Process
              </h2>

              <div className="orange-line" />

            </div>

            <p>
              Tell us what workforce you need in Kundli or Sonipat
              and we can understand the requirement before arranging
              the appropriate manpower category.
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
                  Tell us the type and quantity of manpower required
                  for your project or business.
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
                  We understand whether the requirement is skilled,
                  unskilled, technical or support workforce.
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
                  Workforce is arranged according to the agreed
                  project or operational requirement.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        className="services-cta"
        id="contact"
        aria-labelledby="services-cta-heading"
      >

        <div className="container">

          <div className="services-cta-inner">

            <div>

              <span className="eyebrow">
                NEED MANPOWER IN KUNDLI?
              </span>

              <h2 id="services-cta-heading">
                Tell Us What Your Business Needs
              </h2>

              <p>
                Need skilled manpower, machine operators,
                general labour, loading, packing, housekeeping
                or other workforce in Kundli or Sonipat?
                Contact ShreeJi Enterprises with your requirement.
              </p>

            </div>

            <div className="services-cta-actions">

              <Link
                to="/contact"
                className="button-orange"
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
                href="tel:+917379433305"
                className="button-white"
              >
                Call Now
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default OurServices;
