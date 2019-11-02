import React from 'react';
import {Typography} from 'antd';

const {Title, Text} = Typography;

const ClaimContent = (props) => {
  const {claim} = props;
  return (
    <div>
      <Title level={2}>Claim</Title>
      <Text></Text>
    </div>
  )
}

export default ClaimContent;