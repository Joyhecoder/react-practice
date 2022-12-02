import React from 'react'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleScoreChange, handleAmountChange } from '../redux/actions'

const FinalScore = () => {
  const score = useSelector(state => state.score)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleBackToSettings = () =>{
    dispatch(handleScoreChange(0))
    dispatch(handleAmountChange(50))
    navigate('/')
  }
  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>Final Score {score}</Typography>
      <Button onClick={handleBackToSettings} variant="outlined">Back to settings!</Button>
    </Box>
  )
}

export default FinalScore