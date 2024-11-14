<template>
  <div class="relative">
    <select
      v-model="input"
      :id="label"
      class="peer text-base font-medium w-full border border-gray-200 rounded-lg px-4 pb-2.5 pt-6 focus:border-primary focus-within:border-primary focus-visible:border-primary focus:outline-none">
        <option v-for="(option, index) in options" :key="index" selected>{{ option }}</option>
    </select>
    <label
      :for="label"
      class="text-base font-medium absolute left-4 top-4 origin-[0] duration-150 transition-all transform
         peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
         peer-focus:-translate-y-3 peer-focus:scale-75"
      :class="{'-translate-y-3 scale-75': input}"
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: () => [],
  }
})

const input = defineModel()
</script>