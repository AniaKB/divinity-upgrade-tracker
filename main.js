let items = [ 
  "Ancient human skull",
  "A jar of mind maggots",
  "Air essence",
  "Animal hide",
  "Animal scales",
  "Arrow",
  "Arthropod leg",
  "Barrel",
  "Blessed water barrel",
  "Bone",
  "Bowstring",
  "Broad skull",
  "Broken bottle",
  "Bucket",
  "Bucket with water",
  "Chicken foot",
  "Claw",
  "Cloth scraps",
  "Cooking pot",
  "Crab's claw",
  "Cursed oil barrel",
  "Deathfog barrel",
  "Deathfog crate",
  "Dirty socks",
  "Earth essence",
  "Empty bottle",
  "Empty canister",
  "Empty cup",
  "Empty flask",
  "Empty grenade",
  "Empty honey jar",
  "Empty mug",
  "Empty perfume bottle",
  "Empty potion bottle",
  "Eternal artefact",
  "Eternal plate",
  "Eye",
  "Fancy feather",
  "Fang",
  "Feather",
  "Fire essence",
  "Fish bone",
  "Glowing idol of rebirth",
  "Gold cup",
  "Goo",
  "Hair",
  "Ink pot",
  "Ink pot and quill",
  "Intestines",
  "Jawless skull",
  "Lamp",
  "Large tusk",
  "Leather scraps",
  "Life essence",
  "Light golden teaspoon",
  "Livewood log",
  "Log",
  "Long branch",
  "Long rat tail",
  "Metal scraps",
  "Mortar and pestle",
  "Nails",
  "Needle",
  "Needle and thread",
  "Oil barrel",
  "Ooze barrel",
  "Parchment",
  "Peculiar seed",
  "Pilgrim shell",
  "Pixie dust",
  "Plate",
  "Plate scraps",
  "Puppet bead",
  "Quill",
  "Rabbit's paw",
  "Rat's tail",
  "Red fabric dye",
  "Ripped-off dwarven face",
  "Ripped-off elven face",
  "Ripped-off human face",
  "Ripped-off lizard face",
  "Rope",
  "Scale scraps",
  "Shadow essence",
  "Sharp piece of metal",
  "Sharp rock",
  "Sharp tooth",
  "Short stick",
  "Silver cup",
  "Silver glass",
  "Silver lever shaft",
  "Sinew",
  "Skull",
  "Slime",
  "Smokescreen arrowhead",
  "Soap",
  "Sovereign's orb",
  "Stardust",
  "Starfish",
  "Thread",
  "Tongs",
  "Tooth",
  "Tormented soul",
  "Tusk",
  "Void-touched livewood fragments",
  "Voidwoken spike",
  "Water barrel",
  "Water essence",
  "Wooden figurine",
  "Wool",
  "Zaikk's talon"
]

let classes = [
  "Cleric",
  "Conjurer",
  "Enchanter",
  "Witch",
  "Wizard",
  "Metamorph",
  "Ranger",
  "Rogue",
  "Shadowblade",
  "Wayfarer",
  "Battlemage",
  "Fighter",
  "Inquisitor",
  "Knight",
]



function generateProfile () {
  return {
    skills: [
{
      "name": "Aerothurge",
      "skills": {
        "level 1": [
          {
            "name": "Blinding Radiance",
            "img": "photos/aerothurge/Blinding_Radiance.webp",
            "description": "Blinding Radiance sets \"Radiant\" status which inflicts Blinded status upon enemies without Magic Armour as well as dealing air damage upon casting",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Electric Discharge",
            "img": "photos/aerothurge/Blinding_Radiance.webp",
            "description": "Deal air damage and set Shocked for two turns on enemies without Magic Armour",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Favorable Wind",
            "img": "photos/aerothurge/Blinding_Radiance.webp",
            "description": "Sets Favorable Wind Aura on the caster and allies within close proximity for four turns, increasing their movement speed by 1.5m for 4 turns.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Shocking Touch",
            "img": "photos/aerothurge/Blinding_Radiance.webp",
            "description": "Touch your enemy to deal them air damage and set Stunned them if they dont have Magic Armour.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
        ],
        "level 4": [
          {
            "name": "Dazing Bolt",
            "img": "photos/aerothurge/Blinding_Radiance.webp",
            "description": "Shoot an electrical bolt from the sky dealing air damage to characters and items in the area, and setting Shocked status.",
            "action points": 3,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Teleportation",
            "img": "photos/aerothurge/Blinding_Radiance.webp",
            "description": "Move objects (inanimate or otherwise) from one location to another. Deals physical damage upon impact.",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Uncanny Evasion",
            "img": "photos/aerothurge/Blinding_Radiance.webp",
            "description": "Increases dodging by 90% and movement by 20%.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
        ],
        "level 9": [
          {
            "name": "Chain Lightning",
            "img": "photos/aerothurge/Blinding_Radiance.webp",
            "description": "Target enemy receives air damage. The spell then forks up to eight times up to 8m of the original impact zone dealing air damage to each enemy struck.",
            "action points": 3,
            "source points": 1,
            "required": "Aerotheurge 3"
          },
          {
            "name": "Nether Swap",
            "img": "photos/aerothurge/Blinding_Radiance.webp",
            "description": "Nether swap allows the caster or an ally of their choosing to swap places with an enemy.",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
          {
            "name": "Pressire Spike",
            "img": "photos/aerothurge/Blinding_Radiance.webp",
            "description": "Pressure Spike condenses all cloud surfaces in the area. Deals air damage to enemies and douses fires.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 2"
          },
        ],
      },
      {
        "name": "Polymorph",
        "skills": [
          {
            "name": "Bull Horns",
            "effect": "Enables Bull Rush",
            "negated": "Medusa Head"
          }
        ]
      }
    },
    {
      "name": "Geomancer",
      "skills": {
        "1": [
          {
            "name": "Blinding Radiance",
            "description": "Blinding Radiance sets \"Radiant\" status which inflicts Blinded status upon enemies without Magic Armour as well as dealing air damage upon casting",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
        ],
        "2": [
          {
          }
        ],
      },
    },
  ]
  }
};

