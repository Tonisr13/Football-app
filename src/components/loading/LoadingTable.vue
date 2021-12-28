<template>
    <div class="overflow-auto">
        <table class="table-default">
            <thead>
                <tr>
                    <th><div class="skeleton"></div></th>
                    <th><div class="skeleton"></div></th>
                    <th><div class="skeleton"></div></th>
                    <th><div class="skeleton"></div></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, i) in 10" :key="i">
                    <td><div class="skeleton"></div></td>
                    <td><div class="skeleton"></div></td>
                    <td><div class="skeleton"></div></td>
                    <td><div class="skeleton"></div></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
    .skeleton {
        min-width: 100px;
    }
</style>