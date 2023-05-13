import React from 'react'
import { FormControl , FormLabel, Select, Input, Button, Form} from '@chakra-ui/react'
import { useState } from 'react'
import Footer from './Footer'
import "./appointment.css";
const initialData={
    name:"",
    adress:"",
    mob:"",
    doctor:"",
    date:""
}
    
export default function Appointment() {
   const [data, setData]=useState(initialData)
   const [input, setinput]=useState("")


   const handleBook=(e)=>{
  e.preventDefault()
  fetch('http://localhost:8080/appointments',{
    method:"POST",
    headers:{"Content-type" : "application/json"},
    body: JSON.stringify({...data, id:Math.random()*10})
  }).then((res)=>res.json())
  .then((response)=>{
 setData(response)
    console.log(response)
    alert("appointment booked")
  setData(initialData)
  })
   }
const handleChange=(e)=>{
    setinput(e.target.value)
setData({...data, [e.target.name]: e.target.value})

}

  return (
    <div className='appointment'>
 <div style={{width:"30%", margin:"auto", marginTop:"5%",backgroundColor:"teal" ,padding:"2%", borderRadius:"2px" }}
    > 
     <form className='form' style={{backgroundColor:"teal"}} onSubmit={handleBook}>
     <FormLabel className='large'>Name</FormLabel>
     <Input style={{backgroundColor:"white" , fontSize:"large"}} className='appointment-input' type='text' placeholder="Patient Name" name='name' onChange={handleChange} />
     <FormLabel typeof='text'>Adress</FormLabel>
     <Input style={{backgroundColor:"white" , fontSize:"large"}}   className='appointment-input' placeholder="Patient Adress" name='adress' onChange={handleChange} />
     <FormLabel>Date</FormLabel>
     <Input style={{backgroundColor:"white" , fontSize:"large"}}  className='appointment-input'
 placeholder="Select Date"
 type="date"
 name='date'
 onChange={handleChange}
/>
     <FormLabel>Mob. No.</FormLabel>
     <Input style={{backgroundColor:"white" , fontSize:"large"}}  className='appointment-input' type="Number" name='mob' placeholder="Mobile Number"  onChange={handleChange} />
  <FormLabel>Doctors</FormLabel>
  <select placeholder='Select Doctors' name="doctor"  onChange={handleChange}>
    <option>Select Doctor</option>
    <option>Dr. Nidhi</option>
    <option>Dr. Basu</option>
    <option>Dr. Bose</option>
    <option>Dr. Newton</option>
    <option>Dr. Elon Musk</option>
  </select>
  <br/>
  <br/>
<button className='button' type='submit'>Book</button>
</form>
    </div>
    <div>
      <Footer />
    </div>
    </div>
   
  )
}
