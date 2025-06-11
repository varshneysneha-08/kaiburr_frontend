import React from "react";
import { Card } from "antd";
import type { ExecutedTask } from "../models/executedTasks";

const ExecutedTaskCard: React.FC<ExecutedTask> = (props: ExecutedTask) => {
  
  return (
    <Card title={`Id: ${props.id}`} style={{ width: 300 }}>
      <p>Start Time: {props.startTime}</p>
      <p>End time: {props.endTime}</p>
      <p>Output: {props.output}</p>
    </Card>
  );
};
export default ExecutedTaskCard;
