import React, { Component } from "react";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar">
        <span className="navbar-title">Greenbrook</span>

        <ul>
          <a className="navbar-link">
            <li>Home</li>
          </a>
          <a className="navbar-link">
            <li>Homes Available</li>
          </a>
          <a className="navbar-link">
            <li>Floor Plans</li>
          </a>
          <a className="navbar-link">
            <li>Gallery</li>
          </a>
        </ul>
      </nav>
    );
  }
}
