import React, { useMemo } from "react";
import moment from "moment";
import clsx from "clsx";

import Button from "../controls/button";

import "./month-days.css";

const WeekdayLabel = ({ caption, holiday }) => (
  <div className={clsx("weekday", { "weekday-holiday": holiday })}>
    {caption}
  </div>
);

const Day = ({ nmb, today, selected, onClick }) => (
  <Button
    caption={nmb}
    className={clsx(
      "day",
      { "day-today": today },
      { "day-selected": selected }
    )}
    onClick={onClick}
  />
);

const DummyDay = ({ nmb }) => <div className="day day-dummy">{nmb}</div>;

const createDays = (viewDate, selectedDate, setSelectedDate) => {
  const days = [];

  const today = moment();
  today.startOf("day");

  const cur = viewDate.clone();
  cur.startOf("month");
  cur.startOf("isoWeek");

  for (let week = 0; week < 6; week += 1) {
    for (let k = 0; k < 7; ++k, cur.add(1, "day")) {
      if (cur.month() === viewDate.month()) {
        const next = cur.clone();
        days.push(
          <Day
            key={days.length}
            nmb={cur.date()}
            today={cur.isSame(today)}
            selected={cur.isSame(selectedDate)}
            onClick={() => setSelectedDate(next)}
          />
        );
      } else {
        days.push(<DummyDay key={days.length} nmb={cur.date()} />);
      }
    }
  }

  return days;
};

const MonthDays = ({ viewDate, selectedDate, setSelectedDate }) => {
  const days = useMemo(
    () => createDays(viewDate, selectedDate, setSelectedDate),
    [viewDate, selectedDate, setSelectedDate]
  );

  return (
    <div className="month-days">
      <WeekdayLabel caption="m" />
      <WeekdayLabel caption="t" />
      <WeekdayLabel caption="w" />
      <WeekdayLabel caption="t" />
      <WeekdayLabel caption="f" />
      <WeekdayLabel caption="s" holiday />
      <WeekdayLabel caption="s" holiday />
      {days}
    </div>
  );
};

export default MonthDays;
