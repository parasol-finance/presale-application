// const web3 = require('@solana/web3.js');

// const connection = new web3.Connection(web3.clusterApiUrl("mainnet-beta"));

// import Wallet from "@project-serum/sol-wallet-adapter";
import {
	Connection,
	SystemProgram,
	Transaction,
	PublicKey,
	TransactionInstruction
} from "@solana/web3.js";
// import { deserialize, serialize } from "borsh";

const cluster = "https://api.mainnet-beta.solana.com";
const connection = new Connection(cluster, "confirmed");

// if ("solana" in window) {
// 	const provider = window.solana;
// 	if (provider.isPhantom) {
// 		window.solana.connect({ onlyIfTrusted: true });
// 	}
// }

import Vue from 'vue'
Vue.mixin({
	methods:{
		isPhantomAvailable() {
			if (!"solana" in window) return false;
			return window.solana.isPhantom;

			// if ("solana" in window) {
			// 	const provider = window.solana;
			// 	if (provider.isPhantom) {
			// 		window.solana.connect({ onlyIfTrusted: true });
			// 	}
			// }
		},
		isConnected() {
			return window.solana.isConnected;
		},
		// initWallet(onlyIfTrusted = true){
		// 	if ("solana" in window) {
		// 		const provider = window.solana;
		// 		if (provider.isPhantom) {
		// 			window.solana.connect({ onlyIfTrusted: false });
		// 		}
		// 		// alert("Phantom wallet is not installed in your browser.");
		// 		// window.open("https://phantom.app/", "_blank");
		// 	}
		// },
	}
})

// window.open("https://phantom.app/", "_blank");

// const wallet = new Wallet("https://www.sollet.io", cluster);
// const programId= new PublicKey(
// 	"286rapsUbvDe1ZgBeNhp37YHvEPwWPTr4Bkce4oMpUKT"
// );
