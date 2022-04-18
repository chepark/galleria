import "./_paintingItem.styles.scss";
import { useEffect, useState } from "react";

const PaintingItem = ({ painting }) => {
  const [imageSrc, setImageSrc] = useState("");

  let {
    name,
    artist,
    images: { thumbnail },
  } = painting;

  thumbnail = thumbnail.slice(2, thumbnail.lenigth).slice(0, -4);

  return (
    <div className="paintingItem">
      <img src={require("../../" + thumbnail + ".jpg")} alt={name}></img>
    </div>
  );
};

export default PaintingItem;