let levels = [
  {
    level: 1,
    attribute: 3, /* depends on build,*/
    combat: 3,
    civil: 1,
    talent: null,
  },
  {
    level: 2,
    attribute: 2,
    combat: 1,
    civil: 1,
    talent: 0,
  },
  {
    level: 3,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0,
  },
  {
    level: 4,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 1,
  },
  {
    level: 5,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0,
  },
  {
    level: 6,
    attribute: 2,
    combat: 1,
    civil: 1,
    talent: 0,
  },
  {
    level: 7,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0,
  },
  {
    level: 8,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0,
  },
  {
    level: 9,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0,
  },
  {
    level: 10,
    attribute: 2,
    combat: 1,
    civil: 1,
    talent: 1,
  },
  {
    level: 11,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0,
  },
  {
    level: 12,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0,
  },
  {
    level: 13,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0,
  },
  {
    level: 14,
    attribute: 2,
    combat: 1,
    civil: 1,
    talent: 0,
  },
  {
    level: 15,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0,
  },
  {
    level: 16,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 1,
  },
  {
    level: 17,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 1,
  },
  {
    level: 18,
    attribute: 2,
    combat: 1,
    civil: 1,
    talent: 0,
  },
  {
    level: 19,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0,
  },
  {
    level: 20,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0,
  },
  {
    level: 21,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0,
  },
  {
    level: 22,
    attribute: 2,
    combat: 1,
    civil: 1,
    talent: 1,
  },
  {
    level: 23,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0,
  },
  {
    level: 24,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0,
  },
  {
    level: 25,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0,
  },
  {
    level: 26,
    attribute: 2,
    combat: 1,
    civil: 1,
    talent: 0,
  },
  {
    level: 27,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0,
  },
  {
    level: 28,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 1,
  },
  {
    level: 29,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0,
  },
  {
    level: 30,
    attribute: 2,
    combat: 1,
    civil: 1,
    talent: 1,
  },
];

let attribute = [
  {
    Strength: 0,
    Finesse: 0,
    intelligence: 0,
    Constitution: 0,
    Memory: 0,
    Wits: 0,
    Damage: 0,
    Critical Chance: 0,
    Accuracy: 0,
    Dodging: 0,
    Physical Armor: 0,
    Magic Armor: 0,
    Fire: 0,
    Water: 0,
    Earth: 0,
    Air: 0,
    Poison: 0,
  }
]

let classes = [
  {
    'Cleric',
    build: ['Restoration', 'Blood Sucker', 'Decaying Touch']
    'Conjurer',
    build: ['Conjure Incarnate', 'Dimesional Bolt', 'Elemental Totem']
    'Enchanter',
    build: ['Rain', 'Hail Strike', 'Electric Discharge']
    'Witch',
    build: ['Chloroform', 'Raise Bloated Corpse', 'Mosquito Swarm']
    'Wizard',
    build: ['Ignition', 'Searing Daggers', 'Fossil Strike']
    'Metamorph',
    build: ['Bull Horns', 'Chicken Claw', 'Tentacle Lash']
    'Ranger',
    build: ['Elemental Arrowheads', 'Ricochet', 'Peace of Mind']
    'Rogue',
    build: ['Adrenaline', 'Backlash', 'Throwing Knife']
    'Shadowblade',
    build: ['Backlash', 'Chameleon Cloak', 'Chicken Claw']
    'Wayfarer',
    build: ['Elemental Arrowheads', 'Pin Down', 'Fossil Strike']
    'Battlemage',
    build: ['Battering Ram', 'Blinding Radiance', 'Shocking Touch']
    'Fighter',
    build: ['Battle Stomp', 'Bouncing Shield', 'Fortify']
    'Inquisitor',
    build: ['Battering Ram', 'Blood Sucker', 'Mosquito Swarm']
    'Knight',
    build: ['Battering Ram', 'Battle Stomp', 'Crippling Blow']
  }
]

Let origin = [
  {
    origin: 'Red Prince',
    talents: ['Dragon\'s Blaze', 'Demonic Stare']
    civic: ['Sophisticated', 'Spellsong' (Persuasion +1)]
  }
  {
    origin: 'Sebille',
    talents: ['Flesh Sacrifice', 'Break the Shackles'],
    civic: ['Corpse Eater', 'Ancestral Knowledge' (Loremaster +1)]
  },
  {
    origin: 'Ifan',
    talents: ['Flesh Sacrifice', 'Break the Shackles']
    civic: ['Ingenious', 'thrifty' (Bartering +1)]
  }
  {
    origin: 'Beast',
    talents: ['Petrifying Touch', 'Blinding Squall']
    civic: ['Sturdy', 'Dwarven Guile' (Sneaking +1)]
  }
  {
    origin: 'Fane',
    talents: ['Play Dead', 'Time Warp']
    civic: ['Undead', 'Ingenious']
  },
  {
    origin: 'Dwarf',
    talents: ['Petrifying Touch', 'Dome of Protection']
    civic: ['Sturdy', 'Dwarven Guile' (Sneaking +1)]
  }
  {
    origin: 'Elf',
    talents: ['Flesh Sacrifice', 'Dome of Protection'],
    civic: ['Corpse Eater', 'Ancestral Knowledge' (Loremaster +1)]
  },
  {
    origin: 'Human',
    talents: ['Encourage', 'Dome of Protection'],
    civic: ['Ingenious', 'thrifty' (Bartering +1)]
  },
  {
    origin: 'Lizard',
    talents: ['Dragon\'s Blaze', 'Dome of Protection']
    civic: ['Sophisticated', 'Spellsong' (Persuasion +1)]
  }
  {
    origin: 'Undead Dwarf',
    talents: ['Play Dead', 'Dome of Protection']
    civic: ['Undead', 'Sturdy']
  }
  {
    origin: 'Undead Elf',
    talents: ['Play Dead', 'Dome of Protection'],
    civic: ['Undead', 'Corpse Eater']
  },
  {
    origin: 'Undead Human',
    talents: ['Play Dead', 'Dome of Protection'],
    civic: ['Undead', 'Ingenious']
  },
  {
    origin: 'Undead Lizard',
    talents: ['Play Dead', 'Dome of Protection']
    civic: ['Undead', 'Sophisticated']
  }
]