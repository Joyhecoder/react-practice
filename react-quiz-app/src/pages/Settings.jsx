import React from 'react'
import SelectField from '../components/SelectField'
import TextFieldComp from '../components/TextFieldComp'
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import useAxios from '../hooks/useAxios';


const Settings = () => {
  const { response, error, loading} = useAxios({url: "/api.php?amount=10"})
  console.log(response)

  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    
    <div>
      <h2>Quiz App</h2>
      settings

      <form onSubmit={handleSubmit}>
        <SelectField label="Category" />
        <SelectField label="Difficulty" />
        <SelectField label="Type" />
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