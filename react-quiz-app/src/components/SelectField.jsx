import React, { useState} from 'react'
// import { useDispatch } from "react-redux";
import { FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import { Box } from '@mui/system';
import {
    handleCategoryChange,
    handleDifficultyChange,
    handleTypeChange,
  } from "../redux/actions";

const SelectField = (props) => {
    const { label, options } = props
    // const dispatch = useDispatch();
    const [value, setValue] = useState('')
    console.log("selectField", options)

    const handleChange = (e) =>{
     setValue(e.target.value)
    }
  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          {options.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectField