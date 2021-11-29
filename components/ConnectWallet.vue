<template>
	<button @click="connectWallet" class="flex items-center justify-center px-6 bg-pink-600 py-2 text-sm font-medium rounded-full opacity-100 shadow-lg text-gray-200 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-pink-600 hover:to-purple-500">
		<svg class="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" style="fill: white;" viewBox="0 0 24 24"><path d="M16 12h2v4h-2z"></path><path d="M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM5 5h13v2H5a1.001 1.001 0 0 1 0-2zm15 14H5.012C4.55 18.988 4 18.805 4 18V8.815c.314.113.647.185 1 .185h15v10z"></path></svg>
		<span v-if="this.$wallet.isConnected" :class="this.$wallet.isConnected ? 'truncate':''">{{ this.$wallet.publicKey }}</span>
		<span v-else>Connect Wallet</span>
	</button>
</template>

<script>
export default {
	name: "ConnectWallet",
	methods: {
		connectWallet: function () {
			if(!this.isPhantomAvailable()) {
				alert("For now Parasol Finance only support Phantom wallet! You can download it on phantom.app.");
				window.open("https://phantom.app/", "_blank");
			}
			if (this.$wallet.isConnected) {
				window.solana.disconnect();
			}
			else {
				window.solana.connect({onlyIfTrusted: false})
					.then(({publicKey}) => {
						this.$wallet.isConnected = window.solana.isConnected;
						this.$wallet.publicKey = publicKey.toString();
					})
					.catch(() => {
						// Handle connection failure as usual
					});
			}
		}
	}
}
</script>

<style scoped>
button span.truncate {
	white-space: nowrap;
	max-width: 100px;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
