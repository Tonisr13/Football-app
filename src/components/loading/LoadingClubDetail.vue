<template>
    <div class="detail">
        <div class="skeleton skeleton-image"></div>

        <div class="info">
            <LoadingTableDetail />
        </div>
    </div>

    <div class="card">
        <div class="overflow-auto">
            <LoadingTable />
        </div>
    </div>
</template>

<script setup lang="ts">
    import LoadingTable from './LoadingTable.vue'
    import LoadingTableDetail from './LoadingTableDetail.vue';
</script>

<style lang="scss" scoped>
    .detail {
        display: flex;
        align-items: center;
        margin-bottom: 60px;

        .skeleton-image {
            width: 200px;
            height: 200px;
            border-radius: 100%;
            margin-right: 60px;
        }
        .info {
            flex: 1;
        }
    }

    @media screen and (max-width: 750px) {
        .detail {
            flex-direction: column;
            align-items: flex-start;

            .skeleton-image {
                width: 160px;
                height: 160px;
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 40px;
            }
            .info {
                flex: none;
                width: 100%;
            }
        }
    }
</style>