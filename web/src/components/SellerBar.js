import React from "react";

class SellerBar extends React.Component {
  render() {
    return <div style={{ margin: "5vh auto" }}>{this.props.children}</div>;
  }
}

export default SellerBar;
