import { useState } from "react";

const App = () => {
    const [username,setusername]=useState("")
    const [check,setcheck]=useState(false)
    const submithandler=(e)=>{
        console.log(e)
        console.log(username,check)
    }
    return (
        <div>
            <form onChange={submithandler}>
            <h1>Hello {username}</h1>
            <input type="text" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
            <br></br>
            <input type="checkbox" value={check} /> I accept the terms and conditions
            <br></br>
            <button>Submit</button>
            </form>
          
        </div>
    )
};

export default App;
