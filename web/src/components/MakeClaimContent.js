import React, { useState } from "react";
import { Typography, Form, Input, Button, Checkbox, message } from "antd";
import { Redirect } from "react-router-dom";
import ShipSelect from "./ShipSelect";

const { Title, Text } = Typography;
const { TextArea } = Input;

const success = () => {
  message
    .loading("Submitting claim...", 1.5)
    .then(() => message.success("Claim submitted successfully", 1.5));
};

const MakeClaimContent = props => {
  const { data } = props;
  const [form, setForm] = useState({
    notes: "",
    permissions: false
  });
  const [redirect, setRedirect] = useState(false);

  if (data === null) {
    return <ShipSelect text="Select a transaction." />;
  }
  const handleTextChange = e => {
    form.notes = e.target.value;
    setForm({ form });
  };
  const handleCheckboxChange = e => {
    form.permissions = e.target.checked;
    setForm({ form });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
    setRedirect(true);
  };
  if (redirect) return <Redirect to="/" />;
  return (
    <div>
      <Title level={2}>Claim Application</Title>
      <Title level={3}>#Transaction {data.id}</Title>
      <Form layout="vertical" onSubmit={handleSubmit}>
        <Text>Notes to HKECIC</Text>
        <TextArea
          rows={12}
          style={{ margin: "10px auto" }}
          placeholder="instructions and information pertaining to the claim"
          onChange={handleTextChange}
        />

        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <Button type="primary" onClick={() => success()}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default MakeClaimContent;
