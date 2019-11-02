import React,{ useState } from 'react';
import { Card, Timeline, Row, Col } from "antd";

const style = {
    card : {
        border : 10
    }
}

const ClaimCard = (props) => {
    const { data } = props;
    return (
        <Card
        title={`#Claim ${data.id}`}
        size="default"
        hoverable
        style={style.card}
        >
            <Timeline>
                <Timeline.Item>Hong Kong</Timeline.Item>
                <Timeline.Item>United States</Timeline.Item>
            </Timeline>

            <Row>
                <Col span={5}>Seller</Col>
                <Col span={2}>{data.sellerName}</Col>
            </Row>
            <Row>
                <Col span={5}>Buyer</Col>
                <Col span={2}>{data.buyerName}</Col>
            </Row>           
        </Card>
    );

}

export default ClaimCard;