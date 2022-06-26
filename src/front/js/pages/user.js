import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Search } from "../component/search";
import { SchoolCard } from "../component/schoolcard";
import { FavoriteCard } from "../component/favoriteCard";
import { Login } from "./login";
import "../../styles/user.css";

export const User = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getSchools();
    actions.getColleges();
  }, []);

  return (
    <div className="text-center">
      {!store.activeUser ? (
        <div>
          <h1 className="text-white m-3">
            You're Not Logged In! Let's do something about that...
          </h1>
          <Login />
        </div>
      ) : (
        <div className="container footer-pusher d-flex flex-column align-items-center mb-5">
          {/* removed favorite card due to lack of functionality at this time */}
          {/* <div>
            {store.activeUser
              ? store.activeUser.favorites.map((item, index) => {
                  return (
                    <FavoriteCard
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
                })
              : ""}
          </div> */}
          <Search />
          <br></br>
        </div>
      )}
    </div>
  );
};
