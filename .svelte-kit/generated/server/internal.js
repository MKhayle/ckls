
import root from '../root.js';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '$app/paths/internal/server';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	async: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	csrf_trusted_origins: [],
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	service_worker_options: undefined,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\r\n<script>\r\n  if (window.location.host === 'mczub.github.io') {\r\n    const url = window.location.href.replace('mczub.github.io/wtfdig', 'wtfdig.info');\r\n    window.location.replace(url);\r\n  }\r\n</script>\r\n<html lang=\"en\" class=\"dark\">\r\n  <head>\r\n    <meta charset=\"utf-8\" />\r\n    <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"" + assets + "/apple-touch-icon.png\" />\r\n    <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + assets + "/favicon-32x32.png\" />\r\n    <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"" + assets + "/favicon-16x16.png\" />\r\n    <link rel=\"manifest\" href=\"" + assets + "/site.webmanifest\" />\r\n    <meta name=\"viewport\" content=\"width=device-width\" />\r\n    <title>Ckoilastrat ?!</title>\r\n    " + head + "\r\n  </head>\r\n\r\n  <body data-sveltekit-preload-data=\"hover\" class=\"flex flex-col min-h-dvh overflow-auto\">\r\n    <div style=\"display: contents\">" + body + "</div>\r\n  </body>\r\n</html>\r\n",
		error: ({ status, message }) => "<!doctype html>\r\n<script>\r\n  if (window.location.host === 'mczub.github.io') {\r\n    const url = window.location.href.replace('mczub.github.io/wtfdig', 'wtfdig.info');\r\n    window.location.replace(url);\r\n  }\r\n</script>\r\n<html lang=\"en\" class=\"dark\">\r\n  <head>\r\n    <meta charset=\"utf-8\" />\r\n    <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"%sveltekit.assets%/apple-touch-icon.png\" />\r\n    <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"%sveltekit.assets%/favicon-32x32.png\" />\r\n    <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"%sveltekit.assets%/favicon-16x16.png\" />\r\n    <link rel=\"manifest\" href=\"%sveltekit.assets%/site.webmanifest\" />\r\n    <meta name=\"viewport\" content=\"width=device-width\" />\r\n    <title>Ckoilastrat ?!</title>\r\n    %sveltekit.head%\r\n  </head>\r\n\r\n  <body data-sveltekit-preload-data=\"hover\" class=\"flex flex-col min-h-dvh overflow-auto\">\r\n    <div style=\"display: contents\">        \r\n\t\t<h1>404</h1>\r\n\t\t<p>Status: " + status + "</p>\r\n\t\t<p>Message: " + message + "</p>\r\n    </div>\r\n  </body>\r\n</html>\r\n"
	},
	version_hash: "9w0bw8"
};

export async function get_hooks() {
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

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation };
