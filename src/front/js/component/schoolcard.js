import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const SchoolCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card mx-auto my-5" style={{ width: 18 + "rem" }}>
      <img src={props.pic_url} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{props.school_name}</h5>

        <h6>Tuition: {props.tuition}</h6>
        <h6>Time to Complete: {props.time_to_complete}</h6>
        <h6>Skill Level: {props.skill_level}</h6>
        <div className="card-footer bg-white border-0">
          <Link
            to={"/bootcamp/" + [props.index]}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="btn btn-success">Learn More</button>
          </Link>
          <button
            className="btn btn-primary ms-5"
            onClick={() => actions.addFavorite(props.school_name)}
          >
            Save{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
SchoolCard.propTypes = {
  school_name: PropTypes.string,
  pic_url: PropTypes.string,
  state: PropTypes.string,
  tuition: PropTypes.number,
  time_to_complete: PropTypes.string,
  id: PropTypes.number,
  skill_level: PropTypes.string,
};

export const CollegeCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card mx-auto my-5" style={{ width: 18 + "rem" }}>
      <img src={props.pic_url} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{props.school_name}</h5>

        <h6>Tuition: {props.tuition}</h6>
        <h6>State: {props.state}</h6>
        <h6> Avg 6-Year Earnings: {props.six_year_earnings}</h6>
        <div className="card-footer bg-white border-0">
          <Link
            to={"/college/" + [props.index]}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="btn btn-success">Learn More</button>
          </Link>
          <button
            className="btn btn-primary ms-5"
            onClick={() => actions.addFavorite(props.school_name)}
          >
            Save{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
CollegeCard.propTypes = {
  name: PropTypes.string,
  pic_url: PropTypes.string,
  state: PropTypes.string,
  tuition: PropTypes.number,
  avg_cost_of_attendance: PropTypes.number,
  id: PropTypes.string,
  six_year_earnings: PropTypes.number,
};
