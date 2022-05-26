import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5 container-fluid">
      <p>Getting Started</p>
      <div className="d-grid gap-2">
        <Link to="/login">
          <button className="btn btn-primary btn-lg w-75">Login</button>
        </Link>
        <br></br>
        <Link to="/signup">
          <button className="btn btn-primary btn-lg w-75">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};
