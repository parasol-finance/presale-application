<template>
	<div id="app" class="h-screen flex">
		<aside class="flex w-64 flex-col">
<!--			<div class="flex items-center flex-shrink-0 p-6 mb-3">-->
<!--				<img class="w-7 mr-3" src="https://parasol.finance/icon.png" alt="logo" />-->
<!--				<h1 class="text-xl font-semibold">Parasol Finance</h1>-->
<!--			</div>-->
			<div class="flex flex-col text-center items-center px-4 py-10">
				<img class="w-28 mb-6" src="https://parasol.finance/icon.png" alt="logo" />
				<h1 class="text-xl font-semibold">Parasol Finance</h1>
				<p class="text-xs text-gray-300 mt-2">The First Community Governed IDO Platform on Solana.</p>
				<a href="" class="text-sm mt-2 text-pink-500">app.parasol.finance</a>
			</div>
			<nav class="flex flex-col gap-3 relative flex-1 px-4">
				<NuxtLink to="/" class="flex items-center bg-pink-600 text-gray-200 text-sm px-3 py-3 rounded-lg">
					<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
					Overview
				</NuxtLink>
				<NuxtLink to="/" class="flex items-center hover:bg-pink-600 text-gray-300 text-sm px-3 py-3 rounded-lg">
					<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
					Participate to Presale
				</NuxtLink>
				<NuxtLink to="/" class="flex items-center text-gray-300 text-sm px-3 py-3 rounded-lg">
					<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
					Lottery Airdrop
				</NuxtLink>
				<NuxtLink to="/" class="flex items-center text-gray-300 text-sm px-3 py-3 rounded-lg">
					<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
					Join the Community
				</NuxtLink>
				<NuxtLink to="/" class="flex items-center justify-center bg-pink-600 mt-auto mb-6 bottom-2 text-white text-sm p-3 rounded-lg">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
					</svg>
