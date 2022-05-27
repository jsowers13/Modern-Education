import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Search } from "../component/search";
import { SchoolCard } from "../component/schoolcard";

export const User = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="container d-flex flex-column align-items-center mb-5">
      <p>Create User View Here {store.demo[params.theid].title}</p>
      <br></br>
      <Search />
      <br></br>
      <SchoolCard
        name="4 Geeks Academy"
        pic_url="https://www.beaconcouncil.com/wp-content/uploads/2018/08/4_geeks_academy_logo-300x150.jpg"
        state="Online"
        tuition="cheap"
        time_to_complete="almost nothing"
        id="0"
      />
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};
