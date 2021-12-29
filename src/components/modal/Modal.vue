<template>
    <div class="backdrop-modal">
        <div class="modal">
            <!-- Modal title -->
            <div class="modal-title">
                <h2>{{ title }}</h2>
                <XIcon @click="modalClose" />
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <slot name="modal-body"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { XIcon } from '@heroicons/vue/outline'

    // Props declaration
    const props = defineProps({
        title: String
    })

    // Emits declaration
    const emit = defineEmits(['modal-close'])

    // Function modal close
    const modalClose = () => {
        emit('modal-close', false)
    }
</script>