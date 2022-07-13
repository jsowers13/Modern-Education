import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { LogOutBtn } from "./logoutbtn";
import { FavoriteDropdown } from "./favorites";
import ModernEducationLogo from "../../img/ModernEducation.jpeg";

export const Navbar = () => {
  const { store } = useContext(Context);
  const history = useHistory();

  const handleLogOut = () => {
    localStorage.clear();
    history.push("/");
    location.reload();
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/">
          {/* <span className="navbar-brand mb-0 h1">Modern Education</span> */}
          <img
            className="ms-5"
            src={ModernEducationLogo}
            style={{ height: 100 + "px", width: 100 + "px" }}
          ></img>
        </Link>

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
          <div className="w-25 d-flex justify-content-center">
            {/* <FavoriteDropdown /> */}

            <LogOutBtn />
          </div>
        )}
      </div>
    </nav>
  );
};
