import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import "./AdminLogin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      navigate("/admin");
    } catch (error) {
      console.error("Admin login error:", error);

      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="admin-login-page">

      <div className="admin-login-card">

        <span className="admin-login-label">
          SHREEJI ENTERPRISES
        </span>

        <h1>
          Admin Portal
        </h1>

        <p>
          Sign in to manage manpower enquiries.
        </p>

        <form onSubmit={handleLogin}>

          <label htmlFor="admin-email">
            Email
          </label>

          <input
            id="admin-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Admin email"
            autoComplete="email"
            required
          />

          <label htmlFor="admin-password">
            Password
          </label>

          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
            required
          />

          {error && (
            <div className="admin-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

        </form>

      </div>

    </main>
  );
}

export default AdminLogin;