/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-03-02
 * @author Liang <liang@maichong.it>
 */

import React from 'react';

export default class TextFieldCell extends React.Component {

  static propTypes = {
    model: React.PropTypes.object,
    field: React.PropTypes.object,
    value: React.PropTypes.any
  };

  static contextTypes = {
    t: React.PropTypes.func,
  };

  shouldComponentUpdate(props) {
    return props.value != this.props.value;
  }

  render() {
    let {value, field, model} = this.props;
    if (value && field.translate) {
      const t = this.context.t;
      value = t(value, model.service.id);
    }
    return (
      <div>{value}</div>
    );
  }
}
