import { Link } from "react-router-dom";
import "./IndustriesServed.css";

const industries = [
  {
    number: "01",
    icon: "precision_manufacturing",
    title: "Manufacturing Manpower in Kundli",
    description:
      "Reliable skilled and unskilled manpower for manufacturing plants, production units, assembly lines, packaging operations and general factory activities in Kundli and Sonipat.",
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
    title: "Warehouse & Logistics Manpower",
    description:
      "Flexible workforce solutions for warehouses, distribution centres and logistics operations in Kundli and Sonipat where dependable manpower is essential for daily operations.",
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
    title: "Construction Manpower",
    description:
      "Experienced skilled and unskilled manpower for construction sites, residential projects, commercial developments and building activities in Kundli, Sonipat and nearby areas.",
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
    title: "Infrastructure Manpower",
    description:
      "Workforce support for infrastructure projects requiring disciplined, reliable and project-ready manpower for demanding site environments across Sonipat and nearby areas.",
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
    title: "Commercial Operations Manpower",
    description:
      "Manpower solutions for commercial establishments and business operations requiring dependable staff for day-to-day support functions in Kundli and Sonipat.",
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
    title: "Facility Operations Manpower",
    description:
      "Dedicated manpower for facility maintenance, housekeeping, cleaning, material movement and other essential operational requirements in Kundli and surrounding areas.",
    workers: [
      "Housekeeping Staff",
      "Cleaning Workers",
      "Maintenance Helpers",
      "Facility Support Staff",
    ],
  },
];

const clients = [
  {
    number: "01",
    name: "M/s Robotek LLP Pvt. Ltd.",
    location: "Industrial Area, Kundli, Distt. Sonepat, Haryana",
  },
  {
    number: "02",
    name: "M/s MetaPlast Engineering LLP Pvt. Ltd.",
    location: "Industrial Area, Kundli, Sonepat, Haryana",
  },
  {
    number: "03",
    name: "M/s Hitech Global Pvt. Ltd.",
    location: "Industrial Area, Kundli, Sonepat, Haryana",
  },
  {
    number: "04",
    name: "M/s Kenstel Communications Pvt. Ltd.",
    location: "Industrial Area, Kundli, Sonepat, Haryana",
  },
  {
    number: "05",
    name: "M/s Alpine Tech Industries Pvt. Ltd.",
    location: "Industrial Area, Kundli, Sonepat, Haryana",
  },
  {
    number: "06",
    name: "M/s Arihant Technopack Pvt. Ltd.",
    location: "Industrial Area, Rai, Sonepat, Haryana",
  },
];

