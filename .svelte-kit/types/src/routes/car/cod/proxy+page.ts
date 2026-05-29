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
export type Language = 'english' | 'french';
export type LocalizedText = Record<Language, string>;

const localizedText = (english: string, french: string): LocalizedText => ({
  english,
  french
});

export interface MechanicStrat {
  mechanic: LocalizedText;
  description: LocalizedText;
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
  notes: LocalizedText;
  startingArea: StartingArea;
  strats: MechanicStrat[];
  swapNote?: LocalizedText;
  swapWarning?: string;
  swapStrats?: MechanicStrat[];
}

interface Strat {
  stratName: string;
  stratUrl: string | Record<string, string>;
  description: LocalizedText;
  notes: LocalizedText;
  strats: PlayerStrats[];
}

const healerOutStrat: Strat = {
  stratName: 'healerout',
  stratUrl: 'https://docs.google.com/presentation/d/1TRqF03mJQNoYTibS0X1tURwyZTjghTUWnoF8c_r_tEA',
  description: localizedText(
    'Taken from HealerOutCAR by Jake Hale',
    'Stratégie originelle "HealerOutCAR" par Jake Hale'
  ),
  notes: localizedText('', ''),
  strats: [
    {
      alliance: 'A',
      role: 'Tank',
      party: 1,
      notes: localizedText(
        'Left/West platform, Face boss Inside',
        "Plateforme gauche/ouest, orientez le boss vers l'intérieur"
      ),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('pairs', 'paires'),
          description: localizedText(
            'Close to boss\nInside\nw/ Healer from B',
            "Proche du boss\nIntérieur\nEn duo avec le Soigneur de l'Alliance B"
          ),
          imageUrl: './strats/healerout/platform-west-pairs.png',
          mask: 'radial-gradient(circle at 77.0% 51.1%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('spread', 'spread'),
          description: localizedText('Inside', 'Intérieur'),
          imageUrl: './strats/healerout/platform-west-spread.png',
          mask: 'radial-gradient(circle at 88% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('towers', 'tours'),
          description: localizedText('North/Outside', 'Nord/Extérieur'),
          imageUrl: './strats/healerout/platform-west-towers.png',
          mask: 'radial-gradient(circle at 57.7% 19.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 36.5% 73.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('brambles', 'graine'),
          description: localizedText('None, stay on the boss', 'Aucune, restez sur le boss'),
          imageUrl: './strats/healerout/platform-west-brambles.png',
          mask: 'radial-gradient(circle at 57% 49%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        },
        {
          mechanic: localizedText('aoes', 'aoes'),
          description: localizedText('Platform Inside North', 'Plateforme à l\'intérieur au nord'),
          imageUrl: './strats/healerout/platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 83% 39%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('swap', 'swap'),
          description: localizedText('Outside', 'Extérieur'),
          imageUrl: './strats/healerout/platform-west-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 18% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the NE or SE tiles! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('start', 'position initiale'),
          description: localizedText('NE/SE west of corner tile', 'NE/SE ouest de la tuile d\'angle'),
          imageUrl: './strats/healerout/postswap-a-tiles-east.png',
          mask: 'radial-gradient(circle at 30.2% 25%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 30.2% 75%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
        },
        {
          mechanic: localizedText('priority: t > m > r', 'priorité: t > m > r'),
          description: localizedText(
            "You're priority 1!\nMove first on mechanics!",
            '[French text pending]'
          )
        },
        {
          mechanic: localizedText('chaser', '[French text pending]'),
          description: localizedText(
            'CCW of corner tile',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/tiles-east-chasers.png',
          mask: 'radial-gradient(circle at 28.5% 20%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 53% 67.8%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        }
      ]
    },
    {
      alliance: 'A',
      role: 'Tank',
      party: 2,
      notes: localizedText('SW/Back Left tiles', '[French text pending]'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('start', '[French text pending]'),
          description: localizedText('SW inner tile', '[French text pending]'),
          imageUrl: './strats/healerout/tiles-southwest.png',
          mask: 'radial-gradient(circle at 69% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('priority: t>m>r', '[French text pending]'),
          description: localizedText(
            "You're priority 1!\nMove first on mechanics!",
            '[French text pending]'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the East platform! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            '[English text pending]',
            "Proche du boss\nIntérieur\nEn duo avec le Soigneur de l'Alliance B"
          ),
          imageUrl: './strats/healerout/platform-west-pairs.png',
          mask: 'radial-gradient(circle at 77.0% 51.1%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('[English text pending]', 'Nord/Extérieur'),
          imageUrl: './strats/healerout/platform-west-towers.png',
          mask: 'radial-gradient(circle at 57.7% 19.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 36.5% 73.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Platform Inside North', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 8.5% 35.9%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'A',
      role: 'Healer',
      party: 1,
      notes: localizedText('Left/West platform, Boss faces Inside', '[French text pending]'),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Far from boss\nNorth Outside\nw/ Ranged',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/platform-west-pairs.png',
          mask: 'radial-gradient(circle at 20.5% 25%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('spread', '[French text pending]'),
          description: localizedText('Outside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-spread.png',
          mask: 'radial-gradient(circle at 28% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('South/Inside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-towers.png',
          mask: 'radial-gradient(circle at 57.3% 35%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 76.5% 73%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'graine'),
          description: localizedText('Inside North', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-brambles.png',
          mask: 'radial-gradient(circle at 70.6% 35.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Platform Outside South', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 33.5% 67%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('swap', '[French text pending]'),
          description: localizedText('Inside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 82.3% 49.8%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the East platform! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Far from boss\nNorth Outside\nw/ Ranged',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/postswap-h-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 77% 28%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('South/Inside', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-h-platform-east-towers.png',
          mask: 'radial-gradient(circle at 43.8% 34.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 23% 75%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Platform Outside South', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 62.5% 64%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'A',
      role: 'Healer',
      party: 2,
      notes: localizedText('Left/West platform, Boss faces Inside', '[French text pending]'),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Far from boss\nSouth Outside\nw/ Melee',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/platform-west-pairs.png',
          mask: 'radial-gradient(circle at 20.5% 75.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('spread', '[French text pending]'),
          description: localizedText('South', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-spread.png',
          mask: 'radial-gradient(circle at 61.7% 71.7%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('South/Inside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-towers.png',
          mask: 'radial-gradient(circle at 58.3% 35.3%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 77.4% 73.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'graine'),
          description: localizedText('Outside North', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-brambles.png',
          mask: 'radial-gradient(circle at 29.7% 36.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Ring Outside South', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 23% 91.0%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('swap', '[French text pending]'),
          description: localizedText('Inside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 81.5% 49.8%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the East platform! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Far from boss\nSouth Outside\nw/ Melee',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/postswap-h-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 77% 72.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('South/Inside', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-h-platform-east-towers.png',
          mask: 'radial-gradient(circle at 44% 34.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 22.8% 75%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Ring Outside South', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 77.9% 88%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'A',
      role: 'Melee',
      party: 1,
      notes: localizedText('Left/West platform, Boss faces Inside', '[French text pending]'),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Close to boss\nSouth Outside\nw/ Healer 2',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/platform-west-pairs.png',
          mask: 'radial-gradient(circle at 36.3% 64.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('spread', '[French text pending]'),
          description: localizedText('South Outside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-spread.png',
          mask: 'radial-gradient(circle at 35.7% 65.2%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('[English text pending]', 'Nord/Extérieur'),
          imageUrl: './strats/healerout/platform-west-towers.png',
          mask: 'radial-gradient(circle at 57.7% 19.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 36.5% 73.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'graine'),
          description: localizedText('None, stay on boss', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-brambles.png',
          mask: 'radial-gradient(circle at 44% 43%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Platform Inside South', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 84.3% 66.9%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('swap', '[French text pending]'),
          description: localizedText('Outside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 18% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the NE or SE tiles! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('start', '[French text pending]'),
          description: localizedText(
            "NE/SE North/South cubby\nIf the swap puts you in East cubby, that's fine too.",
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/postswap-a-tiles-east.png',
          mask: 'radial-gradient(circle at 50% 14%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 50% 85.4%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
        },
        {
          mechanic: localizedText('priority: t>m>r', '[French text pending]'),
          description: localizedText(
            "You're priority 2!\nMove second on mechanics!\nLet the Tank move first.",
            '[French text pending]'
          )
        },
        {
          mechanic: localizedText('chaser', '[French text pending]'),
          description: localizedText('NE/SE North/South cubby', '[French text pending]'),
          imageUrl: './strats/healerout/tiles-east-chasers.png',
          mask: 'radial-gradient(circle at 52% 8%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 52% 92%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        }
      ]
    },
    {
      alliance: 'A',
      role: 'Melee',
      party: 2,
      notes: localizedText('SW/Back Left tiles', '[French text pending]'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('start', '[French text pending]'),
          description: localizedText('SW South cubby', '[French text pending]'),
          imageUrl: './strats/healerout/tiles-southwest.png',
          mask: 'radial-gradient(circle at 49.7% 74.9%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('priority: t>m>r', '[French text pending]'),
          description: localizedText(
            "You're priority 2!\nMove second on mechanics!\nLet the Tank move first.",
            '[French text pending]'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the East platform! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Close to boss\nSouth Outside\nw/ Healer 2',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/postswap-a-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 60% 62%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('North/Outside', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-a-platform-east-towers.png',
          mask: 'radial-gradient(circle at 44.5% 19%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 63.5% 75%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Platform Inside South', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 8% 63.8%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'A',
      role: 'Ranged',
      party: 1,
      notes: localizedText('Left/West platform, Boss faces Inside', '[French text pending]'),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Close to boss\nNorth Outside\nw/ Healer 1',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/platform-west-pairs.png',
          mask: 'radial-gradient(circle at 35.7% 36.2%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('spread', '[French text pending]'),
          description: localizedText('North Outside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-spread.png',
          mask: 'radial-gradient(circle at 36% 33%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('[English text pending]', 'Nord/Extérieur'),
          imageUrl: './strats/healerout/platform-west-towers.png',
          mask: 'radial-gradient(circle at 57.7% 19.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 36.5% 73.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'graine'),
          description: localizedText('Inside South', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-brambles.png',
          mask: 'radial-gradient(circle at 71% 63.9%, black 10%, rgba(0, 0, 0, 0.4) 0%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Platform Outside North', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 33.8% 37.8%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('swap', '[French text pending]'),
          description: localizedText('Outside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 18% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the NE or SE tiles! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('start', '[French text pending]'),
          description: localizedText(
            "NE/SE East cubby\nIf the swap puts you in North/South cubby, that's fine too.",
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/postswap-a-tiles-east.png',
          mask: 'radial-gradient(circle at 72.5% 24.5%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 72.5% 75.5%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
        },
        {
          mechanic: localizedText('priority: t>m>r', '[French text pending]'),
          description: localizedText(
            "You're priority 3!\nMove last on mechanics!\nLet the Tank and Melee\nmove first.",
            '[French text pending]'
          )
        },
        {
          mechanic: localizedText('chaser', '[French text pending]'),
          description: localizedText('NE/SE East cubby', '[French text pending]'),
          imageUrl: './strats/healerout/tiles-east-chasers.png',
          mask: 'radial-gradient(circle at 77% 22.1%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 77% 79.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        }
      ]
    },
    {
      alliance: 'A',
      role: 'Ranged',
      party: 2,
      notes: localizedText('SW/Back Left tiles', '[French text pending]'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('start', '[French text pending]'),
          description: localizedText('SW West cubby', '[French text pending]'),
          imageUrl: './strats/healerout/tiles-southwest.png',
          mask: 'radial-gradient(circle at 26.7% 50.9%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('priority: t>m>r', '[French text pending]'),
          description: localizedText(
            "You're priority 3!\nMove last on mechanics!\nLet the Tank and Melee\nmove first.",
            '[French text pending]'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the East platform! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Close to boss\nNorth Outside\nw/ Healer 1',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/postswap-a-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 60% 38%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('North/Outside', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-a-platform-east-towers.png',
          mask: 'radial-gradient(circle at 45% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 63% 75%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Platform Outside North', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 63.5% 36%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Tank',
      party: 1,
      notes: localizedText('NW/Front Left tiles', '[French text pending]'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('start', '[French text pending]'),
          description: localizedText('NW inner tile', '[French text pending]'),
          imageUrl: './strats/healerout/tiles-northwest.png',
          mask: 'radial-gradient(circle at 70% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('priority: t>m>r', '[French text pending]'),
          description: localizedText(
            "You're priority 1!\nMove first on mechanics!",
            '[French text pending]'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the East platform! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Close to boss\nInside\nw/ Healer from B',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/postswap-b-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 25% 49.9%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('North/Outside', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-b-platform-east-towers.png',
          mask: 'radial-gradient(circle at 45% 19%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 64% 75%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Platform Inside North', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 9% 36%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Tank',
      party: 2,
      notes: localizedText('NE/Front Right tiles', '[French text pending]'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('start', '[French text pending]'),
          description: localizedText('NE inner tile', '[French text pending]'),
          imageUrl: './strats/healerout/tiles-northeast.png',
          mask: 'radial-gradient(circle at 29% 51.4%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('priority: t>m>r', '[French text pending]'),
          description: localizedText(
            "You're priority 1!\nMove first on mechanics!",
            '[French text pending]'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the West platform! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Close to boss\nInside\nw/ Healer from B',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/postswap-b-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 73.2% 50%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('North/Outside', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-b-platform-west-towers.png',
          mask: 'radial-gradient(circle at 58% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 36.5% 74%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Platform Inside North', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 88.5% 39%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Healer',
      party: 1,
      notes: localizedText('Left/West platform, Boss faces Inside', '[French text pending]'),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText('Far from boss\nInside\nw/ Tank', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-pairs.png',
          mask: 'radial-gradient(circle at 93% 50.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('spread', '[French text pending]'),
          description: localizedText('North', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-spread.png',
          mask: 'radial-gradient(circle at 62% 29%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('South/Inside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-towers.png',
          mask: 'radial-gradient(circle at 58.3% 35.3%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 77.4% 73.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'graine'),
          description: localizedText('Outside South', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-brambles.png',
          mask: 'radial-gradient(circle at 29.8% 63.7%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Ring Outside North', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 23% 13.5%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('swap', '[French text pending]'),
          description: localizedText('Inside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-west-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 82.3% 49.8%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the East platform! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText('Far from boss\nInside\nw/ Tank', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-h-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 9% 50%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('South/Inside', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-h-platform-east-towers.png',
          mask: 'radial-gradient(circle at 44% 34.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 22.8% 755%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Ring Outside North', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 78% 11.8%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Healer',
      party: 2,
      notes: localizedText('Right/East platform, Boss faces Inside', '[French text pending]'),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText('Far from boss\nInside\nw/ Tank', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-pairs.png',
          mask: 'radial-gradient(circle at 9.8% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('spread', '[French text pending]'),
          description: localizedText('North', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-spread.png',
          mask: 'radial-gradient(circle at 39.5% 28.5%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('South/Inside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-towers.png',
          mask: 'radial-gradient(circle at 43.8% 34.3%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 23% 75%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'graine'),
          description: localizedText('Outside South', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-brambles.png',
          mask: 'radial-gradient(circle at 72% 62%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Ring Outside North', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 79% 11.7%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('swap', '[French text pending]'),
          description: localizedText('Inside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 15.9% 51.6%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the West platform! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText('Far from boss\nInside\nw/ Tank', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-h-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 87.5% 50.2%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('South/Inside', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-h-platform-west-towers.png',
          mask: 'radial-gradient(circle at 58% 35%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 78% 73%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Ring Outside North', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 25.5% 13%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Melee',
      party: 1,
      notes: localizedText('NW/Front Left tiles', '[French text pending]'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('start', '[French text pending]'),
          description: localizedText('NW North cubby', '[French text pending]'),
          imageUrl: './strats/healerout/tiles-northwest.png',
          mask: 'radial-gradient(circle at 49.1% 29.3%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('priority: t>m>r', '[French text pending]'),
          description: localizedText(
            "You're priority 2!\nMove second on mechanics!\nLet the Tank move first.",
            '[French text pending]'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the East platform! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Close to boss\nSouth Outside\nw/ Healer 2 from A',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/postswap-b-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 61% 62%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('North/Outside', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-b-platform-east-towers.png',
          mask: 'radial-gradient(circle at 45% 19%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 63.5% 75%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Platform Inside South', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 8% 63.8%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Melee',
      party: 2,
      notes: localizedText('NE/Front Right tiles', '[French text pending]'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('start', '[French text pending]'),
          description: localizedText('NE North cubby', '[French text pending]'),
          imageUrl: './strats/healerout/tiles-northeast.png',
          mask: 'radial-gradient(circle at 50% 30%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('priority: t>m>r', '[French text pending]'),
          description: localizedText(
            "You're priority 2!\nMove second on mechanics!\nLet the Tank move first.",
            '[French text pending]'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the West platform! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Close to boss\nSouth Outside\nw/ Healer 2 from C',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/postswap-b-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 40% 62.5%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('North/Outside', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-b-platform-west-towers.png',
          mask: 'radial-gradient(circle at 58% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 36.5% 74%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Platform Inside South', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 90% 69%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Ranged',
      party: 1,
      notes: localizedText('NW/Front Left tiles', '[French text pending]'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('start', '[French text pending]'),
          description: localizedText('NW West cubby', '[French text pending]'),
          imageUrl: './strats/healerout/tiles-northwest.png',
          mask: 'radial-gradient(circle at 27% 48.3%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('priority: t>m>r', '[French text pending]'),
          description: localizedText(
            "You're priority 3!\nMove last on mechanics!\nLet the Tank and Melee\nmove first.",
            '[French text pending]'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the East platform! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Close to boss\nNorth Outside\nw/ Healer 1 from A',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/postswap-b-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 61% 38%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('North/Outside', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-b-platform-east-towers.png',
          mask: 'radial-gradient(circle at 45% 19%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 64% 75%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Platform Outside North', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 63.5% 36%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Ranged',
      party: 2,
      notes: localizedText('NE/Front Right tiles', '[French text pending]'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('start', '[French text pending]'),
          description: localizedText('NE East cubby', '[French text pending]'),
          imageUrl: './strats/healerout/tiles-northeast.png',
          mask: 'radial-gradient(circle at 71.5% 49.4%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('priority: t>m>r', '[French text pending]'),
          description: localizedText(
            "You're priority 3!\nMove last on mechanics!\nLet the Tank and Melee\nmove first.",
            '[French text pending]'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the West platform! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Close to boss\nNorth Outside\nw/ Healer 1 from C',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/postswap-b-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 40% 38%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('North/Outside', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-b-platform-west-towers.png',
          mask: 'radial-gradient(circle at 58% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 36.5% 74%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Platform Outside North', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 36% 38%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Tank',
      party: 1,
      notes: localizedText('Right/East platform, Face boss Inside', '[French text pending]'),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Close to boss\nInside\nw/ Healer from B',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/platform-east-pairs.png',
          mask: 'radial-gradient(circle at 27% 50%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('spread', '[French text pending]'),
          description: localizedText('Inside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-spread.png',
          mask: 'radial-gradient(circle at 13.2% 50.3%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('North/Outside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-towers.png',
          mask: 'radial-gradient(circle at 44.5% 18%, black 11%, rgba(0, 0, 0, 0.2) 11%), radial-gradient(circle at 63.1% 74.8%, black 11%, rgba(0, 0, 0, 0.2) 11%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'graine'),
          description: localizedText('None, stay on boss', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-brambles.png',
          mask: 'radial-gradient(circle at 46% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Platform Inside North', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 9% 35.5%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('swap', '[French text pending]'),
          description: localizedText('Outside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 82.2% 50.3%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the NW or SW tiles! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('start', '[French text pending]'),
          description: localizedText('NW/SW east of corner tile', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-c-tiles-west.png',
          mask: 'radial-gradient(circle at 73.3% 24.1%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 73.1% 74.9%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
        },
        {
          mechanic: localizedText('priority: t>m>r', '[French text pending]'),
          description: localizedText(
            "You're priority 1!\nMove first on mechanics!",
            '[French text pending]'
          )
        },
        {
          mechanic: localizedText('chaser', '[French text pending]'),
          description: localizedText('CCW of corner tile', '[French text pending]'),
          imageUrl: './strats/healerout/tiles-west-chasers.png',
          mask: 'radial-gradient(circle at 48.5% 31.1%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 72% 80.9%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Tank',
      party: 2,
      notes: localizedText('SE/Back Right tiles', '[French text pending]'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('start', '[French text pending]'),
          description: localizedText('SE inner tile', '[French text pending]'),
          imageUrl: './strats/healerout/tiles-southeast.png',
          mask: 'radial-gradient(circle at 29% 51%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('priority: t>m>r', '[French text pending]'),
          description: localizedText(
            "You're priority 1!\nMove first on mechanics!",
            '[French text pending]'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the West platform! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Close to boss\nInside\nw/ Healer from B',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/postswap-c-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 73% 50.5%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('North/Outside', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-c-platform-west-towers.png',
          mask: 'radial-gradient(circle at 57.5% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 36% 74%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Platform Inside North', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 88% 39%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Healer',
      party: 1,
      notes: localizedText('Right/East platform, Boss faces Inside', '[French text pending]'),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Far from boss\nNorth Outside\nw/ Ranged',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/platform-east-pairs.png',
          mask: 'radial-gradient(circle at 80.1% 27.3%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('spread', '[French text pending]'),
          description: localizedText('Outside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-spread.png',
          mask: 'radial-gradient(circle at 75% 51%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('South/Inside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-towers.png',
          mask: 'radial-gradient(circle at 44% 34%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 24.5% 75%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'graine'),
          description: localizedText('Inside North', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-brambles.png',
          mask: 'radial-gradient(circle at 29.2% 37.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Platform Outside South', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 63.9% 64%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('swap', '[French text pending]'),
          description: localizedText('Inside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 15.9% 51.6%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the West platform! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Far from boss\nNorth Outside\nw/ Ranged',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/postswap-h-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 26.7% 27.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('South/Inside', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-h-platform-west-towers.png',
          mask: 'radial-gradient(circle at 59% 34.5%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 78% 73%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Platform Outside South', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 37% 69.5%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Healer',
      party: 2,
      notes: localizedText('Right/East platform, Boss faces Inside', '[French text pending]'),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Far from boss\nSouth Outside\nw/ Melee',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/platform-east-pairs.png',
          mask: 'radial-gradient(circle at 81% 72.2%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('spread', '[French text pending]'),
          description: localizedText('South', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-spread.png',
          mask: 'radial-gradient(circle at 40% 71.8%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('South/Inside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-towers.png',
          mask: 'radial-gradient(circle at 44% 34.5%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 24.5% 75%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'graine'),
          description: localizedText('Outside North', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-brambles.png',
          mask: 'radial-gradient(circle at 72% 37.7%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Ring Outside South', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 77% 87.6%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('swap', '[French text pending]'),
          description: localizedText('Inside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 15.9% 51.6%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the West platform! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Far from boss\nSouth Outside\nw/ Melee',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/postswap-h-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 25.5% 72.1%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('South/Inside', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-h-platform-west-towers.png',
          mask: 'radial-gradient(circle at 59% 34.5%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 78% 73%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Ring Outside South', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 23% 94%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Melee',
      party: 1,
      notes: localizedText('Right/East platform, Boss faces Inside', '[French text pending]'),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Close to boss\nSouth Outside\nw/ Healer 2',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/platform-east-pairs.png',
          mask: 'radial-gradient(circle at 66% 62%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('spread', '[French text pending]'),
          description: localizedText('South Outside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-spread.png',
          mask: 'radial-gradient(circle at 66% 69%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('North/Outside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-towers.png',
          mask: 'radial-gradient(circle at 44.5% 19.5%, black 11%, rgba(0, 0, 0, 0.2) 11%), radial-gradient(circle at 64% 75%, black 11%, rgba(0, 0, 0, 0.2) 11%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'graine'),
          description: localizedText('None, stay on boss', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-brambles.png',
          mask: 'radial-gradient(circle at 60.2% 55%, black 16%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Platform Inside South', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 9% 63.8%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('swap', '[French text pending]'),
          description: localizedText('Outside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 82.2% 53.3%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the NW or SW tiles! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('start', '[French text pending]'),
          description: localizedText(
            "NW/SW North/South cubby\nIf the swap puts you in West cubby, that's fine too.",
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/postswap-c-tiles-west.png',
          mask: 'radial-gradient(circle at 49.5% 14%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 49.5% 86.1%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
        },
        {
          mechanic: localizedText('priority: t>m>r', '[French text pending]'),
          description: localizedText(
            "You're priority 2!\nMove second on mechanics!\nLet the Tank move first.",
            '[French text pending]'
          )
        },
        {
          mechanic: localizedText('chaser', '[French text pending]'),
          description: localizedText('NW/SW North/South cubby', '[French text pending]'),
          imageUrl: './strats/healerout/tiles-west-chasers.png',
          mask: 'radial-gradient(circle at 48% 9%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 48.9% 93.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Melee',
      party: 2,
      notes: localizedText('SE/Back Right tiles', '[French text pending]'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('start', '[French text pending]'),
          description: localizedText('SE South cubby', '[French text pending]'),
          imageUrl: './strats/healerout/tiles-southeast.png',
          mask: 'radial-gradient(circle at 49.6% 75.4%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('priority: t>m>r', '[French text pending]'),
          description: localizedText(
            "You're priority 2!\nMove second on mechanics!\nLet the Tank move first.",
            '[French text pending]'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the West platform! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Close to boss\nSouth Outside\nw/ Healer 2',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/postswap-c-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 41% 62%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('North/Outside', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-c-platform-west-towers.png',
          mask: 'radial-gradient(circle at 57.5% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 36% 74%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Platform Inside South', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 90% 69%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Ranged',
      party: 1,
      notes: localizedText('Right/East platform, Boss faces Inside', '[French text pending]'),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Close to boss\nNorth Outside\nw/ Healer 1',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/platform-east-pairs.png',
          mask: 'radial-gradient(circle at 65.5% 38%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('spread', '[French text pending]'),
          description: localizedText('North Outside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-spread.png',
          mask: 'radial-gradient(circle at 66.2% 35.4%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('North/Outside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-towers.png',
          mask: 'radial-gradient(circle at 44.5% 19.5%, black 11%, rgba(0, 0, 0, 0.2) 11%), radial-gradient(circle at 64% 75%, black 11%, rgba(0, 0, 0, 0.2) 11%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'graine'),
          description: localizedText('Inside South', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-brambles.png',
          mask: 'radial-gradient(circle at 29.5% 61.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Platform Outside North', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 63.6% 36%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('swap', '[French text pending]'),
          description: localizedText('Outside', '[French text pending]'),
          imageUrl: './strats/healerout/platform-east-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 82.2% 50.3%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the NW or SW tiles! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('start', '[French text pending]'),
          description: localizedText(
            "NW/SW West cubby\nIf the swap puts you in North/South cubby, that's fine too.",
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/postswap-c-tiles-west.png',
          mask: 'radial-gradient(circle at 27% 24%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 27% 75.4%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
        },
        {
          mechanic: localizedText('priority: t>m>r', '[French text pending]'),
          description: localizedText(
            "You're priority 3!\nMove last on mechanics!\nLet the Tank and Melee\nmove first.",
            '[French text pending]'
          )
        },
        {
          mechanic: localizedText('chaser', '[French text pending]'),
          description: localizedText('NW/SW West cubby', '[French text pending]'),
          imageUrl: './strats/healerout/tiles-west-chasers.png',
          mask: 'radial-gradient(circle at 23.3% 18%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 23.5% 79%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Ranged',
      party: 2,
      notes: localizedText('SE/Back Right tiles', '[French text pending]'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('start', '[French text pending]'),
          description: localizedText('SE East cubby', '[French text pending]'),
          imageUrl: './strats/healerout/tiles-southeast.png',
          mask: 'radial-gradient(circle at 69.2% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('priority: t>m>r', '[French text pending]'),
          description: localizedText(
            "You're priority 3!\nMove last on mechanics!\nLet the Tank and Melee\nmove first.",
            '[French text pending]'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the West platform! Now what?',
        '[French text pending]'
      ),
      swapStrats: [
        {
          mechanic: localizedText('[English text pending]', 'paires'),
          description: localizedText(
            'Close to boss\nNorth Outside\nw/ Healer 1',
            '[French text pending]'
          ),
          imageUrl: './strats/healerout/postswap-c-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 41.1% 37.7%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('[English text pending]', 'tours'),
          description: localizedText('North/Outside', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-c-platform-west-towers.png',
          mask: 'radial-gradient(circle at 57.5% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 36% 74%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('aoes', '[French text pending]'),
          description: localizedText('Platform Outside North', '[French text pending]'),
          imageUrl: './strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 36% 38%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    }
  ]
};
