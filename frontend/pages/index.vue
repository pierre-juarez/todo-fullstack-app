<template>
  <div class="todo-dashboard">
    <h1 class="title-todo">Todo App</h1>
    <div class="container-new-button">
      <BaseButton variant="primary" icon="fa-plus" class="btn-new-task" @click="toggleForm"> Crear nueva tarea
      </BaseButton>
    </div>
    <Transition name="accordion">
      <div v-if="showForm">
        <TaskForm @task-created="handleTaskCreated" />
      </div>
    </Transition>
    <div class="filters">
      <input class="search-input" v-model="search" @input="searchTasks" type="text" placeholder="Buscar tareas..." />
      <select class="search-select" v-model="status" @change="filterTasksByStatus">
        <option value="" selected>Todas</option>
        <option value="pending">Pendientes</option>
        <option value="processed">En proceso</option>
        <option value="completed">Completadas</option>
      </select>
    </div>
    <div v-if="taskStore.isLoading" class="loading">Obteniendo listado de tareas👀...</div>
    <div v-if="taskStore.error" class="error">{{ taskStore.error }}😔</div>
    <TaskList :tasks="taskStore.tasks" />
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import TaskForm from '~/components/tasks/TaskForm.vue';
import TaskList from '~/components/tasks/TaskList.vue';
import BaseButton from '~/components/ui/BaseButton.vue';
import { useTaskStore } from '~/store/taskStore';

const taskStore = useTaskStore();
const search = ref('');
const status = ref('');

onMounted(async () => {
  await taskStore.fetchTasks();
});

const showForm = ref(false);

const toggleForm = () => {
  showForm.value = !showForm.value;
}

const handleTaskCreated = () => {
  showForm.value = false;
};

const searchTasks = () => {
  taskStore.fetchTasksBySearch(search.value);
};

const filterTasksByStatus = () => {
  taskStore.fetchTasksByStatus(status.value);
};

</script>
<style scoped>
.todo-dashboard {
  @apply bg-blue-50 mx-auto px-4 py-8 h-screen;
}

.title-todo {
  @apply text-3xl font-bold mb-6 text-center;
}

.container-new-button {
  @apply p-6 mb-8 max-w-md mx-auto;
}

.btn-new-task {
  @apply w-full focus:outline-none active:ring-0;
}

.container-new-button button:focus,
.container-new-button button:active {
  outline: none;
  box-shadow: none;
}

.accordion-enter-active,
.accordion-leave-active {
  @apply transition-all duration-500 ease-in-out;
}

.accordion-enter-from,
.accordion-leave-to {
  @apply opacity-0 h-0;
}

.accordion-enter-to,
.accordion-leave-from {
  @apply opacity-100 h-auto;
}

.loading {
  @apply text-center text-2xl text-blue-500 font-semibold;
}

.error {
  @apply text-center text-2xl text-red-500 font-semibold;
}

.filters {
  @apply flex gap-4 mb-4 justify-center items-center
}

.search-input {
  @apply p-4 text-base border border-gray-300 rounded-md w-1/3 my-4 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500
}

.search-select {
  @apply p-4 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-1
}
</style>
