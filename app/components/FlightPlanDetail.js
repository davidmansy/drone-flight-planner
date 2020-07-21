import React from "react";
import FlightPlanMap from "./FlightPlanMap";

function FlightPlanDetail({ plan, updatePath }) {
  return (
    <div className="flight-plan-detail">
      <h5>{plan.title}</h5>
      <FlightPlanMap initPath={plan.path} updatePath={updatePath} />
    </div>
  );
}

export default FlightPlanDetail;