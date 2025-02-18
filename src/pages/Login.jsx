import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import useForm from "../Hooks/useForm";
import styles from "./Login.module.css";
import "../config/firebase.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [formData, handleChange] = useForm({ email: "", password: "" });
  const auth = getAuth();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state to disable button during login process

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset previous errors
    setMessage(""); // Reset previous messages
    setLoading(true); // Start loading state

    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      if (!user) {
        setError("User does not exist. Please register first.");
        setLoading(false);
        return;
      }

      if (!user.emailVerified) {
        setError("Please verify your email before logging in.");
        setLoading(false);
        return;
      }

      setMessage("Login successful! Redirecting...");
      setTimeout(() => {
        navigate("/"); // Redirect to home page
      }, 1500);
    } catch (error) {
      setLoading(false); // Stop loading on error
      if (error.code === "auth/user-not-found") {
        setError("User not found. Please register first.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password. Try again.");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email format.");
      } else {
        setError(error.message); // Generic error message
      }
    }
  };

  return (
    <div className={styles.loginpage}>
      <div className={styles.loginBox}>
        <h2>Login Page</h2>
        {error && <p className={styles.error}>{error}</p>}
        {message && <p className={styles.success}>{message}</p>}
        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}
