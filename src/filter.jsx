/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-04-25
 * @author Liang <liang@maichong.it>
 */

import React from 'react';

const { object, any, func, string } = React.PropTypes;

export default class TextFieldFilter extends React.Component {

  static propTypes = {
    value: any,
    field: object,
    onChange: func,
    onClose: func,
  };

  static contextTypes = {
    t: func,
  };

  constructor(props) {
    super(props);
    let value = props.value || {};
    if (typeof value === 'string') {
      value = { value };
    }
    this.state = {
      mode: value.exact === false || value.exact === 'false' ? 2 : 1, // 1 精确匹配 2 包含
      value: value.value || '',
      error: !value.value,
      inverse: value.inverse || false
    };
    this.handleMode1 = this.handleMode.bind(this, 1);
    this.handleMode2 = this.handleMode.bind(this, 2);
  }

  handleMode(mode) {
    this.setState({ mode }, () => this.handleBlur());
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleInverse = () => {
    this.setState({ inverse: !this.state.inverse }, () => this.handleBlur());
  };

  handleBlur = () => {
    const { mode, value, inverse } = this.state;
    if (!value) {
      this.setState({ error: true });
      return;
    }
    this.setState({ error: false });
    let filter = value;
    if (mode === 2) {
      //包含
      filter = { value, exact: 'false' };
    }
    if (inverse) {
      if (mode === 2) {
        filter.inverse = inverse;
      } else {
        filter = { value, inverse };
      }
    }
    this.props.onChange(filter);
  };

  render() {
    const t = this.context.t;
    const { field, onClose } = this.props;
    const { mode, value, error, inverse } = this.state;
    const buttonClassName = 'btn btn-default';
    const buttonClassNameActive = buttonClassName + ' btn-success';
    let className = 'row field-filter text-field-filter' + (error ? ' error' : '');
    return (
      <div className={className}>
        <label className="col-xs-2 control-label text-right">{field.label}</label>
        <div className="form-inline col-xs-10">
          <div className="form-group btn-group">
            <a
              className={mode === 1 ? buttonClassNameActive : buttonClassName}
              onClick={this.handleMode1}>{t('equal')}
            </a>
            <a
              className={mode === 2 ? buttonClassNameActive : buttonClassName}
              onClick={this.handleMode2}>{t('contain')}
            </a>
          </div>
          <input
            type="text"
            className="form-control"
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={value}
          />
          <a
            className={inverse ? buttonClassNameActive : buttonClassName}
            onClick={this.handleInverse}>{t('inverse')}
          </a>
        </div>
        <a className="btn field-filter-close" onClick={onClose}><i className="fa fa-close"/></a>
      </div>
    );
  }
}
