const myAttributes = document.getElementById('attributes');
const totalAttPointsDisplay = document.getElementById('totalAttPointsDisplay');
const levelDropdown = document.getElementById('levelDropdown');
let totalAttPoints = 0;

let levels = [
  {
    level: 1,
    attribute: 3, /* depends on build,*/
    combat: 2,
    civil: 1,
    talent: 0
  },
  {
    level: 2,
    attribute: 2,
    combat: 1,
    civil: 1,
    talent: 0
  },
  {
    level: 3,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0
  },
  {
    level: 4,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 1
  },
  {
    level: 5,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0
  },
  {
    level: 6,
    attribute: 2,
    combat: 1,
    civil: 1,
    talent: 0
  },
  {
    level: 7,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0
  },
  {
    level: 8,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 1
  },
  {
    level: 9,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0
  },
  {
    level: 10,
    attribute: 2,
    combat: 1,
    civil: 1,
    talent: 0
  },
  {
    level: 11,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0
  },
  {
    level: 12,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0
  },
  {
    level: 13,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0
  },
  {
    level: 14,
    attribute: 2,
    combat: 1,
    civil: 1,
    talent: 0
  },
  {
    level: 15,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0
  },
  {
    level: 16,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 1
  },
  {
    level: 17,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 1
  },
  {
    level: 18,
    attribute: 2,
    combat: 1,
    civil: 1,
    talent: 0
  },
  {
    level: 19,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0
  },
  {
    level: 20,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0
  },
  {
    level: 21,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0
  },
  {
    level: 22,
    attribute: 2,
    combat: 1,
    civil: 1,
    talent: 1
  },
  {
    level: 23,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0
  },
  {
    level: 24,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0
  },
  {
    level: 25,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0
  },
  {
    level: 26,
    attribute: 2,
    combat: 1,
    civil: 1,
    talent: 0
  },
  {
    level: 27,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0
  },
  {
    level: 28,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 1
  },
  {
    level: 29,
    attribute: 2,
    combat: 1,
    civil: 0,
    talent: 0
  },
  {
    level: 30,
    attribute: 2,
    combat: 1,
    civil: 1,
    talent: 1
  }
];

let attributesArray = [
  { attribute: 'Strength', points: 0 },
  { attribute: 'Finesse', points: 0 },
  { attribute: 'Intelligence', points: 0 },
  { attribute: 'Constitution', points: 0 },
  { attribute: 'Memory', points: 0 },
  { attribute: 'Wits', points: 0 },
  { attribute: 'Damage', points: 0 },
  { attribute: 'Critical Chance', points: 0 },
  { attribute: 'Accuracy', points: 0 },
  { attribute: 'Dodging', points: 0 },
  { attribute: 'Physical Armor', points: 0 },
  { attribute: 'Magic Armor', points: 0 },
  { attribute: 'Fire', points: 0 },
  { attribute: 'Water', points: 0 },
  { attribute: 'Earth', points: 0 },
  { attribute: 'Air', points: 0 },
  { attribute: 'Poison', points: 0 }
];

let civilPoints = [
  { attribute: 'Bartering', points: 0 },
  { attribute: 'Lucky Charm', points: 0 },
  { attribute: 'Persuasion', points: 0 },
  { attribute: 'Loremaster', points: 0 },
  { attribute: 'Telekinesis', points: 0 },
  { attribute: 'Sneaking', points: 0 },
  { attribute: 'Thievery', points: 0 }
];

function updateLevelsDropdown () {
  levelDropdown.innerHTML = '';

  levels.forEach((level) => {
    const option = document.createElement('option');
    option.value = level.level;
    option.textContent = `${level.level}`;
    levelDropdown.appendChild(option);
  });
}

updateLevelsDropdown();

levelDropdown.value = 1;
updateTotalAttPoints();

function updateTotalAttPoints () {
  const selectedLevel = parseInt(levelDropdown.value);
  let total = 0;

  for (let i = 0; i < selectedLevel; i++) {
    total += levels[i].attribute;
  }

  attributesArray.forEach((att) => {
    total -= att.points;
  });

  totalAttPoints = total;
  totalAttPointsDisplay.textContent = `Attributes: ${totalAttPoints}`;
}

