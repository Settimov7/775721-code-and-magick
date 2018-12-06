'use strict';

(function () {
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;
  var HIDDEN_CLASS_NAME = 'hidden';

  function isEscEvent(evt, action) {
    if (evt.keyCode === ESC_KEYCODE) {
      action();
    }
  }

  function isEnterEvent(evt, action) {
    if (evt.keyCode === ENTER_KEYCODE) {
      action();
    }
  }

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getRandomElement(elements) {
    return elements[generateRandomNumber(0, elements.length)];
  }

  function showElement(element) {
    element.classList.remove(HIDDEN_CLASS_NAME);
  }

  function hideElement(element) {
    element.classList.add(HIDDEN_CLASS_NAME);
  }

  window.util = {
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    getRandomElement: getRandomElement,
    showElement: showElement,
    hideElement: hideElement
  };
})();
