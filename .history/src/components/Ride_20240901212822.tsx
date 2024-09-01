import { useState } from "react";
import { Ride } from "../types/ride";
import { useNavigate } from "react-router-dom";

type Props = {
  ride: Ride;
  isNavigate: boolean;
};

export const RideRenderer = ({ ride,isNavigate }: Props) => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if(isNavigate) {
      navigate("details/" + ride.id);
    }
    else
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
    */
   
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
