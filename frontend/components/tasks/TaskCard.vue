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
    <div class="flex justify-end">
      <div class="task-metadata">
        <span class="task-date">Creado: {{ formatDate(task.createdAt) }} </span>
      </div>
    </div>
    <div class="flex justify-end">
      <div class="task-metadata">
        <span class="task-date">Actualizado: {{ formatDate(task.updatedAt) }} </span>
      </div>
    </div>
    <div class="task-card-footer">
      <div>
        <BaseButton v-if="task.status === 'pending'" variant="process" size="small" icon="fa-play"
          v-tooltip="'Iniciar tarea'" @click="startTask(task._id)" />
        <BaseButton v-if="task.status === 'pending' || task.status === 'processed'" variant="complete" size="small"
          icon="fa-circle-check" v-tooltip="'Completar tarea'" @click="completeTask(task._id)" />
      </div>
      <div class="task-actions">
        <BaseButton v-if="task.status !== 'completed'" variant="secondary" size="small" icon="fa-edit"
          v-tooltip="'Editar tarea'" @click="editTask(task._id, task)" />
        <BaseButton variant="danger" size="small" icon="fa-trash" v-tooltip="'Eliminar tarea'"
          @click="deleteTask(task._id)" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Task } from '~/types/task';
import BaseButton from '../ui/BaseButton.vue';
import { useTaskStore } from '~/store/taskStore';
defineProps({
  task: {
    type: Object as () => Task,
    required: true
  }
});

const taskStore = useTaskStore();

const editTask = async (taskId: string, taskData: Task) => {
  await taskStore.updateTask(taskId, taskData);
};

const deleteTask = async (taskId: string) => {
  await taskStore.deleteTask(taskId);
};

const changeTaskState = async (taskId: string, newStatus: string) => {
  await taskStore.updateTask(taskId, { status: newStatus });
};

const startTask = (taskId: string) => {
  changeTaskState(taskId, 'processed');
};

const completeTask = (taskId: string) => {
  changeTaskState(taskId, 'completed');
};

const formatDate = (date: string) => {
  const parsedDate = new Date(date);  // Convertir a objeto Date

  const day = parsedDate.getDate();
  const month = parsedDate.toLocaleString('default', { month: 'short' });  // Mes abreviado
  const year = parsedDate.getFullYear();

  let hours = parsedDate.getHours();
  const minutes = parsedDate.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';

  // Convertimos hora de 24h a 12h
  hours = hours % 12;
  hours = hours ? hours : 12;  // Si es 0 (medianoche), mostramos 12
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  // Formato final de la fecha
  return `${day}, ${month}, ${year} - ${hours}:${formattedMinutes} ${ampm}`;
}
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