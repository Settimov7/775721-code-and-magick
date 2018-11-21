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
var SIMILAR_CHARACTERS_QUANTITY = 4;

var similarCharacterTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var setup = document.querySelector('.setup');
var setupSimilar = setup.querySelector('.setup-similar');
var similarCharactersList = setupSimilar.querySelector('.setup-similar-list');

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateSimilarСharacter() {
  var character = {
    name: NAMES[generateRandomNumber(0, NAMES.length)] + ' ' + SURNAMES[generateRandomNumber(0, SURNAMES.length)],
    coatColor: COAT_COLORS[generateRandomNumber(0, COAT_COLORS.length)],
    eyesColor: EYES_COLORS[generateRandomNumber(0, EYES_COLORS.length)]
  };

  return character;
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

setup.classList.remove('hidden');
similarCharactersList.appendChild(generateSimilarСharactersFragment(generateSimilarСharacters(SIMILAR_CHARACTERS_QUANTITY)));
setupSimilar.classList.remove('hidden');

