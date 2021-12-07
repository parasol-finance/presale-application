<template>
	<section class="mt-20">
<!--		<div class="p-2 mb-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg sm:p-3">-->
<!--			<div class="flex items-center justify-between flex-wrap">-->
<!--				<div class="w-0 flex-1 flex items-center">-->
<!--          <span class="flex p-2 rounded-lg bg-purple-400">-->
<!--            &lt;!&ndash; Heroicon name: outline/speakerphone &ndash;&gt;-->
<!--            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />-->
<!--            </svg>-->
<!--          </span>-->
<!--					<p class="ml-3 font-medium text-white truncate">-->
<!--            <span class="md:hidden">-->
<!--              We announced a new product!-->
<!--            </span>-->
<!--						<span class="hidden md:inline">-->
<!--              Big news! We're excited to announce a brand new product.-->
<!--            </span>-->
<!--					</p>-->
<!--				</div>-->
<!--				<div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">-->
<!--					<a href="#" class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50">-->
<!--						Learn more-->
<!--					</a>-->
<!--				</div>-->
<!--				<div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">-->
<!--					<button type="button" class="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white">-->
<!--						<span class="sr-only">Dismiss</span>-->
<!--						&lt;!&ndash; Heroicon name: outline/x &ndash;&gt;-->
<!--						<svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
<!--							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />-->
<!--						</svg>-->
<!--					</button>-->
<!--				</div>-->
<!--			</div>-->
<!--		</div>-->
		<article :class="`py-10 px-5 sm:rounded-lg relative ${this.$wallet.isConnected ? 'shadow' : ''}`">
			<div v-if="!this.$wallet.isConnected" class="backdrop-filter z-50 backdrop-blur-lg px-10 text-center flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full">
				<h1 class="text-3xl mb-3 font-semibold">Connection Required</h1>
				<p class="mb-5">Your wallet is currently not connected and we need it to authenticate you.</p>
				<ConnectWallet />
			</div>
			<div class="grid grid-cols-12 gap-3">
				<div class="col-span-8 px-6">
					<h1 class="text-4xl mb-2 font-extrabold">
						<span
							class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 leading-normal whitespace-nowrap inline-block">
							Parasol Finance
						</span>
						<span class="text-white">// Presale</span>
						<!--						Parasol Finance Presale-->
					</h1>
					<p class="text-lg font-semiboldt mb-3">
						The First Community Governed IDO Platform on Solana.
					</p>
					<p class="text-gray-200">
						Parasol Finance is the first-ever community governed IDO platform built on Solana with the needs
						of both projects and investors alike.
					</p>
					<div class="flex justify-between my-10 mr-5">
						<div class="flex items-center">
							<div class="mr-4">
								<img alt="USDC" class="w-10" src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png" />
							</div>
							<div>
								<p class="text-gray-300 text-sm">Hard Cap</p>
								<h4 class="text-xl whitespace-nowrap">210,000 USDC</h4>
							</div>
						</div>
						<div class="flex items-center">
							<div class="mr-4">
								<img alt="USDC" class="w-10" src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png" />
							</div>
							<div>
								<p class="text-gray-300 text-sm">Token Price</p>
								<h4 class="text-xl whitespace-nowrap">0.21 USDC</h4>
							</div>
						</div>
						<div class="flex items-center">
							<div class="mr-4">
								<img alt="PSOL" class="w-10" src="https://parasol.finance/icon.png" />
							</div>
							<div>
								<p class="text-gray-300 text-sm">Available Tokens</p>
								<h4 class="text-xl whitespace-nowrap">100,00 PSOL</h4>
							</div>
						</div>
					</div>
					<p class="text-gray-300 text-sm mb-3">Amount to Buy (in USDC)</p>
					<form @submit.prevent="participate" class="flex gap-2 w-100 mb-10 items-stretch">
						<div class="relative flex items-stretch flex-1">
							<input type="number" v-model="amount" required min="10" max="5000" v-maska="'####'" value="0" name="search" id="search" class="bg-gray-900 bg-opacity-40 border-gray-800 block w-full pr-12 rounded">
							<div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
								<kbd class="inline-flex items-center rounded px-2 text-sm font-sans font-medium text-gray-400">
									<img alt="USDC" class="w-4 mr-1" src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png" />
									USDC
								</kbd>
							</div>
						</div>
						<button type="submit" class="flex items-center px-7 focus:outline-none focus:ring-2 focus:ring-offset-2 text-xs font-medium rounded shadow-sm bg-gradient-to-r from-purple-500 to-pink-600 text-white">
							Participate to Presale
						</button>
					</form>
					<h3 class="text-gray-200 text-xl mb-3">Conditions of Participation:</h3>
					<p class="text-gray-400 text-sm mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

