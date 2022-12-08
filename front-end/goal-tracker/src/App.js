import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [goal, setGoal] = useState([{
    goal: "",
    isComplete: false,
    timeframe: ""
  }])

  const getGoal = (event) => {
    let value = event.target.value
    setGoal(goal[value].goal)
  } 

  const getIsComplete = (event) => {
    let value = event.target.value
    setGoal(goal[value].isComplete)
  }

  const getTimeframe = (event) => {
    let value = event.target.value
    setGoal(goal[value].timeframe)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    axios.post(
      'http://localhost:3000/router',
      {
        goal: goal.goal,
        isComplete: goal.isComplete,
        timeframe: goal.timeframe,
      }
    ).then(()=> {
      axios
        .get('http://localhost:3000/router')
        .then((response)=> {
          setGoal(response.data)
        })
    })
  }

  const handleDelete = (goalData)=> {
    axios 
      .delete(`http://localhost:3000/router/${goalData._id}`)
      .then(()=> {
        axios 
          .get('http://localhost:3000/router')
          .then((response)=> {
            setGoal(response.data)
          })
      })
  }

  const handleUpdateAnimals = (goalData)=> {
    axios 
      .put(
        `http://localhost:3000/router/${goalData._id}`,
        {
          goal: goal.goal,
          isComplete: goal.isComplete,
          timeframe: goal.timeframe,
        }
      ).then(()=> {
        axios 
          .get('http://localhost:3000/router')
          .then((response)=> {
            setGoal(response.data)
          })
      })
  }

  useEffect(()=>{
    axios
      .get('http://localhost:3000/router')
      .then((response)=>{
        setGoal(response.data)
      })
  }, [])


    return (
    <>
      Goal: <input type="text"></input> 
    </>
  )
}

export default App;
