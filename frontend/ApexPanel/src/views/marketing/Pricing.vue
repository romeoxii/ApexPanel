<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
import { plans } from '@/data/plans'
import faqs from '@/data/faqs'

const billingCycle = ref('monthly')
const setBillingCycle = (newCycle) => {
	billingCycle.value = newCycle
}

const getPrice = (plan) => {
	if (plan.price.monthly === 0) return 'Free'
	const price =
		billingCycle.value === 'monthly' ? plan.price.monthly : plan.price.yearly.toLocaleString()
	return `$${price}`
}

const getSavings = (plan) => {
	if (plan.price.monthly === 0) return null
	const monthlyCost = plan.price.monthly * 12
	const savings = monthlyCost - plan.price.yearly
	return savings > 0 ? `Save $${savings}` : null
}

const openFaq = ref(null)

const showFaq = (index) => {
	openFaq.value = openFaq.value === index ? null : index
}
</script>
<template>
	<div class="min-h-screen">
		<div class="pt-40 text-center col-center">
			<div
				class="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-neutral-200 rounded-full mb-6"
			>
				<p class="center gap-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
					>
						<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M5 20.5h14m-2.128-3H7.128c-1.028 0-1.542 0-1.932-.277c-.39-.276-.56-.761-.9-1.732L2.052 9.077a.97.97 0 0 1 .241-1.007a1.01 1.01 0 0 1 1.26-.123l1.231.81c1.244.818 1.866 1.226 2.495 1.078c.629-.149 1.002-.793 1.749-2.08l2.214-3.82A.88.88 0 0 1 12 3.5c.314 0 .603.166.759.434l2.214 3.82c.747 1.288 1.12 1.932 1.749 2.08c.629.15 1.25-.26 2.494-1.077l1.233-.81a1.01 1.01 0 0 1 1.259.123c.267.264.36.653.24 1.007l-2.245 6.414c-.34.97-.51 1.456-.9 1.732c-.39.277-.903.277-1.931.277"
						/></svg
					><span class="text-sm font-medium text-neutral-700"
						>Simple, Transparent Pricing</span
					>
				</p>
			</div>
			<div class="text-center px-3">
				<h1 class="text-5xl md:text-6xl font-bold text-neutral-800 mb-3 sm:mb-6">
					Choose Your Plan
				</h1>

				<p class="text-[15px] sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
					Start free, scale as you grow. All plans include core features with no hidden
					fees.
				</p>
			</div>
			<div class="w-full col-center pb-16">
				<div
					class="inline-flex items-center space-x-3 bg-white rounded-lg p-1 border border-neutral-200"
				>
					<button
						@click="setBillingCycle('monthly')"
						:class="[
							billingCycle === 'monthly'
								? 'bg-neutral-800 text-white'
								: 'text-neutral-600 hover:text-neutral-800',
						]"
						class="px-6 py-2 rounded-md font-medium transition-all hover"
					>
						Monthly
					</button>

					<button
						@click="setBillingCycle('yearly')"
						:class="[
							billingCycle === 'yearly'
								? 'bg-neutral-800 text-white'
								: 'text-neutral-600 hover:text-neutral-800',
						]"
						class="px-6 py-2 rounded-md font-medium transition-all hover"
					>
						Yearly
					</button>
				</div>
				<p
					v-if="billingCycle === 'yearly'"
					class="flex items-center gap-1 mt-3 text-xs text-green-600 font-medium"
				>
					<span
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
						>
							<g
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-width="1.5"
							>
								<path
									d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10q-.002-1.03-.2-2"
								/>
								<path
									stroke-linejoin="round"
									d="M8 12.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
								/>
							</g></svg></span
					>Save up to 20% with annual billing
				</p>
			</div>
			<section class="py-12 px-8 sm:px-12 lg:px-16 w-full center">
				<div class="mx-auto w-full">
					<div class="w-full grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
						<div
							v-for="(plan, index) in plans"
							:key="index"
							class="relative w-full"
							:class="[
								plan.popular
									? 'border-2 border-neutral-900 scale-102 rounded-lg'
									: 'border border-neutral-300 rounded-lg',
							]"
						>
							<p
								class="absolute -top-4 left-[35%] text-neutral-50 text-sm bg-neutral-900 rounded-full py-1 px-3"
								v-if="plan.popular"
							>
								Most Popular
							</p>
							<div class="text-start p-4">
								<div class="mb-6">
									<div class="w-12 h-12 bg-neutral-900 rounded-xl center mb-4">
										<div
											class="w-6 h-6 text-white center"
											v-html="plan.icon"
										></div>
									</div>
									<h3 class="text-2xl font-bold text-neutral-900 mb-2">
										{{ plan.name }}
									</h3>
									<p class="text-neutral-600 text-sm">{{ plan.description }}</p>
								</div>
								<div class="mb-6">
									<div class="flex items-baseline">
										<span class="text-5xl font-bold text-neutral-900">{{
											getPrice(plan)
										}}</span>
										<span
											v-if="plan.price.monthly > 0"
											class="text-neutral-600 ml-1"
										>
											/{{ billingCycle === 'monthly' ? 'mo' : 'yr' }}
										</span>
									</div>
									<p
										v-if="billingCycle === 'yearly' && getSavings(plan)"
										class="text-sm text-green-600 font-medium mt-1"
									>
										{{ getSavings(plan) }}/year
									</p>
								</div>
								<button
									:class="[
										'w-full py-3 rounded-lg font-semibold mb-6 transition-all',
										plan.popular
											? 'bg-neutral-900 text-white hover:bg-neutral-700 hover'
											: 'hover border border-neutral-300 bg-neutral-200 text-neutral-900 hover:bg-neutral-100 hover:text-neutral-800',
									]"
								>
									{{ plan.cta }}
								</button>
								<div
									v-for="(feature, fIndex) in plan.features"
									:key="fIndex"
									class="flex items-start space-x-3 space-y-3"
								>
									<svg
										v-if="feature.included"
										class="w-5 h-5 text-neutral-900 shrink-0 mt-0.5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 13l4 4L19 7"
										></path>
									</svg>
									<svg
										v-else
										class="w-5 h-5 text-neutral-400 shrink-0 mt-0.5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M6 18L18 6M6 6l12 12"
										></path>
									</svg>
									<span
										:class="
											feature.included
												? 'text-neutral-700'
												: 'text-neutral-400'
										"
									>
										{{ feature.text }}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="pt-12 px-4 sm:px-6 lg:px-8 w-full bg-white">
				<div class="w-full mx-auto mb-12">
					<h3 class="text-4xl font-medium text-neutral-800 mb-3">Compare All Features</h3>
					<p class="text-lg text-neutral-700">See whats included in each plan</p>
				</div>
				<div class="overflow-x-auto">
					<table class="w-full">
						<thead class="bg-neutral-50">
							<tr>
								<th class="text-center py-4 px-6 text-neutral-900 font-semibold">
									Feature
								</th>
								<th class="text-center py-4 px-6 text-neutral-900 font-semibold">
									Starter
								</th>
								<th class="text-center py-4 px-6 text-neutral-900 font-semibold">
									Professional
								</th>
								<th class="text-center py-4 px-6 text-neutral-900 font-semibold">
									Enterprise
								</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-neutral-200">
							<tr
								v-for="(feature, fIdx) in plans[0].features"
								:key="fIdx"
								class="hover:bg-neutral-50"
							>
								<td class="py-4 px-6 text-neutral-700">
									{{ plans[0].features[fIdx].text }}
								</td>
								<td
									v-for="(plan, pIdx) in plans"
									:key="pIdx"
									class="py-4 px-6 text-center"
								>
									<svg
										v-if="plan.features[fIdx].included"
										class="w-5 h-5 text-neutral-900 mx-auto"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 13l4 4L19 7"
										></path>
									</svg>
									<svg
										v-else
										class="w-5 h-5 text-neutral-300 mx-auto"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M6 18L18 6M6 6l12 12"
										></path>
									</svg>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
			<section class="pt-20 pb-10 px-4 sm:px-6 lg:px-8 bg-neutral-50 w-full">
				<div class="w-full col-center">
					<div class="mb-12">
						<h3 class="text-4xl font-bold text-neutral-800 mb-3">
							Frequently Asked Questions
						</h3>
						<p class="text-lg text-neutral-600">
							Everything you need to know about our pricing
						</p>
					</div>
					<div
						class="w-full sm:w-[80%] border-b border-neutral-300 px-3 py-4 mx-auto hover:bg-neutral-100 transition-colors cursor-pointer hover"
						v-for="(faq, index) in faqs"
						:key="index"
					>
						<div class="flex items-center justify-between gap-2">
							<div class="flex items-center gap-2 mb-2">
								<span v-html="faq.icon"></span>
								<h3>{{ faq.question }}</h3>
							</div>
							<button @click="showFaq(index)" class="cursor-pointer">
								<svg
									:class="{ 'rotate-180': openFaq === index }"
									class="transition-transform duration-300 hover:scale-110"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M18 9s-4.419 6-6 6s-6-6-6-6"
									/>
								</svg>
							</button>
						</div>

						<!-- Smooth dropdown transition -->
						<transition
							enter-active-class="transition-all duration-300 ease-out"
							leave-active-class="transition-all duration-200 ease-in"
							enter-from-class="opacity-0 -translate-y-2 max-h-0"
							enter-to-class="opacity-100 translate-y-0 max-h-96"
							leave-from-class="opacity-100 translate-y-0 max-h-96"
							leave-to-class="opacity-0 -translate-y-2 max-h-0"
						>
							<p
								class="w-full text-start pl-8 text-sm text-neutral-600 overflow-hidden"
								v-if="openFaq === index"
							>
								{{ faq.answer }}
							</p>
						</transition>
					</div>
				</div>
				<div class="w-full col-center space-y-5 pt-10">
					<h3 class="text-lg text-neutral-600">Still have questions?</h3>
					<RouterLink
						to="/contact"
						class="flex items-center gap-3 group px-6 sm:px-8 py-4 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 shadow-lg"
					>
						Contact Sales
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
			</section>
			<section class="bg-black w-full px-4 py-10">
				<h3 class="pt-16 text-center w-full text-4xl text-white">Ready to Get Started?</h3>
				<p class="text-white text-sm sm:text-base my-4">
					Join thousands of teams using ApexPanel to manage their operations
				</p>
				<div class="w-full flex items-center justify-center gap-5 my-10 font-medium">
					<button
						class="px-6 sm:px-8 py-4 bg-white text-neutral-800 rounded-lg hover:bg-neutral-200 shadow-lg"
					>
						Start Free Trial
					</button>
					<button
						class="px-6 sm:px-8 py-4 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 border-2 border-white shadow-lg"
					>
						Schedule Demo
					</button>
				</div>
			</section>
		</div>
	</div>
</template>

<style></style>
