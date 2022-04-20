import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import Header from "../header/Header.component";
import data from "../../assets/data.json";

const Slide = () => {
  const { paintingTitle } = useParams();
  let [paintingData, setPaintingData] = useState();
  let isDataLoaded = false;

  useEffect(() => {
    const filterPaintingData = data.find((elem) => {
      return elem.name.replace(/\s+/g, "-").toLowerCase() === paintingTitle;
    });
    setPaintingData(filterPaintingData);
    console.log("useEffect", paintingData);
  }, [isDataLoaded]);

  if (paintingData) {
    isDataLoaded = true;
  }

  console.log("slide", paintingData);
  return (
    <div className="container">
      {console.log("return", paintingData)}
      <Header />
      <div className="slide-wrapper">
        <div className="slide-image">
          <div className="image-titleArtist">
            <h2>{paintingData.name}</h2>
            <p>{paintingData.artist.name}</p>
          </div>
          <div className="image-gallery">
            <img alt="" />
            <button></button>
          </div>
        </div>
        <div className="slide-description">
          <div className="slide-description description__year"></div>
          <div className="description__main"></div>

          <span className="slide-home-link">GO TO SOURCE</span>
        </div>
      </div>
    </div>
  );
};

export default Slide;
