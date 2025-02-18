import React, { useEffect, useState } from "react";
import styles from "./BookingHistory.module.css";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const BookingHistory = () => {
  const [bookingHistory, setBookingHistory] = useState([]);
  const [loading, setLoading] = useState(true);  
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) return;

    const fetchBookingHistory = async () => {
      setLoading(true); 
      try {
        const userDocRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userDocRef);
        
        if (docSnap.exists()) {
          setBookingHistory(docSnap.data().bookings || []);
        }
      } catch (error) {
        console.error("Error fetching booking history:", error);
      } finally {
        setLoading(false);  
      }
    };

    fetchBookingHistory();
  }, [user]);

  return (
    <div className={styles.bookingHistory}>
      <h2>Booking History</h2>
      {loading ? (  
        <p>Loading...</p>
      ) : bookingHistory.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul>
          {bookingHistory.map((booking, index) => (
            <li key={index} className={styles.bookingItem}>
              <strong>{booking.trainName}</strong> | {booking.from} → {booking.to} | ₹{booking.fare} | {booking.passengers} Passenger(s) | {booking.classType}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingHistory;
