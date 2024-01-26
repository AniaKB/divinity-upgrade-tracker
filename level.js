/* let levels = [
  {
    level: 1,
    attribute: 3, /* depends on build,*
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

let combat = [
  Weapons:
  {
    Dual Wielding: 0,
    Ranged: 0,
    Single-Handed: 0,
    Two-Handed: 0,
  },
  Defence:
  {
    Leadership: 0,
    Perseverance: 0,
    Retribution: 0,
  },
  Skills:
  {
    Aerotheurge: 0,
    Geomancer: 0,
    Huntsman: 0,
    Hydrosophist: 0,
    Necromancer: 0,
    Polymorph: 0,
    Pyrokinetic: 0,
    Scoundrel: 0,
    Summoning: 0,
    Warfare: 0,
  }
]

let civil = [
  {
    Bartering: 0,
    Lucky Charm: 0,
    Persuasion: 0,
    Loremaster: 0,
    Telekinesis: 0,
    Sneaking: 0,
    Thievery: 0,
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
]*/

let attributesArray = [
  {attribute: "Strength", points: 0},
  {attribute: "Finesse", points: 0},
  {attribute: "Intelligence", points: 0},
  {attribute: "Constitution", points: 0},
  {attribute: "Memory", points: 0},
  {attribute: "Wits", points: 0},
  {attribute: "Damage", points: 0},
  {attribute: "Critical Chance", points: 0},
  {attribute: "Accuracy", points: 0},
  {attribute: "Dodging", points: 0},
  {attribute: "Physical Armor", points: 0},
  {attribute: "Magic Armor", points: 0},
  {attribute: "Fire", points: 0},
  {attribute: "Water", points: 0},
  {attribute: "Earth", points: 0},
  {attribute: "Air", points: 0},
  {attribute: "Poison", points: 0},
]

const myAttributes = document.getElementById('attributes');
const totalPointsDisplay = document.getElementById('totalAttPointsDisplay');
const levelDropdown = document.getElementById('levelDropdown');
let totalAttPoints = 0;

for (let i = 1; i<= 30; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.textContent = `Level ${i}`;
  levelDropdown.appendChild(option);
}

function updateTotalAttPoints() {
  totalAttPoints = levelDropdown.value * 2;
  totalAttPointsDisplay.textContent = `Attribute Points: ${totalAttPoints}`
}

function addPoints(index) {
  if (totalAttPoints > 0) {
    attributesArray[index].points++;
    totalPoints--;
    renderAttributes();
    updateTotalAttPoints();
  }
}

function removePoints(index) {
  if (attributesArray[index].points > 0) {
      attributesArray[index].points--;
      totalAttPoints++;
      renderAttributes();
      updateTotalAttPoints();
  }
 }

function renderAttributes() {
  myAttributes.innerHTML = '';

  attributesArray.forEach((item, index) => {
    const listAttribute = document.createElement('li');

    const attributeText = document.createElement('span');
    attributeText.textContent = item.attribute;
    listAttribute.appendChild(attributeText);

    const decreaseButton = document.createElement('button');
    decreaseButton.textContent = '-';
    decreaseButton.addEventListener('click', () => removeItems(index));
    listAttribute.appendChild(decreaseButton);

    const pointsText = document.createElement('span');
    pointsText.textContent = item.points;
    listAttribute.appendChild(pointsText);

    const increaseButton = document.createElement('button');
    increaseButton.textContent = '+';
    increaseButton.addEventListener('click', () => addItems(index));
    listAttribute.appendChild(increaseButton);

    myAttributes.appendChild(listAttribute);
  });
}

levelDropdown.addEventListener('change'), () => {
  updateTotalAttPoints();
  renderAttributes();
}

renderAttributes();