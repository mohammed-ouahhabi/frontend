import { useParams } from "react-router-dom";
import { useRideById } from "../../api/useRideById";
import { RideRenderer } from "../../components/Ride";

export const Details = () => {
  let { id } = useParams();
  const { ride } = useRideById(id ?? "");

  return (
    <div className="app-container">
      <div className="rides-container">
        <RideRenderer ride={ride} />
      </div>
    </div>
  );
};
