<!-- @ts-nocheck -->
<script lang="ts">
  // @ts-nocheck
  import { browser } from '$app/environment';
  import type { Alliance, Role, PlayerStrats, Alignment, MechanicStrat } from './+page';
  import { Accordion, Segment, Switch } from '$lib/components/ui';

  interface Props {
    data: any;
    children?: import('svelte').Snippet;
  }

  let { data, children }: Props = $props();
  let stratName: string | undefined = 'healerout';
  let alliance: Alliance | undefined = $state();
  let role: Role | undefined = $state();
  let party: number | undefined = $state();
  let strat: PlayerStrats | string = $derived(getStrat(stratName, alliance, role, party));
  let stratPackage = $derived(data.strats.find((strat) => strat.stratName === stratName));
  let spotlight: boolean = $state(true);
  let alignment: Alignment = $state('original');
  let accordion = $state(['swaps']);
  let optionsString = $derived(getOptionsString(stratName, alliance, role, party));

  $effect(() => {
    if (browser) {
      const storedAlliance = localStorage.getItem('chaotic-alliance');
      const storedRole = localStorage.getItem('chaotic-role');
      const storedParty = localStorage.getItem('chaotic-party');
      if (storedAlliance) {
        alliance = JSON.parse(storedAlliance);
      }
      if (storedRole) {
        role = JSON.parse(storedRole);
      }
      if (storedParty) {
        party = JSON.parse(storedParty);
      }
    }
  });

  $effect(() => {
    if (browser) {
      if (alliance) {
        localStorage.setItem('chaotic-alliance', JSON.stringify(alliance));
      }
      if (role) {
        localStorage.setItem('chaotic-role', JSON.stringify(role));
      }
      if (party) {
        localStorage.setItem('chaotic-party', JSON.stringify(party));
      }
    }
  });

  function getStrat(stratName?: string, alliance?: Alliance, role?: Role, party?: number) {
    if (!stratName || !alliance || !role || !party) return '';
    const stratPackage = data.strats.find((strat) => strat.stratName === stratName);
    const allianceRolePartyStrat = stratPackage?.strats.find(
      (strat) => strat.alliance === alliance && strat.role === role && strat.party === party
    );
    if (!allianceRolePartyStrat)
      return `Couldn't find ${stratName} strat for Alliance ${alliance} ${role} ${party}`;
    return allianceRolePartyStrat;
  }

  function getMask(step: MechanicStrat): string {
    if (spotlight) {
      if (step.alignmentMasks && step.alignmentMasks[alignment]) {
        return step.alignmentMasks[alignment];
      }
      return step.mask || '';
    }
    return '';
  }

  function getOptionsString(
    stratName?: 'HealerOut',
    alliance?: Alliance,
    role?: Role,
    party?: number
  ): string {
    if (!stratName || !alliance || !role || !party) return '';
    const stratNames: Record<string, string> = {
      healerout: 'HealerOut'
    };
    let roleAbbrev = '';
    if (role === 'Tank') {
      roleAbbrev = party === 1 ? 'MT' : 'OT';
    } else {
      roleAbbrev = role.charAt(0).toUpperCase() + party.toString();
    }
    return `${stratNames[stratName]} - Alliance ${alliance} ${roleAbbrev}`;
  }
</script>

