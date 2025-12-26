<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Point from '../../../public/Icons/point.vue'
</script>

<template>
	<div class="pt-20">
		<div class="py-20 max-w-4xl mx-auto col-center text-center">
			<div
				class="center gap-1 border border-neutral-300 bg-white rounded-full mb-8 py-1 px-4"
			>
				<span
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="text-neutral-700"
					>
						<circle cx="12" cy="12" r="10"></circle>
						<circle cx="12" cy="12" r="6"></circle>
						<circle cx="12" cy="12" r="2"></circle></svg
				></span>
				<p class="tedt-sm text-neutral-700">Our Story</p>
			</div>

			<h1 class="text-6xl font-bold text-neutral-800 mb-4">
				Building the Future of Admin Dashboards
			</h1>
			<p class="text-neutral-600">
				ApexPanel was born from a simple idea: managing users, products, and system access
				shouldn't be complicated. We're on a mission to provide teams with secure, intuitive
				tools that make administration effortless.
			</p>
		</div>
		<section class="w-full py-10 bg-white px-8">
			<div class="grid grid-cols-2">
				<div
					class="h-full w-full pb-4 col-center space-y-1 border-r border-b border-neutral-200"
				>
					<p class="text-3xl sm:text-5xl font-bold text-neutral-800">4+</p>
					<p class="text-lg text-neutral-400">Active Users</p>
				</div>
				<div class="h-full w-full pb-4 col-center space-y-1 border-b border-neutral-200">
					<p class="text-3xl sm:text-5xl font-bold text-neutral-800">99.9 &percnt;</p>
					<p class="text-lg text-neutral-400">Uptime</p>
				</div>
				<div class="h-full w-full pt-4 col-center space-y-1 border-r border-neutral-200">
					<p class="text-3xl sm:text-5xl font-bold text-neutral-800">4+</p>
					<p class="text-lg text-neutral-400">Projects Managed</p>
				</div>
				<div class="h-full w-full pt-4 col-center space-y-1">
					<p class="text-3xl sm:text-5xl font-bold text-neutral-800">1</p>
					<p class="text-lg text-neutral-400">Countrie(s)</p>
				</div>
			</div>
		</section>
		<section class="w-full py-20 px-8">
			<h2 class="text-5xl font-bold text-neutral-800 mb-6">Our Mission</h2>
			<p class="text-xl text-neutral-600 mb-4">
				We believe that powerful administration tools should be accessible to teams of all
				sizes. Our mission is to democratize enterprise-grade dashboard solutions, making
				them simple, secure, and affordable.
			</p>
			<p class="text-xl text-neutral-600">
				Since our founding in 2020, we've helped thousands of teams streamline their
				operations, enhance security, and scale their businesses with confidence.
			</p>
			<div class="space-y-5 mt-12">
				<p class="flex items-center gap-2 text-neutral-600">
					<Point />Enterprise-grade security for everyone
				</p>
				<p class="flex items-center gap-2 text-neutral-600">
					<Point />Intuitive design that scales
				</p>
				<p class="flex items-center gap-2 text-neutral-600">
					<Point />Transparent pricing, no surprises
				</p>
			</div>
		</section>
		<section class="w-full py-20 col-center bg-white px-3 sm:px-8">
			<div class="w-full center">
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
					<div
						class="w-full bg-neutral-50 border border-neutral-200 p-7 rounded-xl transition-all transform hover:-translate-y-3 hover hover:scale-102 ease-in-out hover:shadow-xs"
					>
						<div class="w-14 h-14 p-5 bg-black text-white center rounded-xl mb-5">
							<span class="text-white"
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
						</div>
						<h3 class="text-neutral-800 text-4xl font-bold mb-4">Security First</h3>
						<p>
							We prioritize the security of your data above all else, implementing
							industry-leading encryption and security protocols.
						</p>
					</div>
					<div
						class="w-full bg-neutral-50 border border-neutral-200 p-7 rounded-xl transition-all transform hover:-translate-y-3 hover hover:scale-102 ease-in-out hover:shadow-xs"
					>
						<div class="w-14 h-14 p-5 bg-black text-white center rounded-xl mb-5">
							<span class="text-white"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									width="30"
									height="30"
									viewBox="0 0 24 24"
								>
									<g fill="none" stroke="currentColor" stroke-width="1.5">
										<path d="M13 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z" />
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15 11a4 4 0 0 0 0-8"
										/>
										<path
											stroke-linejoin="round"
											d="M11 14H7a5 5 0 0 0-5 5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2a5 5 0 0 0-5-5Z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M17 14a5 5 0 0 1 5 5a2 2 0 0 1-2 2h-1.5"
										/>
									</g></svg
							></span>
						</div>
						<h3 class="text-neutral-800 text-4xl font-bold mb-4">User-Centric</h3>
						<p>
							Every feature we build is designed with our users in mind, ensuring
							intuitive experiences and powerful functionality.
						</p>
					</div>
					<div
						class="w-full bg-neutral-50 border border-neutral-200 p-7 rounded-xl transition-all transform hover:-translate-y-3 hover hover:scale-102 ease-in-out hover:shadow-xs"
					>
						<div class="w-14 h-14 p-5 bg-black text-white center rounded-xl mb-5">
							<span class="text-white"
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
						</div>
						<h3 class="text-neutral-800 text-4xl font-bold mb-4">Innovation</h3>
						<p>
							We continuously evolve our platform with cutting-edge technology to meet
							the changing needs of modern teams.
						</p>
					</div>
					<div
						class="w-full bg-neutral-50 border border-neutral-200 p-7 rounded-xl transition-all transform hover:-translate-y-3 hover hover:scale-102 ease-in-out hover:shadow-xs"
					>
						<div class="w-14 h-14 p-5 bg-black text-white center rounded-xl mb-5">
							<span class="text-white"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									width="30"
									height="30"
									viewBox="0 0 24 24"
								>
									<path
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
									/></svg
							></span>
						</div>
						<h3 class="text-neutral-800 text-4xl font-bold mb-4">Reliability</h3>
						<p>
							Our platform maintains 99.9&percnt; uptime, ensuring your operations run
							smoothly without interruption.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section class="w-full flex flex-col items-center py-14 space-y-5 px-3">
			<h3 class="text-5xl text-neutral-800 font-bold mb-3">Meet Our Team</h3>
			<p class="text-neutral-600 text-xl">The person behind ApexPanel</p>
			<div
				class="py-10 px-8 w-full sm:w-[70%] lg:w-[40%] bg-white border border-neutral-200 col-center rounded-xl"
			>
				<div class="h-20 w-20 center bg-black p-5 rounded-full mb-2">
					<p class="text-4xl font-bold text-white">AR</p>
				</div>
				<h3 class="text-2xl font-medium mb-3">Alamele Romeo</h3>
				<p class="text-neutral-700 font-medium mb-4">
					CEO & Founder, CTO, Head of Product, VP of Engineering
				</p>
				<p class="text-neutral-600">
					3 years in enterprise software, previously led product at major SaaS companies.
					Passionate about building tools that empower teams to work smarter and more
					securely.
				</p>
			</div>
		</section>
		<section class="col-center px-3 bg-black space-y-5 py-14 text-center">
			<h3 class="text-white text-3xl font-medium">Join Us on Our Journey</h3>
			<p class="text-white">Be part of the future of admin dashboard management</p>
			<div class="w-full flex items-center justify-center gap-5">
				<RouterLink
					to="/pricing"
					class="px-6 sm:px-8 py-4 bg-white text-neutral-800 rounded-lg hover:bg-neutral-200 shadow-lg"
				>
					Get Started For Free
				</RouterLink>
				<RouterLink
					to="/contact"
					class="px-6 sm:px-8 py-4 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 border-2 border-white shadow-lg"
				>
					Contact Us
				</RouterLink>
			</div>
		</section>
	</div>
</template>

<style></style>
