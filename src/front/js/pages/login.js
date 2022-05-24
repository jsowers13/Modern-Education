import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <a
            href="#"
            className="btn btn-primary"
            onClick={() => actions.getToken(email, password)}
          >
            Login
          </a>
          <a
            href="#"
            className="btn btn-primary"
            onClick={() => actions.createUser(email, password)}
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};
