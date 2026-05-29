<script lang="ts">
  import { browser } from '$app/environment';
  import { base } from '$app/paths';

  const rootUrl = `${base}/`;

  $effect(() => {
    if (browser) {
      window.location.replace(rootUrl);
    }
  });
</script>

<svelte:head>
  <meta http-equiv="refresh" content="0; url={rootUrl}" />
</svelte:head>

<div class="container px-4 mx-auto my-12">
  <a class="anchor" href={rootUrl}>Retour à l'accueil</a>
</div>
