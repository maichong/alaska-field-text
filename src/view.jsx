/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-02-22
 * @author Liang <liang@maichong.it>
 */

'use strict';

import React from 'react';
import TextField from 'material-ui/lib/text-field';

class View extends React.Component{
  constructor(props){
    super(props);
    this.state={
      hintText:props.hintText || "",
      multiLine:props.multiLine || true,
      rows:props.rows || 1,
      rowsMax:props.rowsMax||4,
      value:props.value || "",
      disabled:props.disabled || false,
      fullWidth:props.fullWidth || false,
      onBlur:props.onBlur,
      onChange:props.onChange,
      onEnterKeyDown:props.onEnterKeyDown
    };
  }
  _onBlurHandle(event){
    if(typeof this.state.onBlur == "function"){
      this.state.onBlur(event);
    }
  }
  _onChangeHandle(event){
    this.setState({value:event.target.value});
    if(typeof this.state.onChange == "function"){
      this.state.onChange(event);
    }
  }
  _onEnterKeyDownHandel(event) {
    if(typeof this.state.onEnterKeyDown == "function"){
      this.state.onEnterKeyDown(event);
    }
  }
  render(){
    return <MyText
      hintText={this.state.hintText}
      multiLine={this.state.multiLine}
      rows={this.state.rows}
      rowsMax={this.state.rowsMax}
      value={this.state.value}
      disabled={this.state.disabled}
      fullWidth={this.state.fullWidth}
      onBlur={this._onBlurHandle.bind(this)}
      onChange={this._onChangeHandle.bind(this)}
      onEnterKeyDown={this._onEnterKeyDownHandel.bind(this)}
    />
  }
}
export default View;
