import React from "react";
import Todo from "./component/Todo";
import PasswordGenerator from "./component/PasswordGenerator";
import CurrencyConverter from "./component/CurrenctConverter";
import WeatherInfo from "./component/WeaterInfo";

function App() {
  return (
    <div>
      <Todo />
      <PasswordGenerator />
      <CurrencyConverter />
      <WeatherInfo />
    </div>
  );
}

export default App;
