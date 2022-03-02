import React, { useContext } from "react";
import VilaFinder from "../components/VilaFinder/";
import Hero from "../components/Hero/Hero";
import backgroundImage from "../assets/image/ramsar.jpg";
import { ThemeContext } from "../context/ThemeContextProvider";
const HomeScrean = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="theme" data-scheme={theme}>
      <div className="home-page">
        <Hero background={backgroundImage} overlayColor="rgba(0, 0, 0, 0.65)">
          <div className="container-fluid">
            <div className="row justify-content-md-center justify-content-lg-start">
              <div className="col-12 col-md-7 col-lg-4  ">
                <VilaFinder />
              </div>
            </div>
          </div>
        </Hero>
      </div>
    </div>
  );
};

export default HomeScrean;
