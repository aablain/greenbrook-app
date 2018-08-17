import React, { Component } from "react";

import NavBar from "../../Components/Sections/NavBar";
import Banner from "../../Components/Sections/Banner";
import Footer from "../../Components/Sections/Footer";

export default class FloorPlans extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="floorplans">
        <Banner title="Floor Plans" color="#1f6e3f" />
        <NavBar />

        <Footer />
      </div>
    );
  }
}
