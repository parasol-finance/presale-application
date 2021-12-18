<template>
	<div v-if="shown" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div class="flex items-center justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0">
			<div @click="shown = !shown" class="fixed inset-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm transition-opacity" aria-hidden="true"></div>
			<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
			<form @submit.prevent="subscribe" method="post" class="inline-block modal-body align-bottom rounded-xl px-6 py-6 text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:px-7 sm:py-8">
				<div @click="clean" class="modal-close cursor-pointer absolute right-5 top-5 z-50">
					<svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
						<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
					</svg>
				</div>
				<div>
					<div class="mx-auto flex items-center justify-center h-20 w-20">
						<img alt="bouncing-logo" src="https://raw.githubusercontent.com/parasol-finance/white-paper/main/logo.png" />
					</div>
					<div class="mt-3 text-center sm:mt-5">
						<h3 class="text-lg leading-6 font-medium text-gray-200" id="modal-title">
							Subscribe to Newsletter
						</h3>
						<div class="mt-2">
							<p class="text-sm text-gray-300">

								Get special offers, updates, airdrops, and once-in-a-lifetime deals.
							</p>
						</div>
					</div>
				</div>
				<div class="mt-3">
					<label for="email" class="block text-sm font-medium mb-2 text-gray-500">Email Address</label>
					<div class="mt-1">
						<input required v-model="email" type="email" name="email" id="email" class="shadow-sm focus:ring-indigo-500 text-gray-800 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com">
					</div>
				</div>
				<div class="mt-3">
					<button type="submit" :disabled="done" class="flex items-center justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-600 text-base font-medium text-white hover:bg-pink-700 sm:text-sm">
						<svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"></path></svg>
						<span v-if="!done">Subscribe to Newsletter</span>
						<span v-else>Thank you!</span>
					</button>
				</div>
				<p class="mt-2 text-xs text-center mt-5 text-gray-500" id="email-description">We'll not share your email with any third-parties.</p>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: "JoinCommunityModal",
	data() {
		return {
			shown: false,
			done: false,
			email: null
		}
	},
	mounted() {
		if (window.localStorage.getItem("newsletter") === null) {
			this.shown = true;
		}
		this.$root.$on('joinCommunity', () => this.shown = !this.shown);
	},
	methods: {
		clean: function () {
			window.localStorage.setItem("newsletter", "✓");
			this.shown = !this.shown;
		},
		subscribe: async function () {
			// const response = await this.$axios.$post('https://parasol-finance.azurewebsites.net/newsletter', {
			// 	email: this.email
			// });
			this.done = true;
		}
	}
}
</script>

<style scoped>
.modal-body
{
	background: hsl(228deg 18% 12%);
	box-shadow: 0 0 2.1rem #00000026;
}
</style>
