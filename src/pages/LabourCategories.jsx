import "./LabourCategories.css";

const categories = [
  {
    id: "01",
    type: "SKILLED MANPOWER",
    title: "Skilled Workforce",
    icon: "engineering",
    description:
      "Experienced manpower for technical, industrial, machinery and project-specific requirements.",
    workers: [
      {
        icon: "precision_manufacturing",
        name: "Machine Operators",
        text: "Operators for production and industrial machinery.",
      },
      {
        icon: "electrical_services",
        name: "Electricians",
        text: "Electrical workforce for industrial and commercial work.",
      },
      {
        icon: "construction",
        name: "Welders",
        text: "Welding and fabrication workforce.",
      },
      {
        icon: "engineering",
        name: "Fitters",
        text: "Skilled fitters for machinery and operational work.",
      },
      {
        icon: "build",
        name: "Technicians",
        text: "Technical manpower for maintenance and operations.",
      },
      {
        icon: "carpenter",
        name: "Carpenters",
        text: "Skilled carpentry workforce for project requirements.",
      },
      {
        icon: "foundation",
        name: "Masons",
        text: "Masonry workforce for construction requirements.",
      },
      {
        icon: "plumbing",
        name: "Plumbers",
        text: "Plumbing workforce for site and commercial work.",
      },
    ],
  },

  {
    id: "02",
    type: "SEMI-SKILLED MANPOWER",
    title: "Semi-Skilled Workforce",
    icon: "handyman",
    description:
      "Workforce with practical experience for assisting technical teams and operational activities.",
    workers: [
      {
        icon: "precision_manufacturing",
        name: "Assistant Operators",
        text: "Support workforce for machine operation.",
      },
      {
        icon: "build",
        name: "Machine Helpers",
        text: "Helpers for machinery and production activities.",
      },
      {
        icon: "engineering",
        name: "Maintenance Helpers",
        text: "Support workforce for maintenance teams.",
      },
      {
        icon: "construction",
        name: "Fabrication Helpers",
        text: "Helpers for fabrication and workshop activities.",
      },
      {
        icon: "warehouse",
        name: "Warehouse Assistants",
        text: "Operational support for warehouse activities.",
      },
      {
        icon: "groups",
        name: "Site Assistants",
        text: "General site support for ongoing operations.",
      },
    ],
  },

  {
    id: "03",
    type: "UNSKILLED MANPOWER",
    title: "General Workforce",
    icon: "groups",
    description:
      "Reliable general workforce for logistics, material handling, site and day-to-day operational requirements.",
    workers: [
      {
        icon: "groups",
        name: "General Labour",
        text: "General workforce for operational requirements.",
      },
      {
        icon: "person",
        name: "General Helpers",
        text: "Helpers for different workplace activities.",
      },
      {
        icon: "local_shipping",
        name: "Loading Workers",
        text: "Workforce for loading and material movement.",
      },
      {
        icon: "move_down",
        name: "Unloading Workers",
        text: "Workforce for unloading and handling activities.",
      },
      {
        icon: "inventory_2",
        name: "Packing Workers",
        text: "Manpower for packing and dispatch activities.",
      },
      {
        icon: "sort",
        name: "Sorting Workers",
        text: "Workforce for sorting and segregation activities.",
      },
      {
        icon: "inventory",
        name: "Material Handlers",
        text: "General workforce for material handling.",
      },
    ],
  },

  {
    id: "04",
    type: "SUPPORT MANPOWER",
    title: "Facility & Support Workforce",
    icon: "support_agent",
    description:
      "Support manpower for facility operations, housekeeping, horticulture and utility requirements.",
    workers: [
      {
        icon: "cleaning_services",
        name: "Housekeeping Staff",
        text: "Workforce for cleaning and housekeeping activities.",
      },
      {
        icon: "yard",
        name: "Horticulture Workers",
        text: "Workforce for gardening and outdoor maintenance.",
      },
      {
        icon: "home_work",
        name: "Utility Workers",
        text: "General support for facility operations.",
      },
      {
        icon: "business",
        name: "Facility Support",
        text: "Workforce for day-to-day facility requirements.",
      },
    ],
  },
];

