import React, { useState } from "react";

const Index = (props) => {
  const [showUpdateForm, setShowUpdateFrom] = useState(true);

  const handleShowUpdateForm = () => {
    setShowUpdateFrom(!showUpdateForm);
    props.setGoal(props.eachGoal.goal);
    props.setIsComplete(props.eachGoal.isComplete);
    props.setTimeframe(props.eachGoal.timeframe);
  };
  const getGoal = (event) => {
    props.setGoal(event.target.value);
  };

  const getIsComplete = (event) => {
    props.setIsComplete(event.target.checked);
  };

  const getTimeframe = (event) => {
    props.setTimeframe(event.target.value);
  };

  return (
    <>
      {showUpdateForm ? (
        <div className=" goaldisplay m-3">
          <h3>Timeframe: {props.eachGoal.timeframe}</h3>
          <h4 className="fw-normal">Goal: {props.eachGoal.goal}</h4>
          {props.eachGoal.isComplete ? (
            <h1> &#10004;</h1>
          ) : (
            <h5>Edit to mark complete</h5>
          )}
          <button
            className="btn btn-danger me-2"
            onClick={(e) => props.handleDeleteGoal(props.eachGoal)}
          >
            Delete
          </button>
          <button className="btn btn-success" onClick={handleShowUpdateForm}>
            Edit
          </button>
        </div>
      ) : (
        <form className="goaldisplay m-3">
          <select
            className="form-select"
            onChange={getTimeframe}
            name="dropdown"
          >
            <option>{props.eachGoal.timeframe}</option>
            <option name="dropdown" value="Daily">
              Daily
            </option>
            <option name="dropdown" value="Weekly">
              Weekly
            </option>
            <option name="dropdown" value="Monthly">
              Monthly
            </option>
            <option name="dropdown" value="Yearly">
              Yearly
            </option>
          </select>
          <label>Goal:</label>
          <input
            className="form-control"
            onChange={getGoal}
            defaultValue={props.eachGoal.goal}
          />
          {props.eachGoal.isComplete ? (
            <input
              className="form-check-input mt-3 mb-3 me-2"
              onClick={getIsComplete}
              type="checkbox"
              defaultChecked
            />
          ) : (
            <input
              className="form-check-input mt-3 mb-3 me-2"
              onClick={getIsComplete}
              type="checkbox"
            />
          )}
          <label
            className="form-check-label mt-3 mb-3"
            htmlFor="flexCheckDefault"
          >
            Did you complete this goal?
          </label>
          <button
            className="btn btn-primary ms-3"
            onClick={(e) => {
              e.preventDefault();
              setShowUpdateFrom(true);
              props.handleUpdateGoal(props.eachGoal);
            }}
            type="submit"
          >
            Submit
          </button>
          <button
            onClick={(e) => {
              setShowUpdateFrom(!showUpdateForm);
            }}
            className="btn btn-danger ms-3"
          >
            Back
          </button>
        </form>
      )}
    </>
  );
};

export default Index;