<div class="container grow px-4 mx-auto mb-6">
  <div class="container">
    <div class="mb-6">
      <div class="preset-typo-display-1 mt-2 lg:mt-0 lg:-mb-2">La Tour de Ténèbres (Chaotique)</div>
      <div class="text-xl lg:text-3xl text-surface-400">Patch 7.1</div>
    </div>

    <div
      class="flex flex-wrap min-w-full justify-between mb-8 card border border-surface-200-800 p-4"
    >
      <div class="space-y-5 v-full dark">
        <div class="card preset-outlined-warning-500 gap-4 p-4">
          <p>Depuis le Patch 7.16 et <strong>pour le client anglais uniquement</strong>, les attaques "Lateral-core Phaser" et "Core-lateral Phaser" ont été interverties</p>
          <p>Lateral-core Phaser = Allez devant d'abord, sur les côtés ensuite</p>
          <p>Core-lateral Phaser = Allez sur les côtés d'abord, devant ensuite</p>
        </div>
        <div>
          <div class="text-xl mb-2">Dans quelle alliance êtes-vous ?</div>
          <Segment name="alliance" value={alliance} onValueChange={(e) => (alliance = e.value)}>
            <Segment.Item value="A">A</Segment.Item>
            <Segment.Item value="B">B</Segment.Item>
            <Segment.Item value="C">C</Segment.Item>
          </Segment>
        </div>
        <div>
          <div class="text-xl mb-2">Quel est votre rôle ?</div>
          <Segment name="role" value={role} onValueChange={(e) => (role = e.value)}>
            <Segment.Item value="Tank">Tank</Segment.Item>
            <Segment.Item value="Healer">Soigneur</Segment.Item>
            <Segment.Item value="Melee">Mêlée</Segment.Item>
            <Segment.Item value="Ranged">Distant</Segment.Item>
          </Segment>
        </div>
        <div>
          <div class="text-xl mb-2">Quel groupe êtes-vous ?</div>
          <Segment
            name="role"
            value={party?.toString()}
            onValueChange={(e) => (party = parseInt(e.value))}
          >
            <Segment.Item value="1">1</Segment.Item>
            <Segment.Item value="2">2</Segment.Item>
          </Segment>
        </div>
      </div>
      <div class="grow"></div>
      <div class="my-4 xl:my-0">
          <img style:max-height={'400px'} src={'./strats/healerout/overall.png'} alt="Vue générale de la stratégie"/>
      </div>
    </div>

    {#if typeof strat === 'string'}
      {strat}
    {:else if typeof strat === 'undefined'}
      <div></div>
    {:else}
      <div class="card border border-surface-200-800 p-4">
        <div class="flex flex-wrap items-center gap-2">
          <div class="content-center">
            <div class="capitalize font-semibold text-2xl mb-0">{optionsString}</div>
            {#if typeof stratPackage?.stratUrl === 'string'}
              <a
                class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href={stratPackage.stratUrl}
                >{stratPackage.description}
                <svg
                  class="w-4 h-4 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            {:else if typeof stratPackage?.stratUrl === 'object'}
              {stratPackage.description}
              {#each Object.entries(stratPackage.stratUrl) as [linkName, linkUrl]}
                <a
                  class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={linkUrl}
                  >{linkName}
                  <svg
                    class="w-4 h-4 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              {/each}
            {/if}
          </div>
          <div class="grow"></div>
          <div class="content-center">
            <Switch
              name="spotlight-toggle"
              checked={spotlight}
              onCheckedChange={(e) => (spotlight = e.checked)}>Highlight my spots</Switch
            >
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-between my-4">
          <div class="text-xl">{strat.notes}</div>
          {#if strat.strats.some((strat) => strat.alignmentTransforms)}
            <div class="content-center">
              <Segment
                name="alignment"
                value={alignment}
                onValueChange={(e) => (alignment = e.value)}
              >
                <Segment.Item value="original">Original</Segment.Item>
                <Segment.Item value="truenorth">True North</Segment.Item>
                <Segment.Item value="addrelative">Wall Relative</Segment.Item>
              </Segment>
            </div>
          {/if}
        </div>

        <div class="grid xl:grid-cols-6 grid-cols-3 gap-2">
          {#each strat.strats as step}
            {#key [spotlight, alignment]}
              <div
                class="space-y-4"
                class:col-span-2={step.alignmentImages && step.alignmentImages[alignment]}
              >
                <div class="capitalize font-semibold text-xl mb-0">{step.mechanic}</div>
                <div class="whitespace-pre-wrap text-l">{step.description}</div>
                <img
                  src={step.alignmentImages && step.alignmentImages[alignment]
                    ? step.alignmentImages[alignment]
                    : step.imageUrl}
                  style:mask-image={getMask(step)}
                  style:transform={step.alignmentTransforms
                    ? step.alignmentTransforms[alignment]
                    : step.transform}
                    alt="{step.description}"
                />
              </div>
            {/key}
          {/each}
          {#if strat?.swapNote && strat?.swapStrats}
            <div class="col-span-3">
              <Accordion
                value={accordion}
                onValueChange={(e) => (accordion = e.value)}
                multiple
                classes="card preset-tonal-primary border border-primary-700 text-surface-50"
              >
                <Accordion.Item panelPadding="py-4 px-4" value="swaps">
                  {#snippet control()}
                    <span class="text-xl">{strat.swapNote}</span>
                  {/snippet}
                  {#snippet panel()}
                    {#if strat?.swapWarning}
                      <aside
                        class="card preset-tonal-error preset-outlined-error-500 gap-4 p-4 mb-2"
                      >
                        <div class="alert-message">
                          <p>{strat.swapWarning}</p>
                        </div>
                      </aside>
                    {/if}
                    <div class="grid grid-cols-3 gap-2">
                      {#each strat.swapStrats as step}
                        {#key [spotlight, alignment]}
                          <div
                            class="space-y-4"
                            class:col-span-2={step.alignmentImages &&
                              step.alignmentImages[alignment]}
                          >
                            <div class="capitalize font-semibold text-xl mb-0">{step.mechanic}</div>
                            <div class="whitespace-pre-wrap text-l">{step.description}</div>
                            <img
                              src={step.alignmentImages && step.alignmentImages[alignment]
                                ? step.alignmentImages[alignment]
                                : step.imageUrl}
                              style:mask-image={getMask(step)}
                              style:transform={step.alignmentTransforms
                                ? step.alignmentTransforms[alignment]
                                : step.transform}
                                alt="{step.description}"
                            />
                          </div>
                        {/key}
                      {:else}
                        <div></div>
                      {/each}
                    </div>
                  {/snippet}
                </Accordion.Item>
              </Accordion>
            </div>
          {/if}
        </div>
      </div>
    {/if}
  </div>
</div>
