import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";

import GoalForm from "./Components/GoalForm";
import Index from "./Components/Index";
import "./App.css";

const App = () => {
  // const [goal, setGoal] = useState([{
  //   goal: "",
  //   isComplete: false,
  //   timeframe: ""
  // }])

  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [timeframe, setTimeframe] = useState("");
  const [showGoals, setShowGoals] = useState(false);
  const [showGoalForm, setShowGoalForm] = useState(false);
  const [placeholder, setPlaceholder] = useState("Goal Timeframe");

  const getGoal = (event) => {
    setGoal(event.target.value);
  };

  const getIsComplete = (event) => {
    setIsComplete(event.target.checked);
  };

  const getTimeframe = (event) => {
    setTimeframe(event.target.value);
  };

  const handleShowgoals = (e) => {
    setShowGoals(!showGoals);
    setShowGoalForm(false);
  };
  const handleShowGoalsForm = (e) => {
    setShowGoalForm(!showGoalForm);
    setShowGoals(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    setShowGoals(!showGoals);
    setShowGoalForm(!showGoalForm);

    setPlaceholder("Goal Timeframe");
    axios
      .post("http://localhost:3000/goals", {
        goal: goal,
        isComplete: isComplete,
        timeframe: timeframe,
      })
      .then(() => {
        axios.get("http://localhost:3000/goals").then((response) => {
          setGoals(response.data);
        });
      });
  };

  const handleDeleteGoal = (goalData) => {
    axios.delete(`http://localhost:3000/goals/${goalData._id}`).then(() => {
      axios.get("http://localhost:3000/goals").then((response) => {
        setGoals(response.data);
      });
    });
  };

  const handleUpdateGoal = (goalData) => {
    axios
      .put(`http://localhost:3000/goals/${goalData._id}`, {
        goal: goal,
        isComplete: isComplete,
        timeframe: timeframe,
      })
      .then(() => {
        axios.get("http://localhost:3000/goals").then((response) => {
          setGoals(response.data);
        });
      });
  };

  useEffect(() => {
    axios.get("http://localhost:3000/goals").then((response) => {
      setGoals(response.data);
    });
  }, []);

  return (
    <div className="container mt-3 ">
      <h1 className="text-center fw-bold">Goal Tracker</h1>
      <div className="showBtns">
        <button className="btn btn-primary m-3" onClick={handleShowgoals}>
          Show Goals
        </button>
        <button className="btn btn-primary m-3" onClick={handleShowGoalsForm}>
          Create a New Goal
        </button>
      </div>
      <div className="">
        {showGoals
          ? goals.map((eachGoal, index) => {
              return (
                <div key={index}>
                  <Index
                    eachGoal={eachGoal}
                    handleDeleteGoal={handleDeleteGoal}
                    handleUpdateGoal={handleUpdateGoal}
                    setGoal={setGoal}
                    setIsComplete={setIsComplete}
                    setTimeframe={setTimeframe}
                  />
                </div>
              );
            })
          : null}
      </div>

      {showGoalForm ? (
        <GoalForm
          handleFormSubmit={handleFormSubmit}
          getGoal={getGoal}
          getIsComplete={getIsComplete}
          getTimeframe={getTimeframe}
          placeholder={placeholder}
        />
      ) : null}
    </div>
  );
};

export default App;
