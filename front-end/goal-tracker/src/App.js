import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";

import GoalForm from "./Components/GoalForm";
import Index from "./Components/Index";

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

  const getGoal = (event) => {
    setGoal(event.target.value);
  };

  const getIsComplete = (event) => {
    setIsComplete(event.target.checked);
  };

  const getTimeframe = (event) => {
    setTimeframe(event.target.innerHTML);
  };

  const handleShowgoals = (e) => {
    setShowGoals(!showGoals);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
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

  const handleDelete = (goalData) => {
    axios.delete(`http://localhost:3000/goals/${goalData._id}`).then(() => {
      axios.get("http://localhost:3000/goals").then((response) => {
        setGoals(response.data);
      });
    });
  };

  const handleUpdateAnimals = (goalData) => {
    axios
      .put(`http://localhost:3000/goals/${goalData._id}`, {
        goal: goal.goal,
        isComplete: goal.isComplete,
        timeframe: goal.timeframe,
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
    <>
      <button onClick={handleShowgoals}>Show Goals</button>
      {showGoals
        ? goals.map((eachGoal, index) => {
            return (
              <div key={index}>
                <Index eachGoal={eachGoal} />
              </div>
            );
          })
        : null}
      <GoalForm
        handleFormSubmit={handleFormSubmit}
        getGoal={getGoal}
        getIsComplete={getIsComplete}
        getTimeframe={getTimeframe}
      />
    </>
  );
};

export default App;
