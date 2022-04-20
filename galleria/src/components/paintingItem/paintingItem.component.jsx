import { Link } from "react-router-dom";
import "./_paintingItem.styles.scss";
import deburr from "lodash/deburr";

const PaintingItem = ({ painting }) => {
  let {
    name,
    artist,
    images: { thumbnail },
  } = painting;

  thumbnail = thumbnail.slice(2, thumbnail.lenigth).slice(0, -4);
  let paramName = deburr(name.replace(/\s+/g, "-").toLowerCase());

  return (
    <>
      <Link to={`/slide/${paramName}`}>
        <div className="paintingItem">
          <img src={require("../../" + thumbnail + ".jpg")} alt={name}></img>
          <div className="shadow">
            <h2>{name}</h2>
            <p className="subhead1">{artist.name}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PaintingItem;
