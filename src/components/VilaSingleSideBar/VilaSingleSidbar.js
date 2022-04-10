import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import CustomRadioButton2 from "../CustomRadioButton2/CustomRadioButton2";
import { VilaContext } from "../../context/VilaContextProvider";
import CustomButton from "../CustomButton/CustomButton";
import starSvg from "../../assets/image/star.svg"
import "./VilaSingleSideBar.scss";
function VilaSingleSidbar({ calendarDate, setCalendarDate }) {
  const location = useLocation();
  const { vilaData } = useContext(VilaContext);
  const id = location.pathname.split("/")[2];
  const vilaInfo = vilaData.find((vila) => vila.id === parseInt(id));
  const peopleNum = [
    {
      id: "1",
      type: "4 نفر",
      htmlId: "4-people",
      value: "4",
    },
    {
      id: "2",
      type: "4 تا 8",
      htmlId: "4-8people",
      value: "4-8",
    },
    {
      id: "3",
      type: "8 به بالا",
      htmlId: "up-to-8",
      value: "up-to-8",
    },
  ];
  const [peopleNumValue, setPeopleNumValue] = useState("");
  const peopleNumValueChange = (num) => {
    setPeopleNumValue(num);
  };




  return (
    <div className="sidebar__card">
      {vilaInfo.discountPresentage !== 0 ? (
        <div className="descount">
          <s>{vilaInfo.price}</s>
          <div className="card__header__badges--badge">
            <span>{vilaInfo.discountPresentage}%</span>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="sidebar__card__header">
        <span className="price">{vilaInfo.priceWithDiscount} تومان / هرشب</span>
        <div className="rating">
        <img src={starSvg} alt="starSvg" />
            <p>{vilaInfo.rating}</p>
        </div>
      </div>

      <div className="sidebar__card__body">
        <label className="datepicker-title">انتخاب تاریخ</label>
        <CustomDatePicker
          value={calendarDate}
          onValueChange={setCalendarDate}
          bookedDays={vilaInfo.bookedDays}
        />
        <CustomRadioButton2
          data={peopleNum}
          groupname="people"
          label="تعداد نفرات"
          value={peopleNumValue}
          onValueChange={peopleNumValueChange}
          backgroundColor="#f25487"
          borderColor="#f7d9d9"
          boxShadow="0 0 0 0.25rem rgba(255, 0, 0, 0.281)"
          ActiveColor="#fff"
        />
        <CustomButton type="submit" text="ارسال درخواست" />
      </div>

      <div className="sidebar__card__footer"></div>
    </div>
  );
}

export default VilaSingleSidbar;
