
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
		RouteId(): "/" | "/car" | "/car/cod" | "/car/cod/[[language=language]]" | "/changelog" | "/forays" | "/tools" | "/tools/idyllic" | "/upcoming";
		RouteParams(): {
			"/car/cod/[[language=language]]": { language?: string }
		};
		LayoutParams(): {
			"/": { language?: string };
			"/car": { language?: string };
			"/car/cod": { language?: string };
			"/car/cod/[[language=language]]": { language?: string };
			"/changelog": Record<string, never>;
			"/forays": Record<string, never>;
			"/tools": Record<string, never>;
			"/tools/idyllic": Record<string, never>;
			"/upcoming": Record<string, never>
		};
		Pathname(): "/" | `/car/cod${string}` & {} | `/car/cod${string}/` & {} | "/changelog" | "/tools/idyllic" | "/upcoming";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.nojekyll" | "/android-chrome-192x192.png" | "/android-chrome-512x512.png" | "/apple-touch-icon.png" | "/car/strats/EN/overall.png" | "/car/strats/EN/platform-east-aoe-spread.png" | "/car/strats/EN/platform-east-brambles.png" | "/car/strats/EN/platform-east-pairs.png" | "/car/strats/EN/platform-east-spread.png" | "/car/strats/EN/platform-east-swap.png" | "/car/strats/EN/platform-east-towers.png" | "/car/strats/EN/platform-west-aoe-spread.png" | "/car/strats/EN/platform-west-brambles.png" | "/car/strats/EN/platform-west-pairs.png" | "/car/strats/EN/platform-west-spread.png" | "/car/strats/EN/platform-west-swap.png" | "/car/strats/EN/platform-west-towers.png" | "/car/strats/EN/postswap-a-platform-east-pairs.png" | "/car/strats/EN/postswap-a-platform-east-spread.png" | "/car/strats/EN/postswap-a-platform-east-towers.png" | "/car/strats/EN/postswap-a-tiles-east.png" | "/car/strats/EN/postswap-b-platform-east-pairs.png" | "/car/strats/EN/postswap-b-platform-east-spread.png" | "/car/strats/EN/postswap-b-platform-east-towers.png" | "/car/strats/EN/postswap-b-platform-west-pairs.png" | "/car/strats/EN/postswap-b-platform-west-spread.png" | "/car/strats/EN/postswap-b-platform-west-towers.png" | "/car/strats/EN/postswap-c-platform-west-pairs.png" | "/car/strats/EN/postswap-c-platform-west-spread.png" | "/car/strats/EN/postswap-c-platform-west-towers.png" | "/car/strats/EN/postswap-c-tiles-west.png" | "/car/strats/EN/postswap-h-platform-east-pairs.png" | "/car/strats/EN/postswap-h-platform-east-spread.png" | "/car/strats/EN/postswap-h-platform-east-towers.png" | "/car/strats/EN/postswap-h-platform-west-pairs.png" | "/car/strats/EN/postswap-h-platform-west-spread.png" | "/car/strats/EN/postswap-h-platform-west-towers.png" | "/car/strats/EN/postswap-platform-east-aoe-spread.png" | "/car/strats/EN/postswap-platform-west-aoe-spread.png" | "/car/strats/EN/tiles-east-chasers.png" | "/car/strats/EN/tiles-northeast.png" | "/car/strats/EN/tiles-northwest.png" | "/car/strats/EN/tiles-southeast.png" | "/car/strats/EN/tiles-southwest.png" | "/car/strats/EN/tiles-west-chasers.png" | "/car/strats/FR/overall.png" | "/car/strats/FR/platform-east-aoe-spread.png" | "/car/strats/FR/platform-east-brambles.png" | "/car/strats/FR/platform-east-pairs.png" | "/car/strats/FR/platform-east-spread.png" | "/car/strats/FR/platform-east-swap.png" | "/car/strats/FR/platform-east-towers.png" | "/car/strats/FR/platform-west-aoe-spread.png" | "/car/strats/FR/platform-west-brambles.png" | "/car/strats/FR/platform-west-pairs.png" | "/car/strats/FR/platform-west-spread.png" | "/car/strats/FR/platform-west-swap.png" | "/car/strats/FR/platform-west-towers.png" | "/car/strats/FR/postswap-a-platform-east-pairs.png" | "/car/strats/FR/postswap-a-platform-east-spread.png" | "/car/strats/FR/postswap-a-platform-east-towers.png" | "/car/strats/FR/postswap-a-tiles-east.png" | "/car/strats/FR/postswap-b-platform-east-pairs.png" | "/car/strats/FR/postswap-b-platform-east-spread.png" | "/car/strats/FR/postswap-b-platform-east-towers.png" | "/car/strats/FR/postswap-b-platform-west-pairs.png" | "/car/strats/FR/postswap-b-platform-west-spread.png" | "/car/strats/FR/postswap-b-platform-west-towers.png" | "/car/strats/FR/postswap-c-platform-west-pairs.png" | "/car/strats/FR/postswap-c-platform-west-spread.png" | "/car/strats/FR/postswap-c-platform-west-towers.png" | "/car/strats/FR/postswap-c-tiles-west.png" | "/car/strats/FR/postswap-h-platform-east-pairs.png" | "/car/strats/FR/postswap-h-platform-east-spread.png" | "/car/strats/FR/postswap-h-platform-east-towers.png" | "/car/strats/FR/postswap-h-platform-west-pairs.png" | "/car/strats/FR/postswap-h-platform-west-spread.png" | "/car/strats/FR/postswap-h-platform-west-towers.png" | "/car/strats/FR/postswap-platform-east-aoe-spread.png" | "/car/strats/FR/postswap-platform-west-aoe-spread.png" | "/car/strats/FR/tiles-east-chasers.png" | "/car/strats/FR/tiles-northeast.png" | "/car/strats/FR/tiles-northwest.png" | "/car/strats/FR/tiles-southeast.png" | "/car/strats/FR/tiles-southwest.png" | "/car/strats/FR/tiles-west-chasers.png" | "/ckls-icon-1024.png" | "/ckls-small-800.png" | "/favicon-16x16.png" | "/favicon-32x32.png" | "/favicon.ico" | "/icons/healer.png" | "/icons/melee.png" | "/icons/ranged.png" | "/icons/tank.png" | "/site.webmanifest" | "/swap-icon.png" | string & {};
	}
}