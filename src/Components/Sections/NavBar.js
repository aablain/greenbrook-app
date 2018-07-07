import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar">
        <span className="navbar-title">Greenbrook</span>

        <ul>
          <Link to="/" className="navbar-link">
            <li>Home</li>
          </Link>

          <Link to="/homesavailable">
            <li>Homes Available</li>
          </Link>

          <Link to="/floorplans">
            <li>Floor Plans</li>
          </Link>

          <Link to="/gallery">
            <li>Gallery</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
