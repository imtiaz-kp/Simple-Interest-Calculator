
import './App.css';
import {TextField} from '@mui/material'
import Stack from '@mui/material/Stack';
import {Button} from '@mui/material'
import { useState } from 'react';


function App() {
  const [interest,setInterest]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)
  const [isPrincipalValid,setPrincipalValid]=useState(true)
  const [isRateValid,setRateValid]=useState(true)
  const [isYearValid,setYearValid]=useState(true)
  const handleCalulate=(e)=>{
  e.preventDefault()
  if(!principle || !rate || !year){
    alert("please fill the form completely ")
    }else{
    setInterest(principle*rate*year/100)
  }
  }

  const validateInput=(e)=>{
    const {value,name} =e.target
    if(!!value.match(/^[0-9]+$/)){
     if(name==="principal"){
      setPrinciple(value)
      setPrincipalValid(true)
     }else if(name==="rate"){
      setRate(value)
      setRateValid(true)
     }else if (name==="year"){
      setYear(value)
      setYearValid(true)
     }
  }else{
    if(name==="principal"){
      setPrinciple(value)
      setPrincipalValid(false)
     }else if(name==="rate"){
      setRate(value)
      setRateValid(false)
     }else if (name==="year"){
      setYear(value)
      setYearValid(false)
     }
  }
}
  const handilReset=()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
  }

  return (
    <>
    <div style={{height:'100vh'}} className='d-flex w-100 justify-content-center  align-items-center bg-dark'>
    <div className='w-25 bg-light rounded p-5'>
     <div className='heading'>
      <h3>Simple Calculator</h3>
      <p>Calculator your simple interest Easily</p>
     </div>
     <div style={{height:'150px'}} className='interest-card d-flex flex-column w-100 justify-content-center align-items-center rounded bg-info text-light shadow flex-column'>
      <h1>₹ {' '}{interest}</h1>
      <p className='fw-bold'>Total simple interest</p>
     </div>
     <form className='mt-5' onSubmit={handleCalulate}>
      <div className='mb-3'>
        <TextField className='w-100' id="outlined-basic" label="Principal amount" name='principal' variant="outlined" value={principle || "" } onChange={(e)=>validateInput(e)} /></div>
       
          { !isPrincipalValid && <div className='mb-3 text-danger'>
            Invalid Input
          </div>}
          <div className='mb-3'>
        <TextField className='w-100' id="outlined-basic" label="Rate of interesta (p.a) %" name='rate' variant="outlined" value={rate || ""} onChange={(e)=>validateInput(e)} /></div>
        { !isRateValid && <div className='mb-3 text-danger'>
            Invalid Input
          </div>}
        <div className='mb-3'>
        <TextField className='w-100' id="outlined-basic" label="Time period (year)" variant="outlined" name='year' value={year || ""}  onChange={(e)=>validateInput(e)} /></div>    
        { !isYearValid && <div className='mb-3 text-danger'>
            Invalid Input
          </div>}
        <Stack direction="row" spacing={2}>
        <Button style={{width:'200px',height:'70px'}}  variant="contained" type='submit' disabled={isPrincipalValid&&isRateValid&&isYearValid?false:true} >CALCULATE</Button>
        <Button onClick={handilReset} style={{width:'200px',height:'70px'}} variant="outlined" >RESET</Button>
  
      </Stack>
     </form>
    </div>
    </div>
    </>

  );
}

export default App;
