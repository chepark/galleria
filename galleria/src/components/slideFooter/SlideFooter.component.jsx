import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useProgressDoneWidth } from "../../hooks/useProgressDoneWidth.hook";
import { useWindowSize } from "../../hooks/useWindowSize.hook";
import SlideFooterButton from "./SlideFooterButton.component";

import data from "../../assets/data.json";
import "./_slideFooter.styles.scss";

const SlideFooter = ({ paintingData }) => {
  const { name, artist } = paintingData;

  const [paintingIndex, setPaintingIndex] = useState();
  const [screenHeight, screenWidth] = useWindowSize();
  const progressDoneWidth = useProgressDoneWidth(paintingIndex, screenWidth);

  useEffect(() => {
    const index = data.findIndex((obj) => {
      return obj.name === name;
    });

    setPaintingIndex(index);
  }, [paintingData]);

  return (
    <div className="slide-footer-wrapper" style={{ width: screenWidth }}>
      <div className="footer-progress progress-bar">
        {progressDoneWidth ? (
          <motion.div
            className="progress-done"
            initial={{ width: 0 }}
            animate={{ width: progressDoneWidth }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        ) : null}
      </div>

      <div className="footer-content">
        <div className="footer-meta">
          <h3>{name}</h3>
          <p className="subhead1">{artist.name}</p>
        </div>
        <SlideFooterButton paintingIndex={paintingIndex} />
      </div>
    </div>
  );
};

export default SlideFooter;
