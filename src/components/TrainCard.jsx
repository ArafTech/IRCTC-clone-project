import React from 'react';
import styles from "./TrainCard.module.css"

export default function TrainCard({train}) {
  return (
    <div className= {styles.trainCard}>
      <h3> {train.name} </h3>
      <p>{train.from}</p>
      <p>{train.to}</p>
      <p>{train.depatureTime}</p>
      <p>{train.arrivalTime}</p>
      <p>{train.fare}</p>
      <button>Book Now</button>
    </div>
  )
}
