"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Media = _interopRequireDefault(require("../../utility/Media"));

var _mods = _interopRequireDefault(require("../../utility/mods"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Loader = _interopRequireDefault(require("../Loader"));

require("./Button.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var className = _ref.className,
      primary = _ref.primary,
      secondary = _ref.secondary,
      solid = _ref.solid,
      outline = _ref.outline,
      dark = _ref.dark,
      gray = _ref.gray,
      white = _ref.white,
      loading = _ref.loading,
      size = _ref.size,
      _ref$media = _ref.media,
      media = _ref$media === void 0 ? {} : _ref$media,
      disabled = _ref.disabled,
      children = _ref.children,
      onClick = _ref.onClick,
      icon = _ref.icon;
  return _react.default.createElement("button", {
    className: (0, _mods.default)('cg-button', {
      primary: primary,
      secondary: secondary,
      solid: solid,
      outline: outline,
      dark: dark,
      gray: gray,
      white: white
    }, size && "cg-button--".concat(size), _Media.default.toModifiers('cg-button', media), loading && 'cg-button--loading', className),
    disabled: disabled,
    onClick: onClick
  }, icon && _react.default.createElement(_Icon.default, {
    className: "cg-button__icon",
    name: icon
  }), loading ? _react.default.createElement(_Loader.default, {
    white: solid
  }) : children);
};

var Size = _propTypes.default.oneOf(['xsmall', 'small', 'large', 'xlarge']);

Button.propTypes = {
  className: _propTypes.default.string,
  icon: _propTypes.default.string,
  primary: _propTypes.default.bool,
  secondary: _propTypes.default.bool,
  solid: _propTypes.default.bool,
  outline: _propTypes.default.bool,
  dark: _propTypes.default.bool,
  gray: _propTypes.default.bool,
  white: _propTypes.default.bool,
  size: Size,
  loading: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  children: _propTypes.default.node,
  media: _Media.default.propTypeFor(Size)
};
var _default = Button;
exports.default = _default;

//# sourceMappingURL=Button.js.map