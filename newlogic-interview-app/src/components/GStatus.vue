<template>
  <span class="font-medium py-1 px-2 rounded text-xs capitalize" :class="statusColor">{{ status }}</span>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  status: {
    type: String,
    default: "",
  }
})

const statusColor = computed(() => {
  switch (props.status) {
    case 'zaplaceno':
      return 'bg-green-100 text-green-700';
  }
})
</script>