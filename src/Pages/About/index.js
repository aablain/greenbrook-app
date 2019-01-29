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

        <div className="about-page-wrapper">
          <div className="about-page-paragraph-cont">
            <h3 className="about-page-title">A Brief History</h3>
            <p className="about-page-paragraph">
              Greenbrook Construction was birthed from a wealth of professional
              experience by founder and owner Cal Aho. Cal leverages his decades
              of professional experience working in virtually all facets of the
              construction business to build homes that are not only affordable,
              but are built with quality and exceptional value. The vision set
              forth is to create great homes with high craftsmanship and quality
              materials without unnecessary mark-up or price hikes.
            </p>
          </div>

          <div
            className="about-page-paragraph-cont"
            style={{ animationDuration: "900ms" }}
          >
            <h3 className="about-page-title">Home Locations</h3>
            <p className="about-page-paragraph">
              We build our homes all throughout Clark County, Washington in
              various developments of varying sizes. If you would like to know
              where we are currently creating future homes, you can checkout the
              Homes Available page on our site
            </p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
