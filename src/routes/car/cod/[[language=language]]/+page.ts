import type { PageLoad } from './$types';

export const trailingSlash = 'always';
export const entries = () => [{}, { language: 'fr' }, { language: 'en' }];

export const load: PageLoad = ({ params }) => {
  const language =
    params.language === 'en' ? 'english' : params.language === 'fr' ? 'french' : undefined;

  return {
    language,
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
        "Plateforme Ouest, orientez le boss vers l'intérieur"
      ),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Close to boss\nInside\nw/ Healer from B',
            "Près du boss\nVers l\'intérieur\nEn duo avec le Soigneur de l'Alliance B"
          ),
          imageUrl: 'car/strats/healerout/platform-west-pairs.png',
          mask: 'radial-gradient(circle at 77.0% 51.1%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('Spread', 'Spread'),
          description: localizedText('Inside', 'Intérieur'),
          imageUrl: 'car/strats/healerout/platform-west-spread.png',
          mask: 'radial-gradient(circle at 88% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('North/Outside', 'Nord/Extérieur'),
          imageUrl: 'car/strats/healerout/platform-west-towers.png',
          mask: 'radial-gradient(circle at 57.7% 19.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 36.5% 73.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('Brambles', 'Graines'),
          description: localizedText('None, stay on the boss', 'Aucune, restez sous le boss'),
          imageUrl: 'car/strats/healerout/platform-west-brambles.png',
          mask: 'radial-gradient(circle at 57% 49%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText('Platform Inside North', "Vers l'intérieur, au Nord de la plateforme"),
          imageUrl: 'car/strats/healerout/platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 83% 39%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('Swap', 'Swap'),
          description: localizedText('Outside', 'Extérieur'),
          imageUrl: 'car/strats/healerout/platform-west-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 18% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the NE or SE tiles! Now what?',
        "Le swap s'est correctement effectué vers les tuiles NE/SE ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Start', 'Position initiale'),
          description: localizedText('NE/SE west of corner tile', "NE/SE sur la tuile vers l'intérieur"),
          imageUrl: 'car/strats/healerout/postswap-a-tiles-east.png',
          mask: 'radial-gradient(circle at 30.2% 25%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 30.2% 75%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
        },
        {
          mechanic: localizedText('Priority: t > m > r', 'Priorité: t > m > r'),
          description: localizedText(
            "You're priority 1!\nMove first between mechanics!",
            'Vous êtes la priorité 1 ! Vous êtes le premier à vous déplacer pour les mécaniques.'
          )
        },
        {
          mechanic: localizedText('Chaser', 'AoE de poursuite'),
          description: localizedText(
            'CCW of corner tile',
            'Déplacez-vous en sens anti-horaire pour laisser la place à vos DPS'
          ),
          imageUrl: 'car/strats/healerout/tiles-east-chasers.png',
          mask: 'radial-gradient(circle at 28.5% 20%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 53% 67.8%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        }
      ]
    },
    {
      alliance: 'A',
      role: 'Tank',
      party: 2,
      notes: localizedText('SW/Back Left tiles', 'Tuiles au Sud-Ouest'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('Start', 'Position initiale'),
          description: localizedText('SW inner tile', 'Tuile Intérieure'),
          imageUrl: 'car/strats/healerout/tiles-southwest.png',
          mask: 'radial-gradient(circle at 69% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('Priority: t > m > r', 'Priorité : t > m > r'),
          description: localizedText(
            "You're priority 1!\nMove first on mechanics!",
            'Vous êtes la priorité 1 ! Vous êtes le premier à vous déplacer pour les mécaniques.'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the East platform! Now what?',
        "Le swap s'est correctement effectué vers la plateforme à l'Est ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Close to boss\nInside\nw/ Healer from B',
            "Près du boss\nVers l\'intérieur\nEn duo avec le Soigneur de l'Alliance B"
          ),
          imageUrl: 'car/strats/healerout/platform-west-pairs.png',
          mask: 'radial-gradient(circle at 77.0% 51.1%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('North/Outside', 'Nord/Extérieur'),
          imageUrl: 'car/strats/healerout/platform-west-towers.png',
          mask: 'radial-gradient(circle at 57.7% 19.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 36.5% 73.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText(
            'Platform Inside North',
            "Vers l'intérieur, au Nord de la plateforme"
          ),
          imageUrl: 'car/strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 8.5% 35.9%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'A',
      role: 'Healer',
      party: 1,
      notes: localizedText(
        'Left/West platform, Boss faces Inside',
        "Plateforme Ouest, avec le boss orienté vers l'intérieur"
      ),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Far from boss\nNorth Outside\nw/ Ranged',
            "Loin du boss\nAu Nord vers l'extérieur\nEn duo avec le DPS à Distance"
          ),
          imageUrl: 'car/strats/healerout/platform-west-pairs.png',
          mask: 'radial-gradient(circle at 20.5% 25%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('Spread', 'Spread'),
          description: localizedText('Outside', 'Extérieur'),
          imageUrl: 'car/strats/healerout/platform-west-spread.png',
          mask: 'radial-gradient(circle at 28% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('South/Inside', 'Sud/Intérieur'),
          imageUrl: 'car/strats/healerout/platform-west-towers.png',
          mask: 'radial-gradient(circle at 57.3% 35%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 76.5% 73%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('Brambles', 'Graines'),
          description: localizedText('Inside North', "Au Nord vers l'intérieur"),
          imageUrl: 'car/strats/healerout/platform-west-brambles.png',
          mask: 'radial-gradient(circle at 70.6% 35.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText(
            'Platform Outside South',
            "Vers l'extérieur, au Sud de la plateforme"
          ),
          imageUrl: 'car/strats/healerout/platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 33.5% 67%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('Swap', 'Swap'),
          description: localizedText('Inside', 'Intérieur'),
          imageUrl: 'car/strats/healerout/platform-west-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 82.3% 49.8%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the East platform! Now what?',
        "Le swap s'est correctement effectué vers la plateforme à l'Est ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Far from boss\nNorth Outside\nw/ Ranged',
            "Loin du boss\nAu Nord vers l'extérieur\nEn duo avec le DPS à Distance"
          ),
          imageUrl: 'car/strats/healerout/postswap-h-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 77% 28%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('South/Inside', 'Sud/Intérieur'),
          imageUrl: 'car/strats/healerout/postswap-h-platform-east-towers.png',
          mask: 'radial-gradient(circle at 43.8% 34.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 23% 75%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText(
            'Platform Outside South',
            "Vers l'extérieur, au Sud de la plateforme"
          ),
          imageUrl: 'car/strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 62.5% 64%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'A',
      role: 'Healer',
      party: 2,
      notes: localizedText(
        'Left/West platform, Boss faces Inside',
        "Plateforme Ouest, avec le boss orienté vers l'intérieur"
      ),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Far from boss\nSouth Outside\nw/ Melee',
            "Loin du boss\nAu Sud vers l'extérieur\nEn duo avec le DPS de Mêlée"
          ),
          imageUrl: 'car/strats/healerout/platform-west-pairs.png',
          mask: 'radial-gradient(circle at 20.5% 75.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('Spread', 'Spread'),
          description: localizedText('South', 'Au Sud'),
          imageUrl: 'car/strats/healerout/platform-west-spread.png',
          mask: 'radial-gradient(circle at 61.7% 71.7%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('South/Inside', 'Sud/Intérieur'),
          imageUrl: 'car/strats/healerout/platform-west-towers.png',
          mask: 'radial-gradient(circle at 58.3% 35.3%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 77.4% 73.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('Brambles', 'Graines'),
          description: localizedText('Outside North', "Au Nord vers l'extérieur"),
          imageUrl: 'car/strats/healerout/platform-west-brambles.png',
          mask: 'radial-gradient(circle at 29.7% 36.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText('Ring Outside South', "Sur l'anneau extérieur au Sud"),
          imageUrl: 'car/strats/healerout/platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 23% 91.0%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('Swap', 'Swap'),
          description: localizedText('Inside', 'Intérieur'),
          imageUrl: 'car/strats/healerout/platform-west-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 81.5% 49.8%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the East platform! Now what?',
        "Le swap s'est correctement effectué vers la plateforme à l'Est ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Far from boss\nSouth Outside\nw/ Melee',
            "Loin du boss\nAu Sud vers l'extérieur\nEn duo avec le DPS de Mêlée"
          ),
          imageUrl: 'car/strats/healerout/postswap-h-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 77% 72.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('South/Inside', 'Sud/Intérieur'),
          imageUrl: 'car/strats/healerout/postswap-h-platform-east-towers.png',
          mask: 'radial-gradient(circle at 44% 34.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 22.8% 75%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText('Ring Outside South', "Sur l'anneau extérieur au Sud"),
          imageUrl: 'car/strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 77.9% 88%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'A',
      role: 'Melee',
      party: 1,
      notes: localizedText(
        'Left/West platform, Boss faces Inside',
        "Plateforme Ouest, avec le boss orienté vers l'intérieur"
      ),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Close to boss\nSouth Outside\nw/ Healer 2',
            "Près du boss\nAu Sud vers l'extérieur\nEn duo avec le Soigneur 2"
          ),
          imageUrl: 'car/strats/healerout/platform-west-pairs.png',
          mask: 'radial-gradient(circle at 36.3% 64.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('Spread', 'Spread'),
          description: localizedText('South Outside', "Au Sud vers l'extérieur"),
          imageUrl: 'car/strats/healerout/platform-west-spread.png',
          mask: 'radial-gradient(circle at 35.7% 65.2%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('North/Outside', 'Nord/Extérieur'),
          imageUrl: 'car/strats/healerout/platform-west-towers.png',
          mask: 'radial-gradient(circle at 57.7% 19.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 36.5% 73.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('Brambles', 'Graines'),
          description: localizedText(
            'None, stay on boss',
            "Aucune, restez sous le boss"
          ),
          imageUrl: 'car/strats/healerout/platform-west-brambles.png',
          mask: 'radial-gradient(circle at 44% 43%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText('Platform Inside South', "Vers l'intérieur, au Sud de la plateforme"),
          imageUrl: 'car/strats/healerout/platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 84.3% 66.9%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('Swap', 'Swap'),
          description: localizedText('Outside', 'Extérieur'),
          imageUrl: 'car/strats/healerout/platform-west-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 18% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the NE or SE tiles! Now what?',
        "Le swap s'est correctement effectué vers les tuiles NE/SE ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Start', 'Position initiale'),
          description: localizedText(
            "NE/SE North/South cubby\nIf the swap puts you in East cubby, that's fine too.",
            "Tuile Nord-Est/Sud-Est selon Nord ou Sud\n(Si le swap vous place dans la tuile Est, c'est ok)"
          ),
          imageUrl: 'car/strats/healerout/postswap-a-tiles-east.png',
          mask: 'radial-gradient(circle at 50% 14%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 50% 85.4%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
        },
        {
          mechanic: localizedText('Priority: t > m > r', 'Priorité : t > m > r'),
          description: localizedText(
            "You're priority 2!\nMove second on mechanics!\nLet the Tank move first.",
            'Vous êtes la priorité 2 !\nDéplacez-vous en second sur les mécaniques !\nLaissez le Tank bouger en premier.'
          )
        },
        {
          mechanic: localizedText('Chaser', 'AoE de poursuite'),
          description: localizedText(
            'NE/SE North/South cubby',
            'Tuile Nord-Est/Sud-Est selon Nord ou Sud'
          ),
          imageUrl: 'car/strats/healerout/tiles-east-chasers.png',
          mask: 'radial-gradient(circle at 52% 8%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 52% 92%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        }
      ]
    },
    {
      alliance: 'A',
      role: 'Melee',
      party: 2,
      notes: localizedText('SW/Back Left tiles', 'Tuiles au Sud-Ouest'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('Start', 'Position initiale'),
          description: localizedText('SW South cubby', 'Tuile Sud'),
          imageUrl: 'car/strats/healerout/tiles-southwest.png',
          mask: 'radial-gradient(circle at 49.7% 74.9%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('Priority: t > m > r', 'Priorité : t > m > r'),
          description: localizedText(
            "You're priority 2!\nMove second on mechanics!\nLet the Tank move first.",
            'Vous êtes la priorité 2 !\nDéplacez-vous en second sur les mécaniques !\nLaissez le Tank bouger en premier.'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the East platform! Now what?',
        "Le swap s'est correctement effectué vers la plateforme à l'Est ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Close to boss\nSouth Outside\nw/ Healer 2',
            'Près du boss\nÀ l\'Extérieur au Sud\nEn duo avec le Soigneur 2'
          ),
          imageUrl: 'car/strats/healerout/postswap-a-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 60% 62%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('North/Outside', 'Nord/Extérieur'),
          imageUrl: 'car/strats/healerout/postswap-a-platform-east-towers.png',
          mask: 'radial-gradient(circle at 44.5% 19%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 63.5% 75%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText('Platform Inside South', "Vers l'intérieur, au Sud de la plateforme"),
          imageUrl: 'car/strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 8% 63.8%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'A',
      role: 'Ranged',
      party: 1,
      notes: localizedText(
        'Left/West platform, Boss faces Inside',
        "Plateforme Ouest, avec le boss orienté vers l'intérieur"
      ),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Close to boss\nNorth Outside\nw/ Healer 1',
            "Près du boss\nAu Nord vers l'extérieur\nEn duo avec le Soigneur 1"
          ),
          imageUrl: 'car/strats/healerout/platform-west-pairs.png',
          mask: 'radial-gradient(circle at 35.7% 36.2%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('Spread', 'Spread'),
          description: localizedText('North Outside', "Au Nord vers l'extérieur"),
          imageUrl: 'car/strats/healerout/platform-west-spread.png',
          mask: 'radial-gradient(circle at 36% 33%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('North/Outside', 'Nord/Extérieur'),
          imageUrl: 'car/strats/healerout/platform-west-towers.png',
          mask: 'radial-gradient(circle at 57.7% 19.7%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 36.5% 73.0%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('Brambles', 'Graines'),
          description: localizedText('Inside South', 'Au Sud vers l\'intérieur'),
          imageUrl: 'car/strats/healerout/platform-west-brambles.png',
          mask: 'radial-gradient(circle at 71% 63.9%, black 10%, rgba(0, 0, 0, 0.4) 0%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText('Platform Outside North', "Vers l'extérieur, au Nord de la plateforme"),
          imageUrl: 'car/strats/healerout/platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 33.8% 37.8%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('Swap', 'Swap'),
          description: localizedText('Outside', 'Extérieur'),
          imageUrl: 'car/strats/healerout/platform-west-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 18% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the NE or SE tiles! Now what?',
        "Le swap s'est correctement effectué vers les tuiles NE/SE ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Start', 'Position initiale'),
          description: localizedText(
            "NE/SE East cubby\nIf the swap puts you in North/South cubby, that's fine too.",
            "Tuile du coin Est\n(Si le swap vous place dans la tuile Nord/Sud, c'est ok)"
          ),
          imageUrl: 'car/strats/healerout/postswap-a-tiles-east.png',
          mask: 'radial-gradient(circle at 72.5% 24.5%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 72.5% 75.5%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
        },
        {
          mechanic: localizedText('Priority: t > m > r', 'Priorité : t > m > r'),
          description: localizedText(
            "You're priority 3!\nMove last on mechanics!\nLet the Tank and Melee\nmove first.",
            'Vous êtes la priorité 3 !\nDéplacez-vous en dernier sur les mécaniques !\nLaissez le Tank et le Mêlée se déplacer en premier.'
          )
        },
        {
          mechanic: localizedText('Chaser', 'AoE de poursuite'),
          description: localizedText('NE/SE East cubby', 'Tuile latérale du coin Est'),
          imageUrl: 'car/strats/healerout/tiles-east-chasers.png',
          mask: 'radial-gradient(circle at 77% 22.1%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 77% 79.5%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        }
      ]
    },
    {
      alliance: 'A',
      role: 'Ranged',
      party: 2,
      notes: localizedText('SW/Back Left tiles', 'Tuiles au Sud-Ouest'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('Start', 'Position initiale'),
          description: localizedText('SW West cubby', 'Tuile Ouest'),
          imageUrl: 'car/strats/healerout/tiles-southwest.png',
          mask: 'radial-gradient(circle at 26.7% 50.9%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('Priority: t > m > r', 'Priorité : t > m > r'),
          description: localizedText(
            "You're priority 3!\nMove last on mechanics!\nLet the Tank and Melee\nmove first.",
            'Vous êtes la priorité 3 !\nDéplacez-vous en dernier sur les mécaniques !\nLaissez le Tank et le Mêlée se déplacer en premier.'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the East platform! Now what?',
        "Le swap s'est correctement effectué vers la plateforme à l'Est ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Close to boss\nNorth Outside\nw/ Healer 1',
            "Près du boss\nAu Nord vers l'extérieur\nEn duo avec le Soigneur 1"
          ),
          imageUrl: 'car/strats/healerout/postswap-a-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 60% 38%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('North/Outside', 'Nord/Extérieur'),
          imageUrl: 'car/strats/healerout/postswap-a-platform-east-towers.png',
          mask: 'radial-gradient(circle at 45% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 63% 75%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText('Platform Outside North', "Vers l'extérieur, au Nord de la plateforme"),
          imageUrl: 'car/strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 63.5% 36%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Tank',
      party: 1,
      notes: localizedText('NW/Front Left tiles', 'Tuiles au Nord-Ouest'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('Start', 'Position initiale'),
          description: localizedText('NW inner tile', 'Tuile Intérieure'),
          imageUrl: 'car/strats/healerout/tiles-northwest.png',
          mask: 'radial-gradient(circle at 70% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('Priority: t > m > r', 'Priorité : t > m > r'),
          description: localizedText(
            "You're priority 1!\nMove first on mechanics!",
            'Vous êtes la priorité 1 ! Vous êtes le premier à vous déplacer pour les mécaniques.'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the East platform! Now what?',
        "Le swap s'est correctement effectué vers la plateforme à l'Est ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Close to boss\nInside\nw/ Healer from B',
            "Près du boss\nVers l'intérieur\nEn duo avec le Soigneur de l'Alliance B"
          ),
          imageUrl: 'car/strats/healerout/postswap-b-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 25% 49.9%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('North/Outside', 'Nord/Extérieur'),
          imageUrl: 'car/strats/healerout/postswap-b-platform-east-towers.png',
          mask: 'radial-gradient(circle at 45% 19%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 64% 75%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText(
            'Platform Inside North',
            "Vers l'intérieur, au Nord de la plateforme"
          ),
          imageUrl: 'car/strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 9% 36%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Tank',
      party: 2,
      notes: localizedText('NE/Front Right tiles', 'Tuiles au Nord-Est'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('Start', 'Position initiale'),
          description: localizedText('NE inner tile', 'Tuile Intérieure'),
          imageUrl: 'car/strats/healerout/tiles-northeast.png',
          mask: 'radial-gradient(circle at 29% 51.4%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('Priority: t > m > r', 'Priorité : t > m > r'),
          description: localizedText(
            "You're priority 1!\nMove first on mechanics!",
            'Vous êtes la priorité 1 ! Vous êtes le premier à vous déplacer pour les mécaniques.'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the West platform! Now what?',
        "Le swap s'est correctement effectué vers la plateforme à l'Ouest ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Close to boss\nInside\nw/ Healer from B',
            "Près du boss\nVers l'intérieur\nEn duo avec le Soigneur de l'Alliance B"
          ),
          imageUrl: 'car/strats/healerout/postswap-b-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 73.2% 50%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('North/Outside', 'Nord/Extérieur'),
          imageUrl: 'car/strats/healerout/postswap-b-platform-west-towers.png',
          mask: 'radial-gradient(circle at 58% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 36.5% 74%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText(
            'Platform Inside North',
            "Vers l'intérieur, au Nord de la plateforme"
          ),
          imageUrl: 'car/strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 88.5% 39%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Healer',
      party: 1,
      notes: localizedText(
        'Left/West platform, Boss faces Inside',
        "Plateforme Ouest, avec le boss orienté vers l'intérieur"
      ),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Far from boss\nInside\nw/ Tank',
            "Loin du boss\nVers l'intérieur\nEn duo avec le Tank"
          ),
          imageUrl: 'car/strats/healerout/platform-west-pairs.png',
          mask: 'radial-gradient(circle at 93% 50.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('Spread', 'Spread'),
          description: localizedText('North', 'Nord'),
          imageUrl: 'car/strats/healerout/platform-west-spread.png',
          mask: 'radial-gradient(circle at 62% 29%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('South/Inside', 'Sud/Intérieur'),
          imageUrl: 'car/strats/healerout/platform-west-towers.png',
          mask: 'radial-gradient(circle at 58.3% 35.3%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 77.4% 73.2%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('Brambles', 'Graines'),
          description: localizedText('Outside South', 'Au Sud vers l\'extérieur'),
          imageUrl: 'car/strats/healerout/platform-west-brambles.png',
          mask: 'radial-gradient(circle at 29.8% 63.7%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText('Ring Outside North', "Sur l'anneau extérieur au Nord"),
          imageUrl: 'car/strats/healerout/platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 23% 13.5%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('Swap', 'Swap'),
          description: localizedText('Inside', 'Intérieur'),
          imageUrl: 'car/strats/healerout/platform-west-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 82.3% 49.8%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the East platform! Now what?',
        "Le swap s'est correctement effectué vers la plateforme à l'Est ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Far from boss\nInside\nw/ Tank',
            "Loin du boss\nVers l'intérieur\nEn duo avec le Tank"
          ),
          imageUrl: 'car/strats/healerout/postswap-h-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 9% 50%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('South/Inside', 'Sud/Intérieur'),
          imageUrl: 'car/strats/healerout/postswap-h-platform-east-towers.png',
          mask: 'radial-gradient(circle at 44% 34.3%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 22.8% 755%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText('Ring Outside North', "Sur l'anneau extérieur au Nord"),
          imageUrl: 'car/strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 78% 11.8%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Healer',
      party: 2,
      notes: localizedText(
        'Right/East platform, Boss faces Inside',
        "Plateforme Est, Boss tourné vers l'intérieur"
      ),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Far from boss\nInside\nw/ Tank',
            "Loin du boss\nVers l'intérieur\nEn duo avec le Tank"
          ),
          imageUrl: 'car/strats/healerout/platform-east-pairs.png',
          mask: 'radial-gradient(circle at 9.8% 50%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('Spread', 'Spread'),
          description: localizedText('North', 'Nord'),
          imageUrl: 'car/strats/healerout/platform-east-spread.png',
          mask: 'radial-gradient(circle at 39.5% 28.5%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('South/Inside', 'Sud/Intérieur'),
          imageUrl: 'car/strats/healerout/platform-east-towers.png',
          mask: 'radial-gradient(circle at 43.8% 34.3%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 23% 75%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('Brambles', 'Graines'),
          description: localizedText('Outside South', "Au Sud vers l'extérieur"),
          imageUrl: 'car/strats/healerout/platform-east-brambles.png',
          mask: 'radial-gradient(circle at 72% 62%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText('Ring Outside North', "Sur l'anneau extérieur au Nord"),
          imageUrl: 'car/strats/healerout/platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 79% 11.7%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('Swap', 'Swap'),
          description: localizedText('Inside', 'Intérieur'),
          imageUrl: 'car/strats/healerout/platform-east-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 15.9% 51.6%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the West platform! Now what?',
        "Le swap s'est correctement effectué vers la plateforme à l'Ouest ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Far from boss\nInside\nw/ Tank',
            "Loin du boss\nVers l'intérieur\nEn duo avec le Tank"
          ),
          imageUrl: 'car/strats/healerout/postswap-h-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 87.5% 50.2%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('South/Inside', 'Sud/Intérieur'),
          imageUrl: 'car/strats/healerout/postswap-h-platform-west-towers.png',
          mask: 'radial-gradient(circle at 58% 35%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 78% 73%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText('Ring Outside North', "Sur l'anneau extérieur au Nord"),
          imageUrl: 'car/strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 25.5% 13%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Melee',
      party: 1,
      notes: localizedText('NW/Front Left tiles', 'Tuiles au Nord-Ouest'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('Start', 'Position initiale'),
          description: localizedText('NW North cubby', 'Tuile Nord'),
          imageUrl: 'car/strats/healerout/tiles-northwest.png',
          mask: 'radial-gradient(circle at 49.1% 29.3%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('Priority: t > m > r', 'Priorité : t > m > r'),
          description: localizedText(
            "You're priority 2!\nMove second on mechanics!\nLet the Tank move first.",
            'Vous êtes la priorité 2 !\nDéplacez-vous en second sur les mécaniques !\nLaissez le Tank bouger en premier.'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the East platform! Now what?',
        "Le swap s'est correctement effectué vers la plateforme à l'Est ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Close to boss\nSouth Outside\nw/ Healer 2 from A',
            "Près du boss\nÀ l'extérieur au Sud\nEn duo avec le Soigneur 2 de l'Alliance A"
          ),
          imageUrl: 'car/strats/healerout/postswap-b-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 61% 62%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('North/Outside', 'Nord/Extérieur'),
          imageUrl: 'car/strats/healerout/postswap-b-platform-east-towers.png',
          mask: 'radial-gradient(circle at 45% 19%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 63.5% 75%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText('Platform Inside South', "Vers l'intérieur, au Sud de la plateforme"),
          imageUrl: 'car/strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 8% 63.8%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Melee',
      party: 2,
      notes: localizedText('NE/Front Right tiles', 'Tuiles au Nord-Est'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('Start', 'Position initiale'),
          description: localizedText('NE North cubby', 'Tuile Nord'),
          imageUrl: 'car/strats/healerout/tiles-northeast.png',
          mask: 'radial-gradient(circle at 50% 30%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('Priority: t > m > r', 'Priorité : t > m > r'),
          description: localizedText(
            "You're priority 2!\nMove second on mechanics!\nLet the Tank move first.",
            'Vous êtes la priorité 2 !\nDéplacez-vous en second sur les mécaniques !\nLaissez le Tank bouger en premier.'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the West platform! Now what?',
        "Le swap s'est correctement effectué vers la plateforme à l'Ouest ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Close to boss\nSouth Outside\nw/ Healer 2 from C',
            "Près du boss\nÀ l'extérieur au Sud\nEn duo avec le Soigneur 2 de l'Alliance C"
          ),
          imageUrl: 'car/strats/healerout/postswap-b-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 40% 62.5%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('North/Outside', 'Nord/Extérieur'),
          imageUrl: 'car/strats/healerout/postswap-b-platform-west-towers.png',
          mask: 'radial-gradient(circle at 58% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 36.5% 74%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText('Platform Inside South', "Vers l'intérieur, au Sud de la plateforme"),
          imageUrl: 'car/strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 90% 69%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Ranged',
      party: 1,
      notes: localizedText('NW/Front Left tiles', 'Tuiles au Nord-Ouest'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('Start', 'Position initiale'),
          description: localizedText('NW West cubby', 'Tuile Ouest'),
          imageUrl: 'car/strats/healerout/tiles-northwest.png',
          mask: 'radial-gradient(circle at 27% 48.3%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('Priority: t > m > r', 'Priorité : t > m > r'),
          description: localizedText(
            "You're priority 3!\nMove last on mechanics!\nLet the Tank and Melee\nmove first.",
            'Vous êtes la priorité 3 !\nDéplacez-vous en dernier sur les mécaniques !\nLaissez le Tank et le Mêlee bouger en premier.'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the East platform! Now what?',
        "Le swap s'est correctement effectué vers la plateforme à l'Est ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Close to boss\nNorth Outside\nw/ Healer 1 from A',
            "Près du boss\nAu Nord vers l'extérieur\nEn duo avec le Soigneur 1 de l'Alliance A"
          ),
          imageUrl: 'car/strats/healerout/postswap-b-platform-east-pairs.png',
          mask: 'radial-gradient(circle at 61% 38%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('North/Outside', 'Nord/Extérieur'),
          imageUrl: 'car/strats/healerout/postswap-b-platform-east-towers.png',
          mask: 'radial-gradient(circle at 45% 19%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 64% 75%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText('Platform Outside North', "Vers l'extérieur, au Nord de la plateforme"),
          imageUrl: 'car/strats/healerout/postswap-platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 63.5% 36%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'B',
      role: 'Ranged',
      party: 2,
      notes: localizedText('NE/Front Right tiles', 'Tuiles au Nord-Est'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('Start', 'Position initiale'),
          description: localizedText('NE East cubby', 'Tuile Est'),
          imageUrl: 'car/strats/healerout/tiles-northeast.png',
          mask: 'radial-gradient(circle at 71.5% 49.4%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('Priority: t > m > r', 'Priorité : t > m > r'),
          description: localizedText(
            "You're priority 3!\nMove last on mechanics!\nLet the Tank and Melee\nmove first.",
            'Vous êtes la priorité 3 !\nDéplacez-vous en dernier sur les mécaniques !\nLaissez le Tank et le Mêlée bouger en premier.'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the West platform! Now what?',
        "Le swap s'est correctement effectué vers la plateforme à l'Ouest ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Close to boss\nNorth Outside\nw/ Healer 1 from C',
            "Près du boss\nAu Nord vers l'extérieur\nEn duo avec le Soigneur 1 de l'Alliance C"
          ),
          imageUrl: 'car/strats/healerout/postswap-b-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 40% 38%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('North/Outside', 'Nord/Extérieur'),
          imageUrl: 'car/strats/healerout/postswap-b-platform-west-towers.png',
          mask: 'radial-gradient(circle at 58% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 36.5% 74%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText('Platform Outside North', "Vers l'extérieur, au Nord de la plateforme"),
          imageUrl: 'car/strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 36% 38%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Tank',
      party: 1,
      notes: localizedText(
        'Right/East platform, Face boss Inside',
        "Plateforme Est, orientez le boss vers l'intérieur"
      ),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Close to boss\nInside\nw/ Healer from B',
            "Près du boss\nVers l'intérieur\nEn duo avec le Soigneur de l'Alliance B"
          ),
          imageUrl: 'car/strats/healerout/platform-east-pairs.png',
          mask: 'radial-gradient(circle at 27% 50%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('Spread', 'Spread'),
          description: localizedText('Inside', 'Intérieur'),
          imageUrl: 'car/strats/healerout/platform-east-spread.png',
          mask: 'radial-gradient(circle at 13.2% 50.3%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('North/Outside', 'Nord/Extérieur'),
          imageUrl: 'car/strats/healerout/platform-east-towers.png',
          mask: 'radial-gradient(circle at 44.5% 18%, black 11%, rgba(0, 0, 0, 0.2) 11%), radial-gradient(circle at 63.1% 74.8%, black 11%, rgba(0, 0, 0, 0.2) 11%)'
        },
        {
          mechanic: localizedText('Brambles', 'Graines'),
          description: localizedText(
            'None, stay on boss',
            "Aucune, restez sous le boss"
          ),
          imageUrl: 'car/strats/healerout/platform-east-brambles.png',
          mask: 'radial-gradient(circle at 46% 50%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText(
            'Platform Inside North',
            "Vers l'intérieur, au Nord de la plateforme"
          ),
          imageUrl: 'car/strats/healerout/platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 9% 35.5%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('Swap', 'Swap'),
          description: localizedText('Outside', 'Extérieur'),
          imageUrl: 'car/strats/healerout/platform-east-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 82.2% 50.3%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the NW or SW tiles! Now what?',
        "Le swap s'est correctement effectué vers les tuiles NW/SW ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Start', 'Position initiale'),
          description: localizedText('NW/SW east of corner tile', "NW/SW sur la tuile vers l'intérieur"),
          imageUrl: 'car/strats/healerout/postswap-c-tiles-west.png',
          mask: 'radial-gradient(circle at 73.3% 24.1%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 73.1% 74.9%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
        },
        {
          mechanic: localizedText('Priority: t > m > r', 'Priorité : t > m > r'),
          description: localizedText(
            "You're priority 1!\nMove first on mechanics!",
            'Vous êtes la priorité 1 ! Vous êtes le premier à vous déplacer pour les mécaniques.'
          )
        },
        {
          mechanic: localizedText('Chaser', 'AoE de poursuite'),
          description: localizedText(
            'CCW of corner tile',
            'Déplacez-vous en sens anti-horaire pour laisser la place à vos DPS'
          ),
          imageUrl: 'car/strats/healerout/tiles-west-chasers.png',
          mask: 'radial-gradient(circle at 48.5% 31.1%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 72% 80.9%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Tank',
      party: 2,
      notes: localizedText('SE/Back Right tiles', 'Tuiles au Sud-Est'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('Start', 'Position initiale'),
          description: localizedText('SE inner tile', 'Tuile Intérieure'),
          imageUrl: 'car/strats/healerout/tiles-southeast.png',
          mask: 'radial-gradient(circle at 29% 51%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('Priority: t > m > r', 'Priorité : t > m > r'),
          description: localizedText(
            "You're priority 1!\nMove first on mechanics!",
            'Vous êtes la priorité 1 ! Vous êtes le premier à vous déplacer pour les mécaniques.'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the West platform! Now what?',
        "Le swap s'est correctement effectué vers la plateforme à l'Ouest ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Close to boss\nInside\nw/ Healer from B',
            "Près du boss\nVers l'intérieur\nEn duo avec le Soigneur 1 de l'Alliance B"
          ),
          imageUrl: 'car/strats/healerout/postswap-c-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 73% 50.5%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('North/Outside', 'Nord/Extérieur'),
          imageUrl: 'car/strats/healerout/postswap-c-platform-west-towers.png',
          mask: 'radial-gradient(circle at 57.5% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 36% 74%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText(
            'Platform Inside North',
            "Vers l'intérieur, au Nord de la plateforme"
          ),
          imageUrl: 'car/strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 88% 39%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Healer',
      party: 1,
      notes: localizedText(
        'Right/East platform, Boss faces Inside',
        "Plateforme Est, Boss tourné vers l'intérieur"
      ),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Far from boss\nNorth Outside\nw/ Ranged',
            "Loin du boss\nAu Nord vers l'extérieur\nEn duo avec le DPS à distance"
          ),
          imageUrl: 'car/strats/healerout/platform-east-pairs.png',
          mask: 'radial-gradient(circle at 80.1% 27.3%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('Spread', 'Spread'),
          description: localizedText('Outside', 'Extérieur'),
          imageUrl: 'car/strats/healerout/platform-east-spread.png',
          mask: 'radial-gradient(circle at 75% 51%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('South/Inside', 'Sud/Intérieur'),
          imageUrl: 'car/strats/healerout/platform-east-towers.png',
          mask: 'radial-gradient(circle at 44% 34%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 24.5% 75%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('Brambles', 'Graines'),
          description: localizedText('Inside North', "Au Nord vers l'intérieur"),
          imageUrl: 'car/strats/healerout/platform-east-brambles.png',
          mask: 'radial-gradient(circle at 29.2% 37.6%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText(
            'Platform Outside South',
            "Vers l'extérieur, au Sud de la plateforme"
          ),
          imageUrl: 'car/strats/healerout/platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 63.9% 64%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('Swap', 'Swap'),
          description: localizedText('Inside', 'Intérieur'),
          imageUrl: 'car/strats/healerout/platform-east-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 15.9% 51.6%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the West platform! Now what?',
        "Le swap s'est correctement effectué vers la plateforme à l'Ouest ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Far from boss\nNorth Outside\nw/ Ranged',
            "Loin du boss\nAu Nord vers l'extérieur\nEn duo avec le DPS à distance"
          ),
          imageUrl: 'car/strats/healerout/postswap-h-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 26.7% 27.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('South/Inside', 'Sud/Intérieur'),
          imageUrl: 'car/strats/healerout/postswap-h-platform-west-towers.png',
          mask: 'radial-gradient(circle at 59% 34.5%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 78% 73%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText(
            'Platform Outside South',
            "Vers l'extérieur, au Sud de la plateforme"
          ),
          imageUrl: 'car/strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 37% 69.5%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Healer',
      party: 2,
      notes: localizedText(
        'Right/East platform, Boss faces Inside',
        "Plateforme Est, Boss tourné vers l'intérieur"
      ),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Far from boss\nSouth Outside\nw/ Melee',
            "Loin du boss\nAu Sud vers l'extérieur\nEn duo avec le DPS de Mêlée"
          ),
          imageUrl: 'car/strats/healerout/platform-east-pairs.png',
          mask: 'radial-gradient(circle at 81% 72.2%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('Spread', 'Spread'),
          description: localizedText('South', 'Au Sud'),
          imageUrl: 'car/strats/healerout/platform-east-spread.png',
          mask: 'radial-gradient(circle at 40% 71.8%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('South/Inside', 'Sud/Intérieur'),
          imageUrl: 'car/strats/healerout/platform-east-towers.png',
          mask: 'radial-gradient(circle at 44% 34.5%, black 13%, rgba(0, 0, 0, 0.2) 13%), radial-gradient(circle at 24.5% 75%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('Brambles', 'Graines'),
          description: localizedText('Outside North', "Au Nord vers l'extérieur"),
          imageUrl: 'car/strats/healerout/platform-east-brambles.png',
          mask: 'radial-gradient(circle at 72% 37.7%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText('Ring Outside South', "Sur l'anneau extérieur au Sud"),
          imageUrl: 'car/strats/healerout/platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 77% 87.6%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('Swap', 'Swap'),
          description: localizedText('Inside', 'Intérieur'),
          imageUrl: 'car/strats/healerout/platform-east-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 15.9% 51.6%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the West platform! Now what?',
        "Le swap s'est correctement effectué vers la plateforme à l'Ouest ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Far from boss\nSouth Outside\nw/ Melee',
            "Loin du boss\nAu Sud vers l'extérieur\nEn duo avec le DPS de Mêlée"
          ),
          imageUrl: 'car/strats/healerout/postswap-h-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 25.5% 72.1%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('South/Inside', 'Sud/Intérieur'),
          imageUrl: 'car/strats/healerout/postswap-h-platform-west-towers.png',
          mask: 'radial-gradient(circle at 59% 34.5%, black 12%, rgba(0, 0, 0, 0.2) 12%), radial-gradient(circle at 78% 73%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText('Ring Outside South', "Sur l'anneau extérieur au Sud"),
          imageUrl: 'car/strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 23% 94%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Melee',
      party: 1,
      notes: localizedText(
        'Right/East platform, Boss faces Inside',
        "Plateforme Est, Boss tourné vers l'intérieur"
      ),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Close to boss\nSouth Outside\nw/ Healer 2',
            "Près du boss\nAu Sud vers l'extérieur\nEn duo avec le Soigneur 2"
          ),
          imageUrl: 'car/strats/healerout/platform-east-pairs.png',
          mask: 'radial-gradient(circle at 66% 62%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('Spread', 'Spread'),
          description: localizedText('South Outside', "Au Sud vers l'extérieur"),
          imageUrl: 'car/strats/healerout/platform-east-spread.png',
          mask: 'radial-gradient(circle at 66% 69%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('North/Outside', 'Nord/Extérieur'),
          imageUrl: 'car/strats/healerout/platform-east-towers.png',
          mask: 'radial-gradient(circle at 44.5% 19.5%, black 11%, rgba(0, 0, 0, 0.2) 11%), radial-gradient(circle at 64% 75%, black 11%, rgba(0, 0, 0, 0.2) 11%)'
        },
        {
          mechanic: localizedText('Brambles', 'Graines'),
          description: localizedText(
            'None, stay on boss',
            "Aucune, restez sous le boss"
          ),
          imageUrl: 'car/strats/healerout/platform-east-brambles.png',
          mask: 'radial-gradient(circle at 60.2% 55%, black 16%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText('Platform Inside South', "Vers l'intérieur, au Sud de la plateforme"),
          imageUrl: 'car/strats/healerout/platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 9% 63.8%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('Swap', 'Swap'),
          description: localizedText('Outside', 'Extérieur'),
          imageUrl: 'car/strats/healerout/platform-east-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 82.2% 53.3%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the NW or SW tiles! Now what?',
        "Le swap s'est correctement effectué vers les tuiles NW/SW ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Start', 'Position initiale'),
          description: localizedText(
            "NW/SW North/South cubby\nIf the swap puts you in West cubby, that's fine too.",
            "Tuile Nord/Sud au NW/SW\n(Si le swap vous place dans la tuile Ouest, c'est ok)"
          ),
          imageUrl: 'car/strats/healerout/postswap-c-tiles-west.png',
          mask: 'radial-gradient(circle at 49.5% 14%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 49.5% 86.1%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
        },
        {
          mechanic: localizedText('Priority: t > m > r', 'Priorité : t > m > r'),
          description: localizedText(
            "You're priority 2!\nMove second on mechanics!\nLet the Tank move first.",
            'Vous êtes la priorité 2 !\nDéplacez-vous en second sur les mécaniques !\nLaissez le Tank se déplacer en premier.'
          )
        },
        {
          mechanic: localizedText('Chaser', 'AoE de poursuite'),
          description: localizedText('NW/SW North/South cubby', 'Tuile Nord/Sud au NW/SW'),
          imageUrl: 'car/strats/healerout/tiles-west-chasers.png',
          mask: 'radial-gradient(circle at 48% 9%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 48.9% 93.4%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Melee',
      party: 2,
      notes: localizedText('SE/Back Right tiles', 'Tuiles au Sud-Est'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('Start', 'Position initiale'),
          description: localizedText('SE South cubby', 'Tuile Sud'),
          imageUrl: 'car/strats/healerout/tiles-southeast.png',
          mask: 'radial-gradient(circle at 49.6% 75.4%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('Priority: t > m > r', 'Priorité : t > m > r'),
          description: localizedText(
            "You're priority 2!\nMove second on mechanics!\nLet the Tank move first.",
            'Vous êtes la priorité 2 !\nDéplacez-vous en second sur les mécaniques !\nLaissez le Tank se déplacer en premier.'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the West platform! Now what?',
        "Le swap s'est correctement effectué vers la plateforme à l'Ouest ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Close to boss\nSouth Outside\nw/ Healer 2',
            "Près du boss\nAu Sud vers l'extérieur\nEn duo avec le Soigneur 2"
          ),
          imageUrl: 'car/strats/healerout/postswap-c-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 41% 62%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('North/Outside', 'Nord/Extérieur'),
          imageUrl: 'car/strats/healerout/postswap-c-platform-west-towers.png',
          mask: 'radial-gradient(circle at 57.5% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 36% 74%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText('Platform Inside South', "Vers l'intérieur, au Sud de la plateforme"),
          imageUrl: 'car/strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 90% 69%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Ranged',
      party: 1,
      notes: localizedText(
        'Right/East platform, Boss faces Inside',
        "Plateforme Est, Boss tourné vers l'intérieur"
      ),
      startingArea: 'Platform',
      strats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Close to boss\nNorth Outside\nw/ Healer 1',
            "Près du boss\nAu Nord vers l'extérieur\nEn duo avec le Soigneur 1"
          ),
          imageUrl: 'car/strats/healerout/platform-east-pairs.png',
          mask: 'radial-gradient(circle at 65.5% 38%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('Spread', 'Spread'),
          description: localizedText('North Outside', "Au Nord vers l'extérieur"),
          imageUrl: 'car/strats/healerout/platform-east-spread.png',
          mask: 'radial-gradient(circle at 66.2% 35.4%, black 12%, rgba(0, 0, 0, 0.4) 12%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('North/Outside', 'Nord/Extérieur'),
          imageUrl: 'car/strats/healerout/platform-east-towers.png',
          mask: 'radial-gradient(circle at 44.5% 19.5%, black 11%, rgba(0, 0, 0, 0.2) 11%), radial-gradient(circle at 64% 75%, black 11%, rgba(0, 0, 0, 0.2) 11%)'
        },
        {
          mechanic: localizedText('Brambles', 'Graines'),
          description: localizedText('Inside South', 'Au Sud vers l\'intérieur'),
          imageUrl: 'car/strats/healerout/platform-east-brambles.png',
          mask: 'radial-gradient(circle at 29.5% 61.5%, black 10%, rgba(0, 0, 0, 0.4) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText('Platform Outside North', "Vers l'extérieur, au Nord de la plateforme"),
          imageUrl: 'car/strats/healerout/platform-east-aoe-spread.png',
          mask: 'radial-gradient(circle at 63.6% 36%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        },
        {
          mechanic: localizedText('Swap', 'Swap'),
          description: localizedText('Outside', 'Extérieur'),
          imageUrl: 'car/strats/healerout/platform-east-swap.png',
          mask: 'radial-gradient(ellipse 100% 250% at 82.2% 50.3%, black 16%, rgba(0, 0, 0, 0.4) 16%)'
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the NW or SW tiles! Now what?',
        "Le swap s'est correctement effectué vers les tuiles NW/SW ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Start', 'Position initiale'),
          description: localizedText(
            "NW/SW West cubby\nIf the swap puts you in North/South cubby, that's fine too.",
            "Tuile Ouest au NW/SW\n(Si le swap vous place dans la tuile Nord/Sud, c'est ok)"
          ),
          imageUrl: 'car/strats/healerout/postswap-c-tiles-west.png',
          mask: 'radial-gradient(circle at 27% 24%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 27% 75.4%, black 9%, rgba(0, 0, 0, 0.2) 9%)'
        },
        {
          mechanic: localizedText('Priority: t > m > r', 'Priorité : t > m > r'),
          description: localizedText(
            "You're priority 3!\nMove last on mechanics!\nLet the Tank and Melee\nmove first.",
            'Vous êtes la priorité 3 !\nDéplacez-vous en dernier sur les mécaniques !\nLaissez le Tank se déplacer en premier.'
          )
        },
        {
          mechanic: localizedText('Chaser', 'AoE de poursuite'),
          description: localizedText('NW/SW West cubby', 'Tuile Ouest au NW/SW'),
          imageUrl: 'car/strats/healerout/tiles-west-chasers.png',
          mask: 'radial-gradient(circle at 23.3% 18%, black 9%, rgba(0, 0, 0, 0.2) 9%), radial-gradient(circle at 23.5% 79%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        }
      ]
    },
    {
      alliance: 'C',
      role: 'Ranged',
      party: 2,
      notes: localizedText('SE/Back Right tiles', 'Tuiles au Sud-Est'),
      startingArea: 'Tiles',
      strats: [
        {
          mechanic: localizedText('Start', 'Position initiale'),
          description: localizedText('SE East cubby', 'Tuile Est'),
          imageUrl: 'car/strats/healerout/tiles-southeast.png',
          mask: 'radial-gradient(circle at 69.2% 50%, black 22%, rgba(0, 0, 0, 0.4) 22%)'
        },
        {
          mechanic: localizedText('Priority: t > m > r', 'Priorité : t > m > r'),
          description: localizedText(
            "You're priority 3!\nMove last on mechanics!\nLet the Tank and Melee\nmove first.",
            'Vous êtes la priorité 3 !\nDéplacez-vous en dernier sur les mécaniques !\nLaissez le Tank et le Mêlée se déplacer en premier.'
          )
        }
      ],
      swapNote: localizedText(
        'I got a clean swap to the West platform! Now what?',
        "Le swap s'est correctement effectué vers la plateforme à l'Ouest ! Et maintenant ?"
      ),
      swapStrats: [
        {
          mechanic: localizedText('Pairs', 'Paires'),
          description: localizedText(
            'Close to boss\nNorth Outside\nw/ Healer 1',
            "Près du boss\nAu Nord vers l'extérieur\nEn duo avec le Soigneur 1"
          ),
          imageUrl: 'car/strats/healerout/postswap-c-platform-west-pairs.png',
          mask: 'radial-gradient(circle at 41.1% 37.7%, black 11%, rgba(0, 0, 0, 0.4) 11%)'
        },
        {
          mechanic: localizedText('Towers', 'Tours'),
          description: localizedText('North/Outside', 'Nord/Extérieur'),
          imageUrl: 'car/strats/healerout/postswap-c-platform-west-towers.png',
          mask: 'radial-gradient(circle at 57.5% 18.5%, black 10%, rgba(0, 0, 0, 0.2) 10%), radial-gradient(circle at 36% 74%, black 10%, rgba(0, 0, 0, 0.2) 10%)'
        },
        {
          mechanic: localizedText('AoEs', 'AoEs'),
          description: localizedText('Platform Outside North', "Vers l'extérieur, au Nord de la plateforme"),
          imageUrl: 'car/strats/healerout/postswap-platform-west-aoe-spread.png',
          mask: 'radial-gradient(circle at 36% 38%, black 8%, rgba(0, 0, 0, 0.4) 8%)'
        }
      ]
    }
  ]
};
