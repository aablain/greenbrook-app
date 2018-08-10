import React, { Component } from "react";

import Input from "./Input";

export default class NewHomeInputs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="new-home-inputs-cont">
        <Input
          updateValue={this.props.updateInput}
          value={this.props.address}
          target="address"
        />
        <Input
          updateValue={this.props.updateInput}
          value={this.props.description}
          target="description"
        />
        <Input
          updateValue={this.props.updateInput}
          value={this.props.comps}
          target="comps"
        />
      </div>
    );
  }
}
