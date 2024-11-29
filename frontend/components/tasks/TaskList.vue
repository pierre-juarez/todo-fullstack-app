<template>
  <div v-if="tasks.length > 0" class="task-list-container">
    <h2 class="list-title ">Lista de tareas</h2>
    <div class="tasks-grid">
      <TaskCard v-for="task in tasks" :key="task._id" :task="task" />
    </div>
  </div>
</template>
<script setup>
import TaskCard from './TaskCard.vue';

defineProps({
  tasks: {
    type: Array,
    required: true,
  },
});



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