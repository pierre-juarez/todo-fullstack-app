<template>
  <button :type="type" class="base-button" :class="{
    'btn-primary': variant === 'primary',
    'btn-secondary': variant === 'secondary',
    'btn-danger': variant === 'danger',
    'btn-process': variant === 'process',
    'btn-complete': variant === 'complete'
  }" :disabled="disabled" @click="$emit('click')">
    <i v-if="icon" :class="['fas', icon]"></i>
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script setup lang="ts">
import { PropType } from 'vue';


defineProps({
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
    validator: (value: string) => ['button', 'submit', 'reset'].includes(value)
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary', 'danger', 'process', 'complete'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  }
})
</script>
<style scoped>
.base-button {
  @apply px-4 py-4 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2;
}

.btn-primary {
  @apply bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500;
}

.btn-secondary {
  @apply bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500;
}

.btn-danger {
  @apply bg-red-600 text-white hover:bg-red-700 focus:ring-red-500;
}

.btn-process {
  @apply bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500;
}

.btn-complete {
  @apply bg-green-600 text-white hover:bg-green-700 focus:ring-green-500;
}


.base-button:disabled {
  @apply opacity-50 cursor-not-allowed;
}
</style>