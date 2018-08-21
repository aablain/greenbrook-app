import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { Image } from "cloudinary-react";

import Button from "../../Components/Common/Button";

export default class HomeAvailable extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.createURL = this.createURL.bind(this);
  }

  render() {
    const { home } = this.props;

    if (!home) {
      return <span />;
    }

    const images = home.images && _.map(home.images, img => img);

    const path = this.createURL(images[0]);

    return (
      <section className="homes-available-home">
        <div className="header-title-box" style={{ backgroundImage: path }}>
          <h1 className="homes-available-home-banner-title">{home.address}</h1>

          <Link to={`/homesavailable/${this.props.idx}`}>
            <Button
              className="homes-available-home-nav-button"
              onClick={() => {}}
              value="View Home"
            />
          </Link>
        </div>
      </section>
    );
  }

  createURL(imageID) {
    return `url(http://res.cloudinary.com/${
      process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
    }/image/upload/c_scale,w_1000/${imageID})`;
  }
}
