<template>
	<section class="mt-20 px-6">
		<article class="p-10 max-w-xl mx-auto sm:rounded-lg flex-flex-col-items-center">
			<div v-if="!isConnected" class="backdrop-filter backdrop-blur-lg px-10 text-center flex flex-col justify-center items-center absolute top-0 w-full h-full">
				<h1 class="text-3xl mb-3 font-semibold">Connection Required</h1>
				<p class="mb-5">Your wallet is currently not connected and we need it to authenticate you.</p>
				<ConnectWallet />
			</div>
			<h1 class="text-4xl mb-2 font-extrabold">
				<span
					class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 leading-normal whitespace-nowrap inline-block">
					Parasol Finance
				</span>
				<span class="text-white">Airdrop</span>
				<!--						Parasol Finance Presale-->
			</h1>
			<p class="text-lg font-semiboldt mb-3">
				The First Community Governed IDO Platform on Solana.
			</p>
			<p class="text-gray-200 mb-5">
				Parasol Finance is the first-ever community governed IDO platform built on Solana with the needs
				of both projects and investors alike.
			</p>
			<p class="text-lg font-semibold mb-3">Steps to follow to participate to the airdrop:</p>
			<ol class="list-decimal pl-4 mb-5">
				<li>Login to Telegram using the button below 👇</li>
				<li>Follow our channel <a class="text-pink-500" href="https://t.me/parasolfinance">@parasolfinance</a>.</li>
			</ol>
			<div class="flex flex-col items-center">
				<vue-telegram-login
					mode="callback"
					telegram-login="ParasolFinanceBot"
					:userpic="false"
					@callback="handleTelegramConnection"/>
				<button v-if="isTelegramConnected" @click="confirm" class="flex items-center justify-center text-xl mt-5 px-6 bg-pink-600 py-2 text-sm font-medium rounded-full opacity-100 shadow-lg text-gray-200 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-pink-600 hover:to-purple-500">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
					</svg>
					Confirm Participation
				</button>
			</div>
		</article>
	</section>
</template>

<script>
export default {
	name: "airdrop",
	data() {
		return {
			isTelegramConnected: false,
			user: null
		}
	},
	methods: {
		handleTelegramConnection: function (user) {
			this.isTelegramConnected = true;
			this.user = user;
		},
		confirm: function () {
			alert('lol');
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
