import React from "react";
import { Card, Button, Flex } from "antd";
import type { CardProp } from "../models/tasks";
import { ApiUtility } from "../utils/api-utils";

const TaskCard: React.FC<CardProp> = (props: CardProp) => {
  const removeTask = async () => {
    try {
      const apiUtility = new ApiUtility();
      await apiUtility.deleteTaskById(props.task.id);
      props.refreshCard();
    } catch (error) {
      console.log(error);
    }
  };
  const execute = async () => {
    try {
      const apiUtility = new ApiUtility();
      await apiUtility.executeTask(props.task.id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card title={`Id: ${props.task.id}`} style={{ width: 300 }}>
      <p>Name: {props.task.name}</p>
      <p>Owner: {props.task.owner}</p>
      <p>Command: {props.task.command}</p>
      <Flex gap="small" wrap>
        <Button type="primary" onClick={execute}>
          Execute Task
        </Button>
        <Button danger onClick={removeTask}>
          Remove Task
        </Button>
      </Flex>
    </Card>
  );
};
export default TaskCard;
