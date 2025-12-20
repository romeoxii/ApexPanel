<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen w-full bg-neutral-50 center relative">
    <button>
      <RouterLink
        to="/"
        class="flex items-center gap-1 px-2 py-1 bg-neutral-800/95 text-white rounded-lg absolute top-2 left-2 text-sm hover hover:bg-neutral-700"
        ><span
          ><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M5.5 12.002H19m-8 6s-6-4.419-6-6s6-6 6-6"
            /></svg></span
        >Home</RouterLink
      ></button
    ><RouterView />
  </div>
</template>
