'use strict';

(function () {
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

  function closeSetup() {
    setup.classList.add('hidden');
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

  setupForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    window.backend.save(new FormData(setupForm), closeSetup, onError);
  });

  window.dialog(setup);

  window.colorize(setupWizardCoat, setup.querySelector('input[name="coat-color"]'), wizardsColors.coatColors);
  window.colorize(setupWizardEyes, setup.querySelector('input[name="eyes-color"]'), wizardsColors.eyesColors);
  window.colorize(setupFireball, setupFireball.querySelector('input[name="fireball-color"]'), wizardsColors.fireballColors);

  window.addDragging(setup, setupHandler);

  window.similarCharactersList = similarCharactersList;
})();

