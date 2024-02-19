let recipes = [
  {
    armor: [
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
        ingredients: { ['Red Snapper', 'Plaice', 'Mackerel', 'Herring', 'Chub Fish']: 1, 'Dough': 1 }
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
        ingredients: { ['Zaikk\'s Talon', 'Poison Bottle']: 1, 'Apple': 1 }
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
        ingredients: { 'Any Oil Source', 'Empty Flask' ]},
      {
        craft: 'Razzle Dazzle Grenade',
        img: 'photos/items/make/n.webp',
        description: 'Can inflict blind in a 4m radius. Set blinded for 2 Turns. Resisted by Magic Armour.',
        ingredients: { 'Any Air Resistance Potion', 'Empty Canister' ]},
      {
        craft: 'Razzle Dazzle Grenade',
        img: 'photos/items/make/n.webp',
        description: 'Can inflict blind in a 4m radius. Set blinded for 2 Turns. Resisted by Magic Armour.',
        ingredients: { 'Empty Canister', 'Jellyroom' ]},
      {
        craft: 'Terror Grenade',
        img: 'photos/items/make/n.webp',
        description: 'Terrified, Duration 1 Turn',
        ingredients: { 'Empty Canister', 'Tormented Soul' ]},
      {
        craft: 'Thunderbolt Grenade',
        img: 'photos/items/make/n.webp',
        description: 'Stun targets in a 4m radius and deal air damage. Set Shocked for 2 Turns. Resisted by Magic Armour.',
        ingredients: { 'Air Essence', 'Empty Canister' ]},
      {
        craft: 'Tremor Grenade',
        img: 'photos/items/make/n.webp',
        description: 'Earth Damage, Knocked down for 1 turn Empty Canister/Grenade',
        ingredients: { 'Earth Essence', 'Empty Canister' ]},
      {
        craft: 'Water Balloon',
        img: 'photos/items/make/n.webp',
        description: 'Creates a small water surface with a 3m radius. Set Wet for 3 Turns.',
        ingredients: { 'Any Water Source', 'Intestines' ]},
    ],
    potions: [
      {
        craft: 'Any Poison Bottle',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Any Healing Potion 	Zaikk\'s Talon' ]},
      {
        craft: 'Arrowhead',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { '	Any Cutting Tool 	Sharp Piece of Metal' ]},
      {
        craft: 'Ferocity Herbmix',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Augmentor 	Drudanae' ]},
      {
        craft: 'Giant Healing Potion',
        img: 'photos/items/make/n.webp',
        description: 'Heals +1670 Vitality',
        ingredients: { 'Huge Healing Potion' ]},
      {
        craft: 'Giant Poison Potion',
        img: 'photos/items/make/n.webp',
        description: '1220-13480 Poision, Set Poisoned for 3 Turns 2 x HPB',
        ingredients: { 'Huge Poison Bottle' ]},
      {
        craft: 'Healing Elixir',
        img: 'photos/items/make/n.webp',
        description: 'Heals +80 Vitality',
        ingredients: { 'Empty Potion Bottle 	Yarrow Flower' ]},
      {
        craft: 'Healing Potion',
        img: 'photos/items/make/n.webp',
        description: 'Heals +330 Vitality',
        ingredients: { 'Medium Healing Potion' ]},
      {
        craft: 'Huge Earth Resistance Potion',
        img: 'photos/items/make/n.webp',
        description: '+90% Earth Resistance for 3 Turns.',
        ingredients: { 'Large Earth Resistance Potion' ]},
      {
        craft: 'Huge Healing Potion',
        img: 'photos/items/make/n.webp',
        description: 'Heals +870 Vitality.',
        ingredients: { 'Healing Potion' ]},
      {
        craft: 'Huge Poison Bottle',
        img: 'photos/items/make/n.webp',
        description: '+635-701 Poison, Set Poisoned for 3 Turns.',
        ingredients: { 'Large Poison Bottle' ]},
      {
        craft: 'Large Earth Resistance Potion',
        img: 'photos/items/make/n.webp',
        description: '+75% Earth Resistance for 3 Turns.',
        ingredients: { 'Medium Earth Resistance Potion' ]},
      {
        craft: 'Large Magic Armor Potion',
        img: 'photos/items/make/n.webp',
        description: '+309 Magical Armor, 5 Turn Duration 2 x MMAP.',
        ingredients: { 'Medium Magic Armor Potion' ]},
      {
        craft: 'Large Physical Armour Potion',
        img: 'photos/items/make/n.webp',
        description: '+294 Physical Armour. Duration 5 Turns 2 x MPAP.',
        ingredients: { 'Medium Physical Armour Potion' ]},
      {
        craft: 'Large Poison Bottle',
        img: 'photos/items/make/n.webp',
        description: '+243-269 Poison Damage, Set Poisoned for 3 Turns.',
        ingredients: { 'Medium Poison Bottle' ]},
      {
        craft: 'Medium Earth Resistance Potion',
        img: 'photos/items/make/n.webp',
        description: '+50% Earth Resistance for 3 Turns.',
        ingredients: { 'Earth Resistance Potion' ]},
      {
        craft: 'Medium Healing Potion',
        img: 'photos/items/make/n.webp',
        description: 'Heals +140 Vitality.',
        ingredients: { 'Minor Healing Potion' ]},
      {
        craft: 'Medium Magic Armor Potion',
        img: 'photos/items/make/n.webp',
        description: '+111 Magical Armor, 5 Turn Duration 2 x SMAP.',
        ingredients: { 'Small Magic Armor Potion' ]},
      {
        craft: 'Medium Physical Armour Potion',
        img: 'photos/items/make/n.webp',
        description: '+105 Physical Armour. Duration 5 Turns 2 x PAP.',
        ingredients: { 'Physical Armor Potion' ]},
      {
        craft: 'Medium Poison Bottle',
        img: 'photos/items/make/n.webp',
        description: '129-143 Poison Damage, Set Poisoned for 2 Turns.',
        ingredients: { 'Small Poison Bottle' ]},
      {
        craft: 'Minor Constitution Potion',
        img: 'photos/items/make/n.webp',
        description: '1 Constitution, Duration for 3 Turns.',
        ingredients: { 'Empty Potion Bottle 	Farhangit' ]},
      {
        craft: 'Minor Finesse Potion',
        img: 'photos/items/make/n.webp',
        description: '+1 Finesse for 3 Turns.',
        ingredients: { 'Boletus 	Empty Potion Bottle' ]},
      {
        craft: 'Minor Healing Potion',
        img: 'photos/items/make/n.webp',
        description: 'Heals +30 Vitality.',
        ingredients: { 'Empty Potion Bottle 	Penny Bun Mushroom' ]},
      {
        craft: 'Minor Resist All Potion',
        img: 'photos/items/make/n.webp',
        description: '15% to all Resistances. Duration 3 Turns.',
        ingredients: { 'Empty Potion Bottle 	Trumpet of Death' ]},
      {
        craft: 'Minor Strength Potion',
        img: 'photos/items/make/n.webp',
        description: '1 Strength, Duration 3 Turns.',
        ingredients: { 'Amethyst Deceiver 	Empty Potion Bottle' ]},
      {
        craft: 'Minor Wits Potion',
        img: 'photos/items/make/n.webp',
        description: '1 Wits, Duration 3 Turns.',
        ingredients: { 'Empty Potion Bottle 	Puffball' ]},
      {
        craft: 'Physical Armor Potion',
        img: 'photos/items/make/n.webp',
        description: '+30 Physical Armor, 5 Turn Duration.',
        ingredients: { 'Amadouvier 	Empty Potion Bottle' ]},
      {
        craft: 'Small Air Resistance Potion',
        img: 'photos/items/make/n.webp',
        description: '+15% Air Resistance for 3 Turns.gj+15% Air Resistance for 3 Turns',
        ingredients: { 'Empty Potion Bottle 	Jellyroom' ]},
      {
        craft: 'Small Earth Resistance Potion',
        img: 'photos/items/make/n.webp',
        description: '+15% Earth Resistance for 3 Turns.',
        ingredients: { 'Earth Tongue Mushroom 	Empty Potion Bottle' ]},
      {
        craft: 'Small Fire Resistance Potion',
        img: 'photos/items/make/n.webp',
        description: '+15% Fire Resistance for 3 Turns.',
        ingredients: { 'Empty Potion Bottle 	Guepinia Mushroom' ]},
      {
        craft: 'Small Magic Armor Potion',
        img: 'photos/items/make/n.webp',
        description: '+32 Magical Armor, 5 Turn Duration.',
        ingredients: { 'Empty Potion Bottle 	Whisperwood' ]},
      {
        craft: 'Small Poison Bottle',
        img: 'photos/items/make/n.webp',
        description: '+57-63 Poison, Sets Poisoned for 2 turns.',
        ingredients: { 'Empty Potion Bottle 	Ooze Barrel' ]},
      {
        craft: 'Small Poison Bottle',
        img: 'photos/items/make/n.webp',
        description: '+57-63 Poison, Sets Poisoned for 2 turns.',
        ingredients: { 'Minor Healing Potion 	Zaikk\'s Talon' ]},
      {
        craft: 'Small Poison Bottle',
        img: 'photos/items/make/n.webp',
        description: '+57-63 Poison, Sets Poisoned for 2 turns.',
        ingredients: { 'Empty Potion Bottle 	Fly Agaric Mushroom' ]},
      {
        craft: 'Small Water Resistance Potion',
        img: 'photos/items/make/n.webp',
        description: '+15% Water Resistance for 3 Turns.',
        ingredients: { 'Bluegill Mushroom 	Empty Potion Bottle' ]},
      {
        craft: 'Stoneskin Potion',
        img: 'photos/items/make/n.webp',
        description: '+211 Physical Armour, -50% Movement Speed, Immunity to (Burning, Stunned, Poisoned, Bleeding, Petrified, Shocked), Duration 2 Turns.',
        ingredients: { 'Earth Essence 	Empty Potion Bottle' ]},
    ],
    runes: [
      {
        craft: 'Any Giant Rune',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Any Large Rune', 'Superior Pixie Dust' ]},
      {
        craft: 'Any Large Rune',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Any Medium Rune', 'Pixie Dust' ]},
      {
        craft: 'Any Medium Rune',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Any Small Rune', 'Pixie Dust' ]},
      {
        craft: 'Any Mystical Rune',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Any Giant Rune', 'Mystical Rune Frame' ]},
      {
        craft: 'Any Rune of Power',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Any Giant Rune', 'Rune Frame of Power' ]},
      {
        craft: 'Small Flame Rune',
        img: 'photos/items/make/n.webp',
        description: 'Weapon: X% Fire Damage. Armor: X% Fire Resistance. Jewelry: X% Critical Chance.',
        ingredients: { 'Any Oil Source', 'Pixie Dust 	Wood Chips' ]},
      {
        craft: 'Small Frost Rune',
        img: 'photos/items/make/n.webp',
        description: 'Weapon: X% Water Damage. Armor: X% Water resistance. Jewelry: Extra movementspeed.',
        ingredients: { 'Any Water Source', 'Metal Scraps 	Pixie Dust' ]},
      {
        craft: 'Small Masterwork Rune',
        img: 'photos/items/make/n.webp',
        description: 'Weapon: X% Physical Damage. Armor: X% Maxim Physical Armour. Jewelry: X% Maxium Magic Armour.',
        ingredients: { 'Any Wine Source', 'Livewood Log 	Pixie Dust' ]},
      {
        craft: 'Small Rock Rune',
        img: 'photos/items/make/n.webp',
        description: 'Weapon: X% Earth Damage. Armor: X% Earth Resistance. Jewelry: +X Maximum Vitality.',
        ingredients: { 'Any Beer Source', 'Any Rock', 'Pixie Dust' ]},
      {
        craft: 'Small Thunder Rune',
        img: 'photos/items/make/n.webp',
        description: 'Weapon: X% Air Damage. Armor: X% Air Resistance. Jewelry: +X% Dodging.',
        ingredients: { 'Any Gold', 'Any Water Source', 'Pixie Dust' ]},
      {
        craft: 'Small Venom Rune',
        img: 'photos/items/make/n.webp',
        description: 'Weapon: X% Poison Damage. Armor: X% Poison Resistance. Jewelry: +X Accuracy.',
        ingredients: { 'Any Bone', 'Any Poison Source', 'Pixie Dust' ]},
    ],
    scrolls: [
      {
        craft: 'Acid Spores Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Livewood Log', 'Sheet of Paper', 'Source Orb' ]},
      {
        craft: 'Apotheosis Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Bead', 'Sheet of Paper', 'Source Orb' ]},
      {
        craft: 'Apportation Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'High Quality Air Essence', 'Rope', 'Sheet of Paper' ]},
      {
        craft: 'Armour of Frost Scroll',
        img: 'photos/items/make/n.webp',
        description: 'Cures Burning, Poisoned, Stunned, Frozen, Suffocating and Petrified.',
        ingredients: {''luegill Mushroom', 'Sheet of Paper', 'Water Essence' ]},
      {
        craft: 'Artillery Plant Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Earth Tongue Mushroom', 'Sheet of Paper', 'Source Orb' ]},
      {
        craft: 'Black Shroud Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Creepy Eye', 'Sheet of Paper', 'Source Orb' ]},
      {
        craft: 'Blinding Radiance Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Air Essence', 'Any Gold', 'Sheet of Paper' ]},
      {
        craft: 'Blood Sucker Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Penny Bun Mushroom', 'Shadow Essence', 'Sheet of Paper' ]},
      {
        craft: 'Bone Cage Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Fish Bone', 'High Quality Shadow Essence', 'Sheet of Paper' ]},
      {
        craft: 'Bonedust',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Bone', 'Mortar And Pestle ' ]},
      {
        craft: 'Bull Horns Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Antler', 'Life Essence', 'Sheet of Paper' ]},
      {
        craft: 'Chain Lightning Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Sheet of Paper', 'Source Orb', 'Wool' ]},
      {
        craft: 'Chain Lightning Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Sheet of Paper', 'Source Orb', 'Yarn' ]},
      {
        craft: 'Chameleon Skin Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Life Essence', 'Long Rat Tail', 'Sheet of Paper' ]},
      {
        craft: 'Charm Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Alien Tormented Soul', 'Jar of Honey 	Sheet of Paper' ]},
      {
        craft: 'Chicken Claw Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Chicken Foot', 'Life Essence 	Sheet of Paper' ]},
      {
        craft: 'Contamination Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Earth Essence', 'Intestines 	Sheet of Paper' ]},
      {
        craft: 'Curse Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Any Voidwoken Fish/Food', 'High Quality Shadow Essence 	Sheet of Paper' ]},
      {
        craft: 'Decaying Touch Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Eye', 'Shadow Essence', 'Sheet of Paper' ]},
      {
        craft: 'Dimensional Bolt Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Pepper', 'Sheet of Paper', 'Tormented Soul' ]},
      {
        craft: 'Earthquake Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Clay', 'High Quality Earth Essence', 'Sheet of Paper' ]},
      {
        craft: 'Electric Discharge Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Air Essence', 'Rabbit\'s Paw', 'Sheet of Paper' ]},
      {
        craft: 'Elemental Totem Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Sheet of Paper', 'Tormented Soul', 'Wooden Figurine' ]},
      {
        craft: 'Epidemic of Fire Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Large Tusk', 'Sheet of Paper', 'Source Orb' ]},
      {
        craft: 'Equalize Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Alien Life Essence', 'Pilgrim\'s Shell', 'Sheet of Paper' ]},
      {
        craft: 'Ethereal Storm Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Carrot', 'Sheet of Paper', 'Source Orb' ]},
      {
        craft: 'Farsight Infusion Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Jar of Honey', 'Sheet of Paper', 'Tormented Soul' ]},
      {
        craft: 'Favourable Wind Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Air Essence', 'Panties', 'Sheet of Paper' ]},
      {
        craft: 'Feather',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Any Cutting Tool', 'Pillow ' ]},
      {
        craft: 'Fire Brand Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Alien Fire Essence', 'Fang', 'Sheet of Paper' ]},
      {
        craft: 'Fire Whip Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'High Quality Fire Essence', 'Sheet of Paper 	Voidwoken Spike' ]},
      {
        craft: 'Fireball Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Fire Essence', 'Sharp Claw', 'Sheet of Paper' ]},
      {
        craft: 'Flaming Crescendo Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Alien Fire Essence', 'Needle', 'Sheet of Paper' ]},
      {
        craft: 'Flaming Tongues Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Adult Antler', 'High Quality Air Essence', 'Sheet of Paper' ]},
      {
        craft: 'Fortify Scroll',
        img: 'photos/items/make/n.webp',
        description: 'Removes Poisoned, Bleeding, Burning, Acid, Decaying.',
        ingredients: {''heet of Paper', 'Whisperwood' ]},
      {
        craft: 'Fossil Strike Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Any Rock', 'Earth Essence', 'Sheet of Paper' ]},
      {
        craft: 'Grasp of the Starved Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Disembodied Hand', 'High Quality Shadow Essence 	Sheet of Paper' ]},
      {
        craft: 'Grasp of the Starved Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Disembodied Hand', 'Sheet of Paper', 'Source Orb' ]},
      {
        craft: 'Hail Strike Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Chub Fish', 'High Quality Water Essence', 'Sheet of Paper' ]},
      {
        craft: 'Haste Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Claw', 'Fire Essence', 'Sheet of Paper' ]},
      {
        craft: 'Haste Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Antler', 'Fire Essence', 'Sheet of Paper' ]},
      {
        craft: 'Healing Ritual Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Sheet of Paper', 'Starfish', 'Water Essence' ]},
      {
        craft: 'Heart of Steel Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Any Metal', 'Life Essence', 'Sheet of Paper' ]},
      {
        craft: 'Ignition Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Fire Essence', 'Sheet of Paper', 'Tusk' ]},
      {
        craft: 'Impalement Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Earth Essence', 'Sharp Piece of Metal', 'Sheet of Paper' ]},
      {
        craft: 'Infect Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Intestines', 'Shadow Essence', 'Sheet of Paper' ]},
      {
        craft: 'Laser Ray Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'High Quality Fire Essence 	Nine Inch Nails 	Sheet of Paper' ]},
      {
        craft: 'Lightning Bolt Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Air Essence', 'Rabbit\'s Paw', 'Sheet of Paper' ]},
      {
        craft: 'Living on the Edge',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'High Quality Shadow Essence', 'Raw Lumpy Giblets', 'Sheet of Paper' ]},
      {
        craft: 'Living Wall Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Alien Earth Essence', 'Augmentor', 'Sheet of Paper' ]},
      {
        craft: 'Medusa Head Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Animal Scales', 'Sheet of Paper', 'Source Orb' ]},
      {
        craft: 'Mend Metal Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Earth Essence', 'Sheet of Paper', 'Stardust' ]},
      {
        craft: 'Moondust',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Moonstone', 'Mortar And Pestle ' ]},
      {
        craft: 'Mush of Wood',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Any Water Source', 'Wood Chips ' ]},
      {
        craft: 'Mush of Wood',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Beehive', 'Wood Chips ' ]},
      {
        craft: 'Nether Swap Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Air Essence', 'Chanterelle', 'Sheet of Paper' ]},
      {
        craft: 'Peace of Mind Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Crab\'s Claw', 'Fire Essence', 'Sheet of Paper' ]},
      {
        craft: 'Pixie Dust',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Bonedust', 'Stardust ' ]},
      {
        craft: 'Pixie Dust',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Moondust', 'Stardust ' ]},
      {
        craft: 'Planar Gateway Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Grapes', 'Sheet of Paper', 'Source Orb' ]},
      {
        craft: 'Poison Dart Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Earth Essence', 'Fly Agaric Mushroom', 'Sheet of Paper' ]},
      {
        craft: 'Poison Wave Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'High Quality Earth Essence', 'Sheet of Paper', 'Slime' ]},
      {
        craft: 'Pressure Spike Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Handkerchief', 'High Quality Air Essence ', 'Sheet of Paper' ]},
      {
        craft: 'Pyroclastic Eruption Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Eternal Tablet', 'Sheet of Paper', 'Source Orb' ]},
      {
        craft: 'Rain Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Herring 	Sheet of Paper', 'Water Essence' ]},
      {
        craft: 'Raise Bloated Corpse Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Raw Red Meat', 'Shadow Essence', 'Sheet of Paper' ]},
      {
        craft: 'Raise Bonepile Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Ancient Human Skull', 'High Quality Shadow Essence', 'Sheet of Paper' ]},
      {
        craft: 'Rallying Cry Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Garlic', 'Sheet of Paper', 'Tormented Soul' ]},
      {
        craft: 'Reactive Armor Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'High Quality Earth Essence', 'Sheet of Paper', 'Trumpet of Death' ]},
      {
        craft: 'Restoration Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Penny Bun Mushroom', 'Sheet of Paper', 'Water Essence' ]},
      {
        craft: 'Resurrection Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Life Essence', 'Sheet of Paper', 'Water Essence' ]},
      {
        craft: 'Searing Daggers Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Any Tooth', 'Fire Essence', 'Sheet of Paper' ]},
      {
        craft: 'Shackles of Pain Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'High Quality Shadow Essence', 'Sheet of Paper', 'Skull' ]},
      {
        craft: 'Shatter Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Alien Water Essence', 'Mackerel', 'Sheet of Paper' ]},
      {
        craft: 'Sheet of Paper',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Mush of Wood', 'Oven ' ]},
      {
        craft: 'Shocking Touch Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Air Essence', 'Flour', 'Sheet of Paper' ]},
      {
        craft: 'Shocking Touch Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Air Essence', 'Nine Inch Nails', 'Sheet of Paper' ]},
      {
        craft: 'Silencing Stare Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Alien Shadow Essence', 'Goo', 'Sheet of Paper' ]},
      {
        craft: 'Skin Graft Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Animal Scales', 'Life Essence', 'Sheet of Paper' ]},
      {
        craft: 'Soothing Cold Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Red Snapper', 'Sheet of Paper', 'Water Essence' ]},
      {
        craft: 'Soul Mate Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'High Quality Tormented Soul', 'Sheet of Paper', 'Wheat' ]},
      {
        craft: 'Spider Legs Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Anthropod Leg 	Life Essence 	Sheet of Paper' ]},
      {
        craft: 'Spread Your Wings Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Life Essence', 'Sheet of Paper', 'Sinew' ]},
      {
        craft: 'Stardust',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Mortar And Pestle', 'Stardust Herb ' ]},
      {
        craft: 'Steam Lance Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Sheet of Paper', 'Source Orb', 'Water Essence' ]},
      {
        craft: 'Summon Oily Blob Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Any Oil Source', 'Life Essence', 'Sheet of Paper' ]},
      {
        craft: 'Superconductor Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Alien Air Essence', 'Jellyroom', 'Sheet of Paper' ]},
      {
        craft: 'Superior Stardust',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Mortar And Pestle', 'Superior Stardust Herb ' ]},
      {
        craft: 'Supernova Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'High Quality Fire Essence', 'Sharp Tooth', 'Sheet of Paper' ]},
      {
        craft: 'Teleportation Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Air Essence', 'Feather', 'Sheet of Paper' ]},
      {
        craft: 'Tentacle Lash Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Life Essence', 'Rat\'s Tail', 'Sheet of Paper' ]},
      {
        craft: 'Thread',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Hair' ]},
      {
        craft: 'Tornado Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: {	'Hair', 'High Quality Air Essence', 'Sheet of Paper' ]},
      {
        craft: 'Winter Blast Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Plaice', 'Sheet of Paper', 'Water Essence' ]},
    ],
    skillBooks: [
      {
        craft: 'Apportation Skillbook',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Apportation Scroll', 'Blank Skillbook Air' ]},
      {
        craft: 'Breathing Bubble Skillbook',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Any Air Skillbook', 'Any Warrior Skillbook' ]},
    ],
    tools: [
      {
        craft: 'Big Tongs Roped Together',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Leather Scraps', 'Tongs' ]},
      {
        craft: 'Big Tongs Roped Together',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Cloth Scraps', 'Tongs' ]},
      {
        craft: 'Bowstring',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Sinew' ]},
      {
        craft: 'Improvised Shovel',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Bowl', 'Long Branch' ]},
      {
        craft: 'Lockpicks',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Any Hammer', 'Nine Inch Nails' ]},
      {
        craft: 'Lockpicks',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Needle' ]},
      {
        craft: 'Lockpicks',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Key', 'Soap' ]
      },
      {
        craft: 'Rope',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Yarn' ]
      },
      {
        craft: 'Backpack',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Rope', 'Leather Scraps' ]
      }
    ],
    weapons: [
      {
        craft: 'Crossbow',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	{ 'Bowstring', 'Crossbow without bowstring' ]},
      {
        craft: 'Improv Wand',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	{ 'Short Stick', 'Skull' ]},
      {
        craft: 'Improv Wand',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	{ 'Ancient Human Skull', 'Short Stick' ]},
      {
        craft: 'Improvised Staff',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	{ 'Long Branch', 'Shell' ]},
      {
        craft: 'Knife On A Stick',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	{ 'Any Knife', 'Rope', 'Short Stick' ]},
      {
        craft: 'Knife On A Stick',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	{ 'Any Dagger', 'Rope', 'Short Stick' ]},
      {
        craft: 'Makeshift Club',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { '	Long Branch', 'Sharp Rock' ]},
      {
        craft: 'Makeshift Club',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { '	Cloth Scraps', 'Long Branch' ]},
      {
        craft: 'Makeshift Club',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { '	Leather Scraps', 'Long Branch' ]},
      {
        craft: 'Makeshift Wand',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	{ 'Short Stick', 'Skull' ]},
      {
        craft: 'Primitive Harpoon',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	{ 'Arrowhead', 'Long Branch' ]},
      {
        craft: 'Primitive Harpoon',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	{ 'Long Branch', 'Sharp Piece of Metal' ]},
      {
        craft: 'Sharp Stone On A Big Branch',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Long Branch', 'Sharp Rock' ]},
      {
        craft: 'Sharp Stone On A Stick',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: { 'Sharp Rock', 'Short Stick' ]},
      {
        craft: 'Shiv',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	{ 'Handkerchief', 'Sharp Piece of Metal' ]},
      {
        craft: 'Shiv',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	{ 'Leather Scraps', 'Sharp Piece of Metal' ]},
      {
        craft: 'Shiv',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	{ 'Cloth Scraps', 'Sharp Piece of Metal' ]},
      {
        craft: 'Shiv',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	{ 'Anvil', 'Any Hammer', 'Sharp Piece of Metal' ]},
      {
        craft: 'Toy Crossbow',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	{ 'Long Branch', 'Short Stick' ]},
      {
        craft: 'Twig With A String',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	{ 'Bowstring', 'Short Stick' ]}
    ],
    herbmixes: [
      { craft: 'Alertness Herbmix',
        img: 'photos/items/make/Alertness_Herbmix.webp',
        description: 'Wits + 8',
        ingredients: { 'Drudanae', 'Puffball' ]
      },
      { craft: 'Courage_Herbmix',
        img: 'photos/items/make/Courage Herbmix.webp',
        description: 'Constitution + 8',
        ingredients: { 'Drudanae', 'Farhangite' ]
      },
      { craft: 'Enlightenment Herbmix',
        img: 'photos/items/make/Enlightenment_Herbmix.webp',
        description: 'Intelligence + 8',
        ingredients: { 'Drudanae', 'Calocera' ]
      },
      { craft: 'Ferocity Herbmix',
        img: 'photos/items/make/Enlightenment_Herbmix.webp',
        description: 'Start AP: + 2, AP Recovery: + 2',
        ingredients: { 'Drudanae', 'Augmentor' ]
      },
      { craft: 'Potent Alertness Herbmix',
        img: 'photos/items/make/Potent_Alertness_Herbmix.webp',
        description: 'Wits + 8',
        ingredients: { 'Alertness Herbmix', 'Void-Tainted Yellow Ridgeback' ]
      },
      { craft: 'Potent Enlightenment Herbmix',
        img: 'photos/items/make/Potent_Enlightenment_Herbmix.webp',
        description: 'Intelligence + 8',
        ingredients: { 'Enlightenment Herbmix', 'Void-Tainted Umber Monkfish' ]
      },
      { craft: 'Potent Ferocity Herbmix',
        img: 'photos/items/make/Potent_Ferocity_Herbmix.webp',
        description: 'Start AP: + 2, AP Recovery: + 2 ',
        ingredients: { 'Ferocity Herbmix', 'Void-Tainted Crimson Beam' ]
      }
    ],
    blankSkillbooks: [
      {
        craft: 'Quill',
        img: '',
        description: '',
        ingredients: { 'Any Feather 	Any Cutting Tool' ]
      },
      {
        craft: 'Leather Cover',
        img: '',
        description: '',
        ingredients: { 'Any Cutting Tool', 'Leather Scraps', 'Leather Scraps' ]
      },
      {
        craft: 'Blank Air Skillbook',
        img: '',
        description: '',
        ingredients: { 'Leather Cover', 'Quill', 'Distinctive Tea' ]
      },
      {
        craft: 'Blank Earth Skillbook',
        img: '',
        description: '',
        ingredients: { 'Leather Cover', 'Quill', 'Distinctive Amadouvier' ]
      },
      {
        craft: 'Blank Fire Skillbook',
        img: '',
        description: '',
        ingredients: { 'Leather Cover', 'Quill', 'Distinctive Boletus' ]
      },
      {
        craft: 'Blank Necromancy Skillbook',
        img: '',
        description: '',
        ingredients: { 'Leather Cover', 'Quill', 'Distinctive Trumpet of Death' ]
      },
      {
        craft: 'Blank Polymorph Skillbook',
        img: '',
        description: '',
        ingredients: { 'Leather Cover', 'Quill', 'Distinctive Whisperwood' ]
      },
      {
        craft: 'Blank Summoning Skillbook',
        img: '',
        description: '',
        ingredients: { 'Leather Cover', 'Quill', 'Distinctive Drudanae' ]
      },
      {
        craft: 'Blank Water Skillbook',
        img: '',
        description: '',
        ingredients: { 'Leather Cover', 'Quill', 'Distinctive Farhangite' ]
      },
      {
        craft: 'High Tier Blank Air Skillbook',
        img: '',
        description: '',
        ingredients: { 'Blank Air Skillbook', 'Quill', 'Distinctive Tea' ]
      },
      {
        craft: 'High Tier Blank Earth Skillbook',
        img: '',
        description: '',
        ingredients: { 'Blank Earth Skillbook', 'Quill', 'Distinctive Amadouvier' ]
      },
      {
        craft: 'High Tier Blank Fire Skillbook',
        img: '',
        description: '',
        ingredients: { 'Blank Fire Skillbook', 'Quill', 'Distinctive Boletus' ]
      },
      {
        craft: 'High Tier Blank Necromancy Skillbook',
        img: '',
        description: '',
        ingredients: { 'Blank Necromancy Skillbook', 'Quill', 'Distinctive Trumpet of Death' ]
      },
      {
        craft: 'High Tier Blank Polymorph Skillbook',
        img: '',
        description: '',
        ingredients: { 'Blank Polymorph Skillbook', 'Quill', 'Distinctive Whisperwood' ]
      },
      {
        craft: 'High Tier Blank Summoning Skillbook',
        img: '',
        description: '',
        ingredients: { 'Blank Summoning Skillbook', 'Quill', 'Distinctive Drudanae' ]
      },
      {
        craft: 'High Tier Blank Water Skillbook',
        img: '',
        description: '',
        ingredients: { 'Blank Water Skillbook', 'Quill', 'Distinctive Farhangite' ]
      },
    ]
  }
];

let craftingStations = [
  { station: 'Anvil', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Beer Barrel', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Bench Saw', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Boiling Pot', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Bonfire', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Campfire', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Dreamer Pipe', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Hand Water Pump', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Oven', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Pot Still', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Spinning Wheel', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Stove', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Well', img: 'photos/items/crafting_stations/', checked: false },
  { station: 'Wine Barrel', img: 'photos/items/crafting_stations/wine_barrel.png', checked: false }
];

let skillBooks = [
  {
    craft: 'Blinding Radiance Skillbook',
    img: '',
    description: '',
    ingredients:	{ 'Aerotheurge Blank Skill Book', 'Blinding Radiance Scroll' ]
  },
  {
  craft: 'Chain Lightning Skillbook',
  img: '',
  description: '',
  ingredients: { '	Aerotheurge Blank Skill Book', 'Chain Lightning Scroll' ]
  },
  {
  craft: 'Electric Fence Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Aerotheurge Blank Skill Book', 'Electric Fence Scroll' ]
  },
  {
  craft: 'Favourable Wind Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Aerotheurge Blank Skill Book', 'Favourable Wind Scroll' ]
  },
  {
  craft: 'Lightning Bolt Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Aerotheurge Blank Skill Book', 'Lightning Bolt Scroll' ]
  },
  {
  craft: 'Teleportation Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Aerotheurge Blank Skill Book', 'Teleportation Scroll' ]
  },
  {
  craft: 'Shocking Touch Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Aerotheurge Blank Skill Book', 'Shocking Touch Scroll' ]
  },
  {
  craft: 'Tornado Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Aerotheurge Blank Skill Book', 'Tornado Scroll' ]
  },
  {
  craft: 'Acid Spores Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Geomancer Blank Skill Book', 'Acid Spores Scroll' ]
  },
  {
  craft: 'Contamination Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Geomancer Blank Skill Book', '	Contamination Scroll' ]
  },
  {
  craft: 'Corrosive Spray Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Geomancer Blank Skill Book', 'Any Source Necromancy Skillbook' ]
  },
  {
  craft: 'Fortify Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Geomancer Blank Skill Book', 'Fortify Scroll' ]
  },
  {
  craft: 'Poison Dart Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Geomancer Blank Skill Book', 'Poison Dart Scroll' ]
  },
  {
  craft: 'Fossil Strike Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Geomancer Blank Skill Book', 'Fossil Strike Scroll' ]
  },
  {
  craft: 'Impalement Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Geomancer Blank Skill Book', 'Impalement Scroll' ]
  },
  {
  craft: 'Burn My Eyes Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Pyrokinetic Blank Skill Book', 'Burn My Eyes Scroll' ]
  },
  {
  craft: 'Fireball Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Pyrokinetic Blank Skill Book', 'Fireball Scroll' ]
  },
  {
  craft: 'Fireblood Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Pyrokinetic Blank Skill Book', 'Any Polymorph Skillbook' ]
  },
  {
  craft: 'Fireblood Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Pyrokinetic Blank Skill Book', 'Fireblood Scroll' ]
  },
  {
  craft: 'Searing Daggers Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Pyrokinetic Blank Skill Book', 'Searing Daggers Scroll' ],
  },
  {
  craft: 'Haste Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Pyrokinetic Blank Skill Book', 'Haste Scroll' ],
  },
  {
  craft: 'Ignition Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Pyrokinetic Blank Skill Book', 'Ignition Scroll' ],
  },
  {
  craft: 'Infectious Flame Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Pyrokinetic Blank Skill Book', 'Infectious Flame Scroll' ],
  },
  {
  craft: 'Spontaneous Combustion Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Pyrokinetic Blank Skill Book', 'Spontaneous Combustion Scroll' ],
  },
  {
  craft: 'Blood Sucker Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Necromancer Blank Skill Book', 'Blood Sucker Scroll' ],
  },
  {
  craft: 'Decaying Touch Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Necromancer Blank Skill Book', 'Decaying Touch Scroll' ],
  },
  {
  craft: 'Mosquito Swarm Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Necromancer Blank Skill Book', 'Mosquito Swarm Scroll' ],
  },
  {
  craft: 'Rain of Blood Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Necromancer Blank Skill Book', 'Rain of Blood Scroll' ],
  },
  {
  craft: 'Shackles of Pain Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Necromancer Blank Skill Book', 'Shackles of Pain Scroll' ],
  },
  {
  craft: 'Infect Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Necromancer Blank Skill Book', 'Infect Scroll' ],
  },
  {
  craft: 'Tentacle Lash Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Polymorph Blank Skill Book', 'Tentacle Lash Scroll' ],
  },
  {
  craft: 'Chicken Claw Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Polymorph Blank Skill Book', 'Chicken Claw Scroll' ],
  },
  {
  craft: 'Bull Horns Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Polymorph Blank Skill Book', 'Bull Horns Scroll' ],
  },
  {
  craft: 'Chameleon Cloak Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Polymorph Blank Skill Book', 'Chameleon Cloak Scroll' ],
  },
  {
  craft: 'Heart of Steel Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Polymorph Blank Skill Book', 'Heart of Steel Scroll' ],
  },
  {
  craft: 'Spread Your Wings Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Polymorph Blank Skill Book', 'Spread Your Wings Scroll' ],
  },
  {
  craft: 'Conjure Incarnate Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Summoning Blank Skill Book', 'Conjure Incarnate Scroll' ],
  },
  {
  craft: 'Dimensional Bolt Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Summoning Blank Skill Book', 'Dimensional Bolt Scroll' ],
  },
  {
  craft: 'Elemental Totem Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Summoning Blank Skill Book', 'Elemental Totem Scroll' ],
  },
  {
  craft: 'Farsight Infusion Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Summoning Blank Skill Book', 'Farsight Infusion Scroll' ],
  },
  {
  craft: 'Power Infusion Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Summoning Blank Skill Book', 'Power Infusion Scroll' ],
  },
  {
  craft: 'Rallying Cry Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Summoning Blank Skill Book', 'Rallying Cry Scroll' ],
  },
  {
  craft: 'Supercharger Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Summoning Blank Skill Book', 'Supercharger Scroll' ],
  },
  {
  craft: 'Armour of Frost Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Hydrosophist Blank Skill Book', 'Armour of Frost Scroll' ],
  },
  {
  craft: 'Hail Strike Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Hydrosophist Blank Skill Book', 'Hail Strike Scroll' ],
  },
  {
  craft: 'Healing Ritual Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Hydrosophist Blank Skill Book', 'Healing Ritual Scroll' ],
  },
  {
  craft: 'Rain Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Hydrosophist Blank Skill Book', 'Rain Scroll' ],
  },
  {
  craft: 'Restoration Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Hydrosophist Blank Skill Book', 'Restoration Scroll' ],
  },
  {
  craft: 'Winter Blast Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Hydrosophist Blank Skill Book', 'Winter Blast Scroll' ],
  },
  {
  craft: 'Steam Lance Skillbook',
  img: '',
  description: '',
  ingredients:	{ 'Hydrosophist Blank Skill Book', 	'Global Cooling Scroll' ]
  }
];

