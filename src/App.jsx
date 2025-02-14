import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./config/firebase.js"; // Ensure this import is correct
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

export default function App() {
  const auth = getAuth(app);
  const [user, setUser] = useState(null); // Track user authentication state
  const [loading, setLoading] = useState(true); // Track loading state
  const [message, setMessage] = useState("");

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // User is signed in
      } else {
        setUser(null); // User is signed out
      }
      setLoading(false); // Set loading to false once authentication state is determined
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [auth]);

  // Create routes based on authentication state
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: user ? <Home /> : <Navigate to="/login" />, // Redirect to login if not authenticated
        },
        {
          path: "/login",
          element: user ? <Navigate to="/" /> : <Login />, // Redirect to home if already authenticated
        },
        {
          path: "/register",
          element: user ? <Navigate to="/" /> : <Register />, // Redirect to home if already authenticated
        },
      ],
    },
  ]);

  // Show a loading spinner while checking authentication state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}