import React from "react";

const Index = (props) => {
  const handleCheckbox = (e) => {
    // console.log(props.eachGoal.isComplete[e.target.value]);
    // props.setGoal();
  };

  return (
    <>
      <div>
        <h3>{props.eachGoal.timeframe}</h3>
        <p>{props.eachGoal.goal}</p>
        {props.eachGoal.isComplete ? (
          <input onClick={handleCheckbox} type="checkbox" defaultChecked />
        ) : (
          <input onClick={handleCheckbox} type="checkbox" />
        )}
      </div>
    </>
  );
};

export default Index;