<!--					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />-->
<!--					</svg>-->
					Submit a Project
				</NuxtLink>
			</nav>
		</aside>
		<div class="flex-1"></div>
	</div>
	<!--	<div id="app">-->
	<!--		<header class="" style="background-color: #1A1D25">-->
	<!--			<div class="px-2 sm:px-4 lg:px-8">-->
	<!--				<div class="relative flex items-center justify-between h-16">-->
	<!--					<div class="flex items-center px-2 lg:px-0">-->
	<!--						<div class="flex-shrink-0">-->
	<!--							<img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">-->
	<!--							<img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow">-->
	<!--						</div>-->
	<!--						<div class="hidden lg:block lg:ml-6">-->
	<!--							<div class="flex space-x-4">-->
	<!--								&lt;!&ndash; Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" &ndash;&gt;-->
	<!--								<a href="#" class="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>-->
	<!--								<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>-->
	<!--								<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>-->
	<!--								<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>-->
	<!--							</div>-->
	<!--						</div>-->
	<!--					</div>-->
	<!--					<div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">-->
	<!--						<div class="max-w-lg w-full lg:max-w-xs">-->
	<!--							<label for="search" class="sr-only">Search</label>-->
	<!--							<div class="relative">-->
	<!--								<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">-->
	<!--									&lt;!&ndash; Heroicon name: solid/search &ndash;&gt;-->
	<!--									<svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">-->
	<!--										<path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />-->
	<!--									</svg>-->
	<!--								</div>-->
	<!--								<input id="search" name="search" class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm" placeholder="Search" type="search">-->
	<!--							</div>-->
	<!--						</div>-->
	<!--					</div>-->
	<!--					<div class="flex lg:hidden">-->
	<!--						&lt;!&ndash; Mobile menu button &ndash;&gt;-->
	<!--						<button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">-->
	<!--							<span class="sr-only">Open main menu</span>-->
	<!--							&lt;!&ndash;-->
	<!--							  Icon when menu is closed.-->

	<!--							  Heroicon name: outline/menu-->

	<!--							  Menu open: "hidden", Menu closed: "block"-->
	<!--							&ndash;&gt;-->
	<!--							<svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
	<!--								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />-->
	<!--							</svg>-->
	<!--							&lt;!&ndash;-->
	<!--							  Icon when menu is open.-->

	<!--							  Heroicon name: outline/x-->

	<!--							  Menu open: "block", Menu closed: "hidden"-->
	<!--							&ndash;&gt;-->
	<!--							<svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
	<!--								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />-->
	<!--							</svg>-->
	<!--						</button>-->
	<!--					</div>-->
	<!--					<div class="hidden lg:block lg:ml-4">-->
	<!--						<div class="flex items-center">-->
	<!--							<button type="button" class="flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">-->
	<!--								<span class="sr-only">View notifications</span>-->
	<!--								&lt;!&ndash; Heroicon name: outline/bell &ndash;&gt;-->
	<!--								<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
	<!--									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />-->
	<!--								</svg>-->
	<!--							</button>-->

	<!--							&lt;!&ndash; Profile dropdown &ndash;&gt;-->
	<!--							<div class="ml-4 relative flex-shrink-0">-->
	<!--								<div>-->
	<!--									<button type="button" class="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">-->
	<!--										<span class="sr-only">Open user menu</span>-->
	<!--										<img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
	<!--									</button>-->
	<!--								</div>-->

	<!--								&lt;!&ndash;-->
	<!--								  Dropdown menu, show/hide based on menu state.-->

	<!--								  Entering: "transition ease-out duration-100"-->
	<!--									From: "transform opacity-0 scale-95"-->
	<!--									To: "transform opacity-100 scale-100"-->
	<!--								  Leaving: "transition ease-in duration-75"-->
	<!--									From: "transform opacity-100 scale-100"-->
	<!--									To: "transform opacity-0 scale-95"-->
	<!--								&ndash;&gt;-->
	<!--&lt;!&ndash;								<div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">&ndash;&gt;-->
	<!--&lt;!&ndash;									&lt;!&ndash; Active: "bg-gray-100", Not Active: "" &ndash;&gt;&ndash;&gt;-->
	<!--&lt;!&ndash;									<a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>&ndash;&gt;-->
	<!--&lt;!&ndash;									<a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>&ndash;&gt;-->
	<!--&lt;!&ndash;									<a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>&ndash;&gt;-->
	<!--&lt;!&ndash;								</div>&ndash;&gt;-->
	<!--							</div>-->
	<!--						</div>-->
	<!--					</div>-->
	<!--				</div>-->
	<!--			</div>-->

	<!--			&lt;!&ndash; Mobile menu, show/hide based on menu state. &ndash;&gt;-->
	<!--			<div class="lg:hidden" id="mobile-menu">-->
	<!--				<div class="px-2 pt-2 pb-3 space-y-1">-->
	<!--					&lt;!&ndash; Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" &ndash;&gt;-->
	<!--					<a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>-->
	<!--					<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>-->
	<!--					<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>-->
	<!--					<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>-->
	<!--				</div>-->
	<!--				<div class="pt-4 pb-3 border-t border-gray-700">-->
	<!--					<div class="flex items-center px-5">-->
	<!--						<div class="flex-shrink-0">-->
	<!--							<img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
	<!--						</div>-->
	<!--						<div class="ml-3">-->
	<!--							<div class="text-base font-medium text-white">Tom Cook</div>-->
	<!--							<div class="text-sm font-medium text-gray-400">tom@example.com</div>-->
	<!--						</div>-->
	<!--						<button type="button" class="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">-->
	<!--							<span class="sr-only">View notifications</span>-->
	<!--							&lt;!&ndash; Heroicon name: outline/bell &ndash;&gt;-->
	<!--							<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
	<!--								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />-->
	<!--							</svg>-->
	<!--						</button>-->
	<!--					</div>-->
	<!--					<div class="mt-3 px-2 space-y-1">-->
	<!--						<a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>-->
	<!--						<a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>-->
	<!--						<a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>-->
	<!--					</div>-->
	<!--				</div>-->
	<!--			</div>-->
	<!--		</header>-->
	<!--	</div>-->

</template>

<script>
export default {
	name: "default"
}
</script>

<style scoped>
#app {
	background-color: #161921;
}

aside {
	filter: drop-shadow(0 0 1rem hsl(228deg 18% 10%));
	background: hsl(228deg 18% 12%);
}
</style>
