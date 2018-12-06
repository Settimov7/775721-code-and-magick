'use strict';

(function () {
  var SETUP_START_POSITION = {
    top: '80px',
    left: '50%'
  };

  window.dialog = function (dialogWindow) {
    var setupOpen = document.querySelector('.setup-open');
    var setupClose = dialogWindow.querySelector('.setup-close');
    var setupSimilar = dialogWindow.querySelector('.setup-similar');

    function onPopupEscPress(evt) {
      window.util.isEscEvent(evt, closePopup);
    }

    function openPopup() {
      window.util.showElement(dialogWindow);
      window.util.showElement(setupSimilar);

      dialogWindow.style.top = SETUP_START_POSITION.top;
      dialogWindow.style.left = SETUP_START_POSITION.left;
      document.addEventListener('keydown', onPopupEscPress);
    }

    function closePopup() {
      window.util.hideElement(dialogWindow);

      document.removeEventListener('keydown', onPopupEscPress);
    }

    setupOpen.addEventListener('click', function (evt) {
      evt.preventDefault();

      openPopup();
    });

    setupClose.addEventListener('click', function (evt) {
      evt.preventDefault();

      closePopup();
    });

    setupOpen.addEventListener('keydown', function (evt) {
      evt.preventDefault();

      window.util.isEnterEvent(evt, openPopup);
    });

    setupClose.addEventListener('keydown', function (evt) {
      evt.preventDefault();

      window.util.isEnterEvent(evt, closePopup);
    });
  };
})();
