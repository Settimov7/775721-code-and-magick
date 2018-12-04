'use strict';

(function () {
  var HIDDEN_CLASS_NAME = 'hidden';
  var SETUP_START_POSITION = {
    top: '80px',
    left: '50%'
  };

  window.dialog = function (dialogWindow) {
    var setupOpen = document.querySelector('.setup-open');
    var setupClose = dialogWindow.querySelector('.setup-close');
    var setupSimilar = dialogWindow.querySelector('.setup-similar');

    function showElement(element) {
      element.classList.remove(HIDDEN_CLASS_NAME);
    }

    function hideElement(element) {
      element.classList.add(HIDDEN_CLASS_NAME);
    }

    function onPopupEscPress(evt) {
      window.util.isEscEvent(evt, closePopup);
    }

    function openPopup() {
      showElement(dialogWindow);
      showElement(setupSimilar);

      dialogWindow.style.top = SETUP_START_POSITION.top;
      dialogWindow.style.left = SETUP_START_POSITION.left;
      document.addEventListener('keydown', onPopupEscPress);
    }

    function closePopup() {
      hideElement(dialogWindow);

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
