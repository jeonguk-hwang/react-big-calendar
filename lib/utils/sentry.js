"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var Sentry = _interopRequireWildcard(require("@sentry/react"));
Sentry.init({
  dsn: 'https://318ae3c1b8e2747bcab8299c12ed1e57@o1398592.ingest.us.sentry.io/4508329798795264',
  integrations: [],
  release: 'react-big-calendar'
});

// ✅ 콘솔 로그를 Sentry에 자동으로 수집하는 핸들러 추가
var captureConsoleLog = function captureConsoleLog() {
  var originalConsole = console.info;
  console.info = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    Sentry.addBreadcrumb({
      category: 'console',
      message: args.map(function (arg) {
        return (0, _typeof2.default)(arg) === 'object' ? JSON.stringify(arg) : arg;
      }).join(' '),
      level: 'info'
    });

    // 원래 콘솔 로그 출력
    originalConsole.apply(console, args);
  };
};

// ✅ `console.info` 자동 수집
captureConsoleLog();
var _default = Sentry;
exports.default = _default;