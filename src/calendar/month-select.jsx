import React from "react";
import Button from "../controls/button";

import "./month-select.css";

const MonthSelect = ({ viewDate, setViewDate }) => {
  const subtractMonth = () => {
    setViewDate(d => d.clone().subtract(1, "month"));
  };

  const addMonth = () => {
    setViewDate(d => d.clone().add(1, "month"));
  };

  return (
    <div className="month-select">
      <Button caption="<" onClick={subtractMonth} />
      <div className="month-select-group">
        <Button className="month-select-month">
          {viewDate.format("MMMM")}
        </Button>
        <Button className="month-select-year">{viewDate.format("YYYY")}</Button>
      </div>
      <Button caption=">" onClick={addMonth} />
    </div>
  );
};

export default MonthSelect;
