/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-02-22
 * @author Liang <liang@maichong.it>
 */

'use strict';

const alaska = require('alaska');

class TextFeild extends alaska.Field {
  init() {
    if (this.match && !(this.match instanceof RegExp)) {
      throw new Error(`${this._model.name}.${this.path} field "match" option must be instance of RegExp`);
    }
  }

  createFilter(filter) {
    let exact = true;
    let inverse = false;
    let value = filter;
    if (typeof filter === 'object') {
      value = filter.value;
      //默认精确
      exact = filter.exact !== false && filter.exact !== 'false';
      inverse = filter.inverse && filter.inverse !== 'false';
    }
    let result;

    if (value) {
      if (exact) {
        result = new RegExp('^' + alaska.util.escapeRegExp(value) + '$', 'i');
      } else {
        result = new RegExp(alaska.util.escapeRegExp(value), 'i');
      }
      if (inverse) {
        result = { $not: result };
      }
    } else {
      if (inverse) {
        result = { $nin: ['', null] };
      } else {
        result = { $in: ['', null] };
      }
    }
    return result;
  }
}

TextFeild.views = {
  cell: {
    name: 'TextFieldCell',
    field: __dirname + '/lib/cell.js'
  },
  view: {
    name: 'TextFieldView',
    field: __dirname + '/lib/view.js'
  },
  filter: {
    name: 'TextFieldFilter',
    field: __dirname + '/lib/filter.js'
  }
};

TextFeild.plain = String;

TextFeild.options = ['trim', 'match', 'lowercase', 'uppercase', 'maxlength', 'minlength'];
TextFeild.viewOptions = ['trim', 'match', 'lowercase', 'uppercase', 'maxlength', 'minlength', 'addonBefore', 'addonAfter', 'multiLine', 'translate'];

module.exports = TextFeild;
