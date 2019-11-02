import React, { useState } from "react";
import { Timeline, Icon, Row, Col, Typography } from "antd";
import Documents from "./Documents";
import Stats from "./Stats";
import Charts from "./Charts";
import ShipSelect from "./ShipSelect";
// import { FirebaseStorage as storage } from '../constants/firebase';

const { Title } = Typography;
const style = {
  container: {
    border: "0.5px solid #D8D8D8",
    borderRadius: 10,
    height: "100%",
    display: "grid"
  },
  card: {
    borderRadius: 10,
    margin: 10
  },
  timeline: {
    margin: 20,
    gridArea: "timeline"
  },
  stats: {
    gridArea: "stats"
  },
  document: {
    color: "blue",
    textDecoration: "underline",
    cursor: "pointer"
  },
  details: {
    display: "grid",
    gridTemplateAreas: `
            'timeline stats'
            'timeline charts'
            'timeline charts'
            'timeline charts'
            'timeline charts'
            'timeline charts'
            'timeline charts'
        `
  },
  charts: {
    gridArea: "charts"
  }
};

const TransactionDetails = props => {
  const { data } = props;
  const [visible, onModalClick] = useState(false);
  if (data === undefined) {
    return <ShipSelect text="Select a transaction." />;
  } else {
    return (
      <div>
        <Title level={2}>{`Transaction #${data.id}`}</Title>
        <Documents
          visible={visible}
          onModalClick={visible => onModalClick(visible)}
          docId={data.documentId}
        />
        <div style={style.details}>
          <Timeline style={style.timeline}>
            <Timeline.Item
              dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
            >
              {data.sellerSendDeliverables}
              <br />
              {`${data.sellerName} send goods to shipping company`}
              <br />
              <p onClick={() => onModalClick(true)} style={style.document}>
                documents
              </p>
            </Timeline.Item>
            <Timeline.Item
              dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
            >
              {data.buyerConfirmContracts}
              <br />
              {`${data.buyerName} confirms contracts and documents`}
              <br />
              <p onClick={() => onModalClick(true)} style={style.document}>
                documents
              </p>
            </Timeline.Item>
            <Timeline.Item
              dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
            >
              {data.bankPurchaseReceivables}
              <br />
              Purchased debt
              <br />
              <p onClick={() => onModalClick(true)} style={style.document}>
                documents
              </p>
            </Timeline.Item>
            <Timeline.Item
              dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
            >
              {data.shipmentDate}
              <br />
              Shipment date
              <br />
              <p onClick={() => onModalClick(true)} style={style.document}>
                documents
              </p>
            </Timeline.Item>
            <Timeline.Item
              dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
            >
              {data.goodsReceived}
              <br />
              Scheduled Goods arrived
              <br />
              <p onClick={() => onModalClick(true)} style={style.document}>
                documents
              </p>
            </Timeline.Item>
            <Timeline.Item
              dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
            >
              {data.paymentDueDate}
              <br />
              Payment Due Date
              <br />
              <p onClick={() => onModalClick(true)} style={style.document}>
                documents
              </p>
            </Timeline.Item>
            <Timeline.Item
              dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
            >
              {data.paymentDate}
              <br />
              Payment Date
              <br />
              <p onClick={() => onModalClick(true)} style={style.document}>
                documents
              </p>
            </Timeline.Item>
          </Timeline>
          <Stats style={{ gridArea: "stats" }} />
          <div style={style.charts}>
            <h2>Transaction progress</h2>
            <br />
            <Charts progress={82} />
          </div>
        </div>
      </div>
    );
  }
};

export default TransactionDetails;
