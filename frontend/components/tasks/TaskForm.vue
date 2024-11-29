<template>
  <div class="task-form-wrapper">
    <div class="task-form">
      <h2 class="task-form-title">Nueva tarea</h2>
      <form class="task-form-body" action="#" method="POST" @submit.prevent="submitTask">
        <div class="form-field">
          <label for="title" class="form-label">Título</label>
          <input v-model="task.title" type="text" name="title" id="title" required class="form-input" />
        </div>
        <div class="form-field">
          <label for="description" class="form-label">Descripción</label>
          <textarea v-model="task.description" name="description" id="description" rows="3" required
            class="form-input"></textarea>
        </div>
        <div>
          <button type="submit" class="form-submit-btn"> Agregar </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useTaskStore } from '~/store/taskStore';


const emit = defineEmits();
const taskStore = useTaskStore();

const task = ref({
  title: '',
  description: '',
});



const submitTask = async () => {
  emit('task-created');
  await taskStore.createTask(task.value);

};

</script>
<style scoped>
.task-form-wrapper {
  @apply flex min-h-10 items-center justify-center bg-gray-100;
}

.task-form {
  @apply w-full max-w-sm bg-white rounded-lg shadow-md p-6;
}

.task-form-title {
  @apply text-center text-xl font-semibold text-gray-900;
}

.task-form-body {
  @apply mt-4 space-y-4;
}

.form-field {
  @apply mb-4;
}

.form-label {
  @apply block text-sm font-medium text-gray-700;
}

.form-input {
  @apply mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none;
}

.form-submit-btn {
  @apply w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500;
}
</style>
