<script setup>
import Sidebar from '@/components/Sidebar.vue'
const publicRoutes = ['/login']
const isPublic = publicRoutes.includes(window.location.pathname)
</script>

<template>
  <div class="drawer md:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <Sidebar v-if="!isPublic" />
    <div class="drawer-content flex flex-col">
      <RouterView />
    </div>
  </div>
</template>
