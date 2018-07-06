import React, { Component } from "react";

import HomeBanner from "./HomeBanner";
import HomeSection from "./HomeSection";
import NavBar from "../../Components/Sections/NavBar";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage">
        <HomeBanner />

        <NavBar />

        <div className="homepage-sections">
          <HomeSection
            buttonText="See Homes Available"
            description="Your dream home is waiting for you."
            linkPath="homesavilable"
            title="Homes Available"
          />
          <HomeSection
            buttonText="Browse Floor Plans"
            description="Find the House you see yourself in."
            linkPath="floorplans"
            title="Floor Plans"
          />
          <HomeSection
            buttonText="View Gallery"
            description="Take a look at homes others have already snagged."
            linkPath="gallery"
            title="Gallery"
          />
          <HomeSection
            buttonText="Read Our Story"
            description="Learn about what makes Greenbrook unique."
            linkPath="about"
            title="About Us"
          />
        </div>
      </div>
    );
  }
}
