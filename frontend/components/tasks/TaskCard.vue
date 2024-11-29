<template>
  <div class="task-card" :class="{
    'border-green-800': task.status === 'completed',
    'border-blue-800': task.status === 'pending',
    'border-yellow-800': task.status === 'processed'
  }">
    <div class="task-card-header">
      <h3 class="task-title">{{ task.title }}</h3>
      <div class="task-status-badge " :class="{
        'badge-pending': task.status === 'pending',
        'badge-processed': task.status === 'processed',
        'badge-completed': task.status === 'completed'
      }"> {{ task.status }} </div>
    </div>
    <p class="task-description">{{ task.description }}</p>
    <div class="flex  justify-end">
      <div class="task-metadata">
        <span class="task-date"> {{ task.createdAt }} </span>
      </div>
    </div>
    <div class="task-card-footer">
      <div>
        <BaseButton v-if="task.status === 'pending'" variant="process" size="small" icon="fa-play"
          v-tooltip="'Iniciar tarea'" @click="startTask(task.id)" />
        <BaseButton v-if="task.status === 'pending' || task.status === 'processed'" variant="complete" size="small"
          icon="fa-circle-check" v-tooltip="'Completar tarea'" @click="completeTask(task.id)" />
      </div>
      <div class="task-actions">
        <BaseButton v-if="task.status !== 'completed'" variant="secondary" size="small" icon="fa-edit"
          v-tooltip="'Editar tarea'" @click="editTask(task.id, task)" />
        <BaseButton variant="danger" size="small" icon="fa-trash" v-tooltip="'Eliminar tarea'"
          @click="deleteTask(task.id)" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Task } from '~/types/task';
import BaseButton from '../ui/BaseButton.vue';
import { useTaskStore } from '~/store/taskStore';
const props = defineProps({
  task: {
    type: Object as () => Task,
    required: true
  }
});

// Acceder a la store de tareas
const taskStore = useTaskStore();

// Función para editar una tarea
const editTask = (taskId: number, taskData: Task) => {
  taskStore.updateTask(taskId, taskData);
};

// Función para eliminar una tarea
const deleteTask = (taskId: number) => {
  taskStore.deleteTask(taskId);
};

// Función para cambiar el estado de la tarea
const changeTaskState = (taskId: number, newStatus: string) => {
  // Enviar el ID y el nuevo estado para cambiarlo
  taskStore.changeTaskStatus(taskId, newStatus);
};

// Función para iniciar tarea
const startTask = (taskId: number) => {
  changeTaskState(taskId, 'pending');
};

// Función para marcar tarea como completada
const completeTask = (taskId: number) => {
  changeTaskState(taskId, 'completed');
};
</script>
<style scoped>
.task-card {
  @apply bg-white rounded-lg border p-6 w-full max-w-md mx-auto;
}

.task-card-header {
  @apply flex justify-between items-center mb-4;
}

.task-title {
  @apply text-xl font-semibold text-gray-800;
}

.task-status-badge {
  @apply px-3 py-1 rounded-full text-xs font-medium;
}

.task-description {
  @apply text-gray-600 mb-6 text-base;
}

.task-card-footer {
  @apply flex justify-between items-center border-t pt-4 mt-4;
}

.task-actions {
  @apply flex space-x-2;
}

.task-metadata {
  @apply text-sm text-gray-500;
}

.badge-pending {
  @apply bg-blue-100 text-blue-800;
}

.badge-processed {
  @apply bg-yellow-100 text-yellow-800;
}

.badge-completed {
  @apply bg-green-100 text-green-800;
}
</style>