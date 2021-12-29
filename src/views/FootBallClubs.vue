<template>
  <!-- Title -->
  <Title title="Football Clubs" spanText="click on the club box to see more details" />

  <div v-if="!isLoading && teams.length > 0" class="teams-list">
    <router-link 
      v-for="team in teams"
      :key="team.id"
      :to="{ path: '/club-detail', query: { team: team.id } }"
      class="card-list"
    >
      <TeamsContent :team="team" />
    </router-link>
  </div>

  <!-- If data is empty -->
  <div v-if="!isLoading && teams.length  == 0" class="data-null">No football clubs found in this area</div>

  <!-- Loading List -->
  <LoadingCardList v-if="isLoading && teams.length == 0" />
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { getFromAreas } from '@/config/services/FootbalServices'
  import { ITeams } from '@/config/interfaces/TeamsInterface'
  import Router from '@/config/composables/Router'
  import LoadingCardList from '@/components/loading/LoadingCardList.vue'
  import TeamsContent from '@/components/content/TeamsContent.vue'
  import Title from '@/components/Title.vue'
  
  // Import router
  const { route } = Router()

  // Variable declaration
  const areaID = ref<any>(route.query.area)
  const teams = ref<ITeams[]>([])
  const isLoading = ref<boolean>(true)

  // Function get football clubs from area
  const getFootballClubs = async () => {
    isLoading.value = true

    await getFromAreas(areaID.value).then(response => {
      teams.value = response.teams
      isLoading.value = false
    })
  }

  onMounted(() => {
    getFootballClubs()
  })
</script>

<style lang="scss" scoped>
  .teams-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-gap: 20px;

    @media screen and(max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    }
    @media screen and(max-width: 419px) {
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    }
    .card-list {
      cursor: pointer;
      text-decoration: none;
    }
  }

  .data-null {
    text-align: center;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
  }
</style>