import React, { useState } from "react";
import TrainCard from "../components/TrainCard";
import styles from "./Home.module.css";
import trainData from "../trainData.json"; // Ensure this import is correct
import useForm from "../Hooks/useForm";

const Home = () => {
  const [formData, handleChange] = useForm({
    from: "",
    to: "",
    date: "",
  });

  // Initialize trainList with the full trainData
  const [trainList, setTrainlist] = useState(trainData);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Train data form submitted", formData);

    // Filter trains based on the form data
    const filteredTrains = trainData.filter(
      (train) =>
        train.from.toLowerCase() === formData.from.toLowerCase() &&
        train.to.toLowerCase() === formData.to.toLowerCase()
    );

    // Update the trainList state with the filtered trains
    setTrainlist(filteredTrains);
  };

  return (
    <div className={styles.homepage}>
      <h2>Book your Train</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="from">From</label>
          <input
            type="text"
            id="from"
            value={formData.from}
            onChange={handleChange}
            placeholder="Enter Departure station"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="to">To</label>
          <input
            type="text"
            id="to"
            value={formData.to}
            onChange={handleChange}
            placeholder="Enter Arrival station"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date">Date</label>
          <input
            type="text"
            id="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Enter Date"
            
          />
        </div>
        <button type="submit">Search Trains</button>
      </form>

      {trainList.length > 0 && (
        <>
          <h2>Available Trains</h2>
          <div className="train-list">
            {trainList.map((train) => (
              <TrainCard key={train.id} train={train} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;