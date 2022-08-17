import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Headers = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-img">
        <img
          src={
            "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          }
          alt="user"
        />
      </div>
    </div>
  );
};

export default Headers;
