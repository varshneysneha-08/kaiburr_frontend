import React from "react";
import { Button, Form, Input, Card, Space, DatePicker } from "antd";
const { TextArea } = Input;

const CreateTaskForm: React.FC = () => {
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Id">
          <Input />
        </Form.Item>
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item label="Owner">
          <Input />
        </Form.Item>
        <Form.Item label="Command">
          <Input />
        </Form.Item>

        <Space direction="horizontal" size={15}>
          <Card title="Task Execution" style={{ width: 500 }}>
            <Form.Item label="Start Time">
              <DatePicker />
            </Form.Item>
            <Form.Item label="End Time">
              <DatePicker />
            </Form.Item>
            <Form.Item label="Output">
              <TextArea rows={4} />
            </Form.Item>
          </Card>
        </Space>
        <Form.Item style={{ marginTop: 8 }}>
          <Button>Add another Task</Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <CreateTaskForm />;
