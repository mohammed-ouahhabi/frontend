import React, { useEffect, useState } from "react";
import { getRides } from "../../api/api";
import { RideRenderer } from "../../components/Ride";
import { Ride } from "../../types/ride";
import "../../style/style.css";
import { useRides } from "../../api/useRides";

export const HomePage: React.FC = () => {
  const { rides, isError, isLoading } = useRides();

  if (!rides) return null;

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
