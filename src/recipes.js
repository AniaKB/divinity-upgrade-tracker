let recipes = {
  armor: [
    {
      craft: 'Apple Juice',
      img: 'photos/items/make/Apple_Juice.webp',
      description: 'Heals 10%, 10% Poison Resistance, Duration 6 Turns.',
      ingredients: { 'Apple': 1, 'Empty Cup': 1 }
    },
    {
      craft: 'Armour of the Eternals',
      img: 'photos/items/make/Armor_of_the_Eternals.webp',
      description: '',
      ingredients: { 'Eternal Artefact': 1, 'Eternal Plate': 1, 'Metal Scraps': 1, 'Source Orb': 1 }
    },
    {
      craft: 'Dwarven Mask of the Shapeshifter',
      img: 'photos/items/make/Dwarven_Mask_of_the_Shapeshifter.webp',
      description: '',
      ingredients: { 'Ripped-Off Dwarven Face': 1, 'Source Orb': 1 }
    },
    {
      craft: 'Elven Mask of the Shapeshifter',
      img: 'photos/items/make/Elven_Mask_of_the_Shapeshifter.webp',
      description: '',
      ingredients: { 'Ripped-Off Elven Face': 1, 'Source Orb': 1 }
    },
    {
      craft: 'Human Mask of the Shapeshifter',
      img: 'photos/items/make/Human_Mask_of_the_Shapeshifter.webp',
      description: '',
      ingredients: { 'Ripped-Off Human Face': 1, 'Source Orb':1 }
    },
    {
      craft: 'Lizard Mask of the Shapeshifter',
      img: 'photos/items/make/Lizard_Mask_of_the_Shapeshifter.webp',
      description: '',
      ingredients: { 'Ripped-Off Lizard Face': 1, 'Source Orb': 1 }
    },
    {
      craft: 'Mask of the Shapeshifter',
      img: 'photos/items/make/Mask_of_the_Shapeshifter.webp',
      description: '',
      ingredients: { 'Lizard Mask of the Shapeshifter': 1, 'Human Mask of the Shapeshifter': 1, 'Elven Mask of the Shapeshifter': 1, 'Dwarven Mask of the Shapeshifter': 1, 'Source Orb': 1 }
    },
    {
      craft: 'Cloth Scraps',
      img: 'photos/items/Cloth_Scraps.webp',
      description: '',
      ingredients: { 'Any Cutting Tool': 1, 'Bedlinen': 1 }
    },
    {
      craft: 'Handmade Chain Armour',
      img: 'photos/items/no item.png',
      description: '',
      ingredients: { 'Metal Scraps': 1, 'Needle and Thread': 1 }
    },
    {
      craft: 'Handmade Cloth Shirt',
      img: 'photos/items/make/Stained_Shirt.webp',
      description: '',
      ingredients: { 'Cloth Scraps': 1, 'Needle and Thread': 1 }
    },
    {
      craft: 'Handmade Leather Armour',
      img: 'photos/items/make/Handmade_Armour.webp',
      description: '',
      ingredients: { 'Leather Scraps': 1, 'Needle and Thread': 1 }
    },
    {
      craft: 'Handmade Mage Armour',
      img: 'photos/items/make/Handmade_Mage_Armour.webp',
      description: '',
      ingredients: { 'Cloth Scraps': 1, 'Needle and Thread': 1, 'Pixie Dust': 1 }
    },
    {
      craft: 'Handmade Plate Armour',
      img: 'photos/items/make/Handmade_Armour.webp',
      description: '',
      ingredients: { 'Anvil': 1, 'Plate Scraps': 1 }
    },
    {
      craft: 'Handmade Plate Armour',
      img: 'photos/items/make/Handmade_Armour.webp',
      description: '',
      ingredients: { 'Anvil': 1, 'Any Hammer': 1, 'Plate Scraps': 1 }
    },
    {
      craft: 'Handmade Scale Armour',
      img: 'photos/items/make/Handmade_Scale_Armour.webp',
      description: '',
      ingredients: { 'Anvil': 1, 'Any Hammer': 1, 'Scale Scraps': 1 }
    },
    {
      craft: 'Handmade Shield',
      img: 'photos/items/make/',
      description: '',
      ingredients: { 'Metal Scraps': 1, 'Wood Chips': 1 }
    },
    {
      craft: 'Leather Scraps',
      img: 'photos/items/Leather_Scraps.webp',
      description: '',
      ingredients: { 'Animal Hide': 1, 'Any Knife': 1 }
    },
    {
      craft: 'Needle and Thread',
      img: 'photos/items/Needle_and_Thread.webp',
      description: '',
      ingredients: { 'Needle': 1, 'Thread': 1 }
    },
    {
      craft: 'Yarn',
      img: 'photos/items/yarn.webp',
      description: '',
      ingredients: { 'Wool': 2 }
    }
  ],
  arrows: [
    {
      craft: 'Arrow Shaft',
      img: 'photos/items/Arrow_Shaft.webp',
      description: '',
      ingredients: { 'Any Cutting Tool': 1, 'Short Stick': 1 }
    },
    {
      craft: 'Arrowhead',
      img: 'photos/items/Arrowhead.Webp',
      description: '',
      ingredients: { 'Any Cutting Tool': 1, 'Bone': 1 }
    },
    {
      craft: 'Arrowhead',
      img: 'photos/items/Arrowhead.webp',
      description: '',
      ingredients: { 'Any Cutting Tool': 1,	'Sharp Rock': 1 }
    },
    {
      craft: 'Arrow',
      img: 'photos/items/Arrow.webp',
      description: '',
      ingredients: { 'Arrow Shaft': 1,	'Arrowhead': 1 }
    },
    {
      craft: 'Blessed Water Arrow',
      img: 'photos/items/make/Blessed_Water_Arrow.webp',
      description: '',
      ingredients: { 'Source Orb': 1, 'Water Arrow': 1 }
    },
    {
      craft: 'Blessed Water Arrow',
      img: 'photos/items/make/Blessed_Water_Arrow.webp',
      description: '',
      ingredients: { 'Arrow Shaft': 1, 'Blessed Water Arrowhead': 1 }
    },
    {
      craft: 'Blessed Water Arrow',
      img: 'photos/items/make/Blessed_Water_Arrow.webp',
      description: '',
      ingredients: { 'Arrow': 1, 'Blessed Water Arrowhead': 1 }
    },
    {
      craft: 'Blessed Water Arrowhead',
      img: 'photos/items/make/Blessed_Water_Arrowhead.webp',
      description: '',
      ingredients: { 'Source Orb': 1, 'Water Arrowhead': 1 },
    },
    {
      craft: 'Charming Arrow',
      img: 'photos/items/make/Charming_Arrow.webp',
      description: 'Set Charmed for 1 Turn. Resisted by Magic Armour. Damage base on basic attack and Finesse.',
      ingredients: { 'Arrow Shaft': 1, 'Charming Arrowhead': 1 }
    },
    {
      craft: 'Charming Arrow',
      img: 'photos/items/make/Charming_Arrow.webp',
      description: 'Set Charmed for 1 Turn. Resisted by Magic Armour. Damage base on basic attack and Finesse.',
      ingredients: { 'Arrow': 1, 'Charming Arrowhead': 1 }
    },
    {
      craft: 'Charming Arrowhead',
      img: 'photos/items/make/Charming_Arrowhead.webp',
      description: '',
      ingredients: { 'Arrowhead': 1, 'Jar of Honey': 1 }
    },
    {
      craft: 'Explosive Arrow',
      img: 'photos/items/make/Explosive_Arrow.webp',
      description: 'Deals fire damage in a 2m radius, Set Burning for 1 Turn. Damage is based on basic attack and Finesse. Resisted by Magic Armour.',
      ingredients: { 'Arrow Shaft': 1, 'Explosive Arrowhead': 1 }
    },
    {
      craft: 'Explosive Arrowhead',
      img: 'photos/items/make/Explosive_Arrowhead.webp',
      description: '',
      ingredients: { 'Any Oil Source': 1, 'Fire Arrowhead': 1 }
    },
    {
      craft: 'Fire Arrow',
      img: 'photos/items/make/Fire_Arrow.webp',
      description: 'Deals fire damage. Set Burning for 1 Turn. Damage is based on basic attack and Finesse. Resisted by Magic Armour.',
      ingredients: { 'Arrow Shaft': 1, 'Fire Arrowhead': 1 }
    },
    {
      craft: 'Fire Arrowhead',
      img: 'photos/items/make/Fire_Arrowhead.webp',
      description: '',
      ingredients: { 'Arrowhead': 1, 'Fire Essence': 1 }
    },
    {
      craft: 'Freezing Arrow',
      img: 'photos/items/make/Freezing_Arrow.webp',
      description: 'Can freeze a target and does water damage. Set Chilled for 2 Turns. Damage is based on basic attack and Finesse. Resisted by Magic Armour.',
      ingredients: { 'Arrow Shaft': 1, 'Freezing Arrowhead': 1 }
    },
    {
      craft: 'Freezing Arrowhead',
      img: 'photos/items/make/Freezing_Arrowhead.webp',
      description: '',
      ingredients: { 'Arrowhead': 1, 'Water Essence': 1 }
    },
    {
      craft: 'Knockdown Arrow',
      img: 'photos/items/make/Knockdown_Arrow.webp',
      description: 'Knocks down target and deals physical damage. Set Knocked Down for 1 Turn. Resisted by Physical Armour.',
      ingredients: { 'Arrow Shaft': 1, 'Knockdown Arrowhead': 1 }
    },
    {
      craft: 'Knockdown Arrowhead',
      img: 'photos/items/make/Knockdown_Arrowhead.webp',
      description: '',
      ingredients: { 'Antler': 1, 'Any Cutting Tool': 1 }
    },
    {
      craft: 'Knockdown Arrowhead',
      img: 'photos/items/make/Knockdown_Arrowhead.webp',
      description: '',
      ingredients: { 'Adult Antler': 1, 'Any Cutting Tool': 1 }
    },
    {
      craft: 'Cursed Fire Arrow',
      img: 'photos/items/make/Cursed_Fire_Arrow.webp',
      description: '',
      ingredients: { 'Fire Arrow': 1, 'Source Orb': 1 }
    },
    {
      craft: 'Cursed Fire Arrowhead',
      img: 'photos/items/make/Cursed_Fire_Arrowhead.webp',
      description: '',
      ingredients: { 'Fire Arrowhead': 1, 'Source Orb': 1 }
    },
    {
      craft: 'Poison Arrow',
      img: 'photos/items/make/Poison_Arrow.webp',
      description: 'Can poison a target. Does Poison damage. Set Poisoned for 3 Turns. Damage is based on basic attack and Finesse. Resisted by Magic Armour.',
      ingredients: { 'Arrow Shaft': 1, 'Poisoned Arrowhead': 1 }
    },
    {
      craft: 'Poisoned Arrowhead',
      img: 'photos/items/make/Poison_Arrowhead.webp',
      description: '',
      ingredients: { 'Any Poison Source': 1, 'Arrowhead': 1 }
    },
    {
      craft: 'Poisoncloud Arrow',
      img: 'photos/items/make/Poisoncloud_Arrow.webp',
      description: '',
      ingredients: { 'Arrow Shaft': 1, 'Poisoncloud Arrowhead': 1 }
    },
    {
      craft: 'Poisoncloud Arrowhead',
      img: 'photos/items/make/Poisoncloud_Arrowhead.webp',
      description: '',
      ingredients: { 'Arrowhead': 1, 'Earth Essence': 1 }
    },
    {
      craft: 'Shocking Arrow',
      img: 'photos/items/make/Shocking_Arrow.webp',
      description: 'Sets Shocked on target. Deals Air Damage. Set Shocked for 1 Turn. Damage is based on your basic attack and Finesse. Resisted by Magic Armour.',
      ingredients: { 'Arrow Shaft': 1, 'Shocking Arrowhead': 1 }
    },
    {
      craft: 'Shocking Arrowhead',
      img: 'photos/items/make/Shocking_Arrowhead.webp',
      description: '',
      ingredients: { 'Air Essence': 1, 'Arrowhead': 1 }
    },
    {
      craft: 'Shocking Arrowhead',
      img: 'photos/items/make/Shocking_Arrowhead.webp',
      description: '',
      ingredients: { 'Any Cutting Tool': 1, 'Any Tooth': 1 }
    },
    {
      craft: 'Short Stick',
      img: 'photos/items/Short_Stick.webp',
      description: '',
      ingredients: { 'Any Cutting Tool': 1, 'Long Branch': 1 }
    },
    {
      craft: 'Slowdown Arrow',
      img: 'photos/items/make/Slowdown_Arrow.webp',
      description: 'Sets slowed for 2 Turns and deals physical damage. Set Slowed for 2 Turns. Damage is based on your basic attack and Finesse. Resisted by Magic Armour.',
      ingredients: { 'Arrow Shaft': 1, 'Slowdown Arrowhead': 1 }
    },
    {
      craft: 'Slowdown Arrowhead',
      img: 'photos/items/make/Slowdown_Arrowhead.webp',
      description: '',
      ingredients: { 'Any Oil Source': 1, 'Arrowhead': 1 }
    },
    {
      craft: 'Smokescreen Arrow',
      img: 'photos/items/make/Smokescreen_Arrow.webp',
      description: '',
      ingredients: { 'Arrow Shaft': 1, 'Smokescreen Arrowhead': 1 }
    },
    {
      craft: 'Smokescreen Arrowhead',
      img: 'photos/items/make/Smokescreen_Arrowhead.webp',
      description: '',
      ingredients: { 'undefined': 1, 'Arrowhead': 1 }
    },
    {
      craft: 'Static Cloud Arrow',
      img: 'photos/items/make/Static_Cloud_Arrow.webp',
      description: 'Creates a static cloud that sets Stun. Does Air Damage. Damage is based on your basic attack and Finesse.',
      ingredients: { 'Arrow Shaft': 1, 'Static Cloud Arrowhead': 1 }
    },
    {
      craft: 'Static Cloud Arrowhead',
      img: 'photos/items/make/Static_Cloud_Arrowhead.webp',
      description: '',
      ingredients: { 'Air Essence': 1, 'Arrowhead': 1 }
    },
    {
      craft: 'Steamcloud Arrow',
      img: 'photos/items/make/Steamcloud_Arrow.webp',
      description: '',
      ingredients: { 'Arrow Shaft': 1, 'Steamcloud Arrowhead': 1 }
    },
    {
      craft: 'Steamcloud Arrowhead',
      img: 'photos/items/make/Steamcloud_Arrowhead.webp',
      description: '',
      ingredients: { 'Any Water Source': 1, 'Fire Arrowhead': 1 }
    },
    {
      craft: 'Water Arrow',
      img: 'photos/items/make/Water_Arrow.webp',
      description: 'Puts out fires. Deals Water Damage. Set Wet for 2 Turns. Damage is based on your basic attack and Finesse.',
      ingredients: { 'Arrow Shaft': 1, 'Water Arrowhead': 1 }
    },
    {
      craft: 'Water Arrowhead',
      img: 'photos/items/make/Water_Arrowhead.webp',
      description: '',
      ingredients: { 'Any Water Source': 1, 'Arrowhead': 1 }
    },
  ],
  food: [
    {
      craft: 'Apple Juice',
      img: 'photos/items/make/Apple_Juice.webp',
      description: 'Heals 10%, 10% Poison Resistance, Duration 6 Turns.',
      ingredients: { 'Apple': 1, 'Empty Cup': 1 }
    },
    {
      craft: 'Apple Pie',
      img: 'photos/items/make/Apple_Pie.webp',
      description: 'Heals 10%, 10% Poison Resistance, Duration 6 Turns.',
      ingredients: { 'Apple Pie Dough': 1, 'Oven': 1 }
    },
    {
      craft: 'Apple Pie Dough',
      img: 'photos/items/make/Apple_Pie_Dough.webp',
      description: '',
      ingredients: { 'Apple': 1, 'Dough': 1 }
    },
    {
      craft: 'Boiled Potato',
      img: 'photos/items/make/.webp',
      description: '1 Constitution, Heals 10%, Duration 6 Turns.',
      ingredients: { 'Cooking Pot': 1, 'Potato': 1 }
    },
    {
      craft: 'Bottle of Beer',
      img: 'photos/items/make/Bottle_of_Beer.webp',
      description: '-1 Intelligence, Heals 20%, Set Drunk for 2 Turns, Duration 5 Turns.',
      ingredients: { 'Beer barrel': 1, 'Empty Bottle': 1 }
    },
    {
      craft: 'Bottle of Water',
      img: 'photos/items/make/Bottle_of_Water.webp',
      description: 'Heals 5%, Duration 5 Turns.',
      ingredients: { 'Any Water Source': 1, 'Empty Bottle': 1 }
    },
    {
      craft: 'Bottle of Wine',
      img: 'photos/items/make/Empty_Bottle.webp',
      description: 'Heals 10%, Set Drunk for 2 Turns, Duration 5 Turns.',
      ingredients: { 'Empty Bottle': 1, 'Wine barrel': 1 }
    },
    {
      craft: 'Bread',
      img: 'photos/items/make/Bread.webp',
      description: '1 Strength, Heals 10%, Duration 3 Turns.',
      ingredients: { 'Dough': 1, 'Oven': 1 }
    },
    {
      craft: 'Cheese Bread',
      img: 'photos/items/make/Cheese_Bread.webp',
      description: '1 Constitution, Heals 10%, Duration 6 Turns.',
      ingredients: { 'Cheese Bread Dough': 1, 'Oven': 1 }
    },
    {
      craft: 'Cheese Bread Dough',
      img: 'photos/items/make/Cheese_Bread_Dough.webp',
      description: '',
      ingredients: { 'Cheese': 1, 'Dough': 1 }
    },
    {
      craft: 'Cold Fries',
      img: 'photos/items/make/cold_Fries.webp',
      description: 'Heals 5%, Duration 6 Turns.',
      ingredients: { 'Any Cutting Tool': 1, 'Potato': 1 }
    },
    {
      craft: 'Cold Mashed Potatoes',
      img: 'photos/items/make/Cold_Mashed_Potatoes.webp',
      description: '',
      ingredients: { 'Any Hammer': 1, 'Potato': 1 }
    },
    {
      craft: 'Cup of Beer',
      img: 'photos/items/make/.webp',
      description: '-1 Intelligence, Heals 20%, Set Drunk for 2 Turns, Duration 5 Turns.',
      ingredients: { 'Beer barrel': 1, 'Empty Cup': 1 }
    },
    {
      craft: 'Cup of Lemonade',
      img: 'photos/items/make/.webp',
      description: '1 Wits, Heals 5% Duration 5 Turns.',
      ingredients: { 'Empty Cup': 1, 'Lemon': 1 }
    },
    {
      craft: 'Cup of Tea',
      img: 'photos/items/make/Cup_of_Tea.webp',
      description: 'Heals 5%, Duration 5 Turns',
      ingredients: { 'Cup of Water': 1, 'Tea Herbs': 1 }
    },
    {
      craft: 'Cup of Water',
      img: 'photos/items/make/Cup_of_Water.webp',
      description: 'Heals 5%, Duration 5 Turns',
      ingredients: { 'Any Water Source': 1, 'Empty Cup': 1 }
    },
    {
      craft: 'Fish Pie',
      img: 'photos/items/make/Fish_Pie.webp',
      description: 'Heals + 10 %, Intelligence + 2 ',
      ingredients: { 'Fish Pie Dough': 1, 'Oven': 1 }
    },
    {
      craft: 'Dinner',
      img: 'photos/items/make/Dinner.webp',
      description: '2 Strength, Heals 20%, Duration 6 Turns.',
      ingredients: { 'Any Raw food': 1, 'Cooking Station': 1 }
    },
    {
      craft: 'Dinner',
      img: 'photos/items/make/Dinner.webp',
      description: '2 Strength, Heals 20%, Duration 6 Turns.',
      ingredients: { 'Any Raw food': 1, 'Oven': 1 }
    },
    {
      craft: 'Dough',
      img: 'photos/items/make/Dough.webp',
      description: '',
      ingredients: { 'Any Water Source': 1, 'Flour': 1 }
    },
    {
      craft: 'Dough',
      img: 'photos/items/make/Dough.webp',
      description: '',
      ingredients: { 'Flour': 1, 'Milk': 1 }
    },
    {
      craft: 'Dough',
      img: 'photos/items/make/Dough.webp',
      description: '',
      ingredients: { 'Eggs': 1, 'Flour': 1, 'Milk': 1 }
    },
    {
      craft: 'Dwarven Stew',
      img: 'photos/items/make/Dwarven_Stew.webp',
      description: '1 Strength, Heals 10%, Duration 6 Turns Any Beersource works.',
      ingredients: { 'Bottle of Beer': 1, 'Dinner': 1 }
    },
    {
      craft: 'Elven Stew',
      img: 'photos/items/make/Elven_Stew.webp',
      description: '2 Finesse, Heals 20%, Duration 6 Turns.',
      ingredients: { 'Dinner': 1, 'Tomato Sauce': 1 }
    },
    {
      craft: 'Fish Pie Dough',
      img: 'photos/items/make/Fish_Pie_Dough.webp',
      description: '',
      ingredients: {/*['Red Snapper', 'Plaice', 'Mackerel', 'Herring', 'Chub Fish']*/'Any Fish': 1, 'Dough': 1 }
    },
    {
      craft: 'Flour',
      img: 'photos/items/make/Flour.webp',
      description: '',
      ingredients: { 'Mortar And Pestle': 1, 'Wheat': 1 }
    },
    {
      craft: 'Glass of Wine',
      img: 'photos/items/make/n.webp',
      description: 'Heals 5%, Set Drunk for 2 Turns, Duration 5 Turns.',
      ingredients: { 'Empty Cup': 1, 'Grapes': 1 }
    },
    {
      craft: 'Glass of Wine',
      img: 'photos/items/make/n.webp',
      description: 'Heals 5%, Set Drunk for 2 Turns, Duration 5 Turns.',
      ingredients: { 'Empty Cup': 1, 'Wine barrel': 1 }
    },
    {
      craft: 'Jar of Honey',
      img: 'photos/items/make/n.webp',
      description: '1 Intelligence, Heals 5%, 15% Poison Resistance.',
      ingredients: { 'Beehive': 1, 'Empty Honey Jar': 1 }
    },
    {
      craft: 'Mashed Potatoes',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Boiled Potato': 1, 'Milk': 1 }
    },
    {
      craft: 'Mashed Potatoes',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Cold Mashed Potatoes': 1, 'Cooking Station': 1 }
    },
    {
      craft: 'Milk',
      img: 'photos/items/make/n.webp',
      description: 'Heals 10%, Duration 6 Turns.',
      ingredients: { 'Empty Cup': 1, 'Milk Jug': 1 }
    },
    {
      craft: 'Milk and Honey',
      img: 'photos/items/make/Milk_and_Honey.webp',
      description: ' 	Heals 15%, 20% Poison Resistance, Set Warm for 2 Turns, Duration 6 Turns.',
      ingredients: { 'Jar of Honey': 1, 'Milk': 1 }
    },
    {
      craft: 'Mug of Beer',
      img: 'photos/items/make/Mug_of_Beer.webp',
      description: '-1 Intelligence, Heals 20%, Set Drunk for 2 Turns, Duration 5 Turns.',
      ingredients: { 'Beer barrel': 1, 'Empty Mug': 1 }
    },
    {
      craft: 'Mug of Lemonade',
      img: 'photos/items/make/n.webp',
      description: '1 Wits, Heals 5% Duration 5 Turns.',
      ingredients: { 'Empty Mug': 1, 'Lemon': 1 }
    },
    {
      craft: 'Mug of Water',
      img: 'photos/items/make/Mug_of_Water.webp',
      description: 'Heals 5%, Duration 5 Turns.',
      ingredients: { 'Any Water Source': 1, 'Empty Mug': 1 }
    },
    {
      craft: 'Orange Juice',
      img: 'photos/items/make/Orange_Juice.webp',
      description: '1 Finesse, Heals 10%, Duration 6 Turns.',
      ingredients: { 'Empty Cup': 1, 'Orange': 1 }
    },
    {
      craft: 'Pizza',
      img: 'photos/items/make/Pizza.webp',
      description: '',
      ingredients: { 'Oven': 1, 'Pizza Dough': 1 }
    },
    {
      craft: 'Pizza Dough',
      img: 'photos/items/make/Pizza_Dough.webp',
      description: '',
      ingredients: { 'Dough': 1, 'Tomato Sauce': 1 }
    },
    {
      craft: 'Porridge',
      img: 'photos/items/make/porridge.png',
      description: '1 Strength, Heals 10%, Duration 6 Turns.',
      ingredients: { 'Milk': 1, 'Wheat': 1 }
    },
    {
      craft: 'Potato Porridge',
      img: 'photos/items/make/Potato_Porridge.webp',
      description: '1 Strength, Heals 10%, Duration 6 Turns.',
      ingredients: { 'Milk': 1, 'Potato': 1 }
    },
    {
      craft: 'Pumpkin Soup',
      img: 'photos/items/make/Pumpin_Soup.webp',
      description: '1 Wits, Heals 10%, Duration 6 Turns.',
      ingredients: { 'Cooking Station': 1, 'Pumpkin': 1 }
    },
    {
      craft: 'Rivellon Fries',
      img: 'photos/items/make/Rivellion_Fries.webp',
      description: '-1 Finesse, 1 Constitution, Heals 15%, Duration 6 Turns',
      ingredients: { 'Cold Fries': 1, 'Cooking Station': 1 }
    },
    {
      craft: 'Tomato Sauce',
      img: 'photos/items/make/Tomato_Sauce.webp',
      description: 'Heals 5%, Poison Resistance 10%, Duration 3 Turns.',
      ingredients: { 'Any Hammer': 1, 'Tomato': 1 }
    },
    {
      craft: 'Poisoned Apple',
      img: 'photos/items/Poisoned_Apple.webp',
      description: 'Deals 8 Poison damage, rendering it unsafe for the living but safe for Undead and increases Poison resistance by 5%. The effects last 3 turns.',
      ingredients: { /*['Zaikk\'s Talon', 'Poison Bottle']*/'Poison Source': 1, 'Apple': 1 }
    }
  ],
  grenades: [
    {
      craft: 'Bottle Filled With Oil',
      img: 'photos/items/make/n.webp',
      description: '-1 Intelligence, -1 Constitution, -50% Fire Resistance. Set Poisoned for 1 Turn. Duration 6 Turns.',
      ingredients: { 'Any Oil Source': 1, 'Empty Bottle': 1 }
    },
    {
      craft: 'Cluster Grenade',
      img: 'photos/items/make/n.webp',
      description: 'Dealing fire damage and creating a fire surface in a 3m radius. Set Burning for 2 Turns. Resisted by Magic Armour.',
      ingredients: { 'Empty Grenade': 1, 'Fire Essence': 1 }
    },
    {
      craft: 'Cursed Poison Flask',
      img: 'photos/items/make/n.webp',
      description: ' 	Creates a cursed poision surface and deals 98-131 poison damage. Set poisoned for 2 Turns.',
      ingredients: { 'Any Poison Bottle': 1, 'Source Orb': 1 }
    },
    {
      craft: 'Firestorm Grenade',
      img: 'photos/items/make/n.webp',
      description: 'Fire damage in a 2m radius. Set Burning for 3 Turns.',
      ingredients: { 'Bottle Filled With Oil': 1, 'Fuse': 1 }
    },
    {
      craft: 'Fuse',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Rope': 2 }
    },
    {
      craft: 'Holy Hand Grenade',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Sovereign\'s Orb': 1, 'Starfish': 1 }
    },
    {
      craft: 'Love Grenade',
      img: 'photos/items/make/n.webp',
      description: 'Will try to charm all in a 4m radius. Set Charmed for 2 Turns. Resisted by Magic Armour.',
      ingredients: { 'Empty Perfume Bottle': 1, 'Jar of Honey': 1 }
    },
    {
      craft: 'Mind Maggot Grenade',
      img: 'photos/items/make/n.webp',
      description: 'Will try to charm all in a 8m radius. Set Charmed for 4 turns. Resisted by Magic Armour.',
      ingredients: { 'A Jar of Mind Maggots': 1, 'Empty Grenade': 1 }
    },
    {
      craft: 'Oil Flask',
      img: 'photos/items/make/n.webp',
      description: 'Creates an oil surface with a 2m radius.',
      ingredients: { 'Any Oil Source': 1, 'Empty Flask': 1 }
    },
    {
      craft: 'Razzle Dazzle Grenade',
      img: 'photos/items/make/n.webp',
      description: 'Can inflict blind in a 4m radius. Set blinded for 2 Turns. Resisted by Magic Armour.',
      ingredients: { 'Any Air Resistance Potion': 1, 'Empty Canister': 1 }
    },
    {
      craft: 'Razzle Dazzle Grenade',
      img: 'photos/items/make/n.webp',
      description: 'Can inflict blind in a 4m radius. Set blinded for 2 Turns. Resisted by Magic Armour.',
      ingredients: { 'Empty Canister': 1, 'Jellyroom': 1 }
    },
    {
      craft: 'Terror Grenade',
      img: 'photos/items/make/n.webp',
      description: 'Terrified, Duration 1 Turn',
      ingredients: { 'Empty Canister': 1, 'Tormented Soul': 1 }
    },
    {
      craft: 'Thunderbolt Grenade',
      img: 'photos/items/make/n.webp',
      description: 'Stun targets in a 4m radius and deal air damage. Set Shocked for 2 Turns. Resisted by Magic Armour.',
      ingredients: { 'Air Essence': 1, 'Empty Canister': 1 }
    },
    {
      craft: 'Tremor Grenade',
      img: 'photos/items/make/n.webp',
      description: 'Earth Damage, Knocked down for 1 turn Empty Canister/Grenade',
      ingredients: { 'Earth Essence': 1, 'Empty Canister': 1 }
    },
    {
      craft: 'Water Balloon',
      img: 'photos/items/make/n.webp',
      description: 'Creates a small water surface with a 3m radius. Set Wet for 3 Turns.',
      ingredients: { 'Any Water Source': 1, 'Intestines': 1 }
    },
  ],
  potions: [
    {
      craft: 'Any Poison Bottle',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Any Healing Potion': 1, 	'Zaikk\'s Talon': 1 }
    },
    {
      craft: 'Arrowhead',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { '	Any Cutting Tool': 1, 'Sharp Piece of Metal': 1 }
    },
    {
      craft: 'Ferocity Herbmix',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Augmentor': 1, 'Drudanae': 1 }
    },
    {
      craft: 'Giant Healing Potion',
      img: 'photos/items/make/n.webp',
      description: 'Heals +1670 Vitality',
      ingredients: { 'Huge Healing Potion': 2 }
    },
    {
      craft: 'Giant Poison Potion',
      img: 'photos/items/make/n.webp',
      description: '1220-13480 Poision, Set Poisoned for 3 Turns 2 x HPB',
      ingredients: { 'Huge Poison Bottle': 2 }
    },
    {
      craft: 'Healing Elixir',
      img: 'photos/items/make/n.webp',
      description: 'Heals +80 Vitality',
      ingredients: { 'Empty Potion Bottle': 1,	'Yarrow Flower': 1 }
    },
    {
      craft: 'Healing Potion',
      img: 'photos/items/make/n.webp',
      description: 'Heals +330 Vitality',
      ingredients: { 'Medium Healing Potion': 2 }
    },
    {
      craft: 'Huge Earth Resistance Potion',
      img: 'photos/items/make/n.webp',
      description: '+90% Earth Resistance for 3 Turns.',
      ingredients: { 'Large Earth Resistance Potion': 2 }
    },
    {
      craft: 'Huge Healing Potion',
      img: 'photos/items/make/n.webp',
      description: 'Heals +870 Vitality.',
      ingredients: { 'Healing Potion': 2 }
    },
    {
      craft: 'Huge Poison Bottle',
      img: 'photos/items/make/n.webp',
      description: '+635-701 Poison, Set Poisoned for 3 Turns.',
      ingredients: { 'Large Poison Bottle': 2 }
    },
    {
      craft: 'Large Earth Resistance Potion',
      img: 'photos/items/make/n.webp',
      description: '+75% Earth Resistance for 3 Turns.',
      ingredients: { 'Medium Earth Resistance Potion': 2 }
    },
    {
      craft: 'Large Magic Armor Potion',
      img: 'photos/items/make/n.webp',
      description: '+309 Magical Armor, 5 Turn Duration 2 x MMAP.',
      ingredients: { 'Medium Magic Armor Potion': 2 }
    },
    {
      craft: 'Large Physical Armour Potion',
      img: 'photos/items/make/n.webp',
      description: '+294 Physical Armour. Duration 5 Turns 2 x MPAP.',
      ingredients: { 'Medium Physical Armour Potion': 2 }
    },
    {
      craft: 'Large Poison Bottle',
      img: 'photos/items/make/n.webp',
      description: '+243-269 Poison Damage, Set Poisoned for 3 Turns.',
      ingredients: { 'Medium Poison Bottle': 2 }
    },
    {
      craft: 'Medium Earth Resistance Potion',
      img: 'photos/items/make/n.webp',
      description: '+50% Earth Resistance for 3 Turns.',
      ingredients: { 'Earth Resistance Potion': 2 }
    },
    {
      craft: 'Medium Healing Potion',
      img: 'photos/items/make/n.webp',
      description: 'Heals +140 Vitality.',
      ingredients: { 'Minor Healing Potion': 2 }
    },
    {
      craft: 'Medium Magic Armor Potion',
      img: 'photos/items/make/n.webp',
      description: '+111 Magical Armor, 5 Turn Duration 2 x SMAP.',
      ingredients: { 'Small Magic Armor Potion': 2 }
    },
    {
      craft: 'Medium Physical Armour Potion',
      img: 'photos/items/make/n.webp',
      description: '+105 Physical Armour. Duration 5 Turns 2 x PAP.',
      ingredients: { 'Physical Armor Potion': 2 }
    },
    {
      craft: 'Medium Poison Bottle',
      img: 'photos/items/make/n.webp',
      description: '129-143 Poison Damage, Set Poisoned for 2 Turns.',
      ingredients: { 'Small Poison Bottle': 2 }
    },
    {
      craft: 'Minor Constitution Potion',
      img: 'photos/items/make/n.webp',
      description: '1 Constitution, Duration for 3 Turns.',
      ingredients: { 'Empty Potion Bottle': 1, 'Farhangit': 1 }
    },
    {
      craft: 'Minor Finesse Potion',
      img: 'photos/items/make/n.webp',
      description: '+1 Finesse for 3 Turns.',
      ingredients: { 'Boletus': 1, 'Empty Potion Bottle': 1 }
    },
    {
      craft: 'Minor Healing Potion',
      img: 'photos/items/make/n.webp',
      description: 'Heals +30 Vitality.',
      ingredients: { 'Empty Potion Bottle': 1, 'Penny Bun Mushroom': 1 }
    },
    {
      craft: 'Minor Resist All Potion',
      img: 'photos/items/make/n.webp',
      description: '15% to all Resistances. Duration 3 Turns.',
      ingredients: { 'Empty Potion Bottle': 1, 'Trumpet of Death': 1 }
    },
    {
      craft: 'Minor Strength Potion',
      img: 'photos/items/make/n.webp',
      description: '1 Strength, Duration 3 Turns.',
      ingredients: { 'Amethyst Deceiver': 1, 'Empty Potion Bottle': 1 }
    },
    {
      craft: 'Minor Wits Potion',
      img: 'photos/items/make/n.webp',
      description: '1 Wits, Duration 3 Turns.',
      ingredients: { 'Empty Potion Bottle': 1, 'Puffball': 1 }
    },
    {
      craft: 'Physical Armor Potion',
      img: 'photos/items/make/n.webp',
      description: '+30 Physical Armor, 5 Turn Duration.',
      ingredients: { 'Amadouvier': 1, 'Empty Potion Bottle': 1 }
    },
    {
      craft: 'Small Air Resistance Potion',
      img: 'photos/items/make/n.webp',
      description: '+15% Air Resistance for 3 Turns.gj+15% Air Resistance for 3 Turns',
      ingredients: { 'Empty Potion Bottle': 1, 'Jellyroom': 1 }
    },
    {
      craft: 'Small Earth Resistance Potion',
      img: 'photos/items/make/n.webp',
      description: '+15% Earth Resistance for 3 Turns.',
      ingredients: { 'Earth Tongue Mushroom': 1, 'Empty Potion Bottle': 1 }
    },
    {
      craft: 'Small Fire Resistance Potion',
      img: 'photos/items/make/n.webp',
      description: '+15% Fire Resistance for 3 Turns.',
      ingredients: { 'Empty Potion Bottle': 1, 'Guepinia Mushroom': 1 }
    },
    {
      craft: 'Small Magic Armor Potion',
      img: 'photos/items/make/n.webp',
      description: '+32 Magical Armor, 5 Turn Duration.',
      ingredients: { 'Empty Potion Bottle': 1, 'Whisperwood': 1 }
    },
    {
      craft: 'Small Poison Bottle',
      img: 'photos/items/make/n.webp',
      description: '+57-63 Poison, Sets Poisoned for 2 turns.',
      ingredients: { 'Empty Potion Bottle': 1, 'Ooze Barrel': 1 }
    },
    {
      craft: 'Small Poison Bottle',
      img: 'photos/items/make/n.webp',
      description: '+57-63 Poison, Sets Poisoned for 2 turns.',
      ingredients: { 'Minor Healing Potion': 1, 'Zaikk\'s Talon': 1 }
    },
    {
      craft: 'Small Poison Bottle',
      img: 'photos/items/make/n.webp',
      description: '+57-63 Poison, Sets Poisoned for 2 turns.',
      ingredients: { 'Empty Potion Bottle': 1,	'Fly Agaric Mushroom': 1 }
    },
    {
      craft: 'Small Water Resistance Potion',
      img: 'photos/items/make/n.webp',
      description: '+15% Water Resistance for 3 Turns.',
      ingredients: { 'Bluegill Mushroom': 1,	'Empty Potion Bottle': 1 }
    },
    {
      craft: 'Stoneskin Potion',
      img: 'photos/items/make/n.webp',
      description: '+211 Physical Armour, -50% Movement Speed, Immunity to (Burning, Stunned, Poisoned, Bleeding, Petrified, Shocked), Duration 2 Turns.',
      ingredients: { 'Earth Essence': 1,	'Empty Potion Bottle': 1 }
    }
  ],
  runes: [
    {
      craft: 'Any Giant Rune',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Any Large Rune': 1, 'Superior Pixie Dust': 1 }
    },
    {
      craft: 'Any Large Rune',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Any Medium Rune': 1, 'Pixie Dust': 1 }
    },
    {
      craft: 'Any Medium Rune',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Any Small Rune': 1, 'Pixie Dust': 1 }
    },
    {
      craft: 'Any Mystical Rune',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Any Giant Rune': 1, 'Mystical Rune Frame': 1 }
    },
    {
      craft: 'Any Rune of Power',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Any Giant Rune': 1, 'Rune Frame of Power': 1 }
    },
    {
      craft: 'Small Flame Rune',
      img: 'photos/items/make/n.webp',
      description: 'Weapon: X% Fire Damage. Armor: X% Fire Resistance. Jewelry: X% Critical Chance.',
      ingredients: { 'Any Oil Source': 1, 'Pixie Dust': 1, 'Wood Chips': 1 }
    },
    {
      craft: 'Small Frost Rune',
      img: 'photos/items/make/n.webp',
      description: 'Weapon: X% Water Damage. Armor: X% Water resistance. Jewelry: Extra movementspeed.',
      ingredients: { 'Any Water Source': 1, 'Metal Scraps': 1, 'Pixie Dust': 1 }
    },
    {
      craft: 'Small Masterwork Rune',
      img: 'photos/items/make/n.webp',
      description: 'Weapon: X% Physical Damage. Armor: X% Maxim Physical Armour. Jewelry: X% Maxium Magic Armour.',
      ingredients: { 'Any Wine Source': 1, 'Livewood Log': 1,	'Pixie Dust': 1 }
    },
    {
      craft: 'Small Rock Rune',
      img: 'photos/items/make/n.webp',
      description: 'Weapon: X% Earth Damage. Armor: X% Earth Resistance. Jewelry: +X Maximum Vitality.',
      ingredients: { 'Any Beer Source': 1, 'Any Rock': 1, 'Pixie Dust': 1 }
    },
    {
      craft: 'Small Thunder Rune',
      img: 'photos/items/make/n.webp',
      description: 'Weapon: X% Air Damage. Armor: X% Air Resistance. Jewelry: +X% Dodging.',
      ingredients: { 'Any Gold': 1, 'Any Water Source': 1, 'Pixie Dust': 1 }
    },
    {
      craft: 'Small Venom Rune',
      img: 'photos/items/make/n.webp',
      description: 'Weapon: X% Poison Damage. Armor: X% Poison Resistance. Jewelry: +X Accuracy.',
      ingredients: { 'Any Bone': 1, 'Any Poison Source': 1, 'Pixie Dust': 1 }
    },
  ],
  scrolls: [
    {
      craft: 'Acid Spores Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Livewood Log': 1, 'Sheet of Paper': 1, 'Source Orb': 1 }
    },
    {
      craft: 'Apotheosis Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Bead': 1, 'Sheet of Paper': 1, 'Source Orb': 1 }
    },
    {
      craft: 'Apportation Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'High Quality Air Essence': 1, 'Rope': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Armour of Frost Scroll',
      img: 'photos/items/make/n.webp',
      description: 'Cures Burning, Poisoned, Stunned, Frozen, Suffocating and Petrified.',
      ingredients: { 'Bluegill Mushroom': 1, 'Sheet of Paper': 1, 'Water Essence': 1 }
    },
    {
      craft: 'Artillery Plant Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Earth Tongue Mushroom': 1, 'Sheet of Paper': 1, 'Source Orb': 1 }
    },
    {
      craft: 'Black Shroud Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Creepy Eye': 1, 'Sheet of Paper': 1, 'Source Orb': 1 }
    },
    {
      craft: 'Blinding Radiance Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Air Essence': 1, 'Any Gold': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Blood Sucker Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Penny Bun Mushroom': 1, 'Shadow Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Bone Cage Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Fish Bone': 1, 'High Quality Shadow Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Bonedust',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Bone': 1, 'Mortar And Pestle': 1 }
    },
    {
      craft: 'Bull Horns Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Antler': 1, 'Life Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Chain Lightning Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Sheet of Paper': 1, 'Source Orb': 1, 'Wool': 1 }
    },
    {
      craft: 'Chain Lightning Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Sheet of Paper': 1, 'Source Orb': 1, 'Yarn': 1 }
    },
    {
      craft: 'Chameleon Skin Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Life Essence': 1, 'Long Rat Tail': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Charm Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Alien Tormented Soul': 1, 'Jar of Honey': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Chicken Claw Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Chicken Foot': 1, 'Life Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Contamination Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Earth Essence': 1, 'Intestines': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Curse Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Any Voidwoken Fish/Food': 1, 'High Quality Shadow Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Decaying Touch Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Eye': 1, 'Shadow Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Dimensional Bolt Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Pepper': 1, 'Sheet of Paper': 1, 'Tormented Soul': 1 }
    },
    {
      craft: 'Earthquake Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Clay': 1, 'High Quality Earth Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Electric Discharge Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Air Essence': 1, 'Rabbit\'s Paw': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Elemental Totem Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Sheet of Paper': 1, 'Tormented Soul': 1, 'Wooden Figurine': 1 }
    },
    {
      craft: 'Epidemic of Fire Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Large Tusk': 1, 'Sheet of Paper': 1, 'Source Orb': 1 }
    },
    {
      craft: 'Equalize Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Alien Life Essence': 1, 'Pilgrim\'s Shell': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Ethereal Storm Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Carrot': 1, 'Sheet of Paper': 1, 'Source Orb': 1 }
    },
    {
      craft: 'Farsight Infusion Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Jar of Honey': 1, 'Sheet of Paper': 1, 'Tormented Soul': 1 }
    },
    {
      craft: 'Favourable Wind Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Air Essence': 1, 'Panties': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Feather',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Any Cutting Tool': 1, 'Pillow ': 1 }
    },
    {
      craft: 'Fire Brand Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Alien Fire Essence': 1, 'Fang': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Fire Whip Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'High Quality Fire Essence': 1, 'Sheet of Paper': 1, ': 1Voidwoken Spike': 1 }
    },
    {
      craft: 'Fireball Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Fire Essence': 1, 'Sharp Claw': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Flaming Crescendo Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Alien Fire Essence': 1, 'Needle': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Flaming Tongues Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Adult Antler': 1, 'High Quality Air Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Fortify Scroll',
      img: 'photos/items/make/n.webp',
      description: 'Removes Poisoned, Bleeding, Burning, Acid, Decaying.',
      ingredients: { 'Sheet of Paper': 1, 'Whisperwood': 1 }
    },
    {
      craft: 'Fossil Strike Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Any Rock': 1, 'Earth Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Grasp of the Starved Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Disembodied Hand': 1, 'High Quality Shadow Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Grasp of the Starved Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Disembodied Hand': 1, 'Sheet of Paper': 1, 'Source Orb': 1 }
    },
    {
      craft: 'Hail Strike Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Chub Fish': 1, 'High Quality Water Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Haste Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Claw': 1, 'Fire Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Haste Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Antler': 1, 'Fire Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Healing Ritual Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Sheet of Paper': 1, 'Starfish': 1, 'Water Essence': 1 }
    },
    {
      craft: 'Heart of Steel Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Any Metal': 1, 'Life Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Ignition Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Fire Essence': 1, 'Sheet of Paper': 1, 'Tusk': 1 }
    },
    {
      craft: 'Impalement Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Earth Essence': 1, 'Sharp Piece of Metal': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Infect Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Intestines': 1, 'Shadow Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Laser Ray Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'High Quality Fire Essence': 1, 'Nine Inch Nails': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Lightning Bolt Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Air Essence': 1, 'Rabbit\'s Paw': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Living on the Edge',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'High Quality Shadow Essence': 1, 'Raw Lumpy Giblets': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Living Wall Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Alien Earth Essence': 1, 'Augmentor': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Medusa Head Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: {	'Animal Scales': 1, 'Sheet of Paper': 1, 'Source Orb': 1 }
    },
    {
      craft: 'Mend Metal Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Earth Essence': 1, 'Sheet of Paper': 1, 'Stardust': 1 }
    },
    {
      craft: 'Moondust',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Moonstone': 1, 'Mortar And Pestle ': 1 }
    },
    {
      craft: 'Mush of Wood',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Any Water Source': 1, 'Wood Chips ': 1 }
    },
    {
      craft: 'Mush of Wood',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Beehive': 1, 'Wood Chips ': 1 }
    },
    {
      craft: 'Nether Swap Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Air Essence': 1, 'Chanterelle': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Peace of Mind Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Crab\'s Claw': 1, 'Fire Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Pixie Dust',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Bonedust': 1, 'Stardust': 1 }
    },
    {
      craft: 'Pixie Dust',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Moondust': 1, 'Stardust': 1 }
    },
    {
      craft: 'Planar Gateway Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Grapes': 1, 'Sheet of Paper': 1, 'Source Orb': 1 }
    },
    {
      craft: 'Poison Dart Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Earth Essence': 1, 'Fly Agaric Mushroom': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Poison Wave Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'High Quality Earth Essence': 1, 'Sheet of Paper': 1, 'Slime': 1 }
    },
    {
      craft: 'Pressure Spike Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Handkerchief': 1, 'High Quality Air Essence ': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Pyroclastic Eruption Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Eternal Tablet': 1, 'Sheet of Paper': 1, 'Source Orb': 1 }
    },
    {
      craft: 'Rain Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Herring: 1 	Sheet of Paper': 1, 'Water Essence': 1 }
    },
    {
      craft: 'Raise Bloated Corpse Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Raw Red Meat': 1, 'Shadow Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Raise Bonepile Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Ancient Human Skull': 1, 'High Quality Shadow Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Rallying Cry Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Garlic': 1, 'Sheet of Paper': 1, 'Tormented Soul': 1 }
    },
    {
      craft: 'Reactive Armor Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'High Quality Earth Essence': 1, 'Sheet of Paper': 1, 'Trumpet of Death': 1 }
    },
    {
      craft: 'Restoration Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Penny Bun Mushroom': 1, 'Sheet of Paper': 1, 'Water Essence': 1 }
    },
    {
      craft: 'Resurrection Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Life Essence': 1, 'Sheet of Paper': 1, 'Water Essence': 1 }
    },
    {
      craft: 'Searing Daggers Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Any Tooth': 1, 'Fire Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Shackles of Pain Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'High Quality Shadow Essence': 1, 'Sheet of Paper': 1, 'Skull': 1 }
    },
    {
      craft: 'Shatter Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Alien Water Essence': 1, 'Mackerel': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Sheet of Paper',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Mush of Wood': 1, 'Oven': 1 }
    },
    {
      craft: 'Shocking Touch Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Air Essence': 1, 'Flour': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Shocking Touch Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Air Essence': 1, 'Nine Inch Nails': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Silencing Stare Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Alien Shadow Essence': 1, 'Goo': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Skin Graft Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Animal Scales': 1, 'Life Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Soothing Cold Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Red Snapper': 1, 'Sheet of Paper': 1, 'Water Essence': 1 }
    },
    {
      craft: 'Soul Mate Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'High Quality Tormented Soul': 1, 'Sheet of Paper': 1, 'Wheat': 1 }
    },
    {
      craft: 'Spider Legs Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Anthropod Leg': 1,	'Life Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Spread Your Wings Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Life Essence': 1, 'Sheet of Paper': 1, 'Sinew': 1 }
    },
    {
      craft: 'Stardust',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Mortar And Pestle': 1, 'Stardust Herb': 1 }
    },
    {
      craft: 'Steam Lance Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Sheet of Paper': 1, 'Source Orb': 1, 'Water Essence': 1 }
    },
    {
      craft: 'Summon Oily Blob Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Any Oil Source': 1, 'Life Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Superconductor Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Alien Air Essence': 1, 'Jellyroom': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Superior Stardust',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Mortar And Pestle': 1, 'Superior Stardust Herb': 1 }
    },
    {
      craft: 'Supernova Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'High Quality Fire Essence': 1, 'Sharp Tooth': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Teleportation Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Air Essence': 1, 'Feather': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Tentacle Lash Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Life Essence': 1, 'Rat\'s Tail': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Thread',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Hair': 2 }
    },
    {
      craft: 'Tornado Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Hair': 1, 'High Quality Air Essence': 1, 'Sheet of Paper': 1 }
    },
    {
      craft: 'Winter Blast Scroll',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Plaice': 1, 'Sheet of Paper': 1, 'Water Essence': 1 }
    },
  ],
  skillBooks: [
    {
      craft: 'Apportation Skillbook',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Apportation Scroll': 1, 'Blank Skillbook Air': 1 }
    },
    {
      craft: 'Breathing Bubble Skillbook',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Any Air Skillbook': 1, 'Any Warrior Skillbook': 1 }
    },
  ],
  tools: [
    {
      craft: 'Big Tongs Roped Together',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Leather Scraps': 1, 'Tongs': 1 }
    },
    {
      craft: 'Big Tongs Roped Together',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Cloth Scraps': 1, 'Tongs': 1 }
    },
    {
      craft: 'Bowstring',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Sinew': 1 }
    },
    {
      craft: 'Improvised Shovel',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Bowl': 1, 'Long Branch': 1 }
    },
    {
      craft: 'Lockpicks',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Any Hammer': 1, 'Nine Inch Nails': 1 }
    },
    {
      craft: 'Lockpicks',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Needle': 1 }
    },
    {
      craft: 'Lockpicks',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Key': 1, 'Soap': 1 }
    },
    {
      craft: 'Rope',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Yarn': 1 }
    },
    {
      craft: 'Backpack',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Rope': 1, 'Leather Scraps': 1 }
    }
  ],
  weapons: [
    {
      craft: 'Crossbow',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients:	{ 'Bowstring': 1, 'Crossbow without bowstring': 1 }
    },
    {
      craft: 'Improv Wand',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients:	{ 'Short Stick': 1, 'Skull': 1 }
    },
    {
      craft: 'Improv Wand',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients:	{ 'Ancient Human Skull': 1, 'Short Stick': 1 }
    },
    {
      craft: 'Improvised Staff',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients:	{ 'Long Branch': 1, 'Shell': 1 }
    },
    {
      craft: 'Knife On A Stick',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients:	{ 'Any Knife': 1, 'Rope': 1, 'Short Stick': 1 }
    },
    {
      craft: 'Knife On A Stick',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients:	{ 'Any Dagger': 1, 'Rope': 1, 'Short Stick': 1 }
    },
    {
      craft: 'Makeshift Club',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Long Branch': 1, 'Sharp Rock': 1 }
    },
    {
      craft: 'Makeshift Club',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Cloth Scraps': 1, 'Long Branch': 1 }
    },
    {
      craft: 'Makeshift Club',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Leather Scraps': 1, 'Long Branch': 1 }
    },
    {
      craft: 'Makeshift Wand',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients:	{ 'Short Stick': 1, 'Skull': 1 }
    },
    {
      craft: 'Primitive Harpoon',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients:	{ 'Arrowhead': 1, 'Long Branch': 1 }
    },
    {
      craft: 'Primitive Harpoon',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients:	{ 'Long Branch': 1, 'Sharp Piece of Metal': 1 }
    },
    {
      craft: 'Sharp Stone On A Big Branch',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Long Branch': 1, 'Sharp Rock': 1 }
    },
    {
      craft: 'Sharp Stone On A Stick',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients: { 'Sharp Rock': 1, 'Short Stick': 1 }
    },
    {
      craft: 'Shiv',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients:	{ 'Handkerchief': 1, 'Sharp Piece of Metal': 1 }
    },
    {
      craft: 'Shiv',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients:	{ 'Leather Scraps': 1, 'Sharp Piece of Metal': 1 }
    },
    {
      craft: 'Shiv',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients:	{ 'Cloth Scraps': 1, 'Sharp Piece of Metal': 1 }
    },
    {
      craft: 'Shiv',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients:	{ 'Anvil': 1, 'Any Hammer': 1, 'Sharp Piece of Metal': 1 }
    },
    {
      craft: 'Toy Crossbow',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients:	{ 'Long Branch': 1, 'Short Stick': 1 }
    },
    {
      craft: 'Twig With A String',
      img: 'photos/items/make/n.webp',
      description: '',
      ingredients:	{ 'Bowstring': 1, 'Short Stick': 1 }
    }
  ],
  herbmixes: [
    { craft: 'Alertness Herbmix',
      img: 'photos/items/make/Alertness_Herbmix.webp',
      description: 'Wits + 8',
      ingredients: { 'Drudanae': 1, 'Puffball': 1 }
    },
    { craft: 'Courage_Herbmix',
      img: 'photos/items/make/Courage Herbmix.webp',
      description: 'Constitution + 8',
      ingredients: { 'Drudanae': 1, 'Farhangite': 1 }
    },
    { craft: 'Enlightenment Herbmix',
      img: 'photos/items/make/Enlightenment_Herbmix.webp',
      description: 'Intelligence + 8',
      ingredients: { 'Drudanae': 1, 'Calocera': 1 }
    },
    { craft: 'Ferocity Herbmix',
      img: 'photos/items/make/Enlightenment_Herbmix.webp',
      description: 'Start AP: + 2, AP Recovery: + 2',
      ingredients: { 'Drudanae': 1, 'Augmentor': 1 }
    },
    { craft: 'Potent Alertness Herbmix',
      img: 'photos/items/make/Potent_Alertness_Herbmix.webp',
      description: 'Wits + 8',
      ingredients: { 'Alertness Herbmix': 1, 'Void-Tainted Yellow Ridgeback': 1 }
    },
    { craft: 'Potent Enlightenment Herbmix',
      img: 'photos/items/make/Potent_Enlightenment_Herbmix.webp',
      description: 'Intelligence + 8',
      ingredients: { 'Enlightenment Herbmix': 1, 'Void-Tainted Umber Monkfish': 1 }
    },
    { craft: 'Potent Ferocity Herbmix',
      img: 'photos/items/make/Potent_Ferocity_Herbmix.webp',
      description: 'Start AP: + 2, AP Recovery: + 2 ',
      ingredients: { 'Ferocity Herbmix': 1, 'Void-Tainted Crimson Beam': 1 }
    }
  ],
  blankSkillbooks: [
    {
      craft: 'Quill',
      img: '',
      description: '',
      ingredients: { 'Any Feather: 1 	Any Cutting Tool': 1 }
    },
    {
      craft: 'Leather Cover',
      img: '',
      description: '',
      ingredients: { 'Any Cutting Tool': 1, 'Leather Scraps': 1, 'Leather Scraps': 1 }
    },
    {
      craft: 'Blank Air Skillbook',
      img: '',
      description: '',
      ingredients: { 'Leather Cover': 1, 'Quill': 1, 'Distinctive Tea': 1 }
    },
    {
      craft: 'Blank Earth Skillbook',
      img: '',
      description: '',
      ingredients: { 'Leather Cover': 1, 'Quill': 1, 'Distinctive Amadouvier': 1 }
    },
    {
      craft: 'Blank Fire Skillbook',
      img: '',
      description: '',
      ingredients: { 'Leather Cover': 1, 'Quill': 1, 'Distinctive Boletus': 1 }
    },
    {
      craft: 'Blank Necromancy Skillbook',
      img: '',
      description: '',
      ingredients: { 'Leather Cover': 1, 'Quill': 1, 'Distinctive Trumpet of Death': 1 }
    },
    {
      craft: 'Blank Polymorph Skillbook',
      img: '',
      description: '',
      ingredients: { 'Leather Cover': 1, 'Quill': 1, 'Distinctive Whisperwood': 1 }
    },
    {
      craft: 'Blank Summoning Skillbook',
      img: '',
      description: '',
      ingredients: { 'Leather Cover': 1, 'Quill': 1, 'Distinctive Drudanae': 1 }
    },
    {
      craft: 'Blank Water Skillbook',
      img: '',
      description: '',
      ingredients: { 'Leather Cover': 1, 'Quill': 1, 'Distinctive Farhangite': 1 }
    },
    {
      craft: 'High Tier Blank Air Skillbook',
      img: '',
      description: '',
      ingredients: { 'Blank Air Skillbook': 1, 'Quill': 1, 'Distinctive Tea': 1 }
    },
    {
      craft: 'High Tier Blank Earth Skillbook',
      img: '',
      description: '',
      ingredients: { 'Blank Earth Skillbook': 1, 'Quill': 1, 'Distinctive Amadouvier': 1 }
    },
    {
      craft: 'High Tier Blank Fire Skillbook',
      img: '',
      description: '',
      ingredients: { 'Blank Fire Skillbook': 1, 'Quill': 1, 'Distinctive Boletus': 1 }
    },
    {
      craft: 'High Tier Blank Necromancy Skillbook',
      img: '',
      description: '',
      ingredients: { 'Blank Necromancy Skillbook': 1, 'Quill': 1, 'Distinctive Trumpet of Death': 1 }
    },
    {
      craft: 'High Tier Blank Polymorph Skillbook',
      img: '',
      description: '',
      ingredients: { 'Blank Polymorph Skillbook': 1, 'Quill': 1, 'Distinctive Whisperwood': 1 }
    },
    {
      craft: 'High Tier Blank Summoning Skillbook',
      img: '',
      description: '',
      ingredients: { 'Blank Summoning Skillbook': 1, 'Quill': 1, 'Distinctive Drudanae': 1 }
    },
    {
      craft: 'High Tier Blank Water Skillbook',
      img: '',
      description: '',
      ingredients: { 'Blank Water Skillbook': 1, 'Quill': 1, 'Distinctive Farhangite': 1 }
    }
  ],
  skillBooks: [
    {
      craft: 'Blinding Radiance Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Aerotheurge Blank Skill Book': 1, 'Blinding Radiance Scroll': 1 }
    },
    {
      craft: 'Chain Lightning Skillbook',
      img: '',
      description: '',
      ingredients: { '	Aerotheurge Blank Skill Book': 1, 'Chain Lightning Scroll': 1 }
    },
    {
      craft: 'Electric Fence Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Aerotheurge Blank Skill Book': 1, 'Electric Fence Scroll': 1 }
    },
    {
      craft: 'Favourable Wind Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Aerotheurge Blank Skill Book': 1, 'Favourable Wind Scroll': 1 }
    },
    {
      craft: 'Lightning Bolt Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Aerotheurge Blank Skill Book': 1, 'Lightning Bolt Scroll': 1 }
    },
    {
      craft: 'Teleportation Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Aerotheurge Blank Skill Book': 1, 'Teleportation Scroll': 1 }
    },
    {
      craft: 'Shocking Touch Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Aerotheurge Blank Skill Book': 1, 'Shocking Touch Scroll': 1 }
    },
    {
      craft: 'Tornado Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Aerotheurge Blank Skill Book': 1, 'Tornado Scroll': 1 }
    },
    {
      craft: 'Acid Spores Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Geomancer Blank Skill Book': 1, 'Acid Spores Scroll': 1 }
    },
    {
      craft: 'Contamination Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Geomancer Blank Skill Book': 1, '	Contamination Scroll': 1 }
    },
    {
      craft: 'Corrosive Spray Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Geomancer Blank Skill Book': 1, 'Any Source Necromancy Skillbook': 1 }
    },
    {
      craft: 'Fortify Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Geomancer Blank Skill Book': 1, 'Fortify Scroll': 1 }
    },
    {
      craft: 'Poison Dart Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Geomancer Blank Skill Book': 1, 'Poison Dart Scroll': 1 }
    },
    {
      craft: 'Fossil Strike Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Geomancer Blank Skill Book': 1, 'Fossil Strike Scroll': 1 }
    },
    {
      craft: 'Impalement Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Geomancer Blank Skill Book': 1, 'Impalement Scroll': 1 }
    },
    {
      craft: 'Burn My Eyes Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Pyrokinetic Blank Skill Book': 1, 'Burn My Eyes Scroll': 1 }
    },
    {
      craft: 'Fireball Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Pyrokinetic Blank Skill Book': 1, 'Fireball Scroll': 1 }
    },
    {
      craft: 'Fireblood Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Pyrokinetic Blank Skill Book': 1, 'Any Polymorph Skillbook': 1 }
    },
    {
      craft: 'Fireblood Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Pyrokinetic Blank Skill Book': 1, 'Fireblood Scroll': 1 }
    },
    {
      craft: 'Searing Daggers Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Pyrokinetic Blank Skill Book': 1, 'Searing Daggers Scroll': 1 }
    },
    {
      craft: 'Haste Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Pyrokinetic Blank Skill Book': 1, 'Haste Scroll': 1 }
    },
    {
      craft: 'Ignition Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Pyrokinetic Blank Skill Book': 1, 'Ignition Scroll': 1 }
    },
    {
      craft: 'Infectious Flame Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Pyrokinetic Blank Skill Book': 1, 'Infectious Flame Scroll': 1 }
    },
    {
      craft: 'Spontaneous Combustion Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Pyrokinetic Blank Skill Book': 1, 'Spontaneous Combustion Scroll': 1 }
    },
    {
      craft: 'Blood Sucker Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Necromancer Blank Skill Book': 1, 'Blood Sucker Scroll': 1 }
    },
    {
      craft: 'Decaying Touch Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Necromancer Blank Skill Book': 1, 'Decaying Touch Scroll': 1 }
    },
    {
      craft: 'Mosquito Swarm Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Necromancer Blank Skill Book': 1, 'Mosquito Swarm Scroll': 1 }
    },
    {
      craft: 'Rain of Blood Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Necromancer Blank Skill Book': 1, 'Rain of Blood Scroll': 1 }
    },
    {
      craft: 'Shackles of Pain Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Necromancer Blank Skill Book': 1, 'Shackles of Pain Scroll': 1 }
    },
    {
      craft: 'Infect Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Necromancer Blank Skill Book': 1, 'Infect Scroll': 1 }
    },
    {
      craft: 'Tentacle Lash Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Polymorph Blank Skill Book': 1, 'Tentacle Lash Scroll': 1 }
    },
    {
      craft: 'Chicken Claw Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Polymorph Blank Skill Book': 1, 'Chicken Claw Scroll': 1 }
    },
    {
      craft: 'Bull Horns Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Polymorph Blank Skill Book': 1, 'Bull Horns Scroll': 1 }
    },
    {
      craft: 'Chameleon Cloak Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Polymorph Blank Skill Book': 1, 'Chameleon Cloak Scroll': 1 }
    },
    {
      craft: 'Heart of Steel Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Polymorph Blank Skill Book': 1, 'Heart of Steel Scroll': 1 }
    },
    {
      craft: 'Spread Your Wings Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Polymorph Blank Skill Book': 1, 'Spread Your Wings Scroll': 1 }
    },
    {
      craft: 'Conjure Incarnate Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Summoning Blank Skill Book': 1, 'Conjure Incarnate Scroll': 1 }
    },
    {
      craft: 'Dimensional Bolt Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Summoning Blank Skill Book': 1, 'Dimensional Bolt Scroll': 1 }
    },
    {
      craft: 'Elemental Totem Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Summoning Blank Skill Book': 1, 'Elemental Totem Scroll': 1 }
    },
    {
      craft: 'Farsight Infusion Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Summoning Blank Skill Book': 1, 'Farsight Infusion Scroll': 1 }
    },
    {
      craft: 'Power Infusion Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Summoning Blank Skill Book': 1, 'Power Infusion Scroll': 1 }
    },
    {
      craft: 'Rallying Cry Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Summoning Blank Skill Book': 1, 'Rallying Cry Scroll': 1 }
    },
    {
      craft: 'Supercharger Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Summoning Blank Skill Book': 1, 'Supercharger Scroll': 1 }
    },
    {
      craft: 'Armour of Frost Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Hydrosophist Blank Skill Book': 1, 'Armour of Frost Scroll': 1 }
    },
    {
      craft: 'Hail Strike Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Hydrosophist Blank Skill Book': 1, 'Hail Strike Scroll': 1 }
    },
    {
      craft: 'Healing Ritual Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Hydrosophist Blank Skill Book': 1, 'Healing Ritual Scroll': 1 }
    },
    {
      craft: 'Rain Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Hydrosophist Blank Skill Book': 1, 'Rain Scroll': 1 }
    },
    {
      craft: 'Restoration Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Hydrosophist Blank Skill Book': 1, 'Restoration Scroll': 1 }
    },
    {
      craft: 'Winter Blast Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Hydrosophist Blank Skill Book': 1, 'Winter Blast Scroll': 1 }
    },
    {
      craft: 'Steam Lance Skillbook',
      img: '',
      description: '',
      ingredients:	{ 'Hydrosophist Blank Skill Book': 1, 	'Global Cooling Scroll': 1 }
    }
  ]
};

