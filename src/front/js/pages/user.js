import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Search } from "../component/search";

export const User = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="container d-flex flex-column align-items-center mb-5">
      <p>Create User View Here {store.demo[params.theid].title}</p>
      <br></br>
      <Search />
      <br></br>
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};
