import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/login.css";

export const Signup = () => {
  const { store, actions } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div className="container d-flex justify-content-center vh-100">
      <div className="card w-50 signup mt-5">
        <div className="card-body">
          <h5 className="card-title">Signup</h5>
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
          onClick={() => actions.createUser(email, password)}
        >
          Sign Up
        </a>
        <br></br>
        <Link to="/login" className="text-center">
          Already Have a Username and Password? Click Here to Login!
        </Link>
      </div>
    </div>
  );
};
