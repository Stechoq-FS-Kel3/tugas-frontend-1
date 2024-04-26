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

// State untuk menyimpan nama task baru
const newTaskName = ref("");

// Fungsi untuk menghapus task
function removeTask(taskId) {
  tasks.value = tasks.value.filter((task) => task.id !== taskId);
}

// Fungsi untuk menambahkan task
function addTask() {
  const newTask = {
    id: tasks.value.length + 1,
    name: newTaskName.value,
    completed: false,
  };
  tasks.value.push(newTask);
  newTaskName.value = ""; // Reset nama task baru setelah ditambahkan
}
// Function to toggle edit mode for a task
function editTask(taskId) {
  const taskIndex = tasks.value.findIndex((task) => task.id === taskId);
  tasks.value[taskIndex].editing = !tasks.value[taskIndex].editing;
}

// Function to save edited task
function saveTask(taskId) {
  const taskIndex = tasks.value.findIndex((task) => task.id === taskId);
  tasks.value[taskIndex].editing = false; // Exit edit mode
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
    <input
      type="text"
      v-model="newTaskName"
      placeholder="Enter new task name"
    />
    <button class="text-secondary mb-4" @click="addTask">
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
        <button class="text-slate-600 text-2xl" @click="editTask(task.id)">
          <FontAwesomeIcon
            :icon="task.editing ? faCheckSquare : faPenToSquare"
          />
        </button>
        <input type="checkbox" v-model="task.completed" class="checkbox" />

        <input
          type="text"
          v-model="task.name"
          :disabled="!task.editing"
          class="checkbox w-48"
        />
        <br />

        <span class="font-medium">{{ !task.editing ? task.name : "" }}</span>
        <span v-if="task.editing" class="font-medium">{{ task.name }}</span>

        <button
          v-if="task.editing"
          class="text-secondary"
          @click="saveTask(task.id)"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>
