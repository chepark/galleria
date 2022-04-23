import { useEffect, useState } from "react";
import data from "../assets/data.json";

export const useProgressDoneWidth = (index, screenWidth) => {
  const [paintingParts, setPaintingParts] = useState();
  const [progressDoneWidth, setProgressDoneWidth] = useState(null);

  useEffect(() => {
    const calculateDoneWidth = (screenWidth / data.length) * paintingParts;

    setPaintingParts(index + 1);
    setProgressDoneWidth(calculateDoneWidth);
  });

  return progressDoneWidth;
};
