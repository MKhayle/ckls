<script lang="ts">
  import * as Sidebar from '$lib/components/ui/sidebar';
  import * as Collapsible from '$lib/components/ui/collapsible';
  import { useSidebar } from '$lib/components/ui/sidebar';
  import { base } from '$app/paths';
  import {
    ArrowLeftFromLine,
    ChevronRightIcon,
    BookSearch,
    MapPinCheck,
    Hammer,
    FileClock
  } from '@lucide/svelte';
  import Separator from './ui/separator/separator.svelte';

  const sidebar = useSidebar();

  const navItems = [
    {
      title: 'Contenus d\'Exploration',
      url: '#',
      defaultOpen: false,
      items: [
        {
          title: 'Arsenal de Baldesion',
          subtitle: 'BA - Eurêka (niveau 70)',
          url: '/upcoming'
        },
        {
          title: 'Delubrum Reginae (Sadique)',
          subtitle: 'DRS - Bozja (niveau 80)',
          url: '/upcoming'
        },
        {
          title: 'Tour Fourchue de la Force',
          subtitle: 'FTB - Lunule (niveau 100)',
          url: '/upcoming'
        },
        {
          title: 'Tour Fourchue de la Magie',
          subtitle: 'FTM - Lunule (niveau 100)',
          url: '/upcoming'
        }
      ]
    },
    {
      title: 'Raid en Alliance Chaotique',
      url: '#',
      defaultOpen: true,
      items: [
        {
          title: 'La Tour de Ténèbres',
          subtitle: 'COD - Raid en Alliance Chaotique',
          url: '/car/cod'
        }
      ]
    }
  ];

const navItemsGuides = [
    {
      title: 'Contenus d\'Exploration',
      url: '#',
      defaultOpen: true,
      items: [
        {
          title: 'Arsenal de Baldesion',
          subtitle: 'BA - Eurêka (niveau 70)',
          url: 'https://baguideconclave.crd.co'
        },
        {
          title: 'Delubrum Reginae (Sadique)',
          subtitle: 'DRS - Bozja (niveau 80)',
          url: 'https://drsguideconclave.crd.co'
        },
        {
          title: 'Tour Fourchue de la Force',
          subtitle: 'FTB - Lunule (niveau 100)',
          url: 'https://ftguideconclave.crd.co/'
        },
        {
          title: 'Tour Fourchue de la Magie',
          subtitle: 'FTM - Lunule (niveau 100)',
          url: '#'
        }
      ]
    },
    {
      title: 'Raid en Alliance Chaotique',
      url: '#',
      defaultOpen: true,
      items: [
        {
          title: 'La Tour de Ténèbres',
          subtitle: 'COD - Raid en Alliance Chaotique',
          url: 'https://carguideconclave.crd.co/'
        }
      ]
    }
  ];

  function handleLinkClick() {
    if (sidebar.isMobile) {
      sidebar.setOpenMobile(false);
    }
  }
</script>

