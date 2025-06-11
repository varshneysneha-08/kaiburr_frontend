import React, { useEffect, useState } from "react";
import { Button, Input, Space } from "antd";
import { ApiUtility } from "../utils/api-utils";
import type { TaskWithExecutions } from "../models/tasks";
import "./executedTasks.css"
import ExecutedTaskCard from "./ExecutedTaskCard";


const ExecutedTasks: React.FC = () => {
  const [allTasks, setAllTasks] = useState<TaskWithExecutions[]>([]);
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

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const searchById = async () => {
    try {
      const apiUtility = new ApiUtility();
      const response = await apiUtility.getTaskById(id);
      setAllTasks([response?.data]); // Fix: wrap in array
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
        </div>
        <div className="container">
          {allTasks.map((task) =>
            task.taskExecutions.map((executedTask, idx) => (
              <div className="task-card" key={`${task.id}-${idx}`}>
                <ExecutedTaskCard
                    id = {task.id}
                  startTime={executedTask.startTime}
                  endTime={executedTask.endTime}
                  output={executedTask.output}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </Space>
  );
};

export default ExecutedTasks;
