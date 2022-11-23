import React from 'react'
import SelectField from '../components/SelectField'
import { Button } from '@mui/material';
import { Box } from '@mui/system';


const Settings = () => {

  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    
    <div>
      <h2>Quiz App</h2>
      settings

      <form onSubmit={handleSubmit}>
        <SelectField label="Category" />
        <SelectField label="Difficulty" />
        <SelectField label="Type" />
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