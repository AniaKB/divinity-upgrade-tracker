let classes = [
  'Cleric',
  'Conjurer',
  'Enchanter',
  'Witch',
  'Wizard',
  'Metamorph',
  'Ranger',
  'Rogue',
  'Shadowblade',
  'Wayfarer',
  'Battlemage',
  'Fighter',
  'Inquisitor',
  'Knight',
]



function generateProfile () {
  return {
    classes: [
      "Aerothurge": [
        "level 1": [
          {
            "name": "Blinding Radiance",
            "img": "photos/aerothurge/Blinding_Radiance.webp",
            "description": "Blinding Radiance sets \"Radiant\" status which inflicts Blinded status upon enemies without Magic Armour as well as dealing air damage upon casting",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Electric Discharge",
            "img": "/photos/aerothurge/Electric_Discharge.webp",
            "description": "Deal air damage and set Shocked for two turns on enemies without Magic Armour",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Favorable Wind",
            "img": "photos/aerothurge/Favorable_Wind.webp",
            "description": "Sets Favorable Wind Aura on the caster and allies within close proximity for four turns, increasing their movement speed by 1.5m for 4 turns.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Shocking Touch",
            "img": "photos/aerothurge/Shocking_Touch.webp",
            "description": "Touch your enemy to deal them air damage and set Stunned them if they dont have Magic Armour.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
        ],
        "level 4": [
          {
            "name": "Dazing Bolt",
            "img": "photos/aerothurge/Dazing_Bolt.webp",
            "description": "Shoot an electrical bolt from the sky dealing air damage to characters and items in the area, and setting Shocked status.",
            "action points": 3,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Teleportation",
            "img": "photos/aerothurge/Teleportation.webp",
            "description": "Move objects (inanimate or otherwise) from one location to another. Deals physical damage upon impact.",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Uncanny Evasion",
            "img": "photos/aerothurge/Uncanny_Evasion.webp",
            "description": "Increases dodging by 90% and movement by 20%.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
        ],
        "level 9": [
          {
            "name": "Chain Lightning",
            "img": "photos/aerothurge/Chain_Lightning.webp",
            "description": "Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.",
            "action points": 3,
            "source points": 1,
            "required": "Aerotheurge 3"
          },
          {
            "name": "Nether Swap",
            "img": "photos/aerothurge/Nether_Swap.webp",
            "description": "Nether swap allows the caster or an ally of their choosing to swap places with an enemy.",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Pressure Spike",
            "img": "photos/aerothurge/Pressure_Spike.webp",
            "description": "Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
        ],
      ],
      "Geomancer": [
        "level 1": [
          {
            "name": "Contamination",
            "img": "photos/geomancer/Contamination.webp",
            "description": "Deals poison damage and sets Poisoned to enemies within a 12.0m radius around you for 1 turn. Turns water, blood surfaces, and clouds into poison.",
            "action points": 1,
            "source points": 0,
            "required": "Geomancer 1"
          },
          {
            "name": "Fortify",
            "img": "photos/geomancer/Fortify.webp",
            "description": "Increases character's Physical Armour for 3 turns. Fortified Characters cannot be forcefully teleported.",
            "action points": 1,
            "source points": 0,
            "required": "Geomancer 1"
          },
          {
            "name": "Fossil Strike",
            "img": "photos/geomancer/Fossil_Strike.webp",
            "description": "Throw a giant rock filled with sticky oil that deals earth damage and creates an oil surface within a 2 meter radius.",
            "action points": 2,
            "source points": 0,
            "required": "Geomancer 1"
          },
          {
            "name": "Poison Dart",
            "img": "photos/geomancer/Contamination.webp",
            "description": "Shoot poison at an enemy which will deal poison damage and create poison surface beneath them.",
            "action points": 2,
            "source points": 0,
            "required": "Geomancer 1"
          },
        ],
        "level 4": [
          {
            "name": "Impalement",
            "img": "photos/geomancer/Impalement.webp",
            "description": "Rock spikes strike all character within a 4.0m radius area crippling them and dealing earth damage. Creates an oil surface.",
            "action points": 2,
            "source points": 0,
            "required": "Geomancer 2"
          },
          {
            "name": "Mend Metal",
            "img": "photos/geomancer/Mend_Metal.webp",
            "description": "Allies near to the caster slowly regenerate Physical Armour.",
            "action points": 1,
            "source points": 0,
            "required": "Geomancer 2"
          },
          {
            "name": "Worm Tremor",
            "img": "photos/geomancer/Worm_Tremor.webp",
            "description": "Deals earth damage to each character in the area. Affected characters cannot move or teleport, and they receive poison damage each turn if they dont have Magic armour.",
            "action points": 2,
            "source points": 0,
            "required": "Geomancer 2"
          },
        ],
        "level 9": [
          {
            "name": "Earthquake",
            "img": "photos/geomancer/Earthquake.webp",
            "description": "Deals earth damage and knocks down enemy characters and items around the caster. Creates eight oil surfaces within the area.",
            "action points": 3,
            "source points": 0,
            "required": "Geomancer 2"
          },
          {
            "name": "Poison Wave",
            "img": "photos/geomancer/Poison_Wave.webp",
            "description": "Poison erupts from the caster in a circular wave, dealing poison damage and forming poison clouds. Gives immunity to poison and earth damage for one turn.",
            "action points": 2,
            "source points": 0,
            "required": "Geomancer 2"
          },
          {
            "name": "Reactive Armour",
            "img": "photos/geomancer/Reactive_Armour.webp",
            "description": "Deals physical damage based on the casters current Physical Armour, in a wave of metal spikes to everyone in the area (including yourself).",
            "action points": 1,
            "source points": 0,
            "required": "Geomancer 2"
          },
          {
            "name": "Summon Hungry Flower",
            "img": "photos/geomancer/Summon_Hungry_Flower.webp",
            "description": "Summons a mobile plant having Acid Spore, Poison Wave and All In skills.",
            "action points": 3,
            "source points": 1,
            "required": "Geomancer 3"
          },
        ],
        "level 16": [
          {
            "name": "Living Wall",
            "img": "photos/geomancer/Living_Wall.webp",
            "description": "Vines sprout from the ground to block the path in a target area, emitting poison clouds around them.",
            "action points": 2,
            "source points": 0,
            "required": "Geomancer 3"
          },
          {
            "name": "Pyroclastic Eruption",
            "img": "photos/geomancer/Pyroclastic_Eruption.webp",
            "description": "Oil-filled rocks erupt from the caster at all enemies in the area. On impact, they create oil surfaces and deal earth damage.",
            "action points": 3,
            "source points": 1,
            "required": "Geomancer 5"
          },
          {
            "name": "Siphon Poison",
            "img": "photos/geomancer/Siphon_Poison.webp",
            "description": "Removes poison surfaces and clouds. Gain poison damage bonus to weapon attacks and weapon-based skills depending on size of the cleared area.",
            "action points": 3,
            "source points": 1,
            "required": "Geomancer 3"
          },
        ],
        "craftable": [
          {
            "name": "Acid Infusion",
            "img": "photos/geomancer/Acid_Infusion.webp",
            "description": "Changes Incarnate's element to acid, unlocking Poison Dart and Acid Spores.",
            "action points": 1,
            "source points": 2,
            "required": "Geomancer 3" + "Summoning 3",
          },
          {
            "name": "Corrosive Spray",
            "img": "photos/geomancer/Corrosive_Spray.webp",
            "description": "Corrosive spray deals physical armour damage and sets Acid and Atrophy on targets in a cone.",
            "action points": 2,
            "source points": 1,
            "required": "Geomancer 2" + "Necromancer 2"
          },
          {
            "name": "Dust Blast",
            "img": "photos/geomancer/Dust_Blast.webp",
            "description": "Dust blast throws dust at all enemies in range setting Blinded and dealing earth damage.",
            "action points": 3,
            "source points": 1,
            "required": "Geomancer 2" + "Huntsman 2"
          },
        ],    
      ],
      "Huntsman": [
        "level 1": [
          {
            "name": "Blinding Radiance",
            "img": "photos/aerothurge/Blinding_Radiance.webp",
            "description": "Blinding Radiance sets \"Radiant\" status which inflicts Blinded status upon enemies without Magic Armour as well as dealing air damage upon casting",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Electric Discharge",
            "img": "/photos/aerothurge/Electric_Discharge.webp",
            "description": "Deal air damage and set Shocked for two turns on enemies without Magic Armour",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Favorable Wind",
            "img": "photos/aerothurge/Favorable_Wind.webp",
            "description": "Sets Favorable Wind Aura on the caster and allies within close proximity for four turns, increasing their movement speed by 1.5m for 4 turns.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Shocking Touch",
            "img": "photos/aerothurge/Shocking_Touch.webp",
            "description": "Touch your enemy to deal them air damage and set Stunned them if they dont have Magic Armour.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
        ],
        "level 4": [
          {
            "name": "Dazing Bolt",
            "img": "photos/aerothurge/Dazing_Bolt.webp",
            "description": "Shoot an electrical bolt from the sky dealing air damage to characters and items in the area, and setting Shocked status.",
            "action points": 3,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Teleportation",
            "img": "photos/aerothurge/Teleportation.webp",
            "description": "Move objects (inanimate or otherwise) from one location to another. Deals physical damage upon impact.",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Uncanny Evasion",
            "img": "photos/aerothurge/Uncanny_Evasion.webp",
            "description": "Increases dodging by 90% and movement by 20%.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
        ],
        "level 9": [
          {
            "name": "Chain Lightning",
            "img": "photos/aerothurge/Chain_Lightning.webp",
            "description": "Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.",
            "action points": 3,
            "source points": 1,
            "required": "Aerotheurge 3"
          },
          {
            "name": "Nether Swap",
            "img": "photos/aerothurge/Nether_Swap.webp",
            "description": "Nether swap allows the caster or an ally of their choosing to swap places with an enemy.",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Pressure Spike",
            "img": "photos/aerothurge/Pressure_Spike.webp",
            "description": "Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
        ],
      ],
      "Hydrosophist": [
        "level 1": [
          {
            "name": "Blinding Radiance",
            "img": "photos/aerothurge/Blinding_Radiance.webp",
            "description": "Blinding Radiance sets \"Radiant\" status which inflicts Blinded status upon enemies without Magic Armour as well as dealing air damage upon casting",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Electric Discharge",
            "img": "/photos/aerothurge/Electric_Discharge.webp",
            "description": "Deal air damage and set Shocked for two turns on enemies without Magic Armour",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Favorable Wind",
            "img": "photos/aerothurge/Favorable_Wind.webp",
            "description": "Sets Favorable Wind Aura on the caster and allies within close proximity for four turns, increasing their movement speed by 1.5m for 4 turns.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Shocking Touch",
            "img": "photos/aerothurge/Shocking_Touch.webp",
            "description": "Touch your enemy to deal them air damage and set Stunned them if they dont have Magic Armour.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
        ],
        "level 4": [
          {
            "name": "Dazing Bolt",
            "img": "photos/aerothurge/Dazing_Bolt.webp",
            "description": "Shoot an electrical bolt from the sky dealing air damage to characters and items in the area, and setting Shocked status.",
            "action points": 3,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Teleportation",
            "img": "photos/aerothurge/Teleportation.webp",
            "description": "Move objects (inanimate or otherwise) from one location to another. Deals physical damage upon impact.",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Uncanny Evasion",
            "img": "photos/aerothurge/Uncanny_Evasion.webp",
            "description": "Increases dodging by 90% and movement by 20%.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
        ],
        "level 9": [
          {
            "name": "Chain Lightning",
            "img": "photos/aerothurge/Chain_Lightning.webp",
            "description": "Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.",
            "action points": 3,
            "source points": 1,
            "required": "Aerotheurge 3"
          },
          {
            "name": "Nether Swap",
            "img": "photos/aerothurge/Nether_Swap.webp",
            "description": "Nether swap allows the caster or an ally of their choosing to swap places with an enemy.",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Pressure Spike",
            "img": "photos/aerothurge/Pressure_Spike.webp",
            "description": "Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
        ],
      ],
      "Necromancer": [
        "level 1": [
          {
            "name": "Blinding Radiance",
            "img": "photos/aerothurge/Blinding_Radiance.webp",
            "description": "Blinding Radiance sets \"Radiant\" status which inflicts Blinded status upon enemies without Magic Armour as well as dealing air damage upon casting",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Electric Discharge",
            "img": "/photos/aerothurge/Electric_Discharge.webp",
            "description": "Deal air damage and set Shocked for two turns on enemies without Magic Armour",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Favorable Wind",
            "img": "photos/aerothurge/Favorable_Wind.webp",
            "description": "Sets Favorable Wind Aura on the caster and allies within close proximity for four turns, increasing their movement speed by 1.5m for 4 turns.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Shocking Touch",
            "img": "photos/aerothurge/Shocking_Touch.webp",
            "description": "Touch your enemy to deal them air damage and set Stunned them if they dont have Magic Armour.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
        ],
        "level 4": [
          {
            "name": "Dazing Bolt",
            "img": "photos/aerothurge/Dazing_Bolt.webp",
            "description": "Shoot an electrical bolt from the sky dealing air damage to characters and items in the area, and setting Shocked status.",
            "action points": 3,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Teleportation",
            "img": "photos/aerothurge/Teleportation.webp",
            "description": "Move objects (inanimate or otherwise) from one location to another. Deals physical damage upon impact.",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Uncanny Evasion",
            "img": "photos/aerothurge/Uncanny_Evasion.webp",
            "description": "Increases dodging by 90% and movement by 20%.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
        ],
        "level 9": [
          {
            "name": "Chain Lightning",
            "img": "photos/aerothurge/Chain_Lightning.webp",
            "description": "Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.",
            "action points": 3,
            "source points": 1,
            "required": "Aerotheurge 3"
          },
          {
            "name": "Nether Swap",
            "img": "photos/aerothurge/Nether_Swap.webp",
            "description": "Nether swap allows the caster or an ally of their choosing to swap places with an enemy.",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Pressure Spike",
            "img": "photos/aerothurge/Pressure_Spike.webp",
            "description": "Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
        ],
      ],
      "Polymorph" [
        "level 1": [
          {
            "name": "Bull Horns",
            "effect": "Enables Bull Rush",
            "negated": "Medusa Head"
          },
        ],
      ],
      "Pyrokinetic": [
        "level 1": [
          {
            "name": "Blinding Radiance",
            "img": "photos/aerothurge/Blinding_Radiance.webp",
            "description": "Blinding Radiance sets \"Radiant\" status which inflicts Blinded status upon enemies without Magic Armour as well as dealing air damage upon casting",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Electric Discharge",
            "img": "/photos/aerothurge/Electric_Discharge.webp",
            "description": "Deal air damage and set Shocked for two turns on enemies without Magic Armour",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Favorable Wind",
            "img": "photos/aerothurge/Favorable_Wind.webp",
            "description": "Sets Favorable Wind Aura on the caster and allies within close proximity for four turns, increasing their movement speed by 1.5m for 4 turns.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Shocking Touch",
            "img": "photos/aerothurge/Shocking_Touch.webp",
            "description": "Touch your enemy to deal them air damage and set Stunned them if they dont have Magic Armour.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
        ],
        "level 4": [
          {
            "name": "Dazing Bolt",
            "img": "photos/aerothurge/Dazing_Bolt.webp",
            "description": "Shoot an electrical bolt from the sky dealing air damage to characters and items in the area, and setting Shocked status.",
            "action points": 3,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Teleportation",
            "img": "photos/aerothurge/Teleportation.webp",
            "description": "Move objects (inanimate or otherwise) from one location to another. Deals physical damage upon impact.",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Uncanny Evasion",
            "img": "photos/aerothurge/Uncanny_Evasion.webp",
            "description": "Increases dodging by 90% and movement by 20%.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
        ],
        "level 9": [
          {
            "name": "Chain Lightning",
            "img": "photos/aerothurge/Chain_Lightning.webp",
            "description": "Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.",
            "action points": 3,
            "source points": 1,
            "required": "Aerotheurge 3"
          },
          {
            "name": "Nether Swap",
            "img": "photos/aerothurge/Nether_Swap.webp",
            "description": "Nether swap allows the caster or an ally of their choosing to swap places with an enemy.",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Pressure Spike",
            "img": "photos/aerothurge/Pressure_Spike.webp",
            "description": "Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
        ],
      ],
      "Scoundrel": [
        "level 1": [
          {
            "name": "Blinding Radiance",
            "img": "photos/aerothurge/Blinding_Radiance.webp",
            "description": "Blinding Radiance sets \"Radiant\" status which inflicts Blinded status upon enemies without Magic Armour as well as dealing air damage upon casting",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Electric Discharge",
            "img": "/photos/aerothurge/Electric_Discharge.webp",
            "description": "Deal air damage and set Shocked for two turns on enemies without Magic Armour",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Favorable Wind",
            "img": "photos/aerothurge/Favorable_Wind.webp",
            "description": "Sets Favorable Wind Aura on the caster and allies within close proximity for four turns, increasing their movement speed by 1.5m for 4 turns.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Shocking Touch",
            "img": "photos/aerothurge/Shocking_Touch.webp",
            "description": "Touch your enemy to deal them air damage and set Stunned them if they dont have Magic Armour.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
        ],
        "level 4": [
          {
            "name": "Dazing Bolt",
            "img": "photos/aerothurge/Dazing_Bolt.webp",
            "description": "Shoot an electrical bolt from the sky dealing air damage to characters and items in the area, and setting Shocked status.",
            "action points": 3,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Teleportation",
            "img": "photos/aerothurge/Teleportation.webp",
            "description": "Move objects (inanimate or otherwise) from one location to another. Deals physical damage upon impact.",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Uncanny Evasion",
            "img": "photos/aerothurge/Uncanny_Evasion.webp",
            "description": "Increases dodging by 90% and movement by 20%.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
        ],
        "level 9": [
          {
            "name": "Chain Lightning",
            "img": "photos/aerothurge/Chain_Lightning.webp",
            "description": "Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.",
            "action points": 3,
            "source points": 1,
            "required": "Aerotheurge 3"
          },
          {
            "name": "Nether Swap",
            "img": "photos/aerothurge/Nether_Swap.webp",
            "description": "Nether swap allows the caster or an ally of their choosing to swap places with an enemy.",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Pressure Spike",
            "img": "photos/aerothurge/Pressure_Spike.webp",
            "description": "Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
        ],
      ],
      "Summoning": [
        "level 1": [
          {
            "name": "Blinding Radiance",
            "img": "photos/aerothurge/Blinding_Radiance.webp",
            "description": "Blinding Radiance sets \"Radiant\" status which inflicts Blinded status upon enemies without Magic Armour as well as dealing air damage upon casting",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Electric Discharge",
            "img": "/photos/aerothurge/Electric_Discharge.webp",
            "description": "Deal air damage and set Shocked for two turns on enemies without Magic Armour",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Favorable Wind",
            "img": "photos/aerothurge/Favorable_Wind.webp",
            "description": "Sets Favorable Wind Aura on the caster and allies within close proximity for four turns, increasing their movement speed by 1.5m for 4 turns.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Shocking Touch",
            "img": "photos/aerothurge/Shocking_Touch.webp",
            "description": "Touch your enemy to deal them air damage and set Stunned them if they dont have Magic Armour.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
        ],
        "level 4": [
          {
            "name": "Dazing Bolt",
            "img": "photos/aerothurge/Dazing_Bolt.webp",
            "description": "Shoot an electrical bolt from the sky dealing air damage to characters and items in the area, and setting Shocked status.",
            "action points": 3,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Teleportation",
            "img": "photos/aerothurge/Teleportation.webp",
            "description": "Move objects (inanimate or otherwise) from one location to another. Deals physical damage upon impact.",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Uncanny Evasion",
            "img": "photos/aerothurge/Uncanny_Evasion.webp",
            "description": "Increases dodging by 90% and movement by 20%.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
        ],
        "level 9": [
          {
            "name": "Chain Lightning",
            "img": "photos/aerothurge/Chain_Lightning.webp",
            "description": "Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.",
            "action points": 3,
            "source points": 1,
            "required": "Aerotheurge 3"
          },
          {
            "name": "Nether Swap",
            "img": "photos/aerothurge/Nether_Swap.webp",
            "description": "Nether swap allows the caster or an ally of their choosing to swap places with an enemy.",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Pressure Spike",
            "img": "photos/aerothurge/Pressure_Spike.webp",
            "description": "Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
        ],
      ],
      "Warfare": [
        "level 1": [
          {
            "name": "Blinding Radiance",
            "img": "photos/aerothurge/Blinding_Radiance.webp",
            "description": "Blinding Radiance sets \"Radiant\" status which inflicts Blinded status upon enemies without Magic Armour as well as dealing air damage upon casting",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Electric Discharge",
            "img": "/photos/aerothurge/Electric_Discharge.webp",
            "description": "Deal air damage and set Shocked for two turns on enemies without Magic Armour",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Favorable Wind",
            "img": "photos/aerothurge/Favorable_Wind.webp",
            "description": "Sets Favorable Wind Aura on the caster and allies within close proximity for four turns, increasing their movement speed by 1.5m for 4 turns.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Shocking Touch",
            "img": "photos/aerothurge/Shocking_Touch.webp",
            "description": "Touch your enemy to deal them air damage and set Stunned them if they dont have Magic Armour.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
        ],
        "level 4": [
          {
            "name": "Dazing Bolt",
            "img": "photos/aerothurge/Dazing_Bolt.webp",
            "description": "Shoot an electrical bolt from the sky dealing air damage to characters and items in the area, and setting Shocked status.",
            "action points": 3,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Teleportation",
            "img": "photos/aerothurge/Teleportation.webp",
            "description": "Move objects (inanimate or otherwise) from one location to another. Deals physical damage upon impact.",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Uncanny Evasion",
            "img": "photos/aerothurge/Uncanny_Evasion.webp",
            "description": "Increases dodging by 90% and movement by 20%.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
        ],
        "level 9": [
          {
            "name": "Chain Lightning",
            "img": "photos/aerothurge/Chain_Lightning.webp",
            "description": "Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.",
            "action points": 3,
            "source points": 1,
            "required": "Aerotheurge 3"
          },
          {
            "name": "Nether Swap",
            "img": "photos/aerothurge/Nether_Swap.webp",
            "description": "Nether swap allows the caster or an ally of their choosing to swap places with an enemy.",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Pressure Spike",
            "img": "photos/aerothurge/Pressure_Spike.webp",
            "description": "Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
        ],
      ],
    ],
  },
};

