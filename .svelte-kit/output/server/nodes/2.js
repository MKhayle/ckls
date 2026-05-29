import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.9Q1VCrLJ.js","_app/immutable/chunks/CuhXSJ00.js","_app/immutable/chunks/Cl9k9KPy.js","_app/immutable/chunks/CN_0b8N-.js","_app/immutable/chunks/Bx-4Zi1l.js","_app/immutable/chunks/CGNN-wxh.js","_app/immutable/chunks/BLhJw3Yn.js","_app/immutable/chunks/BFojtHXD.js","_app/immutable/chunks/CVIzyrTF.js","_app/immutable/chunks/DCLZsRu3.js"];
export const stylesheets = [];
export const fonts = [];
