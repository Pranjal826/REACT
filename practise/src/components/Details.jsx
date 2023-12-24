import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
    const navigate = useNavigate();
    const { title} = useParams();

    const BackHandler = () => {
        navigate(-1);
    };

    return (
        <div>
            <h1>👋 {title}</h1>
            <button onClick={BackHandler}>Back</button>
        </div>
    );
};

export default Details;
