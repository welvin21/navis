import React from 'react';
import { Form, Upload, Button, Icon, Typography, message } from 'antd';

const showSucessMessage = () => {
    message
    .loading('submission in progress..', 2.5)
    .then(() => message.success('insurance claim submitted successfully', 2.5));
}

const DocumentSubmit = (props) => {
    return(
        <div>
            <Typography.Title>Upload Documents</Typography.Title>
            <Form onSubmit={(e) => {
                e.preventDefault(); 
                console.log("submitted")}}>
                <Form.Item label="Sale Contract">
                    <Upload name="sale contract" action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                    </Upload>
                </Form.Item>
                <Form.Item label="Invoice">
                    <Upload name="invoice" action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                    </Upload>
                </Form.Item>
                <Form.Item label="Bill of Lading">
                    <Upload name="bill of lading" action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                    </Upload>
                </Form.Item>
                <Form.Item label="Export Declaration Form">
                    <Upload name="export declaration" action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                    </Upload>
                </Form.Item>
                <Form.Item label="Bank Advice of Payment Default of Buyer">
                    <Upload name="bank advice" action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                    </Upload>
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12 }}>
                    <Button type="primary" onClick={showSucessMessage}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default DocumentSubmit;