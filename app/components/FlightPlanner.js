import React from "react";
import FlightPlans from "./FlightPlans";
import FlightPlanDetail from "./FlightPlanDetail";
import flightPlans from "../mocks/flightPlans";

function FlightPlanner() {
  const [plans, setPlans] = React.useState(flightPlans);
  const [selectedPlan, setSelectedPlan] = React.useState(plans[0]);
  const handleSelectedPlan = (plan) => setSelectedPlan(plan);

  return (
    <div className="flight-planner">
      <FlightPlans
        plans={plans}
        selectedPlan={selectedPlan}
        handleSelectedPlan={handleSelectedPlan}
      />
      <FlightPlanDetail plan={selectedPlan} />
    </div>
  );
}

export default FlightPlanner;
