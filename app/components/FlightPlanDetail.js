import React from "react";
import FlightPlanMap from "./FlightPlanMap";

function FlightPlanDetail({ plan }) {
  return (
    <div className="flight-plan-detail">
      <h5>{plan.title}</h5>
      <FlightPlanMap plan={plan} />
    </div>
  );
}

export default FlightPlanDetail;
