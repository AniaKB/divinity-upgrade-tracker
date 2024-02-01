let combatArray = [
  Weapons:
  {
    Dual Wielding: 0,
    Ranged: 0,
    'Single-Handed': 0,
    'Two-Handed': 0,
  },
  Defense:
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
];

const myCombat = document.getElementById('combat');
const totalComPointsDisplay = document.getElementById('totalComPointsDisplay');
let totalComPoints = 0;

function updateTotalComPoints() {
  let total = levelDropdown.value * 2;
  combatArray.forEach(Com => {
    total -= Com.points;
  });
  totalComPoints = total;
  totalComPointsDisplay.textContent = `Combat Points: ${totalComPoints}`;
}

function addPoints(index) {
  if (totalComPoints > 0) {
    combatArray[index].points++;
    totalComPoints--;
    rendercombat();
    updateTotalComPoints();
  }
}

function removePoints(index) {
  if (combatArray[index].points > 0) {
    combatArray[index].points--;
    totalComPoints++;
    rendercombat();
    updateTotalComPoints();
  }
}

function rendercombat() {
  myCombat.innerHTML = '';

  combatArray.forEach((Com, index) => {
    const listComribute = document.createElement('li');

    const ComributeText = document.createElement('span');
    ComributeText.textContent = Com.Comribute;
    listComribute.appendChild(ComributeText);

    const decreaseComButton = document.createElement('button');
    decreaseComButton.textContent = '-';
    decreaseComButton.addEventListener('click', () => removePoints(index));
    listComribute.appendChild(decreaseComButton);

    const pointsText = document.createElement('span');
    pointsText.textContent = Com.points;
    listComribute.appendChild(pointsText);

    const increaseComButton = document.createElement('button');
    increaseComButton.textContent = '+';
    increaseComButton.addEventListener('click', () => addPoints(index));
    listComribute.appendChild(increaseComButton);

    mycombat.appendChild(listComribute);
  });
}

levelDropdown.addEventListener('change', () => {
  updateTotalComPoints();
  rendercombat();
});

rendercombat();