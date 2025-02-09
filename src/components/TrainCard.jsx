import React from 'react'

export default function TrainCard({train}) {
  return (
    <div className='train-card'>
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
