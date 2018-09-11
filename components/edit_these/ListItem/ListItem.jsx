import React, { Component } from 'react';
import styles from "./ListItem.css";


export default class ListItem extends Component {

/*
  This component accepts 2 parameters
  props.listing             The value to display and use for rendering
  props.rend                The render function to pass props.listing back up to if this component is selected
*/
  constructor(props) {
    super(props);
    
    this.chooseItem = this.chooseItem.bind(this);
  }

  // Not all components need to use this.setState()
  chooseItem() {
    this.props.rend(this.props.listing);
  }

  render() {
    return (
      <li className={styles.item} onClick={this.chooseItem}>{this.props.listing}</li>
    );
  }

  componentDidMount() {}

}