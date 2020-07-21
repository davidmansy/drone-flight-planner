import React from "react";
import FlightPlans from "./FlightPlans";
import FlightPlanDetail from "./FlightPlanDetail";
import flightPlans from "../mocks/flightPlans";
import { getUniqueId } from "../utils/utils";

function FlightPlanner() {
  const [plans, setPlans] = React.useState(flightPlans);
  const [selectedPlan, setSelectedPlan] = React.useState(plans[0]);
  const [editMode, setEditMode] = React.useState(false);

  const handleSelectedPlan = (plan) => setSelectedPlan(plan);

  const addPlan = () => {
    const newPlan = {
      title: "New flight plan",
      id: getUniqueId(),
      path: [],
    };
    setEditMode(true);
    setPlans((plans) => [...plans, newPlan]);
    setSelectedPlan(newPlan);
  };

  const saveSelectedPath = (newPath) => {
    selectedPlan.path = newPath;
  };

  const updateSelectedTitle = (title) => {
    selectedPlan.title = title;
    setEditMode(false);
  };

  return (
    <div className="flight-planner">
      <FlightPlans
        plans={plans}
        selectedPlan={selectedPlan}
        handleSelectedPlan={handleSelectedPlan}
        addPlan={addPlan}
        editMode={editMode}
        setEditMode={setEditMode}
        updateSelectedTitle={updateSelectedTitle}
      />
      <FlightPlanDetail plan={selectedPlan} savePath={saveSelectedPath} />
    </div>
  );
}

export default FlightPlanner;
