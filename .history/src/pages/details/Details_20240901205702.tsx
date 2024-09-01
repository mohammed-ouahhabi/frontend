import { useParams } from "react-router-dom";

export const Details = () => {
  let { userId } = useParams();
  return (
    <div className="app-container">
      <div className="rides-container"></div>
    </div>
  );
};
