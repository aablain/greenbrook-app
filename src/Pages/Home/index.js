import React, { Component } from "react";
import { base } from "../../fire";

import HomeBanner from "./HomeBanner";
import HomeSection from "./HomeSection";
import NavBar from "../../Components/Sections/NavBar";
import Footer from "../../Components/Sections/Footer";
import Loading from "../../Components/Common/Loading";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      home: {},
      loading: true
    };
  }

  componentWillMount() {
    this.homeRef = base.bindToState("home", {
      context: this,
      state: "home",
      then: () => {
        this.setState({ loading: false });
      }
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.homeRef);
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <div className="homepage">
        <HomeBanner />

        <NavBar />

        <div className="homepage-sections">
          <HomeSection
            buttonText="See Homes Available"
            description="Your dream home is waiting for you."
            linkPath="homesavailable"
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

        <Footer />
      </div>
    );
  }
}
