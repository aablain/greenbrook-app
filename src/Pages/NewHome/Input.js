import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: !this.props.value,
      value: this.props.value || ""
    };

    this.cancel = this.cancel.bind(this);
    this.edit = this.edit.bind(this);
    this.renderComponent = this.renderComponent.bind(this);
    this.startUpdate = this.startUpdate.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  render() {
    return (
      <div className="new-home-input-cont">
        {this.renderComponent()}

        {this.state.editing ? (
          <span className="new-home-input-button" onClick={this.startUpdate}>
            SAVE
          </span>
        ) : (
          <span className="new-home-input-button" onClick={this.edit}>
            EDIT
          </span>
        )}
        {this.state.editing && (
          <span className="new-home-input-button" onClick={this.cancel}>
            CANCEL
          </span>
        )}
      </div>
    );
  }

  cancel() {
    this.setState({ editing: false, value: this.props.value });
  }

  edit() {
    this.setState({ editing: true });
  }

  renderComponent() {
    if (this.state.editing) {
      return (
        <input
          className="new-home-input"
          onChange={this.updateValue}
          value={this.state.value}
        />
      );
    }

    switch (this.props.target) {
      case "address":
        return <h2 className="new-home-input-header">{this.state.value}</h2>;
      case "description":
      case "comps":
        return <p className="new-home-input-text">{this.state.value}</p>;
      default:
        return <p>{this.state.value}</p>;
    }
  }

  startUpdate() {
    this.props.updateValue(this.props.target, this.state.value);
    this.setState({ editing: false });
  }

  updateValue(e) {
    this.setState({ value: e.target.value });
  }
}
