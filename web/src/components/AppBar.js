import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Icon } from "antd";
//import { FirebaseDB } from "../constants/firebase";
import { Link } from "react-router-dom";

const { Header, Content, Sider } = Layout;

class AppBar extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>All Transactions</span>
              <Link to="/"></Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Make a Claim</span>
              <Link to="/makeClaim"></Link>
            </Menu.Item>
          </Menu>
        </Sider>
        {
          //content on the right
        }
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ padding: "0 20px", marginTop: "20px" }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default AppBar;
