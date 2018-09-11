import React, { Component } from 'react';
import styles from "./Slider.css";


export default class Slider extends Component {

  constructor(props) {
    super(props);
    
    this.onChangeVal = this.onChangeVal.bind(this);
  }

  onChangeVal(e) {
    this.props.rend(e.target.value);
    //console.log(this.state.val);
  }

  render() {
    return (
      <input type="range" min={0} max={100} value={this.props.val} onChange={this.onChangeVal} />
    );
  }

  componentDidMount() {}

}