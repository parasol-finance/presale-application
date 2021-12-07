<template>
	<div v-if="shown" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div class="fixed top-0 bottom-0 z-30 left-0 right-0 pointer-events-none">
			<div class="pyro">
				<div class="before"></div>
				<div class="after"></div>
			</div>
		</div>
		<div class="flex items-center justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0">
			<div @click="shown = !shown" class="fixed inset-0 bg-black bg-opacity-30 transition-opacity" aria-hidden="true"></div>
			<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
			<div class="inline-block align-bottom bg-white rounded-xl px-12 py-8 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full">
				<div>
					<div class="mx-auto flex items-center justify-center h-24 w-24">
						<img alt="bouncing-logo" src="https://raw.githubusercontent.com/parasol-finance/white-paper/main/logo.png" />
					</div>
					<div class="mt-3 text-center sm:mt-5">
						<h3 class="text-2xl leading-6 font-medium text-gray-900" id="modal-title">
							Thank You!
						</h3>
						<div class="mt-2">
							<p class="text-gray-500">
								Congratulations you have just participated in our presale, and we thank you, do not hesitate now to follow us on social networks!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ThankYou",
	data() {
		return {
			shown: false
		}
	},
	mounted() {
		this.$root.$on('thanks', () => this.shown = !this.shown);
	}
}
</script>

<style scoped>

</style>
