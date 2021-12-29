<template>
    hai
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { getPlayerDetail } from '@/config/services/FootbalServices'
    import Router from '@/config/composables/Router'

    // Import router
    const { route } = Router()

    // Variable declaration
    const playerID = ref<any>(route.query.player)
    const isLoading = ref<boolean>(true)

    // Function get player detail info
    const getPlayerInfo = async () => {
        isLoading.value = true

        await getPlayerDetail(playerID.value).then(response => {
            console.log(response)
            isLoading.value = false
        })
    }

    onMounted(() => {
        getPlayerInfo()
    })
</script>