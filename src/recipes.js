let recipes = [
  {
    armor: [
      {
        craft: 'Armour of the Eternals',
        img: 'photos/items/make/Armor_of_the_Eternals.webp',
        description: '',
        ingredients: [ 'Eternal Artefact', 'Eternal Plate', 'Metal Scraps', 'Source Orb' ]
      },
      {
        craft: 'Dwarven Mask of the Shapeshifter',
        img: 'photos/items/make/Dwarven_Mask_of_the_Shapeshifter.webp',
        description: '',
        ingredients: [ 'Ripped-Off Dwarven Face', 'Source Orb' ]
      },
      {
        craft: 'Elven Mask of the Shapeshifter',
        img: 'photos/items/make/Elven_Mask_of_the_Shapeshifter.webp',
        description: '',
        ingredients: [ 'Ripped-Off Elven Face', 'Source Orb' ]
      },
      {
        craft: 'Human Mask of the Shapeshifter',
        img: 'photos/items/make/Human_Mask_of_the_Shapeshifter.webp',
        description: '',
        ingredients: [ 'Ripped-Off Human Face', 'Source Orb' ]
      },
      {
        craft: 'Lizard Mask of the Shapeshifter',
        img: 'photos/items/make/Lizard_Mask_of_the_Shapeshifter.webp',
        description: '',
        ingredients: [ 'Ripped-Off Lizard Face', 'Source Orb' ]
      },
      {
        craft: 'Mask of the Shapeshifter',
        img: 'photos/items/make/Mask_of_the_Shapeshifter.webp',
        description: '',
        ingredients: [ 'Lizard Mask of the Shapeshifter', 'Human Mask of the Shapeshifter', 'Elven Mask of the Shapeshifter', 'Dwarven Mask of the Shapeshifter', 'Source Orb' ]
      },
      {
        craft: 'Cloth Scraps',
        img: 'photos/items/Cloth_Scraps.webp',
        description: '',
        ingredients: [ 'Any Cutting Tool', 'Bedlinen']
      },
      {
        craft: 'Handmade Chain Armour',
        img: 'photos/items/no item.png',
        description: '',
        ingredients: [ 'Metal Scraps', 'Needle and Thread' ]
      },
      {
        craft: 'Handmade Cloth Shirt',
        img: 'photos/items/make/Stained_Shirt.webp',
        description: '',
        ingredients: [ 'Cloth Scraps', 'Needle and Thread' ]
      },
      {
        craft: 'Handmade Leather Armour',
        img: 'photos/items/make/Handmade_Armour.webp',
        description: '',
        ingredients: [ 'Leather Scraps', 'Needle and Thread' ]
      },
      {
        craft: 'Handmade Mage Armour',
        img: 'photos/items/make/Handmade_Mage_Armour.webp',
        description: '',
        ingredients: [ 'Cloth Scraps', 'Needle and Thread', 'Pixie Dust' ]
      },
      {
        craft: 'Handmade Plate Armour',
        img: 'photos/items/make/Handmade_Armour.webp',
        description: '',
        ingredients: [ 'Anvil', 'Plate Scraps' ]
      },
      {
        craft: 'Handmade Plate Armour',
        img: 'photos/items/make/Handmade_Armour.webp',
        description: '',
        ingredients: [ 'Anvil', 'Any Hammer', 'Plate Scraps' ]
      },
      {
        craft: 'Handmade Scale Armour',
        img: 'photos/items/make/Handmade_Scale_Armour.webp',
        description: '',
        ingredients: [ 'Anvil', 'Any Hammer', 'Scale Scraps' ]
      },
      {
        craft: 'Handmade Shield',
        img: 'photos/items/make/',
        description: '',
        ingredients: [ 'Metal Scraps', 'Wood Chips' ]},
      {
        craft: 'Leather Scraps',
        img: 'photos/items/Leather_Scraps.webp',
        description: '',
        ingredients: [ 'Animal Hide', 'Any Knife' ]},
      {
        craft: 'Needle and Thread',
        img: 'photos/items/Needle_and_Thread.webp',
        description: '',
        ingredients: [ 'Needle', 'Thread' ]},
      {
        craft: 'Yarn',
        img: 'photos/items/yarn.webp',
        description: '',
        ingredients: [	'Wool' ]}
    ],
    arrows: [
      {
        craft: 'Arrow Shaft',
        img: 'photos/items/Arrow_Shaft.webp',
        description: '',
        ingredients: [ 'Any Cutting Tool', 'Short Stick' ]},
      {
        craft: 'Arrowhead',
        img: 'photos/items/Arrowhead.Webp',
        description: '',
        ingredients: [ 'Any Cutting Tool', 'Bone' ]
      },
      {
        craft: 'Arrowhead',
        img: 'photos/items/Arrowhead.webp',
        description: '',
        ingredients: [ 'Any Cutting Tool',	'Sharp Rock' ]
      },
      {
        craft: 'Arrow',
        img: 'photos/items/Arrow.webp',
        description: '',
        ingredients: [ 'Arrow Shaft',	'Arrowhead' ]
      },
      {
        craft: 'Blessed Water Arrow',
        img: 'photos/items/make/Blessed_Water_Arrow.webp',
        description: '',
        ingredients: [ 'Source Orb', 'Water Arrow' ]},
      {
        craft: 'Blessed Water Arrow',
        img: 'photos/items/make/Blessed_Water_Arrow.webp',
        description: '',
        ingredients: [ 'Arrow Shaft', 'Blessed Water Arrowhead' ]
      },
      {
        craft: 'Blessed Water Arrow',
        img: 'photos/items/make/Blessed_Water_Arrow.webp',
        description: '',
        ingredients: [ 'Arrow', 'Blessed Water Arrowhead' ]
      },
      {
        craft: 'Blessed Water Arrowhead',
        img: 'photos/items/make/Blessed_Water_Arrowhead.webp',
        description: '',
        ingredients: [ 'Source Orb', 'Water Arrowhead' ],
      },
      {
        craft: 'Charming Arrow',
        img: 'photos/items/make/Charming_Arrow.webp',
        description: 'Set Charmed for 1 Turn. Resisted by Magic Armour. Damage base on basic attack and Finesse.',
        ingredients: [ 'Arrow Shaft', 'Charming Arrowhead' ]
      },
      {
        craft: 'Charming Arrow',
        img: 'photos/items/make/Charming_Arrow.webp',
        description: 'Set Charmed for 1 Turn. Resisted by Magic Armour. Damage base on basic attack and Finesse.',
        ingredients: [ 'Arrow', 'Charming Arrowhead' ]
      },
      {
        craft: 'Charming Arrowhead',
        img: 'photos/items/make/Charming_Arrowhead.webp',
        description: '',
        ingredients: [ 'Arrowhead', 'Jar of Honey' ]
      },
      {
        craft: 'Explosive Arrow',
        img: 'photos/items/make/Explosive_Arrow.webp',
        description: 'Deals fire damage in a 2m radius, Set Burning for 1 Turn. Damage is based on basic attack and Finesse. Resisted by Magic Armour.',
        ingredients: [ 'Arrow Shaft', 'Explosive Arrowhead' ]
      },
      {
        craft: 'Explosive Arrowhead',
        img: 'photos/items/make/Explosive_Arrowhead.webp',
        description: '',
        ingredients: [ 'Any Oil Source', 'Fire Arrowhead' ]},
      {
        craft: 'Fire Arrow',
        img: 'photos/items/make/Fire_Arrow.webp',
        description: 'Deals fire damage. Set Burning for 1 Turn. Damage is based on basic attack and Finesse. Resisted by Magic Armour.',
        ingredients: [ 'Arrow Shaft', 'Fire Arrowhead' ]
      },
      {
        craft: 'Fire Arrowhead',
        img: 'photos/items/make/Fire_Arrowhead.webp',
        description: '',
        ingredients: [ 'Arrowhead', 'Fire Essence' ]
      },
      {
        craft: 'Freezing Arrow',
        img: 'photos/items/make/Freezing_Arrow.webp',
        description: 'Can freeze a target and does water damage. Set Chilled for 2 Turns. Damage is based on basic attack and Finesse. Resisted by Magic Armour.',
        ingredients: [ 'Arrow Shaft', 'Freezing Arrowhead' ]
      },
      {
        craft: 'Freezing Arrowhead',
        img: 'photos/items/make/Freezing_Arrowhead.webp',
        description: '',
        ingredients: [ 'Arrowhead', 'Water Essence' ]
      },
      {
        craft: 'Knockdown Arrow',
        img: 'photos/items/make/Knockdown_Arrow.webp',
        description: 'Knocks down target and deals physical damage. Set Knocked Down for 1 Turn. Resisted by Physical Armour.',
        ingredients: [ 'Arrow Shaft', 'Knockdown Arrowhead' ]
      },
      {
        craft: 'Knockdown Arrowhead',
        img: 'photos/items/make/Knockdown_Arrowhead.webp',
        description: '',
        ingredients: [ 'Antler', 'Any Cutting Tool' ]
      },
      {
        craft: 'Knockdown Arrowhead',
        img: 'photos/items/make/Knockdown_Arrowhead.webp',
        description: '',
        ingredients: [ 'Adult Antler', 'Any Cutting Tool' ]
      },
      {
        craft: 'Cursed Fire Arrow',
        img: 'photos/items/make/Cursed_Fire_Arrow.webp',
        description: '',
        ingredients: [ 'Fire Arrow', 'Source Orb' ]
      },
      {
        craft: 'Cursed Fire Arrowhead',
        img: 'photos/items/make/Cursed_Fire_Arrowhead.webp',
        description: '',
        ingredients: [ 'Fire Arrowhead', 'Source Orb' ]
      },
      {
        craft: 'Poison Arrow',
        img: 'photos/items/make/Poison_Arrow.webp',
        description: 'Can poison a target. Does Poison damage. Set Poisoned for 3 Turns. Damage is based on basic attack and Finesse. Resisted by Magic Armour.',
        ingredients: [ 'Arrow Shaft', 'Poisoned Arrowhead' ]
      },
      {
        craft: 'Poisoned Arrowhead',
        img: 'photos/items/make/Poison_Arrowhead.webp',
        description: '',
        ingredients: [ 'Any Poison Source', 'Arrowhead' ]
      },
      {
        craft: 'Poisoncloud Arrow',
        img: 'photos/items/make/Poisoncloud_Arrow.webp',
        description: '',
        ingredients: [ 'Arrow Shaft', 'Poisoncloud Arrowhead' ]
      },
      {
        craft: 'Poisoncloud Arrowhead',
        img: 'photos/items/make/Poisoncloud_Arrowhead.webp',
        description: '',
        ingredients: [ 'Arrowhead', 'Earth Essence' ]
      },
      {
        craft: 'Shocking Arrow',
        img: 'photos/items/make/Shocking_Arrow.webp',
        description: 'Sets Shocked on target. Deals Air Damage. Set Shocked for 1 Turn. Damage is based on your basic attack and Finesse. Resisted by Magic Armour.',
        ingredients: [ 'Arrow Shaft', 'Shocking Arrowhead' ]
      },
      {
        craft: 'Shocking Arrowhead',
        img: 'photos/items/make/Shocking_Arrowhead.webp',
        description: '',
        ingredients: [ 'Air Essence', 'Arrowhead' ]
      },
      {
        craft: 'Shocking Arrowhead',
        img: 'photos/items/make/Shocking_Arrowhead.webp',
        description: '',
        ingredients: [ 'Any Cutting Tool', 'Any Tooth' ]
      },
      {
        craft: 'Short Stick',
        img: 'photos/items/Short_Stick.webp',
        description: '',
        ingredients: [ 'Any Cutting Tool', 'Long Branch' ]
      },
      {
        craft: 'Slowdown Arrow',
        img: 'photos/items/make/Slowdown_Arrow.webp',
        description: 'Sets slowed for 2 Turns and deals physical damage. Set Slowed for 2 Turns. Damage is based on your basic attack and Finesse. Resisted by Magic Armour.',
        ingredients: [ 'Arrow Shaft', 'Slowdown Arrowhead' ]
      },
      {
        craft: 'Slowdown Arrowhead',
        img: 'photos/items/make/Slowdown_Arrowhead.webp',
        description: '',
        ingredients: [ 'Any Oil Source', 'Arrowhead' ]
      },
      {
        craft: 'Smokescreen Arrow',
        img: 'photos/items/make/Smokescreen_Arrow.webp',
        description: '',
        ingredients: [ 'Arrow Shaft', 'Smokescreen Arrowhead' ]
      },
      {
        craft: 'Smokescreen Arrowhead',
        img: 'photos/items/make/Smokescreen_Arrowhead.webp',
        description: '',
        ingredients: [ 'undefined', 'Arrowhead' ]
      },
      {
        craft: 'Static Cloud Arrow',
        img: 'photos/items/make/Static_Cloud_Arrow.webp',
        description: 'Creates a static cloud that sets Stun. Does Air Damage. Damage is based on your basic attack and Finesse.',
        ingredients: [ 'Arrow Shaft', 'Static Cloud Arrowhead' ]
      },
      {
        craft: 'Static Cloud Arrowhead',
        img: 'photos/items/make/Static_Cloud_Arrowhead.webp',
        description: '',
        ingredients: [ 'Air Essence', 'Arrowhead' ]},
      {
        craft: 'Steamcloud Arrow',
        img: 'photos/items/make/Steamcloud_Arrow.webp',
        description: '',
        ingredients: [ 'Arrow Shaft 	Steamcloud Arrowhead' ]
      },
      {
        craft: 'Steamcloud Arrowhead',
        img: 'photos/items/make/Steamcloud_Arrowhead.webp',
        description: '',
        ingredients: [ 'Any Water Source', 'Fire Arrowhead' ]
      },
      {
        craft: 'Water Arrow',
        img: 'photos/items/make/Water_Arrow.webp',
        description: 'Puts out fires. Deals Water Damage. Set Wet for 2 Turns. Damage is based on your basic attack and Finesse.',
        ingredients: [ 'Arrow Shaft', 'Water Arrowhead' ]
      },
      {
        craft: 'Water Arrowhead',
        img: 'photos/items/make/Water_Arrowhead.webp',
        description: '',
        ingredients: [ 'Any Water Source', 'Arrowhead' ]
      },
    ],
    food: [
      {
        craft: 'Apple Juice',
        img: 'photos/items/make/Apple_Juice.webp',
        description: 'Heals 10%, 10% Poison Resistance, Duration 6 Turns.',
        ingredients: [ 'Apple', 'Empty Cup' ]
      },
      {
        craft: 'Apple Pie',
        img: 'photos/items/make/Apple_Pie.webp',
        description: 'Heals 10%, 10% Poison Resistance, Duration 6 Turns.',
        ingredients: [ 'Apple Pie Dough', 'Oven' ]
      },
      {
        craft: 'Apple Pie Dough',
        img: 'photos/items/make/Apple_Pie_Dough.webp',
        description: '',
        ingredients: [ 'Apple', 'Dough' ]
      },
      {
        craft: 'Boiled Potato',
        img: 'photos/items/make/.webp',
        description: '1 Constitution, Heals 10%, Duration 6 Turns.',
        ingredients: [ 'Cooking Pot', 'Potato' ]},
      {
        craft: 'Bottle of Beer',
        img: 'photos/items/make/Bottle_of_Beer.webp',
        description: '-1 Intelligence, Heals 20%, Set Drunk for 2 Turns, Duration 5 Turns.',
        ingredients: [ 'Beer barrel', 'Empty Bottle' ]
      },
      {
        craft: 'Bottle of Water',
        img: 'photos/items/make/Bottle_of_Water.webp',
        description: 'Heals 5%, Duration 5 Turns.',
        ingredients: [ 'Any Water Source', 'Empty Bottle' ]
      },
      {
        craft: 'Bottle of Wine',
        img: 'photos/items/make/Empty_Bottle.webp',
        description: 'Heals 10%, Set Drunk for 2 Turns, Duration 5 Turns.',
        ingredients: [ 'Empty Bottle', 'Wine barrel' ]
      },
      {
        craft: 'Bread',
        img: 'photos/items/make/Bread.webp',
        description: '1 Strength, Heals 10%, Duration 3 Turns.',
        ingredients: [ 'Dough', 'Oven' ]
      },
      {
        craft: 'Cheese Bread',
        img: 'photos/items/make/Cheese_Bread.webp',
        description: '1 Constitution, Heals 10%, Duration 6 Turns.',
        ingredients: [ 'Cheese Bread Dough', 'Oven' ]
      },
      {
        craft: 'Cheese Bread Dough',
        img: 'photos/items/make/Cheese_Bread_Dough.webp',
        description: '',
        ingredients: [ 'Cheese', 'Dough' ]
      },
      {
        craft: 'Cold Fries',
        img: 'photos/items/make/cold_Fries.webp',
        description: 'Heals 5%, Duration 6 Turns.',
        ingredients: [ 'Any Cutting Tool', 'Potato' ]
      },
      {
        craft: 'Cold Mashed Potatoes',
        img: 'photos/items/make/Cold_Mashed_Potatoes.webp',
        description: '',
        ingredients: [ 'Any Hammer', 'Potato' ]
      },
      {
        craft: 'Cup of Beer',
        img: 'photos/items/make/.webp',
        description: '-1 Intelligence, Heals 20%, Set Drunk for 2 Turns, Duration 5 Turns.',
        ingredients: [ 'Beer barrel', 'Empty Cup' ]},
      {
        craft: 'Cup of Lemonade',
        img: 'photos/items/make/.webp',
        description: '1 Wits, Heals 5% Duration 5 Turns.',
        ingredients: [ 'Empty Cup', 'Lemon' ]},
      {
        craft: 'Cup of Tea',
        img: 'photos/items/make/Cup_of_Tea.webp',
        description: 'Heals 5%, Duration 5 Turns',
        ingredients: [ 'Cup of Water', 'Tea Herbs' ]
      },
      {
        craft: 'Cup of Water',
        img: 'photos/items/make/Cup_of_Water.webp',
        description: 'Heals 5%, Duration 5 Turns',
        ingredients: [ 'Any Water Source', 'Empty Cup' ]
      },
      {
        craft: 'Fish Pie',
        img: 'photos/items/make/Fish_Pie.webp',
        description: 'Heals + 10 %, Intelligence + 2 ',
        ingredients: [ 'Fish Pie Dough', 'Oven' ]
      },
      {
        craft: 'Dinner',
        img: 'photos/items/make/Dinner.webp',
        description: '2 Strength, Heals 20%, Duration 6 Turns.',
        ingredients: [ 'Any Raw food', 'Cooking Station' ]
      },
      {
        craft: 'Dinner',
        img: 'photos/items/make/Dinner.webp',
        description: '2 Strength, Heals 20%, Duration 6 Turns.',
        ingredients: [ 'Any Raw food', 'Oven' ]
      },
      {
        craft: 'Dough',
        img: 'photos/items/make/Dough.webp',
        description: '',
        ingredients: [ 'Any Water Source', 'Flour' ]
      },
      {
        craft: 'Dough',
        img: 'photos/items/make/Dough.webp',
        description: '',
        ingredients: [ 'Flour', 'Milk' ]
      },
      {
        craft: 'Dough',
        img: 'photos/items/make/Dough.webp',
        description: '',
        ingredients: [ 'Eggs', 'Flour', 'Milk' ]
      },
      {
        craft: 'Dwarven Stew',
        img: 'photos/items/make/Dwarven_Stew.webp',
        description: '1 Strength, Heals 10%, Duration 6 Turns Any Beersource works.',
        ingredients: [ 'Bottle of Beer', 'Dinner' ]
      },
      {
        craft: 'Elven Stew',
        img: 'photos/items/make/Elven_Stew.webp',
        description: '2 Finesse, Heals 20%, Duration 6 Turns.',
        ingredients: [ 'Dinner', 'Tomato Sauce' ]
      },
      {
        craft: 'Fish Pie Dough',
        img: 'photos/items/make/Fish_Pie_Dough.webp',
        description: '',
        ingredients: [ ['Red Snapper', 'Plaice', 'Mackerel', 'Herring', 'Chub Fish'], 'Dough' ]
      },
      {
        craft: 'Flour',
        img: 'photos/items/make/Flour.webp',
        description: '',
        ingredients: [ 'Mortar And Pestle', 'Wheat' ]
      },
      {
        craft: 'Glass of Wine',
        img: 'photos/items/make/n.webp',
        description: 'Heals 5%, Set Drunk for 2 Turns, Duration 5 Turns.',
        ingredients: [ 'Empty Cup', 'Grapes' ]
      },
      {
        craft: 'Glass of Wine',
        img: 'photos/items/make/n.webp',
        description: 'Heals 5%, Set Drunk for 2 Turns, Duration 5 Turns.',
        ingredients: [ 'Empty Cup', 'Wine barrel' ]
      },
      {
        craft: 'Jar of Honey',
        img: 'photos/items/make/n.webp',
        description: '1 Intelligence, Heals 5%, 15% Poison Resistance.',
        ingredients: [ 'Beehive', 'Empty Honey Jar' ]
      },
      {
        craft: 'Mashed Potatoes',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Boiled Potato', 'Milk' ]
      },
      {
        craft: 'Mashed Potatoes',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Cold Mashed Potatoes', 'Cooking Station' ]},
      {
        craft: 'Milk',
        img: 'photos/items/make/n.webp',
        description: 'Heals 10%, Duration 6 Turns.',
        ingredients: [ 'Empty Cup', 'Milk Jug' ]
      },
      {
        craft: 'Milk and Honey',
        img: 'photos/items/make/Milk_and_Honey.webp',
        description: ' 	Heals 15%, 20% Poison Resistance, Set Warm for 2 Turns, Duration 6 Turns.',
        ingredients: [ 'Jar of Honey', 'Milk' ]
      },
      {
        craft: 'Mug of Beer',
        img: 'photos/items/make/Mug_of_Beer.webp',
        description: '-1 Intelligence, Heals 20%, Set Drunk for 2 Turns, Duration 5 Turns.',
        ingredients: [ 'Beer barrel', 'Empty Mug' ]
      },
      {
        craft: 'Mug of Lemonade',
        img: 'photos/items/make/n.webp',
        description: '1 Wits, Heals 5% Duration 5 Turns.',
        ingredients: [ 'Empty Mug', 'Lemon' ]
      },
      {
        craft: 'Mug of Water',
        img: 'photos/items/make/Mug_of_Water.webp',
        description: 'Heals 5%, Duration 5 Turns.',
        ingredients: [ 'Any Water Source', 'Empty Mug' ]
      },
      {
        craft: 'Orange Juice',
        img: 'photos/items/make/Orange_Juice.webp',
        description: '1 Finesse, Heals 10%, Duration 6 Turns.',
        ingredients: [ 'Empty Cup', 'Orange' ]
      },
      {
        craft: 'Pizza',
        img: 'photos/items/make/Pizza.webp',
        description: '',
        ingredients: [ 'Oven', 'Pizza Dough' ]
      },
      {
        craft: 'Pizza Dough',
        img: 'photos/items/make/Pizza_Dough.webp',
        description: '',
        ingredients: [ 'Dough', 'Tomato Sauce' ]
      },
      {
        craft: 'Porridge',
        img: 'photos/items/make/porridge.png',
        description: '1 Strength, Heals 10%, Duration 6 Turns.',
        ingredients: [ 'Milk', 'Wheat' ]
      },
      {
        craft: 'Potato Porridge',
        img: 'photos/items/make/Potato_Porridge.webp',
        description: '1 Strength, Heals 10%, Duration 6 Turns.',
        ingredients: [ 'Milk', 'Potato' ]
      },
      {
        craft: 'Pumpkin Soup',
        img: 'photos/items/make/Pumpin_Soup.webp',
        description: '1 Wits, Heals 10%, Duration 6 Turns.',
        ingredients: [ 'Cooking Station', 'Pumpkin' ]
      },
      {
        craft: 'Rivellon Fries',
        img: 'photos/items/make/Rivellion_Fries.webp',
        description: '-1 Finesse, 1 Constitution, Heals 15%, Duration 6 Turns',
        ingredients: [ 'Cold Fries', 'Cooking Station' ]
      },
      {
        craft: 'Tomato Sauce',
        img: 'photos/items/make/Tomato_Sauce.webp',
        description: 'Heals 5%, Poison Resistance 10%, Duration 3 Turns.',
        ingredients: [ 'Any Hammer', 'Tomato' ]
      }
    ],
    grenades: [
      {
        craft: 'Bottle Filled With Oil',
        img: 'photos/items/make/n.webp',
        description: '-1 Intelligence, -1 Constitution, -50% Fire Resistance. Set Poisoned for 1 Turn. Duration 6 Turns.',
        ingredients: [ 'Any Oil Source', 'Empty Bottle' ]},
      {
        craft: 'Cluster Grenade',
        img: 'photos/items/make/n.webp',
        description: 'Dealing fire damage and creating a fire surface in a 3m radius. Set Burning for 2 Turns. Resisted by Magic Armour.',
        ingredients: [ 'Empty Grenade', 'Fire Essence' ]},
      {
        craft: 'Cursed Poison Flask',
        img: 'photos/items/make/n.webp',
        description: ' 	Creates a cursed poision surface and deals 98-131 poison damage. Set poisoned for 2 Turns.',
        ingredients: [ 'Any Poison Bottle', 'Source Orb' ]},
      {
        craft: 'Firestorm Grenade',
        img: 'photos/items/make/n.webp',
        description: 'Fire damage in a 2m radius. Set Burning for 3 Turns.',
        ingredients: [ 'Bottle Filled With Oil', 'Fuse' ]},
      {
        craft: 'Fuse',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Rope' ]},
      {
        craft: 'Holy Hand Grenade',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Sovereign\'s Orb', 'Starfish' ]},
      {
        craft: 'Love Grenade',
        img: 'photos/items/make/n.webp',
        description: 'Will try to charm all in a 4m radius. Set Charmed for 2 Turns. Resisted by Magic Armour.',
        ingredients: [ 'Empty Perfume Bottle', 'Jar of Honey' ]},
      {
        craft: 'Mind Maggot Grenade',
        img: 'photos/items/make/n.webp',
        description: 'Will try to charm all in a 8m radius. Set Charmed for 4 turns. Resisted by Magic Armour.',
        ingredients: [ 'A Jar of Mind Maggots', 'Empty Grenade' ]},
      {
        craft: 'Oil Flask',
        img: 'photos/items/make/n.webp',
        description: 'Creates an oil surface with a 2m radius.',
        ingredients: [ 'Any Oil Source', 'Empty Flask' ]},
      {
        craft: 'Razzle Dazzle Grenade',
        img: 'photos/items/make/n.webp',
        description: 'Can inflict blind in a 4m radius. Set blinded for 2 Turns. Resisted by Magic Armour.',
        ingredients: [ 'Any Air Resistance Potion', 'Empty Canister' ]},
      {
        craft: 'Razzle Dazzle Grenade',
        img: 'photos/items/make/n.webp',
        description: 'Can inflict blind in a 4m radius. Set blinded for 2 Turns. Resisted by Magic Armour.',
        ingredients: [ 'Empty Canister', 'Jellyroom' ]},
      {
        craft: 'Terror Grenade',
        img: 'photos/items/make/n.webp',
        description: 'Terrified, Duration 1 Turn',
        ingredients: [ 'Empty Canister', 'Tormented Soul' ]},
      {
        craft: 'Thunderbolt Grenade',
        img: 'photos/items/make/n.webp',
        description: 'Stun targets in a 4m radius and deal air damage. Set Shocked for 2 Turns. Resisted by Magic Armour.',
        ingredients: [ 'Air Essence', 'Empty Canister' ]},
      {
        craft: 'Tremor Grenade',
        img: 'photos/items/make/n.webp',
        description: 'Earth Damage, Knocked down for 1 turn Empty Canister/Grenade',
        ingredients: [ 'Earth Essence', 'Empty Canister' ]},
      {
        craft: 'Water Balloon',
        img: 'photos/items/make/n.webp',
        description: 'Creates a small water surface with a 3m radius. Set Wet for 3 Turns.',
        ingredients: [ 'Any Water Source', 'Intestines' ]},
    ],
    potions: [
      {
        craft: 'Any Poison Bottle',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Any Healing Potion 	Zaikk\'s Talon' ]},
      {
        craft: 'Arrowhead',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ '	Any Cutting Tool 	Sharp Piece of Metal' ]},
      {
        craft: 'Ferocity Herbmix',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Augmentor 	Drudanae' ]},
      {
        craft: 'Giant Healing Potion',
        img: 'photos/items/make/n.webp',
        description: 'Heals +1670 Vitality',
        ingredients: [ 'Huge Healing Potion' ]},
      {
        craft: 'Giant Poison Potion',
        img: 'photos/items/make/n.webp',
        description: '1220-13480 Poision, Set Poisoned for 3 Turns 2 x HPB',
        ingredients: [ 'Huge Poison Bottle' ]},
      {
        craft: 'Healing Elixir',
        img: 'photos/items/make/n.webp',
        description: 'Heals +80 Vitality',
        ingredients: [ 'Empty Potion Bottle 	Yarrow Flower' ]},
      {
        craft: 'Healing Potion',
        img: 'photos/items/make/n.webp',
        description: 'Heals +330 Vitality',
        ingredients: [ 'Medium Healing Potion' ]},
      {
        craft: 'Huge Earth Resistance Potion',
        img: 'photos/items/make/n.webp',
        description: '+90% Earth Resistance for 3 Turns.',
        ingredients: [ 'Large Earth Resistance Potion' ]},
      {
        craft: 'Huge Healing Potion',
        img: 'photos/items/make/n.webp',
        description: 'Heals +870 Vitality.',
        ingredients: [ 'Healing Potion' ]},
      {
        craft: 'Huge Poison Bottle',
        img: 'photos/items/make/n.webp',
        description: '+635-701 Poison, Set Poisoned for 3 Turns.',
        ingredients: [ 'Large Poison Bottle' ]},
      {
        craft: 'Large Earth Resistance Potion',
        img: 'photos/items/make/n.webp',
        description: '+75% Earth Resistance for 3 Turns.',
        ingredients: [ 'Medium Earth Resistance Potion' ]},
      {
        craft: 'Large Magic Armor Potion',
        img: 'photos/items/make/n.webp',
        description: '+309 Magical Armor, 5 Turn Duration 2 x MMAP.',
        ingredients: [ 'Medium Magic Armor Potion' ]},
      {
        craft: 'Large Physical Armour Potion',
        img: 'photos/items/make/n.webp',
        description: '+294 Physical Armour. Duration 5 Turns 2 x MPAP.',
        ingredients: [ 'Medium Physical Armour Potion' ]},
      {
        craft: 'Large Poison Bottle',
        img: 'photos/items/make/n.webp',
        description: '+243-269 Poison Damage, Set Poisoned for 3 Turns.',
        ingredients: [ 'Medium Poison Bottle' ]},
      {
        craft: 'Medium Earth Resistance Potion',
        img: 'photos/items/make/n.webp',
        description: '+50% Earth Resistance for 3 Turns.',
        ingredients: [ 'Earth Resistance Potion' ]},
      {
        craft: 'Medium Healing Potion',
        img: 'photos/items/make/n.webp',
        description: 'Heals +140 Vitality.',
        ingredients: [ 'Minor Healing Potion' ]},
      {
        craft: 'Medium Magic Armor Potion',
        img: 'photos/items/make/n.webp',
        description: '+111 Magical Armor, 5 Turn Duration 2 x SMAP.',
        ingredients: [ 'Small Magic Armor Potion' ]},
      {
        craft: 'Medium Physical Armour Potion',
        img: 'photos/items/make/n.webp',
        description: '+105 Physical Armour. Duration 5 Turns 2 x PAP.',
        ingredients: [ 'Physical Armor Potion' ]},
      {
        craft: 'Medium Poison Bottle',
        img: 'photos/items/make/n.webp',
        description: '129-143 Poison Damage, Set Poisoned for 2 Turns.',
        ingredients: [ 'Small Poison Bottle' ]},
      {
        craft: 'Minor Constitution Potion',
        img: 'photos/items/make/n.webp',
        description: '1 Constitution, Duration for 3 Turns.',
        ingredients: [ 'Empty Potion Bottle 	Farhangit' ]},
      {
        craft: 'Minor Finesse Potion',
        img: 'photos/items/make/n.webp',
        description: '+1 Finesse for 3 Turns.',
        ingredients: [ 'Boletus 	Empty Potion Bottle' ]},
      {
        craft: 'Minor Healing Potion',
        img: 'photos/items/make/n.webp',
        description: 'Heals +30 Vitality.',
        ingredients: [ 'Empty Potion Bottle 	Penny Bun Mushroom' ]},
      {
        craft: 'Minor Resist All Potion',
        img: 'photos/items/make/n.webp',
        description: '15% to all Resistances. Duration 3 Turns.',
        ingredients: [ 'Empty Potion Bottle 	Trumpet of Death' ]},
      {
        craft: 'Minor Strength Potion',
        img: 'photos/items/make/n.webp',
        description: '1 Strength, Duration 3 Turns.',
        ingredients: [ 'Amethyst Deceiver 	Empty Potion Bottle' ]},
      {
        craft: 'Minor Wits Potion',
        img: 'photos/items/make/n.webp',
        description: '1 Wits, Duration 3 Turns.',
        ingredients: [ 'Empty Potion Bottle 	Puffball' ]},
      {
        craft: 'Physical Armor Potion',
        img: 'photos/items/make/n.webp',
        description: '+30 Physical Armor, 5 Turn Duration.',
        ingredients: [ 'Amadouvier 	Empty Potion Bottle' ]},
      {
        craft: 'Small Air Resistance Potion',
        img: 'photos/items/make/n.webp',
        description: '+15% Air Resistance for 3 Turns.gj+15% Air Resistance for 3 Turns',
        ingredients: [ 'Empty Potion Bottle 	Jellyroom' ]},
      {
        craft: 'Small Earth Resistance Potion',
        img: 'photos/items/make/n.webp',
        description: '+15% Earth Resistance for 3 Turns.',
        ingredients: [ 'Earth Tongue Mushroom 	Empty Potion Bottle' ]},
      {
        craft: 'Small Fire Resistance Potion',
        img: 'photos/items/make/n.webp',
        description: '+15% Fire Resistance for 3 Turns.',
        ingredients: [ 'Empty Potion Bottle 	Guepinia Mushroom' ]},
      {
        craft: 'Small Magic Armor Potion',
        img: 'photos/items/make/n.webp',
        description: '+32 Magical Armor, 5 Turn Duration.',
        ingredients: [ 'Empty Potion Bottle 	Whisperwood' ]},
      {
        craft: 'Small Poison Bottle',
        img: 'photos/items/make/n.webp',
        description: '+57-63 Poison, Sets Poisoned for 2 turns.',
        ingredients: [ 'Empty Potion Bottle 	Ooze Barrel' ]},
      {
        craft: 'Small Poison Bottle',
        img: 'photos/items/make/n.webp',
        description: '+57-63 Poison, Sets Poisoned for 2 turns.',
        ingredients: [ 'Minor Healing Potion 	Zaikk\'s Talon' ]},
      {
        craft: 'Small Poison Bottle',
        img: 'photos/items/make/n.webp',
        description: '+57-63 Poison, Sets Poisoned for 2 turns.',
        ingredients: [ 'Empty Potion Bottle 	Fly Agaric Mushroom' ]},
      {
        craft: 'Small Water Resistance Potion',
        img: 'photos/items/make/n.webp',
        description: '+15% Water Resistance for 3 Turns.',
        ingredients: [ 'Bluegill Mushroom 	Empty Potion Bottle' ]},
      {
        craft: 'Stoneskin Potion',
        img: 'photos/items/make/n.webp',
        description: '+211 Physical Armour, -50% Movement Speed, Immunity to (Burning, Stunned, Poisoned, Bleeding, Petrified, Shocked), Duration 2 Turns.',
        ingredients: [ 'Earth Essence 	Empty Potion Bottle' ]},
    ],
    runes: [
      {
        craft: 'Any Giant Rune',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Any Large Rune', 'Superior Pixie Dust' ]},
      {
        craft: 'Any Large Rune',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Any Medium Rune', 'Pixie Dust' ]},
      {
        craft: 'Any Medium Rune',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Any Small Rune', 'Pixie Dust' ]},
      {
        craft: 'Any Mystical Rune',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Any Giant Rune', 'Mystical Rune Frame' ]},
      {
        craft: 'Any Rune of Power',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Any Giant Rune', 'Rune Frame of Power' ]},
      {
        craft: 'Small Flame Rune',
        img: 'photos/items/make/n.webp',
        description: 'Weapon: X% Fire Damage. Armor: X% Fire Resistance. Jewelry: X% Critical Chance.',
        ingredients: [ 'Any Oil Source', 'Pixie Dust 	Wood Chips' ]},
      {
        craft: 'Small Frost Rune',
        img: 'photos/items/make/n.webp',
        description: 'Weapon: X% Water Damage. Armor: X% Water resistance. Jewelry: Extra movementspeed.',
        ingredients: [ 'Any Water Source', 'Metal Scraps 	Pixie Dust' ]},
      {
        craft: 'Small Masterwork Rune',
        img: 'photos/items/make/n.webp',
        description: 'Weapon: X% Physical Damage. Armor: X% Maxim Physical Armour. Jewelry: X% Maxium Magic Armour.',
        ingredients: [ 'Any Wine Source', 'Livewood Log 	Pixie Dust' ]},
      {
        craft: 'Small Rock Rune',
        img: 'photos/items/make/n.webp',
        description: 'Weapon: X% Earth Damage. Armor: X% Earth Resistance. Jewelry: +X Maximum Vitality.',
        ingredients: [ 'Any Beer Source', 'Any Rock', 'Pixie Dust' ]},
      {
        craft: 'Small Thunder Rune',
        img: 'photos/items/make/n.webp',
        description: 'Weapon: X% Air Damage. Armor: X% Air Resistance. Jewelry: +X% Dodging.',
        ingredients: [ 'Any Gold', 'Any Water Source', 'Pixie Dust' ]},
      {
        craft: 'Small Venom Rune',
        img: 'photos/items/make/n.webp',
        description: 'Weapon: X% Poison Damage. Armor: X% Poison Resistance. Jewelry: +X Accuracy.',
        ingredients: [ 'Any Bone', 'Any Poison Source', 'Pixie Dust' ]},
    ],
    scrolls: [
      {
        craft: 'Acid Spores Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Livewood Log', 'Sheet of Paper', 'Source Orb' ]},
      {
        craft: 'Apotheosis Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Bead', 'Sheet of Paper', 'Source Orb' ]},
      {
        craft: 'Apportation Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'High Quality Air Essence', 'Rope', 'Sheet of Paper' ]},
      {
        craft: 'Armour of Frost Scroll',
        img: 'photos/items/make/n.webp',
        description: 'Cures Burning, Poisoned, Stunned, Frozen, Suffocating and Petrified.',
        ingredients: ['Bluegill Mushroom', 'Sheet of Paper', 'Water Essence' ]},
      {
        craft: 'Artillery Plant Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Earth Tongue Mushroom', 'Sheet of Paper', 'Source Orb' ]},
      {
        craft: 'Black Shroud Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Creepy Eye', 'Sheet of Paper', 'Source Orb' ]},
      {
        craft: 'Blinding Radiance Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Air Essence', 'Any Gold', 'Sheet of Paper' ]},
      {
        craft: 'Blood Sucker Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Penny Bun Mushroom', 'Shadow Essence', 'Sheet of Paper' ]},
      {
        craft: 'Bone Cage Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Fish Bone', 'High Quality Shadow Essence', 'Sheet of Paper' ]},
      {
        craft: 'Bonedust',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Bone', 'Mortar And Pestle ' ]},
      {
        craft: 'Bull Horns Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Antler', 'Life Essence', 'Sheet of Paper' ]},
      {
        craft: 'Chain Lightning Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Sheet of Paper', 'Source Orb', 'Wool' ]},
      {
        craft: 'Chain Lightning Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Sheet of Paper', 'Source Orb', 'Yarn' ]},
      {
        craft: 'Chameleon Skin Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Life Essence', 'Long Rat Tail', 'Sheet of Paper' ]},
      {
        craft: 'Charm Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Alien Tormented Soul', 'Jar of Honey 	Sheet of Paper' ]},
      {
        craft: 'Chicken Claw Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Chicken Foot', 'Life Essence 	Sheet of Paper' ]},
      {
        craft: 'Contamination Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Earth Essence', 'Intestines 	Sheet of Paper' ]},
      {
        craft: 'Curse Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Any Voidwoken Fish/Food', 'High Quality Shadow Essence 	Sheet of Paper' ]},
      {
        craft: 'Decaying Touch Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Eye', 'Shadow Essence', 'Sheet of Paper' ]},
      {
        craft: 'Dimensional Bolt Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Pepper', 'Sheet of Paper', 'Tormented Soul' ]},
      {
        craft: 'Earthquake Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Clay', 'High Quality Earth Essence', 'Sheet of Paper' ]},
      {
        craft: 'Electric Discharge Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Air Essence', 'Rabbit\'s Paw', 'Sheet of Paper' ]},
      {
        craft: 'Elemental Totem Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Sheet of Paper', 'Tormented Soul', 'Wooden Figurine' ]},
      {
        craft: 'Epidemic of Fire Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Large Tusk', 'Sheet of Paper', 'Source Orb' ]},
      {
        craft: 'Equalize Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Alien Life Essence', 'Pilgrim\'s Shell', 'Sheet of Paper' ]},
      {
        craft: 'Ethereal Storm Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Carrot', 'Sheet of Paper', 'Source Orb' ]},
      {
        craft: 'Farsight Infusion Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Jar of Honey', 'Sheet of Paper', 'Tormented Soul' ]},
      {
        craft: 'Favourable Wind Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Air Essence', 'Panties', 'Sheet of Paper' ]},
      {
        craft: 'Feather',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Any Cutting Tool', 'Pillow ' ]},
      {
        craft: 'Fire Brand Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Alien Fire Essence', 'Fang', 'Sheet of Paper' ]},
      {
        craft: 'Fire Whip Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'High Quality Fire Essence', 'Sheet of Paper 	Voidwoken Spike' ]},
      {
        craft: 'Fireball Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Fire Essence', 'Sharp Claw', 'Sheet of Paper' ]},
      {
        craft: 'Flaming Crescendo Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Alien Fire Essence', 'Needle', 'Sheet of Paper' ]},
      {
        craft: 'Flaming Tongues Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Adult Antler', 'High Quality Air Essence', 'Sheet of Paper' ]},
      {
        craft: 'Fortify Scroll',
        img: 'photos/items/make/n.webp',
        description: 'Removes Poisoned, Bleeding, Burning, Acid, Decaying.',
        ingredients: ['Sheet of Paper', 'Whisperwood' ]},
      {
        craft: 'Fossil Strike Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Any Rock', 'Earth Essence', 'Sheet of Paper' ]},
      {
        craft: 'Grasp of the Starved Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Disembodied Hand', 'High Quality Shadow Essence 	Sheet of Paper' ]},
      {
        craft: 'Grasp of the Starved Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Disembodied Hand', 'Sheet of Paper', 'Source Orb' ]},
      {
        craft: 'Hail Strike Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Chub Fish', 'High Quality Water Essence', 'Sheet of Paper' ]},
      {
        craft: 'Haste Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Claw', 'Fire Essence', 'Sheet of Paper' ]},
      {
        craft: 'Haste Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Antler', 'Fire Essence', 'Sheet of Paper' ]},
      {
        craft: 'Healing Ritual Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Sheet of Paper', 'Starfish', 'Water Essence' ]},
      {
        craft: 'Heart of Steel Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Any Metal', 'Life Essence', 'Sheet of Paper' ]},
      {
        craft: 'Ignition Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Fire Essence', 'Sheet of Paper', 'Tusk' ]},
      {
        craft: 'Impalement Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Earth Essence', 'Sharp Piece of Metal', 'Sheet of Paper' ]},
      {
        craft: 'Infect Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Intestines', 'Shadow Essence', 'Sheet of Paper' ]},
      {
        craft: 'Laser Ray Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'High Quality Fire Essence 	Nine Inch Nails 	Sheet of Paper' ]},
      {
        craft: 'Lightning Bolt Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Air Essence', 'Rabbit\'s Paw', 'Sheet of Paper' ]},
      {
        craft: 'Living on the Edge',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'High Quality Shadow Essence', 'Raw Lumpy Giblets', 'Sheet of Paper' ]},
      {
        craft: 'Living Wall Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Alien Earth Essence', 'Augmentor', 'Sheet of Paper' ]},
      {
        craft: 'Medusa Head Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Animal Scales', 'Sheet of Paper', 'Source Orb' ]},
      {
        craft: 'Mend Metal Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Earth Essence', 'Sheet of Paper', 'Stardust' ]},
      {
        craft: 'Moondust',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Moonstone', 'Mortar And Pestle ' ]},
      {
        craft: 'Mush of Wood',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Any Water Source', 'Wood Chips ' ]},
      {
        craft: 'Mush of Wood',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Beehive', 'Wood Chips ' ]},
      {
        craft: 'Nether Swap Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Air Essence', 'Chanterelle', 'Sheet of Paper' ]},
      {
        craft: 'Peace of Mind Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Crab\'s Claw', 'Fire Essence', 'Sheet of Paper' ]},
      {
        craft: 'Pixie Dust',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Bonedust', 'Stardust ' ]},
      {
        craft: 'Pixie Dust',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Moondust', 'Stardust ' ]},
      {
        craft: 'Planar Gateway Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Grapes', 'Sheet of Paper', 'Source Orb' ]},
      {
        craft: 'Poison Dart Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Earth Essence', 'Fly Agaric Mushroom', 'Sheet of Paper' ]},
      {
        craft: 'Poison Wave Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'High Quality Earth Essence', 'Sheet of Paper', 'Slime' ]},
      {
        craft: 'Pressure Spike Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Handkerchief', 'High Quality Air Essence ', 'Sheet of Paper' ]},
      {
        craft: 'Pyroclastic Eruption Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Eternal Tablet', 'Sheet of Paper', 'Source Orb' ]},
      {
        craft: 'Rain Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Herring 	Sheet of Paper', 'Water Essence' ]},
      {
        craft: 'Raise Bloated Corpse Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Raw Red Meat', 'Shadow Essence', 'Sheet of Paper' ]},
      {
        craft: 'Raise Bonepile Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Ancient Human Skull', 'High Quality Shadow Essence', 'Sheet of Paper' ]},
      {
        craft: 'Rallying Cry Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Garlic', 'Sheet of Paper', 'Tormented Soul' ]},
      {
        craft: 'Reactive Armor Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'High Quality Earth Essence', 'Sheet of Paper', 'Trumpet of Death' ]},
      {
        craft: 'Restoration Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Penny Bun Mushroom', 'Sheet of Paper', 'Water Essence' ]},
      {
        craft: 'Resurrection Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Life Essence', 'Sheet of Paper', 'Water Essence' ]},
      {
        craft: 'Searing Daggers Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Any Tooth', 'Fire Essence', 'Sheet of Paper' ]},
      {
        craft: 'Shackles of Pain Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'High Quality Shadow Essence', 'Sheet of Paper', 'Skull' ]},
      {
        craft: 'Shatter Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Alien Water Essence', 'Mackerel', 'Sheet of Paper' ]},
      {
        craft: 'Sheet of Paper',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Mush of Wood', 'Oven ' ]},
      {
        craft: 'Shocking Touch Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Air Essence', 'Flour', 'Sheet of Paper' ]},
      {
        craft: 'Shocking Touch Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Air Essence', 'Nine Inch Nails', 'Sheet of Paper' ]},
      {
        craft: 'Silencing Stare Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Alien Shadow Essence', 'Goo', 'Sheet of Paper' ]},
      {
        craft: 'Skin Graft Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Animal Scales', 'Life Essence', 'Sheet of Paper' ]},
      {
        craft: 'Soothing Cold Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Red Snapper', 'Sheet of Paper', 'Water Essence' ]},
      {
        craft: 'Soul Mate Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'High Quality Tormented Soul', 'Sheet of Paper', 'Wheat' ]},
      {
        craft: 'Spider Legs Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Anthropod Leg 	Life Essence 	Sheet of Paper' ]},
      {
        craft: 'Spread Your Wings Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Life Essence', 'Sheet of Paper', 'Sinew' ]},
      {
        craft: 'Stardust',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Mortar And Pestle', 'Stardust Herb ' ]},
      {
        craft: 'Steam Lance Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Sheet of Paper', 'Source Orb', 'Water Essence' ]},
      {
        craft: 'Summon Oily Blob Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Any Oil Source', 'Life Essence', 'Sheet of Paper' ]},
      {
        craft: 'Superconductor Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Alien Air Essence', 'Jellyroom', 'Sheet of Paper' ]},
      {
        craft: 'Superior Stardust',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Mortar And Pestle', 'Superior Stardust Herb ' ]},
      {
        craft: 'Supernova Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'High Quality Fire Essence', 'Sharp Tooth', 'Sheet of Paper' ]},
      {
        craft: 'Teleportation Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Air Essence', 'Feather', 'Sheet of Paper' ]},
      {
        craft: 'Tentacle Lash Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Life Essence', 'Rat\'s Tail', 'Sheet of Paper' ]},
      {
        craft: 'Thread',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Hair' ]},
      {
        craft: 'Tornado Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [	'Hair', 'High Quality Air Essence', 'Sheet of Paper' ]},
      {
        craft: 'Winter Blast Scroll',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Plaice', 'Sheet of Paper', 'Water Essence' ]},
    ],
    skillBooks: [
      {
        craft: 'Apportation Skillbook',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Apportation Scroll', 'Blank Skillbook Air' ]},
      {
        craft: 'Breathing Bubble Skillbook',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Any Air Skillbook', 'Any Warrior Skillbook' ]},
    ],
    tools: [
      {
        craft: 'Big Tongs Roped Together',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Leather Scraps', 'Tongs' ]},
      {
        craft: 'Big Tongs Roped Together',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Cloth Scraps', 'Tongs' ]},
      {
        craft: 'Bowstring',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Sinew' ]},
      {
        craft: 'Improvised Shovel',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Bowl', 'Long Branch' ]},
      {
        craft: 'Lockpicks',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Any Hammer', 'Nine Inch Nails' ]},
      {
        craft: 'Lockpicks',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Needle' ]},
      {
        craft: 'Lockpicks',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Key', 'Soap' ]},
      {
        craft: 'Rope',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Yarn' ]}
    ],
    weapons: [
      {
        craft: 'Crossbow',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	[ 'Bowstring', 'Crossbow without bowstring' ]},
      {
        craft: 'Improv Wand',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	[ 'Short Stick', 'Skull' ]},
      {
        craft: 'Improv Wand',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	[ 'Ancient Human Skull', 'Short Stick' ]},
      {
        craft: 'Improvised Staff',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	[ 'Long Branch', 'Shell' ]},
      {
        craft: 'Knife On A Stick',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	[ 'Any Knife', 'Rope', 'Short Stick' ]},
      {
        craft: 'Knife On A Stick',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	[ 'Any Dagger', 'Rope', 'Short Stick' ]},
      {
        craft: 'Makeshift Club',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ '	Long Branch', 'Sharp Rock' ]},
      {
        craft: 'Makeshift Club',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ '	Cloth Scraps', 'Long Branch' ]},
      {
        craft: 'Makeshift Club',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ '	Leather Scraps', 'Long Branch' ]},
      {
        craft: 'Makeshift Wand',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	[ 'Short Stick', 'Skull' ]},
      {
        craft: 'Primitive Harpoon',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	[ 'Arrowhead', 'Long Branch' ]},
      {
        craft: 'Primitive Harpoon',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	[ 'Long Branch', 'Sharp Piece of Metal' ]},
      {
        craft: 'Sharp Stone On A Big Branch',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Long Branch', 'Sharp Rock' ]},
      {
        craft: 'Sharp Stone On A Stick',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients: [ 'Sharp Rock', 'Short Stick' ]},
      {
        craft: 'Shiv',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	[ 'Handkerchief', 'Sharp Piece of Metal' ]},
      {
        craft: 'Shiv',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	[ 'Leather Scraps', 'Sharp Piece of Metal' ]},
      {
        craft: 'Shiv',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	[ 'Cloth Scraps', 'Sharp Piece of Metal' ]},
      {
        craft: 'Shiv',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	[ 'Anvil', 'Any Hammer', 'Sharp Piece of Metal' ]},
      {
        craft: 'Toy Crossbow',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	[ 'Long Branch', 'Short Stick' ]},
      {
        craft: 'Twig With A String',
        img: 'photos/items/make/n.webp',
        description: '',
        ingredients:	[ 'Bowstring', 'Short Stick' ]}
    ],
    herbmixes: [
      { craft: 'Alertness Herbmix',
        img: 'photos/items/make/Alertness_Herbmix.webp',
        description: '',
        ingredients: ''
      },
      { craft: 'Courage_Herbmix',
        img: 'photos/items/make/Courage Herbmix.webp',
        description: '',
        ingredients: ''
      },
      { craft: 'Enlightenment Herbmix',
        img: 'photos/items/make/Enlightenment_Herbmix.webp',
        description: '',
        ingredients: ''
      },
      { craft: 'Ferocity Herbmix',
        img: 'photos/items/make/Enlightenment_Herbmix.webp',
        description: '',
        ingredients: ''
      },
      { craft: 'Potent Alertness Herbmix',
        img: 'photos/items/make/Potent_Alertness_Herbmix.webp',
        description: '',
        ingredients: ''
      },
      { craft: 'Potent Enlightenment Herbmix',
        img: 'photos/items/make/Potent_Enlightenment_Herbmix.webp',
        description: '',
        ingredients: ''
      },
      { craft: 'Potent Ferocity Herbmix',
        img: 'photos/items/make/Potent_Ferocity_Herbmix.webp',
        description: '',
        ingredients: ''
      }
    ],
    blankSkillbooks: [
      {
        craft: 'Quill',
        img: '',
        description: '',
        ingredients: [ 'Any Feather 	Any Cutting Tool' ]
      },
      {
        craft: 'Leather Cover',
        img: '',
        description: '',
        ingredients: [ 'Any Cutting Tool', 'Leather Scraps', 'Leather Scraps' ]
      },
      {
        craft: 'Blank Air Skillbook',
        img: '',
        description: '',
        ingredients: [ 'Leather Cover', 'Quill', 'Distinctive Tea' ]
      },
      {
        craft: 'Blank Earth Skillbook',
        img: '',
        description: '',
        ingredients: [ 'Leather Cover', 'Quill', 'Distinctive Amadouvier' ]
      },
      {
        craft: 'Blank Fire Skillbook',
        img: '',
        description: '',
        ingredients: [ 'Leather Cover', 'Quill', 'Distinctive Boletus' ]
      },
      {
        craft: 'Blank Necromancy Skillbook',
        img: '',
        description: '',
        ingredients: [ 'Leather Cover', 'Quill', 'Distinctive Trumpet of Death' ]
      },
      {
        craft: 'Blank Polymorph Skillbook',
        img: '',
        description: '',
        ingredients: [ 'Leather Cover', 'Quill', 'Distinctive Whisperwood' ]
      },
      {
        craft: 'Blank Summoning Skillbook',
        img: '',
        description: '',
        ingredients: [ 'Leather Cover', 'Quill', 'Distinctive Drudanae' ]
      },
      {
        craft: 'Blank Water Skillbook',
        img: '',
        description: '',
        ingredients: [ 'Leather Cover', 'Quill', 'Distinctive Farhangite' ]
      },
      {
        craft: 'High Tier Blank Air Skillbook',
        img: '',
        description: '',
        ingredients: [ 'Blank Air Skillbook', 'Quill', 'Distinctive Tea' ]
      },
      {
        craft: 'High Tier Blank Earth Skillbook',
        img: '',
        description: '',
        ingredients: [ 'Blank Earth Skillbook', 'Quill', 'Distinctive Amadouvier' ]
      },
      {
        craft: 'High Tier Blank Fire Skillbook',
        img: '',
        description: '',
        ingredients: [ 'Blank Fire Skillbook', 'Quill', 'Distinctive Boletus' ]
      },
      {
        craft: 'High Tier Blank Necromancy Skillbook',
        img: '',
        description: '',
        ingredients: [ 'Blank Necromancy Skillbook', 'Quill', 'Distinctive Trumpet of Death' ]
      },
      {
        craft: 'High Tier Blank Polymorph Skillbook',
        img: '',
        description: '',
        ingredients: [ 'Blank Polymorph Skillbook', 'Quill', 'Distinctive Whisperwood' ]
      },
      {
        craft: 'High Tier Blank Summoning Skillbook',
        img: '',
        description: '',
        ingredients: [ 'Blank Summoning Skillbook', 'Quill', 'Distinctive Drudanae' ]
      },
      {
        craft: 'High Tier Blank Water Skillbook',
        img: '',
        description: '',
        ingredients: [ 'Blank Water Skillbook', 'Quill', 'Distinctive Farhangite' ]
      },
    ]
  }
];

let craftingStations = [
  'Anvil',
  'Beer Barrel',
  'Bench Saw',
  'Boiling Pot',
  'Bonfire',
  'Campfire',
  'Dreamer Pipe',
  'Hand Water Pump',
  'Oven',
  'Pot Still',
  'Spinning Wheel',
  'Stove',
  'Well',
  'Wine Barrel'
];

let skillBooks = [
  {
    craft: 'Blinding Radiance Skillbook',
    img: '',
    description: '',
    ingredients:	[ 'Aerotheurge Blank Skill Book', 'Blinding Radiance Scroll' ]
  },
  {
  craft: 'Chain Lightning Skillbook',
  img: '',
  description: '',
  ingredients: [ '	Aerotheurge Blank Skill Book', 'Chain Lightning Scroll' ]
  },
  {
  craft: 'Electric Fence Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Aerotheurge Blank Skill Book', 'Electric Fence Scroll' ]
  },
  {
  craft: 'Favourable Wind Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Aerotheurge Blank Skill Book', 'Favourable Wind Scroll' ]
  },
  {
  craft: 'Lightning Bolt Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Aerotheurge Blank Skill Book', 'Lightning Bolt Scroll' ]
  },
  {
  craft: 'Teleportation Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Aerotheurge Blank Skill Book', 'Teleportation Scroll' ]
  },
  {
  craft: 'Shocking Touch Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Aerotheurge Blank Skill Book', 'Shocking Touch Scroll' ]
  },
  {
  craft: 'Tornado Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Aerotheurge Blank Skill Book', 'Tornado Scroll' ]
  },
  {
  craft: 'Acid Spores Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Geomancer Blank Skill Book', 'Acid Spores Scroll' ]
  },
  {
  craft: 'Contamination Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Geomancer Blank Skill Book', '	Contamination Scroll' ]
  },
  {
  craft: 'Corrosive Spray Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Geomancer Blank Skill Book', 'Any Source Necromancy Skillbook' ]
  },
  {
  craft: 'Fortify Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Geomancer Blank Skill Book', 'Fortify Scroll' ]
  },
  {
  craft: 'Poison Dart Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Geomancer Blank Skill Book', 'Poison Dart Scroll' ]
  },
  {
  craft: 'Fossil Strike Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Geomancer Blank Skill Book', 'Fossil Strike Scroll' ]
  },
  {
  craft: 'Impalement Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Geomancer Blank Skill Book', 'Impalement Scroll' ]
  },
  {
  craft: 'Burn My Eyes Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Pyrokinetic Blank Skill Book', 'Burn My Eyes Scroll' ]
  },
  {
  craft: 'Fireball Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Pyrokinetic Blank Skill Book', 'Fireball Scroll' ]
  },
  {
  craft: 'Fireblood Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Pyrokinetic Blank Skill Book', 'Any Polymorph Skillbook' ]
  },
  {
  craft: 'Fireblood Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Pyrokinetic Blank Skill Book', 'Fireblood Scroll' ]
  },
  {
  craft: 'Searing Daggers Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Pyrokinetic Blank Skill Book', 'Searing Daggers Scroll' ],
  },
  {
  craft: 'Haste Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Pyrokinetic Blank Skill Book', 'Haste Scroll' ],
  },
  {
  craft: 'Ignition Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Pyrokinetic Blank Skill Book', 'Ignition Scroll' ],
  },
  {
  craft: 'Infectious Flame Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Pyrokinetic Blank Skill Book', 'Infectious Flame Scroll' ],
  },
  {
  craft: 'Spontaneous Combustion Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Pyrokinetic Blank Skill Book', 'Spontaneous Combustion Scroll' ],
  },
  {
  craft: 'Blood Sucker Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Necromancer Blank Skill Book', 'Blood Sucker Scroll' ],
  },
  {
  craft: 'Decaying Touch Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Necromancer Blank Skill Book', 'Decaying Touch Scroll' ],
  },
  {
  craft: 'Mosquito Swarm Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Necromancer Blank Skill Book', 'Mosquito Swarm Scroll' ],
  },
  {
  craft: 'Rain of Blood Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Necromancer Blank Skill Book', 'Rain of Blood Scroll' ],
  },
  {
  craft: 'Shackles of Pain Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Necromancer Blank Skill Book', 'Shackles of Pain Scroll' ],
  },
  {
  craft: 'Infect Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Necromancer Blank Skill Book', 'Infect Scroll' ],
  },
  {
  craft: 'Tentacle Lash Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Polymorph Blank Skill Book', 'Tentacle Lash Scroll' ],
  },
  {
  craft: 'Chicken Claw Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Polymorph Blank Skill Book', 'Chicken Claw Scroll' ],
  },
  {
  craft: 'Bull Horns Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Polymorph Blank Skill Book', 'Bull Horns Scroll' ],
  },
  {
  craft: 'Chameleon Cloak Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Polymorph Blank Skill Book', 'Chameleon Cloak Scroll' ],
  },
  {
  craft: 'Heart of Steel Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Polymorph Blank Skill Book', 'Heart of Steel Scroll' ],
  },
  {
  craft: 'Spread Your Wings Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Polymorph Blank Skill Book', 'Spread Your Wings Scroll' ],
  },
  {
  craft: 'Conjure Incarnate Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Summoning Blank Skill Book', 'Conjure Incarnate Scroll' ],
  },
  {
  craft: 'Dimensional Bolt Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Summoning Blank Skill Book', 'Dimensional Bolt Scroll' ],
  },
  {
  craft: 'Elemental Totem Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Summoning Blank Skill Book', 'Elemental Totem Scroll' ],
  },
  {
  craft: 'Farsight Infusion Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Summoning Blank Skill Book', 'Farsight Infusion Scroll' ],
  },
  {
  craft: 'Power Infusion Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Summoning Blank Skill Book', 'Power Infusion Scroll' ],
  },
  {
  craft: 'Rallying Cry Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Summoning Blank Skill Book', 'Rallying Cry Scroll' ],
  },
  {
  craft: 'Supercharger Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Summoning Blank Skill Book', 'Supercharger Scroll' ],
  },
  {
  craft: 'Armour of Frost Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Hydrosophist Blank Skill Book', 'Armour of Frost Scroll' ],
  },
  {
  craft: 'Hail Strike Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Hydrosophist Blank Skill Book', 'Hail Strike Scroll' ],
  },
  {
  craft: 'Healing Ritual Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Hydrosophist Blank Skill Book', 'Healing Ritual Scroll' ],
  },
  {
  craft: 'Rain Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Hydrosophist Blank Skill Book', 'Rain Scroll' ],
  },
  {
  craft: 'Restoration Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Hydrosophist Blank Skill Book', 'Restoration Scroll' ],
  },
  {
  craft: 'Winter Blast Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Hydrosophist Blank Skill Book', 'Winter Blast Scroll' ],
  },
  {
  craft: 'Steam Lance Skillbook',
  img: '',
  description: '',
  ingredients:	[ 'Hydrosophist Blank Skill Book', 	'Global Cooling Scroll' ]
  }
];

