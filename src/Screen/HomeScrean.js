import React, { useContext } from "react";
//components
import VilaFinder from "../components/VilaFinder/";
import Hero from "../components/Hero/Hero";
import Heading from "../components/Heading/Heading";
import TopNavBanner from "../components/TopNavBanner/TopNavBanner";
import Header from "../components/Header/Header";
import CustomButton from "../components/CustomButton/CustomButton";
//other
import topBanner from "../assets/image/topbanner.jpg";
import Logo from "../assets/image/logo.png";
import backgroundImage from "../assets/image/ramsar.jpg";
import { ThemeContext } from "../context/ThemeContextProvider";
const HomeScrean = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="theme" data-scheme={theme}>
      <div className="home-page">
        <TopNavBanner image={topBanner} alt="topbanner" />
        <Header logo={Logo} isSticky={true} />
        <Hero background={backgroundImage} overlayColor="rgba(0, 0, 0, 0.65)">
          <div className="container-fluid">
            <div className="row justify-content-md-center justify-content-lg-space-evenly align-items-center ">
              <div className="col-12 col-md-5 col-lg-4 ">
                <VilaFinder />
              </div>
              <div className="col-12 col-md-5 col-lg-4 ms-5 mt-3 mt-md-0">
                <div className="content-wrapper py-5">
                  <Heading>رامسرگردی</Heading>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                  </p>
                  <CustomButton
                    type={"customBtn"}
                    onClickHandler
                    text="مشاهده ویلا ها"
                    btnWidth
                    csColor="#333"
                    csBgColor="#fff"
                    csBorderColor="#333"
                    csOnFocusBoxShadow="0 0 0 0.25rem rgb(114 114 114 / 76%)"
                  />
                </div>
              </div>
            </div>
          </div>
        </Hero>
      </div>
    </div>
  );
};

export default HomeScrean;
