import React, { Component } from "react";

import HomeBanner from "./HomeBanner";
import HomeSection from "./HomeSection";
import NavBar from "../../Components/Section/NavBar";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage">
        <HomeBanner />

        <NavBar />

        <HomeSection />
        <HomeSection />
        <HomeSection />
        <HomeSection />
      </div>
    );
  }
}
