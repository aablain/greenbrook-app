import React, { Component } from "react";
import axios from "axios";
// import _ from "lodash";
import Dropzone from "react-dropzone";
// import ImageCompressor from "image-compressor.js";

import { base } from "../../fire";
import PreviewImage from "./PreviewImage";
import NewHomeInputs from "./NewHomeInputs";
import Button from "../../Components/Common/Button";

export default class NewHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      comps: "",
      description: ""
    };

    this.onDrop = this.onDrop.bind(this);
    this.removeButton = this.removeButton.bind(this);
    this.saveNewPost = this.saveNewPost.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  render() {
    const { address, comps, description, files } = this.state;
    const disabled = !(address && comps && description);

    return (
      <div className="new-home">
        <Dropzone className="new-home-drop-zone" onDrop={this.onDrop}>
          <p>Drop Zone</p>
        </Dropzone>

        {files &&
          !!files.length && (
            <div className="new-home-previews-cont">
              {files.map((file, idx) => (
                <PreviewImage
                  key={file.lastModified}
                  removeButton={this.removeButton}
                  file={file}
                  idx={idx}
                  length={files.length}
                />
              ))}
            </div>
          )}

        <NewHomeInputs updateInput={this.updateInput} {...this.state} />

        <div className="new-home-save-button-cont">
          <Button
            disabled={disabled && false}
            className="new-home-button"
            onClick={this.saveNewPost}
            value="Save"
          />
        </div>
      </div>
    );
  }

  updateInput(target, value) {
    if (target && value) {
      this.setState({ [target]: value });
    }
  }

  async onDrop(files) {
    if (files) {
      if (this.state.files) {
        const newFiles = files.map(newFile => {
          const notUniq = this.state.files.some(stateFile => {
            return (
              stateFile.lastModified === newFile.lastModified &&
              stateFile.name === newFile.name
            );
          });

          if (!notUniq) {
            return newFile;
          } else {
            return void 0;
          }
        });
        const mergedFiles = [...this.state.files, ...newFiles].filter(
          file => !!file
        );
        this.setState({ files: mergedFiles });
      } else {
        this.setState({ files });
      }
    }
  }

  removeButton(lastModified) {
    const files = this.state.files.filter(
      file => file.lastModified !== lastModified
    );
    this.setState({ files });
  }

  async saveNewPost() {
    const { files } = this.state;
    // debugger;

    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_CLOUD_PRESET
    );

    // debugger;
    // const compressedFiles = await Promise.all(
    //   files.map(file => {
    //     return new ImageCompressor(file, {
    //       quality: 0.7,
    //       maxWidth: 1000,
    //       success(result) {
    //         debugger;
    //         return result;
    //       }
    //     });
    //   })
    // );
    // debugger;

    const resp = await Promise.all(
      files.map(file => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append(
          "upload_preset",
          process.env.REACT_APP_CLOUDINARY_CLOUD_PRESET
        );

        return axios.post(
          `https://api.cloudinary.com/v1_1/${
            process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
          }/image/upload`,
          formData
        );
      })
    );

    // debugger;

    const images = resp.map(img => img.data.public_id);

    base.push(`home/homes`, {
      data: {
        address: this.state.address,
        description: this.state.description,
        comps: this.state.comps,
        images
      },
      then: () => {
        // TODO
        // Go to New Page
      }
    });
  }
}
