<script setup>
import { navOpen, openNav } from '@/function/functions'
</script>

<template>
	<Transition name="backdrop">
		<div
			class="fixed inset-0 top-14 bg-black/30 backdrop-blur-xs z-40"
			@click="openNav"
			v-if="navOpen"
		>
			<Transition name="nav">
				<div
					class="fixed top-0 left-0 right-0 bg-neutral-100 p-6"
					v-if="navOpen"
					@click.stop
				>
					<ul class="flex flex-col items-center gap-5">
						<li>
							<RouterLink to="/" class="main-nav" @click="openNav">Home</RouterLink>
						</li>
						<li>
							<RouterLink to="/about" class="main-nav" @click="openNav"
								>About</RouterLink
							>
						</li>
						<li>
							<RouterLink to="/features" class="main-nav" @click="openNav"
								>Features</RouterLink
							>
						</li>
						<li>
							<RouterLink to="/pricing" class="main-nav" @click="openNav"
								>Pricing</RouterLink
							>
						</li>
					</ul>
				</div>
			</Transition>
		</div>
	</Transition>
</template>

<style scoped>
/* Backdrop transition */
.backdrop-enter-from,
.backdrop-leave-to {
	opacity: 0;
}

.backdrop-enter-active,
.backdrop-leave-active {
	transition: opacity 0.3s ease;
}

/* Nav menu transition */
.nav-enter-from,
.nav-leave-to {
	opacity: 0;
	transform: translateY(-20px);
}

.nav-enter-active,
.nav-leave-active {
	transition: all 0.3s ease 0.1s;
}
</style>
