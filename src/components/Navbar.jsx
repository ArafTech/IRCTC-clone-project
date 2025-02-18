import React, { useState } from "react"; 
import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { app } from "../config/firebase";
import { getAuth, signOut } from "firebase/auth";

const Navbar = ({ user }) => {
  const auth = getAuth(app); 
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      setMessage("Logout Successfully!");
      navigate("/login"); // Redirect to the login page after logout
    } catch (error) {
      setError(error.message);
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
            <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
          )}
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
