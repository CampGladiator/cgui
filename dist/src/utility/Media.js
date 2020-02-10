"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _breakpoints = _interopRequireDefault(require("./breakpoints"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var toModifiers = function toModifiers(base, media) {
  return Object.entries(media).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        breakpoint = _ref2[0],
        size = _ref2[1];

    return "".concat(base, "--").concat(size, "@").concat(breakpoint);
  });
};

var propTypeFor = function propTypeFor(propType) {
  var _PropTypes$shape;

  return _propTypes.default.shape((_PropTypes$shape = {}, _defineProperty(_PropTypes$shape, _breakpoints.default.phoneOnly, propType), _defineProperty(_PropTypes$shape, _breakpoints.default.tabletLandscape, propType), _defineProperty(_PropTypes$shape, _breakpoints.default.tabletPortrait, propType), _defineProperty(_PropTypes$shape, _breakpoints.default.phoneOnly, propType), _PropTypes$shape));
};

var _default = {
  toModifiers: toModifiers,
  propTypeFor: propTypeFor
};
exports.default = _default;

//# sourceMappingURL=Media.js.map