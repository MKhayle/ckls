<script lang="ts">
  import { base } from '$app/paths';
  import { slide } from 'svelte/transition';
  import ChevronDown from '@lucide/svelte/icons/chevron-down';
  import ExternalLink from '@lucide/svelte/icons/external-link';
  import { Grid3x3, Hammer } from '@lucide/svelte';  
  import { SiDiscord } from "@icons-pack/svelte-simple-icons";

  let openState = $state({
    forays: true,
    chaotic: true,
  });

  function toggle(key: keyof typeof openState) {
    openState[key] = !openState[key];
  }
</script>

<div class="container grid grow mx-auto my-6">
  <div class="grid place-content-center">
    <div class="flex justify-center lg:col-span-2">
      <img width="300px" src="{base}/ckls-icon-1024.png" alt="Logo CKLS" />
    </div>
    <div class="grid lg:grid-cols-2 gap-4 max-w-full">
      <div class="card preset-outlined-secondary-500 gap-4 p-4 mt-4 justify-center lg:col-span-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://discord.com/servers/conclave-d-exploration-1094307976073969685"
          class="flex flex-col items-start mx-2"
        >
          <div class="flex flex-row items-center gap-2 text-lg">
            <SiDiscord class="size-6 text-white " /><span class="font-semibold"> Conclave d'Exploration</span>
          </div>
          <div class="text-base text-surface-400">Communauté francophone dédiée aux contenus de grande envergure.</div>
        </a>
      </div>
      <!-- Left Column: Contenus d'Exploration -->
      <div class="grid gap-4 content-start min-w-82.5">
        <div
          class="card bg-emerald-900 flex flex-col preset-filled-surface-100-900 border border-surface-200-800 p-4 text-center gap-4"
        >
          <button class="flex w-full items-center justify-between" onclick={() => toggle('forays')}>
            <div class="text-lg font-bold">Stratégies simplifiées</div>
            <ChevronDown
              class="h-4 w-4 opacity-50 transition-transform duration-200 {openState['forays']
                ? 'rotate-180'
                : ''}"
            />
          </button>
          {#if openState['forays']}
            <div transition:slide class="flex flex-col gap-4">
              <div class="flex flex-col">
                <div class="text-left text-sm font-semibold mb-3">Contenus d'Exploration</div>
                <div class="flex flex-col gap-4">
                  <a
                    href="{base}/upcoming"
                    class="btn preset-tonal-secondary disabled border border-sky-600"
                    >Arsenal de Baldesion (BA)</a
                  >
                </div>                  
              </div>
              <div class="flex flex-col gap-4">
                <a
                  href="{base}/upcoming"
                  class="btn preset-tonal-secondary disabled border border-amber-300"
                  >Delubrum Reginae (Sadique) (DRS)</a
                >
              </div>
              <div class="flex flex-col gap-4">
                <a
                  href="{base}/upcoming"
                  class="btn preset-tonal-secondary disabled border border-fuschia-600"
                  >Tour Fourchue de la force (FTB)</a
                >
                <a
                  href="{base}/upcoming"
                  class="btn preset-tonal-secondary disabled border bg-red-800"
                  >Tour Fourchue de la magie (FTM)</a
                >
              </div>
              <div class="flex flex-col">
                <div class="text-left text-sm font-semibold mb-3">Raid en Alliance Chaotique</div>
                <div class="flex flex-col gap-4">
                  <a
                    href="{base}/car/cod"
                    class="btn preset-tonal-secondary border border-emerald-400"
                    >La Tour de Ténèbres</a
                  >
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>
      <!-- Right Column: Chaotiques -->
      <div class="grid gap-4 content-start min-w-82.5">        
        <div
          class="card flex flex-col preset-filled-surface-100-900 border border-surface-200-800 p-4 text-center gap-4 bg-sky-700"
        >
          <button class="flex w-full items-center justify-between" onclick={() => toggle('chaotic')}>
            <div class="text-lg font-bold">Guides approfondis</div>
            <ChevronDown
              class="h-4 w-4 opacity-50 transition-transform duration-200 {openState['chaotic']
                ? 'rotate-180'
                : ''}"
            />
          </button>
          {#if openState['chaotic']}
          <div transition:slide class="flex flex-col gap-4">
              <div class="flex flex-col">
                <div class="text-left text-sm font-semibold mb-3">Contenus d'Exploration</div>
                <div class="flex flex-col gap-4">
                  <a
                    href="https://baguideconclave.crd.co/"
                    class="btn preset-tonal-secondary disabled border border-sky-600"
                    >Arsenal de Baldesion (BA) 
                    <ExternalLink
                      class="h-4 w-4 opacity-50
                        : ''}"
                    />
                  </a
                  >
                </div>                  
              </div>
              <div class="flex flex-col gap-4">
                <a
                  href="https://drsguideconclave.crd.co/#"
                  class="btn preset-tonal-secondary disabled border border-amber-300"
                  >Delubrum Reginae : Sadique (DRS)
                  <ExternalLink
                      class="h-4 w-4 opacity-50
                        : ''}"
                    />
                </a
                >
              </div>
              <div class="flex flex-col gap-4">
                <a
                  href="https://ftguideconclave.crd.co/"
                  class="btn preset-tonal-secondary disabled border border-fuchsia-600"
                  >Tour Fourchue de la force (FTB)
                  <ExternalLink
                      class="h-4 w-4 opacity-50
                        : ''}"
                    />
                </a
                >
                <a
                  href={'#'}
                  class="btn preset-tonal-secondary disabled border bg-red-800"
                  >Tour Fourchue de la magie (FTM)
                  <ExternalLink
                      class="h-4 w-4 opacity-50
                        : ''}"
                    />
                </a
                >
              </div>
              <div class="flex flex-col">
                <div class="text-left text-sm font-semibold mb-3">Raid en Alliance Chaotique</div>
                <div class="flex flex-col gap-4">
                  <a
                    href="https://carguideconclave.crd.co/"
                    class="btn preset-tonal-secondary border border-emerald-400"
                    >La Tour de Ténèbres
                  <ExternalLink
                      class="h-4 w-4 opacity-50
                        : ''}"
                    />
                </a
                  >
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>
      <!-- <div class="gap-4 mt-4 justify-center lg:col-span-2">
        <div class="flex flex-row items-center gap-2 text-left text-base font-semibold mb-3">
          <Hammer class="size-6 text-primary" />Tools
        </div>
        <a
          href="{base}/tools/idyllic"
          class="flex flex-row justify-start items-center py-3 btn preset-tonal-secondary border border-secondary-500"
        >
          <div class="flex flex-row items-center gap-2 text-base">
            <span class="font-semibold">idyllic helper</span>
          </div>
          <div class="text-sm text-surface-400">M12S Idyllic Dream helper</div>
        </a>
      </div> -->
    </div>
  </div>
</div>
