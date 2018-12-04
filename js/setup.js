'use strict';

// util.js

// dialog.js

// wizardsdata.js

// wizards.js

// colorize.js

// draganddrop.js

// setup.js
(function () {
  var setup = document.querySelector('.setup'); // Повтор
  var setupSimilar = setup.querySelector('.setup-similar');
  var similarCharactersList = setupSimilar.querySelector('.setup-similar-list');
  var wizardsData = window.wizardsData;
  var setupWizard = setup.querySelector('.setup-wizard');
  var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
  var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireball = setup.querySelector('.setup-fireball-wrap');
  var setupHandler = setup.querySelector('.upload');

  window.dialog(setup);

  window.addCharactersToList(similarCharactersList);

  window.colorize(setupWizardCoat, setup.querySelector('input[name="coat-color"]'), wizardsData.coatColors);
  window.colorize(setupWizardEyes, setup.querySelector('input[name="eyes-color"]'), wizardsData.eyesColors);
  window.colorize(setupFireball, setupFireball.querySelector('input[name="fireball-color"]'), wizardsData.fireballColors);

  window.addDragging(setup, setupHandler);
})();

