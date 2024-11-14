<template>
  <aside class="w-[19rem] max-w-[19rem] h-fit bg-white py-8 px-6 rounded-xl">
    <div class="text-center mb-6">
      <h2 class="text-xl font-medium">{{ user.fullName }}</h2>
      <p class="text-sm font-normal text-tertiary">{{ user.email }}</p>
    </div>

    <nav class="space-y-3">
        <GBtn to="/" text="Moje objednávky" class="w-[16rem]">
          <template #prepend>
            <BagIcon />
          </template>
          <template #append>
            <ChevronRightIcon class="ml-auto" />
          </template>
        </GBtn>
        <GBtn to="/invoices" text="Faktury" type="text" class="w-[16rem]">
          <template #prepend>
            <FileCheckIcon />
          </template>
          <template #append>
            <ChevronRightIcon class="ml-auto fill-main" />
          </template>
        </GBtn>
      <GBtn text="Seznam přání" type="text" class="w-[16rem]">
        <template #prepend>
          <HearthIcon />
        </template>
        <template #append>
          <ChevronRightIcon class="ml-auto fill-main" />
        </template>
      </GBtn>
      <GBtn text="Věrnostní program" type="text" class="w-[16rem]">
        <template #prepend>
          <CircleStackIcon />
        </template>
        <template #append>
          <ChevronRightIcon class="ml-auto fill-main" />
        </template>
      </GBtn>
      <GBtn text="Slevové kódy" type="text" class="w-[16rem]">
        <template #prepend>
          <TagIcon />
        </template>
        <template #append>
          <ChevronRightIcon class="ml-auto fill-main" />
        </template>
      </GBtn>
      <GBtn text="Hlídané zboží" type="text" class="w-[16rem]">
        <template #prepend>
          <MagnifyIcon />
        </template>
        <template #append>
          <ChevronRightIcon class="ml-auto fill-main" />
        </template>
      </GBtn>
      <GBtn to="/settings" text="Nastavení účtu" type="text" class="w-[16rem]">
        <template #prepend>
          <CogIcon />
        </template>
        <template #append>
          <ChevronRightIcon class="ml-auto fill-main" />
        </template>
      </GBtn>
    </nav>

    <button class="mt-6 w-[16rem] p-3 bg-red-100 text-red-500 text-base font-normal rounded-lg hover:bg-error/15">Odhlásit se</button>
  </aside>
</template>

<script setup>
import GBtn from "./GBtn.vue";
import BagIcon from "../assets/icons/BagIcon.vue";
import ChevronRightIcon from "../assets/icons/ChevronRightIcon.vue";
import FileCheckIcon from "../assets/icons/FileCheckIcon.vue";
import HearthIcon from "../assets/icons/HearthIcon.vue";
import CircleStackIcon from "../assets/icons/CircleStackIcon.vue";
import TagIcon from "../assets/icons/TagIcon.vue";
import MagnifyIcon from "../assets/icons/MagnifyIcon.vue";
import CogIcon from "../assets/icons/CogIcon.vue";

const user = { fullName: 'Danil Filatov', email: 'danil.filatov@newlogic.cz' };
</script>