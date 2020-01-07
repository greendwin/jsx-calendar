import React, { useState } from "react";

import MonthSelect from "./month-select";
import MonthDays from "./month-days";

import "./calendar.css";

const Calendar = ({ value, setValue }) => {
  const normValue = value.clone().startOf("day");
  const [viewDate, setViewDate] = useState(normValue);

  return (
    <div className="calendar">
      <MonthSelect viewDate={viewDate} setViewDate={setViewDate} />
      <MonthDays
        viewDate={viewDate}
        selectedDate={normValue}
        setSelectedDate={setValue}
      />
    </div>
  );
};

export default Calendar;
