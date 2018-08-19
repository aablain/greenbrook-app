import React, { Component } from "react";

import NavBar from "../../Components/Sections/NavBar";
import Banner from "../../Components/Sections/Banner";
import Footer from "../../Components/Sections/Footer";

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about">
        <Banner title="About" color="" />
        <NavBar />

        <Footer />
      </div>
    );
  }
}
