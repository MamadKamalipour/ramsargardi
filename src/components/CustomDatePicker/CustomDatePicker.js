/* eslint-disable array-callback-return */
/* eslint-disable no-extend-native */
import React from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import "react-multi-date-picker/styles/layouts/mobile.css";
import "./CustomDatePicker.scss";
function CustomDatePicker({ value, onValueChange }) {
  const weekDays = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ];
  String.prototype.toFaDigit = function () {
    return this.replace(/\d+/g, function (digit) {
      var ret = "";
      for (var i = 0, len = digit.length; i < len; i++) {
        ret += String.fromCharCode(digit.charCodeAt(i) + 1728);
      }
      return ret;
    });
  };

  const toEnDigit = function (str) {
    const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g]
    if(typeof str === 'string')
      {
        for(var i=0; i<10; i++)
        {
          str = str.replace(persianNumbers[i], i);
        }
      }
      return str;
  };

  const date = new DateObject({
    date: new Date(),
    calendar: persian,
    locale: persian_en,
  });
  const bookedDays = ["1401/01/15", "1401/01/20", "1401/01/18", "1401/01/25"];
  let newBookedDays;
  newBookedDays = bookedDays.filter(day=> {
    if(day > date.format("YYYY/MM/DD"))
    return day.toFaDigit()
  })
  const onChangeHandler = (e) => {
    onValueChange(e.format("YYYY/MM/DD"));
  };
  return (
    <DatePicker
      minDate={new DateObject({ calendar: persian }).set(
        "day",
        `${date.format("D")}`
      )}
      value={value}
      onChange={onChangeHandler}
      weekDays={weekDays}
      calendar={persian}
      range
      locale={persian_fa}
      calendarPosition={"bottom"}
      plugins={[weekends()]}
      mapDays={({ date }) => {
        let isBooked = newBookedDays.includes(toEnDigit(date.format("YYYY/MM/DD")));

        if (isBooked )
          return {
            disabled: true,
            style: { color: "#ccc" },
            onClick: () => alert("این تاریخ رزرو شده است"),
            children: (
              <div
                data-toggle="tooltip"
                data-placement="top"
                title="این تاریخ رزرو شده است"
              >
                <div className="custom-day-wrapper">
                  <p className="custom-day">{date.format("D")}</p>
                  <small className="custom-day">رزرو شده</small>
                </div>
              </div>
            ),
          };
      }}
      hideYear
      disableYearPicker
    />
  );
}

export default CustomDatePicker;
