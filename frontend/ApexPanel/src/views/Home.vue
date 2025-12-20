<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { features } from '@/data/features'
</script>

<template>
  <div class="min-h-screen w-full col-center pt-36">
    <div class="flex flex-col items-center pb-6 px-3">
      <div
        class="px-4 py-2 bg-neutral-200/80 rounded-full mb-6 flex items-center gap-1 text-neutral-700 text-sm font-medium"
      >
        <span
          ><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
              <path
                d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
              />
              <path
                fill="currentColor"
                d="M11.298 2.195a2 2 0 0 1 1.404 0l7 2.625A2 2 0 0 1 21 6.693v5.363a9 9 0 0 1-4.975 8.05l-3.354 1.677a1.5 1.5 0 0 1-1.342 0l-3.354-1.677A9 9 0 0 1 3 12.056V6.693A2 2 0 0 1 4.298 4.82zM12 4.068L5 6.693v5.363a7 7 0 0 0 3.87 6.26L12 19.883l3.13-1.565A7 7 0 0 0 19 12.056V6.693z"
              />
            </g></svg></span
        >Secure. Modern. Reliable.
      </div>
      <h1
        class="text-center text-5xl md:text-7xl font-bold text-neutral-900 sm:mb-6 mb-4 leading-tight max-w-6xl"
      >
        Your Central Control Panel for Everything
      </h1>
      <p class="sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto text-center">
        A secure dashboard built for managing users, products, and system access — all in one place.
        Built with modern web architecture and secure authentication.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center w-full gap-4 mb-8">
        <button
          class="group px-8 py-4 bg-neutral-900 text-white rounded-lg hover:bg-neutral-700 transition-all transform hover:scale-101 flex items-center space-x-2 shadow-lg"
        >
          <span>Start Free Trial</span
          ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none">
              <path
                d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
              />
              <path
                fill="currentColor"
                d="m14.707 5.636l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414"
              />
            </g>
          </svg>
        </button>
        <button
          class="px-8 py-4 border-2 border-neutral-900 text-neutral-900 rounded-lg hover:bg-neutral-100 transition-all hover"
        >
          <span>View Demo</span>
        </button>
      </div>
      <div class="w-full flex items-center justify-center gap-7 mt-16">
        <p class="flex items-center gap-2 text-sm text-neutral-500">
          <span
            ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" stroke="black" stroke-linecap="round" stroke-width="1.5">
                <path
                  d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10q-.002-1.03-.2-2"
                />
                <path stroke-linejoin="round" d="M8 12.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11" />
              </g></svg></span
          >No credit card required
        </p>
        <p class="flex items-center gap-2 text-sm text-neutral-500">
          <span
            ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" stroke="black" stroke-linecap="round" stroke-width="1.5">
                <path
                  d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10q-.002-1.03-.2-2"
                />
                <path stroke-linejoin="round" d="M8 12.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11" />
              </g></svg></span
          >14-day free trial
        </p>
      </div>
    </div>
    <section
      class="min-h-screen w-full flex flex-col items-center bg-neutral-100 text-center pt-16 sm:px-6 px-3"
    >
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
          Everything You Need to Manage
        </h2>
        <p class="text-xl text-neutral-600 max-w-2xl mx-auto">
          Powerful features designed for modern teams who need control, security, and efficiency
        </p>
      </div>
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div
          class="w-full flex flex-col justify-evenly bg-white border border-neutral-100 p-8 text-start space-y-5 rounded-2xl shadow-xs hover:-translate-y-2 hover"
          v-for="(feature, index) in features"
          :key="index"
        >
          <div class="h-14 w-14 center bg-neutral-800 rounded-xl text-white">
            <span v-html="feature.icon"></span>
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>
    <section class="w-full center bg-black text-center py-16 px-6">
      <div class="text-center space-y-16">
        <h2 class="text-4xl md:text-5xl font-bold text-neutral-100 mb-8">
          Everything You Need to Manage
        </h2>
        <p class="text-xl text-neutral-100 max-w-2xl mx-auto">
          Powerful features designed for modern teams who need control, security, and efficiency
        </p>
        <div class="w-full flex justify-center">
          <button
            class="group px-8 py-4 bg-white text-neutral-900 rounded-lg hover:bg-neutral-100 transition-all transform hover:scale-105 flex items-center space-x-2 mx-auto shadow-lg font-semibold hover gap-1"
          >
            Start Your Free Trial
            <span class="group-hover:translate-x-1 transition-transform"
              ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g fill="none">
                  <path
                    d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                  />
                  <path
                    fill="currentColor"
                    d="m14.707 5.636l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414"
                  />
                </g></svg
            ></span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
