(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wsClient = require("./ws-client");

var _wsClient2 = _interopRequireDefault(_wsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
  _classCallCheck(this, ChatApp);

  //console.log("Hello ES6!");
  _wsClient2.default.init("ws://localhost:3001");
};

var ChatMessage = function () {
  function ChatMessage(_ref) {
    var m = _ref.message,
        _ref$user = _ref.user,
        u = _ref$user === undefined ? "batman" : _ref$user,
        _ref$timestamp = _ref.timestamp,
        t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

    _classCallCheck(this, ChatMessage);

    this.message = m;
    this.user = u;
    this.timestamp = t;
  }

  _createClass(ChatMessage, [{
    key: "serialize",
    value: function serialize() {
      return {
        user: this.user,
        message: this.message,
        timestamp: this.timestamp
      };
    }
  }]);

  return ChatMessage;
}();

//new ChatApp();


exports.default = ChatApp;

},{"./ws-client":3}],2:[function(require,module,exports){
"use strict";

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var socket = void 0;

function init(url) {
  socket = new WebSocket(url);
  console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
  socket.onopen = function () {
    console.log('open');
    handlerFunction();
  };
}

function registerMessageHandler(handlerFunction) {
  socket.onmessage = function (e) {
    console.log('message', e.data);
    var data = JSON.parse(e.data);
    handlerFunction(data);
  };
}

function sendMessage(payload) {
  socket.send(JSON.stringify(payload));
}

exports.default = {
  init: init,
  registerOpenHandler: registerOpenHandler,
  registerMessageHandler: registerMessageHandler,
  sendMessage: sendMessage
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFTSxPLEdBQ0osbUJBQWM7QUFBQTs7QUFDWjtBQUNBLHFCQUFPLElBQVAsQ0FBWSxxQkFBWjtBQUNELEM7O0lBR0csVztBQUNKLDZCQUlHO0FBQUEsUUFIUSxDQUdSLFFBSEQsT0FHQztBQUFBLHlCQUZELElBRUM7QUFBQSxRQUZLLENBRUwsNkJBRk8sUUFFUDtBQUFBLDhCQURELFNBQ0M7QUFBQSxRQURVLENBQ1Ysa0NBRGEsSUFBSSxJQUFKLEVBQUQsQ0FBYSxPQUFiLEVBQ1o7O0FBQUE7O0FBQ0QsU0FBSyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFNBQUssSUFBTCxHQUFZLENBQVo7QUFDQSxTQUFLLFNBQUwsR0FBaUIsQ0FBakI7QUFDRDs7OztnQ0FDVztBQUNWLGFBQU87QUFDTCxjQUFNLEtBQUssSUFETjtBQUVMLGlCQUFTLEtBQUssT0FGVDtBQUdMLG1CQUFXLEtBQUs7QUFIWCxPQUFQO0FBS0Q7Ozs7OztBQUdIOzs7a0JBQ2UsTzs7Ozs7QUM3QmY7Ozs7OztBQUNBOzs7Ozs7OztBQ0RBLElBQUksZUFBSjs7QUFFQSxTQUFTLElBQVQsQ0FBYyxHQUFkLEVBQW1CO0FBQ2pCLFdBQVMsSUFBSSxTQUFKLENBQWMsR0FBZCxDQUFUO0FBQ0EsVUFBUSxHQUFSLENBQVksZUFBWjtBQUNEOztBQUVELFNBQVMsbUJBQVQsQ0FBNkIsZUFBN0IsRUFBOEM7QUFDNUMsU0FBTyxNQUFQLEdBQWdCLFlBQU07QUFDcEIsWUFBUSxHQUFSLENBQVksTUFBWjtBQUNBO0FBQ0QsR0FIRDtBQUlEOztBQUVELFNBQVMsc0JBQVQsQ0FBZ0MsZUFBaEMsRUFBaUQ7QUFDL0MsU0FBTyxTQUFQLEdBQW1CLFVBQUMsQ0FBRCxFQUFPO0FBQ3hCLFlBQVEsR0FBUixDQUFZLFNBQVosRUFBdUIsRUFBRSxJQUF6QjtBQUNBLFFBQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxFQUFFLElBQWIsQ0FBWDtBQUNBLG9CQUFnQixJQUFoQjtBQUNELEdBSkQ7QUFLRDs7QUFFRCxTQUFTLFdBQVQsQ0FBcUIsT0FBckIsRUFBOEI7QUFDNUIsU0FBTyxJQUFQLENBQVksS0FBSyxTQUFMLENBQWUsT0FBZixDQUFaO0FBQ0Q7O2tCQUVjO0FBQ2IsWUFEYTtBQUViLDBDQUZhO0FBR2IsZ0RBSGE7QUFJYjtBQUphLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgc29ja2V0IGZyb20gXCIuL3dzLWNsaWVudFwiO1xuXG5jbGFzcyBDaGF0QXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy9jb25zb2xlLmxvZyhcIkhlbGxvIEVTNiFcIik7XG4gICAgc29ja2V0LmluaXQoXCJ3czovL2xvY2FsaG9zdDozMDAxXCIpO1xuICB9XG59XG5cbmNsYXNzIENoYXRNZXNzYWdlIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIG1lc3NhZ2U6IG0sXG4gICAgdXNlcjogdT1cImJhdG1hblwiLFxuICAgIHRpbWVzdGFtcDogdD0obmV3IERhdGUoKSkuZ2V0VGltZSgpXG4gIH0pIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtO1xuICAgIHRoaXMudXNlciA9IHU7XG4gICAgdGhpcy50aW1lc3RhbXAgPSB0O1xuICB9XG4gIHNlcmlhbGl6ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcjogdGhpcy51c2VyLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgdGltZXN0YW1wOiB0aGlzLnRpbWVzdGFtcFxuICAgIH07XG4gIH1cbn1cblxuLy9uZXcgQ2hhdEFwcCgpO1xuZXhwb3J0IGRlZmF1bHQgQ2hhdEFwcDtcbiIsImltcG9ydCBDaGF0QXBwIGZyb20gXCIuL2FwcFwiO1xubmV3IENoYXRBcHAoKTtcbiIsImxldCBzb2NrZXQ7XG5cbmZ1bmN0aW9uIGluaXQodXJsKSB7XG4gIHNvY2tldCA9IG5ldyBXZWJTb2NrZXQodXJsKTtcbiAgY29uc29sZS5sb2coJ2Nvbm5lY3RpbmcuLi4nKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJPcGVuSGFuZGxlcihoYW5kbGVyRnVuY3Rpb24pIHtcbiAgc29ja2V0Lm9ub3BlbiA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnb3BlbicpO1xuICAgIGhhbmRsZXJGdW5jdGlvbigpO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZWdpc3Rlck1lc3NhZ2VIYW5kbGVyKGhhbmRsZXJGdW5jdGlvbikge1xuICBzb2NrZXQub25tZXNzYWdlID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygnbWVzc2FnZScsIGUuZGF0YSk7XG4gICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG4gICAgaGFuZGxlckZ1bmN0aW9uKGRhdGEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzZW5kTWVzc2FnZShwYXlsb2FkKSB7XG4gIHNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0LFxuICByZWdpc3Rlck9wZW5IYW5kbGVyLFxuICByZWdpc3Rlck1lc3NhZ2VIYW5kbGVyLFxuICBzZW5kTWVzc2FnZVxufVxuIl19