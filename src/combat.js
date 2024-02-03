let combatArray = [
  {
    'Dual Wielding': 0,
    Ranged: 0,
    'Single-Handed': 0,
    'Two-Handed': 0,
    Leadership: 0,
    Perseverance: 0,
    Retribution: 0,
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
];

const myCombat = document.getElementById('combat');
const totalCombatPointsDisplay = document.getElementById('totalCombatPointsDisplay');
let totalCombatPoints = 0;

function updateTotalCombatPoints() {
  let total = levelDropdown.value * 2;
  combatArray.forEach(Com => {
    total -= Com.points;
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
    listCombat.appendChild(increaseComnatButton);

    myCombat.appendChild(listCombat);
  });
}

levelDropdown.addEventListener('change', () => {
  updateTotalCombatPoints();
  renderCombat();
});

renderCombat();