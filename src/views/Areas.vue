<template>
  <!-- Title -->
  <Title title="Football Data App" />

  <div class="card">
    <div class="card-title">
      <p>All Areas</p>
      <span>Click Country name to see all football clubs from selected area</span>
    </div>

    <!-- Search -->
    <input
      class="input-search"
      type="text"
      placeholder="Search Area Name"
      v-model="search"
      @keyup="searchData()"
    >

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

    <!-- Pagination -->
    <Pagination
      v-if="!isLoading && !isSearch"
      :page="page"
      :totalPage="totalPage"
      @page-next="nextPage"
      @page-prev="prevPage"
    />

    <!-- Loading Table List -->
    <LoadingTable v-if="isLoading" />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { IAreas } from '@/config/interfaces/AreasInterface'
  import { getAllAreas } from '@/config/services/FootbalServices'
  import LoadingTable from '@/components/loading/LoadingTable.vue'
  import Title from '@/components/Title.vue'
  import Pagination from '@/components/Pagination.vue'

  // Variable declaration
  const isSearch = ref<boolean>(false)
  const search = ref<string>('')
  const page = ref<number>(1)
  const totalPage = ref<number>(1)
  const areas = ref<IAreas[]>([])
  const realAreasData = ref<IAreas[]>([])
  const areasChunk = ref<IAreas[][]>([])
  const isLoading = ref<boolean>(true)
  
  // Function get all areas
  const getAreas = async () => {
    isLoading.value = true

    await getAllAreas().then(response => {
      realAreasData.value = response.areas
      areasChunk.value = chunkArray(response.areas, 20)
      totalPage.value = areasChunk.value.length
      setDataPage()
      isLoading.value = false
    })
  }

  // Function split data to small array
  const chunkArray = (data: IAreas[], chunkSize: number) => {
    let index = 0
    let arrayLength = data.length
    let tempArray = []
    
    for (index = 0; index < arrayLength; index += chunkSize) {
        const chunk = data.slice(index, (index + chunkSize))

        tempArray.push(chunk)
    }

    return tempArray
  }

  // Function set data per page
  const setDataPage = () => {
    areas.value = []

    if (page.value <= areasChunk.value.length) {
      areas.value = areasChunk.value[(page.value - 1)]
    }
  }

  // Function search data
  const searchData = () => {
    let result: IAreas[] = []

    if (search.value.length > 3) {
      result = realAreasData.value.filter(area => 
        area.name.toLowerCase().indexOf(search.value.toLowerCase()) > -1
      )
      isSearch.value = true
      areas.value = result
    }
    else {
      setDataPage()
      isSearch.value = false
    }
  }

  // Function next page
  const nextPage = () => {
    page.value++
    setDataPage()
  }

  // Function previous page
  const prevPage = () => {
    page.value--
    setDataPage()
  }

  onMounted(() => {
    getAreas()
  })
</script>

<style lang="scss" scoped>
  .input-search {
    width: calc(100% - 40px);
    height: 34px;
    border-radius: 17px;
    padding: 0 20px;
    border: 1px solid rgb(173, 173, 173);
    margin-bottom: 30px;
  }
</style>
