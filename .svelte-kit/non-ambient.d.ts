
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/car" | "/car/cod" | "/changelog" | "/forays" | "/tools" | "/tools/idyllic" | "/upcoming";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/car": Record<string, never>;
			"/car/cod": Record<string, never>;
			"/changelog": Record<string, never>;
			"/forays": Record<string, never>;
			"/tools": Record<string, never>;
			"/tools/idyllic": Record<string, never>;
			"/upcoming": Record<string, never>
		};
		Pathname(): "/" | "/car/cod" | "/changelog" | "/tools/idyllic" | "/upcoming";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.nojekyll" | "/android-chrome-192x192.png" | "/android-chrome-512x512.png" | "/apple-touch-icon.png" | "/car/strats/healerout/overall.png" | "/car/strats/healerout/platform-east-aoe-spread.png" | "/car/strats/healerout/platform-east-brambles.png" | "/car/strats/healerout/platform-east-pairs.png" | "/car/strats/healerout/platform-east-spread.png" | "/car/strats/healerout/platform-east-swap.png" | "/car/strats/healerout/platform-east-towers.png" | "/car/strats/healerout/platform-west-aoe-spread.png" | "/car/strats/healerout/platform-west-brambles.png" | "/car/strats/healerout/platform-west-pairs.png" | "/car/strats/healerout/platform-west-spread.png" | "/car/strats/healerout/platform-west-swap.png" | "/car/strats/healerout/platform-west-towers.png" | "/car/strats/healerout/postswap-a-platform-east-pairs.png" | "/car/strats/healerout/postswap-a-platform-east-towers.png" | "/car/strats/healerout/postswap-a-tiles-east.png" | "/car/strats/healerout/postswap-b-platform-east-pairs.png" | "/car/strats/healerout/postswap-b-platform-east-towers.png" | "/car/strats/healerout/postswap-b-platform-west-pairs.png" | "/car/strats/healerout/postswap-b-platform-west-towers.png" | "/car/strats/healerout/postswap-c-platform-west-pairs.png" | "/car/strats/healerout/postswap-c-platform-west-towers.png" | "/car/strats/healerout/postswap-c-tiles-west.png" | "/car/strats/healerout/postswap-h-platform-east-pairs.png" | "/car/strats/healerout/postswap-h-platform-east-towers.png" | "/car/strats/healerout/postswap-h-platform-west-pairs.png" | "/car/strats/healerout/postswap-h-platform-west-towers.png" | "/car/strats/healerout/postswap-platform-east-aoe-spread.png" | "/car/strats/healerout/postswap-platform-west-aoe-spread.png" | "/car/strats/healerout/tiles-east-chasers.png" | "/car/strats/healerout/tiles-northeast.png" | "/car/strats/healerout/tiles-northwest.png" | "/car/strats/healerout/tiles-southeast.png" | "/car/strats/healerout/tiles-southwest.png" | "/car/strats/healerout/tiles-west-chasers.png" | "/ckls-icon-1024.png" | "/ckls-small-800.png" | "/favicon-16x16.png" | "/favicon-32x32.png" | "/favicon.ico" | "/icons/healer.png" | "/icons/melee.png" | "/icons/ranged.png" | "/icons/tank.png" | "/site.webmanifest" | "/swap-icon.png" | string & {};
	}
}