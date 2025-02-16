import React, { useState } from "react";
import useForm from "../Hooks/useForm";
import styles from "./BookingDetail.module.css";

export default function BookingDetail() {
  const [formData, handleChange, resetForm] = useForm({
    name: "",
    from: "",
    to: "",
    fare: "",
    passengers: 1,
  });

  const [bookingHistory, setBookingHistory] = useState([]);
  const [message, setMessage] = useState("");

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.from || !formData.to || !formData.fare || formData.passengers < 1) {
      setMessage("Please fill in all details correctly!");
      return;
    }

    // Add the booking to history
    setBookingHistory([...bookingHistory, formData]);

    // Reset form fields after submission
    resetForm();

    setMessage("Booking saved successfully!");
  };

  return (
    <div className={styles.bookingContainer}>
      <div className={styles.bookingbox}>
        <h2>Booking Details</h2>
        {message && <p className={styles.message}>{message}</p>}
        <form onSubmit={handleBookingSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Train Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="from">FROM</label>
            <input type="text" id="from" name="from" value={formData.from} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="to">TO</label>
            <input type="text" id="to" name="to" value={formData.to} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="fare">FARE</label>
            <input type="number" id="fare" name="fare" value={formData.fare} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="passengers">No of Passengers</label>
            <input type="number" id="passengers" name="passengers" value={formData.passengers} onChange={handleChange} min="1" required />
          </div>
          <button type="submit" className={styles.submitButton}>Save Booking</button>
        </form>
      </div>

      {/* Booking History Section */}
      <div className={styles.historyContainer}>
        <h2>Booking History</h2>
        {bookingHistory.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <ul className={styles.bookingList}>
            {bookingHistory.map((booking, index) => (
              <li key={index} className={styles.bookingItem}>
                <strong>{booking.name}</strong> | {booking.from} → {booking.to} | ₹{booking.fare} | {booking.passengers} Passenger(s)
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
