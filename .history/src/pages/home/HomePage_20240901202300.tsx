import React, { useEffect, useState } from "react";

import "./App.css"; // Importation du fichier CSS

interface Ride {
  id: number;
  distance: number;
  startTime: string;
  duration: number;
  price: number;
  imageUrl: string; // Ajout du champ imageUrl pour chaque taxi pas encore
}

const RideComponent = ({ ride }: { ride: Ride }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    alert(
      `Duration: ${Math.floor(ride.duration / 3600)}:${Math.floor(
        (ride.duration % 3600) / 60
      )}:${ride.duration % 60}`
    );
    alert(
      `End time: ${new Date(
        new Date(ride.startTime).getTime() + ride.duration * 1000
      ).toLocaleTimeString()}`
    );
  };

  const rideClass = ride.distance > 2 ? "red" : "white";

  return (
    <div
      className={`ride-card ${rideClass} ${isClicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      <img
        src={`http://localhost:5000${ride.imageUrl}`}
        alt={`Taxi ${ride.id}`}
        className="ride-image"
      />{" "}
      {}
      <h5>Ride ID: {ride.id}</h5>
      <p>Distance: {ride.distance} miles</p>
      <p className="price">Price: {ride.price} EUR</p>
    </div>
  );
};

const App: React.FC = () => {
  const [rides, setRides] = useState<Ride[]>([]);

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await getRides();
        setRides(response.data);
      } catch (error) {
        console.error("Failed to fetch rides", error);
      }
    };

    fetchRides();
  }, []);
  return (
    <div className="app-container">
      <h1>Liste des Courses</h1>
      <div className="rides-container">
        {rides.map((ride) => (
          <RideComponent key={ride.id} ride={ride} />
        ))}
      </div>
    </div>
  );
};
export default App;
