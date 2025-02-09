import React from "react";
import TrainCard from "../components/TrainCard";

const Home = () => {
  const trains = [
    {
      name: "Rajdhani Express",
      from: "Delhi",
      to: "Mumbai",
      departureTime: "10:00 AM",
      arrivalTime: "8:00 PM",
      fare: 1500,
    },
    {
      name: "Shatabdi Express",
      from: "Kolkata",
      to: "Bangalore",
      departureTime: "6:00 AM",
      arrivalTime: "4:00 PM",
      fare: 1800,
    }
  ];

  return (
    <div className="homepage">
    <h2>Book your Train</h2>
    <form>
      <div className="form-group">
        <label htmlFor="from">From</label>
        <input type="text" id="from" placeholder="Enter Depature station" required/>
      </div>
      <div className="form-group">
        <label htmlFor="to">To</label>
        <input type="text" id="to" placeholder="Enter Arrival station" required/>
      </div>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input type="text" id="date" required/>
      </div>
      <button type="submit">Search Trains</button>
    </form>
    <h2>Available Tranis</h2>
    <div className="train-list">
    {trains.map((train, index)=>(
      <TrainCard key={index} train={train} />
    ))}
    </div>
    </div>
  );
};

export default Home;
