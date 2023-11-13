import * as React from 'react';
import Home from '../pages/Home'
import Button from '@mui/material/Button';

function handleClick () {
  console.log('clicked')
}

  fetch(`http://localhost:3001/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

function ButtonUsage() {


  return <Button variant="contained" onClick={handleClick} >Proceed </Button>;
}

export default ButtonUsage;