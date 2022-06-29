import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const SchoolCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className="card mx-auto my-5 rounded"
      style={{ maxWidth: 20 + "rem", minHeight: 30 + "rem" }}
    >
      <img
        src={props.pic_url}
        className="card-img-top mx-auto"
        style={{
          width: 19 + "rem",
          height: 19 + "rem",
          objectFit: "contain",
        }}
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.school_name}</h5>

        <h6>Tuition: {props.tuition}</h6>
        <h6>Time to Complete: {props.time_to_complete}</h6>
        <h6>Skill Level: {props.skill_level}</h6>
        <div className="card-footer bg-white border-0 ">
          <Link
            to={"/bootcamp/" + [props.id]}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button
              className="btn btn-success position-absolute bottom-0 start-50 translate-middle-x mb-2"
              data-bs-dismiss="modal"
            >
              Learn More
            </button>
          </Link>
          {/* <button
            className="btn btn-primary"
            onClick={() => actions.addFavorite(props.school_name)}
          >
            Save{" "}
          </button> */}
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
    <div
      className="card mx-auto my-5 rounded"
      style={{ maxWidth: 20 + "rem", minHeight: 32 + "rem" }}
    >
      <img
        src={props.pic_url}
        className="card-img-top mx-auto"
        style={{ width: 19 + "rem", height: 19 + "rem", objectFit: "contain" }}
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.school_name}</h5>

        <h6>Tuition: {props.tuition}</h6>
        <h6>State: {props.state}</h6>
        <h6> Avg 6-Year Earnings: {props.six_year_earnings}</h6>
        <div className="card-footer bg-white border-0">
          <Link
            to={"/college/" + [props.id]}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button
              className="btn btn-success position-absolute bottom-0 start-50 translate-middle-x mb-2"
              data-bs-dismiss="modal"
            >
              Learn More
            </button>
          </Link>
          {/* button removed as favorites functionality not available at this time
           <button
            className="btn btn-primary ms-5"
            onClick={() => actions.addFavorite(props.school_name)}
          >
            Save{" "}
          </button> */}
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
  college_Unit_id: PropTypes.string,
};
