import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Search = () => {
  return (
    <div className="text-center container-fluid">
      <div className="card m-auto" style={{ width: 24 + "rem" }}>
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
          >
            <option defaultValue={"Tuition"}></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <h5>Time to Complete</h5>
          <select
            className="form-select"
            aria-label="Default select example"
            placeholder="Time to Complete"
          >
            <option defaultValue={"Time to Complete"}></option>
            <option value="12">12 weeks</option>
            <option value="16">16 weeks</option>
            <option value="20">20 weeks</option>
          </select>
        </div>

        <div className="card-body">
          <a href="#" className="card-link btn btn-primary">
            Search
          </a>
          <a href="#" className="card-link btn btn-primary">
            Reset
          </a>
        </div>
      </div>
    </div>
  );
};
