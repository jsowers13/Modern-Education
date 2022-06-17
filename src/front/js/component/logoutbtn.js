import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const LogOutBtn = () => {
  const { store } = useContext(Context);
  const history = useHistory();

  const handleLogOut = () => {
    localStorage.clear();
    history.push("/");
    location.reload();
  };

  return (
    <button className="btn btn-primary" onClick={() => handleLogOut()}>
      Logout
    </button>
  );
};
