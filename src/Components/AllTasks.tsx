import React, { useEffect, useState } from "react";
import { Button, Input, Space } from "antd";
import TaskCard from "./TaskCard";
import { ApiUtility } from "../utils/api-utils";
import type { Task } from "../models/tasks";
import "../App.css";

const AllTasks: React.FC = () => {
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");

  const fetchAllTasks = async () => {
    try {
      const apiUtility = new ApiUtility();
      const response = await apiUtility.getAllTasks();
      setAllTasks(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
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

  const searchByName = async () => {
    try {
      const apiUtility = new ApiUtility();
      const response = await apiUtility.getTaskByName(name);
      setAllTasks(response?.data);
      console.log(response);
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
            <Input placeholder="Search by id" onChange={handleId} />
            <Button type="primary" onClick={searchById}>
              Search
            </Button>
          </Space.Compact>
          <Space.Compact className="wrapper">
            <Input placeholder="Search by name" onChange={handleName} />
            <Button type="primary" onClick={searchByName}>
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
