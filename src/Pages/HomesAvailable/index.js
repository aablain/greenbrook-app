import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

import { base } from "../../fire";
import HomesAvailableBanner from "./HomesAvailableBanner";
import HomeAvailable from "./HomeAvailable";
import HomeAvailablePage from "./HomeAvailablePage";

import Button from "../../Components/Common/Button";
import Banner from "../../Components/Sections/Banner";
import NavBar from "../../Components/Sections/NavBar";
import Footer from "../../Components/Sections/Footer";
import Loading from "../../Components/Common/Loading";

export default class HomesAvailable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    if (this.props.match) {
      const url = this.props.match.url.split("/").filter(str => str);

      this.setState({ url });
    }
  }

  componentWillMount() {
    this.homeRef = base.bindToState("home/homes", {
      context: this,
      state: "homes",
      then: () => {
        this.setState({ loading: false });
      }
    });
  }

  componentWillUpdate(nextProps) {
    const different =
      nextProps && this.props && nextProps.match.url !== this.props.match.url;

    if (different) {
      const url = nextProps.match.url.split("/").filter(str => str);

      this.setState({ url });
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.homeRef);
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    if (!this.state.homes) {
      return <span />;
    }

    if (this.state.url && this.state.url.length > 1) {
      const home = this.state.homes[this.state.url[1]];

      return <HomeAvailablePage home={home} />;
    }

    return (
      <div className="homes-available">
        <Banner title="Homes Available" color="#1f6e3f" />
        <NavBar />

        <div className="homes-available-homes">
          {/* <div>
            <Link to={"/newhome"}>
              <Button onClick={() => {}} value="Create New Home" />
            </Link>
          </div> */}

          {this.state.homes &&
            _.map(this.state.homes, (home, idx) => (
              <HomeAvailable key={idx} idx={idx} home={home} />
            ))}
        </div>

        <Footer />
      </div>
    );
  }
}
