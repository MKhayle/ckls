import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.B1oJK71G.js","_app/immutable/chunks/CuMUw4GK.js","_app/immutable/chunks/JeU2ezKp.js","_app/immutable/chunks/DZRzSgZ0.js","_app/immutable/chunks/D8btyWIe.js","_app/immutable/chunks/BaTtbRDo.js","_app/immutable/chunks/B0Ks7Axm.js","_app/immutable/chunks/2sPiNrVC.js","_app/immutable/chunks/DIPI7SnF.js","_app/immutable/chunks/YXtbbjai.js","_app/immutable/chunks/BiFl-qZR.js","_app/immutable/chunks/BATtWc_t.js","_app/immutable/chunks/bD4Brmly.js","_app/immutable/chunks/BMEQRBWL.js","_app/immutable/chunks/D1uFc1kI.js"];
export const stylesheets = ["_app/immutable/assets/0.CZTtATnf.css"];
export const fonts = [];
