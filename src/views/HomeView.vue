<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Country Code</th>
        <th>Parent Area</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="area in areas" :key="area.id">
        <td><a @click="getFootball(area.id)">{{ area.name }}</a></td>
        <td>{{ area.countryCode }}</td>
        <td>{{ area.parentArea }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { IAreas } from '@/config/interfaces/AreasInterface'
  import { getAllAreas, getFromAreas } from '@/config/services/FootbalServices'

  // Variable declaration
  const areas = ref<IAreas[]>()
  
  // Function get all areas
  const getAreas = async () => {
    await getAllAreas().then(response => {
      areas.value = response.areas
    })
  }

  // Function get football club
  const getFootball = async (id: number) => {
    await getFromAreas(id).then(response => {
      console.log(response)
    })
  }

  onMounted(() => {
    getAreas()
  })
</script>
