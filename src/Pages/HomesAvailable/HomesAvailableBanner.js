import React, { Component } from "react";

export default class HomesAvailableBanner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="homes-available-banner">
        <div className="header-title-box">
          <h1 className="homes-available-banner-title">Homes Available</h1>
        </div>
      </header>
    );
  }
}
