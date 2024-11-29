import { defineStore } from "pinia";
import { Task } from "../types/task";
import { taskService } from "~/services/taskService";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [] as Task[],
    isLoading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchTasks() {
      this.isLoading = true;
      this.error = null;
      try {
        this.tasks = await taskService.fetchTasks();
      } catch (error) {
        console.error("Error al obtener tareas:", error);
        this.error = "Error al obtener las tareas";
      } finally {
        this.isLoading = false;
      }
    },

    async createTask(taskData: Omit<Task, "id">) {
      this.isLoading = true;
      this.error = null;
      try {
        await taskService.createTask(taskData);
        await this.fetchTasks(); // Actualizar lista tras creación
      } catch (error) {
        console.error("Error al crear tarea:", error);
        this.error = "Error al crear la tarea";
      } finally {
        this.isLoading = false;
      }
    },

    async updateTask(id: string, updatedData: Partial<Task>) {
      this.isLoading = true;
      this.error = null;
      try {
        await taskService.updateTask(id, updatedData);
        await this.fetchTasks(); // Actualizar lista tras edición
      } catch (error) {
        console.error("Error al actualizar tarea:", error);
        this.error = "Error al actualizar la tarea";
      } finally {
        this.isLoading = false;
      }
    },

    async deleteTask(id: string) {
      this.isLoading = true;
      this.error = null;
      try {
        await taskService.deleteTask(id);
        await this.fetchTasks(); // Actualizar lista tras eliminación
      } catch (error) {
        console.error("Error al eliminar tarea:", error);
        this.error = "Error al eliminar la tarea";
      } finally {
        this.isLoading = false;
      }
    },
  },
});
