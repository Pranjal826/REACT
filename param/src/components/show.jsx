import React from "react";
import { Link, json } from "react-router-dom";
import { toast } from "react-toastify";


const show =(props)=>{
  console.log(props)
  const {users,setusers} = props
  const deleteHandler = (index)=>{
  const copyusers = [...users]
  copyusers.splice(index,1)
  setusers(copyusers)
  localStorage.getItem("dbname",JSON.parse(copyusers))
  toast.warn("deletedddddd")
  }
    
    return(
        <div>
            <h1>registered user</h1>
            <ol>
                {users.length>0?users.map((k,v)=>{

             return(
                <li key={v}>
                    <Link to={`/show/${k.username}`}>{k.username}</Link>
                    <button onClick={()=>deleteHandler(v)}>delete</button>
                </li>
             )
                }):'loading'
                
            }
            </ol>
        </div>
    )
}

export default show;
