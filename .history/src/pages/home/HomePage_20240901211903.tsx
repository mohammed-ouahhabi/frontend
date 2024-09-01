import { RideRenderer } from "../../components/Ride";
import "../../style/style.css";
import { useRides } from "../../api/useRides";

export const HomePage: React.FC = () => {
  const { rides, isError, isLoading } = useRides();

  return (
    <div className="app-container">
      <h1>Liste des Courses</h1>
      <div className="rides-container">
        {rides?.map((ride) => (
          <RideRenderer key={ride.id} ride={ride} />
        ))}
      </div>
    </div>
  );
};
