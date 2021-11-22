export default {
	// Target: https://go.nuxtjs.dev/config-target
	// target: 'static',

	ssr: true,

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

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
	],

	extractCSS: true,

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
