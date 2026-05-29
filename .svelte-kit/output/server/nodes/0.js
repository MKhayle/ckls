import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DOsCAHB4.js","_app/immutable/chunks/CuhXSJ00.js","_app/immutable/chunks/Cl9k9KPy.js","_app/immutable/chunks/BLhJw3Yn.js","_app/immutable/chunks/CGNN-wxh.js","_app/immutable/chunks/CN_0b8N-.js","_app/immutable/chunks/Hb0EfOeI.js","_app/immutable/chunks/DPY6wTwV.js","_app/immutable/chunks/B1zhg2wz.js","_app/immutable/chunks/CVIzyrTF.js","_app/immutable/chunks/qQWOqCSM.js","_app/immutable/chunks/Bx-4Zi1l.js","_app/immutable/chunks/BhWeT1S8.js","_app/immutable/chunks/DCLZsRu3.js","_app/immutable/chunks/DrqJsO7J.js"];
export const stylesheets = ["_app/immutable/assets/0.DPRzea3g.css"];
export const fonts = [];
