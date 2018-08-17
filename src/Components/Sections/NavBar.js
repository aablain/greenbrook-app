import React, { Component } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showButtons: false
    };

    this.toggleNavBar = this.toggleNavBar.bind(this);
  }

  render() {
    const { showButtons } = this.state;

    return (
      <nav className={cx("navbar", showButtons && "grow-full-screen")}>
        <span
          className="navbar-title"
          onClick={this.toggleNavBar}
          role="button"
        >
          Greenbrook
        </span>

        <ul className={cx(showButtons && "reveal")}>
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

          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    );
  }

  toggleNavBar() {
    this.setState({ showButtons: !this.state.showButtons });
  }
}
