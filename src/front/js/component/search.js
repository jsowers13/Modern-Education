import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { SchoolCard } from "./schoolcard.js";
import { BootcampSearch, CollegeSearch } from "./searchBoxes";

export const Search = () => {
  return (
    <div>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active rounded-pill"
            id="pills-bootcamp-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-bootcamp"
            type="button"
            role="tab"
            aria-controls="pills-bootcamp"
            aria-selected="true"
          >
            Search for BootCamps
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link rounded-pill"
            id="pills-college-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-college"
            type="button"
            role="tab"
            aria-controls="pills-college"
            aria-selected="false"
          >
            Search for Colleges
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-bootcamp"
          role="tabpanel"
          aria-labelledby="pills-bootcamp-tab"
        >
          <BootcampSearch />
        </div>
        <div
          className="tab-pane fade"
          id="pills-college"
          role="tabpanel"
          aria-labelledby="pills-college-tab"
        >
          <CollegeSearch />
        </div>
      </div>
    </div>
  );
};
