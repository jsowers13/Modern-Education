import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div>
      <div className="jumbotron mx-5">
        <div className="row d-flex justify-content-around">
          <div className="col-6 d-flex justify-content-end">
            <img src={store.schools[params.theid].logo} alt=""></img>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <h1 className="display-4">
              {store.schools[params.theid].school_name}
            </h1>
          </div>
        </div>

        <p className="lead">{store.schools[params.theid].description}</p>
        <hr className="my-4"></hr>
        <div className="row d-flex justify-content-around">
          <div className="col-1 text-center">Contact</div>
          <div className="col-1 text-center">Tuition</div>
          <div className="col-1 text-center">Time to Complete</div>
          <div className="col-1 text-center">Career Options</div>
          <div className="col-1 text-center">Skill Level</div>
          <div className="col-1 text-center">Job Placement Assistance</div>
          <div className="col-1 text-center">Address</div>
          <div className="col-1 text-center">Phone</div>
        </div>
        <hr className="my-2"></hr>
        <div className="row d-flex justify-content-around">
          <div className="col-1 text-center">
            {store.schools[params.theid].school_email}
          </div>
          <div className="col-1 text-center">
            {store.schools[params.theid].tuition}
          </div>
          <div className="col-1 text-center">
            {store.schools[params.theid].length_in_weeks} Weeks
          </div>
          <div className="col-1 text-center">
            {store.schools[params.theid].career_options}
          </div>
          <div className="col-1 text-center">
            {store.schools[params.theid].minimum_skill_level}
          </div>
          <div className="col-1 text-center">
            {store.schools[params.theid].job_placement_available ? "Yes" : "No"}
          </div>
          <div className="col-1 text-center">
            {store.schools[params.theid].mailing_address}
          </div>
          <div className="col-1 text-center">
            {store.schools[params.theid].phone_number}
          </div>
        </div>
        <br></br>
        <p className="lead my-3 text-center">
          <button
            className="btn btn-primary btn-lg me-5"
            onClick={() => actions.addFavorite(store.schools[params.theid])}
          >
            Save{" "}
          </button>
          <Link to="/user">
            <span className="btn btn-primary btn-lg" href="#" role="button">
              Back to Search
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
