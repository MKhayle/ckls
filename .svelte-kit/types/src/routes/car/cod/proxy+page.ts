// @ts-nocheck
import type { Url } from 'url';
import type { PageLoad } from './$types';

export const load = ({ params }: Parameters<PageLoad>[0]) => {
  return {
    strats: [healerOutStrat]
  };
};

export type Role = 'Tank' | 'Healer' | 'Melee' | 'Ranged';
export type StartingArea = 'Tiles' | 'Platform';
export type Alignment = 'original' | 'truenorth' | 'addrelative';
export type Alliance = 'A' | 'B' | 'C';

export interface MechanicStrat {
  mechanic: string;
  description: string;
  imageUrl?: string;
  imageRotated?: string;
  mask?: string;
  transform?: string;
  alignmentTransforms?: Record<Alignment, string>;
  alignmentImages?: Record<Alignment, string>;
  alignmentMasks?: Record<Alignment, string>;
}

export interface PlayerStrats {
  alliance: Alliance;
  role: Role;
  party: number;
  notes: string;
  startingArea: StartingArea;
  strats: MechanicStrat[];
  swapNote?: string;
  swapWarning?: string;
  swapStrats?: MechanicStrat[];
}

interface Strat {
  stratName: string;
  stratUrl: string | Record<string, string>;
  description: string;
  notes: string;
  strats: PlayerStrats[];
}


