import React from "react";

import { Form, Button, AutoComplete, Typography, message } from "antd";
import UploadItem from "./uploadItem";
import { uploadFile } from "../storage/uploadFile";
import { FirebaseDB } from "../constants/firebase";
import logo from "../images/Navis_deconstructed_transparent.png";

const { Title, Text } = Typography;

const Heading = props => {
  const { claim } = props;
  if (!claim) {
    return <div></div>;
  }
  return (
    <div style={{ margin: "20px 10px 30px 10px" }}>
      <Text strong>#Transaction {claim.id}</Text>
      <br />
      <Text>Seller: {claim.sellerName}</Text>
      <br />
      <Text>Buyer: {claim.buyerName}</Text>
      <br />
    </div>
  );
};

class SellerForm extends React.Component {
  state = {
    loading: false,
    fileList: [],
    claim: undefined
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
  success = () => {
    message
      .loading("Uploading documents...", 1.5)
      .then(() => message.success("Documents submitted successfully", 1));
  };

  componentDidMount() {
    FirebaseDB.collection("claims")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.setState({ claim: doc.data().claims[0] });
        });
      });
  }

  render() {
    // this.state.fileList.length !== 0
    //   ? console.log(this.state.fileList)
    //   : console.log("sad");
    const { claim } = this.state;
    return (
      <div
        style={{
          border: "1px solid grey",
          borderRadius: "10px",
          padding: "20px",
          width: "750px",
          margin: "auto"
        }}
      >
        <div style={{ display: "inline-flex" }}>
          <img
            src={logo}
            alt="logo"
            style={{
              width: "38px",
              height: "38px",
              marginTop: "3px",
              marginRight: "15px"
            }}
          />
          <Title>Navis</Title>
        </div>
        <Title level={2}>Seller Documentation Form</Title>
        <Heading claim={claim} />
        <hr />
        <Title level={4} style={{ margin: "20px auto" }}>
          Please provide the following information.
        </Title>
        <Form onSubmit={this.handleSubmit} style={{ marginBottom: "60px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              margin: "25px auto",
              flexWrap: "wrap",
              textAlign: "center"
            }}
          >
            <UploadItem docType="Sale Contract" appendList={this.appendList} />
            <UploadItem docType="Invoice" appendList={this.appendList} />
            <UploadItem docType="Bill of Lading" appendList={this.appendList} />
            <UploadItem
              docType="Export Declaration"
              appendList={this.appendList}
            />
            <UploadItem docType="Bank Advice" appendList={this.appendList} />
          </div>
          <Button
            type="primary"
            htmlType="submit"
            style={{ float: "right" }}
            onClick={this.success}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default SellerForm;
