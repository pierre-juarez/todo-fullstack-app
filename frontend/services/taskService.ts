import axios from "axios";
import { Task } from "../types/task";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client/core";
import {
  GET_TASK_BY_ID,
  GET_TASKS_BY_STATUS,
  GET_TASKS_QUERY,
} from "~/queries/queries";

class TaskService {
  private apiClient = axios.create({
    baseURL: "http://localhost:5000/api/tasks",
    headers: {
      "Content-Type": "application/json",
    },
  });

  private apolloClient = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
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

  async fetchTaskById(id: string): Promise<Task> {
    const { data, error } = await this.apolloClient.query({
      query: gql(GET_TASK_BY_ID(id)),
    });
    console.log("data", data);
    if (error) throw new Error("Error al obtener tarea por ID");
    return data.data.task;
  }

  async fetchTasksByStatus(status: string): Promise<Task[]> {
    const { data, error } = await this.apolloClient.query({
      query: gql(GET_TASKS_BY_STATUS(status)),
    });
    if (error) throw new Error("Error al obtener tareas por estado");
    return data.tasks;
  }

  async fetchTasksBySearch(search: string): Promise<Task[]> {
    const { data, error } = await this.apolloClient.query({
      query: gql(GET_TASKS_QUERY(search)),
    });

    if (error) throw new Error("Error al obtener tareas por búsqueda");
    return data.tasks;
  }
}

export const taskService = new TaskService();
