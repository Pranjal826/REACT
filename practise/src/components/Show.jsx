import React from "react";
import { Link, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const Show = (props) => {
    const { users, setusers } = props;
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
            <ol className="flex justify-start flex-col mt-5 w-1/2 m-auto container">
                <h1 className="text-2xl mb-4">Registered Users</h1>

                {users.length > 0
                    ? users
                          .map((user, index) => {
                              return (
                                  <li
                                      key={index} >
                                      <Link
                                          className="hover:text-blue-400"
                                          to={`/show/details/${user.username}`}
                                          style={mycss}
                                      >
                                          {user.username}
                                      </Link>

                                      <p>
                                          <span className="mr-6">✏️</span>
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
            <hr className="w-[80%] m-auto my-5 " />
            <div className="w-[80%]">
                <Outlet />
            </div>
        </>
    );
};

export default Show;