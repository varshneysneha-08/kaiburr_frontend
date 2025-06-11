import axios from "axios";
import type { Task } from "../models/tasks";

export class ApiUtility {
  url: string;

  constructor() {
    this.url = "http://localhost:8080/api/tasks";
  }

  async getAllTasks() {
    try {
      const response = await axios.get(`${this.url}/get`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getTaskById(id: string) {
    try {
      const response = await axios.get(`${this.url}/get/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async saveTask(task: Task) {
    try {
      const response = await axios.post(`${this.url}/save`, task);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteTaskById(id: string) {
    try {
      const response = await axios.delete(`${this.url}/deleteById/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async executeTask(id: string) {
    try {
      const response = await axios.put(`${this.url}/execute/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
