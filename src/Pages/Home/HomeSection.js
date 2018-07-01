import React, { Component } from "react";

import Button from "../../Component/Common/Button";

// type Props = {
//     backgroundURL: string,
//     buttonText: string,
//     description: string,
//     title: string,
// };

export default class HomeSection extends Component {
  constructor(props) {
    super(props);

    this.navigate = this.navigate.bind(this);
  }

  render() {
    const { backgroundURL, buttonText, description, title } = this.props;

    return (
      <div
        className="homepage-section"
        style={{ backgroundImage: `url(${backgroundURL})` }}
      >
        <h2 className="homepage-section-title">{title}</h2>

        <div className="homepage-section-button-box">
          <p className="homepage-section-button-box-desc">{description}</p>

          <Button value={buttonText} onClick={this.navigate} />
        </div>
      </div>
    );
  }

  navigate() {
    // TODO ---

    return void 0;
  }
}
