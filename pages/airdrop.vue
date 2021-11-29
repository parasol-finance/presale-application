<template>
	<section class="mt-20 px-6">
		<article class="p-10 max-w-xl mx-auto sm:rounded-lg">
			<h1 class="text-4xl mb-2 text-center font-extrabold">
				<span
					class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 leading-normal whitespace-nowrap inline-block">
					Parasol Finance
				</span>
				<span class="text-white">Airdrop</span>
				<!--						Parasol Finance Presale-->
			</h1>
			<p class="text-lg text-center font-semiboldt mb-3">
				The First Community Governed IDO Platform on Solana.
			</p>
			<p class="text-gray-200 mb-5">
				Parasol Finance is the first-ever community governed IDO platform built on Solana with the needs
				of both projects and investors alike.
			</p>
			<vue-telegram-login
				mode="callback"
				telegram-login="ParasolFinanceBot"
				@callback="test"/>
		</article>
	</section>
</template>

<script>
export default {
	name: "airdrop",
	methods: {
		test: function (user) {
			console.log(user)
		}
	}
}
</script>

<style scoped>
article
{
	/*filter: drop-shadow(0 0 1rem hsl(228deg 18% 10%));*/
	/*background: hsl(228deg 18% 12%);*/
	filter: drop-shadow(0 0 0.5rem hsl(228deg 18% 10%));
	background: hsl(228deg 18% 12%);
}
</style>
