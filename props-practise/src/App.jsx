import React, { useState } from "react";
import { toast } from "react-toastify";

const App = () => {
    const [users, setusers] = useState(
        JSON.parse(localStorage.getItem("users")) || []
    );
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
    };

    const DeleteHandler = (index) => {
        const copyusers = [...users];
        copyusers.splice(index, 1);
        setusers(copyusers);
        localStorage.setItem("users", JSON.stringify(copyusers));
        toast.warn("User deleted successfully!");
    };

    return (
        <div>
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
            <ol>
                <h1 >Registered Users</h1>

                {users.length > 0
                    ? users
                          .map((user, index) => {
                              return (
                                  <li
                                      key={index}
                                     
                                  >
                                      {user.username}

                                      <p>
                                          <span>✏️</span>
                                          <span
                                              onClick={() =>
                                                  DeleteHandler(index)
                                              }
                                          >
                                              ❌
                                          </span>
                                      </p>
                                  </li>
                              );
                          })
                          .reverse()
                    : "Loading..."}
            </ol>
            <hr className="mt-4" />
        </div>
    );
};

export default App;