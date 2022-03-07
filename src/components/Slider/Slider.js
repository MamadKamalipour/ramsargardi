import React from "react";
import Carousel from "react-multi-carousel";
import "./Slider.scss"
const Slider = ({ children }) => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      centerMode={false}
      className="slider-custom"
      containerClass="container-with-dots"
      dotListClass="dot-custom"
      customTransition="all 1s linear"
      draggable
      focusOnSelect={false}
      partialVisible
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 4,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {children}
    </Carousel>
  );
};

export default Slider;
