import React from 'react';

import {
    Form,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Button,
    Upload,
    Icon,
    Rate,
    Checkbox,
    Row,
    Col,
  } from 'antd';
  
  const { Option } = Select;
  
  class MyForm extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    normFile = e => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    };
  
    render() {
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      };
      return (
        <div>
            <h1>
                Seller Form
            </h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="Sale Contract          ">
                    {getFieldDecorator('upload', {
                        valuePropName: 'saleContract',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload name="sale contract" action="/upload.do" listType="picture">
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                        </Upload>,
                    )}
                </Form.Item>

                <Form.Item label="Invoice                ">
                    {getFieldDecorator('upload', {
                        valuePropName: 'invoice',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload name="sale contract" action="/upload.do" listType="picture">
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                        </Upload>,
                    )}
                </Form.Item>

                <Form.Item label="Bill of lading          ">
                    {getFieldDecorator('upload', {
                        valuePropName: 'saleContract',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload name="LadingBill" action="/upload.do" listType="picture">
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                        </Upload>,
                    )}
                </Form.Item>

                <Form.Item label="Export Declaration form ">
                    {getFieldDecorator('upload', {
                        valuePropName: 'saleContract',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload name="exportDeclaration" action="/upload.do" listType="picture">
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                        </Upload>,
                    )}
                </Form.Item>

                <Form.Item label="Bank Advice             ">
                    {getFieldDecorator('upload', {
                        valuePropName: 'saleContract',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload name="bankAdvice" action="/upload.do" listType="picture">
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                        </Upload>,
                    )}
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
        
      );
    }
  }
  
  const SellerForm = Form.create({ name: 'validate_other' })(MyForm);
  
  export default SellerForm;