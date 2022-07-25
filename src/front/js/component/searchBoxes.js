import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { SchoolCard, CollegeCard } from "./schoolcard.js";
import "..//..//styles/home.css";

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
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#schoolSearchResults"
            onClick={searchFunction}
          >
            Search for BootCamps!
          </button>

          {!searchResults.length == 0 ? (
            <div
              className="modal fade"
              id="schoolSearchResults"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3 className="modal-title mx-auto" id="exampleModalLabel">
                      Check Out These Schools!
                    </h3>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Back to Search
                    </button>
                  </div>
                  <div className="modal-body pb-5 background">
                    <div className="card-group">
                      {searchResults.slice(0, 5).map((item, index) => {
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
                    <div className="card-group">
                      {searchResults.slice(5, 10).map((item, index) => {
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
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Back to Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="modal fade"
              id="schoolSearchResults"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">No Results Found!</h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <p>
                      There are no results matching your search criteria! Select
                      new criteria and search again!
                    </p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Back to Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
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
          >
            <option defaultValue={99}></option>
            <option value={"Yes"}>Remote Available</option>
            <option value={"No"}>In Person Only</option>
          </select>
        </div>

        <div className="card-body d-grid">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#collegeSearchModal"
            onClick={searchFunction}
          >
            Search for Colleges!
          </button>

          {!searchResults.length == 0 ? (
            <div
              className="modal fade"
              id="collegeSearchModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3 className="modal-title mx-auto" id="exampleModalLabel">
                      Check Out These Schools!
                    </h3>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Back to Search
                    </button>
                  </div>
                  <div className="modal-body background p-5">
                    <div className="card-group">
                      {searchResults.slice(0, 5).map((item, index) => {
                        return (
                          <CollegeCard
                            school_name={item.name}
                            pic_url={item.logoImage}
                            tuition={item.avgCostOfAttendance}
                            state={item.stateAbbr}
                            six_year_earnings={
                              item.medianEarningsSixYrsAfterEntry
                            }
                            key={index}
                            index={index}
                            id={item.collegeUnitId}
                          />
                        );
                      })}
                    </div>

                    <div className="card-group">
                      {searchResults.slice(5, 10).map((item, index) => {
                        return (
                          <CollegeCard
                            school_name={item.name}
                            pic_url={item.logoImage}
                            tuition={item.avgCostOfAttendance}
                            state={item.stateAbbr}
                            six_year_earnings={
                              item.medianEarningsSixYrsAfterEntry
                            }
                            key={index}
                            index={index}
                            id={item.collegeUnitId}
                          />
                        );
                      })}
                    </div>
                    <div className="card-group">
                      {searchResults.slice(10, 15).map((item, index) => {
                        return (
                          <CollegeCard
                            school_name={item.name}
                            pic_url={item.logoImage}
                            tuition={item.avgCostOfAttendance}
                            state={item.stateAbbr}
                            six_year_earnings={
                              item.medianEarningsSixYrsAfterEntry
                            }
                            key={index}
                            index={index}
                            id={item.collegeUnitId}
                          />
                        );
                      })}
                    </div>
                    <div className="card-group">
                      {searchResults.slice(15, 20).map((item, index) => {
                        return (
                          <CollegeCard
                            school_name={item.name}
                            pic_url={item.logoImage}
                            tuition={item.avgCostOfAttendance}
                            state={item.stateAbbr}
                            six_year_earnings={
                              item.medianEarningsSixYrsAfterEntry
                            }
                            key={index}
                            index={index}
                            id={item.collegeUnitId}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Go Back to Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="modal fade"
              id="collegeSearchModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">No Results Found!</h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <p>
                      There are no results matching your search criteria! Select
                      new criteria and search again!
                    </p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Back to Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* original card deck display method, no longer in use
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
      </div> */}
    </div>
  );
};
