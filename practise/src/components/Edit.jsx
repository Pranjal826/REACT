import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../utils/Context";

const Edit = () => {
    const [users, setusers] = useContext(UserContext);
    const navigate = useNavigate();
    const { title } = useParams();
    const UserIndex = users.findIndex((u) => u.username == title);
    const [user, setuser] = useState({
        username: users[UserIndex].username,
        password: users[UserIndex].password,
    });

    const ChangeHandler = (e) => {
        // copyuser.city = "asdjkas"
        // const cityname = "bh"
        // copyuser["cityname"] = "asdjkas"
        const copyuser = { ...user };
        copyuser[e.target.name] = e.target.value;
        setuser(copyuser);
        // setuser({ ...user, [e.target.name]: e.target.value });
    };

    const SubmitHandler = (e) => {
        e.preventDefault();

        const edituser = { username: user.username, password: user.password };

        if (
            user.username.trim().length <= 4 &&
            user.password.trim().length <= 4
        ) {
            toast.error("inputs must be atleast 4 characters long");
            return;
        }

        const copyusers = [...users];
        copyusers[UserIndex] = edituser;
        setusers(copyusers);

        // setusers([...users, user])

        localStorage.setItem("users", JSON.stringify(copyusers));
        toast.success("User successfully Updated!");

        navigate("/show");
    };

    return (
        <form
            onSubmit={SubmitHandler}
        >
            <h2>Edit User Form</h2>
            <input
                name="username"
                onChange={ChangeHandler}
                value={user.username}
                type="text"
                placeholder="Username"
            />
            <input
                name="password"
                onChange={ChangeHandler}
                value={user.password}
                type="password"
                placeholder="Password"
            />
            <button>
                Edit User
            </button>
            <hr />
        </form>
    );
};

export default Edit;