<!--					<p class="text-center text-gray-200 mb-3 font-bold">-->
<!--						Countdown before the opening of the public presale:-->
<!--					</p>-->
<!--					<h3 class="mb-2 mx-20 text-center">-->
<!--						<vue-countdown tag="div" class="flex gap-3 justify-around" :time="time" :interval="100" v-slot="{ days, hours, minutes, seconds, milliseconds }">-->
<!--							<div class="flex flex-col">-->
<!--								<span class="text-6xl font-extrabold">{{ days }}</span>-->
<!--								<span class="text-gray-400">Days</span>-->
<!--							</div>-->
<!--							<div class="text-5xl pt-3 text-gray-200">:</div>-->
<!--							<div class="flex flex-col">-->
<!--								<span class="text-6xl font-extrabold">{{ hours }}</span>-->
<!--								<span class="text-gray-400">Hours</span>-->
<!--							</div>-->
<!--							<div class="text-5xl pt-3 text-gray-200">:</div>-->
<!--							<div class="flex flex-col">-->
<!--								<span class="text-6xl font-extrabold">{{ minutes }}</span>-->
<!--								<span class="text-gray-400">Minutes</span>-->
<!--							</div>-->
<!--							<div class="text-5xl pt-3 text-gray-200">:</div>-->
<!--							<div class="flex flex-col">-->
<!--								<span class="text-6xl font-extrabold">{{ seconds }}</span>-->
<!--								<span class="text-gray-400">Seconds</span>-->
<!--							</div>-->
<!--						</vue-countdown>-->
<!--					</h3>-->
				</div>
				<div class="col-span-4">
					<div class="flow-root">
						<ul role="list" class="-mb-8">
							<li>
								<div class="relative pb-8">
									<span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-500"
										  aria-hidden="true"></span>
									<div class="relative flex space-x-3">
										<div>
											<span class="h-8 w-8 rounded-full bg-pink-500 flex items-center justify-center">
<!--											  </svg>-->
												<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
												</svg>
											</span>
										</div>
										<div class="min-w-0 flex-1 flex justify-between space-x-4">
											<div>
												<h3 class="text-base text-gray-200">Preparation</h3>
												<p class="text-gray-400 text-sm">
													This project is in preparation phase. Stay tuned.
												</p>
											</div>
											<div class="text-right text-sm whitespace-nowrap text-gray-500">
												<time datetime="2020-09-20">Now</time>
											</div>
										</div>
									</div>
								</div>
							</li>

							<li>
								<div class="relative pb-8">
									<span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-500"
										  aria-hidden="true"></span>
									<div class="relative flex space-x-4">
										<div>
											<span class="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
												<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
												</svg>
											</span>
										</div>
										<div class="min-w-0 flex-1 flex justify-between space-x-4">
											<div>
												<h3 class="text-base text-gray-200">Presale Opening</h3>
												<p class="text-gray-400 text-sm">
													Everybody can order some $PSOL in SOL or USDC.
												</p>
											</div>
											<div class="text-right text-sm whitespace-nowrap text-gray-500">
												<time datetime="2020-09-22">Dec 12</time>
											</div>
										</div>
									</div>
								</div>
							</li>

							<li>
								<div class="relative pb-8">
									<span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-500" aria-hidden="true"></span>
									<div class="relative flex space-x-4">
										<div>
											<span class="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
											  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
											  </svg>
											</span>
										</div>
										<div class="min-w-0 flex-1 flex justify-between space-x-4">
											<div>
												<h3 class="text-base text-gray-200">Token Listing</h3>
												<p class="text-gray-400 text-sm">
													Listing on different websites like coinmarketcap.com
												</p>
											</div>
											<div class="text-right text-sm whitespace-nowrap text-gray-500">
												<time datetime="2020-09-30">Jan 7, 2022</time>
											</div>
										</div>
									</div>
								</div>
							</li>

							<li>
								<div class="relative pb-8">
									<div class="relative flex space-x-4">
										<div>
											<span class="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
											  <svg class="h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
												<path fill-rule="evenodd"
													  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													  clip-rule="evenodd"/>
											  </svg>
											</span>
										</div>
										<div class="min-w-0 flex-1 flex justify-between space-x-4">
											<div>
												<h3 class="text-base text-gray-200">Launching Parasol Finance</h3>
												<p class="text-gray-400 text-sm">
													Parasol Finance will be available for everyone.
												</p>
											</div>
											<div class="text-right text-sm whitespace-nowrap text-gray-500">
												<time datetime="2020-10-04">Mar 1, 2022</time>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div class="ml-4">
						<h3 class="text-gray-500 text-xl mt-10 mb-3">Tokens Drop / Claim</h3>
						<p class="text-gray-500 text-sm mb-5">Once the presale is finished we will send the PSOL tokens to all the addresses that participated.</p>
					</div>
				</div>
			</div>
		</article>
	</section>
</template>

<script>
export default {
	name: "presale",
	data() {
		const now = new Date();
		const newYear = new Date("2021-12-12");

		return {
			amount: 0,
			time: newYear - now,
		};
	},
	methods: {
		participate: function () {
			this.participateToPresale(this.amount);
		}
	}
}
</script>

<style scoped>
article.shadow
{
	/*filter: drop-shadow(0 0 1rem hsl(228deg 18% 10%));*/
	/*background: hsl(228deg 18% 12%);*/
	filter: drop-shadow(0 0 0.5rem hsl(228deg 18% 10%));
	background: hsl(228deg 18% 12%);
}
</style>
