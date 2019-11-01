import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
//import { FirebaseDB } from "../constants/firebase";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

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
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        {
          //conten on the right
        }
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ padding: "0 20px", marginTop: "20px" }}>
            <Layout style={{ padding: "24px 0", background: "#fff" }}>
              <Sider width={400} style={{ background: "#fff" }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{ height: "100%" }}
                >
                  {
                    //Add the components here
                  }
                </Menu>
              </Sider>
              <Content style={{ padding: "0 24px", height: "540px" }}>
                Content
              </Content>
            </Layout>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default AppBar;
