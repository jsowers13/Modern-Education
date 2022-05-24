import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const User = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div>
      <p>Create User View Here {store.demo[params.theid].title}</p>;
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};
