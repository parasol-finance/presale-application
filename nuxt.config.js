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
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'format-detection', content: 'telephone=no' }
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
