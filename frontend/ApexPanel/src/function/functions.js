import { ref } from 'vue'

export const navOpen = ref(false)

export const openNav = () => {
	navOpen.value = !navOpen.value
}
