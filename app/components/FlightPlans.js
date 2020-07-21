import React from "react";

function FlightPlans({ plans, selectedPlan, handleSelectedPlan, addPlan }) {
  return (
    <div className="flight-plans">
      <div>
        <h2>Drone Flight Planner</h2>
        <h5>Fligth Plans</h5>
        <ul>
          {plans.map((plan) => {
            return (
              <li key={plan.id}>
                <div
                  className={`plan-list-item ${
                    selectedPlan === plan ? "selected" : ""
                  }`}
                  onClick={() => handleSelectedPlan(plan)}
                >
                  <span>{plan.title}</span>
                </div>
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