import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FlightPlanner from "./components/FlightPlanner";

function App() {
  return (
    <div className="container">
      <h1>Drone Flight Planner</h1>
      <FlightPlanner />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
