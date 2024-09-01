import React, { useEffect, useState } from "react";
import "./style.css"; // Importation du fichier CSS
import { getRides } from "../../api/api";
import { Ride } from "../../components/Ride";

export const HomePage: React.FC = () => {
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
          <Ride key={ride.id} ride={ride} />
        ))}
      </div>
    </div>
  );
};
