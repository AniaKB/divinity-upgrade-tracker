let skillsArray = [
  {
    type: 'Aerotheurge',
    img: 'photos/aerotheurge/Aerotheurge.png',
    level: {
      1: [
        {
          name: 'Blinding Radiance',
          img: 'photos/aerotheurge/Blinding_Radiance.webp',
          description: 'Blinding Radiance sets \'Radiant\' status which inflicts Blinded status upon enemies without Magic Armour as well as dealing air damage upon casting',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 1 }
        },
        {
          name: 'Electric Discharge',
          img: '/photos/aerotheurge/Electric_Discharge.webp',
          description: 'Deal air damage and set Shocked for two turns on enemies without Magic Armour',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 1 }
        },
        {
          name: 'Favorable Wind',
          img: 'photos/aerotheurge/Favourable_Wind.webp',
          description: 'Sets Favorable Wind Aura on the caster and allies within close proximity for four turns, increasing their movement speed by 1.5m for 4 turns.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 1 }
        },
        {
          name: 'Shocking Touch',
          img: 'photos/aerotheurge/Shocking_Touch.webp',
          description: 'Touch your enemy to deal them air damage and set Stunned them if they dont have Magic Armour.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 1 }
        }
      ],
      4: [
        {
          name: 'Dazing Bolt',
          img: 'photos/aerotheurge/Dazing_Bolt.webp',
          description: 'Shoot an electrical bolt from the sky dealing air damage to characters and items in the area, and setting Shocked status.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 2 }
        },
        {
          name: 'Teleportation',
          img: 'photos/aerotheurge/Teleportation.webp',
          description: 'Move objects (inanimate or otherwise) from one location to another. Deals physical damage upon impact.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 2 }
        },
        {
          name: 'Uncanny Evasion',
          img: 'photos/aerotheurge/Uncanny_Evasion.webp',
          description: 'Increases dodging by 90% and movement by 20%.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 2 }
        }
      ],
      9: [
        {
          name: 'Chain Lightning',
          img: 'photos/aerotheurge/Chain_Lightning.webp',
          description: 'Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 3 }
        },
        {
          name: 'Nether Swap',
          img: 'photos/aerotheurge/Nether_Swap.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 2 }
        },
        {
          name: 'Pressure Spike',
          img: 'photos/aerotheurge/Pressure_Spike.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 2 }
        }
      ],
      13: [
        {
          name: 'Closed Circuit',
          img: 'photos/aerotheurge/Closed_Circuit.webp',
          description: 'Deal air damage around you and created cursed static clouds at the edge of the area of effect.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 2,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 3 }
        }
      ],
      16: [
        {
          name: 'Super Conductor',
          img: 'photos/aerotheurge/Superconductor.webp',
          description: 'Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 2,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 3 }
        },
        {
          name: 'Thunderstorm',
          img: 'photos/aerotheurge/Thunderstorm.webp',
          description: 'Deal air damage and set Shocked for two turns on enemies without Magic Armour.',
          effect: '',
          actionPoints: 4,
          sourcePoints: 3,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 5 }
        },
        {
          name: 'Pressure Spike',
          img: 'photos/aerotheurge/Pressure_Spike.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 2,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 3 }
        }
      ]
    },
    craftable: {
      base: [
        {
          name: 'Breathing Bubble',
          img: 'photos/aerotheurge/Breathing_Bubble.webp',
          description: 'Create a bubble of clean air around the caster\'s head, allowing them to ignore effects of cloud surfaces. Gives immunity to Suffocating.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 1, Warfare: 3 }
        },
        {
          name: 'Electric Infusion',
          img: 'photos/aerotheurge/Electric_Infusion.webp',
          description: 'Infuse your Incarnate with air element. Gives Incarnate Electric Discharge skill.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 1, Summoning: 1 }
        },
        {
          name: 'Erratic Wisp',
          img: 'photos/aerotheurge/Erratic_Wisp.webp',
          description: 'Cause target character to teleport in a random direction each time they are damaged with physical attack.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 1, Huntsman: 1 }
        },
        {
          name: 'Smoke Cover',
          img: 'photos/aerotheurge/Smoke_Cover.webp',
          description: 'Create a smoke cloud blocking vision of all characters in it.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 1, Scoundrel: 1 }
        },
        {
          name: 'Vacuum Touch',
          img: 'photos/aerotheurge/Vacuum_Touch.webp',
          description: 'Deal air damage and sets Suffocating (Original Sin 2) Suffocating and Silence status effects.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 1, Necromancer: 1 }
        },
        {
          name: 'Vaporise',
          img: 'photos/aerotheurge/Vaporise.webp',
          description: 'Turn liquid surfaces into clouds. Removes Petrified and Frozen from target. ',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 1, Polymorph: 1 }
        }
      ],
      source: [
        {
          name: 'Blessed Smoke Cloud',
          img: 'photos/aerotheurge/Blessed_Smoke_Cloud.webp',
          description: 'Conjures a cloud of thick blessed smoke that makes characters Invisible. Removes Silenced status.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 2,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 2, Scoundrel: 2 }
        },
        {
          name: 'Cursed Electric Infusion',
          img: 'photos/aerotheurge/Cursed_Electric_Infusion.webp',
          description: 'Infuse your Incarnate with cursed electricity. Gives Incarnate Electric Discharge and Closed Circuit spells.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 2,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 2, Summoning: 2 }
        },
        {
          name: 'Evasive Aura',
          img: 'photos/aerotheurge/Evasive_Aura.webp',
          description: 'Increase dodging ability of yourself and all allies by 90%. Increases movement by 1',
          effect: '',
          actionPoints: 2,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 2, Huntsman: 2 }
        },
        {
          name: 'Jellyfish Skin',
          img: 'photos/aerotheurge/Jellyfish_Skin.webp',
          description: 'You gain immunity to electricity, but lowered resistance to poison and earth damage. Bleed electrified water.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 2, Polymorph: 2 }
        },
        {
          name: 'Mass Breathing Bubble',
          img: 'photos/aerotheurge/Mass_Breathing_Bubble.webp',
          description: 'Create a bubble of clear air around your and your allies heads, making you ignore cloud effects. Gives Immunity to Suffocating.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 2, Warfare: 2 }
        },
        {
          name: 'Vacuum Aura',
          img: 'photos/aerotheurge/Vacuum_Aura.webp',
          description: 'Vacuum aura deals air damage to enemies in the area around caster. Enemies will get Silenced and Suffocating if they dont have Magic Armour.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 2, Necromancer: 2 }
        }
      ]
    }
  },
  {
    type: 'Geomancer',
    img: 'photos/geomancer/Geomancer.png',
    level: {
      1: [
        {
          name: 'Contamination',
          img: 'photos/geomancer/Contamination.webp',
          description: 'Deals poison damage and sets Poisoned to enemies within a 12.0m radius around you for 1 turn. Turns water, blood surfaces, and clouds into poison.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 1 }
        },
        {
          name: 'Fortify',
          img: 'photos/geomancer/Fortify.webp',
          description: 'Increases character\'s Physical Armour for 3 turns. Fortified Characters cannot be forcefully teleported.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 1 }
        },
        {
          name: 'Fossil Strike',
          img: 'photos/geomancer/Fossil_Strike.webp',
          description: 'Throw a giant rock filled with sticky oil that deals earth damage and creates an oil surface within a 2 meter radius.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 1 }
        },
        {
          name: 'Poison Dart',
          img: 'photos/geomancer/Contamination.webp',
          description: 'Shoot poison at an enemy which will deal poison damage and create poison surface beneath them.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 1 }
        }
      ],
      4: [
        {
          name: 'Impalement',
          img: 'photos/geomancer/Impalement.webp',
          description: 'Rock spikes strike all character within a 4.0m radius area crippling them and dealing earth damage. Creates an oil surface.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 2 }
        },
        {
          name: 'Mend Metal',
          img: 'photos/geomancer/Mend_Metal.webp',
          description: 'Allies near to the caster slowly regenerate Physical Armour.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 2 }
        },
        {
          name: 'Worm Tremor',
          img: 'photos/geomancer/Worm_Tremor.webp',
          description: 'Deals earth damage to each character in the area. Affected characters cannot move or teleport, and they receive poison damage each turn if they dont have Magic armour.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 2 }
        }
      ],
      9: [
        {
          name: 'Earthquake',
          img: 'photos/geomancer/Earthquake.webp',
          description: 'Deals earth damage and knocks down enemy characters and items around the caster. Creates eight oil surfaces within the area.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 2 }
        },
        {
          name: 'Poison Wave',
          img: 'photos/geomancer/Poison_Wave.webp',
          description: 'Poison erupts from the caster in a circular wave, dealing poison damage and forming poison clouds. Gives immunity to poison and earth damage for one turn.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 2 }
        },
        {
          name: 'Reactive Armour',
          img: 'photos/geomancer/Reactive_Armour.webp',
          description: 'Deals physical damage based on the casters current Physical Armour, in a wave of metal spikes to everyone in the area (including yourself).',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 2 }
        },
        {
          name: 'Summon Hungry Flower',
          img: 'photos/geomancer/Summon_Hungry_Flower.webp',
          description: 'Summons a mobile plant having Acid Spore, Poison Wave and All In skills.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 3 }
        }
      ],
      13: [
        {
          name: 'Acid Spores',
          img: 'photos/geomancer/Acid_Spores.webp',
          description: 'Vines sprout from the ground to block the path in a target area, emitting poison clouds around them.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 3 }
        }
      ],
      16: [
        {
          name: 'Living Wall',
          img: 'photos/geomancer/Living_Wall.webp',
          description: 'Vines sprout from the ground to block the path in a target area, emitting poison clouds around them.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 3 }
        },
        {
          name: 'Pyroclastic Eruption',
          img: 'photos/geomancer/Pyroclastic_Eruption.webp',
          description: 'Oil-filled rocks erupt from the caster at all enemies in the area. On impact, they create oil surfaces and deal earth damage.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 5 }
        },
        {
          name: 'Siphon Poison',
          img: 'photos/geomancer/Siphon_Poison.webp',
          description: 'Removes poison surfaces and clouds. Gain poison damage bonus to weapon attacks and weapon-based skills depending on size of the cleared area.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 3 }
        }
      ]
    },
    craftable: {
      base: [
        {
          name: 'Corrosive Touch',
          img: 'photos/geomancer/Corrosive_Touch.webp',
          description: 'Corrosive Touch deals physical armour damage and sets Acid on target.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 1, Necromancer: 1 }
        },
        {
          name: 'Oily Carapace',
          img: 'photos/geomancer/Oily_Carapace.webp',
          description: 'This skill absorbs any oil surfaces around the caster and converts it to Physical Armour.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 1, Warfare: 1 }
        },
        {
          name: 'Poison Infusion',
          img: 'photos/geomancer/Poison_Infusion.webp',
          description: 'Infuse your Incarnate with poison.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 1, Summoning: 1 }
        },
        {
          name: 'Throw Dust',
          img: 'photos/geomancer/Throw_Dust.webp',
          description: 'Throw dust at a character, blinding them and dealing earth damage. Clears surfaces and clouds in the area. ',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 1, Huntsman: 1 }
        },
        {
          name: 'Turn to Oil',
          img: 'photos/geomancer/Turn_to_Oil.webp',
          description: 'Turns water and blood surfaces into oil. Removes Stun and Shocked from characters.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 1, Polymorph: 1 }
        },
        {
          name: 'Venom Coating',
          img: 'photos/geomancer/Venom_Coating.webp',
          description: 'Applies poison damage on equipped weapons and skills.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 1, Scoundrel: 1 }
        }
      ],
      source: [
        {
          name: 'Acid Infusion',
          img: 'photos/geomancer/Acid_Infusion.webp',
          description: 'Changes Incarnate\'s element to acid, unlocking Poison Dart and Acid Spores.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 2,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 3, Summoning: 3 }
        },
        {
          name: 'Corrosive Spray',
          img: 'photos/geomancer/Corrosive_Spray.webp',
          description: 'Corrosive spray deals physical armour damage and sets Acid and Atrophy on targets in a cone.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 2, Necromancer: 2 }
        },
        {
          name: 'Dust Blast',
          img: 'photos/geomancer/Dust_Blast.webp',
          description: 'Dust blast throws dust at all enemies in range setting Blinded and dealing earth damage.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 2, Huntsman: 2 }
        },
        {
          name: 'Mass Oily Carapace',
          img: 'photos/geomancer/Mass_Oily_Carapace.webp',
          description: 'Convert all oil surfaces around caster and their allies into Physical Armour.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 2,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 2, Warfare: 2 }
        },
        {
          name: 'Poisonous Skin',
          img: 'photos/geomancer/Poisonous_Skin.webp',
          description: 'You get immunity to poison and earth, but lowered resistance to air. You bleed poison.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 2, Polymorph: 2 }
        },
        {
          name: 'Venomous Aura',
          img: 'photos/geomancer/Venomous_Aura.webp',
          description: 'Caster\'s and their allies damage will be changed to poison element.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 2, Scoundrel: 2 }
        }
      ],
      petPower: [
        {
          name: 'Oil infusion',
          img: 'photos/geomancer/Oil_infusion.webp',
          description: 'Changes Incarnate\'s element to acid, unlocking Poison Dart and Acid Spores.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 2,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 3, Summoning: 3 }
        },
        {
          name: 'Cursed Oil Infusion',
          img: 'photos/geomancer/Cursed_Oil_Infusion.webp',
          description: 'Corrosive spray deals physical armour damage and sets Acid and Atrophy on targets in a cone.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 2, Necromancer: 2 }
        }
      ]
    }
  },
  {
    type: 'Huntsman',
    img: 'photos/huntsman/Huntsman.png',
    level: {
      1: [
        {
          name: 'Elemental Arrowheads',
          img: 'photos/huntsman/Elemental_Arrowheads.webp',
          description: 'Change elemental type of your basic attack by infusing it with the surface you are standing on.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 1 }
        },
        {
          name: 'First Aid',
          img: '/photos/huntsman/First_Aid.webp',
          description: 'Heal your target. Removes: Crippled, Knocked Down, Blinded, Silenced, Bleeding, Burning, Poisoned, Diseased',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 1 }
        },
        {
          name: 'Pin Down',
          img: 'photos/huntsman/Pin_Down.webp',
          description: 'Shoot an arrow that will Crippled (Original Sin 2) immobilise and damage your enemy.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 1 }
        },
        {
          name: 'Ricochet',
          img: 'photos/huntsman/Ricochet.webp',
          description: 'Fire a normal arrow that harms multiple foes at once.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 1 }
        }
      ],
      4: [
        {
          name: 'Barrage',
          img: 'photos/huntsman/Barrage.webp',
          description: 'Fire three arrows at three targets of your choice, each dealing physical damage.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 2 }
        },
        {
          name: 'Sky Shot',
          img: 'photos/huntsman/Sky_Shot.webp',
          description: 'Leap into the air before shooting, gaining damage bonus for your superior height. Deals physical damage.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 2 }
        },
        {
          name: 'Tactical Retreat',
          img: 'photos/huntsman/Tactical_Retreat.webp',
          description: 'Teleport yourself away from danger. Applies Hasted status effect.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 2 }
        }
      ],
      9: [
        {
          name: 'Arrow Spray',
          img: 'photos/huntsman/Arrow_Spray.webp',
          description: 'Fire 15 arrows in a 60 degree arc.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 3 }
        },
        {
          name: 'Ballistic Shot',
          img: 'photos/huntsman/Ballistic_Shot.webp',
          description: 'Fire an arrow whose damage will increase with distance between caster and their target.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 2 }
        },
        {
          name: 'Marksman\'s Fang',
          img: 'photos/huntsman/Marksmans_Fang.webp',
          description: 'Fire an arrow that goes straight through enemies in straight line, ignoring armour, and dealing piercing damage to every enemy in range.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 2 }
        },
        {
          name: 'Reactive Shot',
          img: 'photos/huntsman/Reactive_Shot.webp',
          description: 'Target a circular area. Until your next turn, you will reflexively shoot at the first three enemies moving within this area.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 2 }
        }
      ],
      13: [
        {
          name: 'Farsight',
          img: 'photos/huntsman/Farsight.webp',
          description: 'Increases the range of a target character\'s ranged attacks and skills by 3m.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 3 }
        }
      ],
      16: [
        {
          name: 'Arrow Storm',
          img: 'photos/huntsman/Arrow_Storm.webp',
          description: '16 Arrows fall from the sky in the target area, each dealing physical damage.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 3,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 5 }
        },
        {
          name: 'Assasinate',
          img: 'photos/huntsman/Assasinate.webp',
          description: 'Shoot at your target with great aim. Damage is increased by 50% if caster is sneaking.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 3 }
        },
        {
          name: 'Glitter Dust',
          img: 'photos/huntsman/Glitter_Dust.webp',
          description: 'Mark your target to reduce their dodging ability by 100%.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 3 }
        }
      ]
    },
    craftable: {
      base: [
        {
          name: 'Erratic Wisp',
          img: 'photos/huntsman/Erratic_Wisp.webp',
          description: 'Cause target character to teleport in a random direction each time they are damaged with physical attack.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 1, Aerotheurge: 1 }
        },
        {
          name: 'Throw Dust',
          img: 'photos/huntsman/Throw_Dust.webp',
          description: 'Throw dust at a character, blinding them and dealing earth damage. Clears surfaces and clouds in the area.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 1, Geomancer: 1 }
        },
        {
          name: 'Cryotherapy',
          img: 'photos/huntsman/Mass_Cryotherapy.webp',
          description: 'Consume Frozen surfaces around yourself and convert it to Magic Armour.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 1, Hydrosophist: 1 }
        },
        {
          name: 'Throw Explosive Trap',
          img: 'photos/huntsman/Throw_Explosive_Trap.webp',
          description: 'Throw an explosive trap at target location. Trap takes 1 turn to activate. When active, the trap will explode when a character approaches it.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 1, Pyrokinetic: 1 }
        }
      ],
      source: [
        {
          name: 'Evasive Aura',
          img: 'photos/huntsman/Evasive_Aura.webp',
          description: 'Increase dodging ability of yourself and all allies by 90 %. Increases movement by 1',
          effect: '',
          actionPoints: 2,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 2, Aerotheurge: 2 }
        },
        {
          name: 'Dust Blast',
          img: 'photos/huntsman/Dust_Blast.webp',
          description: 'Dust blast throws dust at all enemies in range setting Blinded and dealing earth damage. ',
          effect: '',
          actionPoints: 3,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 2, Geomancer: 2 }
        },
        {
          name: 'Mass Cryotherapy',
          img: 'photos/huntsman/Mass_Cryotherapy.webp',
          description: 'Each ally consumes frozen surfaces around them, converting the frozen surfaces to Magic Armour.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 2, Hydrosophist: 2 }
        },
        {
          name: 'Deploy Mass Traps',
          img: 'photos/huntsman/Deploy_Mass_Traps.webp',
          description: 'Each ally consumes frozen surfaces around them, converting the frozen surfaces to Magic Armour.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Huntsman: 2, Pyrokinetic: 2 }
        }
      ]
    }
  },
  {
    type: 'Hydrosophist',
    img: 'photos/hydrosophist/Hydrosophist.png',
    level: {
      1: [
        {
          name: 'Armour of Frost',
          img: 'photos/hydrosophist/Armor_of_Frost.webp',
          description: 'Ice forms a defensive barrier around the target, giving them Magic Shell status effect which increases Magic Armour. Removes: Burning, Poisoned, Stunned, Frozen, Suffocating, Petrified',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 1 }
        },
        {
          name: 'Hail Strike',
          img: '/photos/hydrosophist/Hail_Strike.webp',
          description: 'Hail Strike creates three beams of ice that can inflict Frozen and Chilled status effects.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 1 }
        },
        {
          name: 'Rain',
          img: 'photos/hydrosophist/Rain.webp',
          description: 'Summon rain at target area, creating water surfaces. Removes: Invisible status effect.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 1 }
        },
        {
          name: 'Restoration',
          img: 'photos/hydrosophist/Restoration.webp',
          description: 'Heal target over time. Removes Poisoned and Bleeding. ',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 1 }
        }
      ],
      4: [
        {
          name: 'Ice Fan',
          img: 'photos/hydrosophist/Ice_Fan.webp',
          description: 'Ice fan spell is an offensive spell that allows its caster to shoot three projectiles at their enemies.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 2 }
        },
        {
          name: 'Soothing Cold',
          img: 'photos/hydrosophist/Soothing_Cold.webp',
          description: 'Regenerate Magic Armour Icon (Original Sin 2) Magic Armour for all allies around the caster.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 2 }
        },
        {
          name: 'Winter Blast',
          img: 'photos/hydrosophist/Winter_Blast.webp',
          description: 'Winter blast deals water damage to its target and sets Chilled status for 2 turns on characters in the area.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 2 }
        }
      ],
      9: [
        {
          name: 'Arcane Stitch',
          img: 'photos/hydrosophist/Arcane_Stitch.webp',
          description: 'Fully restore target character\'s Magic Armour. Removes: Burning, Necrofirere, Poisonedd, Stunned, Frozen, Terrified, Silenced, Taunted, Suffocatingting, Maddening Song, Mad, Petrifieded',
          effect: '',
          actionPoints: 3,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 3 }
        },
        {
          name: 'Cryogenic Stasis',
          img: 'photos/hydrosophist/Cryogenic_Stasis.webp',
          description: 'Cryogenic stasis makes the target incapacitated under status effect Permafrost. However while unable to move or act they become immune to all damage and heal over time.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 2 }
        },
        {
          name: 'Global Cooling',
          img: 'photos/hydrosophist/Global_Cooling.webp',
          description: 'Set Chilled (Original Sin 2) Chilled on enemies around you and deal water damage. Freeze all susceptible surfaces.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 2 }
        },
        {
          name: 'Healing Ritual',
          img: 'photos/hydrosophist/Healing_Ritual.webp',
          description: 'Shoots a bolt of healing energy that will jump to nearby allies.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 2 }
        }
      ],
      13: [
        {
          name: 'Steam Lance',
          img: 'photos/hydrosophist/Steam_Lance.webp',
          description: 'Releases a stream of Blessed Steam which heals characters in its path.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 2,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 3 }
        }
      ],
      16: [
        {
          name: 'Deep Freeze',
          img: 'photos/hydrosophist/Deep_Freeze.webp',
          description: 'Characters in the cone that are Frozen (Original Sin 2) Frozen and below 10% Vitality shatter and instantly die. Otherwise they receive water damage and become Frozen.',
          effect: '',
          actionPoints: 4,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 3 }
        },
        {
          name: 'Hail Storm',
          img: 'photos/hydrosophist/Hail_Storm.webp',
          description: '20 Ice shards rain from the sky, each dealing water damage to characters within the impact zone. Sets Chilled.',
          effect: '',
          actionPoints: 4,
          sourcePoints: 3,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 5 }
        },
        {
          name: 'Ice Breaker',
          img: 'photos/hydrosophist/Ice_Breaker.webp',
          description: 'Ice breaker sets off a chain reaction that causes ice areas to explode into water puddles, dealing water damage and setting Chilled.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 3 }
        }
      ]
    },
    craftable: {
      base: [
        {
          name: 'Cleanse Wounds',
          img: 'photos/hydrosophist/Cleanse_Wounds.webp',
          description: 'Heal target and create a water puddle beneath them. Removes: Burning, Diseased, Decaying, Poisoned, Bleeding',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 1, Warfare: 1 }
        },
        {
          name: 'Cryotherapy',
          img: 'photos/hydrosophist/Cryotherapy.webp',
          description: 'Consume Frozen surfaces around yourself and convert it to Magic Armour.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 2, Huntsman: 1 }
        },
        {
          name: 'Healing Tears',
          img: 'photos/hydrosophist/Healing_Tears.webp',
          description: 'Summon three tears around yourself in order to heal allies near you.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 1, Polymorph: 1 }
        },
        {
          name: 'Raining Blood',
          img: 'photos/hydrosophist/Blood_Rain.webp',
          description: 'Conjure a rain of blood in target area which makes enemies bleed and creating large blood surface.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 1, Necromancer: 1 }
        },
        {
          name: 'Vampiric Hunger',
          img: 'photos/hydrosophist/Vampiric_Hunger.webp',
          description: 'Allows caster to recover 50 % Vitality from damage dealt to enemies.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 1, scoundrel: 2 }
        },
        {
          name: 'Water Infusion',
          img: 'photos/hydrosophist/Water_Infusion.webp',
          description: 'Infuse your Incarnate with water element.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 1, summoning: 1 }
        }
      ],
      source: [
        {
          name: 'Blood Storm',
          img: 'photos/hydrosophist/Blood_Storm.webp',
          description: 'Bolts of coagulated blood fall on enemy characters in the area dealing physical damage and setting disease and decaying. Turns water in the area into blood. ',
          effect: '',
          actionPoints: 4,
          sourcePoints: 3,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 3, Necromancer: 3 }
        },
        {
          name: 'Ice Infusion',
          img: 'photos/hydrosophist/Ice_Infusion.webp',
          description: 'Infuse your Incarnate with blessed ice element.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 2,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 2, summoning: 2 }
        },
        {
          name: 'Icy Skin',
          img: 'photos/hydrosophist/Icy_Skin.webp',
          description: 'Infuse your skin with Water. Gaining Resistance towards water element but weakness to fire element.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 2, Polymorph: 2 }
        },
        {
          name: 'Mass Cleanse Wounds',
          img: 'photos/hydrosophist/Mass_Cleanse_Wounds.webp',
          description: 'Heal yourself and allies around creating a water puddle beneath them. Removes: Burning, Diseased, Decaying, Poisoned, Bleeding',
          effect: '',
          actionPoints: 1,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 2, Warfare: 2 }
        },
        {
          name: 'Mass Cryotherapy',
          img: 'photos/hydrosophist/Mass_Cryotherapy.webp',
          description: 'Each ally consumes frozen surfaces around them, converting the frozen surfaces to Magic Armour.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 2, Huntsman: 2 }
        },
        {
          name: 'Vampiric Hunger Aura',
          img: 'photos/hydrosophist/Vampiric_Hunger_Aura.webp',
          description: 'Allows the caster and allies around them to heal 50 % Vitality from damage dealt to enemies.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 2, Scoundrel: 2 }
        }
      ]
    }
  },
  {
    type: 'Necromancer',
    img: 'photos/necromancer/Necromancer.png',
    level: {
      1: [
        {
          name: 'Blood Sucker',
          img: 'photos/necromancer/Blood_Sucker.webp',
          description: 'Absorb blood surface beneath you to restore your Vitality.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Necromancer: 1 }
        },
        {
          name: 'Decaying Touch',
          img: '/photos/necromancer/Decaying_Touch.webp',
          description: 'Touch you target to deal them physical damage and set Decaying status on them.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Necromancer: 1 }
        },
        {
          name: 'Mosquito Swarm',
          img: 'photos/necromancer/Mosquito_Swarm.webp',
          description: 'Summon a mosquito swarm on your target to deal them physical damage and make them bleed. Restores the casters Vitality.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Necromancer: 1 }
        },
        {
          name: 'Raise Bloated Corpse',
          img: 'photos/necromancer/Raise_Bloated_Corpse.webp',
          description: 'Target a nearby corpse and raise a bloated cadaver to fight for you.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Necromancer: 1 }
        }
      ],
      4: [
        {
          name: 'Death Wish',
          img: 'photos/necromancer/Death_Wish.webp',
          description: 'Target character receives a damage bonus equal to the percentage of their lost Vitality.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Necromancer: 2 }
        },
        {
          name: 'Infect',
          img: 'photos/necromancer/Infect.webp',
          description: 'Deal physical damage. Infect a target with a disease that will spread to other nearby characters.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Necromancer: 2 }
        },
        {
          name: 'Shackles of Pain',
          img: 'photos/necromancer/Shackles_of_Pain.webp',
          description: 'Mark a target so that it will receive all the damage you receive.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Necromancer: 2 }
        }
      ],
      9: [
        {
          name: 'Black Shroud',
          img: 'photos/necromancer/Black_Shroud.webp',
          description: 'Creates a cloud of cursed smoke in an area, setting Suffocating and Blind on all characters within it. ',
          effect: '',
          actionPoints: 1,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Necromancer: 3 }
        },
        {
          name: 'Bone Cage',
          img: 'photos/necromancer/Bone_Cage.webp',
          description: 'Bone cage increases physical armour for each corpse in the area around you.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Necromancer: 2 }
        },
        {
          name: 'Living on the Edge',
          img: 'photos/necromancer/Living_on_the_Edge.webp',
          description: 'For 2 turns, your target character\'s Vitality cannot be reduced below 1 point, keeping them alive against all odds.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Necromancer: 2 }
        },
        {
          name: 'Raise Bone Widow',
          img: 'photos/necromancer/Raise_Bone_Widow.webp',
          description: 'Raise a walking pile of bones that will fight for you.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Necromancer: 2 }
        }
      ],
      13: [
        {
          name: 'Grasp of the Starved',
          img: 'photos/necromancer/Grasp_of_the_Starved.webp',
          description: 'Undead hands rise from the underground, attacking enemy characters that stand in blood surfaces and clouds.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 2,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Necromancer: 3 }
        }
      ],
      16: [
        {
          name: 'Last Rites',
          img: 'photos/necromancer/Last_Rites.webp',
          description: 'Sacrifice yourself to bring an ally back to life.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Necromancer: 3 }
        },
        {
          name: 'Silencing Stare',
          img: 'photos/necromancer/Silencing_Stare.webp',
          description: 'Silence enemies in a cone in front of you.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Necromancer: 3 }
        },
        {
          name: 'Totems of the Necromancer',
          img: 'photos/necromancer/Totems_of_the_Necromancer.webp',
          description: 'Spawn bone totems near every corpse in the area, which will attack your enemies.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 3,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Necromancer: 5 }
        }
      ]
    },
    craftable: {
      base: [
        {
          name: 'Corpse Explosion',
          img: 'photos/necromancer/Corpse_Explosion.webp',
          description: 'Explode target corpse dealing physical damage in an area.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Necromancer: 1, Pyrokinetic: 1 }
        },
        {
          name: 'Corrosive Touch',
          img: 'photos/necromancer/Corrosive_Touch.webp',
          description: 'Destroy physical armour of your target and coat them in Acid.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Necromancer: 1, Geomancer: 1 }
        },
        {
          name: 'Raining Blood',
          img: 'photos/necromancer/Blood_Rain.webp',
          description: 'Create a rain of blood which will make enemies bleed and create a large blood surface in target area.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Necromancer: 1, Hydrosophist: 1 }
        },
        {
          name: 'Vacuum Touch',
          img: 'photos/necromancer/Vacuum_Touch.webp',
          description: 'Deal air damage to your target as you suffocate and silence them.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Necromancer: 1, Aerotheurge: 1 }
        }
      ],
      source: [
        {
          name: 'Blood Storm',
          img: 'photos/necromancer/Blood_Storm.webp',
          description: 'Bolts of coagulated blood fall on enemy characters in the area dealing physical damage and setting disease and decaying.',
          effect: '',
          actionPoints: 4,
          sourcePoints: 3,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 2, Hydrosophist: 2 }
        },
        {
          name: 'Corrosive Spray',
          img: 'photos/necromancer/Corrosive_Spray.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 2, Geomancer: 2 }
        },
        {
          name: 'Mass Corpse Explosion',
          img: 'photos/necromancer/Mass_Corpse_Explosion.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 2, Pyrokinetic: 2 }
        },
        {
          name: 'Vacuum Aura',
          img: 'photos/necromancer/Vacuum_Aura.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 2, Aerotheurge: 2 }
        }
      ],
      petPower: [
        {
          name: 'Blood Infusion',
          img: 'photos/necromancer/Blood_Infusion.webp',
          description: 'Maximum Physical Armour + 15%, Maximum Magic Armour + 15%, immunity to bleeding',
          effect: '',
          actionPoints: 0,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Necromancer: 5, Warfare: 1 }
        },
        {
          name: 'Cursed Blood Infusion',
          img: 'photos/necromancer/Cursed_Blood_Infusion.webp',
          description: 'Maximum Physical Armour + 25%, Maximum Magic Armour + 25%, immunity to bleeding and decaying',
          effect: '',
          actionPoints: 0,
          sourcePoints: 2,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Necromancer: 10, Warfare: 1 }
        },
      ]
    }
  },
  {
    type: 'Polymorph',
    img: 'photos/polymorph/Polymorph.png',
    level: {
      1: [
        {
          name: 'Bull Horns',
          img: 'photos/polymorph/Bull_Horns.webp',
          description: 'Enables Bull Rush. Incompatible with: Medusa Head.',
          effect: '',
          actionPoints: 0,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 1 }
        },
        {
          name: 'Chicken Claw',
          img: '/photos/polymorph/Chicken_Claw.webp',
          description: 'Turn the target character into a chicken. Squawk!',
          effect: 'Set Chicken Form for 2 turns',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 1 }
        },
        {
          name: 'Tentacle Lash',
          img: 'photos/polymorph/Tentacle_Lash.webp',
          description: 'Strikes target for physical damage and gives them Atrophy status.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 1 }
        },
        {
          name: 'Chameleon Cloak',
          img: 'photos/polymorph/Chameleon_Cloak.webp',
          description: 'Renders the user invisible.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 1 }
        }
      ],
      4: [
        {
          name: 'Heart of Steel',
          img: 'photos/polymorph/Heart_of_Steel.webp',
          description: 'Restores Physical Armour for the caster.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 2 }
        },
        {
          name: 'Medusa Head',
          img: 'photos/polymorph/Medusa_Head.webp',
          description: 'Grants Petrifying Aura and Petrifying Visage skill. Incompatible with: Bull Horns',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 2 }
        },
        {
          name: 'Spread Your Wings',
          img: 'photos/polymorph/Spread_Your_Wings.webp',
          description: 'Enables Flight and allows the user to ignore surfaces. Incompatible with: Spider Legs',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 2 }
        }
      ],
      9: [
        {
          name: 'Spider Legs',
          img: 'photos/polymorph/Spider_Legs.webp',
          description: 'Allows movement on web surface and grants the ability to create web surfaces. Web Surfaces grant Haste. Incompatible with: Spread Your Wings',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 2 }
        },
        {
          name: 'Terrain Transmutation',
          img: 'photos/polymorph/Terrain_Transmutation.webp',
          description: 'Swaps surfaces and clouds',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 2 }
        },
        {
          name: 'Summon Oily Blob',
          img: 'photos/polymorph/Summon_Oily_Blob.webp',
          description: 'Summons an oily blob. Blob uses Fossil Strike and Turn to Oil. Lasts 3 turns',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 2 }
        },
        {
          name: 'Skin Graft',
          img: 'photos/polymorph/Skin_Graft.webp',
          description: 'Resets all cooldowns. Removes: Burning, Necrofire, Poisoned, Bleeding',
          effect: '',
          actionPoints: 1,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 3 }
        }
      ],
      13: [
        {
          name: 'Forced Exchange',
          img: 'photos/polymorph/Forced_Exchange.webp',
          description: 'Exchange Vitality percentages with target character',
          effect: '',
          actionPoints: 1,
          sourcePoints: 2,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 3 }
        }
      ],
      16: [
        {
          name: 'Equalise',
          img: 'photos/polymorph/Equalise.webp',
          description: 'Vitality and Armour percentages of characters in target area are summed up and redistributed equally.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 3 }
        },
        {
          name: 'Flay Skin',
          img: 'photos/polymorph/Flay_Skin.webp',
          description: 'Swaps surfaces and clouds.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 3 }
        },
        {
          name: 'Apotheosis',
          img: 'photos/polymorph/Apotheosis.webp',
          description: 'Reduces the cost of all skills by 3sourcepoints(lowering source cost of allsourceskillsto zero). All primary attributes increased by 5.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 3,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 5 }
        }
      ]
    },
    craftable: {
      base: [
        {
          name: 'Bleed Fire',
          img: 'photos/polymorph/Bleed_Fire.webp',
          description: 'Make your enemies bleed fire whenever they are hit. Creates fire surface beneath them.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 1, Polykinetic: 1 }
        },
        {
          name: 'Healing Tears',
          img: 'photos/polymorph/Healing_Tears.webp',
          description: 'Summon three tears around yourself in order to heal allies near you.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 1, Hydrosophist: 1 }
        },
        {
          name: 'Turn to Oil',
          img: 'photos/polymorph/Turn_to_Oil.webp',
          description: 'Turn blood and water into oil. Removes Stunned and Shocked. ',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 1, Geomancer: 1 }
        },
        {
          name: 'Vaporise',
          img: 'photos/polymorph/Vaporise.webp',
          description: 'Turn ground surfaces into clouds. Removes Frozen and Petrified.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 1, Aerotheurge: 1 }
        }
      ],
      source: [
        {
          name: 'Flaming Skin',
          img: 'photos/polymorph/Flaming_Skin.webp',
          description: 'Fire Resistance + 100%, Water Resistance - 30%, Bleeding Fire',
          effect: '',
          actionPoints: 1,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 2, Pyrokinetic: 2 }
        },
        {
          name: 'Icy Skin',
          img: 'photos/polymorph/Icy_Skin.webp',
          description: 'Water Resistance + 100%, Fire Resistance - 30%, Bleeding ice',
          effect: '',
          actionPoints: 1,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 2, Hydrosophist: 2 }
        },
        {
          name: 'Jellyfish Skin',
          img: 'photos/polymorph/Jellyfish_Skin.webp',
          description: 'Air Resistance + 100%, Earth Resistance - 30%, Poison Resistance - 30%, Bleeding electrified water',
          effect: '',
          actionPoints: 1,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 2, Aerotheurge: 2 }
        },
        {
          name: 'Poisonous Skin',
          img: 'photos/polymorph/Poisonous_Skin.webp',
          description: 'Earth Resistance + 100%, Poison Resistance + 100%, Air Resistance - 30%, Bleeding Poison',
          effect: '',
          actionPoints: 1,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Polymorph: 2, Geomancer: 2 }
        }
      ]
    }
  },
  {
    type: 'Pyrokinetic',
    img: 'photos/pyrokinetic/Pyrokinetic.png',
    level: {
      1: [
        {
          name: 'Haste',
          img: 'photos/pyrokinetic/Haste.webp',
          description: 'Increases movement per AP spent by 2m. + 1 temporary AP. Removes: Slowed & Crippled',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 1 }
        },
        {
          name: 'Ignition',
          img: '/photos/pyrokinetic/Ignition.webp',
          description: 'Deals fire damage to all enemies around you in line of sight.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 1 }
        },
        {
          name: 'Peace of Mind',
          img: 'photos/pyrokinetic/Peace_of_Mind.webp',
          description: 'Increases Strength, Finesse, Intelligence and Wits by 1 point each. Removes:, Blinded, Terrified, Charmed, Taunted, Sleeping, Enraged, & Mad',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 1 }
        },
        {
          name: 'Searing Daggers',
          img: 'photos/pyrokinetic/Searing_Daggers.webp',
          description: 'Throw 3 small blades of fire that deal fire damage to the target.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 1 }
        }
      ],
      4: [
        {
          name: 'Fireball',
          img: 'photos/pyrokinetic/Fireball.webp',
          description: 'Hurl a fiery sphere that will explode, dealing fire damage.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 2 }
        },
        {
          name: 'Spontaneous Combustion',
          img: 'photos/pyrokinetic/Spontaneous_Combustion.webp',
          description: 'Deals fire damage around the target. If the target already has Burning or Necrofire on them, the damage from Spontaneous Combustion will be amplified for the remaining turns it affects them. ',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 2 }
        },
        {
          name: 'Supernova',
          img: 'photos/pyrokinetic/Supernova.webp',
          description: 'Explode, creating fire surfaces and dealing fire damage in a area around you (except areas blocked by obstacles).',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 3 }
        }
      ],
      9: [
        {
          name: 'Fire Whip',
          img: 'photos/pyrokinetic/Fire_Whip.webp',
          description: 'Long-range attack that deals fire damage to a single target, leaving them Blind and Burning. ',
          effect: '',
          actionPoints: 3,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 2 }
        },
        {
          name: 'Flaming Tongues',
          img: 'photos/pyrokinetic/Flaming_Tongues.webp',
          description: 'Flaming tongues protect the caster. Whenever an enemy gets close enough he will suffer fire damage.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 2 }
        },
        {
          name: 'Laser Ray',
          img: 'photos/pyrokinetic/Laser_Ray.webp',
          description: 'Line of intense heat that deals fire damage to characters and leaves fire clouds behind.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 2 }
        },
        {
          name: 'Summon Fire Slug',
          img: 'photos/pyrokinetic/Summon_Fire_Slug.webp',
          description: 'Summon a fire slug, which can create fire surfaces and launch linear fire attacks with Laser Ray and Slug Rush.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 3 }
        }
      ],
      13: [
        {
          name: 'Epidemic of Fire',
          img: 'photos/pyrokinetic/Epidemic_of_Fire.webp',
          description: 'Send a cursed flame that will split on impact up to 5 times dealing fire damage and leaving a cursed fire surface behind.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 2,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 3 }
        }
      ],
      16: [
        {
          name: 'Firebrand',
          img: 'photos/pyrokinetic/Firebrand.webp',
          description: 'An aura that adds fire damage to weapon skills and attacks for all allies near you for 3 turns.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 3 }
        },
        {
          name: 'Flaming Crescendo',
          img: 'photos/pyrokinetic/Flaming_Crescendo.webp',
          description: 'Curse the target to explode in next turn or on death.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 3 }
        },
        {
          name: 'Meteor Shower',
          img: 'photos/pyrokinetic/Meteor_Shower.webp',
          description: '25 Fireballs come crashing from the sky. Each does fire damage within a 3m range from impact.',
          effect: '',
          actionPoints: 4,
          sourcePoints: 3,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 5 }
        }
      ]
    },
    craftable: {
      base: [
        {
          name: 'Bleed Fire',
          img: 'photos/pyrokinetic/Bleed_Fire.webp',
          description: 'Make your enemy bleed fire when hit. Creates Fire Surface.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 1, Polymorph: 1 }
        },
        {
          name: 'Corpse Explosion',
          img: 'photos/pyrokinetic/Corpse_Explosion.webp',
          description: 'Explode target corpse, dealing physical damage.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 1, Necromancer: 1 }
        },
        {
          name: 'Fire Infusion',
          img: 'photos/pyrokinetic/Fire_Infusion.webp',
          description: 'Infuse your Incarnate with fire.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 1, Summoning: 1 }
        },
        {
          name: 'Sabotage',
          img: 'photos/pyrokinetic/Sabotage.webp',
          description: 'Make a random grenade or arrow explode in your targets inventory.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 1, Scoundrel: 1 }
        },
        {
          name: 'Sparking Swings',
          img: 'photos/pyrokinetic/Sparking_Swings.webp',
          description: 'Make your basic melee attacks shoot fiery projectiles on nearest enemy.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 1, Warfare: 1 }
        },
        {
          name: 'Throw Explosive Trap',
          img: 'photos/pyrokinetic/Throw_Explosive_Trap.webp',
          description: 'Throw an explosive trap at target location. Trap takes 1 turn to activate. When active, the trap will explode when a character approaches it.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 1, Huntsman: 1 }
        }
      ],
      source: [
        {
          name: 'Deploy Mass Traps',
          img: 'photos/pyrokinetic/Deploy_Mass_Traps.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 2, Huntsman: 1 }
        },
        {
          name: 'Flaming Skin',
          img: 'photos/pyrokinetic/Flaming_Skin.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 2, Polymorph: 1 }
        },
        {
          name: 'Mass Corpse Explosion',
          img: 'photos/pyrokinetic/Mass_Corpse_Explosion.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 2, Necromancer: 1 }
        },
        {
          name: 'Master of Sparks',
          img: 'photos/pyrokinetic/Master_of_Sparks.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 2, Warfare: 1 }
        },
        {
          name: 'Mass Sabotage',
          img: 'photos/pyrokinetic/Mass_Sabotage.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 2, Scoundrel: 1 }
        },
        {
          name: 'Necrofire Infusion',
          img: 'photos/pyrokinetic/Necrofire_Infusion.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 2,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 2, Summoning: 1 }
        }
      ]
    }
  },
  {
    type: 'Scoundrel',
    img: 'photos/scoundrel/Scoundrel.png',
    level: {
      1: [
        {
          name: 'Adrenaline',
          img: 'photos/scoundrel/Adrenaline.webp',
          description: 'Gain 2actionPointsimmediately at the cost of 2actionpoins ained next turn.',
          effect: '',
          actionPoints: 0,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 1 }
        },
        {
          name: 'Backlash',
          img: '/photos/scoundrel/Backlash.webp',
          description: 'Jump behind your enemy and backstab them, dealing physical damage.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 1 }
        },
        {
          name: 'Chloroform',
          img: 'photos/scoundrel/Chloroform.webp',
          description: 'Throw a bottle of chloroform at your enemy, damaging their Magic Armour setting them asleep.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 1 }
        },
        {
          name: 'Throwing Knife',
          img: 'photos/scoundrel/Throwing_Knife.webp',
          description: 'Throw knife at your opponent dealing physical damage.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 1 }
        }
      ],
      4: [
        {
          name: 'Cloak and Dagger',
          img: 'photos/scoundrel/Cloak_and_Dagger.webp',
          description: 'Caster teleports themselves without breaking sneaking or invisibility.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 2 }
        },
        {
          name: 'Sawtooth Knife',
          img: 'photos/scoundrel/Sawtooth_Knife.webp',
          description: 'Pierces the enemy\'s physical armour and directly deals piercing damage.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 2 }
        },
        {
          name: 'Rupture Tendons',
          img: 'photos/scoundrel/Rupture_Tendons.webp',
          description: 'Deals physical damage and makes them take piercing damage whenever they move.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 2 }
        }
      ],
      9: [
        {
          name: 'Corrupted Blade',
          img: 'photos/scoundrel/Corrupted_Blade.webp',
          description: 'Dagger attack that deals physical damage and sets Decay and Diseased.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 2 }
        },
        {
          name: 'Fan of Knives',
          img: 'photos/scoundrel/Fan_of_Knives.webp',
          description: 'Throw daggers at enemies around you dealing Physical damage.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 3 }
        },
        {
          name: 'Gag Order',
          img: 'photos/scoundrel/Gag_Order.webp',
          description: 'Destroy your targets Magic Armour and Silence them.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 2 }
        },
        {
          name: 'Sleeping Arms',
          img: 'photos/scoundrel/Sleeping_Arms.webp',
          description: 'Deal Physical damage and disarm your foes through Atrophy.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 2 }
        }
      ],
      13: [
        {
          name: 'Daggers Drawn',
          img: 'photos/scoundrel/Daggers_Drawn.webp',
          description: 'Whirl into a barrage of 5 stabs, each dealing physical damage.',
          effect: '',
          actionPoints: 4,
          sourcePoints: 2,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 3 }
        }
      ],
      16: [
        {
          name: 'Mortal Blow',
          img: 'photos/scoundrel/Mortal_Blow.webp',
          description: 'Deal physical damage (Doubled if caster is invisible or sneaking) Target is killed instantly if below 20% Vitality.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 3,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 5 }
        },
        {
          name: 'Terrifying Cruelty',
          img: 'photos/scoundrel/Terrifying_Cruelty.webp',
          description: 'Dagger attack that deals physical damage and sets Bleeding and Terrified (Original Sin 2) Terrify on target character.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 3 }
        },
        {
          name: 'Wind-Up Toy',
          img: 'photos/scoundrel/Wind-Up_Toy.webp',
          description: 'Summon a mechanical bomber at the target point. The bomber can explode, dealing fire damage and producing a fire surface.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 3 }
        }
      ]
    },
    craftable: {
      base: [
        {
          name: 'Sabotage',
          img: 'photos/scoundrel/Sabotage.webp',
          description: 'Explode a random arrow or grenade in your targets inventory.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 1, Pyrokinetic: 1 }
        },
        {
          name: 'Smoke Cover',
          img: 'photos/scoundrel/Smoke_Cover.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 1, Aerotheurge: 1 }
        },
        {
          name: 'Vampiric Hunger',
          img: 'photos/scoundrel/Vampiric_Hunger.webp',
          description: 'Allows caster to recover 50 % Vitality from damage dealt to enemies.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 1, Hydrosophist: 1 }
        },
        {
          name: 'Venom Coating',
          img: 'photos/scoundrel/Venom_Coating.webp',
          description: 'Applies poison damage on equipped weapons and skills.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 1, Geomancer: 1 }
        }
      ],
      source: [
        {
          name: 'Blessed Smoke Cloud',
          img: 'photos/scoundrel/Blessed_Smoke_Cloud.webp',
          description: 'Conjure a cloud of blessed smoke in targed area which renders characters Invisible. Removes Silenced.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 2,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 2, Aerotheurge: 2 }
        },
        {
          name: 'Mass Sabotage',
          img: 'photos/scoundrel/Mass_Sabotage.webp',
          description: 'Explode 2 random grenades or arrows of your enemies in targeted area.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 2, Pyrokinetic: 2 }
        },
        {
          name: 'Vampiric Hunger Aura',
          img: 'photos/scoundrel/Vampiric_Hunger_Aura.webp',
          description: 'Allows the caster and allies around them to heal 50 % Vitality from damage dealt to enemies.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 2, Hydrosophist: 2 }
        },
        {
          name: 'Venomous Aura',
          img: 'photos/scoundrel/Venomous_Aura.webp',
          description: 'Applies poison damage on equipped weapons and skills of caster and their allies.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Scoundrel: 2, Geomancer: 2 }
        }
      ]
    }
  },
  {
    type: 'Summoning',
    img: 'photos/summoning/Summoning.png',
    level: {
      1: [
        {
          name: 'Conjure Incarnate',
          img: 'photos/summoning/creatures/Conjure_Incarnate.webp',
          description: 'Summon an Incarnate minion. Base Incarnate has no armour, deals physical damage and has Provoke skill. Incarnate can be changed by summoning it on elemental surface (does not include: lava, source and deathfog).',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Summoning: 1 }
        },
        {
          name: 'Dimensional Bolt',
          img: '/photos/summoning/Dimensional_Bolt.webp',
          description: 'Deal random ranged elemental or physical damage that creates corresponding surface.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Summoning: 1 }
        },
        {
          name: 'Elemental Totem',
          img: 'photos/summoning/Elemental_Totem.webp',
          description: 'Summon an Elemental Totem which will shoot projectiles. Totem can be changed by summoning it on elemental surface (does not include: lava, source and deathfog).',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Summoning: 1 }
        },
        {
          name: 'Farsight Infusion',
          img: 'photos/summoning/Farsight_Infusion.webp',
          description: 'Grants summoned Incarnate a Ranged Attack that deals damage based on their element. Gives Magic Armour, Increases damage by 25 %',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Summoning: 1 }
        }
      ],
      4: [
        {
          name: 'Power Infusion',
          img: 'photos/summoning/Power_Infusion.webp',
          description: 'Grants summoned Incarnate Whirlwind and Battering Ram skills. Gives Incarnate Physical Armour Icon (Original Sin 2)Physical Armour. Increases Incarnate\'s damage by 25 %',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Summoning: 1 }
        },
        {
          name: 'Rallying Cry',
          img: 'photos/summoning/Rallying_Cry.webp',
          description: 'Restores the casters Vitality and Magic Armour depending on number of friendly characters and totems nearby.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Summoning: 2 }
        },
        {
          name: 'Supercharger',
          img: 'photos/summoning/Supercharger.webp',
          description: 'Increases Incarnate attack by 50%, but it will disappear next turn.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Summoning: 2 }
        }
      ],
      9: [
        {
          name: 'Dominate Mind',
          img: 'photos/summoning/Dominate_Mind.webp',
          description: 'Charm a non-allied character, making them join combat on your side.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Summoning: 2 }
        },
        {
          name: 'Door to Eternity',
          img: 'photos/summoning/Door_to_Eternity.webp',
          description: 'Prevent all summoned creatures to die or disappear during the duration of the spell.',
          effect: '',
          actionPoints: 3,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Summoning: 3 }
        },
        {
          name: 'Shadow Infusion',
          img: 'photos/summoning/Shadow_Infusion.webp',
          description: 'Grants Incarnate Chameleon Cloak and Corrupted Blade skills. Increases Incarnate\'s movement by 1 Increases Incarnate\'s damage by 25 %.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Summoning: 2 }
        },
        {
          name: 'Soul Mate',
          img: 'photos/summoning/Soul_Mate.webp',
          description: 'Caster and their target will receive half of each healing and armour restoration received. Removes: Frozen, Stunned, Knocked Down & Petrified.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Summoning: 2 }
        }
      ],
      13: [
        {
          name: 'Planar Gateway',
          img: 'photos/summoning/Planar_Gateway.webp',
          description: 'Create a portal between two places through which characters can move.',
          effect: '',
          actionPoints: 0,
          sourcePoints: 2,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Summoning: 3 }
        }
      ],
      16: [
        {
          name: 'Cannibalize',
          img: 'photos/summoning/Cannibalize.webp',
          description: 'Devour your summoned minion or totem in order to receive their Vitality, Physical and Magic Armour.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Summoning: 3 }
        },
        {
          name: 'Ethereal Storm',
          img: 'photos/summoning/Ethereal_Storm.webp',
          description: 'Summon a storm which will deal massive random elemental and physical damage in an area.',
          effect: '',
          actionPoints: 4,
          sourcePoints: 3,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Summoning: 5 }
        },
        {
          name: 'Warp Infusion',
          img: 'photos/summoning/Warp_Infusion.webp',
          description: 'Grants Incarnate Tactical Retreat and Swap Places spells. Increases Incarnate\'s damage by 25 %. Increases Incarnate\'s dodging by 15 %',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Summoning: 3 }
        }
      ]
    },
    craftable: {
      base: [
        {
          name: 'Electric Infusion',
          img: 'photos/summoning/Electric_Infusion.webp',
          description: 'Air resistance + 100%, Earth resistance -20%, Poison resistance -20%, skills: Electric Discharge',
          effect: '',
          actionPoints: 0,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 5 }
        },
        {
          name: 'Fire Infusion',
          img: 'photos/summoning/Fire_Infusion.webp',
          description: 'Fire resistance + 100%, Water resistance -20%, skills: Fireball',
          effect: '',
          actionPoints: 0,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 5 }
        },
        {
          name: 'Poison Infusion',
          img: 'photos/summoning/Poison_Infusion.webp',
          description: 'Poison resistance + 100%, Air resistance -20%, skills: Poison Dart',
          effect: '',
          actionPoints: 0,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 5 }
        },
        {
          name: 'Water Infusion',
          img: 'photos/summoning/Water_Infusion.webp',
          description: 'Water resistance + 100%, Fire resistance -20%, skills: Restoration',
          effect: '',
          actionPoints: 0,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 5 }
        },
      ],
      source: [
        {
          name: 'Cursed Electric Infusion',
          img: 'photos/summoning/Cursed_Electric_Infusion.webp',
          description: 'Air resistance + 120%, Earth resistance -20%, Poison resistance -20%, skills: Electric Discharge, Closed Circuit',
          effect: '',
          actionPoints: 0,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Aerotheurge: 10 }
        },
        {
          name: 'Necrofire Infusion',
          img: 'photos/summoning/Necrofire_Infusion.webp',
          description: 'Fire resistance + 120%, Water resistance -20%, skills: Fireball, Epidemic of Fire',
          effect: '',
          actionPoints: 0,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Pyrokinetic: 10 }
        },
        {
          name: 'Acid Infusion',
          img: 'photos/summoning/Acid_Infusion.webp',
          description: 'Poison resistance + 120%, Air resistance -20%, skills: Poison Dart, Acid Spores',
          effect: '',
          actionPoints: 0,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Geomancer: 10 }
        },
        {
          name: 'Ice Infusion',
          img: 'photos/summoning/Ice_Infusion.webp',
          description: 'Water resistance + 120%, Fire resistance -20%, skills: Restoration, Steam Lance',
          effect: '',
          actionPoints: 0,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Hydrosophist: 10 }
        },
      ]
    }
  },
  {
    type: 'Warfare',
    img: 'photos/warfare/Warfare.png',
    level: {
      1: [
        {
          name: 'Battering Ram',
          img: 'photos/warfare/Battering_Ram.webp',
          description: 'Rush forward in a straight line to a point far away, hitting all enemies in your path and knocking them down if they do not have Physical Armour.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 1 }
        },
        {
          name: 'Battle Stomp',
          img: '/photos/warfare/Battle_Stomp.webp',
          description: 'Deal damage in column in front of you, knocking down enemies and removing surfaces in the process. ',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 1 }
        },
        {
          name: 'Bouncing Shield',
          img: 'photos/warfare/Bouncing_Shield.webp',
          description: 'Throw your shield in order to damage your enemy and their ally near them.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 1 }
        },
        {
          name: 'Crippling Blow',
          img: 'photos/warfare/Crippling_Blow.webp',
          description: 'Cripple the target with a sweeping blow, and all characters around it. Deals physical damage.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 1 }
        }
      ],
      4: [
        {
          name: 'Enrage',
          img: 'photos/warfare/Enrage.webp',
          description: ' Enrage target allied character is guaranteed to land critical hits with basic attacks and weapon skills, but is Silenced (Original Sin 2) silenced. Removes:, Taunted, Terrified, Charmed, Mad, Clear-Minded',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 2 }
        },
        {
          name: 'Provoke',
          img: 'photos/warfare/Provoke.webp',
          description: 'Taunt and tease your enemies to make them attack you.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 2 }
        },
        {
          name: 'Whirlwind',
          img: 'photos/warfare/Whirlwind.webp',
          description: 'Spin around in order to damage enemies around you.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 2 }
        }
      ],
      9: [
        {
          name: 'Blitz Attack',
          img: 'photos/warfare/Blitz_Attack.webp',
          description: 'Jump from one target to another, hitting up to 2 targets, dealing physical damage to each.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 2 }
        },
        {
          name: 'Deflective Barrier',
          img: 'photos/warfare/Deflective_Barrier.webp',
          description: 'Reflect projectiles aimed at you, back at their caster. Gives Physical armour',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 2 }
        },
        {
          name: 'Phoenix Dive',
          img: 'photos/warfare/Phoenix_Dive.webp',
          description: 'Leap through the air towards a target position, creating a fire surface upon landing.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 2 }
        },
        {
          name: 'Thick of the Fight',
          img: 'photos/warfare/Thick_of_the_Fight.webp',
          description: 'Gain a damage boost for every character near you.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 3 }
        }
      ],
      13: [
        {
          name: 'Onslaught',
          img: 'photos/warfare/Onslaught.webp',
          description: 'Attack your enemy 5 times in quick session.',
          effect: '',
          actionPoints: 4,
          sourcePoints: 2,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 3 }
        }
      ],
      16: [
        {
          name: 'Challenge',
          img: 'photos/warfare/Challenge.webp',
          description: 'Mark enemy target. If they die in the next 2 turns, you are healed and receive damage and armor bonuses. If target survives, their Vitality is restored to full and the caster takes damage.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 3 }
        },
        {
          name: 'Guardian Angel',
          img: 'photos/warfare/Guardian_Angel.webp',
          description: 'Allies in melee range redirect 50% of received damage to you.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 3 }
        },
        {
          name: 'Overpower',
          img: 'photos/warfare/Overpower.webp',
          description: 'Deal physical damage. If your physical armour is higher than your opponent\'s, destroy all of their physical armour. Can set Knocked Down. ',
          effect: '',
          actionPoints: 2,
          sourcePoints: 3,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 5 }
        }
      ]
    },
    craftable: {
      base: [
        {
          name: 'Breathing Bubble',
          img: 'photos/warfare/Breathing_Bubble.webp',
          description: 'Create a bubble of clean air around the caster\'s head, allowing them to ignore effects of cloud surfaces. Gives immunity to Suffocating.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 1, Aerotheurge: 1 }
        },
        {
          name: 'Cleanse Wounds',
          img: 'photos/warfare/Cleanse_Wounds.webp',
          description: 'Heal target and create a water puddle beneath them. Removes: Burning, Diseased, Decaying, Poisoned, Bleeding',
          effect: '',
          actionPoints: 2,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 1, Hydrosophist: 1 }
        },
        {
          name: 'Oily Carapace',
          img: 'photos/warfare/Oily_Carapace.webp',
          description: 'This skill absorbs any oil surfaces around the caster and converts it to Physical Armour.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 1, Geomancer: 1 }
        },
        {
          name: 'Sparking Swings',
          img: 'photos/warfare/Sparking_Swings.webp',
          description: 'Make your basic melee attacks shoot fiery projectiles on nearest enemy.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 0,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 1, Pyrokinetic: 1 }
        }
      ],
      source: [
        {
          name: 'Mass Breathing Bubble',
          img: 'photos/warfare/Mass_Breathing_Bubble.webp',
          description: 'Create a bubble of clear air around your and your allies heads, making you ignore cloud effects. Gives Immunity to Suffocating.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 2, Aerotheurge: 2 }
        },
        {
          name: 'Mass Cleanse Wounds',
          img: 'photos/warfare/Mass_Cleanse_Wounds.webp',
          description: 'Heal yourself and allies around creating a water puddle beneath them. Removes: Burning, Diseased, Decaying, Poisoned, Bleeding',
          effect: '',
          actionPoints: 1,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 2, Hydrosophist: 2 }
        },
        {
          name: 'Mass Oily Carapace',
          img: 'photos/warfare/Mass_Oily_Carapace.webp',
          description: 'Convert all oil surfaces around caster and their allies into Physical Armour.',
          effect: '',
          actionPoints: 2,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 2, Geomancer: 2 }
        },
        {
          name: 'Master of Sparks',
          img: 'photos/warfare/Master_of_Sparks.webp',
          description: 'Causes your target and their surrounding allies melee attacks to shoot a fiery projectile at nearest enemy.',
          effect: '',
          actionPoints: 1,
          sourcePoints: 1,
          'Resisted By': 'Physical Armour',
          Cooldown: '6 turns',
          Range: '2m',
          'Memory Slots': 1,
          requires: { Warfare: 2, Pyrokinetic: 2 }
        }
      ]
    }
  }
];

