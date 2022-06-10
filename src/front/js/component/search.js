import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { SchoolCard } from "./schoolcard.js";

export const Search = () => {
  const { store, actions } = useContext(Context);
  const [stateValue, setStateValue] = useState({ value: "" });
  const [tuitionValue, setTuitionValue] = useState({ value: "" });
  const [timeToCompleteValue, setTimeToCompleteValue] = useState({ value: "" });
  const [searchResults, setSearchResults] = useState([]);
  const searchFunction = () => {
    let newResults = store.schools.filter(
      (item) =>
        // item.state === stateValue &&
        // item.tuition === tuitionValue &&
        // item.time_to_complete === timeToCompleteValue
        item
    );
    setSearchResults(newResults);

    console.log(newResults);
  };
  const updateState = (event) => {
    setStateValue({ value: event.target.value });
  };
  const updateTuition = (event) => {
    setTuitionValue({ value: event.target.value });
  };
  const updateTimeToComplete = (event) => {
    setTimeToCompleteValue({ value: event.target.value });
  };
  return (
    <div className="text-center container-fluid">
      <div className="card mx-auto my-5" style={{ width: 24 + "rem" }}>
        <div className="card-body">
          <h3 className="card-title">Find Your School!</h3>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <h5>State</h5>
          <select
            className="form-select"
            aria-label="Default select example"
            placeholder="State"
            id="stateDropdown"
            onChange={(e) => setStateValue(e.target.value)}
            value={stateValue}
          >
            <option defaultValue={"State"}></option>
            <option value="Indiana">Indiana</option>
            <option value="Florida">Florida</option>
          </select>
          <h5>Tuition</h5>
          <select
            className="form-select"
            aria-label="Default select example"
            placeholder="Tuition"
            id="tuitionDropdown"
            onChange={(e) => setTuitionValue(e.target.value)}
            value={tuitionValue}
          >
            <option defaultValue={"Tuition"}></option>
            <option value="1000">1000</option>
            <option value="10000">10000</option>
            <option value="20000">20000</option>
          </select>
          <h5>Time to Complete</h5>
          <select
            className="form-select"
            aria-label="Default select example"
            placeholder="Time to Complete"
            id="timeToCompleteDropdown"
            onChange={(e) => setTimeToCompleteValue(e.target.value)}
            value={timeToCompleteValue}
          >
            <option defaultValue={"Time to Complete"}></option>
            <option value="12 Weeks">12 Weeks</option>
            <option value="16 Weeks">16 Weeks</option>
            <option value="20 Weeks">20 Weeks</option>
          </select>
        </div>

        <div className="card-body">
          <a
            href="#"
            className="card-link btn btn-primary"
            onClick={searchFunction}
          >
            Search
          </a>
          <a href="#" className="card-link btn btn-primary">
            Reset
          </a>
        </div>
      </div>
      <div className="card-deck-wrapper">
        {searchResults.map((item, index) => {
          return (
            <SchoolCard
              school_name={item.school_name}
              pic_url={item.logo}
              tuition={item.tuition}
              skill_level={item.minimum_skill_level}
              time_to_complete={item.length_in_weeks + " weeks"}
              key={index}
              index={index}
              id={index}
            />
          );
        })}
      </div>
    </div>
  );
};
