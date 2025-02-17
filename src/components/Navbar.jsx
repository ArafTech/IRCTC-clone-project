import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { app } from "../config/firebase";
import { getAuth, signOut } from "firebase/auth";

const Navbar = ({ user }) => {
  const auth = getAuth(app); // Pass the Firebase app instance to getAuth
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      setMessage("Logout Successfully!");
      navigate("/login"); // Redirect to the login page after logout
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  return (
    <>
      <div className={styles.navbar}>
        <h1>IRCTC</h1>
        <nav>
          {user && <Link to="/">Home</Link>}
          {user && <Link to="/bookingDetail">Booking Details</Link>}
          {!user && <Link to="/login">Login</Link>}
          {!user && <Link to="/register">Register</Link>}
          {/* Conditionally render user dropdown */}
          {user && (
            <div className={styles.userDropdown}>
              <button onClick={toggleDropdown} className={styles.userButton}>
                {user.displayName || "User"} {/* Fallback to "User" if displayName is not set */}
              </button>
              {isDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <button onClick={handleLogout}>Logout</button> {/* Fixed typo */}
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;