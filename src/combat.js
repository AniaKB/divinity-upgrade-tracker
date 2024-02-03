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

function updateTotalCombatPoints() {
  let total = levelDropdown.value + 1;
  combatArray.forEach(com => {
    total -= com.points;
  });
  totalCombatPoints = total;
  totalCombatPointsDisplay.textContent = `Combat Abilities: ${totalCombatPoints}`;
}

function addPoints(index) {
  if (totalCombatPoints > 0) {
    combatArray[index].points++;
    totalCombatPoints--;
    renderCombat();
    updateTotalCombatPoints();
  }
}

function removePoints(index) {
  if (combatArray[index].points > 0) {
    combatArray[index].points--;
    totalCombatPoints++;
    renderCombat();
    updateTotalCombatPoints();
  }
}

function renderCombat() {
  myCombat.innerHTML = '';

  combatArray.forEach((com, index) => {
    const listCombat = document.createElement('li');

    const CombatText = document.createElement('span');
    CombatText.textContent = com.Combat;
    listCombat.appendChild(CombatText);

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