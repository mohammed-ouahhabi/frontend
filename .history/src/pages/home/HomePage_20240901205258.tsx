import React, { useEffect, useState } from "react";
import { getRides } from "../../api/api";
import { RideRenderer } from "../../components/Ride";
import { Ride } from "../../types/ride";
import "../../style";

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
          <RideRenderer key={ride.id} ride={ride} />
        ))}
      </div>
    </div>
  );
};
