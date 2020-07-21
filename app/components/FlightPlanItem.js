import React from "react";

function FlightPlansItem({ title, isSelected, handleSelectedPlan }) {
  return (
    <div
      className={`plan-list-item ${isSelected ? "selected" : ""}`}
      onClick={handleSelectedPlan}
    >
      <span>{title}</span>
    </div>
  );
}

export default FlightPlansItem;
