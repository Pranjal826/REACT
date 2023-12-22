import React, { useState } from "react";
import { toast } from "react-toastify";
import Create from "./create";
import Show from "./show";
const App = () => {
    const [users, setusers] = useState(
        JSON.parse(localStorage.getItem("users")) || []
    );
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    return (
        <div>
           <Create users={users} setusers={setusers}/>
           <Show users={users} setusers={setusers}/>
        </div>
    );
};

export default App;