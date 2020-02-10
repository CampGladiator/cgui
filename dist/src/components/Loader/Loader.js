"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _mods = _interopRequireDefault(require("../../utility/mods"));

require("./Loader.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'loading' : _ref$label,
      white = _ref.white,
      gray = _ref.gray,
      dark = _ref.dark,
      secondary = _ref.secondary,
      primary = _ref.primary,
      disabled = _ref.disabled,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return _react.default.createElement("figure", {
    className: (0, _mods.default)('cg-loader', {
      white: white,
      gray: gray,
      dark: dark,
      secondary: secondary,
      primary: primary,
      disabled: disabled
    }, className),
    role: "alert",
    "aria-live": "assertive",
    "aria-label": label
  }, _react.default.createElement("div", {
    className: "cg-loader__dot",
    key: 1
  }), _react.default.createElement("div", {
    className: "cg-loader__dot",
    key: 2
  }), _react.default.createElement("div", {
    className: "cg-loader__dot",
    key: 3
  }));
};

var _default = Loader;
exports.default = _default;

//# sourceMappingURL=Loader.js.map