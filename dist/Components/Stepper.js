"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Stepper = function Stepper(_ref) {
  var steps = _ref.steps,
    activeStep = _ref.activeStep;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "progress-bar"
  }, steps.map(function (step, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      className: "step ".concat(index <= activeStep ? 'active' : '')
    }, step.label);
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "step-content"
  }, steps[activeStep].content));
};
var _default = exports["default"] = Stepper;