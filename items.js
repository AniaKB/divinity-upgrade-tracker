let itemArray = [
  { item:'Ancient human skull', inventory: 0},
  { item:'A jar of mind maggots', inventory: 0},
  { item:'Air essence', inventory: 0},
  { item:'Animal hide', inventory: 0},
  { item:'Animal scales', inventory: 0},
  { item:'Arrow', inventory: 0},
  { item:'Arthropod leg', inventory: 0},
  { item:'Barrel', inventory: 0},
  { item:'Blessed water barrel', inventory: 0},
  { item:'Bone', inventory: 0},
  { item:'Bowstring', inventory: 0},
  { item:'Broad skull', inventory: 0},
  { item:'Broken bottle', inventory: 0},
  { item:'Bucket', inventory: 0},
  { item:'Bucket with water', inventory: 0},
  { item:'Chicken foot', inventory: 0},
  { item:'Claw', inventory: 0},
  { item:'Cloth scraps', inventory: 0},
  { item:'Cooking pot', inventory: 0},
  { item:'Crab\'s claw', inventory: 0},
  { item:'Cursed oil barrel', inventory: 0},
  { item:'Deathfog barrel', inventory: 0},
  { item:'Deathfog crate', inventory: 0},
  { item:'Dirty socks', inventory: 0},
  { item:'Earth essence', inventory: 0},
  { item:'Empty bottle', inventory: 0},
  { item:'Empty canister', inventory: 0},
  { item:'Empty cup', inventory: 0},
  { item:'Empty flask', inventory: 0},
  { item:'Empty grenade', inventory: 0},
  { item:'Empty honey jar', inventory: 0},
  { item:'Empty mug', inventory: 0},
  { item:'Empty perfume bottle', inventory: 0},
  { item:'Empty potion bottle', inventory: 0},
  { item:'Eternal artefact', inventory: 0},
  { item:'Eternal plate', inventory: 0},
  { item:'Eye', inventory: 0},
  { item:'Fancy feather', inventory: 0},
  { item:'Fang', inventory: 0},
  { item:'Feather', inventory: 0},
  { item:'Fire essence', inventory: 0},
  { item:'Fish bone', inventory: 0},
  { item:'Glowing idol of rebirth', inventory: 0},
  { item:'Gold cup', inventory: 0},
  { item:'Goo', inventory: 0},
  { item:'Hair', inventory: 0},
  { item:'Ink pot', inventory: 0},
  { item:'Ink pot and quill', inventory: 0},
  { item:'Intestines', inventory: 0},
  { item:'Jawless skull', inventory: 0},
  { item:'Lamp', inventory: 0},
  { item:'Large tusk', inventory: 0},
  { item:'Leather scraps', inventory: 0},
  { item:'Life essence', inventory: 0},
  { item:'Light golden teaspoon', inventory: 0},
  { item:'Livewood log', inventory: 0},
  { item:'Log', inventory: 0},
  { item:'Long branch', inventory: 0},
  { item:'Long rat tail', inventory: 0},
  { item:'Metal scraps', inventory: 0},
  { item:'Mortar and pestle', inventory: 0},
  { item:'Nails', inventory: 0},
  { item:'Needle', inventory: 0},
  { item:'Needle and thread', inventory: 0},
  { item:'Oil barrel', inventory: 0},
  { item:'Ooze barrel', inventory: 0},
  { item:'Parchment', inventory: 0},
  { item:'Peculiar seed', inventory: 0},
  { item:'Pilgrim shell', inventory: 0},
  { item:'Pixie dust', inventory: 0},
  { item:'Plate', inventory: 0},
  { item:'Plate scraps', inventory: 0},
  { item:'Puppet bead', inventory: 0},
  { item:'Quill', inventory: 0},
  { item:'Rabbit\'s paw', inventory: 0},
  { item:'Rat\'s tail', inventory: 0},
  { item:'Red fabric dye', inventory: 0},
  { item:'Ripped-off dwarven face', inventory: 0},
  { item:'Ripped-off elven face', inventory: 0},
  { item:'Ripped-off human face', inventory: 0},
  { item:'Ripped-off lizard face', inventory: 0},
  { item:'Rope', inventory: 0},
  { item:'Scale scraps', inventory: 0},
  { item:'Shadow essence', inventory: 0},
  { item:'Sharp piece of metal', inventory: 0},
  { item:'Sharp rock', inventory: 0},
  { item:'Sharp tooth', inventory: 0},
  { item:'Short stick', inventory: 0},
  { item:'Silver cup', inventory: 0},
  { item:'Silver glass', inventory: 0},
  { item:'Silver lever shaft', inventory: 0},
  { item:'Sinew', inventory: 0},
  { item:'Skull', inventory: 0},
  { item:'Slime', inventory: 0},
  { item:'Smokescreen arrowhead', inventory: 0},
  { item:'Soap', inventory: 0},
  { item:'Sovereign\'s orb', inventory: 0},
  { item:'Stardust', inventory: 0},
  { item:'Starfish', inventory: 0},
  { item:'Thread', inventory: 0},
  { item:'Tongs', inventory: 0},
  { item:'Tooth', inventory: 0},
  { item:'Tormented soul', inventory: 0},
  { item:'Tusk', inventory: 0},
  { item:'Void-touched livewood fragments', inventory: 0},
  { item:'Voidwoken spike', inventory: 0},
  { item:'Water barrel', inventory: 0},
  { item:'Water essence', inventory: 0},
  { item:'Wooden figurine', inventory: 0},
  { item:'Wool', inventory: 0},
  { item:'Zaikk\'s talo', inventory: 0},
];

const myItems = document.getElementById('items');

function addItems(index) {
  itemArray[index].inventory++;
  renderList();
}

function removeItems(index) {
  if (itemArray[index].inventory > 0) {
    itemArray[index].inventory--;
    renderList();
  }
}

function renderList() {
  myItems.innerHTML = '';

  itemArray.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.item}, ${item.inventory}`;

    const decreaseButton = document.createElement('button');
    decreaseButton.textContent = '-';
    decreaseButton.addEventListener('click', () => removeItems(index));
    listItem.appendChild(decreaseButton);

    const increaseButton = document.createElement('button');
    increaseButton.textContent = '+';
    increaseButton.addEventListener('click', () => addItems(index));
    listItem.appendChild(increaseButton);

    myItems.appendChild(listItem);
  });
}

renderList();