function addAttPoints (index) {
  if (totalAttPoints > 0) {
    attributesArray[index].points++;
    totalAttPoints--;
    renderAttributes();
    updateTotalAttPoints();
  }
}

function removeAttPoints (index) {
  if (attributesArray[index].points > 0) {
    attributesArray[index].points--;
    totalAttPoints++;
    renderAttributes();
    updateTotalAttPoints();
  }
}

function renderAttributes () {
  myAttributes.innerHTML = '';

  attributesArray.forEach((att, index) => {
    const listAttribute = document.createElement('li');

    const attributeText = document.createElement('span');
    attributeText.textContent = att.attribute;
    listAttribute.appendChild(attributeText);

    const decreaseAttButton = document.createElement('button');
    decreaseAttButton.textContent = '-';
    decreaseAttButton.addEventListener('click', () => removeAttPoints(index));
    listAttribute.appendChild(decreaseAttButton);

    const pointsText = document.createElement('span');
    pointsText.textContent = att.points;
    listAttribute.appendChild(pointsText);

    const increaseAttButton = document.createElement('button');
    increaseAttButton.textContent = '+';
    increaseAttButton.addEventListener('click', () => addAttPoints(index));
    listAttribute.appendChild(increaseAttButton);

    myAttributes.appendChild(listAttribute);
  });
}

levelDropdown.addEventListener('change', () => {
  updateTotalAttPoints();
  renderAttributes();
});

renderAttributes();


let combatArray = [
  { combat: 'Dual Wielding', points: 0 },
  { combat: 'Ranged', points: 0 },
  { combat: 'Single-Handed', points: 0 },
  { combat: 'Two-Handed', points: 0 },
  { combat: 'Leadership', points: 0 },
  { combat: 'Perseverance', points: 0 },
  { combat: 'Retribution', points: 0 },
  { combat: 'Aerotheurge', points: 0 },
  { combat: 'Geomancer', points: 0 },
  { combat: 'Huntsman', points: 0 },
  { combat: 'Hydrosophist', points: 0 },
  { combat: 'Necromancer', points: 0 },
  { combat: 'Polymorph', points: 0 },
  { combat: 'Pyrokinetic', points: 0 },
  { combat: 'Scoundrel', points: 0 },
  { combat: 'Summoning', points: 0 },
  { combat: 'Warfare', points: 0 }
];

const myCombat = document.getElementById('combat');
const totalCombatPointsDisplay = document.getElementById('totalCombatPointsDisplay');
let totalCombatPoints = 0;

levelDropdown.value = 1;
updateTotalCombatPoints();

function updateTotalCombatPoints () {
  let selectedLevel = parseInt(levelDropdown.value);
  let total = 0;

  for (let i = 0; i < selectedLevel; i++) {
    total += levels[i].combat;
  }
  combatArray.forEach((com) => {
    total -= com.points;
  });
  totalCombatPoints = total;
  totalCombatPointsDisplay.textContent = `Combat Abilities: ${totalCombatPoints}`;
}

function addPoints (index) {
  if (totalCombatPoints > 0) {
    combatArray[index].points++;
    totalCombatPoints--;
    renderCombat();
    updateTotalCombatPoints();
  }
}

function removePoints (index) {
  if (combatArray[index].points > 0) {
    combatArray[index].points--;
    totalCombatPoints++;
    renderCombat();
    updateTotalCombatPoints();
  }
}

function renderCombat () {
  myCombat.innerHTML = '';

  combatArray.forEach((com, index) => {
    const listCombat = document.createElement('li');

    const combatText = document.createElement('span');
    combatText.textContent = com.combat;
    listCombat.appendChild(combatText);

    const decreaseCombatButton = document.createElement('button');
    decreaseCombatButton.textContent = '-';
    decreaseCombatButton.addEventListener('click', () => removePoints(index));
    listCombat.appendChild(decreaseCombatButton);

    const pointsText = document.createElement('span');
    pointsText.textContent = com.points;
    listCombat.appendChild(pointsText);

    const increaseCombatButton = document.createElement('button');
    increaseCombatButton.textContent = '+';
    increaseCombatButton.addEventListener('click', () => addPoints(index));
    listCombat.appendChild(increaseCombatButton);

    myCombat.appendChild(listCombat);
  });
}

levelDropdown.addEventListener('change', () => {
  updateTotalCombatPoints();
  renderCombat();
});

renderCombat();