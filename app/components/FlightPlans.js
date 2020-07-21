import React from "react";
import FlightPlansItemInput from "./FlightPlansItemInput";
import FlightPlansItem from "./FlightPlanItem";

function FlightPlans({
  plans,
  selectedPlan,
  handleSelectedPlan,
  updateSelectedTitle,
  addPlan,
  editMode,
}) {
  return (
    <div className="flight-plans">
      <div>
        <h2>Drone Flight Planner</h2>
        <h5>Fligth Plans</h5>
        <ul>
          {plans.map((plan) => {
            return (
              <li key={plan.id}>
                {editMode && selectedPlan === plan ? (
                  <FlightPlansItemInput
                    initTitle={selectedPlan.title}
                    updateTitle={updateSelectedTitle}
                  />
                ) : (
                  <FlightPlansItem
                    handleSelectedPlan={(e) => handleSelectedPlan(plan)}
                    title={plan.title}
                    isSelected={selectedPlan === plan}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="plan-list-add">
        <button onClick={addPlan}>
          <span className="plan-list-add-symbol">+</span>
          <span>New Flight Plan</span>
        </button>
      </div>
    </div>
  );
}

// TODO: add prop types

export default FlightPlans;
