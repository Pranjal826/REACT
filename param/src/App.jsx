import { useState } from "react";
import Create from "./components/create";
import Show from "./components/show";
import Details from "./components/details";
import Home from "./components/Home";
import { Link, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
const App =()=>{
  const [users,setusers]=useState(
    JSON.parse(localStorage.getItem("users"))||[]
  )
  return (
    <>
    <Nav />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route
            path="/create"
            element={<Create users={users} setusers={setusers} />}
        />
        <Route
            path="/show"
            element={<Show users={users} setusers={setusers} />}
        >
          <Route path="/show/:dt" element={<Details/>} />
        </Route>
    </Routes>
</>
 
  )
}

// usenavigate use for 
    // use dt for passing dynamic routing dt=destructring = object
    // js logic return k upr
    // route name string me likte h
    // template litral 

export default App;
