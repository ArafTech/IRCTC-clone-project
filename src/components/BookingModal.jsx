import React, { useState } from "react";
import styles from "./BookingModal.module.css";
import { db } from "../config/firebase";
import { doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const BookingModal = ({ train, onClose }) => {
  const [passengers, setPassengers] = useState(1);
  const [classType, setClassType] = useState("economy");
  const [message, setMessage] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;

  const totalFare = train.fare * passengers;

  const handleConfirmBooking = async () => {
    if (!user) {
      setMessage("Please login to book a ticket.");
      return;
    }
  
    const userDocRef = doc(db, "users", user.uid);
    const booking = {
      trainName: train.name,
      from: train.from,
      to: train.to,
      fare: totalFare,
      passengers,
      classType,
      date: new Date().toLocaleDateString(),
    };
  
    try {
      // Check if the user document exists, if not create it
      await setDoc(
        userDocRef,
        { bookings: arrayUnion(booking) },
        { merge: true } // Merge ensures we don't overwrite existing data
      );
  
      setMessage("Booking confirmed!");
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error booking ticket:", error);
      setMessage("Failed to confirm booking.");
    }
  };
  
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Book {train.name}</h2>
        <p>From: {train.from}</p>
        <p>To: {train.to}</p>
        <p>Fare per passenger: ₹{train.fare}</p>
        <div className={styles.formGroup}>
          <label htmlFor="passengers">Number of Passengers</label>
          <input
            type="number"
            id="passengers"
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
            min="1"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="classType">Class</label>
          <select
            id="classType"
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
          >
            <option value="economy">Economy</option>
            <option value="business">Business</option>
          </select>
        </div>
        <p>Total Fare: ₹{totalFare}</p>
        {message && <p className={styles.message}>{message}</p>}
        <button onClick={handleConfirmBooking}>Confirm Booking</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default BookingModal;