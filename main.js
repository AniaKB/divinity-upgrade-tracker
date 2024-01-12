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



function generateProfile () {
  return {
    skills: [
      "name": "Aerothurge",
      "skills": {
        "1": [
          {
            "name": "Blinding Radiance",
            "description": "Blinding Radiance sets \"Radiant\" status which inflicts Blinded status upon enemies without Magic Armour as well as dealing air damage upon casting",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Electric Discharge",
            "description": "Deal air damage and set Shocked for two turns on enemies without Magic Armour",
            "action points": 2,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Favorable Wind",
            "description": "Sets Favorable Wind Aura on the caster and allies within close proximity for four turns, increasing their movement speed by 1.5m for 4 turns.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
          {
            "name": "Shocking Touch",
            "description": "Touch your enemy to deal them air damage and set Stunned them if they dont have Magic Armour.",
            "action points": 1,
            "source points": 0,
            "required": "Aerotheurge 1"
          },
        ],
        "2": [

        ]
      },
      {
        "name": "Polymorph",
        "skills": [
          {
            "name": "Bull Horns"
            "effect": "Enables Bull Rush"
            "negated": "Medusa Head"
          }
        ]
      }
    ],
    [
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
    ],
  }
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}