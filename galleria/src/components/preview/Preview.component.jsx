import Header from "../header/Header.component";
import PaintingList from "../paintingList/PaintingList.component";

import { useLocation } from "react-router-dom";

const Preview = () => {
  const location = useLocation();

  return (
    <div className="container">
      <Header />
      <PaintingList />
    </div>
  );
};

export default Preview;
