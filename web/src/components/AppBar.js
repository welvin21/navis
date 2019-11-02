import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Icon } from "antd";
//import { FirebaseDB } from "../constants/firebase";
import { Link } from 'react-router-dom';

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
                <span>All Claims</span>
                <Link to ="/"></Link>
              </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Make Claim</span>
              <Link to ="/claimTypes"></Link>
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
                    this.props.children
                  }
                </Menu>
              </Sider>
              <Content style={{ padding: "0 24px", height: "540px" }}>
                
              </Content>
            </Layout>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default AppBar;
