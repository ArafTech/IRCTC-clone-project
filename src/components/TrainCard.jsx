import React, { useState } from 'react';
import styles from './TrainCard.module.css';

export default function TrainCard({ train, onBookNow }) {
  const [isBooked, setIsBooked] = useState(false);

  const handleBookNow = () => {
    setIsBooked(true);
    onBookNow(); // Call the function passed from Home.jsx
  };

  return (
    <div className={styles.trainCard}>
      <h3>{train.name}</h3>
      <p>From: {train.from}</p>
      <p>To: {train.to}</p>
      <p>Departure: {train.departureTime}</p>
      <p>Arrival: {train.arrivalTime}</p>
      <p>Fare: ₹{train.fare}</p>
      <button onClick={handleBookNow} disabled={isBooked}>
        {isBooked ? 'Booked' : 'Book Now'}
      </button>
    </div>
  );
}
