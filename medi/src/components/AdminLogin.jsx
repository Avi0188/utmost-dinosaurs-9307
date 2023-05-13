import { useState} from "react";
import "./login.css"
import { Link } from "react-router-dom";
import Admin from "./Admin";



function Login() {
 

const [email, setEmail]=useState("admin@gmail")
const [password, setPassword]=useState("1234")
const [inputemail, setinputEmail]=useState("")
const [inputpassword, setinputPassword]=useState("")
const [isAuth, setisAuth]=useState(true)

const handleChange=(e)=>{
  setinputEmail(e.target.value)
 setinputPassword(e.target.value)


}

const handleSubmit=(e)=>{
  e.preventDefault()
  if(email==inputemail&& password==inputpassword){
    setisAuth(true)
 
  }
  else{setisAuth(false)}

}
 
  
  return (
<div>
{(!isAuth)?(<div className="login">
    <form className="login-form" onSubmit={handleSubmit}>
     
        
     <input className="input" type="email" placeholder="email" 
     onChange={handleChange} 
     name="email"
    
     />
  

<br />
 <br />
 
     <input
       className="input"
       type="password"
       placeholder="password"
    
       onChange={handleChange} 
       name="password"
   
     />


<br />
   <input style={{color:"teal" }} className="form-submit" type="submit" value="Login"/>

</form>
<br />
<br />
<div>
 <Link style={{color:"red"}} to="/">Go Back</Link>
</div></div>):<Admin />} 
    

 
  
</div>
  )
}
export default Login;
