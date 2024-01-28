let itemArray = [
  { item:'Jar of mind maggots', img: "photos/items/A_Jar_of_Mind_Maggots.webp", inventory: 0},
  { item:'Ancient human skull', img: "/photos/items/Skull.webp", inventory: 0},
  { item:'Animal hide', img: "photos/items/Animal_Hide.webp", inventory: 0},
  { item:'Air essence', img: "photos/items/Air_Essence.webp", inventory: 0},
  { item:'Arrow', img: "photos/items/Arrow.webp", inventory: 0},
  { item:'Animal scales', img: "photos/items/Animal_Scales.webp", inventory: 0},
  { item:'Barrel', img: "photos/items/Barrel.webp", inventory: 0},
  { item:'Arthropod leg', img: "photos/items/Arthropod_Leg.webp", inventory: 0},
  { item:'Bone', img: "photos/items/Bone.webp", inventory: 0},
  { item:'Blessed water barrel', img: "photos/items/Blessed_Water_Barrel.webp", inventory: 0},
  { item:'Broad skull', img: "photos/items/Skull.webp", inventory: 0},
  { item:'Bowstring', img: "photos/items/Bowstring.webp", inventory: 0},
  { item:'Bucket', img: "photos/items/Bucket.webp", inventory: 0},
  { item:'Broken bottle', img: "photos/items/Broken_Bottle.webp", inventory: 0},
  { item:'Chicken foot', img: "photos/items/Chicken_Foot.webp", inventory: 0},
  { item:'Bucket with water', img: "photos/items/Bucket_With_Water.webp", inventory: 0},
  { item:'Cloth scraps', img: "photos/items/Cloth_Scraps.webp", inventory: 0},
  { item:'Claw', img: "photos/items/Claw.webp", inventory: 0},
  { item:'Crab\'s claw', img: "photos/items/Crab's_Claw.webp", inventory: 0},
  { item:'Cooking pot', img: "photos/items/Cooking_Pot.webp", inventory: 0},
  { item:'Deathfog barrel', img: "photos/items/Deathfog_Barrel.webp", inventory: 0},
  { item:'Cursed oil barrel', img: "photos/items/Cursed_Oil_Barrel.webp", inventory: 0},
  { item:'Dirty socks', img: "photos/items/Dirty_Socks.webp", inventory: 0},
  { item:'Deathfog crate', img: "photos/items/Deathfog_Crate.webp", inventory: 0},
  { item:'Empty bottle', img: "photos/items/Empty_Bottle.webp", inventory: 0},
  { item:'Earth essence', img: "photos/items/Earth_Essence.webp", inventory: 0},
  { item:'Empty cup', img: "photos/items/Empty_Cup.webp", inventory: 0},
  { item:'Empty canister', img: "photos/items/Empty_Canister.webp", inventory: 0},
  { item:'Empty grenade', img: "photos/items/Empty_Grenade.webp", inventory: 0},
  { item:'Empty flask', img: "photos/items/Empty_Flask.webp", inventory: 0},
  { item:'Empty mug', img: "photos/items/Empty_Mug.webp", inventory: 0},
  { item:'Empty honey jar', img: "photos/items/Honey_Jar.webp", inventory: 0},
  { item:'Empty potion bottle', img: "photos/items/Empty_Potion_Bottle.webp", inventory: 0},
  { item:'Empty perfume bottle', img: "photos/items/Empty_Perfume_Bottle.webp", inventory: 0},
  { item:'Eternal plate', img: "photos/items/Eternal_Plate.webp", inventory: 0},
  { item:'Eternal artefact', img: "photos/items/Eternal_Artefact.webp", inventory: 0},
  { item:'Fancy feather', img: "photos/items/Feather.webp", inventory: 0},
  { item:'Eye', img: "photos/items/Eye.webp", inventory: 0},
  { item:'Feather', img: "photos/items/Feather.webp", inventory: 0},
  { item:'Fang', img: "photos/items/Fang.webp", inventory: 0},
  { item:'Fish bone', img: "photos/items/Fish_Bone.webp", inventory: 0},
  { item:'Fire essence', img: "photos/items/Fire_Essence.webp", inventory: 0},
  { item:'Gold cup', img: "photos/items/Gold_Cup.webp", inventory: 0},
  { item:'Glowing idol of rebirth', img: "photos/items/Glowing_Idol_of_Rebirth.webp", inventory: 0},
  { item:'Hair', img: "photos/items/Hair.webp", inventory: 0},
  { item:'Goo', img: "photos/items/Goo.webp", inventory: 0},
  { item:'Ink pot and quill', img: "photos/items/Ink_Pot_and_Quill.webp", inventory: 0},
  { item:'Ink pot', img: "photos/items/Ink_Pot.webp", inventory: 0},
  { item:'Jawless skull', img: "photos/items/Skull.webp", inventory: 0},
  { item:'Intestines', img: "photos/items/Intestines.webp", inventory: 0},
  { item:'Large tusk', img: "photos/items/Tusk.webp", inventory: 0},
  { item:'Lamp', img: "photos/items/Lamp.webp", inventory: 0},
  { item:'Life essence', img: "photos/items/Life_Essence.webp", inventory: 0},
  { item:'Leather scraps', img: "photos/items/Leather_Scraps.webp", inventory: 0},
  { item:'Livewood log', img: "photos/items/Livewood_Log.webp", inventory: 0},
  { item:'Light golden teaspoon', img: "photos/items/Light_Golden_Teaspoon.webp", inventory: 0},
  { item:'Long branch', img: "photos/items/Long_Branch.webp", inventory: 0},
  { item:'Log', img: "photos/items/Log.webp", inventory: 0},
  { item:'Metal scraps', img: "photos/items/Metal_Scraps.webp", inventory: 0},
  { item:'Long rat tail', img: "photos/items/Rat's_Tail.webp", inventory: 0},
  { item:'Nails', img: "photos/items/Nails.webp", inventory: 0},
  { item:'Mortar and pestle', img: "photos/items/Mortar_and_Pestle.webp", inventory: 0},
  { item:'Needle and thread', img: "photos/items/Needle_and_Thread.webp", inventory: 0},
  { item:'Needle', img: "photos/items/Needle.webp", inventory: 0},
  { item:'Ooze barrel', img: "photos/items/Ooze_Barrel.webp", inventory: 0},
  { item:'Oil barrel', img: "photos/items/Oil_barrel.webp", inventory: 0},
  { item:'Peculiar seed', img: "photos/items/Peculiar_Seed.webp", inventory: 0},
  { item:'Parchment', img: "photos/items/Parchment.webp", inventory: 0},
  { item:'Pixie dust', img: "photos/items/Pixie_Dust.webp", inventory: 0},
  { item:'Pilgrim shell', img: "photos/items/Pilgrim_Shell.webp", inventory: 0},
  { item:'Plate scraps', img: "photos/items/Plate_Scraps.webp", inventory: 0},
  { item:'Plate', img: "photos/items/Plate.webp", inventory: 0},
  { item:'Quill', img: "photos/items/Quill.webp", inventory: 0},
  { item:'Puppet bead', img: "photos/items/Ruby.webp", inventory: 0},
  { item:'Rat\'s tail', img: "photos/items/Rat's_Tail.webp", inventory: 0},
  { item:'Rabbit\'s paw', img: "photos/items/Rabbit's_Paw.webp", inventory: 0},
  { item:'Ripped-off dwarven face', img: "photos/items/Ripped-Off_Dwarven_Face.webp", inventory: 0},
  { item:'Red fabric dye', img: "photos/items/Red_Fabric_Dye.webp", inventory: 0},
  { item:'Ripped-off human face', img: "photos/items/Ripped-Off_Human_Face.webp", inventory: 0},
  { item:'Ripped-off elven face', img: "photos/items/Ripped-Off_Elven_Face.webp", inventory: 0},
  { item:'Rope', img: "photos/items/Rope.webp", inventory: 0},
  { item:'Ripped-off lizard face', img: "photos/items/Ripped-Off_Lizard_Face.webp", inventory: 0},
  { item:'Shadow essence', img: "photos/items/Shadow_Essence.webp", inventory: 0},
  { item:'Scale scraps', img: "photos/items/Scale_Scraps.webp", inventory: 0},
  { item:'Sharp rock', img: "photos/items/Sharp_Rock.webp", inventory: 0},
  { item:'Sharp piece of metal', img: "photos/items/Sharp_Piece_of_Metal.webp", inventory: 0},
  { item:'Short stick', img: "photos/items/Short_Stick.webp", inventory: 0},
  { item:'Sharp tooth', img: "photos/items/Tooth.webp", inventory: 0},
  { item:'Silver glass', img: "photos/items/Silver_Glass.webp", inventory: 0},
  { item:'Silver cup', img: "photos/items/Silver_Cup.webp", inventory: 0},
  { item:'Sinew', img: "photos/items/Bowstring.webp", inventory: 0},
  { item:'Silver lever shaft', img: "photos/items/Silver_Lever_Shaft.webp", inventory: 0},
  { item:'Slime', img: "photos/items/Slime.webp", inventory: 0},
  { item:'Skull', img: "photos/items/Skull.webp", inventory: 0},
  { item:'Soap', img: "photos/items/Soap.webp", inventory: 0},
  { item:'Smokescreen arrowhead', img: "photos/items/Smokescreen_Arrowhead.webp", inventory: 0},
  { item:'Stardust', img: "photos/items/Stardust.webp", inventory: 0},
  { item:'Sovereign\'s orb', img: "photos/items/Sovereign's_Orb.webp", inventory: 0},
  { item:'Thread', img: "photos/items/Thread.webp", inventory: 0},
  { item:'Starfish', img: "photos/items/Starfish.webp", inventory: 0},
  { item:'Tooth', img: "photos/items/Tooth.webp", inventory: 0},
  { item:'Tongs', img: "photos/items/Tongs.webp", inventory: 0},
  { item:'Tusk', img: "photos/items/Tusk.webp", inventory: 0},
  { item:'Tormented soul', img: "photos/items/Tormented_Soul.webp", inventory: 0},
  { item:'Voidwoken spike', img: "photos/items/Voidwoken_Spike.webp", inventory: 0},
  { item:'Void-touched livewood fragments', img: "photos/items/Void-Touched_Livewood_Fragments.webp", inventory: 0},
  { item:'Water barrel', img: "photos/items/Water_Barrel.webp", inventory: 0},
  { item:'Water essence', img: "photos/items/Water_Essence.webp", inventory: 0},
  { item:'Wooden figurine', img: "photos/items/Wooden_Figurine.webp", inventory: 0},
  { item:'Wool', img: "photos/items/Wool.webp", inventory: 0},
  { item:'Zaikk\'s talon', img: "photos/items/Zaikk's_Talon.webp", inventory: 0},
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

    const imgElement = document.createElement('img');
    imgElement.src = item.img;
    imgElement.alt = item.item;
    imgElement.style.width = '30px';
    listItem.appendChild(imgElement);

    const itemText = document.createElement('span');
    itemText.textContent = item.item;
    listItem.appendChild(itemText);

    const decreaseButton = document.createElement('button');
    decreaseButton.textContent = '-';
    decreaseButton.addEventListener('click', () => removeItems(index));
    listItem.appendChild(decreaseButton);

    const inventoryText = document.createElement('span');
    inventoryText.textContent = item.inventory;
    listItem.appendChild(inventoryText);

    const increaseButton = document.createElement('button');
    increaseButton.textContent = '+';
    increaseButton.addEventListener('click', () => addItems(index));
    listItem.appendChild(increaseButton);

    myItems.appendChild(listItem);
  });
}

renderList();