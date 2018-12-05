'use strict';

(function () {
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

  function onLoad(wizards) {
    var similarСharactersFragment = document.createDocumentFragment();

    for (var i = 0; i < SIMILAR_CHARACTERS_QUANTITY; i++) {
      similarСharactersFragment.appendChild(generateSimilarCharacter(wizards[i]));
    }

    similarCharactersList.appendChild(similarСharactersFragment);
  }

  function onError(errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;

    document.body.insertAdjacentElement('afterbegin', node);
  }

  window.backend.load(onLoad, onError);
})();
