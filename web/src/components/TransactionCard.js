import React from 'react';
import { Card, Timeline, Row, Col, Tag } from "antd";

const style = {
    container : {
        display : 'grid',
        gridTemplateColumns : '70% 30%',
    },
    card : {
        borderRadius : 10
    }
}

const TransactionCard = (props) => {
    const { data } = props;
    return (
        <Card
        title={`#Claim ${data.id}`}
        size="default"
        hoverable
        style={style.card}
        >
            <div style={style.container}>
                <Timeline>
                    <Timeline.Item>{data.placeOfExport}</Timeline.Item>
                    <Timeline.Item>{data.placeOfImport}</Timeline.Item>
                </Timeline>
                <Tag color='magenta' style={{height : 20,width : 'auto'}}>
                    {data.goods}
                </Tag>
            </div>
            <Row>
                <Col span={8}><b>Seller</b></Col>
                <Col span={16}>{data.sellerName}</Col>
            </Row>
            <Row>
                <Col span={8}><b>Buyer</b></Col>
                <Col span={16}>{data.buyerName}</Col>
            </Row>    
            <Row>
                <Col span={8}><b>Contract No.</b></Col>
                <Col span={16}>{data.contractNumber}</Col>
            </Row>    
            <Row>
                <Col span={8}><b>Document No.</b></Col>
                <Col span={16}>{data.documentNumber}</Col>
            </Row>    
            <Row>
                <Col span={8}><b>Invoice No.</b></Col>
                <Col span={16}>{data.invoiceNumber}</Col>
            </Row>      
        </Card>
    );

}

export default TransactionCard;