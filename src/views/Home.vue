<template>
  <h1 class="title">Football Data App</h1>

  <div class="card">
    <div class="card-title">
      <p>All Areas</p>
      <span>Click Country name to see all football clubs from selected area</span>
    </div>

    <div class="overflow-auto" v-if="!isLoading">
      <table class="table-default">
        <thead>
          <tr>
            <th>Country Name</th>
            <th>Country Code</th>
            <th>Continent</th>
          </tr>
        </thead>
    
        <tbody v-if="areas.length > 0">
          <tr v-for="area in areas" :key="area.id">
            <td>
              <router-link :to="{ path: '/football-clubs', query: { area: area.id } }">
                {{ area.name }}
              </router-link>
            </td>
            <td>{{ area.countryCode }}</td>
            <td>{{ area.parentArea }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Loading Table List -->
    <LoadingTable v-if="isLoading" />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { IAreas } from '@/config/interfaces/AreasInterface'
  import { getAllAreas } from '@/config/services/FootbalServices'
  import LoadingTable from '@/components/loading/LoadingTable.vue'

  // Variable declaration
  const areas = ref<IAreas[]>([])
  const isLoading = ref<boolean>(true)
  
  // Function get all areas
  const getAreas = async () => {
    isLoading.value = true

    await getAllAreas().then(response => {
      areas.value = response.areas
      isLoading.value = false
    })
  }

  onMounted(() => {
    getAreas()
  })
</script>
