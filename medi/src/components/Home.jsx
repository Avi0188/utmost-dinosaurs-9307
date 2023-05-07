import React from 'react'
import '../App.css';

export default function Home() {
  return (
    <div> 
      <div style={{display:'flex', justifyContent:"space-around"}}>
        <div>
          <p>--perfectsolutionforyourMindset</p>
  <h2>We Will Help You To Understand & Solve The Problem</h2>
  <button>MakeAn Appointment</button>
  </div>
  <div>
    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSGVwmaYI4vQ0yug1s8w3c98LtXSWcFKSZsfCQiyTgOGnElJdKp" alt="" />
  </div>
      </div>

  <div style={{display:'flex', justifyContent:"space-around"}}>
    <div id='box' style={{border:"1px solid red", backgroundColor:"teal" }}>
      <img src="" alt="" />
      <h2>Dedicated Therapist</h2>
      <p style={{}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. To discuss the issue </p>
      <button>Learn More</button>
    </div>
    <div style={{border:"1px solid red", backgroundColor:"#FF7D33" }}>
    <img src="" alt="" />
      <h2>Satisfied Services</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. To discuss the issue. </p>
      <button>Learn More</button>
    </div>
    <div style={{border:"1px solid red", backgroundColor:"teal"}}>
    <img src="" alt="" />
      <h2>Support Patient</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. To discuss the issue</p>
      <button>Learn More</button>
    </div>
  </div>
  <div style={{display:'flex', justifyContent:"space-around"}}>
    <div>
  <h2>80+</h2>
  <p>Country Covarage</p>
</div>
<div>
  <h2>892+</h2>
  <p>Client Satisfaction</p>
</div>
<div>
  <h2>70+</h2>
  <p>Expert Consultant</p>
</div>
<div>
  <h2>367+</h2>
  <p>Winning Awards</p>
</div>
  </div>

<div style={{display:"flex", justifyContent:'space-around'}}>
  <div >
    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQcAPk3tB_aBB8ujcwlW_UcP4FCj_AwEEqBFK0pAkGxFlIAIZCA" alt="Doctors" />
  </div>
  <div style={{width:"25%", marginTop:"5%"}}>
    <h2>We know What We Are But Not What We May Be!</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quos voluptatum neque quae enim architecto dolor, eum iste quod praesentium voluptatibus mollitia? Incidunt harum adipisci quasi doloremque, minima iure possimus.</p>
  </div>
</div>
    </div>
  )
}
