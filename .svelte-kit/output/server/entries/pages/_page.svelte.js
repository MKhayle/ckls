import { s as spread_props, c as attributes, g as escape_html, a as attr, b as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/server.js";
import "../../chunks/url.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import { I as Icon } from "../../chunks/Icon.js";
function Chevron_down($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.577.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2026 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
    Icon($$renderer2, spread_props([
      { name: "chevron-down" },
      /**
       * @component @name ChevronDown
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtNiA5IDYgNiA2LTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/chevron-down
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function External_link($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.577.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2026 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "M15 3h6v6" }],
      ["path", { "d": "M10 14 21 3" }],
      [
        "path",
        {
          "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
        }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "external-link" },
      /**
       * @component @name ExternalLink
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgM2g2djYiIC8+CiAgPHBhdGggZD0iTTEwIDE0IDIxIDMiIC8+CiAgPHBhdGggZD0iTTE4IDEzdjZhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWOGEyIDIgMCAwIDEgMi0yaDYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/external-link
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function SiDiscord($$renderer, $$props) {
  let {
    color = "currentColor",
    size = 24,
    title = "siDiscord",
    $$slots,
    $$events,
    ...rest
  } = $$props;
  $$renderer.push(`<svg${attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      fill: color,
      viewBox: "0 0 24 24",
      ...rest
    },
    void 0,
    void 0,
    void 0,
    3
  )}><title>${escape_html(title)}</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path></svg>`);
}
function _page($$renderer) {
  $$renderer.push(`<div class="container grid grow mx-auto my-6"><div class="grid place-content-center"><div class="flex justify-center lg:col-span-2"><img width="300px"${attr("src", `${stringify(base)}/ckls-icon-1024.png`)} alt="Logo CKLS"/></div> <div class="grid lg:grid-cols-2 gap-4 max-w-full"><div class="card preset-outlined-secondary-500 gap-4 p-4 mt-4 justify-center lg:col-span-2"><a target="_blank" rel="noopener noreferrer" href="https://discord.com/servers/conclave-d-exploration-1094307976073969685" class="flex flex-col items-start mx-2"><div class="flex flex-row items-center gap-2 text-lg">`);
  SiDiscord($$renderer, { class: "size-6 text-white " });
  $$renderer.push(`<!----><span class="font-semibold">Conclave d'Exploration</span></div> <div class="text-base text-surface-400">Communauté francophone dédiée aux contenus de grande envergure.</div></a></div> <div class="grid gap-4 content-start min-w-82.5"><div class="card bg-emerald-900 flex flex-col preset-filled-surface-100-900 border border-surface-200-800 p-4 text-center gap-4"><button class="flex w-full items-center justify-between"><div class="text-lg font-bold">Stratégies simplifiées</div> `);
  Chevron_down($$renderer, {
    class: `h-4 w-4 opacity-50 transition-transform duration-200 ${stringify("rotate-180")}`
  });
  $$renderer.push(`<!----></button> `);
  {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<div class="flex flex-col gap-4"><div class="flex flex-col"><div class="text-left text-sm font-semibold mb-3">Contenus d'Exploration</div> <div class="flex flex-col gap-4"><a${attr("href", `${stringify(base)}/upcoming`)} class="btn preset-tonal-secondary disabled border border-sky-600">Arsenal de Baldesion (BA)</a></div></div> <div class="flex flex-col gap-4"><a${attr("href", `${stringify(base)}/upcoming`)} class="btn preset-tonal-secondary disabled border border-amber-300">Delubrum Reginae (Sadique) (DRS)</a></div> <div class="flex flex-col gap-4"><a${attr("href", `${stringify(base)}/upcoming`)} class="btn preset-tonal-secondary disabled border border-fuschia-600">Tour Fourchue de la force (FTB)</a> <a${attr("href", `${stringify(base)}/upcoming`)} class="btn preset-tonal-secondary disabled border bg-red-800">Tour Fourchue de la magie (FTM)</a></div> <div class="flex flex-col"><div class="text-left text-sm font-semibold mb-3">Chaotique</div> <div class="flex flex-col gap-4"><a${attr("href", `${stringify(base)}/car/cod`)} class="btn preset-tonal-secondary border border-emerald-400">La Tour de Ténèbres</a></div></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div> <div class="grid gap-4 content-start min-w-82.5"><div class="card flex flex-col preset-filled-surface-100-900 border border-surface-200-800 p-4 text-center gap-4 bg-sky-700"><button class="flex w-full items-center justify-between"><div class="text-lg font-bold">Guides approfondis</div> `);
  Chevron_down($$renderer, {
    class: `h-4 w-4 opacity-50 transition-transform duration-200 ${stringify("rotate-180")}`
  });
  $$renderer.push(`<!----></button> `);
  {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<div class="flex flex-col gap-4"><div class="flex flex-col"><div class="text-left text-sm font-semibold mb-3">Contenus d'Exploration</div> <div class="flex flex-col gap-4"><a href="https://baguideconclave.crd.co/" class="btn preset-tonal-secondary disabled border border-sky-600">Arsenal de Baldesion (BA) `);
    External_link($$renderer, {
      class: "h-4 w-4 opacity-50\r\n                        : ''}"
    });
    $$renderer.push(`<!----></a></div></div> <div class="flex flex-col gap-4"><a href="https://drsguideconclave.crd.co/#" class="btn preset-tonal-secondary disabled border border-amber-300">Delubrum Reginae : Sadique (DRS) `);
    External_link($$renderer, {
      class: "h-4 w-4 opacity-50\r\n                        : ''}"
    });
    $$renderer.push(`<!----></a></div> <div class="flex flex-col gap-4"><a href="https://ftguideconclave.crd.co/" class="btn preset-tonal-secondary disabled border border-fuchsia-600">Tour Fourchue de la force (FTB) `);
    External_link($$renderer, {
      class: "h-4 w-4 opacity-50\r\n                        : ''}"
    });
    $$renderer.push(`<!----></a> <a href="#" class="btn preset-tonal-secondary disabled border bg-red-800">Tour Fourchue de la magie (FTM) `);
    External_link($$renderer, {
      class: "h-4 w-4 opacity-50\r\n                        : ''}"
    });
    $$renderer.push(`<!----></a></div> <div class="flex flex-col"><div class="text-left text-sm font-semibold mb-3">Alliance en Raid Chaotique</div> <div class="flex flex-col gap-4"><a href="https://carguideconclave.crd.co/" class="btn preset-tonal-secondary border border-emerald-400">La Tour de Ténèbres `);
    External_link($$renderer, {
      class: "h-4 w-4 opacity-50\r\n                        : ''}"
    });
    $$renderer.push(`<!----></a></div></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div></div></div></div>`);
}
export {
  _page as default
};
