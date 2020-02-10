"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Fieldset.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Fieldset = function Fieldset(_ref) {
  var _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? false : _ref$inline,
      label = _ref.label,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["inline", "label", "children"]);

  var classes = inline ? 'cg-fieldset cg-fieldset--inline' : 'cg-fieldset';

  var renderInnerHtml = function renderInnerHtml(label, children) {
    return label ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", {
      className: "cg-label"
    }, label), children) : children;
  };

  return _react.default.createElement("div", _extends({
    className: classes
  }, props), renderInnerHtml(label, children));
};

Fieldset.propTypes = {
  label: _propTypes.default.string,
  inline: _propTypes.default.bool,
  children: _propTypes.default.node
};
var _default = Fieldset;
exports.default = _default;

//# sourceMappingURL=Fieldset.js.map