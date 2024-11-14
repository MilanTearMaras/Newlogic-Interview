<template>
  <a class="font-medium text-main hover:text-primary focus:border-2 border-primary" :class="{ 'text-gray-200 pointer-events-none': disabled }, linkSize ">
    <slot name="prepend" />
    {{ text }}
    <slot name="append" />
  </a>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  hasPrependIcon: {
    type: Boolean,
    default: false,
  },
  hasAppendIcon: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: '',
  }
})

const linkSize = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-xs text-tertiary pointer-events-none';
    default:
      return 'text-sm';
  }
})
</script>