<template>
	<section class="mt-20 max-w-3xl mx-auto">
		<!--		<div class="p-2 mb-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg sm:p-3">-->
		<!--			<div class="flex items-center justify-between flex-wrap">-->
		<!--				<div class="w-0 flex-1 flex items-center">-->
		<!--					<span class="flex p-2 rounded-lg bg-purple-400">-->
		<!--						<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>-->
		<!--					</span>-->
		<!--					<p class="ml-3 font-medium text-white truncate">-->
		<!--						<span>-->
		<!--							You should use the same wallet that you put on the whitelist before!-->
		<!--						</span>-->
		<!--					</p>-->
		<!--				</div>-->
		<!--			</div>-->
		<!--		</div>-->
		<article
			:class="`py-10 px-5 sm:rounded-lg relative ${this.$wallet.isConnected ? 'shadow' : ''}`">
			<div v-if="!this.$wallet.isConnected"
				 class="backdrop-filter z-30 backdrop-blur-lg px-10 text-center flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full">
				<h1 class="text-3xl mb-3 font-semibold">Connection Required</h1>
				<p class="mb-5">Your wallet is currently not connected and we need it to authenticate you.</p>
				<ConnectWallet/>
			</div>
			<div class="px-6">
				<h1 class="text-4xl mb-2 font-extrabold">
<!--					<span class="text-white">Lookup</span>-->
					<span
						class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 leading-normal whitespace-nowrap inline-block">
						Parasol Finance
					</span>
					<span class="text-white">Participation</span>
				</h1>
				<p class="text-lg font-semiboldt mb-3">
					The First Community Governed IDO Platform on Solana.
				</p>
				<p class="text-gray-200">
					In this page, you can view the purchases you have made in our private and public presales.
				</p>
				<div>
					<div class="flex justify-start gap-x-12 my-10 mr-5">
						<div class="flex items-center">
							<div class="mr-4">
								<img alt="USDC" class="w-10"
									 src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png"/>
							</div>
							<div>
								<p class="text-gray-300 text-sm">USDC Amount</p>
								<h4 class="text-xl whitespace-nowrap">{{ this.totalUSDC.toFixed(2) }} USDC</h4>
							</div>
						</div>
						<div class="flex items-center">
							<div class="mr-4">
								<img alt="PSOL" class="w-10" src="https://parasol.finance/icon.png"/>
							</div>
							<div>
								<p class="text-gray-300 text-sm">Bought Tokens</p>
								<h4 class="text-xl whitespace-nowrap">{{ (this.totalUSDC / this.tokenPrice()).toFixed(0) }} PSOL</h4>
							</div>
						</div>
					</div>
				</div>
<!--				<div v-if="isWhiteListed()" class="mb-6 text-sm text-yellow-300">-->
<!--					<strong>⚠️ Warning: </strong>You participated in private sale, the PSOL count can be not accurate.-->
<!--				</div>-->
				<table class="min-w-full divide-y divide-gray-800">
					<thead class="">
					<tr>
						<th scope="col"
							class="pr-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Operation
						</th>
						<th scope="col"
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							USDC Amount
						</th>
						<th scope="col"
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							PSOL Count
						</th>
						<th scope="col"
							class="pl-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
							Status
						</th>
					</tr>
					</thead>
					<tbody v-if="transactions && transactions.length > 0" class="divide-y divide-gray-800">
					<tr v-for="transaction in this.transactions" :key="transaction.signature">
						<td class="pr-6 py-4 whitespace-nowrap text-sm text-gray-200">
							Deposit USDC
<!--							<a href="" class="text-pink-500 text-truncate">-->
<!--								2GPJzQMkNtSHmrrPFMaABEKyWU2heZngmp8sHLciva5nQYNkvQeWk5K7AoGVN3bbqBFG91JdBGzxYEvM747qXHtF-->
<!--							</a>-->
						</td>
						<td class="px-6 py-4 inline-flex items-center whitespace-nowrap">
							<div class="inline-flex items-center">
								{{ transaction.amount }}
								<span class="font-sans ml-2 inline-flex items-center font-medium text-gray-400">
									<img alt="USDC" class="w-4 mr-1" src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png" />
									USDC
								</span>
							</div>
						</td>
						<td class="px-6 py-4whitespace-nowrap">
							<div class="inline-flex items-center">
								{{ (transaction.amount / tokenPrice()).toFixed(0) }}
								<span class="font-sans ml-2 inline-flex items-center font-medium text-gray-400">
									<img alt="PSOL" class="w-4 mr-1" src="https://raw.githubusercontent.com/parasol-finance/white-paper/main/logo.png" />
									PSOL
								</span>
							</div>
						</td>
						<td class="pl-6 py-4 whitespace-nowrap text-right text-sm font-medium">
							<a :href="`https://explorer.solana.com/tx/${transaction.signature}`" target="_blank" class="text-pink-500 hover:text-pink-300">
								View TX
							</a>
						</td>
					</tr>
					</tbody>
					<tfoot v-else>
						<tr>
							<td v-if="loading" colspan="4" class="text-xs text-center text-gray-500 py-5">Loading transactions...</td>
							<td v-else colspan="4" class="text-xs text-center text-gray-500 py-5">
								No transactions for now.
								<NuxtLink to="/presale" class="flex items-center justify-center content-center w-64 px-5 bg-gray-700 bg-opacity-30 py-2 text-sm font-medium rounded-full shadow-lg text-gray-200 opacity-100 mt-5 mx-auto">
									<Logo class="h-4 mr-2" />
									Participate in Presale
								</NuxtLink>
							</td>
						</tr>
					</tfoot>
				</table>
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
			transactions: [],
			loading: false,
			totalUSDC: 0,
			totalPSOL: 0,
		}
	},
	async fetch() {
		this.participants = require('assets/participants.json');
		this.loading = true;
		this.transactions = await this.$axios.$get(`https://parasol-finance.azurewebsites.net/queries/deposits/${this.$wallet.publicKey}`);
		this.loading = false;
		this.totalUSDC = this.transactions.map(x => x.amount).reduce((a, b) => a + b, 0);
	},
	methods: {
		updateQuantity() {
			this.psolQuantity = Math.round(this.amount / 0.07);
		},
		isWhiteListed() {
			return this.$wallet.isConnected && this.participants.includes(this.$wallet.publicKey)
		},
		tokenPrice() {
			return this.isWhiteListed() ? 0.07 : 0.21;
		}
	}
}
</script>

<style scoped>
article.shadow {
	filter: drop-shadow(0 0 0.5rem hsl(228deg 18% 10%));
	background: hsl(228deg 18% 12%);
}
</style>
