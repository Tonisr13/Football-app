<template>
    <div class="title">
        <h1>{{ title }}</h1>
        <span v-if="spanText">{{ spanText }}</span>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        title: String,
        spanText: String
    })
</script>