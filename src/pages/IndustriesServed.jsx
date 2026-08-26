import { Link } from "react-router-dom";
import "./IndustriesServed.css";

const industries = [
  {
    number: "01",
    icon: "precision_manufacturing",
    title: "Manufacturing",
    description:
      "Reliable skilled and unskilled manpower for manufacturing plants, production units, assembly lines, packaging operations and general plant activities.",
    workers: [
      "Machine Operators",
      "Production Helpers",
      "Packaging Workers",
      "Loading & Unloading Staff",
    ],
  },
  {
    number: "02",
    icon: "warehouse",
    title: "Warehousing & Logistics",
    description:
      "Flexible workforce solutions for warehouses, distribution centres and logistics operations where dependable manpower is essential for smooth daily operations.",
    workers: [
      "Warehouse Helpers",
      "Loaders & Unloaders",
      "Packing Staff",
      "Material Handling Workers",
    ],
  },
  {
    number: "03",
    icon: "construction",
    title: "Construction",
    description:
      "Experienced manpower for construction sites, residential projects, commercial developments and other building activities.",
    workers: [
      "Masons",
      "Carpenters",
      "Electricians",
      "General Helpers",
    ],
  },
  {
    number: "04",
    icon: "engineering",
    title: "Infrastructure",
    description:
      "Workforce support for infrastructure projects requiring disciplined, reliable and project-ready manpower for demanding site environments.",
    workers: [
      "Skilled Technicians",
      "Site Helpers",
      "Machine Operators",
      "General Labour",
    ],
  },
  {
    number: "05",
    icon: "business_center",
    title: "Commercial Operations",
    description:
      "Manpower solutions for commercial establishments and business operations requiring dependable staff for day-to-day support functions.",
    workers: [
      "Support Staff",
      "Loading Staff",
      "Housekeeping Workers",
      "General Helpers",
    ],
  },
  {
    number: "06",
    icon: "cleaning_services",
    title: "Facility Operations",
    description:
      "Dedicated manpower for facility maintenance, housekeeping, cleaning, material movement and other essential operational requirements.",
    workers: [
      "Housekeeping Staff",
      "Cleaning Workers",
      "Maintenance Helpers",
      "Facility Support Staff",
    ],
  },
];

function IndustriesServed() {
  return (
    <main className="industries-page">

      {/* HERO */}
      <section className="industries-hero">
        <div className="industries-container">

          <div className="industries-hero-content">

            <div className="industries-eyebrow">
              <span className="material-symbols-outlined">
                business
              </span>

              Industries We Serve
            </div>

            <h1>
              Workforce Solutions
              <br />
              Across Multiple Industries
            </h1>

            <p>
              ShreeJi Enterprises provides dependable skilled and
              unskilled manpower for businesses, projects and
              operational requirements across different industries.
            </p>

            <div className="industries-hero-actions">
              <Link
                to="/contact"
                className="industry-btn industry-btn-orange"
              >
                Get Manpower
                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </Link>

              <a
                href="tel:+917379433305"
                className="industry-btn industry-btn-outline"
              >
                <span className="material-symbols-outlined">
                  call
                </span>

                Call Now
              </a>
            </div>

          </div>

        </div>
      </section>


      {/* INTRO */}
      <section className="industries-intro">
        <div className="industries-container">

          <div className="industries-intro-grid">

            <div>
              <span className="section-label">
                OUR REACH
              </span>

              <h2>
                Manpower Built Around
                Your Industry's Needs
              </h2>
            </div>

            <div>
              <p>
                Every industry has different workforce requirements.
                From machine operators and technicians to helpers,
                loaders and general labour, ShreeJi Enterprises
                connects businesses with manpower suited to their
                operational needs.
              </p>

              <p>
                Our workforce solutions are designed to help companies
                maintain productivity, meet project requirements and
                scale manpower when demand increases.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* INDUSTRIES */}
      <section className="industries-list">
        <div className="industries-container">

          <div className="industries-section-heading">
            <span className="section-label">
              SECTORS WE SUPPORT
            </span>

            <h2>
              Workforce Across Multiple Industries
            </h2>

            <p>
              Our manpower solutions can support different business
              environments and operational requirements.
            </p>
          </div>


          <div className="industries-grid">

            {industries.map((industry) => (
              <article
                className="industry-card"
                key={industry.number}
              >

                <div className="industry-card-top">

                  <span className="industry-number">
                    {industry.number}
                  </span>

                  <div className="industry-icon">
                    <span className="material-symbols-outlined">
                      {industry.icon}
                    </span>
                  </div>

                </div>


                <h3>
                  {industry.title}
                </h3>

                <p className="industry-description">
                  {industry.description}
                </p>


                <div className="industry-workers">

                  <span className="workers-label">
                    TYPICAL MANPOWER
                  </span>

                  <ul>
                    {industry.workers.map((worker) => (
                      <li key={worker}>
                        <span className="material-symbols-outlined">
                          check
                        </span>

                        {worker}
                      </li>
                    ))}
                  </ul>

                </div>


                <Link
                  to="/contact"
                  className="industry-card-link"
                >
                  Enquire Now

                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </Link>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* WORKFORCE TYPES */}
      <section className="workforce-section">
        <div className="industries-container">

          <div className="workforce-grid">

            <div className="workforce-content">

              <span className="section-label">
                OUR WORKFORCE
              </span>

              <h2>
                Skilled & Unskilled
                Manpower
              </h2>

              <p>
                Whether you require trained professionals for
                specialised operations or dependable general labour
                for day-to-day work, we can support your manpower
                requirements.
              </p>

              <Link
                to="/labour-categories"
                className="industry-btn industry-btn-orange"
              >
                View Labour Categories

                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </Link>

            </div>


            <div className="workforce-types">

              <div className="workforce-type-card">
                <div className="workforce-type-icon">
                  <span className="material-symbols-outlined">
                    engineering
                  </span>
                </div>

                <div>
                  <h3>Skilled Manpower</h3>

                  <p>
                    Machine operators, electricians, welders,
                    carpenters, technicians and other trained
                    workers.
                  </p>
                </div>
              </div>


              <div className="workforce-type-card">
                <div className="workforce-type-icon">
                  <span className="material-symbols-outlined">
                    groups
                  </span>
                </div>

                <div>
                  <h3>Unskilled Manpower</h3>

                  <p>
                    Helpers, loaders, unloaders, housekeeping
                    staff, packing workers and general labour.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="industries-cta">
        <div className="industries-container">

          <div className="industries-cta-inner">

            <div>
              <span className="section-label section-label-light">
                NEED MANPOWER?
              </span>

              <h2>
                Tell Us What Workforce
                You Need
              </h2>

              <p>
                Share your manpower requirement with ShreeJi
                Enterprises and our team will help you find the
                right workforce for your operation.
              </p>
            </div>

            <Link
              to="/contact"
              className="industry-btn industry-btn-orange"
            >
              Request Manpower

              <span className="material-symbols-outlined">
                arrow_forward
              </span>
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default IndustriesServed;
