import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import COUNTRY_CODES from '../../constants/countrycode.json'
import eventEmitter, { events } from '@/services/eventEmitter';

interface Selecter {
    country : string,
    selecterHandler ?: (e : string) => void
}

interface Country {
    country : object
    name : string,
    code : string
}


export default function Selecter() {

  const handleChange = (event: SelectChangeEvent) => {
    setTimeout(()=>{
      eventEmitter.emit(events.countrySelect, event.target.value)
    },100)
  };

  return (
    <Box sx={{ minWidth: 120 , padding : "20px"}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">SELECT COUNTRY</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="SELECT COUNTRY"
          onChange={handleChange}
        >
          {
            COUNTRY_CODES.map((country, idx) => {
              return(
              <MenuItem value={country.code} key={idx}>{country.name}</MenuItem>
            )})
          }
        </Select>
      </FormControl>
    </Box>
  );
}