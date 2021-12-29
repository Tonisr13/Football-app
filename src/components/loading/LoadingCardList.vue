<template>
    <div class="list-grid">
        <div v-for="i in 20" :key="i" class="card-list">
            <div class="skeleton skeleton-image"></div>
            <div class="skeleton"></div>
            <div class="skeleton"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .list-grid {
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
            display: flex;
            flex-direction: column;

            .skeleton-image {
                height: 200px;
            }
            .skeleton {
                margin-bottom: 20px;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
</style>