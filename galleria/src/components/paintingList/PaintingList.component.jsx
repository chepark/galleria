import "./_paintingList.styles.scss";
import { useEffect, useState } from "react";
import data from "../../assets/data.json";
import PaintingItem from "../paintingItem/paintingItem.component";

const PaintingList = () => {
  const [paintings, setPaintings] = useState([]); // Maybe x needed

  useEffect(() => {
    setPaintings(data);
  }, []);

  return (
    <div className="paintingList">
      {paintings.length > 0
        ? paintings.map((painting) => <PaintingItem painting={painting} />)
        : null}
    </div>
  );
};

export default PaintingList;
