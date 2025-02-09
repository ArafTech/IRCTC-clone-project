import React from "react";
import { Link , Outlet} from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="navbar">
    <h1>IRCTC</h1>
    <nav>      
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
    </nav>
    </div>
    <Outlet/>
    </>
  );
};

export default Navbar;
