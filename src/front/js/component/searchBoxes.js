import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { SchoolCard, CollegeCard } from "./schoolcard.js";

export const BootcampSearch = () => {
  const { store, actions } = useContext(Context);

  const [programType, setProgramType] = useState("");
  const [maxTuitionValue, setMaxTuitionValue] = useState(50000);
  const [timeToCompleteValue, setTimeToCompleteValue] = useState(99);
  const [searchResults, setSearchResults] = useState([]);

  const searchFunction = () => {
    let newResults = store.schools.filter(
      (item) =>
        item.career_options.includes(programType) &&
        item.tuition <= maxTuitionValue &&
        item.length_in_weeks <= timeToCompleteValue
    );
    setSearchResults(newResults);
    console.log(newResults);
  };

  return (
    <div className="text-center container-fluid">
      <div className="card mx-auto my-5" style={{ width: 24 + "rem" }}>
        <div className="card-body">
          <h3 className="card-title">Find Your School!</h3>
          <p className="card-text">
            Tell us what kind of Bootcamp you're looking for, and we'll match
            you with the best programs for you!
          </p>

          <h5>Type of Program</h5>
          <select
            className="form-select"
            aria-label="Default select example"
            placeholder="Select from List"
            id="programDropdown"
            onChange={(e) => setProgramType(e.target.value)}
            value={programType}
          >
            <option defaultValue={""}></option>
            <option value="">Not Sure</option>
            <option value="Coding">Coding</option>
            <option value="Software Development">Software Development</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Data Science">Data Science</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="UX/UI Design">UX/UI Design</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="FinTech">FinTech</option>
          </select>

          <h5>Max Tuition</h5>
          <input
            className="form-control"
            type="text"
            aria-label="Default select example"
            placeholder=""
            id="tuitionDropdown"
            onChange={(e) => setMaxTuitionValue(e.target.value)}
          ></input>
          <h5>Max Length</h5>
          <select
            className="form-select"
            aria-label="Default select example"
            placeholder="Time to Complete"
            id="timeToCompleteDropdown"
            onChange={(e) => setTimeToCompleteValue(e.target.value)}
            value={timeToCompleteValue}
          >
            <option defaultValue={99}></option>
            <option value={12}>12 Weeks</option>
            <option value={16}>16 Weeks</option>
            <option value={24}>24 Weeks</option>
            <option value={32}>32 Weeks</option>
          </select>
        </div>

        <div className="card-body d-grid">
          <a
            href="#"
            className="card-link btn btn-lg btn-success col-9 mx-auto"
            onClick={searchFunction}
          >
            Search
          </a>
        </div>
      </div>
      <div className="card-deck-wrapper">
        {searchResults.map((item, index) => {
          return (
            <SchoolCard
              school_name={item.name}
              pic_url={item.logo}
              tuition={item.tuition}
              skill_level={item.minimum_skill_level}
              time_to_complete={item.length_in_weeks + " weeks"}
              key={index}
              index={index}
              id={item.school_id}
            />
          );
        })}
      </div>
    </div>
  );
};

export const CollegeSearch = () => {
  const { store, actions } = useContext(Context);

  const [stateCode, setStateCode] = useState("");
  const [maxTuitionValue, setMaxTuitionValue] = useState(100000);
  const [remoteAvailable, setRemoteAvailable] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  const searchFunction = () => {
    let newResults = store.colleges.filter(
      (item) =>
        item.stateAbbr.includes(stateCode) &&
        item.avgCostOfAttendance <= maxTuitionValue
      // item.length_in_weeks <= timeToCompleteValue
    );
    console.log(stateCode);
    setSearchResults(newResults);
    console.log(newResults);
  };

  return (
    <div className="text-center container-fluid">
      <div className="card mx-auto my-5" style={{ width: 24 + "rem" }}>
        <div className="card-body">
          <h3 className="card-title">Find Your School!</h3>
          <p className="card-text">
            Tell us what kind of school you're looking for, and we'll match you
            with the best Colleges for you!
          </p>

          <h5>State</h5>
          <select
            className="form-select"
            aria-label="Default select example"
            placeholder="Choose State"
            id="stateDropdown"
            onChange={(e) => setStateCode(e.target.value)}
            // value={programType}
          >
            <option defaultValue={""}></option>
            <option value="MA">Massachusetts</option>
            <option value="CA">California</option>
            <option value="TN">Tennessee</option>
            <option value="NJ">New Jersey</option>
            <option value="PA">Pennsyvania</option>
            <option value="TX">Texas</option>
            <option value="GA">Georgia</option>
            <option value="OH">Ohio</option>
            <option value="VA">Virginia</option>
            <option value="NC">North Carolina</option>
            <option value="CO">Colorado</option>
          </select>

          <h5>4 Year Max Tuition</h5>
          <input
            className="form-control"
            type="text"
            aria-label="Default select example"
            placeholder=""
            id="tuitionDropdown"
            onChange={(e) => setMaxTuitionValue(e.target.value)}
          ></input>
          <h5>Remote Learning Available</h5>
          <select
            className="form-select"
            aria-label="Default select example"
            placeholder="Time to Complete"
            id="timeToCompleteDropdown"
            onChange={(e) => setRemoteAvailable(e.target.value)}
            // value={remoteAvailable}
          >
            <option defaultValue={99}></option>
            <option value={"Yes"}>Remote Available</option>
            <option value={"No"}>In Person Only</option>
          </select>
        </div>

        <div className="card-body d-grid">
          <a
            href="#"
            className="card-link btn btn-lg btn-success col-9 mx-auto"
            onClick={searchFunction}
          >
            Search
          </a>
        </div>
      </div>
      <div className="card-deck-wrapper">
        {searchResults.map((item, index) => {
          return (
            <CollegeCard
              school_name={item.name}
              pic_url={item.logoImage}
              tuition={item.avgCostOfAttendance}
              state={item.stateAbbr}
              six_year_earnings={item.medianEarningsSixYrsAfterEntry}
              key={index}
              index={index}
              id={item.collegeUnitId}
            />
          );
        })}
      </div>
    </div>
  );
};
