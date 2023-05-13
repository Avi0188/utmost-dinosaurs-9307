import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <div style={{display:"flex", justifyContent:"space-around", backgroundColor:"teal", marginTop:"3%", padding:"3%"}}>
      <div>
<h2>Mindset</h2>
<ul>
    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
    <li>p: +9993233333</li>
    <li>Lorem ipsum dolor sit amet consectetur</li>
</ul>
      </div>

      <div>
<h2>Useful Links</h2>
<ul>
    <li>Appointment</li>
    <li>Pshycologist</li>
    <li>Pshycologist</li>
    <li>Mobile App</li>
    <li>Contact US</li>
</ul>

      </div>

      <div>
<h2>Subscribe To The Newsletter</h2>
<input style={{borderStyle:'none'}} type="text" name="" id="" placeholder='Enter Your Name'/>
<br />
<br />
<input type="text" name="" id="" placeholder='Enter Your Email'/>
<br />
<button style={{color:"red"}}>Subscrbe</button>
      </div>
      <div>
        <Link style={{fontSize:"large"}} to="/login">Admin login</Link> 
      </div>
    </div>
  )
}
