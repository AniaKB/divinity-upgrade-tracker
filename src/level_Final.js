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
*/

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

const myAttributes = document.getElementById('attributes');
const totalAttPointsDisplay = document.getElementById('totalAttPointsDisplay');
const levelDropdown = document.getElementById('levelDropdown');
let totalAttPoints = 0;

for (let i = 1; i <= 30; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.textContent = `${i}`;
  levelDropdown.appendChild(option);
};

levelDropdown.value = 1;
updateTotalAttPoints();

function updateTotalAttPoints () {
  let total = 0;
  for (let i = 1; i <= levelDropdown.value; i++) {
    total += i === 1 ? 3 : 2;
  }
  totalAttPoints = total;
  console.log(totalAttPoints);
  totalAttPointsDisplay.textContent = `Attribute Points: ${totalAttPoints}`;
};

function addPoints (index) {
  if (totalAttPoints > 0 && attributesArray[index].points < totalAttPoints) {
    attributesArray[index].points++;
    totalAttPoints--;
    renderAttributes();
    updateTotalAttPoints();
  }
}

function removePoints (index) {
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
    decreaseAttButton.addEventListener('click', () => removePoints(index));
    listAttribute.appendChild(decreaseAttButton);

    const pointsText = document.createElement('span');
    pointsText.textContent = att.points;
    listAttribute.appendChild(pointsText);

    const increaseAttButton = document.createElement('button');
    increaseAttButton.textContent = '+';
    increaseAttButton.addEventListener('click', () => addPoints(index));
    listAttribute.appendChild(increaseAttButton);

    myAttributes.appendChild(listAttribute);
  });
}

levelDropdown.addEventListener('change', () => {
  updateTotalAttPoints();
  renderAttributes();
});

renderAttributes();