function IndustriesServed() {
  return (
    <main className="industries-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="industries-hero"
        aria-labelledby="industries-hero-title"
      >

        <div className="industries-container">

          <div className="industries-hero-content">

            <div className="industries-eyebrow">

              <span
                className="material-symbols-outlined"
                aria-hidden="true"
              >
                business
              </span>

              Manpower Services in Kundli &amp; Sonipat

            </div>

            <h1 id="industries-hero-title">
              Industrial &amp; Commercial
              <br />
              <span>Manpower Contractor in Kundli</span>
            </h1>

            <p>
              ShreeJi Enterprises provides dependable skilled,
              semi-skilled, unskilled, helper and supervisor
              manpower for manufacturing, warehousing,
              construction, infrastructure and commercial
              operations across Kundli, Sonipat and nearby areas.
            </p>

            <div className="industries-hero-actions">

              <Link
                to="/contact"
                className="industry-btn industry-btn-orange"
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
                href="tel:+917379433305"
                className="industry-btn industry-btn-outline"
                aria-label="Call ShreeJi Enterprises"
              >
                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                >
                  call
                </span>

                Call Now
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="industries-intro">

        <div className="industries-container">

          <div className="industries-intro-grid">

            <div>

              <span className="section-label">
                INDUSTRIAL MANPOWER IN KUNDLI
              </span>

              <h2>
                Manpower Built Around Your Industry&apos;s Needs
              </h2>

            </div>

            <div>

              <p>
                ShreeJi Enterprises provides manpower supply
                and labour contractor services for businesses
                and industrial establishments in Kundli, Sonipat
                and nearby areas.
              </p>

              <p>
                Our workforce includes skilled and unskilled
                workers, helpers, supervisors and support staff
                required for production, warehouse operations,
                construction projects and day-to-day business
                activities.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section
        className="industries-list"
        aria-labelledby="industries-list-heading"
      >

        <div className="industries-container">

          <div className="industries-section-heading">

            <span className="section-label">
              SECTORS WE SUPPORT
            </span>

            <h2 id="industries-list-heading">
              Manpower Supply for Industries in Kundli &amp; Sonipat
            </h2>

            <p>
              Our manpower solutions support different business
              environments and operational requirements across
              the Kundli industrial area, Sonipat and nearby
              locations.
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

                        <span
                          className="material-symbols-outlined"
                          aria-hidden="true"
                        >
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
                  aria-label={`Enquire for ${industry.title}`}
                >
                  Enquire Now

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


          {/* =================================================
              CLIENTS WE HAVE SERVED
          ================================================= */}

          <section
            className="clients-section"
            aria-labelledby="clients-heading"
          >

            <div className="clients-section-heading">

              <span className="section-label">
                OUR CLIENTS
              </span>

              <h2 id="clients-heading">
                Organisations We Have Served
              </h2>

              <p>
                We provide skilled, unskilled, helper and
                supervisor manpower according to the workforce
                requirements of our valuable clients.
              </p>

            </div>


            <div className="clients-grid">

              {clients.map((client) => (
                <article
                  className="client-card"
                  key={client.number}
                >

                  <div className="client-number">
                    {client.number}
                  </div>

                  <div className="client-icon">

                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      business
                    </span>

                  </div>

                  <div className="client-content">

                    <h3>
                      {client.name}
                    </h3>

                    <p>
                      {client.location}
                    </p>

                  </div>

                </article>
              ))}

            </div>

          </section>

        </div>

      </section>


      {/* =====================================================
          WORKFORCE
      ===================================================== */}

      <section className="workforce-section">

        <div className="industries-container">

          <div className="workforce-grid">

            <div className="workforce-content">

              <span className="section-label">
                OUR WORKFORCE
              </span>

              <h2>
                Skilled, Unskilled,
                Helpers &amp; Supervisors
              </h2>

              <p>
                We provide different manpower categories
                according to the requirements of our valuable
                clients. Our workforce solutions support
                industrial, commercial, construction and
                operational requirements in Kundli and Sonipat.
              </p>

              <Link
                to="/labour-categories"
                className="industry-btn industry-btn-orange"
              >
                View Labour Categories

                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </Link>

            </div>


            <div className="workforce-types">

              <div className="workforce-type-card">

                <div className="workforce-type-icon">

                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    engineering
                  </span>

                </div>

                <div>

                  <h3>
                    Skilled Manpower
                  </h3>

                  <p>
                    Machine operators, electricians, welders,
                    carpenters, technicians and other trained
                    workers.
                  </p>

                </div>

              </div>


              <div className="workforce-type-card">

                <div className="workforce-type-icon">

                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    groups
                  </span>

                </div>

                <div>

                  <h3>
                    Unskilled Manpower
                  </h3>

                  <p>
                    Helpers, loaders, unloaders, packing
                    workers and general labour.
                  </p>

                </div>

              </div>


              <div className="workforce-type-card">

                <div className="workforce-type-icon">

                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    supervisor_account
                  </span>

                </div>

                <div>

                  <h3>
                    Supervisors
                  </h3>

                  <p>
                    Supervisory manpower for coordinating
                    workers and supporting day-to-day
                    operational requirements.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LOCAL AREA
      ===================================================== */}

      <section className="industries-local-section">

        <div className="industries-container">

          <div className="industries-local-content">

            <span className="section-label">
              LOCAL MANPOWER SERVICES
            </span>

            <h2>
              Manpower Contractor Serving Kundli &amp; Sonipat
            </h2>

            <p>
              Based in Kundli, Sonipat, ShreeJi Enterprises
              supports businesses, factories, warehouses,
              construction sites and commercial establishments
              looking for reliable manpower and labour contractor
              services.
            </p>

            <div className="local-area-list">

              <span>Kundli</span>
              <span>Sonipat</span>
              <span>Rai</span>
              <span>Delhi NCR</span>
              <span>Ghaziabad</span>
              <span>Gurgaon</span>
              <span>Noida</span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="industries-cta">

        <div className="industries-container">

          <div className="industries-cta-inner">

            <div>

              <span className="section-label section-label-light">
                NEED MANPOWER IN KUNDLI?
              </span>

              <h2>
                Tell Us What Workforce You Need
              </h2>

              <p>
                Share your manpower requirement with
                ShreeJi Enterprises for skilled, unskilled,
                helper, supervisor or support workforce.
              </p>

            </div>

            <Link
              to="/contact"
              className="industry-btn industry-btn-orange"
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

    </main>
  );
}

export default IndustriesServed;
