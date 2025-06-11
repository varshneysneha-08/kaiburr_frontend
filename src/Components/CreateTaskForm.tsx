import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import type { Task } from "../models/tasks";
import { ApiUtility } from "../utils/api-utils";

const CreateTaskForm: React.FC = () => {
  const [id, saveId] = useState("");
  const [name, saveName] = useState("");
  const [owner, saveOwner] = useState("");
  const [command, saveCommand] = useState("");

  const setId = (e: React.ChangeEvent<HTMLInputElement>) => {
    saveId(e.target.value);
  };

  const setName = (e: React.ChangeEvent<HTMLInputElement>) => {
    saveName(e.target.value);
  };

  const setOwner = (e: React.ChangeEvent<HTMLInputElement>) => {
    saveOwner(e.target.value);
  };

  const setCommand = (e: React.ChangeEvent<HTMLInputElement>) => {
    saveCommand(e.target.value);
  };

  const saveForm = async () => {
    if (!id || !name || !owner || !command) {
      alert("All fields are required.");
      return;
    }

    const task: Task = {
      id: id,
      name: name,
      owner: owner,
      command: command,
    };

    try {
      const apiUtility = new ApiUtility();
      await apiUtility.saveTask(task);
    } catch (error) {
      console.log(error);
    } finally {
      saveId("");
      saveName("");
      saveOwner("");
      saveCommand("");
    }
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
          <Input onChange={setId} value={id} required />
        </Form.Item>
        <Form.Item label="Name">
          <Input onChange={setName} value={name} required />
        </Form.Item>
        <Form.Item label="Owner">
          <Input onChange={setOwner} value={owner} required />
        </Form.Item>
        <Form.Item label="Command">
          <Input onChange={setCommand} value={command} required />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={saveForm}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <CreateTaskForm />;
