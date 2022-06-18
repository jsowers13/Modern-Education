import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Image } from "react-bootstrap";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Bootcamp = (props) => {
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
        <div className="d-flex justify-content-center">
          <a href={store.schools[params.theid].website}>
            <button className="btn btn-lg btn-primary">
              Visit School Site
            </button>{" "}
          </a>
          <button
            className="btn btn-primary btn-lg mx-5"
            onClick={() => actions.addFavorite(store.schools[params.theid])}
          >
            Save{" "}
          </button>
          <Link to="/user">
            <span className="btn btn-primary btn-lg" href="#" role="button">
              Back to Search
            </span>
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
  const MyAPI =
    "https://api.collegeai.com/v1/api/college/info?api_key=gdxwlZ51B2qe4BR8Ha3XghIV&college_unit_ids=" +
    params.collegeUnitId +
    "&info_ids=website%2Cavg_cost_of_attendance%2Clogo_image%2Cshort_description%2Cmedian_earnings_six_yrs_after_entry%2Cmedian_earnings_ten_yrs_after_entry%2Cstate_abbr%2Cfour_year_graduation_rate%2Cin_state_tuition%2Con_campus_housing_available";
  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const response = await MyAPI.getData();
  //     const data = await response.json();
  //     const college = data.colleges;
  //     return college;
  //     // ...
  //   }
  //   setCurrentCollege(fetchData());
  // }, []);
  useEffect(async () => {
    setCurrentCollege(await actions.getCollegesByID(params.collegeUnitId));
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
    <div className="overflow-scroll">
      <div className="jumbotron mx-5">
        <div className="row d-flex justify-content-around">
          <div className="col-6 d-flex justify-content-end">
            <img src={currentCollege.logoImage} alt="College Logo"></img>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <h1 className="display-4">{currentCollege.name}</h1>
          </div>
        </div>

        <p className="lead">{currentCollege.longDescription}</p>
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
            <a href={"https://" + currentCollege.website}>
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
            <button className="btn btn-lg btn-primary">Learn More</button>
          </a>
          <button
            className="btn btn-primary btn-lg mx-5"
            onClick={() => actions.addFavorite(currentCollege)}
          >
            Save{" "}
          </button>
          <Link to="/user">
            <span className="btn btn-primary btn-lg" href="#" role="button">
              Back to Search
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

College.propTypes = {
  match: PropTypes.object,
};
