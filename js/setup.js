'use strict';

var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var SIMILAR_CHARACTERS_QUANTITY = 4;
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var similarCharacterTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var setup = document.querySelector('.setup');
var setupSimilar = setup.querySelector('.setup-similar');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var similarCharactersList = setupSimilar.querySelector('.setup-similar-list');
var setupWizard = setup.querySelector('.setup-wizard');
var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupFireball = setup.querySelector('.setup-fireball-wrap');

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateSimilarСharacter() {
  return {
    name: NAMES[generateRandomNumber(0, NAMES.length)] + ' ' + SURNAMES[generateRandomNumber(0, SURNAMES.length)],
    coatColor: COAT_COLORS[generateRandomNumber(0, COAT_COLORS.length)],
    eyesColor: EYES_COLORS[generateRandomNumber(0, EYES_COLORS.length)]
  };
}

function generateSimilarСharacters(quantity) {
  var similarCharacters = [];

  for (var i = 0; i < quantity; i++) {
    similarCharacters.push(generateSimilarСharacter());
  }

  return similarCharacters;
}

function generateSimilarСharacterElement(similarCharacter) {
  var similarCharacterElement = similarCharacterTemplate.cloneNode(true);

  similarCharacterElement.querySelector('.setup-similar-label').textContent = similarCharacter.name;
  similarCharacterElement.querySelector('.wizard-coat').style.fill = similarCharacter.coatColor;
  similarCharacterElement.querySelector('.wizard-eyes').style.fill = similarCharacter.eyesColor;

  return similarCharacterElement;
}

function generateSimilarСharactersFragment(similarCharacters) {
  var similarСharactersFragment = document.createDocumentFragment();

  for (var i = 0; i < similarCharacters.length; i++) {
    similarСharactersFragment.appendChild(generateSimilarСharacterElement(similarCharacters[i]));
  }

  return similarСharactersFragment;
}

function showElement(element) {
  element.classList.remove('hidden');
}

function hideElement(element) {
  element.classList.add('hidden');
}

function onPopupEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    hideElement(setup);
  }
}

function openPopup() {
  showElement(setup);

  document.addEventListener('keydown', onPopupEscPress);
}

similarCharactersList.appendChild(generateSimilarСharactersFragment(generateSimilarСharacters(SIMILAR_CHARACTERS_QUANTITY)));

setupOpen.addEventListener('click', function (evt) {
  evt.preventDefault();

  openPopup();
});

setupClose.addEventListener('click', function (evt) {
  evt.preventDefault();

  hideElement(setup);
});

setupOpen.addEventListener('keydown', function (evt) {
  evt.preventDefault();

  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  evt.preventDefault();

  if (evt.keyCode === ENTER_KEYCODE) {
    hideElement(setup);
  }
});

setupWizardCoat.addEventListener('click', function (evt) {
  evt.preventDefault();

  var newColor = COAT_COLORS[generateRandomNumber(0, COAT_COLORS.length)];
  setupWizardCoat.style.fill = newColor;
  setup.querySelector('input[name="coat-color"]').value = newColor;
});

setupWizardEyes.addEventListener('click', function (evt) {
  evt.preventDefault();

  var newColor = EYES_COLORS[generateRandomNumber(0, EYES_COLORS.length)];
  setupWizardEyes.style.fill = newColor;
  setup.querySelector('input[name="eyes-color"]').value = newColor;
});

setupFireball.addEventListener('click', function (evt) {
  evt.preventDefault();

  var newColor = FIREBALL_COLORS[generateRandomNumber(0, FIREBALL_COLORS.length)];
  setupFireball.style.backgroundColor = newColor;
  setupFireball.querySelector('input[name="fireball-color"]').value = newColor;
});

showElement(setupSimilar);

