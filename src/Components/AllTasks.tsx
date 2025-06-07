import React from "react";
import { Space } from "antd";
import TaskCard from "./TaskCard";

const AllTasks: React.FC = () => (
  <Space direction="vertical" size={16}>
    <TaskCard id="Sneha" name="Sneha" owner="Sneha" command="Sneha"></TaskCard>
  </Space>
);

export default AllTasks;
