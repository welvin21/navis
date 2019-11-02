import React, { useState } from "react";
import { Layout, Typography, Menu } from "antd";
import TransactionsList from "./TransactionsList";
import MakeClaimContent from "./MakeClaimContent";

const { Content, Sider } = Layout;
const { Title, Text } = Typography;

const MakeClaim = () => {
  const [contentData, setContentData] = useState(null);
  const onClickFunction = data => {
    setContentData(data);
  };

  return (
    <Layout style={{ padding: "24px 0", background: "#fff" }}>
      <Sider width={400} style={{ background: "#fff" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%" }}
        >
          <div style={{ margin: "auto 20px" }}>
            <Title>Make a Claim</Title>
            <Text>Choose Transaction</Text>
            <TransactionsList
              sortCriteria={null}
              onClickFunction={onClickFunction}
            />
          </div>
        </Menu>
      </Sider>
      <Content style={{ padding: "0 24px", height: "540px" }}>
        {<MakeClaimContent data={contentData} />}
      </Content>
    </Layout>
  );
};

export default MakeClaim;
