import path from 'path'
import fs from 'fs'

export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	ssr: false,

	generate: {
		dir: 'public'
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Parasol Finance',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0' },
			{ name: 'format-detection', content: 'telephone=no' },
			{name: 'twitter:image:src', content: 'https://app.parasol.finance/preview.png'},
			{name: 'twitter:card', content: 'summary_large_image'},
			{name: 'og:image', content: 'https://app.parasol.finance/preview.png'},
			{name: 'theme-color', content: '#161921'},
			{name: 'msapplication-navbutton-color', content: '#161921'},
			{name: 'apple-mobile-web-app-status-bar-style', content: '#161921'},
			{name: 'apple-mobile-web-app-capable', content: 'yes'},
			{ hid: 'description', name: 'description', content: 'Parasol Finance is the first-ever community governed IDO platform built on Solana with the needs of both projects and investors alike.' },
			{ hid: 'keywords', name: 'keywords', content: 'parasol,parasol finance,PSOL,defi,investment,farming,staking,solana staking,solana,sol,crypto,cryptocurrency,bitcoin,ethereum,sol price,sol price prediction,solana price,ethereum killer,dogecoin,doge' }
		],
		link: [
			{ rel: 'icon', type: 'image/svg', href: '/favicon.svg' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@/assets/scss/app.scss'
	],

	tailwindcss: {
		viewer: false
	},

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'@/plugins/wallet',
		'@/plugins/countdown',
		'@/plugins/maska',
		'@/plugins/telegram-login',
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		'@nuxtjs/pwa',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/robots',
	],

	pwa: {
		twitterCard: 'summary_large_image',
		twitterCreator: '@parasol_finance',
		author: 'Parasol Finance',
		manifest: {
			name: 'Parasol Finance',
			lang: 'en',
			background_color: "#161921",
			theme_color: "#161921",
			useWebmanifestExtension: false
		}
	},

	robots: {
		UserAgent: '*',
		Disallow: '/'
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	},

	server: {
		https: process.env.NODE_ENV === 'production' ? {} : {
			key: fs.readFileSync(path.resolve(__dirname, 'ssl/localhost.key')),
			cert: fs.readFileSync(path.resolve(__dirname, 'ssl/localhost.crt'))
		}
	}
}
