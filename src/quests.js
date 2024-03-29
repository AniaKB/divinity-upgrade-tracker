const questArray = [
  {
    location: 'The Merryweather',
    quests: [
      { quest: "Troubled Waters", completed: false }
    ]
  },
  {
    location: 'Fort Joy',
    quests: [
      { quest: 'A Fate Worse Than Death', completed: false },
      { quest: 'A Rare Prey', completed: false },
      { quest: 'A Wolf Alone', completed: false },
      { quest: 'Artefacts of the Tyrant', completed: false },
      { quest: 'Beast', completed: false },
      { quest: 'Blessing from Afar', completed: false },
      { quest: 'Call to Arms', completed: false },
      { quest: 'Champion of the Gods', completed: false },
      { quest: 'Every Mother\'s Nightmare', completed: false },
      { quest: 'Fane', completed: false },
      { quest: 'Finding Emmie', completed: false },
      { quest: 'Healing Touch', completed: false },
      { quest: 'Ifan ben-Mezd', completed: false },
      { quest: 'Lohse', completed: false },
      { quest: 'Most Dangerous When Cornered', completed: false },
      { quest: 'Nothing But Child\'s Play', completed: false },
      { quest: 'Redemption', completed: false },
      { quest: 'Saheila\'s Signet (Saheila\'s People)', completed: false },
      { quest: 'Sebille', completed: false },
      { quest: 'Signs of Resistance', completed: false },
      { quest: 'The Arena of Fort Joy', completed: false },
      { quest: 'Seed of Power (Four Relics of Rivellon)', completed: false },
      { quest: 'Threads of a Curse (Four Relics of Rivellon)', completed: false },
      { quest: 'The Armoury', completed: false },
      { quest: 'The Burning Pigs', completed: false },
      { quest: 'The Collar (Hot Under the Collar)', completed: false },
      { quest: 'The Cursed Ring', completed: false },
      { quest: 'The Escape (Escape from Fort Joy)', completed: false },
      { quest: 'The Eternal Worshipper', completed: false },
      { quest: 'The Gargoyle\'s Maze', completed: false },
      { quest: 'The Imprisoned Elf', completed: false },
      { quest: 'The Injured Magister', completed: false },
      { quest: 'The Murderous Gheist', completed: false },
      { quest: 'The Purged Dragon', completed: false },
      { quest: 'The Red Prince', completed: false },
      { quest: 'The Shakedown', completed: false },
      { quest: 'The Shriekers', completed: false },
      { quest: 'The Teleporter', completed: false },
      { quest: 'The Tribe of Saheila', completed: false },
      { quest: 'The Vault of Braccus Rex', completed: false },
      { quest: 'The Voices', completed: false },
      { quest: 'To the Hall of Echoes', completed: false },
      { quest: 'Withermoore\'s Soul Jar', completed: false },
      { quest: 'A Scholar from Times Past', completed: false },
      { quest: 'A Hunger From Beyond (Four Relics of Rivellon)', completed: false },
      { quest: 'Keep Calm and Carrion (Four Relics of Rivellon)', completed: false },
    ]
  },
  {
    location: 'Lady o\' War',
    quests: [
      { quest: 'To the Hall of Echoes', completed: false }
    ]
  },
  {
    location: 'Mastering the Source',
    quests: [
      { quest: 'A Danger to Herself and Others', completed: false },
      { quest: 'A Generous Offer', completed: false },
      { quest: 'A Hunter of Wicked Things', completed: false },
      { quest: 'A Man and His Dog', completed: false },
      { quest: 'A Prize Kill', completed: false },
      { quest: 'A Taste of Freedom', completed: false },
      { quest: 'A Trial for All Seasons', completed: false },
      { quest: 'A Web of Desire', completed: false },
      { quest: 'Aggressive Takeover', completed: false },
      { quest: 'All in the Family', completed: false },
      { quest: 'Almira\'s Request', completed: false },
      { quest: 'An Existential Crisis', completed: false },
      { quest: 'An Eye for an Eye', completed: false },
      { quest: 'Bitter Tonic', completed: false },
      { quest: 'Bound by Pain', completed: false },
      { quest: 'Burial Rites', completed: false },
      { quest: 'Burying the Past', completed: false },
      { quest: 'Business Rivals', completed: false },
      { quest: 'Counting Your Chickens', completed: false },
      { quest: 'Dark Dealings in the Blackpits', completed: false },
      { quest: 'Delusions of Grandeur', completed: false },
      { quest: 'Doctor\'s Orders', completed: false },
      { quest: 'Drowning Her Sorrows', completed: false },
      { quest: 'Eithne the Trader', completed: false },
      { quest: 'Finder\'s Fee', completed: false },
      { quest: 'Grebb the Scholar', completed: false },
      { quest: 'Heroes\' Rest', completed: false },
      { quest: 'Hide & Seek', completed: false },
      { quest: 'Infestation', completed: false },
      { quest: 'Lost and Found', completed: false },
      { quest: 'Love Has a Price', completed: false },
      { quest: 'No Laughing Matter', completed: false },
      { quest: 'No Way Out', completed: false },
      { quest: 'Old Flames', completed: false },
      { quest: 'On the Ropes', completed: false },
      { quest: 'Opposites Attract', completed: false },
      { quest: 'Popularity Contest', completed: false },
      { quest: 'Powerful Awakening', completed: false },
      { quest: 'Press-ganged', completed: false },
      { quest: 'Red Ink in the Ledger', completed: false },
      { quest: 'Shadow over Driftwood', completed: false },
      { quest: 'Speaking in Forked Tongues', completed: false },
      { quest: 'Strange Cargo', completed: false },
      { quest: 'Stranger in a Strange Land', completed: false },
      { quest: 'The Advocate', completed: false },
      { quest: 'The Bark\'s Bite', completed: false },
      { quest: 'The Burning Prophet', completed: false },
      { quest: 'The Covenant', completed: false },
      { quest: 'The Driftwood Arena', completed: false },
      { quest: 'The Druid', completed: false },
      { quest: 'The Elven Seer', completed: false },
      { quest: 'The Forgotten and the Damned', completed: false },
      { quest: 'The Law of the Order', completed: false },
      { quest: 'The Midnight Oil', completed: false },
      { quest: 'The Missing Magisters', completed: false },
      { quest: 'The Reluctant Servants', completed: false },
      { quest: 'The Secrets of Bloodmoon Islan', completed: false },
      { quest: 'The Silent One', completed: false },
      { quest: 'The Snoozing Adventurer', completed: false },
      { quest: 'The Stoic Spirit', completed: false },
      { quest: 'The Three Altars', completed: false },
      { quest: 'The Ugly Little Bird', completed: false },
      { quest: 'The Weaver', completed: false },
      { quest: 'The Wrecked Caravan', completed: false },
      { quest: 'The Merchant', completed: false },
      { quest: 'They Shall Not Pass', completed: false },
      { quest: 'Treated Like Cattle', completed: false },
      { quest: 'Unlikely Lovers', completed: false },
      { quest: 'Vengeance for the Fallen', completed: false },
      { quest: 'Window of Opportunity', completed: false },
      { quest: 'Wishful Thinking', completed: false }
    ]
  },
  {
    location: 'The Nameless Isle',
    quests: [
      { quest: 'A Familiar Face', completed: false },
      { quest: 'An Unlikely Patron', completed: false },
      { quest: 'Invaders', completed: false },
      { quest: 'Proving Ground', completed: false },
      { quest: 'Running Like Clockwork', completed: false },
      { quest: 'Seeking Revenge', completed: false },
      { quest: 'The Academy', completed: false },
      { quest: 'The Arena of the One', completed: false },
      { quest: 'The Drowned Temple', completed: false },
      { quest: 'The Key to Freedom', completed: false },
      { quest: 'The Mother Tree', completed: false },
      { quest: 'The Nameless Isle', completed: false },
      { quest: 'The Sallow Man', completed: false },
      { quest: 'The Watcher\'s Mercy', completed: false },
      { quest: 'Thinning the Herd', completed: false },
      { quest: 'Unscholarly Pursuits', completed: false },
      { quest: 'Up in the Clouds', completed: false },
    ]
  },
  {
    location: 'The Hunt for Dallis',
    quests: [
      { quest: 'A Craftsman of Dreams and Nightmares', completed: false },
      { quest: 'A King Reborn', completed: false },
      { quest: 'A Most Urgent Matter', completed: false },
      { quest: 'Battle at the Gates', completed: false },
      { quest: 'Blood Dowry', completed: false },
      { quest: 'Crippling a Demon', completed: false },
      { quest: 'Doctor\'s Orders', completed: false },
      { quest: 'Finding Lord Arhu', completed: false },
      { quest: 'Hammerfall', completed: false },
      { quest: 'Mercy is Power', completed: false },
      { quest: 'Old Means Gold', completed: false },
      { quest: 'Past Mistakes', completed: false },
      { quest: 'School\'s Out', completed: false },
      { quest: 'Silence Broken', completed: false },
      { quest: 'The Consulate', completed: false },
      { quest: 'The Execution', completed: false },
      { quest: 'The Last Stand of the Magisters', completed: false },
      { quest: 'The Loremaster', completed: false },
      { quest: 'The Missing Prisoners', completed: false },
      { quest: 'The Secrets of the Dwarves', completed: false },
      { quest: 'The Vault of Linder Kemm', completed: false },
      { quest: 'What a Fuss to Have Wrought', completed: false }
    ]
  },
  {
    location: 'To be Divine',
    quests: [
      {quest: 'End Times', completed: false }
    ]
  }
]

const myQuests = document.getElementById('questsContainer');

function renderQuests () {
  myQuests.innerHTML = '';

  questArray.forEach((location) => {
    const locationHeading = document.createElement('h2');
    locationHeading.textContent = location.location;
    myQuests.appendChild(locationHeading);

    const questList = document.createElement('ul');

    location.quests.forEach((quest) => {
      const listItem = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      const label = document.createElement('label');
      label.textContent = quest.quest;
      listItem.appendChild(checkbox);
      listItem.appendChild(label);

      questList.appendChild(listItem);
    });

    myQuests.appendChild(questList);
  });
}

renderQuests();