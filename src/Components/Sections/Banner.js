import React, { Component } from "react";

export default class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header
        className="homes-available-banner"
        style={{ backgroundColor: this.props.color }}
      >
        <div className="header-title-box">
          <h1 className="homes-available-banner-title">{this.props.title}</h1>
        </div>
      </header>
    );
  }
}
