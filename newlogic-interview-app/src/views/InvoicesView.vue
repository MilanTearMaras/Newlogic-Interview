<template>
  <DataTable :invoices="invoices" />
</template>

<script setup>
import DataTable from "../components/DataTable.vue";

const invoices = [
  {
    id: 1,
    invoiceNumber: 121548784515487,
    orderNumber: 121548784515487,
    totalPrice: '-1500 Kč',
  },
  {
    id: 2,
    invoiceNumber: 121548784515487,
    orderNumber: 121548784515487,
    totalPrice: '-1500 Kč',
  },
  {
    id: 3,
    invoiceNumber: 121548784515487,
    orderNumber: 121548784515487,
    totalPrice: '-1500 Kč',
  },
  {
    id: 4,
    invoiceNumber: 121548784515487,
    orderNumber: 121548784515487,
    totalPrice: '-1500 Kč',
  },
  {
    id: 5,
    invoiceNumber: 121548784515487,
    orderNumber: 121548784515487,
    totalPrice: '-1500 Kč',
  },
  {
    id: 6,
    invoiceNumber: 121548784515487,
    orderNumber: 121548784515487,
    totalPrice: '-1500 Kč',
  },
  {
    id: 7,
    invoiceNumber: 121548784515487,
    orderNumber: 121548784515487,
    totalPrice: '-1500 Kč',
  },
  {
    id: 8,
    invoiceNumber: 121548784515487,
    orderNumber: 121548784515487,
    totalPrice: '-1500 Kč',
  },
  {
    id: 9,
    invoiceNumber: 121548784515487,
    orderNumber: 121548784515487,
    totalPrice: '-1500 Kč',
  }
]
</script>