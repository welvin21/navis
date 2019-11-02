import React from "react";
import { Typography, Form, Icon, Input, Button } from "antd";

const { Title } = Typography;

const MakeClaimContent = props => {
  const { data } = props;
  if (data === null) {
    return (
      <div>
        <Title level={2}>Please select a transaction.</Title>
      </div>
    );
  }
  return (
    <div>
      <Title level={2}>Claim Application</Title>
    </div>
  );
};

export default MakeClaimContent;
