import React, { useState } from "react";
import { Layout, Typography, Menu, Dropdown, Icon, Row, Col, Tag, Form, Upload, Button, Input } from "antd";
import TransactionsList from "./TransactionsList";
import NotificationCard from "./NotificationCard";
import NotificationDisplay from "./NotificationDisplay";

const { Content, Sider } = Layout;
const { Title, Text } = Typography;
const { TextArea } = Input;

const initialData = () => {
    return (
        <Title>Select a Notification</Title>
    );
}

const setDisplayData = (title, docs) => {
    return(
        <div>
            <Row>
                <Col span={22}><Title level={3}>Transaction {title}</Title></Col>
                <Col span={2}><Tag color="red">Urgent</Tag></Col>
            </Row>
            <Title level={4}>HKECIC is Requesting the following documents: </Title>
            <Form>
                {docs.map(item => {
                    return (
                        <Form.Item colon={false} label={<Tag color="cyan">{item}</Tag>}>
                            <Upload>
                            <Button>
                                <Icon type="upload" /> Upload
                            </Button>
                            </Upload>
                        </Form.Item>
                    );
                })}
                <Form.Item label="Additional Notes">
                    <TextArea rows={4} />
                </Form.Item>
                <Button type="primary">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

const Notifications = () => {
  const [notificationDisplay, setNotificationDisplay] = useState(initialData);
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
            <NotificationCard title="ID #3450A" docs={["invoice", "bill of lading"]} onClick={() => {
                setNotificationDisplay(setDisplayData("ID #3450A", ["invoice", "bill of lading"]))
            }}/>
          </div>
        </Menu>
      </Sider>
      <Content style={{ padding: "0 24px", height: "540px" }}>
          <NotificationDisplay data={notificationDisplay}/>
      </Content>
    </Layout>
  );
};

export default Notifications;
