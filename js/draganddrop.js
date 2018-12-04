'use strict';

(function () {
  window.addDragging = function (element, elementHandler) {
    function dragging(evt) {
      evt.preventDefault();

      var dragged = false;
      var startCoords = {
        x: evt.clientX,
        y: evt.clientY
      };

      function onMouseMove(moveEvt) {
        moveEvt.preventDefault();


        var shift = {
          x: startCoords.x - moveEvt.clientX,
          y: startCoords.y - moveEvt.clientY
        };

        dragged = true;

        startCoords = {
          x: moveEvt.clientX,
          y: moveEvt.clientY
        };

        element.style.top = (element.offsetTop - shift.y) + 'px';
        element.style.left = (element.offsetLeft - shift.x) + 'px';
      }

      function onMouseUp(upEvt) {
        upEvt.preventDefault();

        function onClickPreventDefault(clickEvt) {
          clickEvt.preventDefault();

          elementHandler.removeEventListener('click', onClickPreventDefault);
        }

        if (dragged) {
          elementHandler.addEventListener('click', onClickPreventDefault);
        }

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      }

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }

    elementHandler.addEventListener('mousedown', dragging);
  };
})();
