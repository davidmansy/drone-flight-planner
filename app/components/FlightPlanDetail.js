import React from "react";

function FlightPlanDetail({ plan }) {
  return (
    <div className="flight-plan-detail">
      <h5>Flight plan detail that will include a map</h5>
      <p>{plan.title}</p>
    </div>
  );
}

export default FlightPlanDetail;
