'use strict';

(function () {
  var SAVE_URL = 'https://js.dump.academy/code-and-magick';

  var setup = document.querySelector('.setup');
  var setupSimilar = setup.querySelector('.setup-similar');
  var similarCharactersList = setupSimilar.querySelector('.setup-similar-list');
  var setupWizard = setup.querySelector('.setup-wizard');
  var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
  var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireball = setup.querySelector('.setup-fireball-wrap');
  var setupHandler = setup.querySelector('.upload');
  var setupForm = setup.querySelector('.setup-wizard-form');
  var inputCoatColor = setup.querySelector('input[name="coat-color"]');
  var inputEyesColor = setup.querySelector('input[name="eyes-color"]');
  var inputFireballColor = setupFireball.querySelector('input[name="fireball-color"]');

  var wizardsColors = window.wizardsColors;

  function onDataSave() {
    window.util.hideElement(setup);
  }

  function getCurrentWizardColors() {
    return {
      coat: inputCoatColor.value,
      eyes: inputEyesColor.value,
      fireball: inputFireballColor.value
    };
  }

  setupForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    window.backend.save(SAVE_URL, new FormData(setupForm), onDataSave, window.onError);
  });

  window.dialog(setup);

  window.colorize(setupWizardCoat, inputCoatColor, wizardsColors.coatColors);
  window.colorize(setupWizardEyes, inputEyesColor, wizardsColors.eyesColors);
  window.colorize(setupFireball, inputFireballColor, wizardsColors.fireballColors);


  window.addDragging(setup, setupHandler);

  window.similarCharactersList = similarCharactersList;
  window.getCurrentWizardColors = getCurrentWizardColors;
})();

