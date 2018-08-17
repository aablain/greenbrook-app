import React, { Component } from "react";
import cx from "classnames";
import _ from "lodash";
import { Image } from "cloudinary-react";

export default class HomeAvailablePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainImage: this.props.home.images[0]
    };

    this.choosePhoto = this.choosePhoto.bind(this);
  }

  render() {
    const { home } = this.props;

    if (!home) {
      return <span />;
    }

    const images = home.images && _.map(home.images, img => img);

    return (
      <section className="home-available-page">
        {/* <div className="header-title-box">
        
        </div> */}

        <div className="home-available-page-content">
          <div className="home-available-page-content-main-photo">
            <Image
              cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
              crop="scale"
              publicId={this.state.mainImage}
              width={1000}
            />
          </div>

          <div className="home-available-page-content-photos-cont">
            <div className="home-available-page-content-photos">
              {home.images &&
                images.length &&
                images.map((img, idx) => (
                  <div
                    className={cx(
                      "home-available-page-content-photo",
                      this.state.mainImage === img && "selected-image"
                    )}
                    key={img}
                  >
                    <Image
                      cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
                      crop="scale"
                      publicId={img}
                      key={idx + 1}
                      width={100}
                      onClick={() => this.choosePhoto(img)}
                    />
                  </div>
                ))}
            </div>
          </div>

          <h1 className="home-available-banner-title">{home.address}</h1>

          <p className="home-available-banner-desc">{home.description}</p>
        </div>
      </section>
    );
  }

  choosePhoto(mainImage) {
    this.setState({ mainImage });
  }
}
