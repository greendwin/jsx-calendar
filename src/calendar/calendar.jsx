import React from "react";
import clsx from "clsx";

import Button from "../controls/button";
import "./calendar.css";

const Calendar = ({ today }) => {
  const weekDays = ["m", "t", "w", "t", "f", "s", "s"];

  const dayNums = [];
  for (let k = 1; k <= 31; k += 1) {
    dayNums.push(k);
  }

  return (
    <div className="calendar">
      <div className="calendar-caption">
        <Button>&lt;</Button>
        <div className="month-year-group">
          <Button className="calendar-month">January</Button>
          <Button className="calendar-year">2020</Button>
        </div>
        <Button>&gt;</Button>
      </div>
      <div className="month-days">
        {weekDays.map((d, k) => (
          <div
            key={k}
            className={clsx("weekday", { "weekday-holiday": d === "s" })}
          >
            {d}
          </div>
        ))}
        {dayNums.map(k => (
          <Button key={k} className={clsx("day", { "day-today": k === 7 })}>
            {k}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
