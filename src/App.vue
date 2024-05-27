<script setup lang="ts">
import { RouterView } from 'vue-router'
import SidebarComponent from './components/SidebarComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'

</script>

<template>
  <SidebarComponent />
  
  <div class="flex flex-col flex-1 w-full">
    <HeaderComponent />

    <RouterView />
  </div>
</template>

<style scoped></style>