/*
let craftingStations = [
  { station: 'Anvil', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Beer Barrel', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Bench Saw', img: 'photos/items/crafting_stations/bench_saw.jpg', checked: false },
  { station: 'Boiling Pot', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Bonfire', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Campfire', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Dreamer Pipe', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Hand Water Pump', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Oven', img: 'photos/items/crafting_stations/oven.jpg', checked: false },
  { station: 'Pot Still', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Spinning Wheel', img: 'photos/items/crafting_stations/spinning_wheel.jpg', checked: false },
  { station: 'Stove', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Well', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Wine Barrel', img: 'photos/items/crafting_stations/wine_barrel.png', checked: false }
];

let baseSkillBooks = [
  {
    craft: 'Vacuum Touch',
    ingredients: { 'Aerothurge 	Necromancer 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Vaporize 	Aerothurge',
    ingredients: { 'Polymorphing 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Erratic Wisp',
    ingredients: { 'Aerothurge 	Huntsman 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Smoke Cover',
    ingredients: { 'Aerothurge 	Scoundrel 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Electric Infusion',
    ingredients: { 'Aerothurge 	Summoning 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Breathing Bubble',
    ingredients: { 'Aerothurge 	Warfare 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Corrosive Spray',
    ingredients: { 'Geomancer 	Necromancer 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Turn To Oil',
    ingredients: { 'Geomancer 	Polymorphing 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Throw Dust',
    ingredients: { 'Geomancer 	Huntsman 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Venom Coating',
    ingredients: { 'Geomancer 	Scoundrel 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Poison Infusion',
    ingredients: { 'Geomancer 	Summoning 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Oily Carapace',
    ingredients: { 'Geomancer 	Warfare 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Corpse Explosion',
    ingredients: { 'Pyrokinetic 	Necromancer 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Bleed Fire',
    ingredients: { 'Pyrokinetic 	Polymorphing 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Throw Explosive Trap',
    ingredients: { 'Pyrokinetic 	Huntsman 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Sabotage 	Pyrokinetic',
    ingredients: { 'Scoundrel 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Fire Infusion',
    ingredients: { 'Pyrokinetic 	Summoning 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Sparking Swings',
    ingredients: { 'Pyrokinetic 	Warfare 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Raining Blood',
    ingredients: { 'Hydrosophist 	Necromancer 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Healing Tears',
    ingredients: { 'Hydrosophist 	Polymorphing 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Cryotherapy',
    ingredients: { 'Hydrosophist 	Huntsman 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Vampiric Hunger',
    ingredients: { 'Hydrosophist 	Scoundrel 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Water Infusion',
    ingredients: { 'Hydrosophist 	Summoning 	Neither skillbook may consume Source points.': 1 }
  },
  {
    craft: 'Cleanse Wounds',
    ingredients: { 'Hydrosophist 	Warfare 	Neither skillbook may consume Source points.': 1 }
  }
];

let enchantment = [
  {
    craft: 'Weapon deals X-X bonus poison damage based on item level',
    ingredients: { 'Weapon': 1,	'Any Poison Source': 1, 'Ooze Barrel': 1 }
  },
  {
    craft: 'Weapon deals X-X bonus fire damage based on item level',
    ingredients: { 'Weapon (except wand)': 1,	'Oil Barrel': 1,	'Campfire Crafter\'s kit gift bag': 1}
  },
  {
    craft: 'Grants immunity to slipping on ice',
    ingredients: { 'Nails': 1,	'Boots ': 1 }
  },
  {
    craft: '2 finesse, 1 huntsman, adds physical armor',
    ingredients: { 'Helmet': 1,	'Eternal Artefact': 1 }
  },
  {
    craft: '10% air resistance, adds physical armor',
    ingredients: { 'Chest': 1,	'Eternal Artefact': 1 }
  },
  {
    craft: '2 strength, 1 warfare, adds physical armor',
    ingredients: { 'Belt': 1,	'Eternal Artefact': 1 }
  },
  {
    craft: '2 constitution, 10% earth resistance, adds physical armor',
    ingredients: { 'Gloves': 1,	'Eternal Artefact': 1 }
  },
  {
    craft: '1 polymorph, 10% air resistance, adds physical armor',
    ingredients: { 'Leggings': 1,	'Eternal Artefact': 1 }
  },
  {
    craft: '1 thievery, 0.1 move points, adds physical armor',
    ingredients: { 'Boots': 1,	'Eternal Artefact': 1 }
  },
  {
    craft: '1 scoundrel',
    ingredients: { 'Ring': 1,	'Eternal Artefact': 1 }
  }
];
*/

