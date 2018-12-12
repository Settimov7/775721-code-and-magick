'use strict';

(function () {
  var DEBOUNCE_INTERVAL = 300;

  var lastTimeout;

  function debounce(action) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }

    lastTimeout = setTimeout(action, DEBOUNCE_INTERVAL);
  }

  window.debounce = debounce;
})();
