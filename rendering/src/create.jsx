import React, { useState } from "react";
import {toast} from 'react-toastify'
const Create = (props) => {
    console.log(props)
    const {user,setuser}=props
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const SubmitHandler = (e) => {
        e.preventDefault();
        const users = { username, password };
        if(username.trim().length<4 && password.trim().length<4){
            toast.error("Username and password must be of atleast 4 characters")
            return 
        }
        const copyusers=[...user]
        copyusers.push(users)
        setuser(copyusers)
        localStorage.setItem("users",JSON.stringify(copyusers))
        toast.success("User registered Successfully")
    }
    return (
        <form
            onSubmit={SubmitHandler}
            className="flex justify-start flex-col mt-5 w-1/2 m-auto container"
        >
            <h2 className="text-3xl mb-4 text-orange-400">Register Form</h2>
            <input
                onChange={(e) => setusername(e.target.value)}
                value={username}
                className="border-2 border-black p-2 mb-4 w-1/2"
                type="text"
                placeholder="Username"
            />
            <input
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                className="border-2 border-black p-2 mb-4 w-1/2"
                type="password"
                placeholder="Password"
            />
            <button className="mb-4 w-1/4 p-2 text-1xl  text-white bg-zinc-500">
                Submit
            </button>
            <hr />
        </form>
    );
};


export default Create;