
let classes = [
      "Aerothurge"= [
        1 = [
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
        4 = [
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
        9 = [
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
        13 = [
          {
            "name": "Closed Circuit",
            "img": "photos/aerothurge/Closed_Circuit.webp",
            "description": "Deal air damage around you and created cursed static clouds at the edge of the area of effect.",
            "action points": 2,
            "source points": 2,
            "required": "Aerotheurge 3"
          }
        ],
        "level 16": [
          {
            "name": "Super Conductor",
            "img": "photos/aerothurge/Super_Conductor.webp",
            "description": "Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.",
            "action points": 2,
            "source points": 2,
            "required": "Aerotheurge 3"
          },
          {
            "name": "Thunderstorm",
            "img": "photos/aerothurge/Thunderstorm.webp",
            "description": "Deal air damage and set Shocked for two turns on enemies without Magic Armour.",
            "action points": 4,
            "source points": 3,
            "required": "Aerotheurge 5"
          },
          {
            "name": "Pressure Spike",
            "img": "photos/aerothurge/Pressure_Spike.webp",
            "description": "Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.",
            "action points": 2,
            "source points": 2,
            "required": "Aerotheurge 3"
          },
        ],
        "craftable": [
          {
            "name": "Breathing Bubble",
            "img": "photos/aerothurge/Breathing_Bubble.webp",
            "description": "Create a bubble of clean air around the caster's head, allowing them to ignore effects of cloud surfaces. Gives immunity to Suffocating.",
            "action points": 1,
            "source points": 0,
            "required": ["Aerotheurge 1", "Warfare 3"],
          },
          {
            "name": "Electric Infusion",
            "img": "photos/aerothurge/Electric_Infusion.webp",
            "description": "Infuse your Incarnate with air element. Gives Incarnate Electric Discharge skill.",
            "action points": 1,
            "source points": 0,
            "required": ["Aerotheurge 1", "Summoning 1"],
          },
          {
            "name": "Erratic Wisp",
            "img": "photos/aerothurge/Erratic_Wisp.webp",
            "description": "Cause target character to teleport in a random direction each time they are damaged with physical attack.",
            "action points": 1,
            "source points": 0,
            "required": ["Aerotheurge 1", "Huntsman 1"],
          },
          {
            "name": "Smoke Cover",
            "img": "photos/aerothurge/Smoke_Cover.webp",
            "description": "Create a smoke cloud blocking vision of all characters in it.",
            "action points": 2,
            "source points": 0,
            "required": ["Aerotheurge 1", "Scoundrel 1"],
          },
          {
            "name": "Vaccuum Touch",
            "img": "photos/aerothurge/Vaccuum_Touch.webp",
            "description": "Deal air damage and sets Suffocating (Original Sin 2) Suffocating and Silence status effects.",
            "action points": 1,
            "source points": 0,
            "required": ["Aerotheurge 1", "Necromancer 1"],
          },
          {
            "name": "Vaporize",
            "img": "photos/aerothurge/Vaporize.webp",
            "description": "Turn liquid surfaces into clouds. Removes Petrified and Frozen from target. ",
            "action points": 1,
            "source points": 0,
            "required": ["Aerotheurge 1", "Polymorph 1"],
          },
        ],
        "source": [
          {
            "name": "Blessed Smoke Cloud",
            "img": "photos/aerothurge/Blessed_Smoke_Cloud.webp",
            "description": "Conjures a cloud of thick blessed smoke that makes characters Invisible. Removes Silenced status.",
            "action points": 1,
            "source points": 2,
            "required": ["Aerotheurge 2", "Scoundrel 2"],
          },
          {
            "name": "Cursed Electric Infusion",
            "img": "photos/aerothurge/Cursed_Electric_Infusion.webp",
            "description": "Infuse your Incarnate with cursed electricity. Gives Incarnate Electric Discharge and Closed Circuit spells.",
            "action points": 1,
            "source points": 2,
            "required": ["Aerotheurge 2", "Summoning 2"],
          },
          {
            "name": "Evasive Aura",
            "img": "photos/aerothurge/Evasive_Aura.webp",
            "description": "Increase dodging ability of yourself and all allies by 90%. Increases movement by 1",
            "action points": 2,
            "source points": 1,
            "required": ["Aerotheurge 2", "Huntsman 2"],
          },
          {
            "name": "Jellyfish Skin",
            "img": "photos/aerothurge/Jellyfish_Skin.webp",
            "description": "You gain immunity to electricity, but lowered resistance to poison and earth damage. Bleed electrified water.",
            "action points": 1,
            "source points": 1,
            "required": ["Aerotheurge 2", "Polymorph 2"],
          },
          {
            "name": "Mass Breathing Bubble",
            "img": "photos/aerothurge/Mass_Breathing_Bubble.webp",
            "description": "Create a bubble of clear air around your and your allies heads, making you ignore cloud effects. Gives Immunity to Suffocating.",
            "action points": 1,
            "source points": 1,
            "required": ["Aerotheurge 2", "Warfare 2"],
          },
          {
            "name": "Vacuum Aura",
            "img": "photos/aerothurge/Vacuum_Aura.webp",
            "description": "Vacuum aura deals air damage to enemies in the area around caster. Enemies will get Silenced and Suffocating if they dont have Magic Armour.",
            "action points": 2,
            "source points": 1,
            "required": ["Aerotheurge 2", "Necromancer 2"],
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
            "name": "Corrosive Touch",
            "img": "photos/geomancer/Corrosive_Touch.webp",
            "description": "Corrosive Touch deals physical armour damage and sets Acid on target.",
            "action points": 1,
            "source points": 0,
            "required": ["Geomancer 1", "Necromancer 1"],
          },
          {
            "name": "Oily Carapace",
            "img": "photos/geomancer/Oily_Carapace.webp",
            "description": "This skill absorbs any oil surfaces around the caster and converts it to Physical Armour.",
            "action points": 1,
            "source points": 0,
            "required": ["Geomancer 1", "Warfare 1"],
          },
          {
            "name": "Poison Infusion",
            "img": "photos/geomancer/Poison_Infusion.webp",
            "description": "Infuse your Incarnate with poison.",
            "action points": 1,
            "source points": 0,
            "required": ["Geomancer 1", "Summoning 1"],
          },
          {
            "name": "Throw Dust",
            "img": "photos/geomancer/Throw_Dust.webp",
            "description": "Throw dust at a character, blinding them and dealing earth damage. Clears surfaces and clouds in the area. ",
            "action points": 2,
            "source points": 0,
            "required": ["Geomancer 1", "Huntsman 1"],
          },
          {
            "name": "Turn to Oil",
            "img": "photos/geomancer/Turn_to_Oil.webp",
            "description": "Turns water and blood surfaces into oil. Removes Stun and Shocked from characters.",
            "action points": 1,
            "source points": 0,
            "required": ["Geomancer 1", "Polymorph 1"],
          },
          {
            "name": "Venom Coating",
            "img": "photos/geomancer/Venom_Coating.webp",
            "description": "Applies poison damage on equipped weapons and skills.",
            "action points": 1,
            "source points": 0,
            "required": ["Geomancer 1", "Scoundrel 1"],
          },
        ],
        "source": [
          {
            "name": "Acid Infusion",
            "img": "photos/geomancer/Acid_Infusion.webp",
            "description": "Changes Incarnate's element to acid, unlocking Poison Dart and Acid Spores.",
            "action points": 1,
            "source points": 2,
            "required": ["Geomancer 3", "Summoning 3"],
          },
          {
            "name": "Corrosive Spray",
            "img": "photos/geomancer/Corrosive_Spray.webp",
            "description": "Corrosive spray deals physical armour damage and sets Acid and Atrophy on targets in a cone.",
            "action points": 2,
            "source points": 1,
            "required": ["Geomancer 2", "Necromancer 2"],
          },
          {
            "name": "Dust Blast",
            "img": "photos/geomancer/Dust_Blast.webp",
            "description": "Dust blast throws dust at all enemies in range setting Blinded and dealing earth damage.",
            "action points": 3,
            "source points": 1,
            "required": ["Geomancer 2", "Huntsman 2"],
          },
          {
            "name": "Mass Oily Carapace",
            "img": "photos/geomancer/Mass_Oily_Carapace.webp",
            "description": "Convert all oil surfaces around caster and their allies into Physical Armour.",
            "action points": 1,
            "source points": 2,
            "required": ["Geomancer 2", "Warfare 2"],
          },
          {
            "name": "Poisonous Skin",
            "img": "photos/geomancer/Poisonous_Skin.webp",
            "description": "You get immunity to poison and earth, but lowered resistance to air. You bleed poison.",
            "action points": 2,
            "source points": 1,
            "required": ["Geomancer 2", "Polymorph 2"],
          },
          {
            "name": "Venomous Aura",
            "img": "photos/geomancer/Venomous_Aura.webp",
            "description": "Caster's and their allies damage will be changed to poison element.",
            "action points": 2,
            "source points": 1,
            "required": ["Geomancer 2", "Scoundrel 2"],
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
        1 = [
          {
            "name": "Bull Horns",
            "img": "photos/geomancer/Fortify.webp",
            "description": "Increases character's Physical Armour for 3 turns. Fortified Characters cannot be forcefully teleported.",
            "action points": 1,
            "source points": 0,
            "required": "Geomancer 1",
          },
          {
            "name": "Fortify",
            "img": "photos/geomancer/Fortify.webp",
            "description": "Increases character's Physical Armour for 3 turns. Fortified Characters cannot be forcefully teleported.",
            "action points": 1,
            "source points": 0,
            "required": "Geomancer 1",
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

const myClass = document.getElementById('class');

function addItems(index) {
  itemArray[index].inventory++;
  renderList();
}

function removeItems(index) {
  if (itemArray[index].inventory > 0) {
    itemArray[index].inventory--;
    renderList();
  }
}

function renderList() {
  myItems.innerHTML = '';

  itemArray.forEach((item, index) => {
    const listItem = document.createElement('li');

    const imgElement = document.createElement('img');
    imgElement.src = item.img;
    imgElement.alt = item.item;
    imgElement.style.width = '30px';
    listItem.appendChild(imgElement);

    const itemText = document.createElement('span');
    itemText.textContent = item.item;
    listItem.appendChild(itemText);

    const decreaseButton = document.createElement('button');
    decreaseButton.textContent = '-';
    decreaseButton.addEventListener('click', () => removeItems(index));
    listItem.appendChild(decreaseButton);

    const inventoryText = document.createElement('span');
    inventoryText.textContent = item.inventory;
    listItem.appendChild(inventoryText);

    const increaseButton = document.createElement('button');
    increaseButton.textContent = '+';
    increaseButton.addEventListener('click', () => addItems(index));
    listItem.appendChild(increaseButton);

    myItems.appendChild(listItem);
  });
}

renderList();