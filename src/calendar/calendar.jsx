import React, { useState } from "react";
import moment from "moment";

import MonthSelect from "./month-select";
import MonthDays from "./month-days";

import "./calendar.css";

const Calendar = ({ value }) => {
  const selectedDate = moment(value);
  const [viewDate, setViewDate] = useState(() => selectedDate.clone());

  return (
    <div className="calendar">
      <MonthSelect viewDate={viewDate} setViewDate={setViewDate} />
      <MonthDays viewDate={viewDate} selectedDate={selectedDate} />
    </div>
  );
};

export default Calendar;
