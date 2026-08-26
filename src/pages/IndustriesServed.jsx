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
              ShreeJi Enterprises provides dependable skilled,
              unskilled, helper and supervisor manpower for
              businesses, projects and operational requirements
              across different industries.
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


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="industries-intro">
        <div className="industries-container">

          <div className="industries-intro-grid">

            <div>
              <span className="section-label">
                OUR REACH
              </span>

              <h2>
                Manpower Built Around
                Your Industry&apos;s Needs
              </h2>
            </div>

            <div>
              <p>
                We are pleased to provide manpower solutions
                according to the requirements of our valuable
                clients across different business and industrial
                environments.
              </p>

              <p>
                Our workforce includes skilled and unskilled
                workers, helpers, supervisors and other manpower
                categories required for day-to-day operations,
                production and project requirements.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

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
              Our manpower solutions can support different
              business environments and operational
              requirements.
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


          {/* =================================================
              CLIENTS WE HAVE SERVED
          ================================================= */}

          <section className="clients-section">

            <div className="clients-section-heading">

              <span className="section-label">
                OUR CLIENTS
              </span>

              <h2>
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
                    <span className="material-symbols-outlined">
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
                Helpers & Supervisors
              </h2>

              <p>
                We deal in different manpower categories as per
                the requirements of our valuable clients. Our
                workforce solutions can support industrial,
                commercial, construction and operational
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
                  <span className="material-symbols-outlined">
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
                  <span className="material-symbols-outlined">
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
          CTA
      ===================================================== */}

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
                Enterprises and our team can help you with
                suitable workforce requirements.
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
