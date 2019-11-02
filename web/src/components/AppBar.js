import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Icon, Typography } from "antd";
//import { FirebaseDB } from "../constants/firebase";
import { Link } from "react-router-dom";
import logo from '../images/Navis_icon_transparent.png'

const { Header, Content, Sider } = Layout;
const {Title, Text} = Typography;


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
          <Menu
            theme="dark"
            defaultSelectedKeys={[this.props.location.pathname]}
            mode="inline"
          >

            <div style={{textAlign: 'center', width: '90%', margin: '8px', marginRight: '24px', marginTop: '24px' }}>
            <img src={logo} alt='logo' style={{ width: '70px', height: '70px' }}/>
            <div>
            <Title style={{color: 'white'}}>Navis</Title>
            </div>
            </div>
            <Menu.Item key="/">
              <Icon type="pie-chart" />
              <span>All Transactions</span>
              <Link to="/allTransactions"></Link>
            </Menu.Item>
            <Menu.Item key="/makeClaim">
              <Icon type="desktop" />
              <span>Make a Claim</span>
              <Link to="/makeClaim"></Link>
            </Menu.Item>
            <Menu.Item key="/notifications">
              <Icon type="notification" />
              <span>Notifications</span>
              <Link to="/notifications"></Link>
            </Menu.Item>
          </Menu>
        </Sider>
        {
          //content on the right
        }
        <Layout>
          <Content style={{ padding: "0 20px", marginTop: "20px" }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default AppBar;
