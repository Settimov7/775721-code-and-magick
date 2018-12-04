'use strict';

(function () {
  var wizardsData = window.wizardsData;
  var getRandomElement = window.util.getRandomElement;
  var SIMILAR_CHARACTERS_QUANTITY = 4;

  var similarCharacterTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

  function generateSimilarСharacter() {
    return {
      name: getRandomElement(wizardsData.names) + ' ' + getRandomElement(wizardsData.surnames),
      coatColor: getRandomElement(wizardsData.coatColors),
      eyesColor: getRandomElement(wizardsData.eyesColors)
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

  window.addCharactersToList = function (charactersList) {
    charactersList.appendChild(generateSimilarСharactersFragment(generateSimilarСharacters(SIMILAR_CHARACTERS_QUANTITY)));
  };
})();
