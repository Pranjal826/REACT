
import React from "react";
import { toast } from "react-toastify";
import { useState } from "react";


const create=(props)=>{
 const [password,setpassword] = useState('')
  const [username,setusername] = useState('')
    
  const {users,setusers}=props
   const submitHandler=(e) =>{
    e.preventDefault()
    const user = {username,password}
    if (username.trim().length<4 && password.trim().length<4)
    {
        toast.error("username and password must 4 char")
        return
    }
    const copyusers = [...users]
    copyusers.push(user)
    setusers(copyusers)
    localStorage.setItem("dbname",JSON.stringify(copyusers))
    toast.success("user registered")
    setusername("")
    setpassword("")
   }
  
    return(
        <>    
<form onSubmit={submitHandler} >
    <h2>Register Form</h2>
    <input type="text" value={username} onChange={(eve)=>
    setusername(eve.target.value)
    } />
    <input type="password" value={password} onChange={(e)=>
    setpassword(e.target.value)}/>

    <button>submit</button>
</form>
        </>
    )
}


export default create;
