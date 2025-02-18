import React, { useState } from "react";
import TrainCard from "../components/TrainCard";
import BookingModal from "../components/BookingModal";
import styles from "./Home.module.css";
import trainData from "../trainData.json";
import useForm from "../Hooks/useForm";

const Home = () => {
  const [formData, handleChange] = useForm({
    from: "",
    to: "",
    date: "",
  });

  const [trainList, setTrainList] = useState(trainData);
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredTrains = trainData.filter(
      (train) =>
        train.from.toLowerCase() === formData.from.toLowerCase() &&
        train.to.toLowerCase() === formData.to.toLowerCase()
    );
    setTrainList(filteredTrains);
  };

  const handleBookNow = (train) => {
    setSelectedTrain(train);
    setIsModalOpen(true);
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
              <TrainCard
                key={train.id}
                train={train}
                onBookNow={() => handleBookNow(train)} // Pass function correctly
              />
            ))}
          </div>
        </>
      )}

      {isModalOpen && selectedTrain && (
        <BookingModal
          train={selectedTrain}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Home;
