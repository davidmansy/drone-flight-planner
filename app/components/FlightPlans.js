import React from "react";

function FlightPlans({ plans, selectedPlan, handleSelectedPlan }) {
  return (
    <div className="flight-plans">
      <h2>List of flight plans</h2>
      <ul>
        {plans.map((plan) => {
          return (
            <li>
              <div onClick={() => handleSelectedPlan(plan)}>
                <p>{plan.title}</p>
                {selectedPlan === plan && "Selected"}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// TODO: add prop types

export default FlightPlans;
