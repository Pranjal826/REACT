import React, { useState } from "react";
import { toast } from "react-toastify";
import {Link,Route,Routes} from 'react-router-dom'
import Create from "./create";
import Show from "./show";
import Home from './Home'
import Nav from './Nav'
const App = () => {
    const [users, setusers] = useState(
        JSON.parse(localStorage.getItem("users")) || []
    );
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    return (
        <div>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Create users={users} setusers={setusers}/>}/>
                <Route path="/show" element={<Show users={users}setusers={setusers} />}/>

            </Routes>

</div>
    );
};

export default App;