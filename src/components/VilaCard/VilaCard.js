import React from "react";
import starSvg from "../../assets/image/star.svg";
import Carousel from "react-multi-carousel";
import styled from "styled-components";
import "./VilaCard.scss";
const VilaCard = ({ data, gallery }) => {
  const CardWrapper = styled.div`
    direction: rtl;
    max-width: 300px;
    max-height: 500px;
    border-radius: 5px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    position: relative;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  `;
  return (
    <>
      <CardWrapper key={data.id}>
        <div className="card__header">
          <div className="card__header__badges">
            {data.isVerified && (
              <div className="card__header__badges--badge1">
                <span>کاربر تایید شده</span>
              </div>
            )}
            {data.discountPresentage !== 0 ? (
              <div className="card__header__badges--badge2">
                <span>{data.discountPresentage}%</span>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay={false}
            autoPlaySpeed={10000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
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
                items: 1,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
              },
            }}
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {gallery.map((item, index) => (
              <img src={item} alt="house-gallery" key={index} />
            ))}
          </Carousel>
        </div>
        <div className="card__body">
          <div className="card__body__title">
            <h2>{data.title}</h2>
          </div>
          <div className="card__body__info">
            <p className="location">{data.location}</p>
            <p className="rooms">-{data.rooms} اتاق</p>
          </div>
        </div>
        <div className="card__footer">
          <div className="card__footer__rating">
            <img src={starSvg} alt="starSvg" />
            <p>{data.rating}</p>
          </div>
          <div className="card__footer__price">
            {data.discountPresentage !== 0 ? (
              <>
                <s>{data.price}</s>
                <strong style={{ color: "red" }}>
                  {data.priceWithDiscount}
                </strong>
              </>
            ) : (
              <strong>{data.price}</strong>
            )}
            {data.discountPresentage !== 0 ? (
              <strong style={{ color: "red" }}>تومان</strong>
            ) : (
              <strong>تومان</strong>
            )}
          </div>
        </div>
      </CardWrapper>
    </>
  );
};

export default VilaCard;
