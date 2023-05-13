import React from 'react'
import "./home.css";
import { Button } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom';
import Appointment from './Appointment';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
export default function Home() {

  return (
    <div className='main-containter' > 
      <div style={{display:'flex', justifyContent:'space-around', marginTop:"5%"}}>
        <div style={{marginLeft:"5%"}}>
          <p style={{color:"teal"}}>--perfectsolutionforyourMindset</p>
  <h2 style={{color:"teal"}}>We Will Help You To Understand & Solve The Problem</h2>

  <Button colorScheme='teal' size='md' marginTop={"5%"}><Link to="/appointment">Get Appointment</Link></Button>
  </div>

  <div style={{borderTopLeftRadius:"30%", width:"25%"}}>
    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSGVwmaYI4vQ0yug1s8w3c98LtXSWcFKSZsfCQiyTgOGnElJdKp" alt=""  style={{borderTopLeftRadius:"35%", width:"100%",  marginRight:"0px"}}/>
  </div>
      </div>
 


  <div id='box'>
 
    <div className='subbox'  style={{ backgroundColor:"teal"}}>
      <img src="" alt="" />
      <h2>Dedicated Therapist</h2>
      <p style={{}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. To discuss the issue ipsum dolor sit amet, consectetur adipisicing elit. </p>
      <button>Learn More</button>
    </div>
    <div className='subbox' style={{ backgroundColor:"#FF7D33" }}>
    <img src="" alt="" />
      <h2>Satisfied Services</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. To discuss the issue. ipsum dolor sit amet, consectetur adipisicing elit. </p>
      <button>Learn More</button>
    </div>
    <div className='subbox' style={{backgroundColor:"teal" }}>
    <img src="" alt="" />
      <h2>Support Patient</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. To discuss the  ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <button>Learn More</button>
    </div>
  </div>
  <div style={{display:'flex', justifyContent:"space-around", marginTop:"5%"}}>
    <div>
  <h2 style={{color:"teal"}}>80+</h2>
  <p style={{color:"teal"}}>Country Covarage</p>
</div>
<div>
  <h2 style={{color:"teal"}}>892+</h2>
  <p style={{color:"teal"}}>Client Satisfaction</p>
</div>
<div>
  <h2 style={{color:"teal"}}>70+</h2>
  <p style={{color:"teal"}}>Expert Consultant</p>
</div>
<div>
  <h2 style={{color:"teal"}}>367+</h2>
  <p style={{color:"teal"}}>Winning Awards</p>
</div>
  </div>

<div style={{display:"flex", justifyContent:'space-around'}}>
  <div>
    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQcAPk3tB_aBB8ujcwlW_UcP4FCj_AwEEqBFK0pAkGxFlIAIZCA" alt="Doctors" />
  </div>
  <div style={{width:"25%", marginTop:"5%"}}>
    <h1 style={{color:"teal"}}>We know What We Are But Not What We May Be!</h1>
    <p style={{color:"teal"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quos voluptatum neque quae enim architecto dolor, eum iste quod praesentium voluptatibus mollitia? Incidunt harum adipisci quasi doloremque, minima iure possimus.</p>
  </div>
</div>
<Footer />
    </div>
  )
}
