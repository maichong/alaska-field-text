/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-03-02
 * @author Liang <liang@maichong.it>
 */

import React from 'react';

const { object, any, func } = React.PropTypes;

export default class TextFieldCell extends React.Component {

  static propTypes = {
    model: object,
    field: object,
    value: any
  };

  static contextTypes = {
    t: func,
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
