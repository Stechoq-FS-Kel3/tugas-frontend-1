<script setup>
import { ref } from "vue";
// Import Font Awesome icons
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
    <RouterLink class="text-secondary font-medium" :to="{ name: 'index' }">
      Logout
    </RouterLink>
  </nav>
  <div class="items-center text-center">
    <div>
      <h1 class="text-x1 font-medium font-bold">Edit</h1>
      <div class="flex justify-center items-center space-x-3">
        <input
          type="text"
          placeholder="Enter Edit"
          class="border border-gray-300 rounded px-2 py-1 mr-2 w-1/2"
        />
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>
