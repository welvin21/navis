import React, { useState } from 'react';
import { Modal, List, Tag, Button } from 'antd';
import { FirebaseDB as db } from "../constants/firebase";


const style = {
    list: {
        border: '0.1px solid #D8D8D8'
    },
    listItem: {
        display: 'inline'
    },
    docName: {
        margin: '0 5px'
    }
}
const PreviewPopup = (label, url) => {
    Modal.info({
        title: `${label.replace('_', " ")}`,
        width: '1000px',
        cancelText: 'X',
        content: (
            <div>
                <img src={url} style={{ maxWidth: '800px' }} />
                <br />
                <Button ><a href={url}>Download</a></Button>
            </div>
        ),
        onOk() { }
    });
}
const DocumentItem = ({ label, data }) => {
    return (
        <List.Item>
            <div style={style.listItem}>
                <a style={style.docName} onClick={() => PreviewPopup(label, data)}>
                    {label.replace('_', ' ')}
                </a>

            </div>
        </List.Item>
    );
}

const Documents = (props) => {
    const { visible, onModalClick, docId } = props;
    const [data, setData] = useState();
    const [preview, setPreview] = useState(false);

    let doc = db.collection("documents");
    let observer = doc.onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
        if (!data) {
            console.log(doc.data());
            setData(doc.data());
        }
        });
    })

    return (
        <div>
            <Modal
                title="Relevant Documents"
                visible={visible}
                onCancel={() => onModalClick(false)}
                onOk={() => onModalClick(false)}
            >
                <List style={style.list}>
                    {
                        data ?
                            Object.keys(data).map((item) => {
                                return <DocumentItem key={Math.random()}
                                    label={item}
                                    data={data[item]}
                                />
                            }) : <div />
                    }
                </List>
            </Modal>
        </div>
    );
}

export default Documents;