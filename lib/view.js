/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-02-22
 * @author Liang <liang@maichong.it>
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _textField = require('material-ui/lib/text-field');

var _textField2 = _interopRequireDefault(_textField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var View = function (_React$Component) {
  _inherits(View, _React$Component);

  function View(props) {
    _classCallCheck(this, View);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(View).call(this, props));

    _this.state = {
      hintText: props.hintText || "",
      multiLine: props.multiLine || true,
      rows: props.rows || 1,
      rowsMax: props.rowsMax || 4,
      value: props.value || "",
      disabled: props.disabled || false,
      fullWidth: props.fullWidth || false,
      onBlur: props.onBlur,
      onChange: props.onChange,
      onEnterKeyDown: props.onEnterKeyDown
    };
    return _this;
  }

  _createClass(View, [{
    key: '_onBlurHandle',
    value: function _onBlurHandle(event) {
      if (typeof this.state.onBlur == "function") {
        this.state.onBlur(event);
      }
    }
  }, {
    key: '_onChangeHandle',
    value: function _onChangeHandle(event) {
      this.setState({ value: event.target.value });
      if (typeof this.state.onChange == "function") {
        this.state.onChange(event);
      }
    }
  }, {
    key: '_onEnterKeyDownHandel',
    value: function _onEnterKeyDownHandel(event) {
      if (typeof this.state.onEnterKeyDown == "function") {
        this.state.onEnterKeyDown(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(MyText, {
        hintText: this.state.hintText,
        multiLine: this.state.multiLine,
        rows: this.state.rows,
        rowsMax: this.state.rowsMax,
        value: this.state.value,
        disabled: this.state.disabled,
        fullWidth: this.state.fullWidth,
        onBlur: this._onBlurHandle.bind(this),
        onChange: this._onChangeHandle.bind(this),
        onEnterKeyDown: this._onEnterKeyDownHandel.bind(this)
      });
    }
  }]);

  return View;
}(_react2.default.Component);

exports.default = View;