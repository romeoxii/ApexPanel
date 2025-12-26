<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useUserStore } from '@/stores/user'
import { ref, onMounted, onUnmounted } from 'vue'
import { openNav } from '@/function/functions'
import HamNav from './HamNav.vue'

const scrolled = ref(false)

const userStore = useUserStore()

const handleScroll = () => {
	scrolled.value = window.scrollY > 20
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
	<nav
		:class="`min-h-14 center p-2 fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`"
	>
		<div class="flex w-full items-center justify-between sm:justify-evenly px-3 sm:px-0">
			<h1 class="flex items-center text-xl font-bold gap-1 text-neutral-800">
				<span
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="30"
						viewBox="0 0 24 24"
					>
						<g fill="none" fill-rule="evenodd">
							<path
								d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
							/>
							<path
								fill="currentColor"
								d="M11.298 2.195a2 2 0 0 1 1.404 0l7 2.625A2 2 0 0 1 21 6.693v5.363a9 9 0 0 1-4.975 8.05l-3.354 1.677a1.5 1.5 0 0 1-1.342 0l-3.354-1.677A9 9 0 0 1 3 12.056V6.693A2 2 0 0 1 4.298 4.82zM12 4.068L5 6.693v5.363a7 7 0 0 0 3.87 6.26L12 19.883l3.13-1.565A7 7 0 0 0 19 12.056V6.693z"
							/>
						</g></svg
				></span>
				ApexPanel
			</h1>
			<div class="h-full hidden md:inline-flex">
				<ul class="flex items-center justify-end gap-5">
					<li>
						<RouterLink to="/" class="main-nav">Home</RouterLink>
					</li>
					<li>
						<RouterLink to="/about" class="main-nav">About</RouterLink>
					</li>
					<li>
						<RouterLink to="/features" class="main-nav">Features</RouterLink>
					</li>
					<li>
						<RouterLink to="/pricing" class="main-nav">Pricing</RouterLink>
					</li>
				</ul>
			</div>
			<div class="h-full hidden md:inline-flex" v-if="!userStore.isAuthenticated">
				<ul class="flex items-center justify-end gap-5">
					<li
						class="px-2 py-1 bg-neutral-800/95 text-white hover:bg-neutral-700 rounded-md text-sm hover"
					>
						<RouterLink to="/auth/login">Login</RouterLink>
					</li>
					<li
						class="px-2 py-1 text-neutral-800 bg-neutral-50 hover:bg-neutral-100 rounded-md text-sm hover border-2 border-neutral-800"
					>
						<RouterLink to="/auth/signup">Get started</RouterLink>
					</li>
				</ul>
			</div>
			<div class="h-full hidden md:inline-flex" v-else>
				<ul class="w-full flex items-center justify-end gap-5">
					<button
						class="transition-transform transform hover:scale-102 px-2 py-1 text-neutral-800 bg-neutral-50 hover:bg-neutral-100 rounded-md text-sm hover border-2 border-neutral-800"
						@click="userStore.logoutUser"
					>
						Logout
					</button>
				</ul>
			</div>

			<button
				class="p-2 border border-neutral-200 bg-neutral-100 rounded-md inline-flex md:hidden"
				@click="openNav"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
					<g fill="none">
						<path
							d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
						/>
						<path
							fill="currentColor"
							d="M20 18a1 1 0 0 1 .117 1.993L20 20H10a1 1 0 0 1-.117-1.993L10 18zm0-5a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm0-5a1 1 0 0 1 .117 1.993L20 10H10a1 1 0 0 1-.117-1.993L10 8zm0-5a1 1 0 0 1 .117 1.993L20 5H4a1 1 0 0 1-.117-1.993L4 3z"
						/>
					</g>
				</svg>
			</button>

			<!-- Remove the old HamNav line and add this instead -->
			<HamNav />
		</div>
	</nav>
</template>