/*
let classes = [
    { type: 'Cleric', build: ['Restoration', 'Blood Sucker', 'Decaying Touch' ]},
    { type: 'Conjurer', build: ['Conjure Incarnate', 'Dimesional Bolt', 'Elemental Totem' ]},
    { type: 'Enchanter', build: ['Rain', 'Hail Strike', 'Electric Discharge' ]},
    { type: 'Witch', build: ['Chloroform', 'Raise Bloated Corpse', 'Mosquito Swarm' ]},
    { type: 'Wizard', build: ['Ignition', 'Searing Daggers', 'Fossil Strike' ]},
    { type: 'Metamorph', build: ['Bull Horns', 'Chicken Claw', 'Tentacle Lash' ]},
    { type: 'Ranger', build: ['Elemental Arrowheads', 'Ricochet', 'Peace of Mind' ]},
    { type: 'Rogue', build: ['Adrenaline', 'Backlash', 'Throwing Knife' ]},
    { type: 'Shadowblade', build: ['Backlash', 'Chameleon Cloak', 'Chicken Claw' ]},
    { type: 'Wayfarer', build: ['Elemental Arrowheads', 'Pin Down', 'Fossil Strike' ]},
    { type: 'Battlemage', build: ['Battering Ram', 'Blinding Radiance', 'Shocking Touch' ]},
    { type: 'Fighter', build: ['Battle Stomp', 'Bouncing Shield', 'Fortify' ]},
    { type: 'Inquisitor', build: ['Battering Ram', 'Blood Sucker', 'Mosquito Swarm' ]},
    { type: 'Knight', build: ['Battering Ram', 'Battle Stomp', 'Crippling Blow' ]}
]*/

