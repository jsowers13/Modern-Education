import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Image } from "react-bootstrap";
import "../../styles/home.css";

export const Bootcamp = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [currentBootCamp, setCurrentBootCamp] = useState(null);
  //These useEffects return the store to its default fetch state so that you can return to this page from a single
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const answer = await actions.getBootCampsByID(params.id);
      setCurrentBootCamp(answer);
      console.log(answer);
      return answer;
      // ...
    }
    fetchData();
    console.log(currentBootCamp);
  }, []);
  if (currentBootCamp === null || currentBootCamp === undefined) {
    return (
      <Image
        className="mx-auto d-block"
        src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
      />
    );
  }
  return (
    <div className="vh-100 vw-100 text-white school-background">
      <div className="jumbotron p-5">
        <div className="row d-flex justify-content-around">
          <div className="col-6 d-flex justify-content-center">
            <img
              src={currentBootCamp.logo}
              alt=""
              style={{ maxWidth: 600 + "px" }}
            ></img>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <h1 className="display-1">{currentBootCamp.name}</h1>
          </div>
        </div>

        <p className="lead text-center m-5">{currentBootCamp.description}</p>
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
            {currentBootCamp.school_email}
          </div>
          <div className="col-1 text-center">{currentBootCamp.tuition}</div>
          <div className="col-1 text-center">
            {currentBootCamp.length_in_weeks} Weeks
          </div>
          <div className="col-1 text-center">
            {currentBootCamp.career_options}
          </div>
          <div className="col-1 text-center">
            {currentBootCamp.minimum_skill_level}
          </div>
          <div className="col-1 text-center">
            {currentBootCamp.job_placement_available ? "Yes" : "No"}
          </div>
          <div className="col-1 text-center">
            {currentBootCamp.mailing_address}
          </div>
          <div className="col-1 text-center">
            {currentBootCamp.phone_number}
          </div>
        </div>
        <br></br>
        <div className="d-flex justify-content-center links">
          <a href={currentBootCamp.website}>
            <button className="btn btn-lg btn-primary mx-5">
              Visit School Site
            </button>{" "}
          </a>
          {/* Favorites button removed because functionality is not attainable with non-integrated api's 
          
          <button
            className="btn btn-primary btn-lg mx-5"
            onClick={() => actions.addFavorite(currentBootCamp)}
          >
            Save{" "}
          </button> */}
          <Link to="/user">
            <button
              className="btn btn-primary btn-lg mx-5"
              href="#"
              role="button"
            >
              Back to Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Bootcamp.propTypes = {
  match: PropTypes.object,
};

export const College = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [currentCollege, setCurrentCollege] = useState(null);
  // the useEffect here sets the colleges variable in the store to the current college, so that when you come back to the page from an external page, it renders correctly
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const answer = await actions.getCollegesByID(params.collegeUnitId);
      setCurrentCollege(answer);
      console.log(answer);
      return answer;
      // ...
    }
    fetchData();
    console.log(currentCollege);
  }, []);

  if (currentCollege === null || currentCollege === undefined) {
    return (
      <Image
        className="mx-auto d-block"
        src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
      />
    );
  }
  return (
    <div className="overflow-scroll text-white school-background">
      <div className="jumbotron m-5">
        <div className="row d-flex justify-content-between">
          <div className="col-6 d-flex justify-content-center">
            <img src={currentCollege.logoImage} alt="College Logo"></img>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <h1 className="display-1">{currentCollege.name}</h1>
          </div>
        </div>
        {currentCollege.longDescription ? (
          <p className="lead">{currentCollege.longDescription}</p>
        ) : (
          <h1 className="text-center m-5 p-5">
            {" "}
            More information on this school can be found at the website below!
          </h1>
        )}

        <hr className="my-4"></hr>
        <div className="row d-flex justify-content-around">
          <div className="col-1 text-center">Website</div>
          <div className="col-1 text-center">Tuition</div>
          <div className="col-1 text-center">Graduation Rate</div>
          <div className="col-1 text-center">6 Year Earnings</div>
          <div className="col-1 text-center">10 Year Earnings</div>
          <div className="col-1 text-center">On-Campus Housing</div>
        </div>
        <hr className="my-2"></hr>
        <div className="row d-flex justify-content-around">
          <div className="col-1 text-center">
            <a
              href={"https://" + currentCollege.website}
              className="text-white"
            >
              {currentCollege.website}
            </a>
          </div>
          <div className="col-1 text-center">
            {currentCollege.avgCostOfAttendance}
          </div>
          <div className="col-1 text-center">
            {currentCollege.fourYearGraduationRate}
          </div>
          <div className="col-1 text-center">
            {currentCollege.medianEarningsSixYrsAfterEntry}
          </div>
          <div className="col-1 text-center">
            {currentCollege.medianEarningsTenYrsAfterEntry}
          </div>
          <div className="col-1 text-center">
            {currentCollege.onCampusHousingAvailable}
          </div>
        </div>
        <br></br>
        <div className="d-flex justify-content-center links">
          <a href={"https://" + currentCollege.website}>
            <button className="btn btn-lg btn-primary mx-5">
              Visit School Site
            </button>
          </a>
          {/* Removed Favorites button as functionality has been put on hold at this time
          
          <button
            className="btn btn-primary btn-lg mx-5"
            onClick={() => actions.addFavorite(currentCollege)}
          >
            Save{" "}
          </button> */}
          <Link to="/user">
            <button
              className="btn btn-primary btn-lg mx-5"
              href="#"
              role="button"
            >
              Back to Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

College.propTypes = {
  match: PropTypes.object,
};