let baseSkillBooks = [
  {
    craft: 'Vacuum Touch',
    ingredients: { 'Aerothurge 	Necromancer 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Vaporize 	Aerothurge',
    ingredients: { 'Polymorphing 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Erratic Wisp',
    ingredients: { 'Aerothurge 	Huntsman 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Smoke Cover',
    ingredients: { 'Aerothurge 	Scoundrel 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Electric Infusion',
    ingredients: { 'Aerothurge 	Summoning 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Breathing Bubble',
    ingredients: { 'Aerothurge 	Warfare 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Corrosive Spray',
    ingredients: { 'Geomancer 	Necromancer 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Turn To Oil',
    ingredients: { 'Geomancer 	Polymorphing 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Throw Dust',
    ingredients: { 'Geomancer 	Huntsman 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Venom Coating',
    ingredients: { 'Geomancer 	Scoundrel 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Poison Infusion',
    ingredients: { 'Geomancer 	Summoning 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Oily Carapace',
    ingredients: { 'Geomancer 	Warfare 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Corpse Explosion',
    ingredients: { 'Pyrokinetic 	Necromancer 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Bleed Fire',
    ingredients: { 'Pyrokinetic 	Polymorphing 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Throw Explosive Trap',
    ingredients: { 'Pyrokinetic 	Huntsman 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Sabotage 	Pyrokinetic',
    ingredients: { 'Scoundrel 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Fire Infusion',
    ingredients: { 'Pyrokinetic 	Summoning 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Sparking Swings',
    ingredients: { 'Pyrokinetic 	Warfare 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Raining Blood',
    ingredients: { 'Hydrosophist 	Necromancer 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Healing Tears',
    ingredients: { 'Hydrosophist 	Polymorphing 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Cryotherapy',
    ingredients: { 'Hydrosophist 	Huntsman 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Vampiric Hunger',
    ingredients: { 'Hydrosophist 	Scoundrel 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Water Infusion',
    ingredients: { 'Hydrosophist 	Summoning 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Cleanse Wounds',
    ingredients: { 'Hydrosophist 	Warfare 	Neither skillbook may consume Source points.
  }
]

let enchantment = [
  {
    craft: 'Weapon deals X-X bonus poison damage based on item level',
    ingredients: { 'Weapon',	'Any Poison Source', 'Ooze Barrel' ]
  },
  {
    craft: 'Weapon deals X-X bonus fire damage based on item level',
    ingredients: { 'Weapon (except wand)',	'Oil Barrel',	'Campfire Crafter\'s kit gift bag']
  },
  {
    craft: 'Grants immunity to slipping on ice',
    ingredients: { 'Nails',	'Boots ' ]
  },
  {
    craft: '2 finesse, 1 huntsman, adds physical armor',
    ingredients: { 'Helmet',	'Eternal Artefact' ]
  },
  {
    craft: '10% air resistance, adds physical armor',
    ingredients: { 'Chest',	'Eternal Artefact' ]
  },
  {
    craft: '2 strength, 1 warfare, adds physical armor',
    ingredients: { 'Belt',	'Eternal Artefact' ]
  },
  {
    craft: '2 constitution, 10% earth resistance, adds physical armor',
    ingredients: { 'Gloves',	'Eternal Artefact' ]
  },
  {
    craft: '1 polymorph, 10% air resistance, adds physical armor',
    ingredients: { 'Leggings',	'Eternal Artefact' ]
  },
  {
    craft: '1 thievery, 0.1 move points, adds physical armor',
    ingredients: { 'Boots',	'Eternal Artefact' ]
  },
  {
    craft: '1 scoundrel',
    ingredients: { 'Ring',	'Eternal Artefact' ]
  }
]