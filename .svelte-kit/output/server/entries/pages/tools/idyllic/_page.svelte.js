import "clsx";
import { s as spread_props, F as head, a as attr, e as ensure_array_like, g as escape_html, o as attr_class, m as attr_style, i as derived, b as stringify } from "../../../../chunks/index.js";
import { I as Icon } from "../../../../chunks/Icon.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function Arrow_down($$renderer, $$props) {
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
      ["path", { "d": "M12 5v14" }],
      ["path", { "d": "m19 12-7 7-7-7" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "arrow-down" },
      /**
       * @component @name ArrowDown
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgNXYxNCIgLz4KICA8cGF0aCBkPSJtMTkgMTItNyA3LTctNyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/arrow-down
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
function Arrow_up($$renderer, $$props) {
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
      ["path", { "d": "m5 12 7-7 7 7" }],
      ["path", { "d": "M12 19V5" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "arrow-up" },
      /**
       * @component @name ArrowUp
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtNSAxMiA3LTcgNyA3IiAvPgogIDxwYXRoIGQ9Ik0xMiAxOVY1IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-up
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
function Chevrons_down($$renderer, $$props) {
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
      ["path", { "d": "m7 6 5 5 5-5" }],
      ["path", { "d": "m7 13 5 5 5-5" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "chevrons-down" },
      /**
       * @component @name ChevronsDown
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtNyA2IDUgNSA1LTUiIC8+CiAgPHBhdGggZD0ibTcgMTMgNSA1IDUtNSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/chevrons-down
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
function Circle_dot($$renderer, $$props) {
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
      ["circle", { "cx": "12", "cy": "12", "r": "10" }],
      ["circle", { "cx": "12", "cy": "12", "r": "1" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "circle-dot" },
      /**
       * @component @name CircleDot
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/circle-dot
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
function Move_diagonal($$renderer, $$props) {
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
      ["path", { "d": "M11 19H5v-6" }],
      ["path", { "d": "M13 5h6v6" }],
      ["path", { "d": "M19 5 5 19" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "move-diagonal" },
      /**
       * @component @name MoveDiagonal
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEgMTlINXYtNiIgLz4KICA8cGF0aCBkPSJNMTMgNWg2djYiIC8+CiAgPHBhdGggZD0iTTE5IDUgNSAxOSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/move-diagonal
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
function Move_vertical($$renderer, $$props) {
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
      ["path", { "d": "M12 2v20" }],
      ["path", { "d": "m8 18 4 4 4-4" }],
      ["path", { "d": "m8 6 4-4 4 4" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "move-vertical" },
      /**
       * @component @name MoveVertical
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMnYyMCIgLz4KICA8cGF0aCBkPSJtOCAxOCA0IDQgNC00IiAvPgogIDxwYXRoIGQ9Im04IDYgNC00IDQgNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/move-vertical
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
const dnTetherDescriptions = {
  N: '<strong>N Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-red-600">Top Right (A/1 + CW)</span>\nStack on <span class="font-bold text-red-600">1 (North)</span>',
  NE: '<strong>NE Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-yellow-400">Bottom Right (B/2 + CW)</span>\nStack on <span class="font-bold text-red-600">1 (North)</span>',
  E: '<strong>E Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-blue-500">Bottom Left (C/3 + CW)</span>\nStack on <span class="font-bold text-blue-500">3 (South)</span>',
  SE: '<strong>SE Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-purple-500">Top Left (D/4 + CW)</span>\nStack on <span class="font-bold text-blue-500">3 (South)</span>',
  S: '<strong>S Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-red-600">Top Right (A/1 + CW)</span>\nFIRST DEFAM on <span class="font-bold text-yellow-400">B (East)</span>\nStack on <span class="font-bold text-red-600">1 (North)</span>',
  SW: '<strong>SW Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-yellow-400">Bottom Right (B/2 + CW)</span>\nSECOND DEFAM on <span class="font-bold text-yellow-400">B (East)</span>\nStack on <span class="font-bold text-red-600">1 (North)</span>',
  W: '<strong>W Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-blue-500">Bottom Left (C/3 + CW)</span>\nFIRST DEFAM on <span class="font-bold text-purple-500">D (West)</span>\nStack on <span class="font-bold text-blue-500">3 (South)</span>',
  NW: '<strong>NW Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-purple-500">Top Left (D/4 + CW)</span>\nSECOND DEFAM on <span class="font-bold text-purple-500">D (West)</span>\nStack on <span class="font-bold text-blue-500">3 (South)</span>'
};
const caroTetherDescriptions = {
  N: '<strong>N Clone</strong><span class="font-bold text-red-600">Red</span> <span class="font-bold text-purple-500">Defamation</span> for boss tethers\n1st Defam on <span class="font-bold text-red-600">A</span>\n<span class="font-bold text-yellow-400">Stack</span> on <span class="font-bold text-yellow-400">B</span>',
  NE: '<strong>NE Clone</strong><span class="font-bold text-red-600">Red</span> <span class="font-bold text-yellow-400">Stack</span> for boss tethers\n<span class="font-bold text-yellow-400">Stack</span> on <span class="font-bold text-yellow-400">B</span>',
  E: '<strong>E Clone</strong><span class="font-bold text-yellow-400">Yellow</span> <span class="font-bold text-yellow-400">Stack</span> for boss tethers\n<span class="font-bold text-yellow-400">Stack</span> on <span class="font-bold text-yellow-400">B</span>',
  SE: '<strong>SE Clone</strong><span class="font-bold text-yellow-400">Yellow</span> <span class="font-bold text-purple-500">Defamation</span> for boss tethers\n2nd Defam on <span class="font-bold text-red-600">A</span>\n<span class="font-bold text-yellow-400">Stack</span> on <span class="font-bold text-yellow-400">B</span>',
  S: '<strong>S Clone</strong><span class="font-bold text-blue-500">Blue</span> <span class="font-bold text-purple-500">Defamation</span> for boss tethers\n1st Defam on <span class="font-bold text-blue-500">C</span>\n<span class="font-bold text-yellow-400">Stack</span> on <span class="font-bold text-purple-500">D</span>',
  SW: '<strong>SW Clone</strong><span class="font-bold text-blue-500">Blue</span> <span class="font-bold text-yellow-400">Stack</span> for boss tethers\n<span class="font-bold text-yellow-400">Stack</span> on <span class="font-bold text-purple-500">D</span>',
  W: '<strong>W Clone</strong><span class="font-bold text-purple-500">Purple</span> <span class="font-bold text-yellow-400">Stack</span> for boss tethers\n<span class="font-bold text-yellow-400">Stack</span> on <span class="font-bold text-purple-500">D</span>',
  NW: '<strong>NW Clone</strong><span class="font-bold text-purple-500">Purple</span> <span class="font-bold text-purple-500">Defamation</span> for boss tethers\n2nd Defam on <span class="font-bold text-blue-500">C</span>\n<span class="font-bold text-yellow-400">Stack</span> on <span class="font-bold text-purple-500">D</span>'
};
const cozyTetherDescriptions = {
  N: '<strong>N Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-red-600">Top Right (A/1 + CW)</span>\nStack on <span class="font-bold text-red-600">1 (North)</span>',
  NE: '<strong>NE Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-yellow-400">Bottom Right (B/2 + CW)</span>\nStack on <span class="font-bold text-red-600">1 (North)</span>',
  E: '<strong>E Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-blue-500">Bottom Left (C/3 + CW)</span>\nStack on <span class="font-bold text-yellow-400">2 (East)</span>',
  SE: '<strong>SE Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-purple-500">Top Left (D/4 + CW)</span>\nStack on <span class="font-bold text-yellow-400">2 (East)</span>',
  S: '<strong>S Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-red-600">Top Right (A/1 + CW)</span>\nFIRST DEFAM on <span class="font-bold text-blue-500">South (C)</span>\nStack on <span class="font-bold text-yellow-400">2 (East)</span>',
  SW: '<strong>SW Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-yellow-400">Bottom Right (B/2 + CW)</span>\nSECOND DEFAM on <span class="font-bold text-blue-500">South (C)</span>\nStack on <span class="font-bold text-yellow-400">2 (East)</span>',
  W: '<strong>W Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-yellow-400">Bottom Right (B/2 + CW)</span>\nFIRST DEFAM on <span class="font-bold text-purple-500">West (D)</span>\nStack on <span class="font-bold text-red-600">1 (North)</span>',
  NW: '<strong>NW Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-purple-500">Top Left (D/4 + CW)</span>\nSECOND DEFAM on <span class="font-bold text-purple-500">West (D)</span>\nStack on <span class="font-bold text-red-600">1 (North)</span>'
};
const emTetherDescriptions = {
  N: '<strong>N Clone</strong>Take <span class="font-bold text-yellow-400">Stack</span> boss tether, swap partner is <span class="font-bold text-red-600">South (A)</span>',
  NE: '<strong>NE Clone</strong>Take <span class="font-bold text-purple-500">Defam</span> boss tether, swap partner is <span class="font-bold text-yellow-400">East (B)</span>',
  E: '<strong>E Clone</strong>Take <span class="font-bold text-yellow-400">Stack</span> boss tether, swap partner is <span class="font-bold text-yellow-400">Northeast (2)</span>',
  SE: '<strong>SE Clone</strong>Take <span class="font-bold text-purple-500">Defam</span> boss tether, swap partner is <span class="font-bold text-blue-500">South (C)</span>',
  S: '<strong>S Clone</strong>Take <span class="font-bold text-purple-500">Defam</span> boss tether, swap partner is <span class="font-bold text-red-600">North (A)</span>',
  SW: '<strong>SW Clone</strong>Take <span class="font-bold text-yellow-400">Stack</span> boss tether, swap partner is <span class="font-bold text-blue-500">Southeast (3)</span>',
  W: '<strong>W Clone</strong>Take <span class="font-bold text-purple-500">Defam</span> boss tether, swap partner is <span class="font-bold text-red-600">Northwest (1)</span>',
  NW: '<strong>NW Clone</strong>Take <span class="font-bold text-yellow-400">Stack</span> boss tether, swap partner is West <span class="font-bold text-purple-500">(D)</span>'
};
const dnUptimeTetherDescriptions = {
  N: '<strong>N Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-red-600">Top Right (A/1 + CW)</span>\nStack on <span class="font-bold text-yellow-400">2 (East)</span>',
  NE: '<strong>NE Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-yellow-400">Bottom Right (B/2 + CW)</span>\nStack on <span class="font-bold text-yellow-400">2 (East)</span>',
  E: '<strong>E Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-blue-500">Bottom Left (C/3 + CW)</span>\nStack on <span class="font-bold text-purple-500">4 (West)</span>',
  SE: '<strong>SE Clone</strong>Take <span class="font-bold text-yellow-400">STACK</span> tether from <span class="font-bold text-purple-500">Top Left (D/4 + CW)</span>\nStack on <span class="font-bold text-purple-500">4 (West)</span>',
  S: '<strong>S Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-red-600">Top Right (A/1 + CW)</span>\nFIRST DEFAM Northeast (between <span class="font-bold text-red-600">A</span> + <span class="font-bold text-yellow-400">B</span>)\nStack on <span class="font-bold text-yellow-400">2 (East)</span>',
  SW: '<strong>SW Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-yellow-400">Bottom Right (B/2 + CW)</span>\nSECOND DEFAM Northeast (between <span class="font-bold text-red-600">A</span> + <span class="font-bold text-yellow-400">B</span>)\nStack on <span class="font-bold text-yellow-400">2 (East)</span>',
  W: '<strong>W Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-blue-500">Bottom Left (C/3 + CW)</span>\nFIRST DEFAM Northwest (between <span class="font-bold text-purple-500">D</span> + <span class="font-bold text-red-600">A</span>)\nStack on <span class="font-bold text-purple-500">4 (West)</span>',
  NW: '<strong>NW Clone</strong>Take <span class="font-bold text-purple-500">DEFAM</span> tether from <span class="font-bold text-purple-500">Top Left (D/4 + CW)</span>\nSECOND DEFAM Northwest (between <span class="font-bold text-purple-500">D</span> + <span class="font-bold text-red-600">A</span>)\nStack on <span class="font-bold text-purple-500">4 (West)</span>'
};
const IDYLLIC_STRATEGIES = [
  {
    value: "dn",
    label: "DN",
    tetherDescriptions: dnTetherDescriptions
  },
  {
    value: "dnuptime",
    label: "DN Uptime/Better",
    tetherDescriptions: dnUptimeTetherDescriptions
  },
  {
    value: "caro",
    label: "Caro (wqc)",
    tetherDescriptions: caroTetherDescriptions
  },
  {
    value: "cozy",
    label: "DN + Cozy Clone",
    tetherDescriptions: cozyTetherDescriptions
  },
  {
    value: "em",
    label: "Emergency Meeting",
    tetherDescriptions: emTetherDescriptions
  }
];
function IdyllicSolver($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let selectedStrategy = "dn";
    let selectedTether = null;
    let holeCloneNorth = null;
    const summaryText = derived(() => () => {
      return null;
    });
    const COMPASS_LAYOUT = [
      { pos: "N", angle: -90 },
      { pos: "NE", angle: -45 },
      { pos: "E", angle: 0 },
      { pos: "SE", angle: 45 },
      { pos: "S", angle: 90 },
      { pos: "SW", angle: 135 },
      { pos: "W", angle: 180 },
      { pos: "NW", angle: -135 }
    ];
    head("elsnx6", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>WTFDIG!?</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Quick solver tool for M12S Idyllic Dream mechanic"/>`);
    });
    $$renderer2.push(`<div class="flex flex-col gap-3 md:gap-4 p-4 md:p-6 w-full max-w-[500px] md:max-w-[600px] mx-auto box-border overflow-hidden"><header class="flex justify-between items-center shrink-0"><h1 class="text-xl md:text-2xl font-bold m-0">M12S Idyllic Helper</h1> <button class="px-4 py-2 md:px-5 md:py-2.5 rounded-lg bg-destructive text-destructive-foreground border-none font-semibold cursor-pointer text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"${attr("disabled", holeCloneNorth === null, true)}>Reset</button></header> <div class="flex items-center gap-2 md:gap-3 shrink-0"><label for="strategy-select" class="font-semibold text-sm md:text-base">Strategy</label> `);
    $$renderer2.select(
      {
        id: "strategy-select",
        class: "flex-1 px-3 py-2 md:px-4 md:py-2.5 rounded-lg border border-border bg-background text-foreground text-sm md:text-base",
        value: selectedStrategy
      },
      ($$renderer3) => {
        $$renderer3.push(`<!--[-->`);
        const each_array = ensure_array_like(IDYLLIC_STRATEGIES);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let strat = each_array[$$index];
          $$renderer3.option({ value: strat.value }, ($$renderer4) => {
            $$renderer4.push(`${escape_html(strat.label)}`);
          });
        }
        $$renderer3.push(`<!--]-->`);
      }
    );
    $$renderer2.push(`</div> <div class="flex flex-wrap flex-col gap-2 md:gap-3 justify-center shrink-0"><div class="flex gap-2 md:gap-3 items-center"><div class="font-semibold text-sm md:text-base text-muted-foreground">First clones</div> <button${attr_class(`flex flex-row items-center gap-1 px-2 py-2 md:px-4 md:py-2.5 rounded-lg border border-border font-normal cursor-pointer text-sm md:text-base transition-all duration-150 ${stringify("bg-muted text-muted-foreground hover:bg-accent")}`)}>`);
    Move_vertical($$renderer2, { class: "size-4" });
    $$renderer2.push(`<!----> Cardinals</button> <button${attr_class(`flex flex-row items-center gap-1 px-2 py-2 md:px-4 md:py-2.5 rounded-lg border border-border font-normal cursor-pointer text-sm md:text-base transition-all duration-150 ${stringify("bg-muted text-muted-foreground hover:bg-accent")}`)}>`);
    Move_diagonal($$renderer2, { class: "size-4" });
    $$renderer2.push(`<!----> Intercards</button></div> <div class="flex gap-2 md:gap-3 items-center"><div class="font-semibold text-sm md:text-base text-muted-foreground">Cone telegraphs</div> <button${attr_class(`flex flex-row items-center gap-1 px-2 py-2 md:px-4 md:py-2.5 rounded-lg border border-border font-normal cursor-pointer text-sm md:text-base transition-all duration-150 ${stringify("bg-muted text-muted-foreground hover:bg-accent")}`)}>`);
    Arrow_up($$renderer2, { class: "size-4" });
    $$renderer2.push(`<!----> N Safe</button> <button${attr_class(`flex flex-row items-center gap-1 px-2 py-2 md:px-4 md:py-2.5 rounded-lg border border-border font-normal cursor-pointer text-sm md:text-base transition-all duration-150 ${stringify("bg-muted text-muted-foreground hover:bg-accent")}`)}>`);
    Arrow_down($$renderer2, { class: "size-4" });
    $$renderer2.push(`<!----> S Safe</button></div> <div class="flex gap-2 md:gap-3 items-center"><div class="font-semibold text-sm md:text-base text-muted-foreground">Boss tethers</div> <button${attr_class(`flex flex-row items-center gap-1 px-2 py-2 md:px-4 md:py-2.5 rounded-lg border border-border font-normal cursor-pointer text-sm md:text-base transition-all duration-150 ${stringify("bg-muted text-muted-foreground hover:bg-accent")}`)}>`);
    Circle_dot($$renderer2, { class: "size-4" });
    $$renderer2.push(`<!----> Defams First</button> <button${attr_class(`flex flex-row items-center gap-1 px-2 py-2 md:px-4 md:py-2.5 rounded-lg border border-border font-normal cursor-pointer text-sm md:text-base transition-all duration-150 ${stringify("bg-muted text-muted-foreground hover:bg-accent")}`)}>`);
    Chevrons_down($$renderer2, { class: "size-4" });
    $$renderer2.push(`<!----> Stacks First</button></div> <div class="flex gap-2 md:gap-3 items-center"><div class="font-semibold text-sm md:text-base text-muted-foreground">Black hole clone</div> <button${attr_class(`flex flex-row items-center gap-1 px-2 py-2 md:px-4 md:py-2.5 rounded-lg border border-border font-normal cursor-pointer text-sm md:text-base transition-all duration-150 ${stringify("bg-muted text-muted-foreground hover:bg-accent")}`)}>`);
    Arrow_up($$renderer2, { class: "size-4" });
    $$renderer2.push(`<!----> North</button> <button${attr_class(`flex flex-row items-center gap-1 px-2 py-2 md:px-4 md:py-2.5 rounded-lg border border-border font-normal cursor-pointer text-sm md:text-base transition-all duration-150 ${stringify("bg-muted text-muted-foreground hover:bg-accent")}`)}>`);
    Arrow_down($$renderer2, { class: "size-4" });
    $$renderer2.push(`<!----> South</button></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="flex flex-col items-center shrink-0"><span class="font-semibold text-sm md:text-base mb-1 md:mb-2 text-muted-foreground">Your Clone Tether</span> <div class="compass-container svelte-elsnx6"><!--[-->`);
    const each_array_1 = ensure_array_like(COMPASS_LAYOUT);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let { pos, angle } = each_array_1[$$index_1];
      const isCardinal = ["N", "E", "S", "W"].includes(pos);
      const radius = 38;
      const x = 50 + radius * Math.cos(angle * Math.PI / 180);
      const y = 50 + radius * Math.sin(angle * Math.PI / 180);
      $$renderer2.push(`<button${attr_class(
        `compass-btn ${stringify(isCardinal ? "cardinal" : "intercardinal")} ${stringify(selectedTether === pos ? "bg-primary text-primary-foreground border-primary" : "bg-muted text-foreground border-border hover:bg-accent")}`,
        "svelte-elsnx6"
      )}${attr_style(`left: ${stringify(x)}%; top: ${stringify(y)}%;`)}>${escape_html(pos)}</button>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="flex-1 min-h-0 flex flex-col bg-card border border-border rounded-xl p-3 md:p-4 overflow-auto">`);
    if (summaryText()()) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="text-sm md:text-base leading-relaxed flex-1 [&amp;_strong]:font-bold [&amp;_strong]:text-base md:[&amp;_strong]:text-lg [&amp;_strong]:block [&amp;_strong]:mb-1">${html(summaryText()().replace(/\n/g, "<br>"))}</div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="text-muted-foreground italic text-sm md:text-base">Select your clone tether position to see your assignments</div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function _page($$renderer) {
  $$renderer.push(`<div class="container grow mx-auto">`);
  IdyllicSolver($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _page as default
};
