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
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        },
        {
          name: 'Electric Discharge',
          img: '/photos/aerotheurge/Electric_Discharge.webp',
          description: 'Deal air damage and set Shocked for two turns on enemies without Magic Armour',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        },
        {
          name: 'Favorable Wind',
          img: 'photos/aerotheurge/Favourable_Wind.webp',
          description: 'Sets Favorable Wind Aura on the caster and allies within close proximity for four turns, increasing their movement speed by 1.5m for 4 turns.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        },
        {
          name: 'Shocking Touch',
          img: 'photos/aerotheurge/Shocking_Touch.webp',
          description: 'Touch your enemy to deal them air damage and set Stunned them if they dont have Magic Armour.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        }
      ],
      4: [
        {
          name: 'Dazing Bolt',
          img: 'photos/aerotheurge/Dazing_Bolt.webp',
          description: 'Shoot an electrical bolt from the sky dealing air damage to characters and items in the area, and setting Shocked status.',
          actionPoints: 3,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Teleportation',
          img: 'photos/aerotheurge/Teleportation.webp',
          description: 'Move objects (inanimate or otherwise) from one location to another. Deals physical damage upon impact.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Uncanny Evasion',
          img: 'photos/aerotheurge/Uncanny_Evasion.webp',
          description: 'Increases dodging by 90% and movement by 20%.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        }
      ],
      9: [
        {
          name: 'Chain Lightning',
          img: 'photos/aerotheurge/Chain_Lightning.webp',
          description: 'Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Aerotheurge: 3 }
        },
        {
          name: 'Nether Swap',
          img: 'photos/aerotheurge/Nether_Swap.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Pressure Spike',
          img: 'photos/aerotheurge/Pressure_Spike.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        }
      ],
      13: [
        {
          name: 'Closed Circuit',
          img: 'photos/aerotheurge/Closed_Circuit.webp',
          description: 'Deal air damage around you and created cursed static clouds at the edge of the area of effect.',
          actionPoints: 2,
          sourcePoints: 2,
          required: { Aerotheurge: 3 }
        }
      ],
      16: [
        {
          name: 'Super Conductor',
          img: 'photos/aerotheurge/Superconductor.webp',
          description: 'Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.',
          actionPoints: 2,
          sourcePoints: 2,
          required: { Aerotheurge: 3 }
        },
        {
          name: 'Thunderstorm',
          img: 'photos/aerotheurge/Thunderstorm.webp',
          description: 'Deal air damage and set Shocked for two turns on enemies without Magic Armour.',
          actionPoints: 4,
          sourcePoints: 3,
          required: { Aerotheurge: 5 }
        },
        {
          name: 'Pressure Spike',
          img: 'photos/aerotheurge/Pressure_Spike.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 2,
          sourcePoints: 2,
          required: { Aerotheurge: 3 }
        }
      ]
    },
    other: {
      craftable: [
        {
          name: 'Breathing Bubble',
          img: 'photos/aerotheurge/Breathing_Bubble.webp',
          description: 'Create a bubble of clean air around the caster\'s head, allowing them to ignore effects of cloud surfaces. Gives immunity to Suffocating.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 1, Warfare: 3 }
        },
        {
          name: 'Electric Infusion',
          img: 'photos/aerotheurge/Electric_Infusion.webp',
          description: 'Infuse your Incarnate with air element. Gives Incarnate Electric Discharge skill.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 1, Summoning: 1 }
        },
        {
          name: 'Erratic Wisp',
          img: 'photos/aerotheurge/Erratic_Wisp.webp',
          description: 'Cause target character to teleport in a random direction each time they are damaged with physical attack.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 1, Huntsman: 1 }
        },
        {
          name: 'Smoke Cover',
          img: 'photos/aerotheurge/Smoke_Cover.webp',
          description: 'Create a smoke cloud blocking vision of all characters in it.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 1, Scoundrel: 1 }
        },
        {
          name: 'Vaccuum Touch',
          img: 'photos/aerotheurge/Vaccuum_Touch.webp',
          description: 'Deal air damage and sets Suffocating (Original Sin 2) Suffocating and Silence status effects.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 1, Necromancer: 1 }
        },
        {
          name: 'Vaporize',
          img: 'photos/aerotheurge/Vaporize.webp',
          description: 'Turn liquid surfaces into clouds. Removes Petrified and Frozen from target. ',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 1, Polymorph: 1 }
        }
      ],
      source: [
        {
          name: 'Blessed Smoke Cloud',
          img: 'photos/aerotheurge/Blessed_Smoke_Cloud.webp',
          description: 'Conjures a cloud of thick blessed smoke that makes characters Invisible. Removes Silenced status.',
          actionPoints: 1,
          sourcePoints: 2,
          required: { Aerotheurge: 2, Scoundrel: 2 }
        },
        {
          name: 'Cursed Electric Infusion',
          img: 'photos/aerotheurge/Cursed_Electric_Infusion.webp',
          description: 'Infuse your Incarnate with cursed electricity. Gives Incarnate Electric Discharge and Closed Circuit spells.',
          actionPoints: 1,
          sourcePoints: 2,
          required: { Aerotheurge: 2, Summoning: 2 }
        },
        {
          name: 'Evasive Aura',
          img: 'photos/aerotheurge/Evasive_Aura.webp',
          description: 'Increase dodging ability of yourself and all allies by 90%. Increases movement by 1',
          actionPoints: 2,
          sourcePoints: 1,
          required: { Aerotheurge: 2, Huntsman: 2 }
        },
        {
          name: 'Jellyfish Skin',
          img: 'photos/aerotheurge/Jellyfish_Skin.webp',
          description: 'You gain immunity to electricity, but lowered resistance to poison and earth damage. Bleed electrified water.',
          actionPoints: 1,
          sourcePoints: 1,
          required: { Aerotheurge: 2, Polymorph: 2 }
        },
        {
          name: 'Mass Breathing Bubble',
          img: 'photos/aerotheurge/Mass_Breathing_Bubble.webp',
          description: 'Create a bubble of clear air around your and your allies heads, making you ignore cloud effects. Gives Immunity to Suffocating.',
          actionPoints: 1,
          sourcePoints: 1,
          required: { Aerotheurge: 2, Warfare: 2 }
        },
        {
          name: 'Vacuum Aura',
          img: 'photos/aerotheurge/Vacuum_Aura.webp',
          description: 'Vacuum aura deals air damage to enemies in the area around caster. Enemies will get Silenced and Suffocating if they dont have Magic Armour.',
          actionPoints: 2,
          sourcePoints: 1,
          required: { Aerotheurge: 2, Necromancer: 2 }
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
          actionPoints: 1,
          sourcePoints: 0,
          required: { Geomancer: 1 }
        },
        {
          name: 'Fortify',
          img: 'photos/geomancer/Fortify.webp',
          description: 'Increases character\'s Physical Armour for 3 turns. Fortified Characters cannot be forcefully teleported.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Geomancer: 1 }
        },
        {
          name: 'Fossil Strike',
          img: 'photos/geomancer/Fossil_Strike.webp',
          description: 'Throw a giant rock filled with sticky oil that deals earth damage and creates an oil surface within a 2 meter radius.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Geomancer: 1 }
        },
        {
          name: 'Poison Dart',
          img: 'photos/geomancer/Contamination.webp',
          description: 'Shoot poison at an enemy which will deal poison damage and create poison surface beneath them.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Geomancer: 1 }
        }
      ],
      4: [
        {
          name: 'Impalement',
          img: 'photos/geomancer/Impalement.webp',
          description: 'Rock spikes strike all character within a 4.0m radius area crippling them and dealing earth damage. Creates an oil surface.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Geomancer: 2 }
        },
        {
          name: 'Mend Metal',
          img: 'photos/geomancer/Mend_Metal.webp',
          description: 'Allies near to the caster slowly regenerate Physical Armour.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Geomancer: 2 }
        },
        {
          name: 'Worm Tremor',
          img: 'photos/geomancer/Worm_Tremor.webp',
          description: 'Deals earth damage to each character in the area. Affected characters cannot move or teleport, and they receive poison damage each turn if they dont have Magic armour.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Geomancer: 2 }
        }
      ],
      9: [
        {
          name: 'Earthquake',
          img: 'photos/geomancer/Earthquake.webp',
          description: 'Deals earth damage and knocks down enemy characters and items around the caster. Creates eight oil surfaces within the area.',
          actionPoints: 3,
          sourcePoints: 0,
          required: { Geomancer: 2 }
        },
        {
          name: 'Poison Wave',
          img: 'photos/geomancer/Poison_Wave.webp',
          description: 'Poison erupts from the caster in a circular wave, dealing poison damage and forming poison clouds. Gives immunity to poison and earth damage for one turn.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Geomancer: 2 }
        },
        {
          name: 'Reactive Armour',
          img: 'photos/geomancer/Reactive_Armour.webp',
          description: 'Deals physical damage based on the casters current Physical Armour, in a wave of metal spikes to everyone in the area (including yourself).',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Geomancer: 2 }
        },
        {
          name: 'Summon Hungry Flower',
          img: 'photos/geomancer/Summon_Hungry_Flower.webp',
          description: 'Summons a mobile plant having Acid Spore, Poison Wave and All In skills.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Geomancer: 3 }
        }
      ],
      13: [
        {
          name: 'Acid Spores',
          img: 'photos/geomancer/Acid_Spores.webp',
          description: 'Vines sprout from the ground to block the path in a target area, emitting poison clouds around them.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Geomancer: 3 }
        }
      ],
      16: [
        {
          name: 'Living Wall',
          img: 'photos/geomancer/Living_Wall.webp',
          description: 'Vines sprout from the ground to block the path in a target area, emitting poison clouds around them.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Geomancer: 3 }
        },
        {
          name: 'Pyroclastic Eruption',
          img: 'photos/geomancer/Pyroclastic_Eruption.webp',
          description: 'Oil-filled rocks erupt from the caster at all enemies in the area. On impact, they create oil surfaces and deal earth damage.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Geomancer: 5 }
        },
        {
          name: 'Siphon Poison',
          img: 'photos/geomancer/Siphon_Poison.webp',
          description: 'Removes poison surfaces and clouds. Gain poison damage bonus to weapon attacks and weapon-based skills depending on size of the cleared area.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Geomancer: 3 }
        }
      ]
    },
    other: {
      craftable: [
        {
          name: 'Corrosive Touch',
          img: 'photos/geomancer/Corrosive_Touch.webp',
          description: 'Corrosive Touch deals physical armour damage and sets Acid on target.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Geomancer: 1, Necromancer: 1 }
        },
        {
          name: 'Oily Carapace',
          img: 'photos/geomancer/Oily_Carapace.webp',
          description: 'This skill absorbs any oil surfaces around the caster and converts it to Physical Armour.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Geomancer: 1, Warfare: 1 }
        },
        {
          name: 'Poison Infusion',
          img: 'photos/geomancer/Poison_Infusion.webp',
          description: 'Infuse your Incarnate with poison.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Geomancer: 1, Summoning: 1 }
        },
        {
          name: 'Throw Dust',
          img: 'photos/geomancer/Throw_Dust.webp',
          description: 'Throw dust at a character, blinding them and dealing earth damage. Clears surfaces and clouds in the area. ',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Geomancer: 1, Huntsman: 1 }
        },
        {
          name: 'Turn to Oil',
          img: 'photos/geomancer/Turn_to_Oil.webp',
          description: 'Turns water and blood surfaces into oil. Removes Stun and Shocked from characters.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Geomancer: 1, Polymorph: 1 }
        },
        {
          name: 'Venom Coating',
          img: 'photos/geomancer/Venom_Coating.webp',
          description: 'Applies poison damage on equipped weapons and skills.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Geomancer: 1, Scoundrel: 1 }
        }
      ],
      source: [
        {
          name: 'Acid Infusion',
          img: 'photos/geomancer/Acid_Infusion.webp',
          description: 'Changes Incarnate\'s element to acid, unlocking Poison Dart and Acid Spores.',
          actionPoints: 1,
          sourcePoints: 2,
          required: { Geomancer: 3, Summoning: 3 }
        },
        {
          name: 'Corrosive Spray',
          img: 'photos/geomancer/Corrosive_Spray.webp',
          description: 'Corrosive spray deals physical armour damage and sets Acid and Atrophy on targets in a cone.',
          actionPoints: 2,
          sourcePoints: 1,
          required: { Geomancer: 2, Necromancer: 2 }
        },
        {
          name: 'Dust Blast',
          img: 'photos/geomancer/Dust_Blast.webp',
          description: 'Dust blast throws dust at all enemies in range setting Blinded and dealing earth damage.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Geomancer: 2, Huntsman: 2 }
        },
        {
          name: 'Mass Oily Carapace',
          img: 'photos/geomancer/Mass_Oily_Carapace.webp',
          description: 'Convert all oil surfaces around caster and their allies into Physical Armour.',
          actionPoints: 1,
          sourcePoints: 2,
          required: { Geomancer: 2, Warfare: 2 }
        },
        {
          name: 'Poisonous Skin',
          img: 'photos/geomancer/Poisonous_Skin.webp',
          description: 'You get immunity to poison and earth, but lowered resistance to air. You bleed poison.',
          actionPoints: 2,
          sourcePoints: 1,
          required: { Geomancer: 2, Polymorph: 2 }
        },
        {
          name: 'Venomous Aura',
          img: 'photos/geomancer/Venomous_Aura.webp',
          description: 'Caster\'s and their allies damage will be changed to poison element.',
          actionPoints: 2,
          sourcePoints: 1,
          required: { Geomancer: 2, Scoundrel: 2 }
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
          actionPoints: 1,
          sourcePoints: 0,
          required: { Huntsman: 1 }
        },
        {
          name: 'First Aid',
          img: '/photos/huntsman/First_Aid.webp',
          description: 'Heal your target. Removes: Crippled, Knocked Down, Blinded, Silenced, Bleeding, Burning, Poisoned, Diseased',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Huntsman: 1 }
        },
        {
          name: 'Pin Down',
          img: 'photos/huntsman/Pin_Down.webp',
          description: 'Shoot an arrow that will Crippled (Original Sin 2) immobilise and damage your enemy.',
          actionPoints: 3,
          sourcePoints: 0,
          required: { Huntsman: 1 }
        },
        {
          name: 'Ricochet',
          img: 'photos/huntsman/Ricochet.webp',
          description: 'Fire a normal arrow that harms multiple foes at once.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Huntsman: 1 }
        }
      ],
      4: [
        {
          name: 'Barrage',
          img: 'photos/huntsman/Barrage.webp',
          description: 'Fire three arrows at three targets of your choice, each dealing physical damage.',
          actionPoints: 3,
          sourcePoints: 0,
          required: { Huntsman: 2 }
        },
        {
          name: 'Sky Shot',
          img: 'photos/huntsman/Sky_Shot.webp',
          description: 'Leap into the air before shooting, gaining damage bonus for your superior height. Deals physical damage.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Huntsman: 2 }
        },
        {
          name: 'Tactical Retreat',
          img: 'photos/huntsman/Tactical_Retreat.webp',
          description: 'Teleport yourself away from danger. Applies Hasted status effect.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Huntsman: 2 }
        }
      ],
      9: [
        {
          name: 'Arrow Spray',
          img: 'photos/huntsman/Arrow_Spray.webp',
          description: 'Fire 15 arrows in a 60 degree arc.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Huntsman: 3 }
        },
        {
          name: 'Ballistic Shot',
          img: 'photos/huntsman/Ballistic_Shot.webp',
          description: 'Fire an arrow whose damage will increase with distance between caster and their target.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Huntsman: 2 }
        },
        {
          name: 'Marksman\'s Fang',
          img: 'photos/huntsman/Marksmans_Fang.webp',
          description: 'Fire an arrow that goes straight through enemies in straight line, ignoring armour, and dealing piercing damage to every enemy in range.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Huntsman: 2 }
        },
        {
          name: 'Reactive Shot',
          img: 'photos/huntsman/Reactive_Shot.webp',
          description: 'Target a circular area. Until your next turn, you will reflexively shoot at the first three enemies moving within this area.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Huntsman: 2 }
        }
      ],
      13: [
        {
          name: 'Farsight',
          img: 'photos/huntsman/Farsight.webp',
          description: 'Increases the range of a target character\'s ranged attacks and skills by 3m.',
          actionPoints: 1,
          sourcePoints: 1,
          required: { Huntsman: 3 }
        }
      ],
      16: [
        {
          name: 'Arrow Storm',
          img: 'photos/huntsman/Arrow_Storm.webp',
          description: '16 Arrows fall from the sky in the target area, each dealing physical damage.',
          actionPoints: 3,
          sourcePoints: 3,
          required: { Huntsman: 5 }
        },
        {
          name: 'Assasinate',
          img: 'photos/huntsman/Assasinate.webp',
          description: 'Shoot at your target with great aim. Damage is increased by 50 % if caster is sneaking.',
          actionPoints: 3,
          sourcePoints: 0,
          required: { Huntsman: 3 }
        },
        {
          name: 'Glitter Dust',
          img: 'photos/huntsman/Glitter_Dust.webp',
          description: 'Mark your target to reduce their dodging ability by 100 %.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Huntsman: 3 }
        }
      ]
    },
    other: {
      craftable: [
        {
          name: 'Erratic Wisp',
          img: 'photos/huntsman/Erratic_Wisp.webp',
          description: 'Cause target character to teleport in a random direction each time they are damaged with physical attack.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Huntsman: 1, Aerotheurge: 1 }
        },
        {
          name: 'Throw Dust',
          img: 'photos/huntsman/Throw_Dust.webp',
          description: 'Throw dust at a character, blinding them and dealing earth damage. Clears surfaces and clouds in the area.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Huntsman: 1, Geomancer: 1 }
        },
        {
          name: 'Cryotherapy',
          img: 'photos/huntsman/Mass_Cryotherapy.webp',
          description: 'Consume Frozen surfaces around yourself and convert it to Magic Armour.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Huntsman: 1, Hydrosophist: 1 }
        },
        {
          name: 'Throw Explosive Trap',
          img: 'photos/huntsman/Throw_Explosive_Trap.webp',
          description: 'Throw an explosive trap at target location. Trap takes 1 turn to activate. When active, the trap will explode when a character approaches it.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Huntsman: 1, Pyrokinetic: 1 }
        }
      ],
      source: [
        {
          name: 'Evasive Aura',
          img: 'photos/huntsman/Evasive_Aura.webp',
          description: 'Increase dodging ability of yourself and all allies by 90 %. Increases movement by 1',
          actionPoints: 2,
          sourcePoints: 1,
          required: { Huntsman: 2, Aerotheurge: 2 }
        },
        {
          name: 'Dust Blast',
          img: 'photos/huntsman/Dust_Blast.webp',
          description: 'Dust blast throws dust at all enemies in range setting Blinded and dealing earth damage. ',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Huntsman: 2, Geomancer: 2 }
        },
        {
          name: 'Mass Cryotherapy',
          img: 'photos/huntsman/Mass_Cryotherapy.webp',
          description: 'Each ally consumes frozen surfaces around them, converting the frozen surfaces to Magic Armour.',
          actionPoints: 2,
          sourcePoints: 1,
          required: { Huntsman: 2, Hydrosophist: 2 }
        },
        {
          name: 'Deploy Mass Traps',
          img: 'photos/huntsman/Deploy_Mass_Traps.webp',
          description: 'Each ally consumes frozen surfaces around them, converting the frozen surfaces to Magic Armour.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Huntsman: 2, Pyrokinetic: 2 }
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
          actionPoints: 1,
          sourcePoints: 0,
          required: { Hydrosophist: 1 }
        },
        {
          name: 'Hail Strike',
          img: '/photos/hydrosophist/Hail_Strike.webp',
          description: 'Hail Strike creates three beams of ice that can inflict Frozen and Chilled status effects.',
          actionPoints: 3,
          sourcePoints: 0,
          required: { Hydrosophist: 1 }
        },
        {
          name: 'Rain',
          img: 'photos/hydrosophist/Rain.webp',
          description: 'Summon rain at target area, creating water surfaces. Removes: Invisible status effect.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Hydrosophist: 1 }
        },
        {
          name: 'Restoration',
          img: 'photos/hydrosophist/Restoration.webp',
          description: 'Heal target over time. Removes Poisoned and Bleeding. ',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Hydrosophist: 1 }
        }
      ],
      4: [
        {
          name: 'Ice Fan',
          img: 'photos/hydrosophist/Ice_Fan.webp',
          description: 'Ice fan spell is an offensive spell that allows its caster to shoot three projectiles at their enemies.',
          actionPoints: 3,
          sourcePoints: 0,
          required: { Hydrosophist: 2 }
        },
        {
          name: 'Soothing Cold',
          img: 'photos/hydrosophist/Soothing_Cold.webp',
          description: 'Regenerate Magic Armour Icon (Original Sin 2) Magic Armour for all allies around the caster.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Hydrosophist: 2 }
        },
        {
          name: 'Winter Blast',
          img: 'photos/hydrosophist/Winter_Blast.webp',
          description: 'Winter blast deals water damage to its target and sets Chilled status for 2 turns on characters in the area.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Hydrosophist: 2 }
        }
      ],
      9: [
        {
          name: 'Arcane Stitch',
          img: 'photos/hydrosophist/Arcane_Stitch.webp',
          description: 'Fully restore target character\'s Magic Armour. Removes: Burning, Necrofirere, Poisonedd, Stunned, Frozen, Terrified, Silenced, Taunted, Suffocatingting, Maddening Song, Mad, Petrifieded',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Hydrosophist: 3 }
        },
        {
          name: 'Cryogenic Stasis',
          img: 'photos/hydrosophist/Cryogenic_Stasis.webp',
          description: 'Cryogenic stasis makes the target incapacitated under status effect Permafrost. However while unable to move or act they become immune to all damage and heal over time.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Hydrosophist: 2 }
        },
        {
          name: 'Global Cooling',
          img: 'photos/hydrosophist/Global_Cooling.webp',
          description: 'Set Chilled (Original Sin 2) Chilled on enemies around you and deal water damage. Freeze all susceptible surfaces.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Hydrosophist: 2 }
        },
        {
          name: 'Healing Ritual',
          img: 'photos/hydrosophist/Healing_Ritual.webp',
          description: 'Shoots a bolt of healing energy that will jump to nearby allies.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Hydrosophist: 2 }
        }
      ],
      13: [
        {
          name: 'Steam Lance',
          img: 'photos/hydrosophist/Steam_Lance.webp',
          description: 'Fully restore target character\'s Magic Armour. Removes: Burning, Necrofirere, Poisonedd, Stunned, Frozen, Terrified, Silenced, Taunted, Suffocatingting, Maddening Song, Mad, Petrifieded',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Hydrosophist: 3 }
        }
      ],
      16: [
        {
          name: 'Deep Freeze',
          img: 'photos/hydrosophist/Deep_Freeze.webp',
          description: 'Fully restore target character\'s Magic Armour. Removes: Burning, Necrofirere, Poisonedd, Stunned, Frozen, Terrified, Silenced, Taunted, Suffocatingting, Maddening Song, Mad, Petrifieded',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Hydrosophist: 3 }
        },
        {
          name: 'Hail Storm',
          img: 'photos/hydrosophist/Hail_Storm.webp',
          description: 'Cryogenic stasis makes the target incapacitated under status effect Permafrost. However while unable to move or act they become immune to all damage and heal over time.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Hydrosophist: 2 }
        },
        {
          name: 'Ice Breaker',
          img: 'photos/hydrosophist/Ice_Breaker.webp',
          description: 'Set Chilled (Original Sin 2) Chilled on enemies around you and deal water damage. Freeze all susceptible surfaces.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Hydrosophist: 2 }
        }
      ]
    },
    other: {
      craftable: [
        {
          name: 'Nether Swap',
          img: 'photos/hydrosophist/Nether_Swap.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Hydrosophist: 2 }
        },
        {
          name: 'Pressure Spike',
          img: 'photos/hydrosophist/Pressure_Spike.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Hydrosophist: 2 }
        }
      ],
      source: [
        {
          name: 'Nether Swap',
          img: 'photos/hydrosophist/Nether_Swap.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Hydrosophist: 2 }
        },
        {
          name: 'Pressure Spike',
          img: 'photos/hydrosophist/Pressure_Spike.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Hydrosophist: 2 }
        }
      ]
    }
  },
  {
    type: 'Necromancer', /* Descriptions need updated from here as well as 'other:' */
    img: 'photos/necromancer/Necromancer.png',
    level: {
      1: [
        {
          name: 'Blood Sucker',
          img: 'photos/necromancer/Blood_Sucker.webp',
          description: 'Ice forms a defensive barrier around the target, giving them Magic Shell status effect which increases Magic Armour. Removes: Burning, Poisoned, Stunned, Frozen, Suffocating, Petrified',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Necromancer: 1 }
        },
        {
          name: 'Decaying Touch',
          img: '/photos/necromancer/Decaying_Touch.webp',
          description: 'Deal air damage and set Shocked for two turns on enemies without Magic Armour',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Necromancer: 1 }
        },
        {
          name: 'Mosquito Swarm',
          img: 'photos/necromancer/Mosquito_Swarm.webp',
          description: 'Sets Favorable Wind Aura on the caster and allies within close proximity for four turns, increasing their movement speed by 1.5m for 4 turns.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Necromancer: 1 }
        },
        {
          name: 'Raise Bloated Corpse',
          img: 'photos/necromancer/Raise_Bloated_Corpse.webp',
          description: 'Touch your enemy to deal them air damage and set Stunned them if they dont have Magic Armour.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Necromancer: 1 }
        }
      ],
      4: [
        {
          name: 'Death Wish',
          img: 'photos/necromancer/Death_Wish.webp',
          description: 'Shoot an electrical bolt from the sky dealing air damage to characters and items in the area, and setting Shocked status.',
          actionPoints: 3,
          sourcePoints: 0,
          required: { Necromancer: 2 }
        },
        {
          name: 'Infect',
          img: 'photos/necromancer/Infect.webp',
          description: 'Move objects (inanimate or otherwise) from one location to another. Deals physical damage upon impact.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Necromancer: 2 }
        },
        {
          name: 'Shackles of Pain',
          img: 'photos/necromancer/Shackles_of_Pain.webp',
          description: 'Increases dodging by 90% and movement by 20%.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Necromancer: 2 }
        }
      ],
      9: [
        {
          name: 'Black Shroud',
          img: 'photos/necromancer/Black_Shroud.webp',
          description: 'Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Necromancer: 3 }
        },
        {
          name: 'Bone Cage',
          img: 'photos/necromancer/Bone_Cage.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Necromancer: 2 }
        },
        {
          name: 'Living on the Edge',
          img: 'photos/necromancer/Living_on_the_Edge.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Necromancer: 2 }
        },
        {
          name: 'Raise Bone Widow',
          img: 'photos/necromancer/Raise_Bone_Widow.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Necromancer: 2 }
        }
      ],
      13: [
        {
          name: 'Grasp of the Starved',
          img: 'photos/necromancer/Grasp_of_the_Starved.webp',
          description: 'Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Necromancer: 3 }
        }
      ],
      16: [
        {
          name: 'Last Rites',
          img: 'photos/necromancer/Last_Rites.webp',
          description: 'Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Necromancer: 3 }
        },
        {
          name: 'Silencing Stare',
          img: 'photos/necromancer/Silencing_Stare.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Necromancer: 2 }
        },
        {
          name: 'Totems of the Necromancer',
          img: 'photos/necromancer/Totems_of_the_Necromancer.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Necromancer: 2 }
        }
      ]
    },
    other: {
      craftable: [
        {
          name: 'Nether Swap',
          img: 'photos/necromancer/Nether_Swap.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Necromancer: 2 }
        },
        {
          name: 'Pressure Spike',
          img: 'photos/necromancer/Pressure_Spike.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Necromancer: 2 }
        }
      ],
      source: [
        {
          name: 'Nether Swap',
          img: 'photos/necromancer/Nether_Swap.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Necromancer: 2 }
        },
        {
          name: 'Pressure Spike',
          img: 'photos/necromancer/Pressure_Spike.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Necromancer: 2 }
        }
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
          description: 'Ice forms a defensive barrier around the target, giving them Magic Shell status effect which increases Magic Armour. Removes: Burning, Poisoned, Stunned, Frozen, Suffocating, Petrified',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        },
        {
          name: 'Chicken Claw',
          img: '/photos/polymorph/Chicken_Claw.webp',
          description: 'Deal air damage and set Shocked for two turns on enemies without Magic Armour',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        },
        {
          name: 'Tentacle Lash',
          img: 'photos/polymorph/Tentacle_Lash.webp',
          description: 'Sets Favorable Wind Aura on the caster and allies within close proximity for four turns, increasing their movement speed by 1.5m for 4 turns.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        },
        {
          name: 'Chameleon Cloak',
          img: 'photos/polymorph/Chameleon_Cloak.webp',
          description: 'Touch your enemy to deal them air damage and set Stunned them if they dont have Magic Armour.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        }
      ],
      4: [
        {
          name: 'Heart of Steel',
          img: 'photos/polymorph/Heart_of_Steel.webp',
          description: 'Shoot an electrical bolt from the sky dealing air damage to characters and items in the area, and setting Shocked status.',
          actionPoints: 3,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Medusa Head',
          img: 'photos/polymorph/Medusa_Head.webp',
          description: 'Move objects (inanimate or otherwise) from one location to another. Deals physical damage upon impact.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Spread Your Wings',
          img: 'photos/polymorph/Spread_Your_Wings.webp',
          description: 'Increases dodging by 90% and movement by 20%.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        }
      ],
      9: [
        {
          name: 'Spider Legs',
          img: 'photos/polymorph/Spider_Legs.webp',
          description: 'Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Aerotheurge: 3 }
        },
        {
          name: 'Terrain Transmutation',
          img: 'photos/polymorph/Terrain_Transmutation.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Summon Oily Blob',
          img: 'photos/polymorph/Summon_Oily_Blob.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Skin Graft',
          img: 'photos/polymorph/Skin_Graft.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        }
      ],
      13: [
        {
          name: 'Forced Exchange',
          img: 'photos/polymorph/Forced_Exchange.webp',
          description: 'Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Aerotheurge: 3 }
        }
      ],
      16: [
        {
          name: 'Equalise',
          img: 'photos/polymorph/Equalise.webp',
          description: 'Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Aerotheurge: 3 }
        },
        {
          name: 'Flay Skin',
          img: 'photos/polymorph/Flay_Skin.webp',
          description: 'Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Aerotheurge: 3 }
        },
        {
          name: 'Apotheosis',
          img: 'photos/polymorph/Apotheosis.webp',
          description: 'Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Aerotheurge: 3 }
        }
      ]
    },
    other: {
      craftable: [
        {
          name: 'Nether Swap',
          img: 'photos/polymorph/Nether_Swap.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Pressure Spike',
          img: 'photos/polymorph/Pressure_Spike.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        }
      ],
      source: [
        {
          name: 'Nether Swap',
          img: 'photos/polymorph/Nether_Swap.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Pressure Spike',
          img: 'photos/polymorph/Pressure_Spike.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
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
          description: 'Ice forms a defensive barrier around the target, giving them Magic Shell status effect which increases Magic Armour. Removes: Burning, Poisoned, Stunned, Frozen, Suffocating, Petrified',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        },
        {
          name: 'Ignition',
          img: '/photos/pyrokinetic/Ignition.webp',
          description: 'Deal air damage and set Shocked for two turns on enemies without Magic Armour',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        },
        {
          name: 'Peace of Mind',
          img: 'photos/pyrokinetic/Peace_of_Mind.webp',
          description: 'Sets Favorable Wind Aura on the caster and allies within close proximity for four turns, increasing their movement speed by 1.5m for 4 turns.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        },
        {
          name: 'Searing Daggers',
          img: 'photos/pyrokinetic/Searing_Daggers.webp',
          description: 'Touch your enemy to deal them air damage and set Stunned them if they dont have Magic Armour.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        }
      ],
      4: [
        {
          name: 'Fireball',
          img: 'photos/pyrokinetic/Fireball.webp',
          description: 'Shoot an electrical bolt from the sky dealing air damage to characters and items in the area, and setting Shocked status.',
          actionPoints: 3,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Spontaneous Combustion',
          img: 'photos/pyrokinetic/Spontaneous_Combustion.webp',
          description: 'Move objects (inanimate or otherwise) from one location to another. Deals physical damage upon impact.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Supernova',
          img: 'photos/pyrokinetic/Supernova.webp',
          description: 'Increases dodging by 90% and movement by 20%.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        }
      ],
      9: [
        {
          name: 'Fire Whip',
          img: 'photos/pyrokinetic/Fire_Whip.webp',
          description: 'Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Aerotheurge: 3 }
        },
        {
          name: 'Flaming Tongues',
          img: 'photos/pyrokinetic/Flaming_Tongues.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Laser Ray',
          img: 'photos/pyrokinetic/Laser_Ray.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Summon Fire Slug',
          img: 'photos/pyrokinetic/Summon_Fire_Slug.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        }
      ],
      13: [
        {
          name: 'Epidemic of Fire',
          img: 'photos/pyrokinetic/Epidemic_of_Fire.webp',
          description: 'Ice forms a defensive barrier around the target, giving them Magic Shell status effect which increases Magic Armour. Removes: Burning, Poisoned, Stunned, Frozen, Suffocating, Petrified',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        }
      ],
      16: [
        {
          name: 'Firebrand',
          img: 'photos/pyrokinetic/Firebrand.webp',
          description: 'Ice forms a defensive barrier around the target, giving them Magic Shell status effect which increases Magic Armour. Removes: Burning, Poisoned, Stunned, Frozen, Suffocating, Petrified',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        },
        {
          name: 'Flaming Crescendo',
          img: 'photos/pyrokinetic/Flaming_Crescendo.webp',
          description: 'Ice forms a defensive barrier around the target, giving them Magic Shell status effect which increases Magic Armour. Removes: Burning, Poisoned, Stunned, Frozen, Suffocating, Petrified',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        },
        {
          name: 'Meteor Shower',
          img: 'photos/pyrokinetic/Meteor_Shower.webp',
          description: 'Ice forms a defensive barrier around the target, giving them Magic Shell status effect which increases Magic Armour. Removes: Burning, Poisoned, Stunned, Frozen, Suffocating, Petrified',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        }
      ]
    },
    other: {
      craftable: [
        {
          name: 'Nether Swap',
          img: 'photos/pyrokinetic/Nether_Swap.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Pressure Spike',
          img: 'photos/pyrokinetic/Pressure_Spike.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        }
      ],
      source: [
        {
          name: 'Nether Swap',
          img: 'photos/pyrokinetic/Nether_Swap.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Pressure Spike',
          img: 'photos/pyrokinetic/Pressure_Spike.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
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
          description: 'Ice forms a defensive barrier around the target, giving them Magic Shell status effect which increases Magic Armour. Removes: Burning, Poisoned, Stunned, Frozen, Suffocating, Petrified',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        },
        {
          name: 'Backlash',
          img: '/photos/scoundrel/Backlash.webp',
          description: 'Deal air damage and set Shocked for two turns on enemies without Magic Armour',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        },
        {
          name: 'Chloroform',
          img: 'photos/scoundrel/Chloroform.webp',
          description: 'Sets Favorable Wind Aura on the caster and allies within close proximity for four turns, increasing their movement speed by 1.5m for 4 turns.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        },
        {
          name: 'Throwing Knife',
          img: 'photos/scoundrel/Throwing_Knife.webp',
          description: 'Touch your enemy to deal them air damage and set Stunned them if they dont have Magic Armour.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        }
      ],
      4: [
        {
          name: 'Cloak and Dagger',
          img: 'photos/scoundrel/Cloak_and_Dagger.webp',
          description: 'Shoot an electrical bolt from the sky dealing air damage to characters and items in the area, and setting Shocked status.',
          actionPoints: 3,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Sawtooth Knife',
          img: 'photos/scoundrel/Sawtooth_Knife.webp',
          description: 'Move objects (inanimate or otherwise) from one location to another. Deals physical damage upon impact.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Rupture Tendons',
          img: 'photos/scoundrel/Rupture_Tendons.webp',
          description: 'Increases dodging by 90% and movement by 20%.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        }
      ],
      9: [
        {
          name: 'Corrupted Blade',
          img: 'photos/scoundrel/Corrupted_Blade.webp',
          description: 'Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Aerotheurge: 3 }
        },
        {
          name: 'Fan of Knives',
          img: 'photos/scoundrel/Fan_of_Knives.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Gag Order',
          img: 'photos/scoundrel/Gag_Order.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Sleeping Arms',
          img: 'photos/scoundrel/Sleeping_Arms.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        }
      ],
      13: [
        {
          name: 'Daggers Drawn',
          img: 'photos/scoundrel/Daggers_Drawn.webp',
          description: 'Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Aerotheurge: 3 }
        }
      ],
      16: [
        {
          name: 'Mortal Blow',
          img: 'photos/scoundrel/Mortal_Blow.webp',
          description: 'Shoot an electrical bolt from the sky dealing air damage to characters and items in the area, and setting Shocked status.',
          actionPoints: 3,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Terrifying Cruelty',
          img: 'photos/scoundrel/Terrifying_Cruelty.webp',
          description: 'Move objects (inanimate or otherwise) from one location to another. Deals physical damage upon impact.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Wind-Up Toy',
          img: 'photos/scoundrel/Wind-Up_Toy.webp',
          description: 'Increases dodging by 90% and movement by 20%.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        }
      ]
    },
    other: {
      craftable: [
        {
          name: 'Nether Swap',
          img: 'photos/scoundrel/Nether_Swap.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Pressure Spike',
          img: 'photos/scoundrel/Pressure_Spike.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        }
      ],
      source: [
        {
          name: 'Nether Swap',
          img: 'photos/scoundrel/Nether_Swap.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Pressure Spike',
          img: 'photos/scoundrel/Pressure_Spike.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
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
          description: 'Ice forms a defensive barrier around the target, giving them Magic Shell status effect which increases Magic Armour. Removes: Burning, Poisoned, Stunned, Frozen, Suffocating, Petrified',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        },
        {
          name: 'Dimensional Bolt',
          img: '/photos/summoning/Dimensional_Bolt.webp',
          description: 'Deal air damage and set Shocked for two turns on enemies without Magic Armour',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        },
        {
          name: 'Elemental Totem',
          img: 'photos/summoning/Elemental_Totem.webp',
          description: 'Sets Favorable Wind Aura on the caster and allies within close proximity for four turns, increasing their movement speed by 1.5m for 4 turns.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        },
        {
          name: 'Farsight Infusion',
          img: 'photos/summoning/Farsight_Infusion.webp',
          description: 'Touch your enemy to deal them air damage and set Stunned them if they dont have Magic Armour.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        }
      ],
      4: [
        {
          name: 'Power Infusion',
          img: 'photos/summoning/Power_Infusion.webp',
          description: 'Shoot an electrical bolt from the sky dealing air damage to characters and items in the area, and setting Shocked status.',
          actionPoints: 3,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Rallying Cry',
          img: 'photos/summoning/Rallying_Cry.webp',
          description: 'Move objects (inanimate or otherwise) from one location to another. Deals physical damage upon impact.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Supercharger',
          img: 'photos/summoning/Supercharger.webp',
          description: 'Increases dodging by 90% and movement by 20%.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        }
      ],
      9: [
        {
          name: 'Dominate Mind',
          img: 'photos/summoning/Dominate_Mind.webp',
          description: 'Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Aerotheurge: 3 }
        },
        {
          name: 'Door to Eternity',
          img: 'photos/summoning/Door_to_Eternity.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Shadow Infusion',
          img: 'photos/summoning/Shadow_Infusion.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Soul Mate',
          img: 'photos/summoning/Soul_Mate.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        }
      ],
      13: [
        {
          name: 'Planar Gateway',
          img: 'photos/summoning/Planar_Gateway.webp',
          description: 'Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Aerotheurge: 3 }
        }
      ],
      16: [
        {
          name: 'Cannibalize',
          img: 'photos/summoning/Cannibalize.webp',
          description: 'Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Aerotheurge: 3 }
        },
        {
          name: 'Ethereal Storm',
          img: 'photos/summoning/Ethereal_Storm.webp',
          description: 'Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Aerotheurge: 3 }
        },
        {
          name: 'Warp Infusion',
          img: 'photos/summoning/Warp_Infusion.webp',
          description: 'Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Aerotheurge: 3 }
        }
      ]
    },
    other: {
      craftable: [
        {
          name: 'Nether Swap',
          img: 'photos/summoning/Nether_Swap.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Pressure Spike',
          img: 'photos/summoning/Pressure_Spike.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        }
      ],
      source: [
        {
          name: 'Nether Swap',
          img: 'photos/summoning/Nether_Swap.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Pressure Spike',
          img: 'photos/summoning/Pressure_Spike.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        }
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
          description: 'Ice forms a defensive barrier around the target, giving them Magic Shell status effect which increases Magic Armour. Removes: Burning, Poisoned, Stunned, Frozen, Suffocating, Petrified',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        },
        {
          name: 'Battle Stomp',
          img: '/photos/warfare/Battle_Stomp.webp',
          description: 'Deal air damage and set Shocked for two turns on enemies without Magic Armour',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        },
        {
          name: 'Bouncing Shield',
          img: 'photos/warfare/Bouncing_Shield.webp',
          description: 'Sets Favorable Wind Aura on the caster and allies within close proximity for four turns, increasing their movement speed by 1.5m for 4 turns.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        },
        {
          name: 'Crippling Blow',
          img: 'photos/warfare/Crippling_Blow.webp',
          description: 'Touch your enemy to deal them air damage and set Stunned them if they dont have Magic Armour.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 1 }
        }
      ],
      4: [
        {
          name: 'Enrage',
          img: 'photos/warfare/Enrage.webp',
          description: 'Shoot an electrical bolt from the sky dealing air damage to characters and items in the area, and setting Shocked status.',
          actionPoints: 3,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Provoke',
          img: 'photos/warfare/Provoke.webp',
          description: 'Move objects (inanimate or otherwise) from one location to another. Deals physical damage upon impact.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Whirlwind',
          img: 'photos/warfare/Whirlwind.webp',
          description: 'Increases dodging by 90% and movement by 20%.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        }
      ],
      9: [
        {
          name: 'Blitz Attack',
          img: 'photos/warfare/Blitz_Attack.webp',
          description: 'Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.',
          actionPoints: 3,
          sourcePoints: 1,
          required: { Aerotheurge: 3 }
        },
        {
          name: 'Deflective Barrier',
          img: 'photos/warfare/Deflective_Barrier.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Phoenix Dive',
          img: 'photos/warfare/Phoenix_Dive.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Thick of the Fight',
          img: 'photos/warfare/Thick_of_the_Fight.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        }
      ],
      13: [
        {
          name: 'Onslaught',
          img: 'photos/warfare/Onslaught.webp',
          description: 'Shoot an electrical bolt from the sky dealing air damage to characters and items in the area, and setting Shocked status.',
          actionPoints: 3,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        }
      ],
      16: [
        {
          name: 'Challenge',
          img: 'photos/warfare/Challenge.webp',
          description: 'Shoot an electrical bolt from the sky dealing air damage to characters and items in the area, and setting Shocked status.',
          actionPoints: 3,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Guardian Angel',
          img: 'photos/warfare/Guardian_Angel.webp',
          description: 'Move objects (inanimate or otherwise) from one location to another. Deals physical damage upon impact.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Overpower',
          img: 'photos/warfare/Overpower.webp',
          description: 'Increases dodging by 90% and movement by 20%.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        }
      ]
    },
    other: {
      craftable: [
        {
          name: 'Nether Swap',
          img: 'photos/warfare/Nether_Swap.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Pressure Spike',
          img: 'photos/warfare/Pressure_Spike.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        }
      ],
      source: [
        {
          name: 'Nether Swap',
          img: 'photos/warfare/Nether_Swap.webp',
          description: 'Nether swap allows the caster or an ally of their choosing to swap places with an enemy.',
          actionPoints: 2,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
        },
        {
          name: 'Pressure Spike',
          img: 'photos/warfare/Pressure_Spike.webp',
          description: 'Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.',
          actionPoints: 1,
          sourcePoints: 0,
          required: { Aerotheurge: 2 }
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
    skillButton.textContent = skill.type.toUpperCase();
    skillButton.className = 'skill-button';
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
        subSkillButton.textContent = sublevel.name;
        subSkillButton.className = 'subskill-button';
        subSkillButton.style.backgroundImage = `url(${sublevel.img})`;
        subSkillButton.style.backgroundSize = 'cover';
        subSkillButton.style.backgroundPosition = 'center';

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