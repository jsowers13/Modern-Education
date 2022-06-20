import React, { useContext, useState } from "react";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  // const loadUser = () => {
  //   history.push("/user/" + store.activeUser.id);
  //   location.reload();
  // };
  const handleLogIn = async (event) => {
    event.preventDefault();
    const isLoggedIn = await actions.getToken(email, password);

    if (isLoggedIn) {
      history.push("/user");
    } else {
      setError("Cant Log in");
    }
    // {
    //   store.activeUser ? loadUser() : "";
    // }
  };
  if (store.activeUser) {
    history.push("/user");
    location.reload();
  } else {
    return (
      <div className="container d-flex justify-content-center">
        <div className="card w-50">
          <div className="card-body">
            <h5 className="card-title">Login</h5>
            <div className="card-text">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Email
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                ></input>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Password
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                ></input>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="btn btn-primary btn-lg m-auto"
            onClick={handleLogIn}
          >
            Login
          </a>
          <br></br>
          <Link to="/signup" className="text-center">
            Don't Have a Usename and Password yet? Click Here to Sign Up!
          </Link>
        </div>
        {error && <p>{error}</p>}
      </div>
    );
  }
};
