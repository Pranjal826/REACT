import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../utils/Context";

const Create = () => {
    const navigate = useNavigate();
    const [users, setusers] = useContext(UserContext);
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();

        const user = { username, password };

        if (username.trim().length <= 4 && password.trim().length <= 4) {
            toast.error("inputs must be atleast 4 characters long");
            return;
        }

        const copyusers = [...users];
        copyusers.push(user);
        setusers(copyusers);

        // setusers([...users, user])

        localStorage.setItem("users", JSON.stringify(copyusers));
        toast.success("User successfullt created!");

        setusername("");
        setpassword("");
        navigate("/show");
    };

    return (
        <form
            onSubmit={SubmitHandler}
        >
            <h2 >Register Form</h2>
            <input
                onChange={(e) => setusername(e.target.value)}
                value={username}
                type="text"
                placeholder="Username"
            />
            <input
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
            />
            <button>
                Submit
            </button>
            <hr />
        </form>
    );
};

export default Create;