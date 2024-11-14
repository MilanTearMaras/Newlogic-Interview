<template>
  <div class="w-[61rem] gap-6">
    <div class="bg-white border-b border-[#DFE2E2] p-4 rounded-t-xl">
      <div class="flex justify-between text-sm font-semibold text-main">
        <span>Číslo faktury</span>
        <span>Číslo objednávky</span>
        <span>Cena celkem</span>
        <span>Stažení</span>
      </div>
    </div>

    <div class="bg-white px-6 pt-6 pb-4 space-y-[2.375rem] flex flex-col">
      <div v-for="invoice in invoices" :key="invoice.id" class="flex justify-between items-center text-gray-800 text-sm font-normal text-base">
        <span>{{ invoice.invoiceNumber }}</span>
        <span>{{ invoice.orderNumber }}</span>
        <span>{{ invoice.totalPrice }}</span>
        <a href="#" class="text-primary text-xs font-medium flex items-center space-x-1">
          <DownloadIcon />
          <span>Stáhnout</span>
        </a>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4 p-4">
      <div />

      <div class="flex justify-center">
        <button class="bg-primary text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-primary/80">Načíst další</button>
      </div>

      <div class="flex justify-end gap-2 items-center">
        <button class="w-8 h-8 rounded-sm bg-white text-sm font-medium">1</button>
        <button class="w-8 h-8 rounded-sm bg-white text-sm font-medium">2</button>
        <button class="w-8 h-8 rounded-sm bg-white text-sm font-medium">3</button>
        <button class="w-8 h-8 rounded-sm bg-white text-sm font-medium">...</button>
        <button class="w-8 h-8 rounded-sm bg-white text-sm font-medium">56</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import DownloadIcon from "../assets/icons/DownloadIcon.vue";

defineProps({
  invoices: {
    type: Object,
    required: true,
  }
})
</script>