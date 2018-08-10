import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { Image } from "cloudinary-react";

import Button from "../../Components/Common/Button";

export default class HomeAvailable extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { home } = this.props;

    if (!home) {
      return <span />;
    }

    const images = home.images && _.map(home.images, img => img);

    return (
      <section className="home-available">
        <div className="header-title-box">
          <h1 className="home-available-banner-title">{home.address}</h1>

          {home.images &&
            images.length && (
              <Image
                cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
                crop="scale"
                publicId={images[0]}
                width={1000}
              />
            )}

          <Link to={`/homesavailable/${this.props.idx}`}>
            <Button
              className="home-available-nav-button"
              onClick={() => {}}
              value="View Home"
            />
          </Link>
        </div>
      </section>
    );
  }
}
