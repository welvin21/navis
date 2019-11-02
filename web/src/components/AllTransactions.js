import React, { useState } from "react";
import { Layout, Typography, Menu, Dropdown, Icon } from "antd";
import TransactionsList from "./TransactionsList";
import TransactionDetails from "./TransactionDetails";

const { Content, Sider } = Layout;
const { Title, Text } = Typography;

const AllTransactions = () => {
  const list = ["latest", "earliest", "amount"];
  const [sortCriteria, setSortCriteria] = useState("latest");
  const [data, changeData] = useState(undefined);

  const onClickFunction = data => {
    changeData(data);
  };

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
      <Sider width={550} style={{ background: "#fff" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%" }}
        >
          <div style={{ margin: "auto 20px" }}>
            <Title>All Transactions</Title>
            <Text>sorted by </Text>
            <Dropdown overlay={menu}>
              <Text style={{ color: "blue" }}>
                {sortCriteria} <Icon type="down" />
              </Text>
            </Dropdown>
            <TransactionsList
              sortCriteria={sortCriteria}
              onClickFunction={onClickFunction}
            />
          </div>
        </Menu>
      </Sider>
      <Content style={{ padding: "0 24px", height: "540px" }}>
        {<TransactionDetails data={data} />}
      </Content>
    </Layout>
  );
};

export default AllTransactions;