const skillsContainer = document.getElementById('skillsContainer');

function createSkillButtons () {
  skillsContainer.innerHTML = '';

  skillsArray.forEach((skill) => {
    const skillGroup = document.createElement('div');
    skillGroup.className = 'skill-group';

    const skillButtonLabel = document.createElement('span');
    skillButtonLabel.textContent = skill.type.toUpperCase();

    const skillButton = document.createElement('button');
    skillButton.className = 'skill-button';
    skillButton.ariaLabel = skill.type;
    skillButton.style.backgroundImage = `url(${skill.img})`;
    skillButton.style.backgroundSize = 'cover';
    skillButton.style.backgroundPosition = 'center';

    skillButton.addEventListener('click', () => {
      skillButton.classList.toggle('active');
      skillList.classList.toggle('active');
    });

    skillsContainer.appendChild(skillButton);

    const skillList = document.createElement('div');
    skillList.className = 'skill-list';

    Object.values(skill.level).forEach((level) =>{
      level.forEach((sublevel) => {
        const subSkillButton = document.createElement('button');
        subSkillButton.className = 'subskill-button';
        subSkillButton.ariaLabel = sublevel.name;
        subSkillButton.style.backgroundImage = `url(${sublevel.img})`;
        subSkillButton.style.backgroundSize = 'cover';
        subSkillButton.style.backgroundPosition = 'center';
        subSkillButton.title = sublevel.description;
        subSkillButton.dataset.actionPoints = sublevel.actionPoints;
        subSkillButton.dataset.sourcePoints = sublevel.sourcePoints;
        subSkillButton.dataset.required = JSON.stringify(sublevel.required || {});

        subSkillButton.addEventListener('click', () => {
          subSkillButton.classList.toggle('active');
        });

        skillList.appendChild(subSkillButton);
      });
    });
    skillGroup.appendChild(skillButton);
    skillGroup.appendChild(skillList);
    skillsContainer.appendChild(skillGroup);
  });
}

