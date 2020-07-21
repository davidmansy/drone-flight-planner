import React from "react";
import ReactDOM from "react-dom";
import FlightPlanner from "./components/FlightPlanner";
import "./index.css";

function App() {
  return (
    <div className="container">
      <FlightPlanner />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
