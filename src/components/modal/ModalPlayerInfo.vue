<template>
    <div v-if="player && !isLoading">
        <div class="table-detail">
            <div class="list">
                <div class="list-title">Full Name</div>
                <div class="list-desc">{{ player.name }}</div>
            </div>
            <div class="list">
                <div class="list-title">Nationality</div>
                <div class="list-desc">{{ player.nationality }}</div>
            </div>
            <div class="list">
                <div class="list-title">Position</div>
                <div class="list-desc">{{ player.position }}</div>
            </div>
            <div class="list">
                <div class="list-title">Place Of Birth</div>
                <div class="list-desc">{{ player.countryOfBirth }}</div>
            </div>
            <div class="list">
                <div class="list-title">Date Of Birth</div>
                <div class="list-desc">{{ player.dateOfBirth }}</div>
            </div>
        </div>
    </div>

    <!-- Loading -->
    <LoadingTableDetail v-if="!player && isLoading" />
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { getPlayerDetail } from '@/config/services/FootbalServices'
    import { IPlayer } from '@/config/interfaces/PlayerInterface'
    import LoadingTableDetail from '../loading/LoadingTableDetail.vue'

    // Props declaration
    const props = defineProps({
        playerID: Number
    })

    // Variable declaration
    const player = ref<IPlayer>()
    const isLoading = ref<boolean>(true)

    // Function get player detail info
    const getPlayerInfo = async () => {
        isLoading.value = true
        
        if (props.playerID) {
            await getPlayerDetail(props.playerID).then(response => {
                player.value = response
                isLoading.value = false
            })
        }
    }

    onMounted(() => {
        getPlayerInfo()
    })
</script>