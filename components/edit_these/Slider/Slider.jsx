import React, { Component } from 'react';
import styles from "./Slider.css";


export default class Slider extends Component {

/*
  This component uses two values:
    props.val         A number between 0 and 100
    props.rend        A render function that accepts the slider's value, 0-100
*/
  constructor(props) {
    super(props);
    
    this.onChangeVal = this.onChangeVal.bind(this);
  }

  onChangeVal(e) {
    if(this.props.rend) {
      this.props.rend(e.target.value);
      //console.log(this.state.val);
    }
  }

  render() {
    return (
      <input type="range" min={0} max={100} value={this.props.val || 0} onChange={this.onChangeVal} />
    );
  }

  componentDidMount() {}

}