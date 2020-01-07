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

const Day = ({ nmb, holiday, today }) => (
  <Button
    caption={nmb}
    className={clsx("day", { "day-holiday": holiday }, { "day-today": today })}
  />
);

const DummyDay = ({ nmb }) => <div className="day day-dummy">{nmb}</div>;

const createDays = viewDate => {
  const days = [];

  const today = moment();
  today.startOf("day");

  const cur = viewDate.clone();
  cur.startOf("month");
  cur.startOf("isoWeek");

  for (let week = 0; week < 6; week += 1) {
    for (let k = 0; k < 7; ++k, cur.add(1, "day")) {
      if (cur.month() === viewDate.month()) {
        days.push(
          <Day
            key={days.length}
            nmb={cur.date()}
            holiday={k % 7 === 6 || k % 7 === 0}
            today={cur.isSame(today)}
          />
        );
      } else {
        days.push(<DummyDay key={days.length} nmb={cur.date()} />);
      }
    }
  }

  return days;
};

const MonthDays = ({ viewDate }) => {
  const days = useMemo(() => createDays(viewDate), [viewDate]);

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