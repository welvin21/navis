import React from "react";

import { Form, Button, AutoComplete } from "antd";
import UploadItem from "./uploadItem";
import { uploadFile } from "../storage/uploadFile";
import { FirebaseDB } from "../constants/firebase";

class SellerForm extends React.Component {
  state = {
    loading: false,
    fileList: []
  };
  appendList = newItem => {
    let Item = [...this.state.fileList, newItem];
    this.setState({
      fileList: Item
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    let id = FirebaseDB.collection("documents").doc().id;
    for (let i = 0; i < this.state.fileList.length; i++) {
      let type = this.state.fileList[i].type.replace(" ", "_");
      let base64String = this.state.fileList[i].base64String;
      uploadFile(id, type, base64String);
      // console.log(
      //   id,
      //   this.state.fileList[i].type,
      //   this.state.fileList[i].base64String
      // );
    }
    //uploadFile(this.state.imageUrl);
  };
  render() {
    // this.state.fileList.length !== 0
    //   ? console.log(this.state.fileList)
    //   : console.log("sad");
    return (
      <Form
        onSubmit={this.handleSubmit}
        style={{ display: "block", textAlign: "center" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            width: "60%",
            margin: "auto",
            flexWrap: "wrap"
          }}
        >
          <UploadItem docType="Sale Contract" appendList={this.appendList} />
          <UploadItem docType="Invoice" appendList={this.appendList} />
          <UploadItem docType="Bill of lading" appendList={this.appendList} />
          <UploadItem
            docType="Export Declaration"
            appendList={this.appendList}
          />
          <UploadItem docType="Bank Advice " appendList={this.appendList} />
        </div>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default SellerForm;
