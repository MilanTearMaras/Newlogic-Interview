<template>
  <header class="w-full py-8 px-16">
    <h1 class="text-[2rem] leading-[2.5rem] font-semibold text-left">{{ text }}</h1>
  </header>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "",
  }
})
</script>