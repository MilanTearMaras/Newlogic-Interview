<template>
  <div class="min-h-screen flex flex-col items-center">
    <Header :text="headerText" />

    <div class="flex max-w-6xl mt-6 space-x-6">
      <Menu />

      <main class="flex-1 space-y-4">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import Menu from "./components/Menu.vue";
import Header from "./components/Header.vue";
import {useRoute} from "vue-router";
import {computed} from "vue";

const route = useRoute()

const headerText = computed(() => {
  switch (route.name) {
    case "OrdersView":
      return "Moje objednávky";
    case "InvoiceView":
      return "Faktury";
    case "AccountSettingsView":
      return "Nastavení účtu";
  }
})
</script>
