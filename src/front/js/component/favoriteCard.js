import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const FavoriteCard = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="card mx-auto my-5" style={{ width: 18 + "rem" }}>
      <img src={props.pic_url} className="card-img-top h-25" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{props.school_name}</h5>
        <h6 className="card-text">Tuition: {props.tuition}</h6>
        <div className="card-footer bg-white border-0">
          <Link
            to={"/bootcamp/" + [props.index]}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="btn btn-success">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
FavoriteCard.propTypes = {
  name: PropTypes.string,
  pic_url: PropTypes.string,
  state: PropTypes.string,
  tuition: PropTypes.number,
  time_to_complete: PropTypes.string,
  id: PropTypes.number,
  skill_level: PropTypes.string,
};
