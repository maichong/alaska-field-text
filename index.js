/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-02-22
 * @author Liang <liang@maichong.it>
 */

'use strict';

const alaska = require('alaska');

exports.views = {
  cell: {
    name: 'TextFieldCell',
    field: __dirname + '/lib/cell.js'
  },
  view: {
    name: 'TextFieldView',
    field: __dirname + '/lib/view.js'
  }
};

exports.plain = String;
exports.initSchema = function (field, schema, Model) {
  let options = {
    type: String
  };
  if (field.match && !(field instanceof RegExp)) {
    throw new Error(`${Model.name}.${field.path} field "match" option must be instance of RegExp`);
  }
  [
    'get',
    'set',
    'default',
    'index',
    'required',
    'select',
    'trim',
    'match',
    'lowercase',
    'uppercase',
    'maxlength',
    'minlength'
  ].forEach(function (key) {
    if (field[key] !== undefined) {
      options[key] = field[key];
    }
  });
  schema.path(field.path, options);
};

/**
 * alaska-admin-view 前端控件初始化参数
 * @param field
 * @param Model
 */
exports.viewOptions = function (field, Model) {
  let options = alaska.Field.viewOptions.apply(this, arguments);
  options.trim = field.trim;
  options.match = field.match;
  options.lowercase = field.lowercase;
  options.uppercase = field.uppercase;
  options.maxlength = field.maxlength instanceof Array ? field.maxlength[0] : field.maxlength;
  options.multiLine = field.multiLine instanceof Array ? field.multiLine[0] : field.multiLine;
  return options;
};
