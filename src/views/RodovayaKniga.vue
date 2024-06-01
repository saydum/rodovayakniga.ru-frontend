<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { PencilIcon } from '@heroicons/vue/24/solid'


const rodovayakniga = ref([])
const error = ref('')

const baseUrl = 'http://127.0.0.1:8000/api/' // @TODO(подправить)

const fetchData = async () => {
  try {
    const response = await axios.get(`${baseUrl}rodovayakniga`)
    rodovayakniga.value = response.data
  } catch (err) {
    error.value = 'Failed to fetch data'
    console.error(err)
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <div class="container px-6 mx-auto grid">
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Родовая книга</h2>

    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-no-wrap">
        <thead>
          <tr
            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
          >
            <th class="px-4 py-3">Имя</th>
            <th class="px-4 py-3">Дата создания</th>
            <th class="px-4 py-3">Действие</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          <tr
            v-for="(item, index) in rodovayakniga"
            :key="index"
            class="text-gray-700 dark:text-gray-400"
          >
            <td class="px-4 py-3">
              <div class="flex items-center text-sm">
                <div>
                  <p class="font-semibold">
                    {{ item.name }}
                  </p>
                  <p class="text-xs text-gray-600 dark:text-gray-400">10x Developer</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-sm">
              {{ item.created_at }}
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center space-x-4 text-sm">
                  <PencilIcon class="flex items-center text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray w-5" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
