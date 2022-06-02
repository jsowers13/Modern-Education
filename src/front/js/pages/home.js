import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Search } from "../component/search";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5 container-fluid">
      {!store.activeUser ? (
        <div>
          <h1>Welcome to Modern Education</h1>
          <h2>
            We're here to help you find the right full-stack development
            education program for you!
          </h2>
          <p>
            If this is your first time here, click{" "}
            <Link to="/signup">Here</Link> to create an account!
          </p>
          <p>
            If you are a returning user, click <Link to="/login">Here</Link> to
            Login!
          </p>
        </div>
      ) : (
        <div>
          <h1>Welcome to Modern Education</h1>
          <h2>
            We're here to help you find the right full-stack development
            education program for you!
          </h2>
          <button className="btn btn-success btn-lg">
            Click Here to Search for Schools!
          </button>
        </div>
      )}
    </div>
  );
};
