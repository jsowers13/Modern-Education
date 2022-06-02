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
            <img
              src="https://www.beaconcouncil.com/wp-content/uploads/2018/08/4_geeks_academy_logo-300x150.jpg"
              alt=""
            ></img>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <h1 className="display-4">
              School Name{store.demo[params.theid].title}
            </h1>
          </div>
        </div>

        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis
          nunc sed id semper risus in hendrerit gravida. Amet aliquam id diam
          maecenas ultricies mi eget mauris pharetra. Mauris nunc congue nisi
          vitae. Sed turpis tincidunt id aliquet risus feugiat. Iaculis urna id
          volutpat lacus laoreet non curabitur gravida. Pulvinar mattis nunc sed
          blandit libero volutpat. Magna eget est lorem ipsum dolor sit. Nunc
          pulvinar sapien et ligula. Porttitor leo a diam sollicitudin tempor.
          Mattis vulputate enim nulla aliquet porttitor lacus luctus. In massa
          tempor nec feugiat nisl pretium fusce id velit. Sit amet dictum sit
          amet justo. Nulla aliquet enim tortor at auctor urna. Tortor posuere
          ac ut consequat semper viverra nam libero justo. Aliquam nulla
          facilisi cras fermentum odio eu feugiat.
        </p>
        <hr className="my-4"></hr>
        <div className="row">
          <div className="col-2 text-center">State</div>
          <div className="col-2 text-center">Tuition</div>
          <div className="col-2 text-center">Time to Complete</div>
          <div className="col-2 text-center">Student Body</div>
          <div className="col-2 text-center">Type of Certificate</div>
          <div className="col-2 text-center">Remote or In-Person</div>
        </div>
        <div className="row">
          <div className="col-2 text-center">State Value</div>
          <div className="col-2 text-center">Tuition Value</div>
          <div className="col-2 text-center">Time to Complete Value</div>
          <div className="col-2 text-center">Student Body Value</div>
          <div className="col-2 text-center">Type of Certificate Value</div>
          <div className="col-2 text-center">Remote or In Person Value</div>
        </div>
        <br></br>
        <p className="lead my-3 text-center">
          <button
            className="btn btn-primary btn-lg me-5"
            onClick={() => actions.getFavorites(store.demo[params.theid].title)}
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
