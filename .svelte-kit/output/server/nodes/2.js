import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.C2PGXXoH.js","_app/immutable/chunks/CuMUw4GK.js","_app/immutable/chunks/JeU2ezKp.js","_app/immutable/chunks/BaTtbRDo.js","_app/immutable/chunks/BATtWc_t.js","_app/immutable/chunks/D8btyWIe.js","_app/immutable/chunks/DZRzSgZ0.js","_app/immutable/chunks/D1uFc1kI.js","_app/immutable/chunks/YXtbbjai.js","_app/immutable/chunks/BMEQRBWL.js"];
export const stylesheets = [];
export const fonts = [];
