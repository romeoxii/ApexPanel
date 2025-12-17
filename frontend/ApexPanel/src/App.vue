<script setup>
import { RouterView } from 'vue-router'
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
  <RouterView />
</template>
