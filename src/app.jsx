import React, { useState } from "react";
import moment from "moment";
import Calendar from "./calendar";
import TextBox from "./controls/text-box";

import "./app.css";

const App = () => {
  const [today, setToday] = useState(() => moment());

  return (
    <div className="app">
      <Calendar value={today} setValue={setToday} />
      <TextBox
        className="date-selector"
        value={today.format("YYYY-MM-DD")}
        setValue={text => setToday(moment(text))}
      />
    </div>
  );
};

export default App;
