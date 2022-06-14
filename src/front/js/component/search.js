import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { SchoolCard } from "./schoolcard.js";

export const Search = () => {
  const { store, actions } = useContext(Context);
  const [skillLevelValue, setSkillLevelValue] = useState("");
  const [programType, setProgramType] = useState("");
  const [maxTuitionValue, setMaxTuitionValue] = useState(50000);
  const [timeToCompleteValue, setTimeToCompleteValue] = useState(99);
  const [searchResults, setSearchResults] = useState([]);
  const searchFunction = () => {
    let newResults = store.schools.filter(
      (item) =>
        // item.minimum_skill_level === skillLevelValue &&
        item.career_options.includes(programType) &&
        item.tuition <= maxTuitionValue &&
        item.length_in_weeks <= timeToCompleteValue

      // item.minimum_skill_level === skillLevelValue &&
      // item.career_options.includes(programType) &&
      // item.tuition <= maxTuitionValue
      // item.length_in_weeks <= timeToCompleteValue
    );

    setSearchResults(newResults);

    console.log(newResults);
  };
  const searchColleges = () => {
    let newResults = store.colleges.filter(
      (item) =>
        // item.minimum_skill_level === skillLevelValue &&
        item.career_options.includes(programType) &&
        item.tuition <= maxTuitionValue &&
        item.length_in_weeks <= timeToCompleteValue

      // item.minimum_skill_level === skillLevelValue &&
      // item.career_options.includes(programType) &&
      // item.tuition <= maxTuitionValue
      // item.length_in_weeks <= timeToCompleteValue
    );

    setSearchResults(newResults);

    console.log(newResults);
  };
  const savedSchools = store.activeUser.favorites;
  return (
    <div className="text-center container-fluid">
      <div className="card mx-auto my-5" style={{ width: 24 + "rem" }}>
        <div className="card-body">
          <h3 className="card-title">Find Your School!</h3>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {/* <h5>Skill Level</h5>
          <select
            className="form-select"
            aria-label="Default select example"
            placeholder="Skill Level"
            id="skillDropdown"
            onChange={(e) => setSkillLevelValue(e.target.value)}
            value={skillLevelValue}
          >
            <option defaultValue={"Skill Level"}></option>
            <option value="Beginner">Beginner</option>
            <option value="Expert">Expert</option>
          </select> */}
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
              school_name={item.school_name}
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
