import React from "react";
import "./HostInfoCard.scss";

const HostInfoCard = ({ data }) => {
  return (
    <main id="mainHostInfoCard">
      <div className="first-container-card">
        <div className="first-container-card__heading">
          <img
            className="first-container-card__heading__avatar"
            src={data.profilePic}
            alt="Hostpic"
          />
          <h3>{data.fullName}</h3>
          <span className="graytext">{data.joinedDate} </span>
        </div>
        <div className="first-container-card__underheading">
          <span>
            <i className="fa-solid fa-star "></i>
            {`${data.visited} بار دیده شده`}
          </span>
          {data.verified ? (
            <span>
              <i className="fa-solid fa-badge-check"></i> تایید شده
            </span>
          ) : null}

          {data.rate > 8 ? (
            <span>
              <i className="fa-solid fa-circle-heart"></i> میزبان برتر
            </span>
          ) : (
            <span>
              <i className="fa-solid fa-circle-heart"></i> امتیاز کاربر:{" "}
              {data.rate}
            </span>
          )}
        </div>
        <div className="first-container-card__body">
          <p>
            {data.locationBtio}
          </p>
        </div>
        <div className="first-container-card__footer">
          <h6>لورم ایپسوم</h6>
          <p className="graytext">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و 
          </p>
        </div>
      </div>
      <div className="second-container-card">
        <div>
          <a
            href={`phoneto:${data.phoneNumber}`}
            className="second-container-card__button"
            type="submit"
          >
            ارتباط با میزبان
          </a>
        </div>
        <div className="second-container-card__tip">
          <span>
            <i className="fa-solid fa-note"></i>
            {data.rateInfo}
          </span>
        </div>
      </div>
    </main>
  );
};

export default HostInfoCard;
