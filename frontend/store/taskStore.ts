import { defineStore } from "pinia";
import { Task } from "../types/task";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [] as Task[],
  }),

  actions: {
    fetchTasks() {
      console.log("Fetching tasks...");
    },

    createTask(taskData: Omit<Task, "id" | "createdAt" | "updatedAt">) {
      console.log("Creating task...", taskData);
    },

    updateTask(id: number, updatedData: Partial<Task>) {
      console.log("Updating task...", id, updatedData);
    },

    deleteTask(id: number) {
      console.log("Deleting task...", id);
    },

    changeTaskStatus(id: number, newStatus: string) {
      console.log("Changing task status...", id, newStatus);
    },
  },
});
