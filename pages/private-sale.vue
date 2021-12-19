<template>
	<section class="mt-20 max-w-3xl mx-auto">
		<div class="p-2 mb-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg sm:p-3">
			<div class="flex items-center justify-between flex-wrap">
				<div class="w-0 flex-1 flex items-center">
					<span class="flex p-2 rounded-lg bg-purple-400">
						<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
					</span>
					<p class="ml-3 font-medium text-white truncate">
						<span>
							You should use the same wallet that you put on the whitelist before!
						</span>
					</p>
				</div>
			</div>
		</div>
		<article :class="`py-10 px-5 sm:rounded-lg relative ${this.$wallet.isConnected && isWhiteListed() ? 'shadow' : ''}`">
			<div v-if="!this.$wallet.isConnected"
				 class="backdrop-filter z-30 backdrop-blur-lg px-10 text-center flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full">
				<h1 class="text-3xl mb-3 font-semibold">Connection Required</h1>
				<p class="mb-5">Your wallet is currently not connected and we need it to authenticate you.</p>
				<ConnectWallet/>
			</div>
			<div v-if="!isWhiteListed()"
				 class="backdrop-filter z-50 backdrop-blur-lg px-10 text-center flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full">
				<svg class="w-20 h-20 text-pink-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
				<h1 class="text-3xl mb-3 font-semibold">Forbidden Access</h1>
				<p class="mb-5">Unfortunately you are not registered in the whitelsit.</p>
			</div>
			<div class="px-6">
				<h1 class="text-4xl mb-2 font-extrabold">
						<span
							class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 leading-normal whitespace-nowrap inline-block">
							Parasol Finance
						</span>
					<span class="text-white">// Private Sale</span>
					<!--						Parasol Finance Presale-->
				</h1>
				<p class="text-lg font-semiboldt mb-3">
					The First Community Governed IDO Platform on Solana.
				</p>
				<p class="text-gray-200">
					Parasol Finance is the first-ever community governed IDO platform built on Solana with the needs
					of both projects and investors alike.
				</p>
				<div>
					<div class="flex justify-between my-10 mr-5">
						<div class="flex items-center">
							<div class="mr-4">
								<img alt="USDC" class="w-10"
									 src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png"/>
							</div>
							<div>
								<p class="text-gray-300 text-sm">Hard Cap</p>
								<h4 class="text-xl whitespace-nowrap">308,700 USDC</h4>
							</div>
						</div>
						<div class="flex items-center">
							<div class="mr-4">
								<img alt="USDC" class="w-10"
									 src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png"/>
							</div>
							<div>
								<p class="text-gray-300 text-sm">Token Price</p>
								<h4 class="text-xl whitespace-nowrap">0.07 USDC</h4>
							</div>
						</div>
						<div class="flex items-center">
							<div class="mr-4">
								<img alt="PSOL" class="w-10" src="https://parasol.finance/icon.png"/>
							</div>
							<div>
								<p class="text-gray-300 text-sm">Available Tokens</p>
								<h4 class="text-xl whitespace-nowrap">4,410,000 PSOL</h4>
							</div>
						</div>
					</div>
					<p class="text-gray-300 text-sm mb-3">Amount to Buy (in USDC)</p>
					<form class="flex gap-2 w-100 mb-10 items-stretch" @submit.prevent="participate">
						<div class="relative flex items-stretch flex-1">
							<input id="search" v-model="amount" @keyup="updateQuantity" v-maska="'####'"
								   class="bg-gray-900 bg-opacity-40 border-gray-800 block w-full pr-12 rounded"
								   min="10"
								   name="search" required type="number"
								   value="0">
							<div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
								<kbd
									class="inline-flex items-center rounded px-2 text-sm font-sans font-medium text-gray-400">
									<img alt="USDC" class="w-4 mr-1"
										 src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png"/>
									USDC
								</kbd>
							</div>
						</div>
						<div class="flex items-center">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
							</svg>
						</div>
						<div class="relative flex items-stretch flex-1">
							<input type="number" v-model="psolQuantity" readonly value="0" class="bg-gray-900 bg-opacity-40 border-gray-800 focus:ring-0 focus:outline-0 focus:border-0 block w-full pr-12 rounded">
							<div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
								<kbd class="inline-flex items-center rounded px-2 text-sm font-sans font-medium text-gray-400">
									<img alt="PSOL" class="w-4 mr-1" src="https://raw.githubusercontent.com/parasol-finance/white-paper/main/logo.png" />
									PSOL
								</kbd>
							</div>
						</div>
						<button
							class="flex items-center px-7 focus:outline-none focus:ring-2 focus:ring-offset-2 text-xs font-medium rounded shadow-sm bg-gradient-to-r from-purple-500 to-pink-600 text-white"
							type="submit">
							Participate in Private Sale
						</button>
					</form>
				</div>
				<h3 class="text-gray-200 text-xl mb-3">Conditions of Participation:</h3>
				<p class="text-gray-400 text-sm mb-5">Minimum deposit: 10$. You can read all our
					conditions of participations in our documentation at <a class="text-pink-500" href="https://docs.parasol.finance/parasol-presale/private-presale-phase-1-1-1" target="_blank">docs.parasol.finance</a>.
				</p>
			</div>
		</article>
	</section>
</template>

<script>
export default {
	name: "presale",
	data() {
		return {
			participants: [],
			now: new Date(),
			presaleDate: new Date("Tue, 12 Dec 2021 21:00:21 GMT"),
			presaleTimeOffset: 0,
			amount: 0,
			psolQuantity: 0,
		}
	},
	mounted() {
		this.updateCountdown();
		this.participants = require('assets/participants.json');
	},
	methods: {
		updateCountdown: function () {
			this.presaleTimeOffset = this.presaleDate - new Date();
		},
		participate: function () {
			this.orderAmountOfTokens(this.amount);
		},
		isWhiteListed: function () {
			return this.$wallet.isConnected && this.participants.includes(this.$wallet.publicKey)
		},
		updateQuantity: function () {
			this.psolQuantity = Math.round(this.amount / 0.07);
		}
	}
}
</script>

<style scoped>
article.shadow {
	/*filter: drop-shadow(0 0 1rem hsl(228deg 18% 10%));*/
	/*background: hsl(228deg 18% 12%);*/
	filter: drop-shadow(0 0 0.5rem hsl(228deg 18% 10%));
	background: hsl(228deg 18% 12%);
}
</style>
