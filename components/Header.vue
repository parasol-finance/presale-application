<template>
	<div class="flex justify-between items-center mb-12">
<!--		<div class="">-->
<!--			<h1 class="flex items-center font-semibold text-xl text-gray-200">-->
<!--				<img class="w-6 mr-3" src="https://parasol.finance/icon.png" alt="logo" />-->
<!--				&lt;!&ndash;				Welcome to Parasol Finance&ndash;&gt;-->
<!--				Parasol Finance-->
<!--			</h1>-->
<!--		</div>-->
		<div class="flex gap-3 items-center">
			<a href="https://parasol.finance/" class="text-base flex items-center text-gray-300 mr-4">
				<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
				Go to Home
			</a>
			<a href="https://docs.parasol.finance/" target="_blank" class="text-base flex items-center text-gray-300 mr-4">
				<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
				Read Documentation
			</a>
		</div>
		<div class="flex gap-3 items-center">
			<a href="https://coinmarketcap.com/currencies/parasol-finance/" target="_blank" class="flex items-center justify-center px-5 bg-gray-700 bg-opacity-30 py-2 text-sm font-medium rounded-full shadow-lg text-gray-200 opacity-100">
				<Logo class="h-5 mr-2" />
				<!--&asymp;-->
				1 PSOL &equals; $0.35
			</a>
			<ConnectWallet />
		</div>
	</div>
</template>

<script>
export default {
	name: "Header"
}
</script>

<style scoped>

</style>
