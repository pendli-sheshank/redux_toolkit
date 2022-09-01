import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Headers = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="second-header">
        <Link className="nav-link" to="/movies">
          Movies
        </Link>
        <Link className="nav-link" to="/shows">
          Shows
        </Link>
      </div>
      <div>
        <div className="user-img">
          <img
            src={
              "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
            }
            alt="user"
          />
        </div>
      </div>
    </div>
  );
};

export default Headers;
