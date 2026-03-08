import { r as root } from "./root.js";
import "./environment.js";
import "./server.js";
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
let read_implementation = null;
function set_read_implementation(fn) {
  read_implementation = fn;
}
function set_manifest(_) {
}
const options = {
  app_template_contains_nonce: false,
  async: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  csrf_trusted_origins: [],
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hash_routing: false,
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root,
  service_worker: false,
  service_worker_options: void 0,
  templates: {
    app: ({ head, body, assets, nonce, env }) => `<!doctype html>\r
<script>\r
  if (window.location.host === 'mczub.github.io') {\r
    const url = window.location.href.replace('mczub.github.io/wtfdig', 'wtfdig.info');\r
    window.location.replace(url);\r
  }\r
<\/script>\r
<html lang="en" class="dark">\r
  <head>\r
    <meta charset="utf-8" />\r
    <link rel="apple-touch-icon" sizes="180x180" href="` + assets + '/apple-touch-icon.png" />\r\n    <link rel="icon" type="image/png" sizes="32x32" href="' + assets + '/favicon-32x32.png" />\r\n    <link rel="icon" type="image/png" sizes="16x16" href="' + assets + '/favicon-16x16.png" />\r\n    <link rel="manifest" href="' + assets + '/site.webmanifest" />\r\n    <meta name="viewport" content="width=device-width" />\r\n    <title>Ckoilastrat ?!</title>\r\n    ' + head + '\r\n  </head>\r\n\r\n  <body data-sveltekit-preload-data="hover" class="flex flex-col min-h-dvh overflow-auto">\r\n    <div style="display: contents">' + body + "</div>\r\n  </body>\r\n</html>\r\n",
    error: ({ status, message }) => `<!doctype html>\r
<script>\r
  if (window.location.host === 'mczub.github.io') {\r
    const url = window.location.href.replace('mczub.github.io/wtfdig', 'wtfdig.info');\r
    window.location.replace(url);\r
  }\r
<\/script>\r
<html lang="en" class="dark">\r
  <head>\r
    <meta charset="utf-8" />\r
    <link rel="apple-touch-icon" sizes="180x180" href="%sveltekit.assets%/apple-touch-icon.png" />\r
    <link rel="icon" type="image/png" sizes="32x32" href="%sveltekit.assets%/favicon-32x32.png" />\r
    <link rel="icon" type="image/png" sizes="16x16" href="%sveltekit.assets%/favicon-16x16.png" />\r
    <link rel="manifest" href="%sveltekit.assets%/site.webmanifest" />\r
    <meta name="viewport" content="width=device-width" />\r
    <title>Ckoilastrat ?!</title>\r
    %sveltekit.head%\r
  </head>\r
\r
  <body data-sveltekit-preload-data="hover" class="flex flex-col min-h-dvh overflow-auto">\r
    <div style="display: contents">        \r
		<h1>404</h1>\r
		<p>Status: ` + status + "</p>\r\n		<p>Message: " + message + "</p>\r\n    </div>\r\n  </body>\r\n</html>\r\n"
  },
  version_hash: "1n341q4"
};
async function get_hooks() {
  let handle;
  let handleFetch;
  let handleError;
  let handleValidationError;
  let init;
  let reroute;
  let transport;
  return {
    handle,
    handleFetch,
    handleError,
    handleValidationError,
    init,
    reroute,
    transport
  };
}
export {
  set_public_env as a,
  set_read_implementation as b,
  set_manifest as c,
  get_hooks as g,
  options as o,
  public_env as p,
  read_implementation as r,
  set_private_env as s
};
