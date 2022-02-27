import React, { useContext } from "react";
import VilaFinder from "../components/VilaFinder/VilaFinder";
import { ThemeContext } from "../context/ThemeContextProvider";
const HomeScrean = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="theme" data-scheme={theme}>
      <VilaFinder />
    </div>
  );
};

export default HomeScrean;
