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