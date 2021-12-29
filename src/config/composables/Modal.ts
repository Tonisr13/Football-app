import { ref } from 'vue'

export default () => {
    const showModal = ref<boolean>(false)

    // Function modal open
    const modalOpen = () => {
        showModal.value = true
        document.body.style.overflow = "hidden"
    }

    // Function modal close
    const modalClose = (event: boolean) => {
        showModal.value = event
        document.body.style.removeProperty("overflow")
    }

    return {
        showModal,
        modalOpen,
        modalClose
    }
}