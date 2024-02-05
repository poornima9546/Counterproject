import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React, {useState} from 'react'

export default function App() {
  let [counter, setCounter]= useState(0);

  const handleAdd = ()=>{
    setCounter(++counter)
  }
  
  const handleSubtract = ()=>{

    if(counter=0){
    setCounter(--counter)
    }
  }


  return (
    <>
      <Container sx={ContainerStyle}>
        <Box sx={BoxStyle}>

<Typography align='center' variant="h1" gutterBottom>
        {counter}
      </Typography>

      <Stack direction="row" spacing={2}>
      <Button variant="outlined" onClick={handleAdd}>+</Button>
      <Button variant="outlined" disabled={counter===0}onClick={handleSubtract}>-</Button>
      </Stack>
        </Box>
      </Container>
    </>
  )
}


const BoxStyle={
  backgroundColor: '#f6a9a9',
  borderRadius: '5px',
  width: '50%',
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
}

const ContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '720px'
}