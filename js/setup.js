'use strict';

(function () {
  var SAVE_URL = 'https://js.dump.academy/code-and-magick';

  var setup = document.querySelector('.setup');
  var setupSimilar = setup.querySelector('.setup-similar');
  var similarCharactersList = setupSimilar.querySelector('.setup-similar-list');
  var wizardsColors = window.wizardsColors;
  var setupWizard = setup.querySelector('.setup-wizard');
  var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
  var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireball = setup.querySelector('.setup-fireball-wrap');
  var setupHandler = setup.querySelector('.upload');
  var setupForm = setup.querySelector('.setup-wizard-form');

  function onDataSave() {
    window.util.hideElement(setup);
  }

  setupForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    window.backend.save(SAVE_URL, new FormData(setupForm), onDataSave, window.onError);
  });

  window.dialog(setup);

  window.colorize(setupWizardCoat, setup.querySelector('input[name="coat-color"]'), wizardsColors.coatColors);
  window.colorize(setupWizardEyes, setup.querySelector('input[name="eyes-color"]'), wizardsColors.eyesColors);
  window.colorize(setupFireball, setupFireball.querySelector('input[name="fireball-color"]'), wizardsColors.fireballColors);

  window.addDragging(setup, setupHandler);

  window.similarCharactersList = similarCharactersList;
})();