const healerOutStrat: Strat = {
  stratName: 'healerout',
  stratUrl: 'https://docs.google.com/presentation/d/1TRqF03mJQNoYTibS0X1tURwyZTjghTUWnoF8c_r_tEA',
  description: 'Stratégie originelle "HealerOutCAR" par Jake Hale',
  notes: '',
  strats: [
    {
      alliance: 'A',
      role: 'Tank',
      party: 1,
      notes: 'Plateforme gauche/ouest, orientez le boss vers l\'intérieur',
      startingArea: 'Platform',
      strats: [
        {
          mechanic: 'paires',
          description: 'Proche du boss\nIntérieur\nEn duo avec le Soigneur de l\'Alliance B',
          imageUrl: './strats/healerout/platform-west-pairs.png',
          mask: 'radial-gradient(circle at 71.0% 49.1%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'spread',
          description: 'Intérieur',
          imageUrl: './strats/healerout/platform-west-spread.png',
          mask: 'radial-gradient(circle at 85.8% 50.5%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: 'tours',
          description: 'Nord/Extérieur',
          imageUrl: './strats/healerout/platform-west-towers.png',
          mask: 'radial-gradient(circle at 53.7% 17.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 33.0% 78.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'graine',
          description: 'Aucune, restez sur le boss',
          imageUrl: './strats/healerout/platform-west-brambles.png',
          mask: 'radial-gradient(circle at 52% 48%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        },
        {
          mechanic: 'aoes',
          description: 'Platform Inside North',
          imageUrl: './strats/healerout/platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 76% 37%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: 'swap',
          description: 'Outside',
          imageUrl: './strats/healerout/platform-west-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 23% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: 'I got a clean swap to the NE or SE tiles! Now what?',
      swapStrats: [
        {
          mechanic: 'start',
          description: 'NE/SE west of corner tile',
          imageUrl: './strats/healerout/postswap-a-tiles-east.png',
          mask: 'radial-gradient(circle at 36.5% 21.3%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 34.5% 77.7%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
        },
        {
          mechanic: 'priority: t > m > r',
          description: "You're priority 1!\nMove first on mechanics!"
        },
        {
          mechanic: 'chaser',
          description: 'CCW of corner tile',
          imageUrl: './strats/healerout/tiles-east-chasers.png',
          mask: 'radial-gradient(circle at 36.4% 21.1%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 60.3% 68.7%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        }
      ]
    },
    {
      alliance: 'A',
      role: 'Tank',
      party: 2,
      notes: 'SW/Back Left tiles',
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: 'start',
          description: 'SW inner tile',
          imageUrl: './strats/healerout/tiles-southwest.png',
          mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: 'priority: t>m>r',
          description: "You're priority 1!\nMove first on mechanics!"
        }
      ],
      swapNote: 'I got a clean swap to the East platform! Now what?',
      swapStrats: [
        {
          mechanic: 'paires',
          description: 'Close to boss\nInside\nw/ Healer from B',
          imageUrl: './strats/healerout/postswap-a-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 30.7% 49.9%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'spread',
          description: 'Inside',
          imageUrl: './strats/healerout/postswap-a-platform-east-spread.png',
          mask: 'radial-gradient(circle at 11.5% 49%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'tours',
          description: 'North/Outside',
          imageUrl: './strats/healerout/postswap-a-platform-east-towers.png',
          mask: 'radial-gradient(circle at 49.5% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 68% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Platform Inside North',
          imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 20.5% 37.9%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'A',
      role: 'Healer',
      party: 1,
      notes: 'Left/West platform, Boss faces Inside',
      startingArea: 'Platform',
      strats: [
        {
          mechanic: 'paires',
          description: 'Far from boss\nNorth Outside\nw/ Ranged',
          imageUrl: './strats/healerout/platform-west-pairs.png',
          mask: 'radial-gradient(circle at 24.0% 22.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'spread',
          description: 'Outside',
          imageUrl: './strats/healerout/platform-west-spread.png',
          mask: 'radial-gradient(circle at 20.1% 50.5%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: 'tours',
          description: 'South/Inside',
          imageUrl: './strats/healerout/platform-west-towers.png',
          mask: 'radial-gradient(circle at 52.3% 35.3%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 72.4% 78.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'graine',
          description: 'Inside North',
          imageUrl: './strats/healerout/platform-west-brambles.png',
          mask: 'radial-gradient(circle at 60.6% 35.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Platform Outside South',
          imageUrl: './strats/healerout/platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 37.1% 63.5%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: 'swap',
          description: 'Inside',
          imageUrl: './strats/healerout/platform-west-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 83.3% 49.8%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: 'I got a clean swap to the East platform! Now what?',
      swapStrats: [
        {
          mechanic: 'paires',
          description: 'Far from boss\nNorth Outside\nw/ Ranged',
          imageUrl: './strats/healerout/postswap-h-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 84.7% 20.4%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'spread',
          description: 'Outside',
          imageUrl: './strats/healerout/postswap-h-platform-east-spread.png',
          mask: 'radial-gradient(circle at 74.7% 45.7%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: 'tours',
          description: 'South/Inside',
          imageUrl: './strats/healerout/postswap-h-platform-east-towers.png',
          mask: 'radial-gradient(circle at 48.8% 34.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 31% 78.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Platform Outside South',
          imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 61.9% 62.3%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'A',
      role: 'Healer',
      party: 2,
      notes: 'Left/West platform, Boss faces Inside',
      startingArea: 'Platform',
      strats: [
        {
          mechanic: 'paires',
          description: 'Far from boss\nSouth Outside\nw/ Melee',
          imageUrl: './strats/healerout/platform-west-pairs.png',
          mask: 'radial-gradient(circle at 24.2% 79.3%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'spread',
          description: 'South',
          imageUrl: './strats/healerout/platform-west-spread.png',
          mask: 'radial-gradient(circle at 55.7% 79.7%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: 'tours',
          description: 'South/Inside',
          imageUrl: './strats/healerout/platform-west-towers.png',
          mask: 'radial-gradient(circle at 52.3% 35.3%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 72.4% 78.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'graine',
          description: 'Outside North',
          imageUrl: './strats/healerout/platform-west-brambles.png',
          mask: 'radial-gradient(circle at 37.8% 32.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Ring Outside South',
          imageUrl: './strats/healerout/platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 29.4% 87.0%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: 'swap',
          description: 'Inside',
          imageUrl: './strats/healerout/platform-west-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 83.3% 49.8%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: 'I got a clean swap to the East platform! Now what?',
      swapStrats: [
        {
          mechanic: 'paires',
          description: 'Far from boss\nSouth Outside\nw/ Melee',
          imageUrl: './strats/healerout/postswap-h-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 81% 74.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'spread',
          description: 'South',
          imageUrl: './strats/healerout/postswap-h-platform-east-spread.png',
          mask: 'radial-gradient(circle at 39.1% 82.2%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: 'tours',
          description: 'South/Inside',
          imageUrl: './strats/healerout/postswap-h-platform-east-towers.png',
          mask: 'radial-gradient(circle at 48.8% 34.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 31% 78.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Ring Outside South',
          imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 67.9% 86.6%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'A',
      role: 'Melee',
      party: 1,
      notes: 'Left/West platform, Boss faces Inside',
      startingArea: 'Platform',
      strats: [
        {
          mechanic: 'paires',
          description: 'Close to boss\nSouth Outside\nw/ Healer 2',
          imageUrl: './strats/healerout/platform-west-pairs.png',
          mask: 'radial-gradient(circle at 35.3% 68.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'spread',
          description: 'South Outside',
          imageUrl: './strats/healerout/platform-west-spread.png',
          mask: 'radial-gradient(circle at 21.7% 76.2%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: 'tours',
          description: 'North/Outside',
          imageUrl: './strats/healerout/platform-west-towers.png',
          mask: 'radial-gradient(circle at 53.7% 17.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 33.0% 78.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'graine',
          description: 'None, stay on boss',
          imageUrl: './strats/healerout/platform-west-brambles.png',
          mask: 'radial-gradient(circle at 51% 48%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        },
        {
          mechanic: 'aoes',
          description: 'Platform Inside South',
          imageUrl: './strats/healerout/platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 77.3% 60.9%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: 'swap',
          description: 'Outside',
          imageUrl: './strats/healerout/platform-west-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 23% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: 'I got a clean swap to the NE or SE tiles! Now what?',
      swapStrats: [
        {
          mechanic: 'start',
          description:
            "NE/SE North/South cubby\nIf the swap puts you in East cubby, that's fine too.",
          imageUrl: './strats/healerout/postswap-a-tiles-east.png',
          mask: 'radial-gradient(circle at 58.9% 9.7%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 58.9% 90.4%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
        },
        {
          mechanic: 'priority: t>m>r',
          description: "You're priority 2!\nMove second on mechanics!\nLet the Tank move first."
        },
        {
          mechanic: 'chaser',
          description: 'NE/SE North/South cubby',
          imageUrl: './strats/healerout/tiles-east-chasers.png',
          mask: 'radial-gradient(circle at 59.8% 6.3%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 59.8% 93.8%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        }
      ]
    },
    {
      alliance: 'A',
      role: 'Melee',
      party: 2,
      notes: 'SW/Back Left tiles',
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: 'start',
          description: 'SW South cubby',
          imageUrl: './strats/healerout/tiles-southwest.png',
          mask: 'radial-gradient(circle at 49.7% 76.9%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: 'priority: t>m>r',
          description: "You're priority 2!\nMove second on mechanics!\nLet the Tank move first."
        }
      ],
      swapNote: 'I got a clean swap to the East platform! Now what?',
      swapStrats: [
        {
          mechanic: 'paires',
          description: 'Close to boss\nSouth Outside\nw/ Healer 2',
          imageUrl: './strats/healerout/postswap-a-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 67.5% 64.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'spread',
          description: 'South Outside',
          imageUrl: './strats/healerout/postswap-a-platform-east-spread.png',
          mask: 'radial-gradient(circle at 76.3% 74.0%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'tours',
          description: 'North/Outside',
          imageUrl: './strats/healerout/postswap-a-platform-east-towers.png',
          mask: 'radial-gradient(circle at 49.5% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 68% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Platform Inside South',
          imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 22% 59.8%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'A',
      role: 'Ranged',
      party: 1,
      notes: 'Left/West platform, Boss faces Inside',
      startingArea: 'Platform',
      strats: [
        {
          mechanic: 'paires',
          description: 'Close to boss\nNorth Outside\nw/ Healer 1',
          imageUrl: './strats/healerout/platform-west-pairs.png',
          mask: 'radial-gradient(circle at 35.7% 35.2%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'spread',
          description: 'North Outside',
          imageUrl: './strats/healerout/platform-west-spread.png',
          mask: 'radial-gradient(circle at 20.8% 24.1%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: 'tours',
          description: 'North/Outside',
          imageUrl: './strats/healerout/platform-west-towers.png',
          mask: 'radial-gradient(circle at 53.7% 17.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 33.0% 78.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'graine',
          description: 'Inside South',
          imageUrl: './strats/healerout/platform-west-brambles.png',
          mask: 'radial-gradient(circle at 61.9% 63.9%, black 10%, rgba(0, 0, 0, 0.4) 0%)'
        },
        {
          mechanic: 'aoes',
          description: 'Platform Outside North',
          imageUrl: './strats/healerout/platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 34.8% 36.4%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: 'swap',
          description: 'Outside',
          imageUrl: './strats/healerout/platform-west-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 23% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: 'I got a clean swap to the NE or SE tiles! Now what?',
      swapStrats: [
        {
          mechanic: 'start',
          description:
            "NE/SE East cubby\nIf the swap puts you in North/South cubby, that's fine too.",
          imageUrl: './strats/healerout/postswap-a-tiles-east.png',
          mask: 'radial-gradient(circle at 81.5% 20.5%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 82.7% 78.2%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
        },
        {
          mechanic: 'priority: t>m>r',
          description:
            "You're priority 3!\nMove last on mechanics!\nLet the Tank and Melee\nmove first."
        },
        {
          mechanic: 'chaser',
          description: 'NE/SE East cubby',
          imageUrl: './strats/healerout/tiles-east-chasers.png',
          mask: 'radial-gradient(circle at 80.6% 23.8%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 88.5% 79.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        }
      ]
    },
    {
      alliance: 'A',
      role: 'Ranged',
      party: 2,
      notes: 'SW/Back Left tiles',
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: 'start',
          description: 'SW West cubby',
          imageUrl: './strats/healerout/tiles-southwest.png',
          mask: 'radial-gradient(circle at 19.7% 48.9%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: 'priority: t>m>r',
          description:
            "You're priority 3!\nMove last on mechanics!\nLet the Tank and Melee\nmove first."
        }
      ],
      swapNote: 'I got a clean swap to the East platform! Now what?',
      swapStrats: [
        {
          mechanic: 'paires',
          description: 'Close to boss\nNorth Outside\nw/ Healer 1',
          imageUrl: './strats/healerout/postswap-a-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 70.5% 29.9%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'spread',
          description: 'North Outside',
          imageUrl: './strats/healerout/postswap-a-platform-east-spread.png',
          mask: 'radial-gradient(circle at 71.2% 24.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'tours',
          description: 'North/Outside',
          imageUrl: './strats/healerout/postswap-a-platform-east-towers.png',
          mask: 'radial-gradient(circle at 49.5% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 68% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Platform Outside North',
          imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 59.6% 36.4%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Tank',
      party: 1,
      notes: 'NW/Front Left tiles',
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: 'start',
          description: 'NW inner tile',
          imageUrl: './strats/healerout/tiles-northwest.png',
          mask: 'radial-gradient(circle at 81% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: 'priority: t>m>r',
          description: "You're priority 1!\nMove first on mechanics!"
        }
      ],
      swapNote: 'I got a clean swap to the East platform! Now what?',
      swapStrats: [
        {
          mechanic: 'paires',
          description: 'Close to boss\nInside\nw/ Healer from B',
          imageUrl: './strats/healerout/postswap-b-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 30.7% 49.9%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'spread',
          description: 'Inside',
          imageUrl: './strats/healerout/postswap-b-platform-east-spread.png',
          mask: 'radial-gradient(circle at 11.5% 49%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'tours',
          description: 'North/Outside',
          imageUrl: './strats/healerout/postswap-b-platform-east-towers.png',
          mask: 'radial-gradient(circle at 49.5% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 68% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Platform Inside North',
          imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 20.5% 37.9%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Tank',
      party: 2,
      notes: 'NE/Front Right tiles',
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: 'start',
          description: 'NE inner tile',
          imageUrl: './strats/healerout/tiles-northeast.png',
          mask: 'radial-gradient(circle at 24.9% 51.4%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: 'priority: t>m>r',
          description: "You're priority 1!\nMove first on mechanics!"
        }
      ],
      swapNote: 'I got a clean swap to the West platform! Now what?',
      swapStrats: [
        {
          mechanic: 'paires',
          description: 'Close to boss\nInside\nw/ Healer from B',
          imageUrl: './strats/healerout/postswap-b-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 71.9% 48%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'spread',
          description: 'Inside',
          imageUrl: './strats/healerout/postswap-b-platform-west-spread.png',
          mask: 'radial-gradient(circle at 87.9% 50.8%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'tours',
          description: 'North/Outside',
          imageUrl: './strats/healerout/postswap-b-platform-west-towers.png',
          mask: 'radial-gradient(circle at 49.5% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 31% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Platform Inside North',
          imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 76% 37%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Healer',
      party: 1,
      notes: 'Left/West platform, Boss faces Inside',
      startingArea: 'Platform',
      strats: [
        {
          mechanic: 'paires',
          description: 'Far from boss\nInside\nw/ Tank',
          imageUrl: './strats/healerout/platform-west-pairs.png',
          mask: 'radial-gradient(circle at 87.4% 49.1%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'spread',
          description: 'North',
          imageUrl: './strats/healerout/platform-west-spread.png',
          mask: 'radial-gradient(circle at 56.6% 12.8%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: 'tours',
          description: 'South/Inside',
          imageUrl: './strats/healerout/platform-west-towers.png',
          mask: 'radial-gradient(circle at 52.3% 35.3%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 72.4% 78.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'graine',
          description: 'Outside South',
          imageUrl: './strats/healerout/platform-west-brambles.png',
          mask: 'radial-gradient(circle at 37.1% 55%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Ring Outside North',
          imageUrl: './strats/healerout/platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 32.2% 15.5%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: 'swap',
          description: 'Inside',
          imageUrl: './strats/healerout/platform-west-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 83.3% 49.8%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: 'I got a clean swap to the East platform! Now what?',
      swapStrats: [
        {
          mechanic: 'paires',
          description: 'Far from boss\nInside\nw/ Tank',
          imageUrl: './strats/healerout/postswap-h-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 13.7% 50%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'spread',
          description: 'North',
          imageUrl: './strats/healerout/postswap-h-platform-east-spread.png',
          mask: 'radial-gradient(circle at 40% 13.2%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'tours',
          description: 'South/Inside',
          imageUrl: './strats/healerout/postswap-h-platform-east-towers.png',
          mask: 'radial-gradient(circle at 48.8% 34.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 31% 78.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Ring Outside North',
          imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 70% 18.7%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Healer',
      party: 2,
      notes: 'Right/East platform, Boss faces Inside',
      startingArea: 'Platform',
      strats: [
        {
          mechanic: 'paires',
          description: 'Far from boss\nInside\nw/ Tank',
          imageUrl: './strats/healerout/platform-east-pairs.png',
          mask: 'radial-gradient(circle at 12.6% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: 'spread',
          description: 'North',
          imageUrl: './strats/healerout/platform-east-spread.png',
          mask: 'radial-gradient(circle at 39% 17%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'tours',
          description: 'South/Inside',
          imageUrl: './strats/healerout/platform-east-towers.png',
          mask: 'radial-gradient(circle at 47.8% 35.5%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 28.5% 74.1%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'graine',
          description: 'Outside South',
          imageUrl: './strats/healerout/platform-east-brambles.png',
          mask: 'radial-gradient(circle at 64% 56.3%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Ring Outside North',
          imageUrl: './strats/healerout/platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 70% 18.7%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: 'swap',
          description: 'Inside',
          imageUrl: './strats/healerout/platform-east-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 18.9% 51.6%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: 'I got a clean swap to the West platform! Now what?',
      swapStrats: [
        {
          mechanic: 'paires',
          description: 'Far from boss\nInside\nw/ Tank',
          imageUrl: './strats/healerout/postswap-h-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 89.9% 49.2%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'spread',
          description: 'North',
          imageUrl: './strats/healerout/postswap-h-platform-west-spread.png',
          mask: 'radial-gradient(circle at 58.3% 15%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'tours',
          description: 'South/Inside',
          imageUrl: './strats/healerout/postswap-h-platform-west-towers.png',
          mask: 'radial-gradient(circle at 50% 34.5%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 70% 78.3%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Ring Outside North',
          imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 33% 15.5%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Melee',
      party: 1,
      notes: 'NW/Front Left tiles',
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: 'start',
          description: 'NW North cubby',
          imageUrl: './strats/healerout/tiles-northwest.png',
          mask: 'radial-gradient(circle at 49.1% 19.3%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: 'priority: t>m>r',
          description: "You're priority 2!\nMove second on mechanics!\nLet the Tank move first."
        }
      ],
      swapNote: 'I got a clean swap to the East platform! Now what?',
      swapStrats: [
        {
          mechanic: 'paires',
          description: 'Close to boss\nSouth Outside\nw/ Healer 2 from A',
          imageUrl: './strats/healerout/postswap-b-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 69.2% 65.3%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'spread',
          description: 'South Outside',
          imageUrl: './strats/healerout/postswap-b-platform-east-spread.png',
          mask: 'radial-gradient(circle at 76.4% 74.7%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'tours',
          description: 'North/Outside',
          imageUrl: './strats/healerout/postswap-b-platform-east-towers.png',
          mask: 'radial-gradient(circle at 50% 19%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 69% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Platform Inside South',
          imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 22% 59.8%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Melee',
      party: 2,
      notes: 'NE/Front Right tiles',
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: 'start',
          description: 'NE North cubby',
          imageUrl: './strats/healerout/tiles-northeast.png',
          mask: 'radial-gradient(circle at 52% 20%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: 'priority: t>m>r',
          description: "You're priority 2!\nMove second on mechanics!\nLet the Tank move first."
        }
      ],
      swapNote: 'I got a clean swap to the West platform! Now what?',
      swapStrats: [
        {
          mechanic: 'paires',
          description: 'Close to boss\nSouth Outside\nw/ Healer 2 from C',
          imageUrl: './strats/healerout/postswap-b-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 34.9% 66.3%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'spread',
          description: 'South Outside',
          imageUrl: './strats/healerout/postswap-b-platform-west-spread.png',
          mask: 'radial-gradient(circle at 23.4% 76.5%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'tours',
          description: 'North/Outside',
          imageUrl: './strats/healerout/postswap-b-platform-west-towers.png',
          mask: 'radial-gradient(circle at 49.5% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 31% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Platform Inside South',
          imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 78% 60.9%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Ranged',
      party: 1,
      notes: 'NW/Front Left tiles',
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: 'start',
          description: 'NW West cubby',
          imageUrl: './strats/healerout/tiles-northwest.png',
          mask: 'radial-gradient(circle at 19.8% 48.3%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: 'priority: t>m>r',
          description:
            "You're priority 3!\nMove last on mechanics!\nLet the Tank and Melee\nmove first."
        }
      ],
      swapNote: 'I got a clean swap to the East platform! Now what?',
      swapStrats: [
        {
          mechanic: 'paires',
          description: 'Close to boss\nNorth Outside\nw/ Healer 1 from A',
          imageUrl: './strats/healerout/postswap-b-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 71.9% 30.7%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'spread',
          description: 'North Outside',
          imageUrl: './strats/healerout/postswap-b-platform-east-spread.png',
          mask: 'radial-gradient(circle at 71.7% 26.9%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'tours',
          description: 'North/Outside',
          imageUrl: './strats/healerout/postswap-b-platform-east-towers.png',
          mask: 'radial-gradient(circle at 50% 19%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 69% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Platform Outside North',
          imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 59.6% 36.4%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Ranged',
      party: 2,
      notes: 'NE/Front Right tiles',
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: 'start',
          description: 'NE East cubby',
          imageUrl: './strats/healerout/tiles-northeast.png',
          mask: 'radial-gradient(circle at 81.5% 49.4%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: 'priority: t>m>r',
          description:
            "You're priority 3!\nMove last on mechanics!\nLet the Tank and Melee\nmove first."
        }
      ],
      swapNote: 'I got a clean swap to the West platform! Now what?',
      swapStrats: [
        {
          mechanic: 'paires',
          description: 'Close to boss\nNorth Outside\nw/ Healer 1 from C',
          imageUrl: './strats/healerout/postswap-b-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 36.1% 34.7%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'spread',
          description: 'North Outside',
          imageUrl: './strats/healerout/postswap-b-platform-west-spread.png',
          mask: 'radial-gradient(circle at 22.4% 25.3%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'tours',
          description: 'North/Outside',
          imageUrl: './strats/healerout/postswap-b-platform-west-towers.png',
          mask: 'radial-gradient(circle at 49.5% 18%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 31% 78%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Platform Outside North',
          imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 36% 36.4%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Tank',
      party: 1,
      notes: 'Right/East platform, Face boss Inside',
      startingArea: 'Platform',
      strats: [
        {
          mechanic: 'paires',
          description: 'Close to boss\nInside\nw/ Healer from B',
          imageUrl: './strats/healerout/platform-east-pairs.png',
          mask: 'radial-gradient(circle at 31% 50%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'spread',
          description: 'Inside',
          imageUrl: './strats/healerout/platform-east-spread.png',
          mask: 'radial-gradient(circle at 11.2% 50.3%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: 'tours',
          description: 'North/Outside',
          imageUrl: './strats/healerout/platform-east-towers.png',
          mask: 'radial-gradient(circle at 48.8% 18.1%, black 11%, rgba(0, 0, 0, 0.2) 11%), radial-gradient(circle at 68.1% 73.8%, black 11%, rgba(0, 0, 0, 0.2) 11%)'
        },
        {
          mechanic: 'graine',
          description: 'None, stay on boss',
          imageUrl: './strats/healerout/platform-east-brambles.png',
          mask: 'radial-gradient(circle at 51% 48%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        },
        {
          mechanic: 'aoes',
          description: 'Platform Inside North',
          imageUrl: './strats/healerout/platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 20.5% 37.9%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: 'swap',
          description: 'Outside',
          imageUrl: './strats/healerout/platform-east-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 84.2% 53.3%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: 'I got a clean swap to the NW or SW tiles! Now what?',
      swapStrats: [
        {
          mechanic: 'start',
          description: 'NW/SW east of corner tile',
          imageUrl: './strats/healerout/postswap-c-tiles-west.png',
          mask: 'radial-gradient(circle at 75.3% 21.1%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 76.1% 79.9%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
        },
        {
          mechanic: 'priority: t>m>r',
          description: "You're priority 1!\nMove first on mechanics!"
        },
        {
          mechanic: 'chaser',
          description: 'CCW of corner tile',
          imageUrl: './strats/healerout/tiles-west-chasers.png',
          mask: 'radial-gradient(circle at 41.2% 32.1%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 62.8% 78.9%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Tank',
      party: 2,
      notes: 'SE/Back Right tiles',
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: 'start',
          description: 'SE inner tile',
          imageUrl: './strats/healerout/tiles-southeast.png',
          mask: 'radial-gradient(circle at 21% 48%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: 'priority: t>m>r',
          description: "You're priority 1!\nMove first on mechanics!"
        }
      ],
      swapNote: 'I got a clean swap to the West platform! Now what?',
      swapStrats: [
        {
          mechanic: 'paires',
          description: 'Close to boss\nInside\nw/ Healer from B',
          imageUrl: './strats/healerout/postswap-c-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 72% 49%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'spread',
          description: 'Inside',
          imageUrl: './strats/healerout/postswap-c-platform-west-spread.png',
          mask: 'radial-gradient(circle at 89% 50%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'tours',
          description: 'North/Outside',
          imageUrl: './strats/healerout/postswap-c-platform-west-towers.png',
          mask: 'radial-gradient(circle at 50.5% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 31.5% 78.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Platform Inside North',
          imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 76% 37%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Healer',
      party: 1,
      notes: 'Right/East platform, Boss faces Inside',
      startingArea: 'Platform',
      strats: [
        {
          mechanic: 'paires',
          description: 'Far from boss\nNorth Outside\nw/ Ranged',
          imageUrl: './strats/healerout/platform-east-pairs.png',
          mask: 'radial-gradient(circle at 87.1% 19.3%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'spread',
          description: 'Outside',
          imageUrl: './strats/healerout/platform-east-spread.png',
          mask: 'radial-gradient(circle at 75.5% 48.4%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: 'tours',
          description: 'South/Inside',
          imageUrl: './strats/healerout/platform-east-towers.png',
          mask: 'radial-gradient(circle at 47.8% 35.5%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 28.5% 74.1%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'graine',
          description: 'Inside North',
          imageUrl: './strats/healerout/platform-east-brambles.png',
          mask: 'radial-gradient(circle at 41.2% 35.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Platform Outside South',
          imageUrl: './strats/healerout/platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 61.9% 62.3%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: 'swap',
          description: 'Inside',
          imageUrl: './strats/healerout/platform-east-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 18.9% 51.6%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: 'I got a clean swap to the West platform! Now what?',
      swapStrats: [
        {
          mechanic: 'paires',
          description: 'Far from boss\nNorth Outside\nw/ Ranged',
          imageUrl: './strats/healerout/postswap-h-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 26.7% 22.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'spread',
          description: 'Outside',
          imageUrl: './strats/healerout/postswap-h-platform-west-spread.png',
          mask: 'radial-gradient(circle at 23.1% 51.4%, black 13%, rgba(0, 0, 0, 0.4) 13%)'
        },
        {
          mechanic: 'tours',
          description: 'South/Inside',
          imageUrl: './strats/healerout/postswap-h-platform-west-towers.png',
          mask: 'radial-gradient(circle at 50% 34.5%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 70% 78.3%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Platform Outside South',
          imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 38% 63.5%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Healer',
      party: 2,
      notes: 'Right/East platform, Boss faces Inside',
      startingArea: 'Platform',
      strats: [
        {
          mechanic: 'paires',
          description: 'Far from boss\nSouth Outside\nw/ Melee',
          imageUrl: './strats/healerout/platform-east-pairs.png',
          mask: 'radial-gradient(circle at 82% 75.2%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'spread',
          description: 'South',
          imageUrl: './strats/healerout/platform-east-spread.png',
          mask: 'radial-gradient(circle at 40% 83.8%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: 'tours',
          description: 'South/Inside',
          imageUrl: './strats/healerout/platform-east-towers.png',
          mask: 'radial-gradient(circle at 47.8% 35.5%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 28.5% 74.1%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'graine',
          description: 'Outside North',
          imageUrl: './strats/healerout/platform-east-brambles.png',
          mask: 'radial-gradient(circle at 64.5% 37.7%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Ring Outside South',
          imageUrl: './strats/healerout/platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 67.9% 86.6%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: 'swap',
          description: 'Inside',
          imageUrl: './strats/healerout/platform-east-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 18.9% 51.6%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: 'I got a clean swap to the West platform! Now what?',
      swapStrats: [
        {
          mechanic: 'paires',
          description: 'Far from boss\nSouth Outside\nw/ Melee',
          imageUrl: './strats/healerout/postswap-h-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 27.1% 79.1%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'spread',
          description: 'South',
          imageUrl: './strats/healerout/postswap-h-platform-west-spread.png',
          mask: 'radial-gradient(circle at 58.3% 80%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'tours',
          description: 'South/Inside',
          imageUrl: './strats/healerout/postswap-h-platform-west-towers.png',
          mask: 'radial-gradient(circle at 50% 34.5%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 70% 78.3%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Ring Outside South',
          imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 30% 87.0%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Melee',
      party: 1,
      notes: 'Right/East platform, Boss faces Inside',
      startingArea: 'Platform',
      strats: [
        {
          mechanic: 'paires',
          description: 'Close to boss\nSouth Outside\nw/ Healer 2',
          imageUrl: './strats/healerout/platform-east-pairs.png',
          mask: 'radial-gradient(circle at 69.1% 64.7%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'spread',
          description: 'South Outside',
          imageUrl: './strats/healerout/platform-east-spread.png',
          mask: 'radial-gradient(circle at 75.6% 73.9%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: 'tours',
          description: 'North/Outside',
          imageUrl: './strats/healerout/platform-east-towers.png',
          mask: 'radial-gradient(circle at 48.8% 18.1%, black 11%, rgba(0, 0, 0, 0.2) 11%), radial-gradient(circle at 68.1% 73.8%, black 11%, rgba(0, 0, 0, 0.2) 11%)'
        },
        {
          mechanic: 'graine',
          description: 'None, stay on boss',
          imageUrl: './strats/healerout/platform-east-brambles.png',
          mask: 'radial-gradient(circle at 51.2% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        },
        {
          mechanic: 'aoes',
          description: 'Platform Inside South',
          imageUrl: './strats/healerout/platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 22% 59.8%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: 'swap',
          description: 'Outside',
          imageUrl: './strats/healerout/platform-east-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 84.2% 53.3%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: 'I got a clean swap to the NW or SW tiles! Now what?',
      swapStrats: [
        {
          mechanic: 'start',
          description:
            "NW/SW North/South cubby\nIf the swap puts you in West cubby, that's fine too.",
          imageUrl: './strats/healerout/postswap-c-tiles-west.png',
          mask: 'radial-gradient(circle at 49.5% 8.8%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 49.5% 91.1%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
        },
        {
          mechanic: 'priority: t>m>r',
          description: "You're priority 2!\nMove second on mechanics!\nLet the Tank move first."
        },
        {
          mechanic: 'chaser',
          description: 'NW/SW North/South cubby',
          imageUrl: './strats/healerout/tiles-west-chasers.png',
          mask: 'radial-gradient(circle at 40.5% 6.2%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 40.9% 93.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Melee',
      party: 2,
      notes: 'SE/Back Right tiles',
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: 'start',
          description: 'SE South cubby',
          imageUrl: './strats/healerout/tiles-southeast.png',
          mask: 'radial-gradient(circle at 49.6% 80.4%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: 'priority: t>m>r',
          description: "You're priority 2!\nMove second on mechanics!\nLet the Tank move first."
        }
      ],
      swapNote: 'I got a clean swap to the West platform! Now what?',
      swapStrats: [
        {
          mechanic: 'paires',
          description: 'Close to boss\nSouth Outside\nw/ Healer 2',
          imageUrl: './strats/healerout/postswap-c-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 36% 68%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'spread',
          description: 'South Outside',
          imageUrl: './strats/healerout/postswap-c-platform-west-spread.png',
          mask: 'radial-gradient(circle at 23.4% 76.5%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'tours',
          description: 'North/Outside',
          imageUrl: './strats/healerout/postswap-c-platform-west-towers.png',
          mask: 'radial-gradient(circle at 50.4% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 31% 78.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Platform Inside South',
          imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 78% 60.9%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Ranged',
      party: 1,
      notes: 'Right/East platform, Boss faces Inside',
      startingArea: 'Platform',
      strats: [
        {
          mechanic: 'paires',
          description: 'Close to boss\nNorth Outside\nw/ Healer 1',
          imageUrl: './strats/healerout/platform-east-pairs.png',
          mask: 'radial-gradient(circle at 72.1% 30.4%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'spread',
          description: 'North Outside',
          imageUrl: './strats/healerout/platform-east-spread.png',
          mask: 'radial-gradient(circle at 71.2% 26.4%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: 'tours',
          description: 'North/Outside',
          imageUrl: './strats/healerout/platform-east-towers.png',
          mask: 'radial-gradient(circle at 48.8% 18.1%, black 11%, rgba(0, 0, 0, 0.2) 11%), radial-gradient(circle at 68.1% 73.8%, black 11%, rgba(0, 0, 0, 0.2) 11%)'
        },
        {
          mechanic: 'graine',
          description: 'Inside South',
          imageUrl: './strats/healerout/platform-east-brambles.png',
          mask: 'radial-gradient(circle at 40.5% 61.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Platform Outside North',
          imageUrl: './strats/healerout/platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 59.6% 36.4%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: 'swap',
          description: 'Outside',
          imageUrl: './strats/healerout/platform-east-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 84.2% 53.3%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: 'I got a clean swap to the NW or SW tiles! Now what?',
      swapStrats: [
        {
          mechanic: 'start',
          description:
            "NW/SW West cubby\nIf the swap puts you in North/South cubby, that's fine too.",
          imageUrl: './strats/healerout/postswap-c-tiles-west.png',
          mask: 'radial-gradient(circle at 23.1% 20.9%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 23.6% 79.4%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
        },
        {
          mechanic: 'priority: t>m>r',
          description:
            "You're priority 3!\nMove last on mechanics!\nLet the Tank and Melee\nmove first."
        },
        {
          mechanic: 'chaser',
          description: 'NW/SW West cubby',
          imageUrl: './strats/healerout/tiles-west-chasers.png',
          mask: 'radial-gradient(circle at 13.3% 20.7%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 13.5% 78.8%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Ranged',
      party: 2,
      notes: 'SE/Back Right tiles',
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: 'start',
          description: 'SE East cubby',
          imageUrl: './strats/healerout/tiles-southeast.png',
          mask: 'radial-gradient(circle at 79.2% 49.3%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: 'priority: t>m>r',
          description:
            "You're priority 3!\nMove last on mechanics!\nLet the Tank and Melee\nmove first."
        }
      ],
      swapNote: 'I got a clean swap to the West platform! Now what?',
      swapStrats: [
        {
          mechanic: 'paires',
          description: 'Close to boss\nNorth Outside\nw/ Healer 1',
          imageUrl: './strats/healerout/postswap-c-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 36.1% 34.7%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'spread',
          description: 'North Outside',
          imageUrl: './strats/healerout/postswap-c-platform-west-spread.png',
          mask: 'radial-gradient(circle at 22.4% 25.3%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: 'tours',
          description: 'North/Outside',
          imageUrl: './strats/healerout/postswap-c-platform-west-towers.png',
          mask: 'radial-gradient(circle at 65.4% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 31% 78.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: 'aoes',
          description: 'Platform Outside North',
          imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 36% 36.4%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    }
  ]
};

