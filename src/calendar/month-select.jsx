import React, { useMemo } from "react";
import Button from "../controls/button";
import ButtonTextBox from "../controls/button-text-box";
import Dropdown from "../controls/dropdown";

import "./month-select.css";
import moment from "moment";

const MonthSelect = ({ viewDate, setViewDate }) => {
  const subtractMonth = () => {
    setViewDate(d => d.clone().subtract(1, "month"));
  };

  const addMonth = () => {
    setViewDate(d => d.clone().add(1, "month"));
  };

  const currentMonth = viewDate.format("MMMM");

  const monthNames = useMemo(() => {
    const r = [];
    const month = moment();
    month.startOf("year");

    for (var k = 0; k < 12; k += 1) {
      r.push(month.format("MMMM"));
      month.add(1, "month");
    }

    return r;
  }, []);

  return (
    <div className="month-select">
      <Button caption="<" onClick={subtractMonth} />
      <div className="month-select-group">
        <Dropdown
          className={"month-select-month"}
          options={monthNames}
          value={currentMonth}
          setValue={name => setViewDate(d => d.clone().month(name))}
        />
        <ButtonTextBox
          className="month-select-year"
          value={viewDate.format("YYYY")}
          setValue={y => setViewDate(viewDate.clone().year(y))}
        />
      </div>
      <Button caption=">" onClick={addMonth} />
    </div>
  );
};

export default MonthSelect;
