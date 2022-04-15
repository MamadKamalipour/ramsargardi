import React, { useState } from "react";
import "./SingleVilaLayout.scss";
import VilaSingleSidbar from "../components/VilaSingleSideBar/VilaSingleSidbar";
import VilaSingleMain from "../components/VilaSingleMain/VilaSingleMain";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
function SingleVilaLayout() {
  const [calendarDate, setCalendarDate] = useState([]);
  return (
    <div className="layout-container container mt-3 ">
      <main className="container__main">
        <VilaSingleMain
          calendarDate={calendarDate}
          setCalendarDate={(e) => setCalendarDate(e)}
        />
      </main>
      <aside className="container__sidebar">
        <VilaSingleSidbar
          calendarDate={calendarDate}
          setCalendarDate={(e) => setCalendarDate(e)}
        />
      </aside>
    </div>
  );
}

export default SingleVilaLayout;
