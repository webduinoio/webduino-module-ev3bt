+(function (window, webduino) {

  'use strict';

  window.getEV3BT = function (board, rx, tx) {
    return new webduino.module.EV3BT(board, rx, tx);
  };

}(window, window.webduino));
