import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { FaBell, FaQuestionCircle, FaHome } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = ({ user }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <FaHome className={styles.homeIcon} title="Home" />
          </Link>
          <div className={styles.logo}>IRCTC</div>
        </div>

        <div className={styles.navLinks}>
          {user && (
            <>
              <Link to="/" className={styles.navLink}>
                Home
              </Link>
              <Link to="/bookinghistory" className={styles.navLink}>
                Booking History
              </Link>
            </>
          )}
          <span className={styles.navLink}>Contact Us</span>
          <span className={styles.time}>
            {currentTime.toLocaleDateString()} [
            {currentTime.toLocaleTimeString()}]
          </span>
          <FaBell className={styles.icon} title="Notifications" />
          <FaQuestionCircle className={styles.icon} title="Help & Support" />

          {user ? (
            <>
              <span className={styles.username}>
                Welcome, {user.displayName || "User"}
              </span>
              <button onClick={handleLogout} className={styles.authButton}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={styles.authButton}>
                Login
              </Link>
              <Link to="/register" className={styles.registerButton}>
                Register
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Render child routes */}
      <Outlet />
    </>
  );
};

export default Navbar;
