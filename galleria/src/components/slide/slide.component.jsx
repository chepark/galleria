import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import deburr from "lodash/deburr";
import "./_slide.styles.scss";

import Header from "../header/Header.component";
import data from "../../assets/data.json";
import SlideImage from "../slideImage/SlideImage.component";
import SlideDescription from "../slideDescription/SlideDescription.component";
import SlideFooter from "../slideFooter/SlideFooter.component";

const Slide = () => {
  const { paintingTitle } = useParams();
  const [paintingData, setPaintingData] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const filterPaintingData = data.find((elem) => {
      return (
        deburr(elem.name.replace(/\s+/g, "-").toLowerCase()) === paintingTitle
      );
    });
    setPaintingData(filterPaintingData);
  }, [isOpen, paintingTitle]);

  return (
    <>
      <div className="container">
        <Header />
        <div className="slide-wrapper">
          {paintingData && (
            <>
              <SlideImage
                paintingTitle={paintingTitle}
                paintingData={paintingData}
                isModalOpen={setIsOpen}
                open={isOpen}
              />
              <SlideDescription paintingData={paintingData} />
            </>
          )}
        </div>
      </div>
      {paintingData ? <SlideFooter paintingData={paintingData} /> : null}
    </>
  );
};

export default Slide;
