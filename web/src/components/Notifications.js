import React, { useState } from "react";
import {
  Layout,
  Typography,
  Menu,
  Dropdown,
  Icon,
  Row,
  Col,
  Tag,
  Form,
  Upload,
  Button,
  Input,
  notification
} from "antd";
import TransactionsList from "./TransactionsList";
import NotificationCard from "./NotificationCard";
import NotificationDisplay from "./NotificationDisplay";

const { Content, Sider } = Layout;
const { Title, Text } = Typography;
const { TextArea } = Input;

const openNotification = () => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button type="primary" size="small" onClick={() => notification.close(key)}>
      Confirm
    </Button>
  );
  notification.open({
    message: 'Your documents have been submitted',
    description:
      // document.getElementById
      'Thank you for submitting the requested documents. We will get back to you shortly',
    btn,
    key,
    onClose: ()=>{},
  });
};

const Notifications = () => {
  const [notificationDisplay, setNotificationDisplay] = useState(false);
  const [isUrgent, setUrgent] = useState(true);
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
            <Title>Notifications</Title>
            <NotificationCard
              title="ID #ZwoFpRiRiL"
              docs={["invoice", "bill of lading"]}
              onClick={() => {
                setNotificationDisplay(true);
              }}
              isUrgent={isUrgent}
            />
          </div>
        </Menu>
      </Sider>
      <Content style={{ padding: "0 24px", height: "100vh" }}>
        <NotificationDisplay 
          isLoaded={notificationDisplay} 
          data={{title : 'ID #ZwoFpRiRiL', docs : ["invoice", "bill of lading"]}} 
          isUrgent={isUrgent}
          onClick={()=>{
            setUrgent(false);
            openNotification();
          }}
        />
      </Content>
    </Layout>
  );
};

export default Notifications;
