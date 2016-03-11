/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-03-07
 * @author Liang <liang@maichong.it>
 */

import React from 'react';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import ContextPure from 'material-ui/lib/mixins/context-pure';
import TextField from 'material-ui/lib/text-field';

import { shallowEqual } from 'alaska-admin-view';

export default class TextFieldView extends React.Component {

  static propTypes = {
    value: React.PropTypes.any,
    model: React.PropTypes.object,
    data: React.PropTypes.object,
    field: React.PropTypes.object,
    onChange: React.PropTypes.func,

  };

  static contextTypes = {
    muiTheme: React.PropTypes.object,
    views: React.PropTypes.object,
    settings: React.PropTypes.object,
  };

  static childContextTypes = {
    muiTheme: React.PropTypes.object,
    views: React.PropTypes.object,
    settings: React.PropTypes.object,
  };

  static mixins = [
    ContextPure
  ];

  constructor(props, context) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      muiTheme: context.muiTheme ? context.muiTheme : getMuiTheme(),
      views: context.views,
      settings: context.settings,
    };
  }

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
      views: this.context.views,
      settings: this.context.settings,
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    let newState = {};
    if (nextContext.muiTheme) {
      newState.muiTheme = nextContext.muiTheme;
    }
    if (nextContext.views) {
      newState.views = nextContext.views;
    }
    this.setState(newState);
  }

  handleChange(event) {
    this.props.onChange && this.props.onChange(event.target.value);
  }

  shouldComponentUpdate(props) {
    return !shallowEqual(props, this.props, 'data', 'onChange', 'model', 'field');
  }

  render() {
    let {
      model,
      data,
      field,
      onChange,
      ...others
      } = this.props;
    let {muiTheme} = this.state;
    let noteElement = field.note ?
      <div style={field.fullWidth?muiTheme.fieldNote:muiTheme.fieldNoteInline}>{field.note}</div> : null;
    return (
      <div><TextField
        ref="input"
        fullWidth={field.fullWidth}
        floatingLabelText={field.label}
        onChange={this.handleChange}
        {...others}
      />{noteElement}</div>
    );
  }
}
