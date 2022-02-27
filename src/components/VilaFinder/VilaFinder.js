import React, { useState } from "react";

import CustomDropDown1 from "../CustomDropDown1/CustomDropDown1";
import CustomRadioButton1 from "../CustomRadioButton1/CustomRadioButton1";
import backgroundImage from "../assets/image/ramsar.jpg";
import Hero from "../Hero/Hero";
// date imports

import "./VilaFinder.scss";
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
  // states

  const [customDropDownValue, setCustomDropDownValue] = useState("");
  const [vilatype, setVilaType] = useState("");
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
    focusedInput: null,
  });
  const [peopleNumValue, setPeopleNumValue] = useState("");

 
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log({ customDropDownValue, vilatype, date, peopleNumValue });
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
      <Hero background={backgroundImage} overlayColor="rgba(0, 0, 0, 0.65)">
        <form onSubmit={onSubmitHandler} className="vilaFinder">
          <div className="vilaFinder__wrapper m-2 ">
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
            {/* house type */}
            <CustomRadioButton1
              data={vilatypes}
              groupname="houseType"
              label="نوع اقامتگاه"
              mainColor={"rgb(192 192 192 / 89%)"}
              value={vilatype}
              onValueChange={onVilaTypeChange}
            />
            {/* date */}

            {/* People */}
            <CustomRadioButton1
              data={peopleNum}
              groupname="people"
              label="تعداد نفرات"
              mainColor={"rgb(192 192 192 / 89%)"}
              value={peopleNumValue}
              onValueChange={peopleNumValueChange}
            />
            <button type="submit">submit</button>
          </div>
        </form>
      </Hero>
    </>
  );
};

export default VilaFinder;
