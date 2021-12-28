<template>
  <h1 class="title">Footballs Clubs</h1>

  <div v-if="!isLoading && teams.length > 0" class="teams-list">
    <div v-for="team in teams" :key="team.id" class="card-list">
      <TeamsContent :team="team" />
    </div>
  </div>

  <!-- Loading List -->
  <LoadingCardList v-else />
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { getFromAreas } from '@/config/services/FootbalServices'
  import { ITeams } from '@/config/interfaces/TeamsInterface'
  import Router from '@/config/composables/Router'
  import LoadingCardList from '@/components/loading/LoadingCardList.vue'
  import TeamsContent from '@/components/content/TeamsContent.vue'

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

    @media screen and(max-width: 750px) {
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    }
  }
</style>