<template>
    <div class="team-content">
        <VLazyImage :src="team?.crestUrl" :alt="team?.name" />
        <p class="team-content-name">{{ team?.name }}</p>
        <p class="team-content-venue">{{ team?.venue }}</p>
        <a :href="team?.website" class="team-content-website">{{ team?.website }}</a>
    </div>
</template>

<script setup lang="ts">
    import { ITeams } from '@/config/interfaces/TeamsInterface'
    import VLazyImage from 'v-lazy-image'

    // Props declaration
    const props = defineProps({
        team: Object as () => ITeams,
    })
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/partials/variable';

    .ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .team-content {
        display: flex;
        flex-direction: column;
        color: $color-black;

        img {
            width: auto;
            max-width: 100%;
            height: 100px;
            object-fit: contain;
            margin: auto;
            margin-bottom: 30px;
        }
        &-name {
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
            margin-bottom: 10px;
            @extend .ellipsis;
        }
        &-venue {
            font-size: 14px;
            font-weight: 400;
            line-height: 22px;
            @extend .ellipsis;
        }
        &-website {
            color: $color-black;
            font-size: 14px;
            font-weight: 400;
            line-height: 22px;
            @extend .ellipsis;
        }
    }
</style>