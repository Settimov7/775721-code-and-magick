'use strict';

(function () {
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    getRandomElement: function (elements) {
      return elements[generateRandomNumber(0, elements.length)];
    }
  };
})();
