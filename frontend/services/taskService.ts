import axios from "axios";
import { Task } from "../types/task";

class TaskService {
  private apiClient = axios.create({
    baseURL: "http://localhost:5000/api/tasks",
    headers: {
      "Content-Type": "application/json",
    },
  });

  async fetchTasks(): Promise<Task[]> {
    try {
      const response = await this.apiClient.get("/");
      return response.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      throw error;
    }
  }

  async createTask(
    task: Omit<Task, "id" | "createdAt" | "updatedAt">
  ): Promise<Task> {
    try {
      const response = await this.apiClient.post("/", task);
      return response.data;
    } catch (error) {
      console.error("Error creating task:", error);
      throw error;
    }
  }

  async updateTask(id: string, task: Partial<Task>): Promise<Task> {
    try {
      const response = await this.apiClient.put(`/${id}`, task);
      return response.data;
    } catch (error) {
      console.error("Error updating task:", error);
      throw error;
    }
  }

  async deleteTask(id: string): Promise<void> {
    try {
      await this.apiClient.delete(`/${id}`);
    } catch (error) {
      console.error("Error deleting task:", error);
      throw error;
    }
  }

  async changeStatusTask(id: string, task: Partial<Task>): Promise<Task> {
    try {
      const response = await this.apiClient.put(`/${id}`, task);
      return response.data;
    } catch (error) {
      console.error("Error updating task:", error);
      throw error;
    }
  }
}

export const taskService = new TaskService();