<Sidebar.Root>
  <Sidebar.Content class="bg-background">
    <Sidebar.Group class="bg-emerald-900">
      <Sidebar.GroupLabel class="text-lg my-2 font-bold flex flex-row gap-2">
                <MapPinCheck class="size-6 text-white" /> Positions & responsabilités</Sidebar.GroupLabel>
      <Sidebar.GroupAction class="my-1" title="Fermer" onclick={() => sidebar.toggle()}>
        <div><ArrowLeftFromLine className="size-8" /></div>
      </Sidebar.GroupAction>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each navItems as item, index (index)}
            <Collapsible.Root class="group/collapsible" open={item.defaultOpen}>
              <Sidebar.MenuItem>
                <Collapsible.Trigger>
                  {#snippet child({ props })}
                    <Sidebar.MenuButton {...props}>
                      <span class="text-lg">{item.title}</span>
                      <ChevronRightIcon
                        class="ms-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
                      />
                    </Sidebar.MenuButton>
                  {/snippet}
                </Collapsible.Trigger>
                <Collapsible.Content>
                  <Sidebar.MenuSub>
                    {#each item.items as subItem, subIndex (subIndex)}
                      <Sidebar.MenuSubItem>
                        <Sidebar.MenuSubButton>
                          {#snippet child({ props })}
                            <a
                              data-sveltekit-replacestate
                              href={base}{subItem.url}
                              {...props}
                              onclick={handleLinkClick}
                              class="flex flex-col w-full items-start"
                            >
                              <div class="text-lg">{subItem.title}</div>
                              <div class="text-base text-surface-400">
                                {subItem.subtitle}
                              </div>
                            </a>
                          {/snippet}
                        </Sidebar.MenuSubButton>
                      </Sidebar.MenuSubItem>
                    {/each}
                  </Sidebar.MenuSub>
                </Collapsible.Content>
              </Sidebar.MenuItem>
            </Collapsible.Root>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
    <Sidebar.Group class="bg-sky-700">
      <Sidebar.GroupLabel class="text-lg my-2 font-bold gap-2">
                <BookSearch class="size-6 text-white " /> Guides approfondis</Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>          
          {#each navItemsGuides as item, index (index)}
            <Collapsible.Root class="group/collapsible">
              <Sidebar.MenuItem>
                <Collapsible.Trigger>
                  {#snippet child({ props })}
                    <Sidebar.MenuButton {...props}>
                      <span class="text-lg">{item.title}</span>
                      <ChevronRightIcon
                        class="ms-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
                      />
                    </Sidebar.MenuButton>
                  {/snippet}
                </Collapsible.Trigger>
                <Collapsible.Content>
                  <Sidebar.MenuSub>
                    {#each item.items as subItem, subIndex (subIndex)}
                      <Sidebar.MenuSubItem>
                        <Sidebar.MenuSubButton>
                          {#snippet child({ props })}
                            <a
                              data-sveltekit-replacestate
                              href={subItem.url}
                              {...props}
                              onclick={handleLinkClick}
                              class="flex flex-col w-full items-start"
                            >
                              <div class="text-lg">{subItem.title}</div>
                              <div class="text-base text-surface-400">
                                {subItem.subtitle}
                              </div>
                            </a>
                          {/snippet}
                        </Sidebar.MenuSubButton>
                      </Sidebar.MenuSubItem>
                    {/each}
                  </Sidebar.MenuSub>
                </Collapsible.Content>
              </Sidebar.MenuItem>
            </Collapsible.Root>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
    <Sidebar.Group>
      <Sidebar.GroupLabel class="text-lg my-2 font-bold">Ressources</Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>   
          <!-- <Sidebar.MenuItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://board.wtfdig.info"
              class="flex flex-col w-full items-start mx-2"
            >
              <div class="flex flex-row items-center gap-2 text-lg">
                <Grid3x3 class="size-6 text-primary " /><span class="font-semibold">board</span>
              </div>
              <div class="text-base text-surface-400">view + bundle strategy boards</div>
            </a>
          </Sidebar.MenuItem>
          <Separator class="my-2" />
          <Sidebar.GroupLabel class="flex flex-row items-center gap-2 text-lg font-semibold"
            ><Hammer class="size-6 text-primary" />Tools</Sidebar.GroupLabel
          >
          <Sidebar.MenuItem>
            <a
              data-sveltekit-replacestate
              href="/tools/idyllic"
              onclick={handleLinkClick}
              class="flex flex-col w-full items-start mx-2"
            >
              <div class="flex flex-row items-center gap-2 text-lg">
                <span class="font-semibold">idyllic helper</span>
              </div>
              <div class="text-base text-surface-400">M12S Idyllic Dream helper</div>
            </a>
          </Sidebar.MenuItem> 
          <Separator class="my-2" />  -->
          <Sidebar.MenuItem>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="{base}/changelog"
              class="flex flex-col w-full items-start mx-2"
            >
              <div class="flex flex-row items-center gap-2 text-lg">
                <FileClock class="size-6 text-white " /> Mises à jour</div>
            </a>
          </Sidebar.MenuItem>
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Content>
</Sidebar.Root>
