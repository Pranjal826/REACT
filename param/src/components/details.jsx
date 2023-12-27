import React from "react";
import { useNavigate ,useParams } from "react-router-dom";
const Details = ()=>{
    const navigate = useNavigate()
    const {dt} = useParams()
    const back = ()=>{navigate("/show")}
    return(
        <div>
            <h1>{dt}</h1>
            <button onClick={back}>Bapis</button>
        </div>
    )


}

export default  Details;

