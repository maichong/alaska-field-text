/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-02-22
 * @author Liang <liang@maichong.it>
 */

'use strict';

import React from 'react';

const View = React.createClass({

  render() {
    return <div>
      <textarea>{this.props.value|| ""}</textarea>
    </div>
  }

});

export default View;