let baseSkillBooks = [
  {
    craft: 'Vacuum Touch',
    ingredients: [ 'Aerothurge 	Necromancer 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Vaporize 	Aerothurge',
    ingredients: [ 'Polymorphing 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Erratic Wisp',
    ingredients: [ 'Aerothurge 	Huntsman 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Smoke Cover',
    ingredients: [ 'Aerothurge 	Scoundrel 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Electric Infusion',
    ingredients: [ 'Aerothurge 	Summoning 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Breathing Bubble',
    ingredients: [ 'Aerothurge 	Warfare 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Corrosive Spray',
    ingredients: [ 'Geomancer 	Necromancer 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Turn To Oil',
    ingredients: [ 'Geomancer 	Polymorphing 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Throw Dust',
    ingredients: [ 'Geomancer 	Huntsman 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Venom Coating',
    ingredients: [ 'Geomancer 	Scoundrel 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Poison Infusion',
    ingredients: [ 'Geomancer 	Summoning 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Oily Carapace',
    ingredients: [ 'Geomancer 	Warfare 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Corpse Explosion',
    ingredients: [ 'Pyrokinetic 	Necromancer 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Bleed Fire',
    ingredients: [ 'Pyrokinetic 	Polymorphing 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Throw Explosive Trap',
    ingredients: [ 'Pyrokinetic 	Huntsman 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Sabotage 	Pyrokinetic',
    ingredients: [ 'Scoundrel 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Fire Infusion',
    ingredients: [ 'Pyrokinetic 	Summoning 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Sparking Swings',
    ingredients: [ 'Pyrokinetic 	Warfare 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Raining Blood',
    ingredients: [ 'Hydrosophist 	Necromancer 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Healing Tears',
    ingredients: [ 'Hydrosophist 	Polymorphing 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Cryotherapy',
    ingredients: [ 'Hydrosophist 	Huntsman 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Vampiric Hunger',
    ingredients: [ 'Hydrosophist 	Scoundrel 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Water Infusion',
    ingredients: [ 'Hydrosophist 	Summoning 	Neither skillbook may consume Source points.
  },
  {
    craft: 'Cleanse Wounds',
    ingredients: [ 'Hydrosophist 	Warfare 	Neither skillbook may consume Source points.
  }
]

let enchantment = [
  {
    craft: 'Weapon deals X-X bonus poison damage based on item level',
    ingredients: [ 'Weapon',	'Any Poison Source', 'Ooze Barrel' ]
  },
  {
    craft: 'Weapon deals X-X bonus fire damage based on item level',
    ingredients: [ 'Weapon (except wand)',	'Oil Barrel',	'Campfire Crafter\'s kit gift bag']
  },
  {
    craft: 'Grants immunity to slipping on ice',
    ingredients: [ 'Nails',	'Boots ' ]
  },
  {
    craft: '2 finesse, 1 huntsman, adds physical armor',
    ingredients: [ 'Helmet',	'Eternal Artefact' ]
  },
  {
    craft: '10% air resistance, adds physical armor',
    ingredients: [ 'Chest',	'Eternal Artefact' ]
  },
  {
    craft: '2 strength, 1 warfare, adds physical armor',
    ingredients: [ 'Belt',	'Eternal Artefact' ]
  },
  {
    craft: '2 constitution, 10% earth resistance, adds physical armor',
    ingredients: [ 'Gloves',	'Eternal Artefact' ]
  },
  {
    craft: '1 polymorph, 10% air resistance, adds physical armor',
    ingredients: [ 'Leggings',	'Eternal Artefact' ]
  },
  {
    craft: '1 thievery, 0.1 move points, adds physical armor',
    ingredients: [ 'Boots',	'Eternal Artefact' ]
  },
  {
    craft: '1 scoundrel',
    ingredients: [ 'Ring',	'Eternal Artefact' ]
  }
]