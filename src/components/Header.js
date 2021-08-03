import React from "react";
import "../assets/styles/components/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-nav">
        <Link to="/">
          <h1>
            <span>AIR</span>vironment
          </h1>
        </Link>
      </div>

      <div className="nav">
        <Link to="/all-data">
          <span className="ave">ALL DATA</span>
        </Link>
        <Link to="/averages">
          <span className="ave">AVERAGES</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
