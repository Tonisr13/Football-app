import { ref } from 'vue'

export default () => {
    const showModal = ref<boolean>(false)

    // Function modal open
    const modalOpen = () => {
        showModal.value = true
    }

    // Function modal close
    const modalClose = (event: boolean) => {
        showModal.value = event
    }

    return {
        showModal,
        modalOpen,
        modalClose
    }
}