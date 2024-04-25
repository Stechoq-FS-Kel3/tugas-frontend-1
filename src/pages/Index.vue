<template>
  <div class="flex items-center justify-center h-screen">
    <div class="text-center">
      <h1 class="font-bold text-4xl">TaskDo</h1>
      <h3 class="font-semibold">Manage You Task Checklist Easily</h3>
      <RouterLink class="btn btn-secondary" :to="{ name: 'home' }">
        Lets Start
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {};
</script>

<style></style>
