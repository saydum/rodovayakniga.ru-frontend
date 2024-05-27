<script setup lang="ts">
import MenuItemWithIcon from './MenuItemWithIcon.vue'
import { HomeIcon, BookOpenIcon, UserGroupIcon, PhotoIcon, CogIcon, LifebuoyIcon, ShareIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <aside class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
    <div class="py-4 text-gray-500 dark:text-gray-400">
      <a class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
        rodovayakniga.ru
      </a>
      <ul class="mt-6">
        <MenuItemWithIcon title="Главное" href="/" :iconComponent="HomeIcon" />
      </ul>

      <ul>
        <MenuItemWithIcon
          title="Родовая книга"
          href="/rodovayakniga"
          :iconComponent="BookOpenIcon"
        />

        <MenuItemWithIcon
          title="Родственники"
          href="/rodstvenniki"
          :iconComponent="UserGroupIcon"
        />

        <MenuItemWithIcon
          title="Галерея"
          href="/gallery"
          :iconComponent="PhotoIcon"
        />

        <MenuItemWithIcon
          title="Поделиться"
          href="/links"
          :iconComponent="ShareIcon"
        />
      </ul>

        <ul class="mt-6 flex-grow">
          <MenuItemWithIcon title="Настройки" href="/settings" :iconComponent="CogIcon" />
          <MenuItemWithIcon title="Поддержка" href="/support" :iconComponent="LifebuoyIcon" />
        </ul>

      <div class="px-6 my-6">
        <button
          class="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        >
          Добавить человека
          <span class="ml-2" aria-hidden="true">+</span>
        </button>
      </div>

    </div>
  </aside>
</template>
