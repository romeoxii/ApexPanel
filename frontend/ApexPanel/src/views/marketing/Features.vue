<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { mainFeatures } from '@/data/mainFeatures'
import Point from '../../../public/Icons/point.vue'
</script>

<template>
	<div class="pt-20">
		<div class="py-20 max-w-4xl mx-auto col-center text-center px-3">
			<div
				class="center gap-1 border border-neutral-300 bg-white rounded-full mb-8 py-1 px-4"
			>
				<span
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="30"
						viewBox="0 0 24 24"
					>
						<path
							fill="none"
							stroke="currentColor"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M8.628 12.674H8.17c-1.484 0-2.225 0-2.542-.49c-.316-.489-.015-1.17.588-2.533l1.812-4.098c.548-1.239.822-1.859 1.353-2.206S10.586 3 11.935 3h2.09c1.638 0 2.458 0 2.767.535c.309.536-.098 1.25-.91 2.681l-1.073 1.886c-.404.711-.606 1.066-.603 1.358c.003.378.205.726.53.917c.25.147.657.147 1.471.147c1.03 0 1.545 0 1.813.178c.349.232.531.646.467 1.061c-.049.32-.395.703-1.088 1.469l-5.535 6.12c-1.087 1.203-1.63 1.804-1.996 1.613c-.365-.19-.19-.983.16-2.569l.688-3.106c.267-1.208.4-1.812.08-2.214c-.322-.402-.937-.402-2.168-.402Z"
						/></svg
				></span>
				<p class="text-sm text-neutral-700 font-medium">Powerful Features</p>
			</div>

			<h1 class="text-5xl sm:text-6xl font-bold text-neutral-800 mb-4">
				Everything You Need to Manage at Scale
			</h1>
			<p class="text-neutral-600">
				From user management to analytics, ApexPanel provides all the tools you need to run
				your operations efficiently and securely.
			</p>
			<RouterLink
				to="/pricing"
				class="flex items-center gap-2 px-6 sm:px-8 py-4 bg-neutral-800 text-neutral-50 rounded-lg hover:bg-neutral-700 shadow-lg mt-8"
			>
				Get Started For Free
				<span
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
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
			</RouterLink>
		</div>
		<section class="bg-white w-full py-20 col-center">
			<div class="text-center w-full mb-5">
				<h2 class="text-5xl font-bold text-neutral-800 mb-4">Core Features</h2>
				<p class="text-xl text-neutral-600 mb-4">
					Comprehensive tools designed for modern teams
				</p>
			</div>
			<div class="w-full center px-4 sm:px-8">
				<div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
					<div
						class="p-7 w-full bg-neutral-50 rounded-xl border border-neutral-200"
						v-for="(feature, index) in mainFeatures"
						:key="index"
					>
						<div class="w-14 h-14 bg-black center p-5 rounded-xl mb-5">
							<span class="text-white" v-html="feature.icon"></span>
						</div>
						<h3 class="mb-4 text-2xl font-bold">{{ feature.title }}</h3>
						<p class="text-neutral-600 mb-6">{{}}</p>
						<div class="space-y-3">
							<p
								class="flex items-center gap-2 text-neutral-600"
								v-for="(_, _index) in feature.features"
								:key="_index"
							>
								<Point />{{ _ }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style></style>
