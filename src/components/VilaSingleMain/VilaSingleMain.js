import React, { useContext } from "react";

import { useLocation } from "react-router-dom";
import { VilaContext } from "../../context/VilaContextProvider";
import { UserContext } from "../../context/UsersContextProvider";
import { toEnDigit } from "../../utils/functions";
import CustomCalendar from "../CustomCalendar/CustomCalendar";
import VilaFeatuers from "../VilaFeatuers/VilaFeatuers";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import HostInfoCard from "../HostInfoCard/HostInfoCard";
import moment from "moment";
import "./VilaSingleMain.scss";
import { DateObject } from "react-multi-date-picker";
function VilaSingleMain({ calendarDate, setCalendarDate }) {
  const location = useLocation();
  const { vilaData } = useContext(VilaContext);
  const id = location.pathname.split("/")[2];
  const vilaInfo = vilaData.find((vila) => vila.id === parseInt(id));
  const { users } = useContext(UserContext);
  const owenerInfo = users.find((user) => user.userName === vilaInfo.owner);
  let startDate;
  let endDate;
  if (calendarDate.length === 2) {
    startDate = calendarDate[1]
      .convert(gregorian, gregorian_en)
      .format("YYYY/MM/DD");
    endDate = calendarDate[0]
      .convert(gregorian, gregorian_en)
      .format("YYYY/MM/DD");
  }
  let nights = [];
  if (nights.length === 0) {
    nights = 0;
  }
  if (calendarDate.length === 1) {
    nights = parseInt(toEnDigit(calendarDate[0].format("DD")));
  }
  if (calendarDate.length > 1) {
    nights =
      moment.duration(moment(startDate).diff(moment(endDate))).asDays() - 1;
  }

  return (
    <div>
      <h2>{vilaInfo.title}</h2>
      <p>به میزبانی {owenerInfo.fullName}</p>
      <HostInfoCard data={owenerInfo} />
      <VilaFeatuers vilaOptions={vilaInfo.feature} />
      <div className="p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex justify-content-between flex-column">
            <p className="m-0 nights pb-3">{`${nights} شب اقامت `}</p>
            {nights === 0 ? (
              ""
            ) : nights === 1 ? (
              <span>
                {calendarDate[0].convert(persian, persian_fa).format("DD MMMM")}
              </span>
            ) : (
              <span>{`${calendarDate[0]
                .convert(persian, persian_fa)
                .format("DD MMMM")} تا ${calendarDate[1]
                .convert(persian, persian_fa)
                .format("DD MMMM")}`}</span>
            )}
          </div>
          <span className="clear-dates" onClick={() => setCalendarDate([])}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M336 160H320V144C320 135.2 312.8 128 304 128S288 135.2 288 144V160H224V144C224 135.2 216.8 128 208 128S192 135.2 192 144V160H176c-17.67 0-32 14.33-32 32v144c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V192C368 174.3 353.7 160 336 160zM320 320H192V240h128V320zM256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z" />
            </svg>
            پاک کردن تاریخ ها
          </span>
        </div>
        <CustomCalendar
          value={calendarDate}
          onValueChange={setCalendarDate}
          bookedDays={vilaInfo.bookedDays}
        />
      </div>
    </div>
  );
}

export default VilaSingleMain;
