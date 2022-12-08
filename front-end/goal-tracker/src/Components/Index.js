import React from "react";

const Index = (props) => {
  return (
    <>
      <div>
        <h3>{props.eachGoal.timeframe}</h3>
        <p>{props.eachGoal.goal}</p>
        {props.eachGoal.isComplete ? (
          <input type="checkbox" defaultChecked />
        ) : (
          <input type="checkbox" />
        )}
      </div>
    </>
  );
};

export default Index;
