import React,{useState} from 'react'
import './CreateTask.css'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function CreateTask() {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    // Initialize the date state with the current date
    const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to handle date selection
  const handleDateChange = (event) => {
    // Parse the selected date from the input field
    const newDate = new Date(event.target.value);
    // Update the state with the new selected date
    setSelectedDate(newDate);
  };

  // Initialize the time state with a default time
  const [selectedTime, setSelectedTime] = useState('');

  // Function to handle time selection
  const handleTimeChange = (event) => {
    // Update the state with the new selected time
    setSelectedTime(event.target.value);
  };

  // repeat task
  return (

    <div className='form-container'>
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '55ch'  },
    }}
    noValidate
    autoComplete="off"
    >
    <div>
      <FormControl sx={{ m: 1, left:'0ch' ,width: '55ch', minWidth:120 }}>
        <InputLabel id="demo-multiple-name-label">Select Members</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    <TextField className='outlined-basic' id="outlined-basic" label="Title" variant="outlined" />
    
    <TextField className='outlined-basic' id="outlined-basic" label="Description" variant="outlined" />

    <div className='setdate'>
      <TextField className='date' label="Start Date" variant="outlined"
        type="date"
        value={selectedDate.toISOString().split('T')[0]} // Format date for input field
        onChange={handleDateChange} 
      />
    </div>

    <div className='setdate'>
      <TextField className='date' label="End Date" variant="outlined"
        type="date"
        value={selectedDate.toISOString().split('T')[0]} // Format date for input field
        onChange={handleDateChange} 
      />
    </div>

    <div>
      <TextField  className='time' label="Time" variant="outlined"
        type="time"
        value={selectedTime}
        onChange={handleTimeChange}
      />
    </div>
    <Autocomplete 
      disablePortal
      id="combo-box-demo"
      options={selectoption}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField className='repeatTask' {...params} label="Repeat Task" />}
    />

   <div>
    <Button className='submit' variant="contained">CREATE</Button>
    </div>
    <div>
    <Button className='cancel' variant="contained">CANCEL</Button>
    </div>
  </Box>
  </div>
  );
}
const selectoption=['Daily','Weekly','Monthly'];


function button() {
  return (
    <div>
       <buton>Button</buton>
    </div>
  )
}



export default CreateTask
