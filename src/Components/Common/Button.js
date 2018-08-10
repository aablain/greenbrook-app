import React, { Component } from "react";
import cx from "classnames";

// type Props = {
//     className?: string,
//    disabled?: boolean,
//     onClick: () => void,
//     value: string,
// };

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className={cx(
          "cc-button",
          this.props.className && this.props.className,
          this.props.disabled && "disabled"
        )}
        disabled={this.props.disabled && this.props.disabled}
        onClick={!this.props.disabled && this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}
