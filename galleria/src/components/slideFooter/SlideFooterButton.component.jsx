import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import deburr from "lodash/deburr";
import data from "../../assets/data.json";

const SlideFooterButton = ({ paintingIndex }) => {
  let [prevSlide, setPrevSlide] = useState();
  let [nextSlide, setNextSlide] = useState();

  useEffect(() => {
    if (paintingIndex === 0) {
      setPrevSlide(data[data.length - 1]);
    } else {
      setPrevSlide(data[paintingIndex - 1]);
    }

    if (paintingIndex === data.length - 1) {
      setNextSlide(data[0]);
    } else {
      setNextSlide(data[paintingIndex + 1]);
    }
  }, [paintingIndex]);

  console.log(prevSlide);

  return (
    <div className="footer-button">
      {prevSlide && (
        <Link
          to={`/slide/${deburr(
            prevSlide.name.replace(/\s+/g, "-").toLowerCase()
          )}`}
        >
          <div className="button-backward">
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.166 1.84344L3.6275 12.1127L24.166 22.382V1.84344Z"
                stroke="black"
                strokeWidth="2"
              />
              <rect
                x="-0.371478"
                y="0.371478"
                width="0.742956"
                height="23.0316"
                transform="matrix(-1 0 0 1 0.743372 0)"
                fill="#D8D8D8"
                stroke="black"
                strokeWidth="0.742956"
              />
            </svg>
          </div>
        </Link>
      )}

      {nextSlide && (
        <Link
          to={`/slide/${deburr(
            nextSlide.name.replace(/\s+/g, "-").toLowerCase()
          )}`}
        >
          <div className="button-forward">
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.52734 1.84344L22.0659 12.1127L1.52734 22.382V1.84344Z"
                stroke="black"
                strokeWidth="2"
              />
              <rect
                x="24.5785"
                y="0.371478"
                width="0.742956"
                height="23.0316"
                fill="#D8D8D8"
                stroke="black"
                strokeWidth="0.742956"
              />
            </svg>
          </div>
        </Link>
      )}
    </div>
  );
};

export default SlideFooterButton;
