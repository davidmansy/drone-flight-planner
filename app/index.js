import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FlightPlanner from "./components/FlightPlanner";

function App() {
  return (
    <div className="container">
      <FlightPlanner />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
