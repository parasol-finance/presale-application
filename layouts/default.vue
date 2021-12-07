<template>
	<div id="app" class="h-screen flex">
		<div class="lg:hidden fixed top-0 bottom-0 z-30 left-0 right-0 bg-gray-800 flex items-center content-center flex-col text-center justify-center px-5">
			<h1 class="text-3xl mb-3">Please Use Desktop</h1>
			<p class="text-lg">Our application only accept phantom wallet for now so please use the desktop version.</p>
		</div>
		<JoinCommunityModal />
		<aside class="flex w-64 flex-col" style="width: 17rem;">
			<div class="flex flex-col text-center items-center px-4 py-10">
				<img class="w-28 mb-6" src="https://parasol.finance/icon.png" alt="logo" />
				<h1 class="text-xl font-semibold">Parasol Finance</h1>
				<p class="text-xs text-gray-300 mt-2">The First Community Governed IDO Platform on Solana.</p>
				<a href="https://app.parasol.finance" class="text-sm mt-2 flex items-center text-pink-500">
					<svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
					app.parasol.finance
				</a>
			</div>
			<NavMenu />
		</aside>
		<div class="flex-1">
			<main role="main" class="max-w-6xl mx-auto py-10">
				<Header />
				<Nuxt />
			</main>
		</div>
	</div>
</template>

<script>
export default {
	name: "default"
}
</script>

<style scoped>
#app {
	background-color: #161921;
}

aside {
	filter: drop-shadow(0 0 1rem hsl(228deg 18% 10%));
	background: hsl(228deg 18% 12%);
}
</style>
