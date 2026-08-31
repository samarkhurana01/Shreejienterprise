import { Link } from "react-router-dom";
import "./LabourCategories.css";

const categories = [
  {
    id: "01",
    type: "SKILLED MANPOWER",
    title: "Skilled Manpower in Kundli",
    icon: "engineering",
    description:
      "Experienced skilled manpower for technical, industrial, machinery and project-specific requirements in Kundli and Sonipat.",
    workers: [
      {
        icon: "precision_manufacturing",
        name: "Machine Operators",
        text: "Operators for production and industrial machinery.",
      },
      {
        icon: "electrical_services",
        name: "Electricians",
        text: "Electrical workforce for industrial, commercial and construction work.",
      },
      {
        icon: "construction",
        name: "Welders",
        text: "Skilled welding and fabrication workforce for industrial and site operations.",
      },
      {
        icon: "engineering",
        name: "Fitters",
        text: "Skilled fitters for machinery, equipment and operational work.",
      },
      {
        icon: "build",
        name: "Technicians",
        text: "Technical manpower for maintenance and industrial operations.",
      },
      {
        icon: "carpenter",
        name: "Carpenters",
        text: "Skilled carpentry workforce for construction and project requirements.",
      },
      {
        icon: "foundation",
        name: "Masons",
        text: "Masonry workforce for residential, commercial and construction requirements.",
      },
      {
        icon: "plumbing",
        name: "Plumbers",
        text: "Plumbing workforce for construction, site and commercial work.",
      },
    ],
  },

  {
    id: "02",
    type: "SEMI-SKILLED MANPOWER",
    title: "Semi-Skilled Manpower in Kundli",
    icon: "handyman",
    description:
      "Practical and experienced workforce for assisting technical teams, production activities and operational requirements in Kundli and Sonipat.",
    workers: [
      {
        icon: "precision_manufacturing",
        name: "Assistant Operators",
        text: "Support workforce for machine and production operations.",
      },
      {
        icon: "build",
        name: "Machine Helpers",
        text: "Helpers for machinery, production and industrial activities.",
      },
      {
        icon: "engineering",
        name: "Maintenance Helpers",
        text: "Support workforce for maintenance and technical teams.",
      },
      {
        icon: "construction",
        name: "Fabrication Helpers",
        text: "Helpers for fabrication, workshop and site activities.",
      },
      {
        icon: "warehouse",
        name: "Warehouse Assistants",
        text: "Operational support workforce for warehouse activities.",
      },
      {
        icon: "groups",
        name: "Site Assistants",
        text: "General site support for ongoing project operations.",
      },
    ],
  },

  {
    id: "03",
    type: "UNSKILLED MANPOWER",
    title: "Unskilled & General Manpower in Kundli",
    icon: "groups",
    description:
      "Reliable general workforce for logistics, material handling, construction sites, warehouses and day-to-day operational requirements.",
    workers: [
      {
        icon: "groups",
        name: "General Labour",
        text: "General workforce for industrial, commercial and operational requirements.",
      },
      {
        icon: "person",
        name: "General Helpers",
        text: "Helpers for different workplace and project activities.",
      },
      {
        icon: "local_shipping",
        name: "Loading Workers",
        text: "Workforce for loading and material movement activities.",
      },
      {
        icon: "move_down",
        name: "Unloading Workers",
        text: "Workforce for unloading and material handling activities.",
      },
      {
        icon: "inventory_2",
        name: "Packing Workers",
        text: "Manpower for packing, dispatch and warehouse activities.",
      },
      {
        icon: "sort",
        name: "Sorting Workers",
        text: "Workforce for sorting and material segregation activities.",
      },
      {
        icon: "inventory",
        name: "Material Handlers",
        text: "General workforce for material handling and movement.",
      },
    ],
  },

  {
    id: "04",
    type: "SUPPORT MANPOWER",
    title: "Facility & Support Workforce in Kundli",
    icon: "support_agent",
    description:
      "Support manpower for facility operations, housekeeping, horticulture, cleaning and utility requirements in Kundli and Sonipat.",
    workers: [
      {
        icon: "cleaning_services",
        name: "Housekeeping Staff",
        text: "Workforce for cleaning, housekeeping and facility activities.",
      },
      {
        icon: "yard",
        name: "Horticulture Workers",
        text: "Workforce for gardening, landscaping and outdoor maintenance.",
      },
      {
        icon: "home_work",
        name: "Utility Workers",
        text: "General support workforce for facility operations.",
      },
      {
        icon: "business",
        name: "Facility Support",
        text: "Workforce for day-to-day facility and operational requirements.",
      },
    ],
  },
];

