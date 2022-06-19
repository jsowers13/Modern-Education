import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { LogOutBtn } from "./logoutbtn";
import { FavoriteDropdown } from "./favorites";

export const Navbar = () => {
  const { store } = useContext(Context);
  const history = useHistory();

  const handleLogOut = () => {
    localStorage.clear();
    history.push("/");
    location.reload();
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        {!store.activeUser ? (
          <Link to="/">
            <span className="navbar-brand mb-0 h1">Modern Education</span>
          </Link>
        ) : (
          <Link to="/user">
            <span className="navbar-brand mb-0 h1">Modern Education</span>
          </Link>
        )}

        {!store.activeUser ? (
          <div className="ml-auto">
            <Link to="/signup">
              <button className="btn btn-primary mx-2">Sign Up</button>
            </Link>

            <Link to="/login">
              <button className="btn btn-primary mx-2">Login</button>
            </Link>
          </div>
        ) : (
          <div className="w-25 d-flex justify-content-around">
            <FavoriteDropdown />

            <LogOutBtn />
          </div>
        )}
      </div>
    </nav>
  );
};
