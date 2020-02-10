"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Dropdown.scss");

var _Fieldset = _interopRequireDefault(require("../Fieldset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Dropdown = function Dropdown(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? false : _ref$inline,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$default_ = _ref.default_,
      default_ = _ref$default_ === void 0 ? {
    label: 'SELECT',
    value: ''
  } : _ref$default_,
      props = _objectWithoutProperties(_ref, ["label", "inline", "options", "default_"]);

  return _react.default.createElement(_Fieldset.default, {
    inline: inline,
    label: label
  }, _react.default.createElement("select", _extends({
    className: "cg-input cg-input--rounded cg-input--dropdown"
  }, props), [default_].concat(_toConsumableArray(options)).map(function (opt) {
    return opt && _react.default.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })));
};

var Option = _propTypes.default.shape({
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired
});

Dropdown.propTypes = {
  options: _propTypes.default.arrayOf(Option),
  default_: Option
};
var _default = Dropdown;
exports.default = _default;

//# sourceMappingURL=Dropdown.js.map