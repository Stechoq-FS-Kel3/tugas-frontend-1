<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCirclePlus,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <nav class="flex justify-between mx-8 items-center mb-10">
    <h2 class="text-xl font-medium text-slate-700">Hello</h2>
    <h1 class="text-4xl font-semibold text-slate-700">TaskDo</h1>
    <RouterLink class="text-secondary font-medium" :to="{ name: 'index' }"
      >Logout</RouterLink
    >
  </nav>
  <div class="items-center text-center">
    <button class="text-secondary mb-4">
      <FontAwesomeIcon :icon="faCirclePlus" /> Add new task
    </button>
    <div>
      <div class="flex justify-center items-center space-x-3">
        <button class="text-slate-600 text-2xl">
          <FontAwesomeIcon :icon="faTrash" />
        </button>
        <button class="text-slate-600 text-2xl">
          <FontAwesomeIcon :icon="faPenToSquare" />
        </button>
        <input type="checkbox" checked="checked" class="checkbox" />
        <span class="font-medium">Moring Walk</span>
      </div>
    </div>
  </div>
</template>
