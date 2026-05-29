<!-- @ts-nocheck -->
<script lang="ts">
  // @ts-nocheck
  import { browser } from '$app/environment';
  import { base } from '$app/paths';
  import type {
    Alliance,
    Role,
    PlayerStrats,
    Alignment,
    MechanicStrat,
    Language,
    LocalizedText
  } from './+page';
  import { Accordion, Segment, Switch } from '$lib/components/ui';
  import { ArrowClockwise, ArrowCounterclockwise } from 'svelte-bootstrap-icons';

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
  let language: Language = $state(getInitialLanguage());
  let accordion = $state(['swaps']);
  let optionsString = $derived(getOptionsString(stratName, alliance, role, party));
  let languageUpdateId = 0;
  const preloadedImageSrcs = new Set<string>();
  const overviewImageSrc = 'car/strats/healerout/overall.png';
  const roleIcons = {
    t: { src: getAssetSrc('icons/tank.png'), alt: 'Tank' },
    m: { src: getAssetSrc('icons/melee.png'), alt: 'Melee' },
    r: { src: getAssetSrc('icons/ranged.png'), alt: 'Ranged' }
  };
  const localizedText = (english: string, french: string): LocalizedText => ({ english, french });
  const uiText = {
    title: localizedText('The Cloud of Darkness (Chaotic)', 'La Tour de Ténèbres (Chaotique)'),
    language: localizedText('Language', 'Langue'),
    french: localizedText('French', 'Français'),
    swapIntro: localizedText(
      'Swap corresponds to the Looming Chaos mechanic, which',
      '"Swap" correspond à la mécanique du Chaos Rampant, qui'
    ),
    swapAction: localizedText('exchanges', 'échange'),
    swapEnd: localizedText(
      'your position with another player.',
      'votre position avec un autre joueur.'
    ),
    priorityIntro: localizedText('Priority defines', 'La "Priorité" définit'),
    priorityAction: localizedText('the order', "l'ordre"),
    priorityEnd: localizedText(
      "in which player's movements must be executed.",
      'dans lequel les déplacements des joueurs doivent être effectués.'
    ),
    allianceQuestion: localizedText(
      'Which alliance are you in?',
      'Dans quelle alliance êtes-vous ?'
    ),
    roleQuestion: localizedText('What is your role?', 'Quel est votre rôle ?'),
    healer: localizedText('Healer', 'Soigneur'),
    melee: localizedText('Melee', 'Mêlée'),
    ranged: localizedText('Ranged', 'Distant'),
    partyQuestion: localizedText('Which light party are you in?', 'Quel groupe êtes-vous ?'),
    overviewAlt: localizedText('Overview of the strategy', 'Vue générale de la stratégie'),
    spotlight: localizedText('Highlight my spots', 'Mettre en surbrillance mes positions')
  };

  $effect(() => {
    if (browser) {
      const storedAlliance = localStorage.getItem('chaotic-alliance');
      const storedRole = localStorage.getItem('chaotic-role');
      const storedParty = localStorage.getItem('chaotic-party');
      const storedLanguage = localStorage.getItem('chaotic-language');
      if (storedAlliance) {
        alliance = JSON.parse(storedAlliance);
      }
      if (storedRole) {
        role = JSON.parse(storedRole);
      }
      if (storedParty) {
        party = JSON.parse(storedParty);
      }
      if (!data.language && storedLanguage) {
        language = JSON.parse(storedLanguage);
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
      if (language) {
        localStorage.setItem('chaotic-language', JSON.stringify(language));
      }
    }
  });

  $effect(() => {
    if (browser) {
      const alternateLanguage = language === 'english' ? 'french' : 'english';
      void preloadLanguageImages(alternateLanguage);
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

  function getInitialLanguage(): Language {
    return data.language ?? 'french';
  }

  async function setLanguage(value: Language) {
    const updateId = ++languageUpdateId;

    await preloadLanguageImages(value);
    if (updateId !== languageUpdateId) return;

    language = value;
    updateLanguageUrl(value);
  }

  function updateLanguageUrl(value: Language) {
    if (!browser) return;

    const languageSegment = value === 'english' ? 'en' : 'fr';
    const basePath = window.location.pathname.replace(/\/(?:en|fr)\/?$/, '');
    const nextPath = `${basePath}/${languageSegment}`;
    const nextUrl = `${nextPath}${window.location.search}${window.location.hash}`;

    window.history.replaceState(window.history.state, '', nextUrl);
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

  function getImageSrc(step: MechanicStrat): string | undefined {
    return getStepImageSrcForLanguage(step, language);
  }

  function getStepImageSrcForLanguage(
    step: MechanicStrat,
    targetLanguage: Language
  ): string | undefined {
    const imageSrc =
      step.alignmentImages && step.alignmentImages[alignment]
        ? step.alignmentImages[alignment]
        : step.imageUrl;

    return getLocalizedImageSrc(imageSrc, targetLanguage);
  }

  function getLocalizedImageSrc(src?: string, targetLanguage = language): string | undefined {
    const languageFolder = targetLanguage === 'english' ? 'EN' : 'FR';
    return getAssetSrc(src?.replace('healerout', languageFolder));
  }

  function getAssetSrc(src?: string): string {
    if (!src) return '';
    if (/^(?:[a-z]+:)?\/\//i.test(src) || src.startsWith('data:')) return src;
    if (base && src.startsWith(`${base}/`)) return src;

    const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
    return `${base}${normalizedSrc}`;
  }

  async function preloadLanguageImages(targetLanguage: Language) {
    if (!browser) return;

    await Promise.allSettled(getVisibleImageSrcs(targetLanguage).map(preloadImage));
  }

  function getVisibleImageSrcs(targetLanguage: Language): string[] {
    const imageSrcs = new Set<string>();
    const overviewSrc = getLocalizedImageSrc(overviewImageSrc, targetLanguage);
    if (overviewSrc) imageSrcs.add(overviewSrc);

    if (typeof strat !== 'string' && strat) {
      for (const step of [...strat.strats, ...(strat.swapStrats ?? [])]) {
        const imageSrc = getStepImageSrcForLanguage(step, targetLanguage);
        if (imageSrc) imageSrcs.add(imageSrc);
      }
    }

    return [...imageSrcs];
  }

  function preloadImage(src: string) {
    if (preloadedImageSrcs.has(src)) return Promise.resolve();
    preloadedImageSrcs.add(src);

    return new Promise<void>((resolve) => {
      const image = new Image();
      const timeout = window.setTimeout(resolve, 1500);

      image.onload = () => {
        window.clearTimeout(timeout);
        resolve();
      };
      image.onerror = () => {
        window.clearTimeout(timeout);
        resolve();
      };
      image.src = src;
    });
  }

  function getText(text?: LocalizedText): string {
    return text?.[language] ?? '';
  }

  function getPriorityParts(text: string) {
    const match = text.match(/^(.*?)([tmr])\s*>\s*([tmr])\s*>\s*([tmr])$/i);
    if (!match) return null;

    return {
      prefix: match[1].trim(),
      roles: match.slice(2).map((role) => role.toLowerCase() as keyof typeof roleIcons)
    };
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

{#snippet mechanicLabel(step: MechanicStrat)}
  {@const mechanicText = getText(step.mechanic)}
  {@const priorityParts = getPriorityParts(mechanicText)}
  <div class="font-semibold text-xl mb-0">
    {#if priorityParts}
      <span class="inline-flex items-center gap-2 align-middle">
        {#if priorityParts.prefix}
          <span>{priorityParts.prefix}</span>
        {/if}
        {#each priorityParts.roles as role, index}
          {#if index > 0}
            <span aria-hidden="true">&gt;</span>
          {/if}
          <img
            class="inline-block size-6 object-contain"
            src={roleIcons[role].src}
            alt={roleIcons[role].alt}
            title={roleIcons[role].alt}
          />
        {/each}
      </span>
    {:else}
      {mechanicText}
    {/if}
  </div>
{/snippet}

<div class="container grow px-4 mx-auto mb-6">
  <div class="container">
    <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div>
        <div class="preset-typo-display-1 mt-2 lg:mt-0 lg:-mb-2">{getText(uiText.title)}</div>
        <div class="text-xl lg:text-3xl text-surface-400">Patch 7.1</div>
      </div>
      <div class="flex items-center gap-2">
        <div class="text-xl">{getText(uiText.language)}</div>
        <Segment name="language" value={language} onValueChange={(e) => setLanguage(e.value)}>
          <Segment.Item value="french">{getText(uiText.french)}</Segment.Item>
          <Segment.Item value="english">English</Segment.Item>
        </Segment>
      </div>
    </div>

    <div
      class="flex flex-wrap min-w-full justify-between mb-8 card border border-surface-200-800 p-4"
    >
      <div class="space-y-5 v-full dark">
        <div class="card preset-outlined-warning-500 gap-4 p-4">
          <p>
            {getText(uiText.swapIntro)}
            <strong>{getText(uiText.swapAction)}</strong>
            {getText(uiText.swapEnd)}
          </p>
          <p>
            {getText(uiText.priorityIntro)}
            <strong>{getText(uiText.priorityAction)}</strong>
            {getText(uiText.priorityEnd)}
          </p>
          <p></p>
        </div>
        <div>
          <div class="text-xl mb-2">{getText(uiText.allianceQuestion)}</div>
          <Segment name="alliance" value={alliance} onValueChange={(e) => (alliance = e.value)}>
            <Segment.Item value="A">A</Segment.Item>
            <Segment.Item value="B">B</Segment.Item>
            <Segment.Item value="C">C</Segment.Item>
          </Segment>
        </div>
        <div>
          <div class="text-xl mb-2">{getText(uiText.roleQuestion)}</div>
          <Segment name="role" value={role} onValueChange={(e) => (role = e.value)}>
            <Segment.Item value="Tank">Tank</Segment.Item>
            <Segment.Item value="Healer">{getText(uiText.healer)}</Segment.Item>
            <Segment.Item value="Melee">{getText(uiText.melee)}</Segment.Item>
            <Segment.Item value="Ranged">{getText(uiText.ranged)}</Segment.Item>
          </Segment>
        </div>
        <div>
          <div class="text-xl mb-2">{getText(uiText.partyQuestion)}</div>
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
        <img
          style:max-height={'400px'}
          src={getLocalizedImageSrc(overviewImageSrc)}
          alt={getText(uiText.overviewAlt)}
        />
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
                >{getText(stratPackage.description)}
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
              {getText(stratPackage.description)}
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
              onCheckedChange={(e) => (spotlight = e.checked)}>{getText(uiText.spotlight)}</Switch
            >
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-between my-4">
          <div class="text-xl">{getText(strat.notes)}</div>
        </div>

        <div class="grid xl:grid-cols-6 grid-cols-3 gap-2">
          {#each strat.strats as step}
            {#key [spotlight, alignment]}
              <div
                class="space-y-4"
                class:col-span-2={step.alignmentImages && step.alignmentImages[alignment]}
              >
                {@render mechanicLabel(step)}
                <div class="whitespace-pre-wrap text-l">{getText(step.description)}</div>
                {#if getImageSrc(step)}
                  <img
                    src={getImageSrc(step)}
                    style:mask-image={getMask(step)}
                    style:transform={step.alignmentTransforms
                      ? step.alignmentTransforms[alignment]
                      : step.transform}
                    alt={getText(step.description)}
                  />
                {/if}
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
                    <span class="text-xl">{getText(strat.swapNote)}</span>
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
                            {@render mechanicLabel(step)}
                            <div class="whitespace-pre-wrap text-l">
                              {getText(step.description)}
                            </div>
                            {#if getImageSrc(step)}
                              <img
                                src={getImageSrc(step)}
                                style:mask-image={getMask(step)}
                                style:transform={step.alignmentTransforms
                                  ? step.alignmentTransforms[alignment]
                                  : step.transform}
                                alt={getText(step.description)}
                              />
                            {/if}
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
