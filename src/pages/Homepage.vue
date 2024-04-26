<script setup>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCirclePlus,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

// State untuk menyimpan tasks
const tasks = ref([
  { id: 1, name: "Morning Walk", completed: true },
  // Tambahkan lebih banyak tasks jika diperlukan
]);

// Fungsi untuk menghapus task
function removeTask(taskId) {
  tasks.value = tasks.value.filter((task) => task.id !== taskId);
}
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
      <div
        v-for="task in tasks"
        :key="task.id"
        class="flex justify-center items-center space-x-3"
      >
        <button class="text-slate-600 text-2xl" @click="removeTask(task.id)">
          <FontAwesomeIcon :icon="faTrash" />
        </button>
        <RouterLink
          class="text-secondary font-medium"
          @click="editTask(task.id)"
          :to="{ name: 'edit', params: { taskId: task.id } }"
        >
          <button class="text-slate-600 text-2xl">
            <FontAwesomeIcon :icon="faPenToSquare" />
          </button>
        </RouterLink>

        <input type="checkbox" v-model="task.completed" class="checkbox" />
        <span class="font-medium">{{ task.name }}</span>
      </div>
    </div>
  </div>
</template>
