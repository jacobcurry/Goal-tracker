import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';

import GoalForm from './Components/GoalForm'

const App = () => {
  // const [goal, setGoal] = useState([{
  //   goal: "",
  //   isComplete: false,
  //   timeframe: ""
  // }])

  const [goal, setGoal] = useState('')
  const [isComplete, setIsComplete] = useState('')
  const [timeframe, setTimeframe] = useState('')

  const getGoal = (event) => {
    setGoal = event.target.value
  } 

  const getIsComplete = (event) => {
    setIsComplete = event.target.value
  }
  

  const getTimeframe = (event) => {
    setTimeframe = event.target.value
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    axios.post(
      'http://localhost:3000/goals',
      {
        goal: goal,
        isComplete: isComplete,
        timeframe: timeframe,
      }
    ).then(()=> {
      axios
        .get('http://localhost:3000/goals')
        .then((response)=> {
          setGoal(response.data)
        })
    })
  }

  const handleDelete = (goalData)=> {
    axios 
      .delete(`http://localhost:3000/goals/${goalData._id}`)
      .then(()=> {
        axios 
          .get('http://localhost:3000/goals')
          .then((response)=> {
            setGoal(response.data)
          })
      })
  }

  const handleUpdateAnimals = (goalData)=> {
    axios 
      .put(
        `http://localhost:3000/goals/${goalData._id}`,
        {
          goal: goal.goal,
          isComplete: goal.isComplete,
          timeframe: goal.timeframe,
        }
      ).then(()=> {
        axios 
          .get('http://localhost:3000/goals')
          .then((response)=> {
            setGoal(response.data)
          })
      })
  }

  useEffect(()=>{
    axios
      .get('http://localhost:3000/goals')
      .then((response)=>{
        setGoal(response.data)
      })
  }, [])


    return (
    <>
      <GoalForm handleFormSubmit = {handleFormSubmit}/>
    </>
  )
}

export default App;
