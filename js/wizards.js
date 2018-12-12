'use strict';

(function () {
  var WIZARDS_URL = 'https://js.dump.academy/code-and-magick/data';
  var SIMILAR_CHARACTERS_QUANTITY = 4;

  var allWizards = null;
  var similarCharactersListClassName = window.similarCharactersList.classList[0];
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
    var oldSimilarCharactersList = document.querySelector('.' + similarCharactersListClassName);
    var similarСharactersFragment = oldSimilarCharactersList.cloneNode(false);

    for (var i = 0; i < SIMILAR_CHARACTERS_QUANTITY; i++) {
      similarСharactersFragment.appendChild(generateSimilarCharacter(wizards[i]));
    }

    oldSimilarCharactersList.parentElement.replaceChild(similarСharactersFragment, oldSimilarCharactersList);
  }

  function getRank(wizard) {
    var currentWizardColors = window.getCurrentWizardColors();
    var rank = 0;

    if (wizard.colorCoat === currentWizardColors.coat) {
      rank += 2;
    }

    if (wizard.colorEyes === currentWizardColors.eyes) {
      rank++;
    }

    return rank;
  }

  function namesComparataor(a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  }

  function sortWizards(a, b) {
    var rankDifference = getRank(b) - getRank(a);

    if (rankDifference === 0) {
      rankDifference = namesComparataor(a.name, b.name);
    }

    return rankDifference;
  }

  function updateSimilarCharacters() {
    generateSimilarCharacters(allWizards.sort(sortWizards));
  }

  function onLoad(wizards) {
    allWizards = wizards;
    updateSimilarCharacters();
  }

  window.backend.load(WIZARDS_URL, onLoad, window.onError);
  window.updateSimilarCharacters = updateSimilarCharacters;
})();
