import { useParams } from "react-router-dom";

export const Details = () => {
  let { id } = useParams();
  console.log(id);
  return (
    <div className="app-container">
      <div className="rides-container"></div>
    </div>
  );
};
