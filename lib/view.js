'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _alaskaAdminView = require('alaska-admin-view');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright Maichong Software Ltd. 2016 http://maichong.it
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2016-03-07
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Liang <liang@maichong.it>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var TextFieldView = function (_React$Component) {
  _inherits(TextFieldView, _React$Component);

  function TextFieldView() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, TextFieldView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TextFieldView)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleChange = function (event) {
      _this.props.onChange && _this.props.onChange(event.target.value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextFieldView, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(props) {
      return !(0, _alaskaAdminView.shallowEqual)(props, this.props, 'data', 'onChange', 'model', 'field');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var model = _props.model;
      var data = _props.data;
      var field = _props.field;
      var onChange = _props.onChange;
      var value = _props.value;
      var errorText = _props.errorText;

      var help = field.help;
      var style = void 0;
      if (errorText) {
        style = 'error';
        help = errorText;
      }
      return _react2.default.createElement(_reactBootstrap.Input, {
        ref: 'input',
        type: 'text',
        bsStyle: style,
        label: field.label,
        value: value,
        onChange: this.handleChange,
        labelClassName: 'col-xs-2',
        wrapperClassName: 'col-xs-10',
        help: help,
        addonAfter: field.addonAfter,
        addonBefore: field.addonBefore
      });
    }
  }]);

  return TextFieldView;
}(_react2.default.Component);

TextFieldView.propTypes = {
  value: _react2.default.PropTypes.any,
  model: _react2.default.PropTypes.object,
  data: _react2.default.PropTypes.object,
  field: _react2.default.PropTypes.object,
  onChange: _react2.default.PropTypes.func
};
exports.default = TextFieldView;