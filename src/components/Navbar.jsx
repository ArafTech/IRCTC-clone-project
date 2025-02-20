import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { getAuth, signOut } from "firebase/auth";
import { useTheme } from "../context/ThemeContext";

const Navbar = ({ user }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useTheme();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className={styles.navbar}>
        <h1>IRCTC</h1>
        <nav>
          {user && <Link to="/">Home</Link>}
          {user && <Link to="/bookinghistory">Booking History</Link>}
          {!user && <Link to="/login">Login</Link>}
          {!user && <Link to="/register">Register</Link>}
          {user && (
            <span className={styles.username}>
              Welcome {user.displayName || "User"}
            </span>
          )}
          {user && (
            <button onClick={handleLogout} className={styles.logoutButton}>
              Logout
            </button>
          )}
          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={styles.toggleModeButton}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
