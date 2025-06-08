import React, { useState } from "react";
import { Button, Form, Input, Card, Space, DatePicker } from "antd";

const { TextArea } = Input;

const CreateTaskForm: React.FC = () => {
  const [cards, setCards] = useState<number[]>([0]); // Start with one card

  const handleAddCard = () => {
    setCards([...cards, cards.length]); 
  };

  const removeCard = (indexToRemove: number) => {
    const updatedCards = cards.filter((_, index) => index !== indexToRemove);
    setCards(updatedCards);
  };

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

        <Space direction="vertical" size={15} style={{ width: "100%" }}>
          {cards.map((_, index) => (
            <Card
              title={`Task Execution ${index + 1}`}
              key={index}
              style={{ width: 500 }}
            >
              <Form.Item label="Start Time">
                <DatePicker />
              </Form.Item>
              <Form.Item label="End Time">
                <DatePicker />
              </Form.Item>
              <Form.Item label="Output">
                <TextArea rows={4} />
              </Form.Item>
              {cards.length > 1 && (
                <Form.Item>
                  <Button type="dashed" danger onClick={() => removeCard(index)}>
                    Remove Task
                  </Button>
                </Form.Item>
              )}
            </Card>
          ))}
        </Space>

        <Form.Item style={{ marginTop: 8 }}>
          <Button onClick={handleAddCard}>Add another Task</Button>
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
