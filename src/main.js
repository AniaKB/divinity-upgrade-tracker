const craftingNavItem = document.getElementById('craftingNavItem');
const skillsNavItem = document.getElementById('skillsNavItem');
const questsNavItem = document.getElementById('questsNavItem');

const itemsContainer = document.getElementById('itemsContainer');
const allSkillsContainer = document.getElementById('allSkillsContainer');
const questsContainer = document.getElementById('questsContainer');

craftingNavItem.addEventListener('click', () => toggleNavItem(craftingNavItem, itemsContainer));
skillsNavItem.addEventListener('click', () => toggleNavItem(skillsNavItem, allSkillsContainer));
questsNavItem.addEventListener('click', () => toggleNavItem(questsNavItem, questsContainer));

function toggleNavItem (selectedNavItem, selectedContainer) {
  craftingNavItem.classList.remove('active');
  skillsNavItem.classList.remove('active');
  questsNavItem.classList.remove('active');

  itemsContainer.style.display = 'none';
  allSkillsContainer.style.display = 'none';
  questsContainer.style.display = 'none';

  selectedNavItem.classList.add('active');

  selectedContainer.style.display = 'block';
}

toggleNavItem(skillsNavItem, allSkillsContainer);

const profileArray = [
  {
    name: 'Ania',
    class: 'Metamorph',
    skillset: 'Polymorph'
  },
  {
    name: 'Kent',
    class: 'Rogue',
    skillset: 'Scoundrel'
  },
  {
    name: 'Nai\'mah',
    class: 'Rogue',
    skillset: 'Scoundrel'
  },
  {
    name: 'Deon',
    class: 'Rogue',
    skillset: 'Scoundrel'
  },
  {
    name: 'Blank',
    class: '',
    skillset: ''
  }
];

const profileDropdown = document.getElementById('profile');

function renderProfileDropdown () {
  profileDropdown.innerHTML = '';

  profileArray.forEach((profile) => {
    const option = document.createElement('option');
    option.value = profile.name;
    option.textContent = `${profile.name}`;
    profileDropdown.appendChild(option);
  });
}

renderProfileDropdown();