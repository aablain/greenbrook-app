import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer">
        <h5 className="footer-text">Greenbrook Construction, LLC.</h5>
        <a className="footer-link" href="tel:+1-360-555-5555">
          <span>(360) 555-5555</span>
        </a>
      </footer>
    );
  }
}
