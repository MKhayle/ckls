export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","car/strats/healerout/overall.png","car/strats/healerout/platform-east-aoe-spread.png","car/strats/healerout/platform-east-brambles.png","car/strats/healerout/platform-east-pairs.png","car/strats/healerout/platform-east-spread.png","car/strats/healerout/platform-east-swap.png","car/strats/healerout/platform-east-towers.png","car/strats/healerout/platform-west-aoe-spread.png","car/strats/healerout/platform-west-brambles.png","car/strats/healerout/platform-west-pairs.png","car/strats/healerout/platform-west-spread.png","car/strats/healerout/platform-west-swap.png","car/strats/healerout/platform-west-towers.png","car/strats/healerout/postswap-a-platform-east-pairs.png","car/strats/healerout/postswap-a-platform-east-spread.png","car/strats/healerout/postswap-a-platform-east-towers.png","car/strats/healerout/postswap-a-tiles-east.png","car/strats/healerout/postswap-b-platform-east-pairs.png","car/strats/healerout/postswap-b-platform-east-spread.png","car/strats/healerout/postswap-b-platform-east-towers.png","car/strats/healerout/postswap-b-platform-west-pairs.png","car/strats/healerout/postswap-b-platform-west-spread.png","car/strats/healerout/postswap-b-platform-west-towers.png","car/strats/healerout/postswap-c-platform-west-pairs.png","car/strats/healerout/postswap-c-platform-west-spread.png","car/strats/healerout/postswap-c-platform-west-towers.png","car/strats/healerout/postswap-c-tiles-west.png","car/strats/healerout/postswap-h-platform-east-pairs.png","car/strats/healerout/postswap-h-platform-east-spread.png","car/strats/healerout/postswap-h-platform-east-towers.png","car/strats/healerout/postswap-h-platform-west-pairs.png","car/strats/healerout/postswap-h-platform-west-spread.png","car/strats/healerout/postswap-h-platform-west-towers.png","car/strats/healerout/postswap-platform-east-aoe-spread.png","car/strats/healerout/postswap-platform-west-aoe-spread.png","car/strats/healerout/tiles-east-chasers.png","car/strats/healerout/tiles-northeast.png","car/strats/healerout/tiles-northwest.png","car/strats/healerout/tiles-southeast.png","car/strats/healerout/tiles-southwest.png","car/strats/healerout/tiles-west-chasers.png","ckls-icon-1024.png","ckls-small-800.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","icons/healer.png","icons/melee.png","icons/ranged.png","icons/tank.png","site.webmanifest","swap-icon.png"]),
	mimeTypes: {".png":"image/png",".webmanifest":"application/manifest+json"},
	_: {
		client: {start:"_app/immutable/entry/start.ZcZTzCne.js",app:"_app/immutable/entry/app.DO4MqLdp.js",imports:["_app/immutable/entry/start.ZcZTzCne.js","_app/immutable/chunks/DZA-T7Sa.js","_app/immutable/chunks/JeU2ezKp.js","_app/immutable/chunks/D1uFc1kI.js","_app/immutable/chunks/YXtbbjai.js","_app/immutable/entry/app.DO4MqLdp.js","_app/immutable/chunks/JeU2ezKp.js","_app/immutable/chunks/BaTtbRDo.js","_app/immutable/chunks/CuMUw4GK.js","_app/immutable/chunks/YXtbbjai.js","_app/immutable/chunks/BATtWc_t.js","_app/immutable/chunks/D8btyWIe.js","_app/immutable/chunks/B0Ks7Axm.js","_app/immutable/chunks/bD4Brmly.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/tools/idyllic",
				pattern: /^\/tools\/idyllic\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/","/car/cod","/changelog","/upcoming"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
