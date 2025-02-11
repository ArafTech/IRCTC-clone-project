import React, { useState } from 'react';
import styles from './TrainCard.module.css';

export default function TrainCard({ train }) {
  const [isBooked, setIsBooked] = useState(false);

  const handleBookNow = () => {
    setIsBooked(true);
    // Add logic to handle booking
    console.log('Booking train...');
  };

  return (
    <div className={styles.trainCard}>
      <h3>{train.name}</h3>
      <p>{train.from}</p>
      <p>{train.to}</p>
      <p>{train.departureTime}</p>
      <p>{train.arrivalTime}</p>
      <p>{train.fare}</p>
      <button onClick={handleBookNow} disabled={isBooked}>
        {isBooked ? 'Booked' : 'Book Now'}
      </button>
    </div>
  );
}