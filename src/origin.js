let originArray = [
  {
    origin: 'Red Prince',
    talents: ['Dragon\'s Blaze', 'Demonic Stare'],
    civil: ['Sophisticated', 'Spellsong'],
    attribute: { Persuasion: 1 }
  },
  {
    origin: 'Sebille',
    talents: ['Flesh Sacrifice', 'Break the Shackles'],
    civil: ['Corpse Eater', 'Ancestral Knowledge'],
    attribute: { Loremaster: 1 }
  },
  {
    origin: 'Ifan',
    talents: ['Flesh Sacrifice', 'Break the Shackles'],
    civil: ['Ingenious', 'thrifty'],
    attribute: { Bartering: 1 }
  },
  {
    origin: 'Beast',
    talents: ['Petrifying Touch', 'Blinding Squall'],
    civil: ['Sturdy', 'Dwarven Guile'],
    attribute: { Sneaking: 1 }
  },
  {
    origin: 'Fane',
    talents: ['Play Dead', 'Time Warp'],
    civil: ['Undead', 'Ingenious']
  },
  {
    origin: 'Dwarf',
    talents: ['Petrifying Touch', 'Dome of Protection'],
    civil: ['Sturdy', 'Dwarven Guile'],
    attribute: { Sneaking: 1 }
  },
  {
    origin: 'Elf',
    talents: ['Flesh Sacrifice', 'Dome of Protection'],
    civil: ['Corpse Eater', 'Ancestral Knowledge'],
    attribute: { Loremaster: 1 }
  },
  {
    origin: 'Human',
    talents: ['Encourage', 'Dome of Protection'],
    civil: ['Ingenious', 'thrifty'],
    attribute: { Bartering: 1 }
  },
  {
    origin: 'Lizard',
    talents: ['Dragon\'s Blaze', 'Dome of Protection'],
    civil: ['Sophisticated', 'Spellsong'],
    attribute: { Persuasion: 1 }
  },
  {
    origin: 'Undead Dwarf',
    talents: ['Play Dead', 'Dome of Protection'],
    civil: ['Undead', 'Sturdy']
  },
  {
    origin: 'Undead Elf',
    talents: ['Play Dead', 'Dome of Protection'],
    civil: ['Undead', 'Corpse Eater']
  },
  {
    origin: 'Undead Human',
    talents: ['Play Dead', 'Dome of Protection'],
    civil: ['Undead', 'Ingenious']
  },
  {
    origin: 'Undead Lizard',
    talents: ['Play Dead', 'Dome of Protection'],
    civil: ['Undead', 'Sophisticated']
  }
];

let originClass = [
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
];

let civil = [
  {
    Bartering: 0,
    'Lucky Charm': 0,
    Persuasion: 0,
    Loremaster: 0,
    Telekinesis: 0,
    Sneaking: 0,
    Thievery: 0
  }
];

const originDropdown = document.getElementById('origin');

function renderOriginDropdown () {
  originDropdown.innerHTML = '';

  originArray.forEach((origin) => {
    const option = document.createElement('option');
    option.value = origin.origin;
    option.textContent = `${origin.origin}`;
    originDropdown.appendChild(option);
  });
}

renderOriginDropdown();

const originClassDropdown = document.getElementById('originClass');

function renderOriginClassDropdown () {
  originClassDropdown.innerHTML = '';

  originClass.forEach((originClass) => {
    const option = document.createElement('option');
    option.value = originClass.type;
    option.textContent = `${originClass.type}`;
    originClassDropdown.appendChild(option);
  });
}

renderOriginClassDropdown();