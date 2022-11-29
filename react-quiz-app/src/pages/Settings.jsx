import React from 'react'
import SelectField from '../components/SelectField'
import TextFieldComp from '../components/TextFieldComp'
import { Button, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import useAxios from '../hooks/useAxios';


const Settings = () => {
  const { response, error, loading} = useAxios({url: "/api_category.php"})
  console.log(response)


  if(loading){
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    )
  }

  if(error){
    return (
      <Typography variant="h6" mt={20} color="red">
        Something went wrong!
      </Typography>
    )
  }

  const difficultyOptions = [
    {id: "easy", name: "Easy"},
    {id: "medium", name: "Medium"},
    {id: "hard", name: "Hard"}
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    
    <div>
      <h2>Quiz App</h2>
      

      <form onSubmit={handleSubmit}>
        <SelectField options={response.trivia_categories} label="Category" />
        <SelectField options={difficultyOptions} label="Difficulty" />
        <SelectField options={typeOptions} label="Type" />
        <TextFieldComp />
        <Box mt={3} width='100%'>
          <Button fullWidth variant="contained" type="submit">
            Get Started
          </Button>
        </Box>
      </form>
    </div>
  )
}

export default Settings