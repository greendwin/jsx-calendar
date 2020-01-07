import React, { useState } from "react";
import moment from "moment";
import Calendar from "./calendar";
import TextBox from "./controls/text-box";

import "./app.css";

const App = () => {
  const [today, setToday] = useState(moment().format("YYYY-MM-DD"));

  return (
    <div className="app">
      <TextBox className="date-selector" value={today} setValue={setToday} />

      <Calendar today={today} />
    </div>
  );
};

export default App;
