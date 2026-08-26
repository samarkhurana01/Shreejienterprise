import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  db,
  signOut,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "../firebase";

import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadEnquiries = async () => {
    try {
      const enquiriesQuery = query(
        collection(db, "enquiries"),
        orderBy("createdAt", "desc")
      );

      const snapshot =
        await getDocs(enquiriesQuery);

      const data = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));

      setEnquiries(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        if (!user) {
          navigate("/admin/login");
          return;
        }

        loadEnquiries();
      }
    );

    return unsubscribe;
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);

    navigate("/admin/login");
  };

  const markContacted = async (id) => {
    await updateDoc(
      doc(db, "enquiries", id),
      {
        status: "Contacted",
      }
    );

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
  };

  const deleteEnquiry = async (id) => {
    const confirmed = window.confirm(
      "Delete this enquiry?"
    );

    if (!confirmed) return;

    await deleteDoc(
      doc(db, "enquiries", id)
    );

    setEnquiries((current) =>
      current.filter(
        (item) => item.id !== id
      )
    );
  };

  const newCount = enquiries.filter(
    (item) => item.status === "New"
  ).length;

  const contactedCount = enquiries.filter(
    (item) => item.status === "Contacted"
  ).length;

  return (
    <main className="admin-dashboard">

      <header className="admin-header">

        <div>
          <span>
            SHREEJI ENTERPRISES
          </span>

          <h1>
            Admin Portal
          </h1>
        </div>

        <button
          onClick={handleLogout}
          className="logout-button"
        >
          Logout
        </button>

      </header>

      <section className="admin-content">

        <div className="admin-stats">

          <div className="admin-stat-card">
            <span className="material-symbols-outlined">
              inbox
            </span>

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
            <span className="material-symbols-outlined">
              fiber_new
            </span>

            <div>
              <small>
                New
              </small>

              <strong>
                {newCount}
              </strong>
            </div>
          </div>

          <div className="admin-stat-card">
            <span className="material-symbols-outlined">
              check_circle
            </span>

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


        <div className="enquiries-panel">

          <div className="panel-header">

            <div>
              <span>
                LEADS
              </span>

              <h2>
                Manpower Enquiries
              </h2>
            </div>

            <button
              onClick={loadEnquiries}
              className="refresh-button"
            >
              <span className="material-symbols-outlined">
                refresh
              </span>

              Refresh
            </button>

          </div>


          {loading ? (
            <div className="empty-state">
              Loading enquiries...
            </div>
          ) : enquiries.length === 0 ? (
            <div className="empty-state">
              No enquiries received yet.
            </div>
          ) : (
            <div className="enquiry-list">

              {enquiries.map((item) => (

                <article
                  className="enquiry-card"
                  key={item.id}
                >

                  <div className="enquiry-main">

                    <div className="enquiry-person">

                      <div className="person-avatar">
                        {item.name
                          ?.charAt(0)
                          .toUpperCase()}
                      </div>

                      <div>
                        <h3>
                          {item.name}
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
                          {item.phone}
                        </strong>
                      </div>

                      <div>
                        <small>
                          Category
                        </small>

                        <strong>
                          {item.manpowerType}
                        </strong>
                      </div>

                      <div>
                        <small>
                          Workers
                        </small>

                        <strong>
                          {item.workersRequired}
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
                          {item.status}
                        </span>
                      </div>

                    </div>

                  </div>


                  <div className="enquiry-message">

                    <small>
                      Requirement
                    </small>

                    <p>
                      {item.message}
                    </p>

                  </div>


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

                    <a
                      href={`tel:${item.phone}`}
                    >
                      <span className="material-symbols-outlined">
                        call
                      </span>

                      Call
                    </a>

                    {item.status === "New" && (
                      <button
                        onClick={() =>
                          markContacted(item.id)
                        }
                      >
                        <span className="material-symbols-outlined">
                          check
                        </span>

                        Mark Contacted
                      </button>
                    )}

                    <button
                      className="delete-button"
                      onClick={() =>
                        deleteEnquiry(item.id)
                      }
                    >
                      <span className="material-symbols-outlined">
                        delete
                      </span>

                      Delete
                    </button>

                  </div>

                </article>

              ))}

            </div>
          )}

        </div>

      </section>

    </main>
  );
}

export default AdminDashboard;