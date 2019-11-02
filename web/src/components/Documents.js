import React from 'react';
import { Modal, List, Tag } from 'antd';

const style={
    list : {
        border : '0.1px solid #D8D8D8'
    },
    listItem : {
        display : 'inline'
    },
    docName : {
        margin : '0 5px'
    }
}


const Documents = (props) => {
    const { visible,onModalClick,docId } = props;
    return(
        <Modal
            title="Relevant Documents"
            visible={visible}
            onCancel={()=>onModalClick(false)}
            onOk={()=>onModalClick(false)}
        >
            <List style={style.list}>
                <List.Item>
                    <div style={style.listItem}>
                        <a href={"https://firebasestorage.googleapis.com/v0/b/navis-c0f46.appspot.com/o/documents%2Finvoice.png?alt=media&token=0a5f495c-fe87-4a9b-981d-d3ec3a6e5b07"}
                        style={style.docName}>Order Invoice</a>
                        <Tag color="#f50">buyer</Tag>
                        <Tag color="#2db7f5">seller</Tag>

                    </div>
                </List.Item>
                <List.Item>
                    <div style={style.listItem}>
                        <a href={'https://firebasestorage.googleapis.com/v0/b/navis-c0f46.appspot.com/o/documents%2Flading.jpeg?alt=media&token=e311d941-1bab-42a9-a244-a1b00a8bb1c8'} style={style.docName}>Bill of Lading</a>
                         <Tag color="#f50">buyer</Tag>
                    </div>
                </List.Item>
                <List.Item>
                    <div style={style.listItem}>
                        <a href={'https://firebasestorage.googleapis.com/v0/b/navis-c0f46.appspot.com/o/documents%2Fexport.jpg?alt=media&token=0d91f105-ca16-48b1-a2b0-3acc726683ca'} style={style.docName}>Export Declaration Form</a>
                         <Tag color="#2db7f5">seller</Tag>
                    </div>
                </List.Item>

            </List>
        </Modal>
    );
}

export default Documents;