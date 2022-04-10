import React, { useState } from "react";
import "./index.scss";
import CustomDropDown1 from "../CustomDropDown1/CustomDropDown1";
import CustomRadioButton2 from "../CustomRadioButton2/CustomRadioButton2";
import CustomButton from "../CustomButton/CustomButton";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
const vilatypes = [
  {
    id: "1",
    type: "ویلا",
    htmlId: "vila",
    value: "vila",
  },
  {
    id: "2",
    type: "آپارتمان",
    htmlId: "apartment",
    value: "apartment",
  },
  {
    id: "3",
    type: "سوئیت",
    htmlId: "soiit",
    value: "soiit",
  },
  {
    id: "4",
    type: "هتل",
    htmlId: "hotel",
    value: "hotel",
  },
];
const cities = [
  { value: "ramsar", label: "رامسر" },
  { value: "mahmood-abad", label: "محمود آباد" },
  { value: "tonekabon", label: "تنکابن" },
  { value: "chaboksar", label: "چابکسر" },
];
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
const VilaFinder = () => {
  const [customDropDownValue, setCustomDropDownValue] = useState("");
  const [vilatype, setVilaType] = useState("");
  const [date, setDate] = useState([new Date(), new DateObject({ calendar: persian }).add(1, "days")]);
  const [peopleNumValue, setPeopleNumValue] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log({ customDropDownValue, vilatype, peopleNumValue, date });
  };

  const onDropDownValueChange = (val) => {
    setCustomDropDownValue(val);
  };
  const onVilaTypeChange = (type) => {
    setVilaType(type);
  };
  const peopleNumValueChange = (num) => {
    setPeopleNumValue(num);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="vilaFinder">
        <div className="vilaFinder__wrapper ">
          {/* Location */}
          <CustomDropDown1
            data={cities}
            type="single"
            name="cities"
            label="انتخاب شهر"
            defaultValue={cities[0]}
            value={customDropDownValue}
            onValueChange={onDropDownValueChange}
          />
          {/* date */}
          <div className="date-wrapper">
            <div className="date-input">
              <h5>تاریخ ورود و خروج</h5>
              <CustomDatePicker value={date} onValueChange={setDate} bookedDays={[]}/>
            </div>
          </div>
          {/* house type */}
          <CustomRadioButton2
            data={vilatypes}
            groupname="houseType"
            label="نوع اقامتگاه"
            value={vilatype}
            onValueChange={onVilaTypeChange}
            backgroundColor="#f25487"
            borderColor="#f7d9d9"
            boxShadow="0 0 0 0.25rem rgba(255, 0, 0, 0.281)"
            ActiveColor="#fff"
          />

          {/* People */}
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
          <CustomButton
            type="customBtn"
            style={{
              marginRight: "1rem",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            icon="fa-solid fa-magnifying-glass search-icon"
            text="جستجو"
            hoverColor="#fff"
            csColor="#fff"
            csBgColor="#f25487"
            csBorderColor="#f7d9d9"
          />
        </div>
      </form>
    </>
  );
};

export default VilaFinder;
