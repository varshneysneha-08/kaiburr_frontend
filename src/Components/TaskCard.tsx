import React from "react";
import { Card } from "antd";

const TaskCard: React.FC<{
  id: string;
  name: string;
  owner: string;
  command: string;
}> = (props: { id: string; name: string; owner: string; command: string }) => (
    <Card
      title={`Id: ${props.id}`}
      style={{ width: 300 }}
    >
      <p>Name: {props.name}</p>
      <p>Owner: {props.owner}</p>
      <p>Command: {props.command}</p>
    </Card>
);

export default TaskCard;
