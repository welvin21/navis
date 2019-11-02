import React,{useState} from 'react';
import ShipSelect from "./ShipSelect";
import { Row, Col, Form, Tag, Button, Icon, Upload, Input, Typography } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

const NotificationDisplay = (props) => {
    const { isLoaded,data,isUrgent,onClick } = props;
    const { title,docs } = data;
    return(
        <div>
            {isLoaded ? (
                <div>
                <Row>
                  <Col span={22}>
                    <Title level={3}>Transaction {title}</Title>
                  </Col>
                  <Col span={2}>
                    {isUrgent ? <Tag color='red'>Urgent</Tag> : <Tag color='green'>Submitted</Tag>}
                  </Col>
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
                  <div style={{ textAlign: 'right' }}>
                  <Button type="primary" onClick={()=>{onClick()}}>Submit</Button>
                  </div>
                </Form>
              </div>
            ) : (<ShipSelect text="Select a notification." />)}
        </div>
    );
}

export default NotificationDisplay;