function LabourCategories() {
  return (
    <main className="labour-page">

      {/* HERO */}

      <section className="labour-hero">

        <div className="labour-hero-bg" />

        <div className="labour-hero-overlay" />

        <div className="container labour-hero-inner">

          <span className="labour-hero-eyebrow">
            LABOUR CATEGORIES
          </span>

          <h1>
            The Right Workforce
            <span>for Every Requirement</span>
          </h1>

          <p>
            ShreeJi Enterprises provides skilled,
            semi-skilled, unskilled and support
            manpower for different business and
            operational requirements.
          </p>

          <a
            href="#categories"
            className="labour-hero-button"
          >
            Explore Categories

            <span className="material-symbols-outlined">
              arrow_downward
            </span>
          </a>

        </div>

      </section>


      {/* INTRO */}

      <section className="labour-intro">

        <div className="container">

          <div className="labour-intro-grid">

            <div>

              <span className="eyebrow">
                OUR WORKFORCE
              </span>

              <h2>
                Manpower Categories
                for Different Needs
              </h2>

              <div className="orange-line" />

            </div>

            <p>
              From machine operators and technical
              workers to general labour, loading,
              packing, housekeeping and horticulture
              workforce, ShreeJi Enterprises supports
              different manpower requirements.
            </p>

          </div>

        </div>

      </section>


      {/* CATEGORY NAV */}

      <section className="category-overview">

        <div className="container">

          <div className="overview-grid">

            <a href="#skilled">
              <span className="overview-number">
                01
              </span>

              <span className="material-symbols-outlined">
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

              <span className="material-symbols-outlined">
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

              <span className="material-symbols-outlined">
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

              <span className="material-symbols-outlined">
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


      {/* CATEGORIES */}

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
              >

                <div className="category-heading">

                  <div className="category-heading-left">

                    <span className="category-number">
                      {category.id}
                    </span>

                    <div className="category-heading-icon">

                      <span className="material-symbols-outlined">
                        {category.icon}
                      </span>

                    </div>

                    <div>

                      <span className="category-label">
                        {category.type}
                      </span>

                      <h2>
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

                          <span className="material-symbols-outlined">
                            {worker.icon}
                          </span>

                        </div>

                        <span className="worker-arrow material-symbols-outlined">
                          arrow_forward
                        </span>

                      </div>

                      <h3>
                        {worker.name}
                      </h3>

                      <p>
                        {worker.text}
                      </p>

                      <a href="#contact">
                        Request Workforce
                      </a>

                    </article>
                  ))}

                </div>

              </section>
            );
          })}

        </div>

      </section>


      {/* REQUIREMENT CTA */}

      <section className="requirement-section">

        <div className="container">

          <div className="requirement-grid">

            <div>

              <span className="eyebrow">
                NEED SPECIFIC MANPOWER?
              </span>

              <h2>
                Tell Us Your Workforce Requirement
              </h2>

              <div className="orange-line" />

              <p>
                If you don't see your required workforce
                category above, contact us with your
                requirement and workforce details.
              </p>

            </div>

            <div className="requirement-actions">

              <a
                href="mailto:shreejienterprises@gmail.com"
                className="requirement-button"
              >
                Request Manpower

                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </a>

              <a
                href="mailto:shreejienterprises@gmail.com"
                className="requirement-contact"
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


      {/* FOOTER CTA */}

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
                Reliable Workforce.
                Ready for Your Requirement.
              </h2>

            </div>

            <a
              href="mailto:shreejienterprises@gmail.com"
              className="final-cta-button"
            >
              Get in Touch

              <span className="material-symbols-outlined">
                arrow_forward
              </span>
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default LabourCategories;