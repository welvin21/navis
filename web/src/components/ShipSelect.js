import React from "react";
import { Typography } from "antd";

import logo from "../images/navis_logo.png";

const { Title } = Typography;

const ShipSelect = props => {
  const { text } = props;
  return (
    <div style={{ margin: "auto", textAlign: "center", padding: "30px" }}>
      <img src={logo} alt="navis" style={{ width: "calc(300px + 5vw)" }} />
      <Title level={3}>{text}</Title>
    </div>
  );
};

export default ShipSelect;
