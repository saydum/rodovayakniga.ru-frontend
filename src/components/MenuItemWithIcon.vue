<script setup lang="ts">
import { defineProps }  from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps<{
  title: string;
  href: string;
  iconComponent: any;
}>();

</script>


<template>
  <li class="relative px-6 py-3">
    <RouterLink
      class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
      :to="props.href"
    >
      <component :is="props.iconComponent" class="w-5 h-5"/>
      <span class="ml-4">
        {{ props.title }}
      </span>
    </RouterLink>
  </li>
</template>
