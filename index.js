/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-02-22
 * @author Liang <liang@maichong.it>
 */

'use strict';

const alaska = require('alaska');

/**
 *  @hintText 提示信息 String
 *  @multiLine 是否自动换行 boolean
 *  @rows 默认显示的行数 number
 *  @rowsMax 最大显示的行数 number
 *  @value 显示的内容 String
 *  @disabled 是否可用 boolean
 *  @fullWidth 宽度是否全屏 boolean
 *  @onBlur 失去焦点事件 function(event)
 *  @onChange 内容改变事件 function(event)
 *  @onEnterKeyDown 回车键按下事件 function(event)
 */
exports.template = __dirname + '/lib/view.js';

exports.plain = String;

/**
 * 初始化方法
 * @param field   alaksa.Model中的字段配置
 * @param options Mongoose模型字段初始化参数
 */
exports.init = function (field, options) {
  if (field.uppercase) {
    options.uppercase = field.uppercase;
  }

  //TODO 所有mongoose String 类型初始化参数
};
