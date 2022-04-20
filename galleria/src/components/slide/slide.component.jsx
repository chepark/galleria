import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import deburr from "lodash/deburr";

import Header from "../header/Header.component";
import data from "../../assets/data.json";

const Slide = () => {
  const { paintingTitle } = useParams();
  let [paintingData, setPaintingData] = useState();
  let isDataLoaded = false;

  useEffect(() => {
    const filterPaintingData = data.find((elem) => {
      return (
        deburr(elem.name.replace(/\s+/g, "-").toLowerCase()) === paintingTitle
      );
    });
    setPaintingData(filterPaintingData);
  }, [isDataLoaded]);

  if (paintingData) {
    isDataLoaded = true;
  }

  return (
    <div className="container">
      <Header />
      <div className="slide-wrapper">
        <div className="slide-image">
          <div className="image-titleArtist">
            {paintingData && (
              <>
                <h2>{paintingData.name}</h2>
                <p>{paintingData.artist.name}</p>
              </>
            )}
          </div>
          <div className="image-gallery">
            <img
              src={require(`../../assets/${paintingTitle}/gallery.jpg`)}
              alt={paintingTitle}
            />
            <button className="image-gallery-btn">VIEW IMAGE</button>
          </div>
          <div className="image-artist">
            <img
              src={require(`../../assets/${paintingTitle}/artist.jpg`)}
              alt={paintingData && paintingData.artist.name}
            />
          </div>
        </div>
        <div className="slide-description">
          {paintingData && (
            <>
              <div className="slide-description description__year">
                {paintingData.year}
              </div>
              <div className="description__main">
                {paintingData.description}
              </div>
            </>
          )}
          <div className="slide-home-link">GO TO SOURCE</div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
