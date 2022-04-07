import React from "react";
import starSvg from "../../assets/image/star.svg";
// import Carousel from "react-multi-carousel";
import styled from "styled-components";
import "./VilaCard.scss";
import { Link } from "react-router-dom";
import CustomSwiper from "../CustomSwiper/CustomSwiper";
import { Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
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
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    margin-bottom: 5px;
  `;
  return (
    <Link to="/" className="cardLink">
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
          <CustomSwiper
            slidesPerView={1}
            spaceBetween={30}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {gallery.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item} alt="house-gallery" />
              </SwiperSlide>
            ))}
          </CustomSwiper>
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
    </Link>
  );
};

export default VilaCard;
