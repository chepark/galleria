import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import deburr from "lodash/deburr";
import "./_slide.styles.scss";

import Header from "../header/Header.component";
import data from "../../assets/data.json";
import SlideImage from "../slideImage/SlideImage.component";
import SlideDescription from "../slideDescription/SlideDescription.component";

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
        {paintingData && (
          <>
            <SlideImage
              paintingTitle={paintingTitle}
              paintingData={paintingData}
            />
            <SlideDescription paintingData={paintingData} />
          </>
        )}
      </div>
    </div>
  );
};

export default Slide;
