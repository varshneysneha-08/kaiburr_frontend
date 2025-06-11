import React, { useEffect, useState } from "react";
import { Button, Input, Space } from "antd";
import TaskCard from "./TaskCard";
import { ApiUtility } from "../utils/api-utils";
import type { Task } from "../models/tasks";
import "../App.css";

const AllTasks: React.FC = () => {
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [id, setId] = useState<string>("");

  const fetchAllTasks = async () => {
    try {
      const apiUtility = new ApiUtility();
      const response = await apiUtility.getAllTasks();
      setAllTasks(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const searchById = async () => {
    try {
      const apiUtility = new ApiUtility();
      const response = await apiUtility.getTaskById(id);
      setAllTasks([response?.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <Space direction="horizontal" size={16}>
      <div>
        <div style={{ display: "flex", marginLeft: "35vw" }}>
          <Space.Compact className="wrapper">
            <Input placeholder="Search by id" onChange={handleName} />
            <Button type="primary" onClick={searchById}>
              Search
            </Button>
          </Space.Compact>
          <Space.Compact className="wrapper">
            <Input placeholder="Search by id" onChange={handleName} />
            <Button type="primary" onClick={searchById}>
              Search
            </Button>
          </Space.Compact>
        </div>
        <div className="container">
          {allTasks.map((task) => (
            <div className="task-card">
              <TaskCard key={task.id} task={task} refreshCard={fetchAllTasks} />
            </div>
          ))}
        </div>
      </div>
    </Space>
  );
};

export default AllTasks;