function LabourCategories() {
  return (
    <main className="labour-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="labour-hero"
        aria-labelledby="labour-hero-title"
      >

        <div className="labour-hero-bg" />

        <div className="labour-hero-overlay" />

        <div className="container labour-hero-inner">

          <span className="labour-hero-eyebrow">
            MANPOWER CATEGORIES IN KUNDLI
          </span>

          <h1 id="labour-hero-title">
            Skilled &amp; Unskilled Manpower
            <span> in Kundli, Sonipat</span>
          </h1>

          <p>
            ShreeJi Enterprises provides skilled, semi-skilled,
            unskilled and support manpower for industrial,
            construction, warehouse, commercial and operational
            requirements in Kundli, Sonipat and nearby areas.
          </p>

          <a
            href="#categories"
            className="labour-hero-button"
            aria-label="Explore skilled and unskilled manpower categories"
          >
            Explore Categories

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

      <section className="labour-intro">

        <div className="container">

          <div className="labour-intro-grid">

            <div>

              <span className="eyebrow">
                OUR WORKFORCE
              </span>

              <h2>
                Skilled, Semi-Skilled &amp; Unskilled Manpower in Kundli
              </h2>

              <div className="orange-line" />

            </div>

            <p>
              ShreeJi Enterprises supplies different workforce
              categories according to business and project
              requirements. From machine operators and technical
              workers to general labour, loading, packing,
              housekeeping and facility support workforce, we
              support businesses across Kundli and Sonipat.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CATEGORY NAV
      ===================================================== */}

      <section
        className="category-overview"
        aria-label="Manpower categories"
      >

        <div className="container">

          <div className="overview-grid">

            <a href="#skilled">
              <span className="overview-number">
                01
              </span>

              <span
                className="material-symbols-outlined"
                aria-hidden="true"
              >
                engineering
              </span>

              <strong>
                Skilled
              </strong>

              <small>
                Technical Workforce
              </small>
            </a>

            <a href="#semi-skilled">
              <span className="overview-number">
                02
              </span>

              <span
                className="material-symbols-outlined"
                aria-hidden="true"
              >
                handyman
              </span>

              <strong>
                Semi-Skilled
              </strong>

              <small>
                Operational Support
              </small>
            </a>

            <a href="#unskilled">
              <span className="overview-number">
                03
              </span>

              <span
                className="material-symbols-outlined"
                aria-hidden="true"
              >
                groups
              </span>

              <strong>
                Unskilled
              </strong>

              <small>
                General Workforce
              </small>
            </a>

            <a href="#support">
              <span className="overview-number">
                04
              </span>

              <span
                className="material-symbols-outlined"
                aria-hidden="true"
              >
                support_agent
              </span>

              <strong>
                Support
              </strong>

              <small>
                Facility Workforce
              </small>
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          CATEGORIES
      ===================================================== */}

      <section
        className="categories-section"
        id="categories"
      >

        <div className="container">

          {categories.map((category) => {

            const sectionId =
              category.id === "01"
                ? "skilled"
                : category.id === "02"
                  ? "semi-skilled"
                  : category.id === "03"
                    ? "unskilled"
                    : "support";

            return (
              <section
                className="labour-category"
                id={sectionId}
                key={category.id}
                aria-labelledby={`${sectionId}-heading`}
              >

                <div className="category-heading">

                  <div className="category-heading-left">

                    <span className="category-number">
                      {category.id}
                    </span>

                    <div className="category-heading-icon">

                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                      >
                        {category.icon}
                      </span>

                    </div>

                    <div>

                      <span className="category-label">
                        {category.type}
                      </span>

                      <h2 id={`${sectionId}-heading`}>
                        {category.title}
                      </h2>

                    </div>

                  </div>

                  <p>
                    {category.description}
                  </p>

                </div>


                <div className="worker-grid">

                  {category.workers.map((worker) => (
                    <article
                      className="worker-card"
                      key={worker.name}
                    >

                      <div className="worker-card-top">

                        <div className="worker-icon">

                          <span
                            className="material-symbols-outlined"
                            aria-hidden="true"
                          >
                            {worker.icon}
                          </span>

                        </div>

                        <span
                          className="worker-arrow material-symbols-outlined"
                          aria-hidden="true"
                        >
                          arrow_forward
                        </span>

                      </div>

                      <h3>
                        {worker.name}
                      </h3>

                      <p>
                        {worker.text}
                      </p>

                      <Link
                        to="/contact"
                        aria-label={`Request ${worker.name} workforce`}
                      >
                        Request Workforce
                      </Link>

                    </article>
                  ))}

                </div>

              </section>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          REQUIREMENT CTA
      ===================================================== */}

      <section className="requirement-section">

        <div className="container">

          <div className="requirement-grid">

            <div>

              <span className="eyebrow">
                NEED SPECIFIC MANPOWER?
              </span>

              <h2>
                Need Manpower Not Listed Above?
              </h2>

              <div className="orange-line" />

              <p>
                If you do not see your required workforce category,
                contact ShreeJi Enterprises with your requirement.
                We provide manpower solutions for businesses and
                projects in Kundli, Sonipat and nearby areas.
              </p>

            </div>

            <div className="requirement-actions">

              <Link
                to="/contact"
                className="requirement-button"
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
                className="requirement-contact"
              >
                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                >
                  call
                </span>

                Call ShreeJi Enterprises
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="labour-final-cta"
        id="contact"
      >

        <div className="container">

          <div className="labour-final-inner">

            <div>

              <span>
                SHREEJI ENTERPRISES
              </span>

              <h2>
                Reliable Manpower.
                Ready for Your Requirement.
              </h2>

            </div>

            <Link
              to="/contact"
              className="final-cta-button"
            >
              Get in Touch

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

    </main>
  );
}

export default LabourCategories;
