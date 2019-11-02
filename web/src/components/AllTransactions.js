import React, { useState } from "react";
import { Layout, Typography, Menu, Dropdown, Icon } from "antd";
import TransactionsList from "./TransactionsList";

const { Content, Sider } = Layout;
const { Title, Text } = Typography;

const AllTransactions = () => {
  const list = ["latest", "earliest", "claimant name"];
  const [sortCriteria, setSortCriteria] = useState("latest");

  const menu = (
    <Menu
      onClick={e => {
        setSortCriteria(e.key);
      }}
    >
      {list.map(item => (
        <Menu.Item key={item}>
          <Text>{item}</Text>
        </Menu.Item>
      ))}
    </Menu>
  );
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
            <Title>All Claims</Title>
            <Text>sorted by </Text>
            <Dropdown overlay={menu}>
              <Text style={{ color: "blue" }}>
                {sortCriteria} {list[sortCriteria]} <Icon type="down" />
              </Text>
            </Dropdown>
            <TransactionsList sortCriteria={sortCriteria} />
          </div>
        </Menu>
      </Sider>
      <Content style={{ padding: "0 24px", height: "540px" }}>
        {
          // right content
        }
      </Content>
    </Layout>
  );
};

export default AllTransactions;
