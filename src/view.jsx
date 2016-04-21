/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-03-07
 * @author Liang <liang@maichong.it>
 */

import React from 'react';

import { shallowEqual } from 'alaska-admin-view';

export default class TextFieldView extends React.Component {

  static propTypes = {
    model: React.PropTypes.object,
    field: React.PropTypes.object,
    data: React.PropTypes.object,
    errorText: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    value: React.PropTypes.any,
    onChange: React.PropTypes.func,
  };

  shouldComponentUpdate(props) {
    return !shallowEqual(props, this.props, 'data', 'onChange', 'model', 'field');
  }

  handleChange = (event) => {
    this.props.onChange && this.props.onChange(event.target.value);
  };

  render() {
    let {
      field,
      disabled,
      value,
      errorText
      } = this.props;
    let help = field.help;
    let className = 'form-group';
    if (errorText) {
      className += ' has-error';
      help = errorText;
    }
    let helpElement = help ? <p className="help-block">{help}</p> : null;
    let inputElement;
    if (field.static) {
      inputElement = <p className="form-control-static">{value}</p>;
    } else {
      inputElement =
        <input type="text" className="form-control" onChange={this.handleChange} value={value} disabled={disabled}/>;
      let addonAfter = field.addonAfter ? <span className="input-group-addon">{field.addonAfter}</span> : null;
      let addonBefore = field.addonBefore ? <span className="input-group-addon">{field.addonBefore}</span> : null;
      if (addonAfter || addonBefore) {
        inputElement = <div className="input-group">{addonBefore}{inputElement}{addonAfter}</div>;
      }
    }

    let label = field.nolabel ? '' : field.label;

    if (field.fullWidth) {
      let labelElement = label ? (
        <label className="control-label">{label}</label>
      ) : null;
      return (
        <div className={className}>
          {labelElement}
          {inputElement}
          {helpElement}
        </div>
      );
    }

    return (
      <div className={className}>
        <label className="col-sm-2 control-label">{label}</label>
        <div className="col-sm-10">
          {inputElement}
          {helpElement}
        </div>
      </div>
    );
  }
}
