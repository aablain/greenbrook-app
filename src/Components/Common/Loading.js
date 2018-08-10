import * as React from "react";

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="loading-cont">
        <img
          alt="Greenbrook Logo of two trees"
          className="loading-trees"
          src={require("../../assets/Greenbrook-construction-trees.png")}
        />
        <h3 className="loading-text">Greenbrook</h3>
      </div>
    );
  }
}
