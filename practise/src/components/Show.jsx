import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../utils/Context";

const Show = () => {
    const [users, setusers] = useContext(UserContext);
    const DeleteHandler = (index) => {
        const copyusers = [...users];
        copyusers.splice(index, 1);
        setusers(copyusers);
        localStorage.setItem("users", JSON.stringify(copyusers));
        toast.warn("User deleted successfully!");
    };

    const mycss = {
        fontSize: "22px",
        fontWeight: 500,
    };

    return (
        <>
            <ol>
                <h1>Registered Users</h1>

                {users.length > 0
                    ? users
                          .map((user, index) => {
                              return (
                                  <li
                                      key={index}
                                  >
                                      <Link
                                          className="hover:text-blue-400"
                                          to={`/show/${user.username}`}
                                          style={mycss}
                                      >
                                          {user.username}
                                      </Link>

                                      <p>
                                          <Link
                                              to={`/show/edit/${user.username}`}
                                              className="mr-6"
                                          >
                                              ✏️
                                          </Link>

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
            <hr />
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default Show;