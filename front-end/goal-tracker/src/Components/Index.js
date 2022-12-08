import React from "react";

const Index = (props) => {
  return (
    <>
      <div>
        <h3>{props.eachGoal.timeframe}</h3>
        <p>{props.eachGoal.goal}</p>
        {props.eachGoal.isComplete ? <h1> &#10004;</h1> : null}
      </div>
    </>
  );
};

export default Index;
