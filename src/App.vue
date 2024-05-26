<script setup lang="ts">
import SidebarComponent from './components/SidebarComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <SidebarComponent />
  
  <div class="flex flex-col flex-1 w-full">
    <HeaderComponent />
  </div>
</template>

<style scoped></style>
