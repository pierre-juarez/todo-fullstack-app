<template>
  <div class="task-list-container">
    <h2 class="list-title ">Lista de tareas</h2>
    <div class="tasks-grid">
      <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import TaskCard from './TaskCard.vue';

const tasks = ref([
  { id: 1, title: 'Tarea 1', description: 'Descripción de la tarea 1', status: 'pending', createdAt: '2022-12-24T10:00:00', updatedAt: '2022-12-24T10:00:00' },
  { id: 2, title: 'Tarea 2', description: 'Descripción de la tarea 2', status: 'completed', createdAt: '2022-12-25T14:00:00', updatedAt: '2022-12-25T14:00:00' },
  { id: 3, title: 'Tarea 3', description: 'Descripción de la tarea 3', status: 'processed', createdAt: '2022-12-26T16:30:00', updatedAt: '2022-12-26T16:30:00' },
  { id: 4, title: 'Tarea 4', description: 'Descripción de la tarea 4', status: 'pending', createdAt: '2022-12-27T11:00:00', updatedAt: '2022-12-27T11:00:00' },
  { id: 5, title: 'Tarea 5', description: 'Descripción de la tarea 5', status: 'completed', createdAt: '2022-12-28T13:15:00', updatedAt: '2022-12-28T13:15:00' },
]);



</script>
<style scoped>
.task-list-container {
  @apply container mx-auto px-4 py-8;
}

.list-title {
  @apply text-4xl font-bold mb-6 text-center;
}

.tasks-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}
</style>