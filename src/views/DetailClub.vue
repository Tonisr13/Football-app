<template>
    haaai
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import Router from '@/config/composables/Router'
    import { getClubProfile } from '@/config/services/FootbalServices'

    // Import router
    const { route } = Router()

    // Variable declaration
    const teamID = ref<any>(route.query.team)
    const isLoading = ref<boolean>(true)

    // Function get fotball club detail
    const getClubDetail = async () => {
        isLoading.value = true

        await getClubProfile(teamID.value).then(response => {
            console.log(response)
            isLoading.value = false
        })
    }

    onMounted(() => {
        getClubDetail()
    })
</script>