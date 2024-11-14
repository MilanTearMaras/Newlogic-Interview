<template>
  <OrderCard v-for="order in orders" :key="order.id" :order="order" />
</template>

<script setup>
import OrderCard from "../components/OrderCard.vue";

const orders = [
  {
    id: 1,
    number: 2200245834,
    status: 'zaplaceno',
    date: '6. 12. 2022',
    price: '1 500 Kč'
  },
  {
    id: 2,
    number: 2200245834,
    status: 'zaplaceno',
    date: '6. 12. 2022',
    price: '1 500 Kč'
  },
  {
    id: 3,
    number: 2200245834,
    status: 'zaplaceno',
    date: '6. 12. 2022',
    price: '1 500 Kč'
  },
]
</script>