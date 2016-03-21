/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-03-02
 * @author Liang <liang@maichong.it>
 */

import React from 'react';

export default class TextFieldCell extends React.Component {
  
  shouldComponentUpdate(props) {
    return props.value != this.props.value;
  }

  render() {
    let value = this.props.value;
    return (
      <div>{value}</div>
    );
  }
}
