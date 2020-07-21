import React from "react";
import FlightPlanMap from "./FlightPlanMap";

function FlightPlanDetail({ plan, savePath }) {
  return (
    <div className="flight-plan-detail">
      <h5>{plan.title}</h5>
      <FlightPlanMap initialPath={plan.path} savePath={savePath} />
    </div>
  );
}

export default FlightPlanDetail;
