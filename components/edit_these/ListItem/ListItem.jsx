import React, { Component } from 'react';
import styles from "./ListItem.css";


export default class ListItem extends Component {

  constructor(props) {
    super(props);
    
    this.chooseColor = this.chooseColor.bind(this);
  }

  chooseColor() {
    this.props.rend(this.props.listing);
  }

  render() {
    return (
      <li className={styles.item} onClick={this.chooseColor}>{this.props.listing}</li>
    );
  }

  componentDidMount() {}

}