+(function(factory) {
    if (typeof exports === 'undefined') {
        factory(webduino || {});
    } else {
        module.exports = factory;
    }
}(function(scope) {
    'use strict';

    var self;
    var proto;
    var Module = scope.Module;

    function getMessage(m) {
        var text = "";
        for (var i = 3; i < m.length; i++) {
            text += String.fromCharCode(m[i]);
        }
        var cutPos = text.indexOf(' ');
        var title = text.substring(0, cutPos);
        text = text.substring(cutPos + 1);
        return [title, text];
    }

    function EV3BT(board, rx, tx) {
        Module.call(this);
        this._board = board;
        self = this;
        self.callback = {};
        self.title = '';
        self.content = '';
        self._rx = rx;
        self._tx = tx;
        board.send([0xF0, 0x04, 0x23, 0x04 /*init*/ , rx, tx, 0xF7]);
        board.on(webduino.BoardEvent.SYSEX_MESSAGE, function(event) {
            var m = event.message;
            if (m[0] == 0x04 && m[1] == 0x23) {
                var msg = getMessage(m);
                self.msgType = m[2];
                self.title = msg[0];
                self.content = msg[1];
                if (self.msgType == 1) {
                    self.content = self.content == '1' ? true : false;
                }
                var callbackList = self.callback[self.title];
                for (var cb in callbackList) {
                    callbackList[cb](self.content);
                }
            }
        });
    }

    EV3BT.prototype = proto = Object.create(Module.prototype, {
        constructor: {
            value: EV3BT
        }
    });

    proto.on = function(title, callback) {
        if (self.callback[title] == null) {
            self.callback[title] = [];
        }
        self.callback[title].push(callback);
    }

    proto.sendLogic = function(title, b) {
        var cmd = [0xF0, 0x04, 0x23, 0x01, title.length];
        var data = title;
        var dataLen = data.length;
        for (var i = 0; i < dataLen; i++) {
            cmd.push(data.charCodeAt(i));
        }
        var b = b.toString().toLowerCase() == 'true' ? true : false;
        cmd.push(b ? 0x31 : 0x30);
        cmd.push(0xF7);
        this._board.send(cmd);
    }

    proto.sendNumber = function(title, num) {
        var cmd = [0xF0, 0x04, 0x23, 0x02, title.length];
        var data = title + num;
        var dataLen = data.length;
        for (var i = 0; i < dataLen; i++) {
            cmd.push(data.charCodeAt(i));
        }
        cmd.push(0xF7);
        this._board.send(cmd);
    }

    proto.sendText = function(title, txt) {
        var cmd = [0xF0, 0x04, 0x23, 0x03, title.length];
        var data = title + txt;
        var dataLen = data.length;
        for (var i = 0; i < dataLen; i++) {
            cmd.push(data.charCodeAt(i));
        }
        cmd.push(0xF7);
        this._board.send(cmd);
    }

    scope.module.EV3BT = EV3BT;
}));