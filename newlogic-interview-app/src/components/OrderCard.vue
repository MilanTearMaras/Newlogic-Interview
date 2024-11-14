<template>
  <div class="w-[61rem] bg-white p-6 gap-6 rounded-xl space-y-4">
    <div class="flex justify-between items-start">
      <div>
        <h2 class="font-semibold text-lg">Číslo objednávky: {{ order.number }}</h2>
      </div>
      <GStatus :status="order.status" />
    </div>
    <div class="flex space-x-2 mt-2">
      <div v-for="n in 3" class="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
        <ImageIcon />
      </div>
    </div>

    <div class="flex justify-between items-center">
      <div>
        <p class="text-base font-normal">Datum objednávky: <span class="text-tertiary">{{ order.date }}</span></p>
        <p class="text-base font-normal">Cena celkem: <span class="text-tertiary">{{ order.price }}</span></p>
      </div>


      <div class="text-right">
        <a href="#" class="text-primary font-medium text-sm">Potřebujete poradit?</a>
        <p class="text-main text-sm font-semibold">314 004 540 (po-pá 8:00-16:00)</p>
      </div>
    </div>

    <div class="flex justify-between items-center">
      <button class="bg-primary text-white px-12 py-3 rounded-lg font-semibold text-base hover:bg-primary/80">Detail</button>
      <div class="flex space-x-6">
        <button class="text-center inline-flex items-center space-x-1 text-sm font-medium">
          <span>Zopakovat</span>
          <ReturnIcon />
        </button>
        <button class="text-center inline-flex items-center space-x-1 text-sm font-medium">
          <span>Stornovat</span>
          <XIcon />
        </button>
      </div>
    </div>
  </div>

</template>

<script setup>
import GStatus from "./GStatus.vue";
import ImageIcon from "../assets/icons/ImageIcon.vue";
import ReturnIcon from "../assets/icons/ReturnIcon.vue";
import XIcon from "../assets/icons/XIcon.vue";

defineProps({
  order: {
    type: Object,
    required: true,
  }
})
</script>