function canCraft (recipe) {
  for (let ingredient in recipe.ingredients) {
    console.log(`Checking ingredient: ${ingredient}`);
    const item = itemArray.find(item => item.item === ingredient);
    console.log('Item:', item);
    const inventory = item ? item.inventory : 0;
    console.log(`Inventory: ${inventory}`);
    const requiredAmount = recipe.ingredients[ingredient];
    console.log(`Required Amount: ${requiredAmount}`);

    const inventoryItem = itemArray.find(item => item.item === ingredient);
    if (!inventoryItem || inventoryItem.inventory < recipe.ingredients[ingredient]) {
      console.log(`Cannot craft ${recipe.craft}`);
      return false;
    }
  }
  return true;
}

function renderCraftableRecipes () {
  const recipeList = document.getElementById('craft');
  recipeList.innerHTML = '';

  for (let category in recipes) {
    if (recipes.hasOwnProperty(category) && Array.isArray(recipes[category])) {
      const categoryRecipes = recipes[category];

      const categoryHeader = document.createElement('h3');
      categoryHeader.textContent = category;
      recipeList.appendChild(categoryHeader);

      categoryRecipes.forEach((recipe) => {
        console.log('Checking recipe:', recipe.craft);
        if (canCraft(recipe)) {
          console.log('Craftable:', recipe.craft);
          const listItem = document.createElement('li');

          const recipeName = document.createElement('span');
          recipeName.textContent = recipe.craft;
          listItem.appendChild(recipeName);

          recipeList.appendChild(listItem);
        } else {
          console.log('Not craftable:', recipe.craft);
        }
      });
    } else {
      console.error(`invalid category or recipes array for category: ${category}`);
    }
  }
}

renderCraftableRecipes();