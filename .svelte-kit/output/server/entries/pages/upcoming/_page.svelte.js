import { s as spread_props, a as attr, b as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "../../../chunks/url.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import { I as Icon } from "../../../chunks/Icon.js";
function Construction($$renderer, $$props) {
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
      [
        "rect",
        { "x": "2", "y": "6", "width": "20", "height": "8", "rx": "1" }
      ],
      ["path", { "d": "M17 14v7" }],
      ["path", { "d": "M7 14v7" }],
      ["path", { "d": "M17 3v3" }],
      ["path", { "d": "M7 3v3" }],
      ["path", { "d": "M10 14 2.3 6.3" }],
      ["path", { "d": "m14 6 7.7 7.7" }],
      ["path", { "d": "m8 6 8 8" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "construction" },
      /**
       * @component @name Construction
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB4PSIyIiB5PSI2IiB3aWR0aD0iMjAiIGhlaWdodD0iOCIgcng9IjEiIC8+CiAgPHBhdGggZD0iTTE3IDE0djciIC8+CiAgPHBhdGggZD0iTTcgMTR2NyIgLz4KICA8cGF0aCBkPSJNMTcgM3YzIiAvPgogIDxwYXRoIGQ9Ik03IDN2MyIgLz4KICA8cGF0aCBkPSJNMTAgMTQgMi4zIDYuMyIgLz4KICA8cGF0aCBkPSJtMTQgNiA3LjcgNy43IiAvPgogIDxwYXRoIGQ9Im04IDYgOCA4IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/construction
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
function _page($$renderer, $$props) {
  let { config } = $$props;
  $$renderer.push(`<div class="container mx-auto my-12 flex grow flex-col items-center justify-center gap-8 px-4"><div class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 p-8 flex flex-col items-center gap-6 max-w-lg text-center"><div class="rounded-full bg-warning-500/20 p-4">`);
  Construction($$renderer, { class: "size-12 text-warning-500" });
  $$renderer.push(`<!----></div> <div class="flex flex-col gap-2"><h1 class="text-2xl font-bold">À venir</h1> <p class="text-lg text-surface-400">Stratégies en cours de rédaction</p></div> <div class="flex flex-col gap-2"><p class="text-xl font-semibold text-warning-500">À venir</p> <p class="text-surface-400">Les stratégies concernant ce contenu sont pour le moment en cours d'élaboration. Veuillez revenir ultérieurement.</p></div> <a${attr("href", `${stringify(base)}/`)} class="btn preset-tonal-secondary">← Revenir à l'accueil</a></div></div>`);
}
export {
  _page as default
};
