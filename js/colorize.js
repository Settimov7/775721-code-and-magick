'use strict';

(function () {

  window.colorize = function (element, inputField, colors) {
    element.addEventListener('click', function (evt) {
      evt.preventDefault();

      var newColor = window.util.getRandomElement(colors);

      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = newColor;
      } else {
        element.style.fill = newColor;
      }

      inputField.value = newColor;

      window.debounce(window.updateSimilarCharacters);
    });
  };
})();
