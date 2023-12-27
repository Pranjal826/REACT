import React from "react";
import { toast } from "react-toastify";

const Show = (props) => {
    const { users, setusers } = props;

    const navigate = () => {
        navigate('/register')
    }
    return (
        <ol>
            <h1>Registered Users</h1>

            {users.length > 0
                ? users
                    .map((user, index) => {

                        <li
                            key={index}

                        >
                            {user.username}

                            <p>
                                <span >✏️</span>
                                <span
                                    onClick={() => DeleteHandler(index)}
                                >
                                    ❌
                                </span>
                            </p>
                        </li>

                    })
                    .reverse()
                : "Loading..."}
        </ol>
    );
};

export default Show;