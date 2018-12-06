'use strict';

(function () {
  var WIZARDS_URL = 'https://js.dump.academy/code-and-magick/data';
  var SIMILAR_CHARACTERS_QUANTITY = 4;

  var similarCharactersList = window.similarCharactersList;
  var similarCharacterTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  function generateSimilarCharacter(wizard) {
    var similarCharacterElement = similarCharacterTemplate.cloneNode(true);

    similarCharacterElement.querySelector('.setup-similar-label').textContent = wizard.name;
    similarCharacterElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    similarCharacterElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return similarCharacterElement;
  }

  function generateSimilarCharacters(wizards) {
    var similarСharactersFragment = document.createDocumentFragment();

    for (var i = 0; i < SIMILAR_CHARACTERS_QUANTITY; i++) {
      similarСharactersFragment.appendChild(generateSimilarCharacter(wizards[i]));
    }

    similarCharactersList.appendChild(similarСharactersFragment);
  }

  function onLoad(wizards) {
    generateSimilarCharacters(wizards);
  }

  window.backend.load(WIZARDS_URL, onLoad, window.onError);
})();
