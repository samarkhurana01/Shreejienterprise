import { useState } from "react";

import { db } from "../firebase";

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import "./Contact.css";

import "./Contact.css";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  company: "",
  manpowerType: "",
  workersRequired: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      await addDoc(collection(db, "enquiries"), {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        company: form.company.trim(),
        manpowerType: form.manpowerType,
        workersRequired: Number(form.workersRequired),
        message: form.message.trim(),
        status: "New",
        createdAt: serverTimestamp(),
      });

      setStatus({
        type: "success",
        message:
          "Your requirement has been submitted successfully. Our team will contact you shortly.",
      });

      setForm(initialForm);
    } catch (error) {
      console.error("Firestore error:", error);

      setStatus({
        type: "error",
        message:
          "Unable to submit your enquiry. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">

      {/* HERO */}

      <section className="contact-hero">

        <div className="contact-hero-image" />

        <div className="contact-hero-overlay" />

        <div className="contact-container contact-hero-content">

          <span className="contact-eyebrow">
            CONTACT SHREEJI ENTERPRISES
          </span>

          <h1>
            Tell Us Your
            <span>Manpower Requirement</span>
          </h1>

          <p>
            Looking for skilled, semi-skilled, unskilled
            or support manpower? Share your requirement
            with us and our team will get in touch with you.
          </p>

        </div>

      </section>


      {/* CONTACT CONTENT */}

      <section className="contact-section">

        <div className="contact-container">

          <div className="contact-layout">

            {/* LEFT */}

            <div className="contact-information">

              <span className="section-eyebrow">
                LET'S CONNECT
              </span>

              <h2>
                Reliable Manpower.
                <br />
                Simple Process.
              </h2>

              <div className="orange-line" />

              <p>
                ShreeJi Enterprises provides skilled,
                semi-skilled, unskilled and support
                manpower for industrial, commercial,
                construction and operational requirements.
              </p>

              <div className="contact-details">

                <div className="contact-detail">

                  <div className="contact-detail-icon">
                    <span className="material-symbols-outlined">
                      groups
                    </span>
                  </div>

                  <div>
                    <span>Manpower</span>

                    <strong>
                      Skilled &amp; Unskilled Workforce
                    </strong>
                  </div>

                </div>


                <div className="contact-detail">

                  <div className="contact-detail-icon">
                    <span className="material-symbols-outlined">
                      business
                    </span>
                  </div>

                  <div>
                    <span>Industries</span>

                    <strong>
                      Industrial &amp; Commercial Operations
                    </strong>
                  </div>

                </div>


                <div className="contact-detail">

                  <div className="contact-detail-icon">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                  </div>

                  <div>
                    <span>Service Area</span>

                    <strong>
                      Delhi NCR &amp; Nearby Areas
                    </strong>
                  </div>

                </div>

              </div>

            </div>


            {/* RIGHT FORM */}

            <div className="contact-form-card">

              <div className="contact-form-heading">

                <span>
                  REQUEST MANPOWER
                </span>

                <h2>
                  Submit Your Requirement
                </h2>

                <p>
                  Fill in your requirements and we'll
                  get back to you.
                </p>

              </div>


              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="contact-form-row">

                  <div className="contact-field">

                    <label htmlFor="name">
                      Full Name <b>*</b>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />

                  </div>


                  <div className="contact-field">

                    <label htmlFor="phone">
                      Phone Number <b>*</b>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />

                  </div>

                </div>


                <div className="contact-form-row">

                  <div className="contact-field">

                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                    />

                  </div>


                  <div className="contact-field">

                    <label htmlFor="company">
                      Company / Organization
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name"
                    />

                  </div>

                </div>


                <div className="contact-form-row">

                  <div className="contact-field">

                    <label htmlFor="manpowerType">
                      Manpower Category <b>*</b>
                    </label>

                    <select
                      id="manpowerType"
                      name="manpowerType"
                      value={form.manpowerType}
                      onChange={handleChange}
                      required
                    >

                      <option value="">
                        Select category
                      </option>

                      <option value="Skilled">
                        Skilled
                      </option>

                      <option value="Semi-Skilled">
                        Semi-Skilled
                      </option>

                      <option value="Unskilled">
                        Unskilled
                      </option>

                      <option value="Support">
                        Support / Facility
                      </option>

                    </select>

                  </div>


                  <div className="contact-field">

                    <label htmlFor="workersRequired">
                      Workers Required <b>*</b>
                    </label>

                    <input
                      id="workersRequired"
                      name="workersRequired"
                      type="number"
                      min="1"
                      value={form.workersRequired}
                      onChange={handleChange}
                      placeholder="e.g. 25"
                      required
                    />

                  </div>

                </div>


                <div className="contact-field">

                  <label htmlFor="message">
                    Requirement Details <b>*</b>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about the manpower you need..."
                    required
                  />

                </div>


                {status.message && (
                  <div
                    className={`contact-status ${status.type}`}
                  >
                    <span className="material-symbols-outlined">
                      {status.type === "success"
                        ? "check_circle"
                        : "error"}
                    </span>

                    {status.message}
                  </div>
                )}


                <button
                  className="contact-submit"
                  type="submit"
                  disabled={loading}
                >

                  {loading
                    ? "Submitting..."
                    : "Submit Requirement"}

                  {!loading && (
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  )}

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;