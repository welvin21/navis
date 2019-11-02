import React,{useState} from 'react';
import { Statistic, Card, Row, Col, Icon } from 'antd';

const Stats = (props) => {
    return(
        <div style={{ background: '#fff' }}>
            <Row gutter={16}>
            <Col span={12}>
                <Card>
                <Statistic
                    title="Receivables"
                    value={8.11}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<Icon type="arrow-up" />}
                    suffix="%"
                />
                </Card>
            </Col>
            <Col span={12}>
                <Card>
                <Statistic
                    title="Interest Rate"
                    value={7.72}
                    precision={2}
                    valueStyle={{ color: '#cf1322' }}
                    prefix={<Icon type="arrow-down" />}
                    suffix="%"
                />
                </Card>
            </Col>
            </Row>
        </div>
    );
}

export default Stats;