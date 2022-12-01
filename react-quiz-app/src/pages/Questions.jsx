import React, {useState, useEffect} from 'react'
import { Box } from '@mui/system';
import { Button, Typography, CircularProgress  } from '@mui/material';
import useAxios from '../hooks/useAxios';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleScoreChange } from '../redux/actions';
import {decode} from 'html-entities';



const getRandomInt = (max) =>{
  return Math.floor(Math.random() * Math.floor(max))
}



const Questions = () => {
  // const {
  //   questions_category,  question_difficulty, question_type, amount_of_question
  // } = useSelector((state) => state)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const amount_of_question = useSelector(state => state.amount_of_question)
  const question_category = useSelector(state => state.question_category)
  const question_difficulty = useSelector(state => state.question_difficulty)
  const question_type = useSelector(state => state.question_type)
  const score = useSelector(state => state.score)
 
  
  let apiUrl = `/api.php?amount=${amount_of_question}`
  if(question_category){
    apiUrl = apiUrl.concat(`&category=${question_category}`)
  }
  if(question_difficulty){
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`)
  }
  if(question_type){
    apiUrl = apiUrl.concat(`&type=${question_type}`)
  }

  const { response, loading } = useAxios({ url: apiUrl })
  const [questionIndex,setQuestionIndex] = useState(0)
  const [options, setOptions] = useState([])
  console.log(options)

  useEffect(() => {
    if(response?.results.length){
      const question = response.results[questionIndex]
      console.log(question)
      let answers = [...question.incorrect_answers]
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
        
      );
      setOptions(answers)

    }
    
   
  }, [response, questionIndex])
  
  
  // console.log(response);
  // console.log("loading", loading);
  if(loading){
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    )
  }
 
const handleClickAnswer = (e) =>{
  //if answer correct, add 1 point
  const question = response.results[questionIndex]
  if(e.target.textContent === question.correct_answer){
    dispatch(handleScoreChange(score+ 1))
  }

  //go to next question
  if(questionIndex + 1 < response.results.length){
    setQuestionIndex(questionIndex + 1)
  }

  //finished the last question, redirect to the score page
  else{
      navigate('/score')
  }
}

  
  return (
    <Box>
      <Typography variant="h4">Question {questionIndex + 1} </Typography>
      <Typography mt={5}>{decode(response.results[questionIndex].question)}</Typography>
      
      {options.map((data, id)=>{
        return(
          <Box mt={2} key={id}>
            <Button onClick={handleClickAnswer} variant="contained">{decode(data)}</Button>
          </Box>
        )
      })}

      <Box mt={5}>
        Score: {score} / {response.results.length}
      </Box>
    </Box>
  )
}

export default Questions