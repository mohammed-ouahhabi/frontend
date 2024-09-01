import { useParams } from "react-router-dom";
import { useRideById } from "../../api/useRideById";

export const Details = () => {
  let { id } = useParams();
  const { ride } = useRideById(id ?? "");

  return (
    <div className="app-container">
      <div className="rides-container"></div>
    </div>
  );
};
