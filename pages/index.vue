<template>
	<div class="mt-48 text-center">
		<h1 class="text-4xl tracking-tight font-extrabold text-gray-200 sm:text-5xl md:text-6xl">
			<span class="block xl:inline">Welcome to</span>
			<span class="xl:inline text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 leading-normal whitespace-nowrap md:block">
				Parasol Finance
			</span>

			<!--			<span class="block text-indigo-600 xl:inline">online business</span>-->
		</h1>
		<p class="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:text-xl md:max-w-3xl">
			Parasol Finance is the first-ever community governed IDO platform built on Solana with the needs of both projects and investors alike.
		</p>
		<div class="mt-10 flex gap-5 justify-center items-center">
			<div class="rounded-md shadow">
				<NuxtLink to="/presale" class="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white text-white bg-gradient-to-r from-purple-500 to-pink-600 hover:from-pink-600 hover:to-purple-500 md:py-4 md:text-lg md:px-10">
					<svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
					Participate to the Presale
				</NuxtLink>
			</div>
			<div class="rounded-md shadow">
				<a href="https://docs.parasol.finance/" target="_blank" class="w-full flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-full text-gray-200 hover:bg-white hover:text-gray-800 md:py-4 md:text-lg md:px-10">
					<svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
					Read the Documentation
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>
