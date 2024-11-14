<template>
  <div class="w-[61rem] bg-white p-6 gap-6 rounded-xl space-y-4">
    <form class="bg-white w-full max-w-4xl space-y-8">
      <h2 class="text-lg font-semibold text-main">Kontaktní údaje</h2>

      <div class="grid grid-cols-2 gap-4">
        <GInput v-model="contact.name" label="Jméno" required />
        <GInput v-model="contact.surname" label="Příjmení" required />
        <GInput v-model="contact.phone" label="Telefon" type="tel" placeholder="+420" />
        <GInput v-model="contact.email" label="E-mail" type="email" required error="error" />
      </div>

      <hr class="border-t border-body-secondary">

      <h2 class="text-lg font-semibold text-main">Fakturační údaje</h2>

      <div class="grid grid-cols-2 gap-4">
        <GInput v-model="invoice.name" label="Jméno" required />
        <GInput v-model="invoice.surname" label="Příjmení" required />
        <GInput v-model="invoice.company" label="Název firmy" required />

        <div class="flex space-x-2">
          <GInput v-model="invoice.cin" label="IČ" required />
          <GInput v-model="invoice.vat" label="DIČ" />
        </div>

        <GInput v-model="invoice.address" label="Ulice a číslo popisné" />
        <GInput v-model="invoice.city" label="Město" />
        <GInput v-model="invoice.postalCode" label="PSČ" />
        <GSelect v-model="invoice.country" :options="countries" label="Země" />
      </div>

      <hr class="border-t border-body-secondary">

      <div class="flex flex-col space-y-4">
        <label class="flex items-center space-x-2">
          <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600">
          <span class="text-gray-700">Nesouhlasím se zasláním dotazníku spokojenosti Ověřeno zákazníky</span>
        </label>
        <label class="flex items-center space-x-2">
          <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600">
          <span class="text-gray-700">Přeji si dostávat informace o novinkách a slevách nebo inspiraci</span>
        </label>
      </div>

      <div class="flex justify-between items-center">
        <div class="space-x-4">
          <button class="bg-primary text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-primary/80">Uložit změny</button>
          <button class="text-main border border-primary px-6 py-3 rounded-lg text-base font-semibold hover:bg-primary/15">Změnit heslo</button>
        </div>
        <button class="text-error border border-error px-6 py-3 rounded-lg text-base font-semibold hover:bg-error/15">Zrušit účet</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import GInput from "./GInput.vue";
import {reactive} from "vue";
import GSelect from "./GSelect.vue";

const contact = reactive({
  name: '',
  surname: '',
  phone: '',
  email: '',
})
const invoice = reactive({
  name: '',
  surname: '',
  company: '',
  cin: '',
  vat: '',
  address: '',
  city: '',
  postalCode: '',
  country: ''
})
const countries = ['Česko', 'Slovensko', 'Německo', 'Ukrajina']
</script>