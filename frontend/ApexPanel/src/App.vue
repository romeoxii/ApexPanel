<script setup>
import { RouterView } from 'vue-router'
import Toast from './components/Toast.vue'
import { getAllProducts } from './api/productsServices'
import { onMounted } from 'vue'
import { ref } from 'vue'
import { useUserStore } from './stores/user'
const userStore = useUserStore()
const products = ref([])

onMounted(() => {
  userStore.hydrateAuth()
})

onMounted(async () => {
  try {
    products.value = await getAllProducts()

    console.log('products: ', products.value)
  } catch (err) {
    console.log(err)
  }
})
</script>

<template>
  <div>
    <Toast class="z-101" />
    <RouterView />
    <div class="fixed bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded z-9999">
      <span class="block sm:hidden">default (&lt;640px)</span>
      <span class="hidden sm:block md:hidden">sm (≥640px)</span>
      <span class="hidden md:block lg:hidden">md (≥768px)</span>
      <span class="hidden lg:block xl:hidden">lg (≥1024px)</span>
      <span class="hidden xl:block 2xl:hidden">xl (≥1280px)</span>
      <span class="hidden 2xl:block">2xl (≥1536px)</span>
    </div>
  </div>
</template>
