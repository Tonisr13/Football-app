<template>
    <div class="pagination">
        <button
            class="btn-page"
            :disabled="!pagePrev"
            @click="prevPage"
        >
            <ChevronLeftIcon />
        </button>

        <span class="page-text">{{ page }} / {{ totalPage }}</span>

        <button
            class="btn-page"
            :disabled="!pageNext"
            @click="nextPage"
        >
            <ChevronRightIcon />
        </button>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, watch, ref } from 'vue'
    import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/outline'

    // Props declaration
    const props = defineProps({
        page: Number,
        totalPage: Number
    })

    // Emits declaration
    const emit = defineEmits(['page-prev', 'page-next'])

    // Variable declaration
    const pagePrev = ref<boolean>(true)
    const pageNext = ref<boolean>(true)

    // Function set disabled button page
    const disabledButtonPage = () => {
        if (props.page && props.totalPage) {
            if (props.page <= props.totalPage) {
                if (props.page == 1) {
                    pagePrev.value = false
                    pageNext.value = true
                }
                else if (props.page === props.totalPage) {
                    pagePrev.value = true
                    pageNext.value = false
                }
                else if (props.page > 1 && props.page < props.totalPage) {
                    pagePrev.value = true
                    pageNext.value = true
                }
            }
        }
    }

    // Function next page
    const nextPage = () => {
        emit('page-next')
    }

    // Function previous page
    const prevPage = () => {
        emit('page-prev')
    }

    // Watch if page changing
    watch(() => props.page, (value, prevValue) => {
        disabledButtonPage()
    })

    onMounted(() => {
        disabledButtonPage()
    })
</script>