import React, { useState, useEffect } from "react";
import { Timeline, Icon, Row, Col, Typography } from "antd";
import Documents from "./Documents";
import Stats from "./Stats";
import Charts from "./Charts";
import ShipSelect from "./ShipSelect";
import { FirebaseDB as db } from "../constants/firebase";
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
        color: "rgb(45, 110, 210)",
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
    const [hasUploaded, setHasUploaded] = useState(false);
    const [docs, setDocs] = useState({});
    const [progress, setProgress] = useState(74);

    let doc = db.collection("documents");
    let observer = doc.onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
            if (!hasUploaded) {
                let temp = doc.data();
                delete (temp.authorized)
                setDocs(temp);
                setHasUploaded(true);
                setProgress(90);
            }
        });
    })
    console.log(docs)
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
                        {
                            hasUploaded ?
                                <Timeline.Item
                                    dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
                                >
                                    3 November 2019
                <br />
                                    {`${data.buyerName} confirmed sale contract`}
                                    <br />
                                    <p onClick={() => onModalClick(true)} style={style.document}>
                                        documents
                </p>
                                </Timeline.Item> :
                                null
                        }
                        {
                            data.paymentDate.slice(data.paymentDate.length - 4) !== '2020' ?
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
                                </Timeline.Item> : null
                        }
                        {
                            data.paymentDueDate.slice(data.paymentDueDate.length - 4) !== '2020' ?
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
                                </Timeline.Item> : null
                        }
                        {
                            data.goodsReceived.slice(data.goodsReceived.length - 4) !== '2020' && data.goodsReceived[3] !== 'D' ?
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
                                </Timeline.Item> : null
                        }
                        {
                            data.shipmentDate.slice(data.shipmentDate.length - 4) !== '2020' && data.shipmentDate[3] !== 'N' ?
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
                                </Timeline.Item> : null
                        }
                        {
                            data.bankPurchaseReceivables.slice(data.bankPurchaseReceivables.length - 4) !== '2020' ?
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
                                </Timeline.Item> : null
                        }
                        {
                            data.buyerConfirmContracts.slice(data.buyerConfirmContracts.length - 4) !== '2020' ?
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
                                </Timeline.Item> : null
                        }
                        {
                            data.sellerSendDeliverables.slice(data.sellerSendDeliverables.length - 4) !== '2020' ?
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
                                </Timeline.Item> : null
                        }







                    </Timeline>
                    <Stats style={{ gridArea: "stats" }} />
                    <div style={style.charts}>
                        <h2>Transaction progress</h2>
                        <br />
                        <Charts progress={progress} />
                    </div>
                </div>
            </div>
        );
    }
};

export default TransactionDetails;
