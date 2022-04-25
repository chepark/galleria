import { Link } from "react-router-dom";
import "./_slideDescription.styles.scss";

const SlideDescription = ({ paintingData }) => {
  const { year, description } = paintingData;
  return (
    <div className="slide-description">
      <div className="description__year">
        <p>{year}</p>
      </div>
      <div className="description__main">
        <p>{description}</p>
      </div>
      <div className="slide-home-link link1">
        <Link to="/" style={{ color: "inherit" }}>
          GO TO SOURCE
        </Link>
      </div>
    </div>
  );
};

export default SlideDescription;
