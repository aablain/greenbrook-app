import React, { Component } from "react";
import cx from "classnames";

// type Props = {
//     className?: string,
//     onClick: () => void,
//     value: string,
// };

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className={cx(
          "cc-button",
          this.props.className && this.props.className
        )}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}
