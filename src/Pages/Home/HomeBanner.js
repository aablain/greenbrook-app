import React, { Component } from "react";

export default class HomeBanner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="homepage-banner">
        <h1 className="homepage-banner-title">Greenbrook</h1>
        <h5 className="homepage-banner-description">Construction, LLC.</h5>
      </header>
    );
  }
}
