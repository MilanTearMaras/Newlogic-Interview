<template>
  <router-link :to="to" type="button" :disabled="disabled" class="block text-center inline-flex items-center px-6 py-3 rounded-lg font-inter font-semibold text-base disabled:bg-gray-200 disabled:text-gray-400 gap-[0.625rem]" :class="{'bg-primary text-white hover:bg-primary/80': isActiveLink, 'bg-white text-black border border-white hover:border hover:border-primary': !isActiveLink}">
    <slot name="prepend" />
    {{ text }}
    <slot name="append" class="fill-main" />
  </router-link>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  to: {
    type: String,
    default: "",
  },
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
  type: {
    type: String,
    default: 'default',
  }
})
const route = useRoute();

const isActiveLink = computed(() => {
    return route.path === props.to
})
</script>