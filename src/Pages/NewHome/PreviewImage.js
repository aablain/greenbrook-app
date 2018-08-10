import React, { Component } from "react";

export default class PreviewImage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { file } = this.props;

    return (
      <div
        className="image-preview"
        style={{ zIndex: this.props.length - this.props.idx }}
      >
        <span
          className="image-preview-close-btn"
          role="button"
          onClick={() => this.props.removeButton(file.lastModified)}
        >
          X
        </span>
        <img
          className="image-preview-image"
          alt="house for sale"
          src={file.preview}
        />
      </div>
    );
  }
}
