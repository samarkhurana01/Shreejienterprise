import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../firebase";

import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";

import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [actionLoading, setActionLoading] = useState("");
  const [error, setError] = useState("");

  const loadEnquiries = useCallback(async () => {
    try {
      setError("");

      const enquiriesQuery = query(
        collection(db, "enquiries"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(enquiriesQuery);

      const data = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));

      setEnquiries(data);
    } catch (error) {
      console.error("Firestore error:", error);

      setError(
        "Unable to load enquiries. Please check your Firebase configuration and Firestore permissions."
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/admin/login", { replace: true });
        return;
      }

      loadEnquiries();
    });

    return () => unsubscribe();
  }, [navigate, loadEnquiries]);

  const handleRefresh = async () => {
    if (refreshing) return;

    setRefreshing(true);
    await loadEnquiries();
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);

      navigate("/admin/login", {
        replace: true,
      });
    } catch (error) {
      console.error("Logout error:", error);

      setError("Unable to logout. Please try again.");
    }
  };

  const markContacted = async (id) => {
    if (actionLoading) return;

    setActionLoading(`contact-${id}`);

    try {
      await updateDoc(doc(db, "enquiries", id), {
        status: "Contacted",
      });

      setEnquiries((current) =>
        current.map((item) =>
          item.id === id
            ? {
                ...item,
                status: "Contacted",
              }
            : item
        )
      );
    } catch (error) {
      console.error("Update error:", error);

      setError(
        "Unable to update this enquiry. Please try again."
      );
    } finally {
      setActionLoading("");
    }
  };

  const deleteEnquiry = async (id) => {
    if (actionLoading) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmed) return;

    setActionLoading(`delete-${id}`);

    try {
      await deleteDoc(
        doc(db, "enquiries", id)
      );

      setEnquiries((current) =>
        current.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error("Delete error:", error);

      setError(
        "Unable to delete this enquiry. Please try again."
      );
    } finally {
      setActionLoading("");
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) {
      return "Date unavailable";
    }

    try {
      const date = timestamp.toDate
        ? timestamp.toDate()
        : new Date(timestamp);

      return date.toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "Date unavailable";
    }
  };

  const newCount = enquiries.filter(
    (item) => item.status === "New"
  ).length;

  const contactedCount = enquiries.filter(
    (item) => item.status === "Contacted"
  ).length;

  return (
    <main className="admin-dashboard">

      {/* HEADER */}

      <header className="admin-header">

        <div className="admin-brand">

          <span className="admin-brand-label">
            SHREEJI ENTERPRISES
          </span>

          <h1>
            Admin Portal
          </h1>

          <p>
            Manage manpower enquiries
          </p>

        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="logout-button"
        >
          <span className="material-symbols-outlined">
            logout
          </span>

          Logout
        </button>

      </header>


      {/* CONTENT */}

      <section className="admin-content">

        {/* ERROR */}

        {error && (
          <div className="admin-alert error">

            <span className="material-symbols-outlined">
              error
            </span>

            <span>
              {error}
            </span>

            <button
              type="button"
              onClick={() => setError("")}
              aria-label="Close error"
            >
              ×
            </button>

          </div>
        )}


        {/* STATS */}

        <div className="admin-stats">

          <div className="admin-stat-card">

            <div className="admin-stat-icon">
              <span className="material-symbols-outlined">
                inbox
              </span>
            </div>

            <div>
              <small>
                Total Enquiries
              </small>

              <strong>
                {enquiries.length}
              </strong>
            </div>

          </div>


          <div className="admin-stat-card">

            <div className="admin-stat-icon">
              <span className="material-symbols-outlined">
                fiber_new
              </span>
            </div>

            <div>
              <small>
                New Enquiries
              </small>

              <strong>
                {newCount}
              </strong>
            </div>

          </div>


          <div className="admin-stat-card">

            <div className="admin-stat-icon">
              <span className="material-symbols-outlined">
                check_circle
              </span>
            </div>

            <div>
              <small>
                Contacted
              </small>

              <strong>
                {contactedCount}
              </strong>
            </div>

          </div>

        </div>


        {/* ENQUIRIES */}

        <div className="enquiries-panel">

          <div className="panel-header">

            <div>

              <span>
                LEADS
              </span>

              <h2>
                Manpower Enquiries
              </h2>

              <p>
                View and manage incoming manpower requirements.
              </p>

            </div>

            <button
              type="button"
              onClick={handleRefresh}
              className="refresh-button"
              disabled={refreshing}
            >

              <span className="material-symbols-outlined">
                refresh
              </span>

              {refreshing ? "Refreshing..." : "Refresh"}

            </button>

          </div>


          {/* LOADING */}

          {loading ? (

            <div className="empty-state">

              <span className="material-symbols-outlined">
                progress_activity
              </span>

              <h3>
                Loading enquiries...
              </h3>

              <p>
                Please wait while we fetch the latest requirements.
              </p>

            </div>

          ) : enquiries.length === 0 ? (

            /* EMPTY */

            <div className="empty-state">

              <span className="material-symbols-outlined">
                inbox
              </span>

              <h3>
                No enquiries yet
              </h3>

              <p>
                New manpower requirements submitted through the
                website will appear here.
              </p>

            </div>

          ) : (

            /* LIST */

            <div className="enquiry-list">

              {enquiries.map((item) => {

                const contactLoading =
                  actionLoading === `contact-${item.id}`;

                const deleteLoading =
                  actionLoading === `delete-${item.id}`;

                return (
                  <article
                    className="enquiry-card"
                    key={item.id}
                  >

                    {/* MAIN */}

                    <div className="enquiry-main">

                      <div className="enquiry-person">

                        <div className="person-avatar">
                          {item.name
                            ?.charAt(0)
                            .toUpperCase() || "?"}
                        </div>

                        <div>

                          <h3>
                            {item.name || "Unknown"}
                          </h3>

                          <span>
                            {item.company ||
                              "Individual Enquiry"}
                          </span>

                        </div>

                      </div>


                      <div className="enquiry-meta">

                        <div>
                          <small>
                            Phone
                          </small>

                          <strong>
                            {item.phone || "—"}
                          </strong>
                        </div>


                        <div>
                          <small>
                            Category
                          </small>

                          <strong>
                            {item.manpowerType || "—"}
                          </strong>
                        </div>


                        <div>
                          <small>
                            Workers
                          </small>

                          <strong>
                            {item.workersRequired || "—"}
                          </strong>
                        </div>


                        <div>
                          <small>
                            Status
                          </small>

                          <span
                            className={`status-badge ${
                              item.status === "New"
                                ? "status-new"
                                : "status-contacted"
                            }`}
                          >
                            {item.status || "New"}
                          </span>
                        </div>

                      </div>

                    </div>


                    {/* DETAILS */}

                    <div className="enquiry-details">

                      <div className="enquiry-message">

                        <small>
                          Requirement Details
                        </small>

                        <p>
                          {item.message || "No details provided."}
                        </p>

                      </div>


                      <div className="enquiry-date">

                        <small>
                          Submitted
                        </small>

                        <span>
                          {formatDate(item.createdAt)}
                        </span>

                      </div>

                    </div>


                    {/* ACTIONS */}

                    <div className="enquiry-actions">

                      {item.email && (
                        <a
                          href={`mailto:${item.email}`}
                        >

                          <span className="material-symbols-outlined">
                            mail
                          </span>

                          Email

                        </a>
                      )}


                      {item.phone && (
                        <a
                          href={`tel:${item.phone}`}
                        >

                          <span className="material-symbols-outlined">
                            call
                          </span>

                          Call

                        </a>
                      )}


                      {item.phone && (
                        <a
                          href={`https://wa.me/${String(
                            item.phone
                          ).replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >

                          <span className="material-symbols-outlined">
                            chat
                          </span>

                          WhatsApp

                        </a>
                      )}


                      {item.status !== "Contacted" && (
                        <button
                          type="button"
                          onClick={() =>
                            markContacted(item.id)
                          }
                          disabled={Boolean(actionLoading)}
                        >

                          <span className="material-symbols-outlined">
                            {contactLoading
                              ? "progress_activity"
                              : "check"}
                          </span>

                          {contactLoading
                            ? "Updating..."
                            : "Mark Contacted"}

                        </button>
                      )}


                      <button
                        type="button"
                        className="delete-button"
                        onClick={() =>
                          deleteEnquiry(item.id)
                        }
                        disabled={Boolean(actionLoading)}
                      >

                        <span className="material-symbols-outlined">
                          {deleteLoading
                            ? "progress_activity"
                            : "delete"}
                        </span>

                        {deleteLoading
                          ? "Deleting..."
                          : "Delete"}

                      </button>

                    </div>

                  </article>
                );
              })}

            </div>

          )}

        </div>

      </section>

    </main>
  );
}

export default AdminDashboard;