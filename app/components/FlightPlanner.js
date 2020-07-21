import React from "react";
import FlightPlans from "./FlightPlans";
import FlightPlanDetail from "./FlightPlanDetail";
import flightPlans from "../mocks/flightPlans";
import { getUniqueId } from "../utils/utils";

function FlightPlanner() {
  const [plans, setPlans] = React.useState(flightPlans);
  const [selectedPlan, setSelectedPlan] = React.useState(plans[0]);
  const handleSelectedPlan = (plan) => setSelectedPlan(plan);
  const addPlan = () => {
    const newPlan = {
      title: "New flight plan",
      id: getUniqueId(),
      path: [],
    };
    setPlans((plans) => [...plans, newPlan]);
    setSelectedPlan(newPlan);
  };
  const updatePath = (newPath) => {
    selectedPlan.path = newPath;
  };

  return (
    <div className="flight-planner">
      <FlightPlans
        plans={plans}
        selectedPlan={selectedPlan}
        handleSelectedPlan={handleSelectedPlan}
        addPlan={addPlan}
      />
      <FlightPlanDetail plan={selectedPlan} updatePath={updatePath} />
    </div>
  );
}

export default FlightPlanner;