createSkillButtons();


document.querySelectorAll('.subskill-button').forEach((button) => {
  button.addEventListener('mouseenter', showTooltip);
  button.addEventListener('mouseleave', hideTooltip);
});

function showTooltip (event) {
  const subSkillButton = event.target;
  const subSkill = {
    name: subSkillButton.ariaLabel,
    img: subSkillButton.style.backgroundImage.slice(5, -2),
    description: subSkillButton.title,
    actionPoints: subSkillButton.dataset.actionPoints,
    sourcePoints: subSkillButton.dataset.sourcePoints,
    required: JSON.parse(subSkillButton.dataset.required || "{}")
  };

  const tooltipContent = `
    <h2><img src="${subSkill.img}" alt="${subSkill.name}">${subSkill.name}</h2>

    <p>Description: ${subSkill.description}</p>
    <p>Action Points: ${subSkill.actionPoints}</p>
    <p>Source Points: ${subSkill.sourcePoints}</p>
    <p>Required: ${JSON.stringify(subSkill.required)}</p>
  `;

  let tooltip = document.querySelector('.tooltip');
  if (!tooltip) {
    tooltip = document.createElement('aside');
    tooltip.classList.add('tooltip');
    tooltip.classList.add('t-aside');
    document.body.appendChild(tooltip);
  }

  tooltip.innerHTML = tooltipContent;
  tooltip.style.display = 'block';
}

function hideTooltip () {
  const tooltip = document.querySelector('.tooltip');
  if (tooltip) {
    tooltip.remove();
  }
}

console.log(sublevel.img);
console.log(subSkillButton.dataset.actionPoints);
console.log(subSkillButton.dataset.sourcePoints);
console.log(subSkillButton.dataset.required);