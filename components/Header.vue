<template>
	<div class="flex justify-between items-center mb-12">
		<div class="">
			<h1 class="flex items-center font-semibold text-xl text-gray-200">
				<img class="w-6 mr-3" src="https://parasol.finance/icon.png" alt="logo" />
				<!--				Welcome to Parasol Finance-->
				Parasol Finance
			</h1>
		</div>
		<div class="flex gap-3 items-center">
			<a href="https://parasol.finance/" class="text-base text-gray-300 mr-4">
				Go to Home
			</a>
			<a href="https://docs.parasol.finance/" target="_blank" class="text-base text-gray-300 mr-4">
				Read Documentation
			</a>
			<button class="flex items-center justify-center px-5 bg-gray-700 bg-opacity-30 py-2 text-sm font-medium rounded-full shadow-lg text-white">
				<Logo class="h-5 mr-2" />
				1 PSOL &asymp; $7.21
			</button>
			<button class="flex items-center justify-center px-6 bg-pink-600 py-2 text-sm font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-purple-500 to-pink-600 hover:from-pink-600 hover:to-purple-500">
				<svg class="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" style="fill: white;" viewBox="0 0 24 24"><path d="M16 12h2v4h-2z"></path><path d="M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM5 5h13v2H5a1.001 1.001 0 0 1 0-2zm15 14H5.012C4.55 18.988 4 18.805 4 18V8.815c.314.113.647.185 1 .185h15v10z"></path></svg>
				<!--			<svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>-->
				Connect Wallet
			</button>
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
