<template>
  <div class="relative">
    <input
      v-model="input"
      :type="type"
      :id="index"
      :required="required"
      :placeholder="placeholder"
      class="peer block border text-base font-medium w-full border-gray-200 rounded-lg px-4 pb-2.5 pt-6 placeholder-body-tertiary focus:border-primary focus-within:border-primary focus-visible:border-primary focus:outline-none"
      :class="{'!border-error': !!error}">
    <div v-if="!!error" class="absolute inset-y-0 right-5 pl-3 flex items-center pointer-events-none">
      <InfoIcon />
    </div>
    <label
      :for="index"
      class="text-base font-medium absolute left-4 top-4 origin-[0] duration-150 transition-all transform
         peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
         peer-focus:-translate-y-3 peer-focus:scale-75"
      :class="{'-translate-y-3 scale-75': input || placeholder, 'required': required}"
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup>
import InfoIcon from "../assets/icons/InfoIcon.vue";

defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: '',
  }
})

const input = defineModel()
const index = Math.ceil(Math.random()*1000000)
</script>

<style>
.required:after {
  content:"*";
  color: #DC2626;
}
</style>