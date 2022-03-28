import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.scss";
const Slider = ({ children, ...props }) => {
  return (
    <Carousel {...props}>
      {children}
    </Carousel>
  );
};

export default Slider;
