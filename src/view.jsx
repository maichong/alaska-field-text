/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-03-07
 * @author Liang <liang@maichong.it>
 */

import React from 'react';
import { Input } from 'react-bootstrap';

import { shallowEqual } from 'alaska-admin-view';

export default class TextFieldView extends React.Component {

  static propTypes = {
    value: React.PropTypes.any,
    model: React.PropTypes.object,
    data: React.PropTypes.object,
    field: React.PropTypes.object,
    onChange: React.PropTypes.func,
  };

  handleChange = (event) => {
    this.props.onChange && this.props.onChange(event.target.value);
  };

  shouldComponentUpdate(props) {
    return !shallowEqual(props, this.props, 'data', 'onChange', 'model', 'field');
  }

  render() {
    let {
      model,
      data,
      field,
      onChange,
      value,
      errorText
      } = this.props;
    let help = field.help;
    let style;
    if (errorText) {
      style = 'error';
      help = errorText;
    }
    return (
      <Input
        ref="input"
        type="text"
        bsStyle={style}
        label={field.label}
        value={value}
        onChange={this.handleChange}
        labelClassName="col-xs-2"
        wrapperClassName="col-xs-10"
        help={help}
        addonAfter={field.addonAfter}
        addonBefore={field.addonBefore}
      />
    );
  }
}
