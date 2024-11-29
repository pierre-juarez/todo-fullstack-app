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
    <TaskList />
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import TaskForm from '~/components/tasks/TaskForm.vue';
import TaskList from '~/components/tasks/TaskList.vue';
import BaseButton from '~/components/ui/BaseButton.vue';
import { useTaskStore } from '~/store/taskStore';

const taskStore = useTaskStore();

onMounted(() => {
  taskStore.fetchTasks();
});

const showForm = ref(false);

const toggleForm = () => {
  showForm.value = !showForm.value;
}

const handleTaskCreated = () => {
  showForm.value = false;
};

</script>
<style scoped>
.todo-dashboard {
  @apply bg-blue-50 mx-auto px-4 py-8;
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
</style>
