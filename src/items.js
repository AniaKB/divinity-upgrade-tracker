let itemArray = [
  { item: 'Air essence', img: 'photos/items/Air_Essence.webp', inventory: 0 },
  { item: 'Earth essence', img: 'photos/items/Earth_Essence.webp', inventory: 0 },
  { item: 'Water essence', img: 'photos/items/Water_Essence.webp', inventory: 0 },
  { item: 'Fire essence', img: 'photos/items/Fire_Essence.webp', inventory: 0 },
  { item: 'Shadow essence', img: 'photos/items/Shadow_Essence.webp', inventory: 0 },
  { item: 'Life essence', img: 'photos/items/Life_Essence.webp', inventory: 0 },
  { item: 'Jar of mind maggots', img: 'photos/items/A_Jar_of_Mind_Maggots.webp', inventory: 0 },
  { item: 'Ancient human skull', img: 'photos/items/Ancient_Human_Skull.webp', inventory: 0 },
  { item: 'Skull', img: 'photos/items/Skull.webp', inventory: 0 },
  { item: 'Broad skull', img: 'photos/items/Skull.webp', inventory: 0 },
  { item: 'Jawless skull', img: 'photos/items/Skull.webp', inventory: 0 },
  { item: 'Bone', img: 'photos/items/Bone.webp', inventory: 0 },
  { item: 'Sharp tooth', img: 'photos/items/Tooth.webp', inventory: 0 },
  { item: 'Tooth', img: 'photos/items/Tooth.webp', inventory: 0 },
  { item: 'Eye', img: 'photos/items/Eye.webp', inventory: 0 },
  { item: 'Intestines', img: 'photos/items/Intestines.webp', inventory: 0 },
  { item: 'Sinew', img: 'photos/items/Bowstring.webp', inventory: 0 },
  { item: 'Animal scales', img: 'photos/items/Animal_Scales.webp', inventory: 0 },
  { item: 'Animal hide', img: 'photos/items/Animal_Hide.webp', inventory: 0 },
  { item: 'Cloth scraps', img: 'photos/items/Cloth_Scraps.webp', inventory: 0 },
  { item: 'Leather scraps', img: 'photos/items/Leather_Scraps.webp', inventory: 0 },
  { item: 'Plate scraps', img: 'photos/items/Plate_Scraps.webp', inventory: 0 },
  { item: 'Metal scraps', img: 'photos/items/Metal_Scraps.webp', inventory: 0 },
  { item: 'Scale scraps', img: 'photos/items/Scale_Scraps.webp', inventory: 0 },
  { item: 'Needle and thread', img: 'photos/items/Needle_and_Thread.webp', inventory: 0 },
  { item: 'Needle', img: 'photos/items/Needle.webp', inventory: 0 },
  { item: 'Thread', img: 'photos/items/Thread.webp', inventory: 0 },
  { item: 'Wool', img: 'photos/items/Wool.webp', inventory: 0 },
  { item: 'Barrel', img: 'photos/items/Barrel.webp', inventory: 0 },
  { item: 'Arthropod leg', img: 'photos/items/Arthropod_Leg.webp', inventory: 0 },
  { item: 'Blessed water barrel', img: 'photos/items/Blessed_Water_Barrel.webp', inventory: 0 },
  { item: 'Bucket', img: 'photos/items/Bucket.webp', inventory: 0 },
  { item: 'Bucket with water', img: 'photos/items/Bucket_With_Water.webp', inventory: 0 },
  { item: 'Broken bottle', img: 'photos/items/Broken_Bottle.webp', inventory: 0 },
  { item: 'Chicken foot', img: 'photos/items/Chicken_Foot.webp', inventory: 0 },
  { item: 'Claw', img: 'photos/items/Claw.webp', inventory: 0 },
  { item: 'Crab\'s claw', img: 'photos/items/Crab\'s_Claw.webp', inventory: 0 },
  { item: 'Cooking pot', img: 'photos/items/Cooking_Pot.webp', inventory: 0 },
  { item: 'Deathfog barrel', img: 'photos/items/no icon.png', inventory: 0 },
  { item: 'Cursed oil barrel', img: 'photos/items/no icon.png', inventory: 0 },
  { item: 'Ooze barrel', img: 'photos/items/Ooze_Barrel.webp', inventory: 0 },
  { item: 'Oil barrel', img: 'photos/items/Oil_barrel.webp', inventory: 0 },
  { item: 'Water barrel', img: 'photos/items/Water_Barrel.webp', inventory: 0 },
  { item: 'Dirty socks', img: 'photos/items/Dirty_Socks.webp', inventory: 0 },
  { item: 'Deathfog crate', img: 'photos/items/no icon.png', inventory: 0 },
  { item: 'Empty bottle', img: 'photos/items/Empty_Bottle.webp', inventory: 0 },
  { item: 'Empty cup', img: 'photos/items/Empty_Cup.webp', inventory: 0 },
  { item: 'Empty canister', img: 'photos/items/Empty_Canister.webp', inventory: 0 },
  { item: 'Empty grenade', img: 'photos/items/Empty_Grenade.webp', inventory: 0 },
  { item: 'Empty flask', img: 'photos/items/Empty_Flask.webp', inventory: 0 },
  { item: 'Empty mug', img: 'photos/items/Empty_Mug.webp', inventory: 0 },
  { item: 'Empty Jar', img: 'photos/items/Jar.webp', inventory: 0 },
  { item: 'Empty potion bottle', img: 'photos/items/Empty_Potion_Bottle.webp', inventory: 0 },
  { item: 'Empty perfume bottle', img: 'photos/items/Empty_Perfume_Bottle.webp', inventory: 0 },
  { item: 'Eternal plate', img: 'photos/items/Eternal_Plate.webp', inventory: 0 },
  { item: 'Eternal artefact', img: 'photos/items/Eternal_Artefact.webp', inventory: 0 },
  { item: 'Fish bone', img: 'photos/items/Fish_Bone.webp', inventory: 0 },
  { item: 'Glowing idol of rebirth', img: 'photos/items/Glowing_Idol_of_Rebirth.webp', inventory: 0 },
  { item: 'Hair', img: 'photos/items/Hair.webp', inventory: 0 },
  { item: 'Goo', img: 'photos/items/Goo.webp', inventory: 0 },
  { item: 'Fancy feather', img: 'photos/items/Feather.webp', inventory: 0 },
  { item: 'Feather', img: 'photos/items/Feather.webp', inventory: 0 },
  { item: 'Ink pot and quill', img: 'photos/items/Ink_Pot_and_Quill.webp', inventory: 0 },
  { item: 'Ink pot', img: 'photos/items/Ink_Pot.webp', inventory: 0 },
  { item: 'Quill', img: 'photos/items/Quill.webp', inventory: 0 },
  { item: 'Parchment', img: 'photos/items/Parchment.webp', inventory: 0 },
  { item: 'Sheet of Paper', img: 'photos/items/Sheet_of_Paper.webp', inventory: 0 },
  { item: 'Large tusk', img: 'photos/items/Tusk.webp', inventory: 0 },
  { item: 'Tusk', img: 'photos/items/Tusk.webp', inventory: 0 },
  { item: 'Fang', img: 'photos/items/Fang.webp', inventory: 0 },
  { item: 'Antler', img: 'photos/items/Antler.webp', inventory: 0 },
  { item: 'Lamp', img: 'photos/items/no icon.png', inventory: 0 },
  { item: 'Light golden teaspoon', img: 'photos/items/Light_Golden_Teaspoon.webp', inventory: 0 },
  { item: 'Long branch', img: 'photos/items/Long_Branch.webp', inventory: 0 },
  { item: 'Log', img: 'photos/items/Log.webp', inventory: 0 },
  { item: 'Long rat tail', img: 'photos/items/Rat\'s_Tail.webp', inventory: 0 },
  { item: 'Rat\'s tail', img: 'photos/items/Rat\'s_Tail.webp', inventory: 0 },
  { item: 'Rabbit\'s paw', img: 'photos/items/Rabbit\'s_Paw.webp', inventory: 0 },
  { item: 'Nails', img: 'photos/items/Nails.webp', inventory: 0 },
  { item: 'Mortar and pestle', img: 'photos/items/Mortar_and_Pestle.webp', inventory: 0 },
  { item: 'Peculiar seed', img: 'photos/items/Peculiar_Seed.webp', inventory: 0 },
  { item: 'Pixie dust', img: 'photos/items/Pixie_Dust.webp', inventory: 0 },
  { item: 'Bone dust', img: 'photos/items/Bonedust.webp', inventory: 0 },
  { item: 'Stardust', img: 'photos/items/Stardust.webp', inventory: 0 },
  { item: 'Moondust', img: 'photos/items/Pouch.webp', inventory: 0 },
  { item: 'Pouch', img: 'photos/items/Pouch.webp', inventory: 0 },
  { item: 'Pilgrim shell', img: 'photos/items/Pilgrim_Shell.webp', inventory: 0 },
  { item: 'Ripped-off dwarven face', img: 'photos/items/Ripped-Off_Dwarven_Face.webp', inventory: 0 },
  { item: 'Ripped-off human face', img: 'photos/items/Ripped-Off_Human_Face.webp', inventory: 0 },
  { item: 'Ripped-off elven face', img: 'photos/items/Ripped-Off_Elven_Face.webp', inventory: 0 },
  { item: 'Rope', img: 'photos/items/Rope.webp', inventory: 0 },
  { item: 'Ripped-off lizard face', img: 'photos/items/Ripped-Off_Lizard_Face.webp', inventory: 0 },
  { item: 'Sharp rock', img: 'photos/items/Sharp_Rock.webp', inventory: 0 },
  { item: 'Tenebrium Ore', img: 'photos/items/Tenebrium_Ore.webp', inventory: 0 },
  { item: 'Tenebrium Bar', img: 'photos/items/Tenebrium_Bar.webp', inventory: 0 },
  { item: 'Steel Bar', img: 'photos/items/Steel_Bar.webp', inventory: 0 },
  { item: 'Silver Ore', img: 'photos/items/Silver_Ore.webp', inventory: 0 },
  { item: 'Moonstone', img: 'photos/items/Moonstone.webp', inventory: 0 },
  { item: 'Ruby', img: 'photos/items/Ruby.webp', inventory: 0 },
  { item: 'Pearl', img: 'photos/items/Pearl.webp', inventory: 0 },
  { item: 'Sharp piece of metal', img: 'photos/items/Sharp_Piece_of_Metal.webp', inventory: 0 },
  { item: 'Short stick', img: 'photos/items/Short_Stick.webp', inventory: 0 },
  { item: 'Drudanae', img: 'photos/items/Drudanae.webp', inventory: 0 },
  { item: 'Distinctive Drudanae', img: 'photos/items/Distinctive_Drudanae.webp', inventory: 0 },
  { item: 'Puffball', img: 'photos/items/Puffball.webp', inventory: 0 },
  { item: 'Distinctive Puffball', img: 'photos/items/Distinctive_Puffball.webp', inventory: 0 },
  { item: 'Chanterelle', img: 'photos/items/Chanterelle.webp', inventory: 0 },
  { item: 'Jellyroom', img: 'photos/items/Jellyroom.webp', inventory: 0 },
  { item: 'Earth Tongue Mushroom', img: 'photos/items/Earth_Tongue_Mushroom.webp', inventory: 0 },
  { item: 'Amadouvier', img: 'photos/items/Amadouvier.webp', inventory: 0 },
  { item: 'Distinctive Amadouvier', img: 'photos/items/Distinctive_Amadouvier.webp', inventory: 0 },
  { item: 'Amethyst Deceiver', img: 'photos/items/Amethyst_Deceiver.webp', inventory: 0 },
  { item: 'Trumpet of Death', img: 'photos/items/Trumpet_of_Death.webp', inventory: 0 },
  { item: 'Distinctive Trumpet of Death', img: 'photos/items/Distinctive_Trumpet_of_Death.webp', inventory: 0 },
  { item: 'Wizard\'s Hat Agaric', img: 'photos/items/Wizard\'s_Hat_Agaric.webp', inventory: 0 },
  { item: 'Distinctive Wizard\'s Hat Agaric', img: 'photos/items/Distinctive_Wizard\'s_Hat_Agaric.webp', inventory: 0 },
  { item: 'Farhangite', img: 'photos/items/Farhangite.webp', inventory: 0 },
  { item: 'Distinctive Farhangite', img: 'photos/items/Distinctive_Farhangite.webp', inventory: 0 },
  { item: 'Calocera', img: 'photos/items/Calocera.webp', inventory: 0 },
  { item: 'Boletus', img: 'photos/items/Boletus.webp', inventory: 0 },
  { item: 'Distinctive Boletus', img: 'photos/items/Distinctive_Boletus.webp', inventory: 0 },
  { item: 'Guepinia Mushroom', img: 'photos/items/Guepinia.webp', inventory: 0 },
  { item: 'Penny Bun Mushroom', img: 'photos/items/Penny_Bun_Mushroom.webp', inventory: 0 },
  { item: 'Yarrow Flower', img: 'photos/items/Yarrow_Flower.webp', inventory: 0 },
  { item: 'Blood Rose', img: 'photos/items/Blood_Rose.webp', inventory: 0 },
  { item: 'Augmentor', img: 'photos/items/Augmentor.webp', inventory: 0 },
  { item: 'Whisperwood', img: 'photos/items/Whisperwood.webp', inventory: 0 },
  { item: 'Distinctive Whisperwood', img: 'photos/items/Distinctive_Whisperwood.webp', inventory: 0 },
  { item: 'Black Tea Leaves', img: 'photos/items/tea_Herbs.png', inventory: 0 },
  { item: 'Green Tea Leaves', img: 'photos/items/tea_Herbs.png', inventory: 0 },
  { item: 'White Tea Leaves', img: 'photos/items/tea_Herbs.png', inventory: 0 },
  { item: 'Distinctive Tea', img: 'photos/items/Distinctive_Tea.webp', inventory: 0 },
  { item: 'Apple', img: 'photos/items/apple.png', inventory: 0 },
  { item: 'Orange', img: 'photos/items/orange.jpg', inventory: 0 },
  { item: 'Pear', img: 'photos/items/pear.png', inventory: 0 },
  { item: 'Watermelon', img: 'photos/items/watermelon.jpg', inventory: 0 },
  { item: 'Pepper', img: 'photos/items/pepper.png', inventory: 0 },
  { item: 'Carrot', img: 'photos/items/carrot.jpg', inventory: 0 },
  { item: 'Onion', img: 'photos/items/onion.png', inventory: 0 },
  { item: 'Tomato', img: 'photos/items/tomato.png', inventory: 0 },
  { item: 'Pumpkin', img: 'photos/items/pumpkin.jpg', inventory: 0 },
  { item: 'Wheat', img: 'photos/items/wheat.png', inventory: 0 },
  { item: 'Cheese', img: 'photos/items/cheese.png', inventory: 0 },
  { item: 'Egg', img: 'photos/items/egg.jpg', inventory: 0 },
  { item: 'Ham', img: 'photos/items/ham.png', inventory: 0 },
  { item: 'Plaice', img: 'photos/items/plaice.png', inventory: 0 },
  { item: 'Mackerel', img: 'photos/items/mackerel.png', inventory: 0 },
  { item: 'Herring', img: 'photos/items/herring.png', inventory: 0 },
  { item: 'Chub Fish', img: 'photos/items/chub_fish.png', inventory: 0 },
  { item: 'Red Snapper', img: 'photos/items/red_snapper.png', inventory: 0 },
  { item: 'Raw Rabbit Meat', img: 'photos/items/raw_rabbit_meat.jpg', inventory: 0 },
  { item: 'Raw Bird Leg', img: 'photos/items/raw_bird_leg.png', inventory: 0 },
  { item: 'Raw Lumpy Giblets', img: 'photos/items/raw_lumpy_giblets.png', inventory: 0 },
  { item: 'Raw Mutton', img: 'photos/items/raw_mutton.png', inventory: 0 },
  { item: 'Raw Red Meat', img: 'photos/items/raw_red_meat.png', inventory: 0 },
  { item: 'Raw Ribs', img: 'photos/items/Raw_Ribs.png', inventory: 0 },
  { item: 'Raw Slice of Meat', img: 'photos/items/raw_slice_of_meat.png', inventory: 0 },
  { item: 'Gold cup', img: 'photos/items/Gold_Cup.webp', inventory: 0 },
  { item: 'Silver glass', img: 'photos/items/Silver_Glass.webp', inventory: 0 },
  { item: 'Silver cup', img: 'photos/items/Silver_Cup.webp', inventory: 0 },
  { item: 'Silver lever shaft', img: 'photos/items/silver lever shaft.png', inventory: 0 },
  { item: 'Slime', img: 'photos/items/Slime.webp', inventory: 0 },
  { item: 'Soap', img: 'photos/items/Soap.webp', inventory: 0 },
  { item: 'Sovereign\'s orb', img: 'photos/items/Sovereign\'s_Orb.webp', inventory: 0 },
  { item: 'Starfish', img: 'photos/items/Starfish.webp', inventory: 0 },
  { item: 'Tongs', img: 'photos/items/Tongs.webp', inventory: 0 },
  { item: 'Tormented soul', img: 'photos/items/Tormented_Soul.webp', inventory: 0 },
  { item: 'Voidwoken spike', img: 'photos/items/Voidwoken_Spike.webp', inventory: 0 },
  { item: 'Livewood log', img: 'photos/items/Livewood_Log.webp', inventory: 0 },
  { item: 'Void-touched livewood fragments', img: 'photos/items/Void-Touched_Livewood_Fragments.webp', inventory: 0 },
  { item: 'Wooden figurine', img: 'photos/items/Wooden_Figurine.webp', inventory: 0 },
  { item: 'Zaikk\'s talon', img: 'photos/items/Zaikk\'s_Talon.webp', inventory: 0 },
  { item: 'Blank Air Scroll', img: 'photos/items/Blank_Air_Scroll.webp', inventory: 0 },
  { item: 'Blank SkillBook Air', img: 'photos/items/Blank_Air_Skillbook.webp', inventory: 0 },
  { item: 'Blank Earth Scroll', img: 'photos/items/Blank_Earth_Scroll.webp', inventory: 0 },
  { item: 'Blank SkillBook Earth', img: 'photos/items/Blank_Skillbook_Earth.webp', inventory: 0 },
  { item: 'Blank Fire Scroll', img: 'photos/items/Blank_Fire_Scroll.webp', inventory: 0 },
  { item: 'Blank SkillBook Fire', img: 'photos/items/Blank_Skillbook_Fire.webp', inventory: 0 },
  { item: 'Blank Water Scroll', img: 'photos/items/Blank_Water_Scroll.webp', inventory: 0 },
  { item: 'Blank SkillBook Water', img: 'photos/items/Blank_Skillbook_Water.webp', inventory: 0 },
  { item: 'Blank Witchcraft Scroll', img: 'photos/items/Blank_Witchcraft_Scroll.webp', inventory: 0 },
  { item: 'Blank SkillBook Witchcraft', img: 'photos/items/Blank_Skillbook_Witchcraft.webp', inventory: 0 },
  { item: 'Arrow', img: 'photos/items/Arrow.webp', inventory: 0 },
  { item: 'Arrow Shaft', img: 'photos/items/ArrowShaft.webp', inventory: 0 },
  { item: 'Bowstring', img: 'photos/items/Bowstring.webp', inventory: 0 },
  { item: 'Smokescreen arrowhead', img: 'photos/items/Smokescreen_Arrowhead.webp', inventory: 0 },
  { item: 'Red fabric dye', img: 'photos/items/Red_Fabric_Dye.webp', inventory: 0 },
  { item: 'Yellow fabric dye', img: 'photos/items/Yellow_Fabric_Dye.webp', inventory: 0 },
  { item: 'Green fabric dye', img: 'photos/items/Green_Fabric_Dye.webp', inventory: 0 },
  { item: 'Blue fabric dye', img: 'photos/items/Yellow_Fabric_Dye.webp', inventory: 0 },
  { item: 'Black fabric dye', img: 'photos/items/Black_Fabric_Dye.webp', inventory: 0 },
  { item: 'White fabric dye', img: 'photos/items/White_Fabric_Dye.webp', inventory: 0 },
  { item: 'Purple fabric dye', img: 'photos/items/Purple_Fabric_Dye.webp', inventory: 0 },
  { item: 'Mysterious Fabric Dye', img: 'photos/items/Mysterious_Fabric_Dye.webp', inventory: 0 },
];

const myItems = document.getElementById('items');

function addItems (index) {
  itemArray[index].inventory++;
  renderList();
}

function removeItems (index) {
  if (itemArray[index].inventory > 0) {
    itemArray[index].inventory--;
    renderList();
  }
}

function renderList () {
  myItems.innerHTML = '';

  itemArray.forEach((item, index) => {
    const listItem = document.createElement('li');

    const imgElement = document.createElement('img');
    imgElement.src = item.img;
    imgElement.alt = item.item;
    imgElement.style.width = '30px';
    listItem.appendChild(imgElement);

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
    console.log(itemArray[0]);

    const itemText = document.createElement('span');
    itemText.textContent = item.item;
    itemText.className = 'item-text';
    listItem.appendChild(itemText);

    myItems.appendChild(listItem);
  });
}

renderList();
