import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Search } from "../component/search";
import { SchoolCard } from "../component/schoolcard";
import { Login } from "./login";

export const User = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div className="text-center">
      {!store.activeUser ? (
        <div>
          <h1>You're Not Logged In! Let's do something about that...</h1>
          <Login />
        </div>
      ) : (
        <div className="container d-flex flex-column align-items-center mb-5">
          <Search />
          <br></br>
          {/* <SchoolCard
            school_name="4 Geeks Academy"
            pic_url="https://www.beaconcouncil.com/wp-content/uploads/2018/08/4_geeks_academy_logo-300x150.jpg"
            state="Online"
            tuition="cheap"
            time_to_complete="almost nothing"
            id="0"
          /> */}
        </div>
      )}
    </div>
  );
};
