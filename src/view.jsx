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

  static contextTypes = {
    t: React.PropTypes.func,
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
      errorText,
      model
      } = this.props;
    const t = this.context.t;
    let help = field.help;
    let className = 'form-group';
    if (errorText) {
      className += ' has-error';
      help = errorText;
    }
    let helpElement = help ? <p className="help-block">{help}</p> : null;
    let inputElement;
    value = value || '';
    if (disabled && value && field.translate) {
      value = t(value, model.service.id);
    }
    if (field.static) {
      inputElement = <p className="form-control-static">{value}</p>;
    } else {
      let placeholder = field.placeholder ? t(field.placeholder, field.service || model.service.id) : '';
      if (field.multiLine) {
        inputElement =
          <textarea className="form-control" placeholder={placeholder} onChange={this.handleChange}
                    disabled={disabled} value={value}/>;
      } else {
        inputElement =
          <input type="text" className="form-control" placeholder={placeholder} onChange={this.handleChange}
                 value={value} disabled={disabled}/>;
        let addonAfter = field.addonAfter ?
          <span className="input-group-addon">{t(field.addonAfter, field.service || model.service.id)}</span> : null;
        let addonBefore = field.addonBefore ?
          <span className="input-group-addon">{t(field.addonBefore, field.service || model.service.id)}</span> : null;
        if (addonAfter || addonBefore) {
          inputElement = <div className="input-group">{addonBefore}{inputElement}{addonAfter}</div>;
        }
      }
    }

    let label = field.nolabel ? '' : field.label;

    if (field.horizontal === false) {
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
