<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="min-h-screen w-full bg-neutral-50"><Navbar /><RouterView /><Footer /></div>
</template>
