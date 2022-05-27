import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const SchoolCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card" style={{ width: 18 + "rem" }}>
      <img src={props.pic_url} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{props.school}</h5>
        <h6>State: {props.state}</h6>
        <h6>Tuition: {props.tuition}</h6>
        <h6>Time to Complete: {props.time_to_complete}</h6>
        <div className="card-footer bg-white border-0">
          <Link
            to={"/single/" + [props.id]}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="btn btn-success">Learn More</button>
          </Link>
          <button
            className="btn btn-primary ms-5"
            onClick={() => actions.getFavorites(props.name)}
          >
            Save{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
SchoolCard.propTypes = {
  name: PropTypes.string,
  pic_url: PropTypes.string,
  state: PropTypes.string,
  tuition: PropTypes.string,
  time_to_complete: PropTypes.string,
  id: PropTypes.string,
};
