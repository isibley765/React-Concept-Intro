import React, { Component } from 'react';
import styles from "./Box.css";


export default class Box extends Component {


/*
  This component accepts 2 parameters
  props.color               The color for the box to display
  props.weight              A 0-100 number value, used to scale the size of this box
*/
  constructor(props) {
    super(props);
    
  }

  render() {
    var weight = this.props.weight == undefined ? 50 : 2.86*this.props.weight;    // If no weight is passed, this value will use 50

    return (
      <div className={styles.container} >
        <div style={{
            backgroundColor: this.props.color || "grey",
            width: weight,
            height: weight,
            margin: (286-weight)/2
          }} >
        </div>
      </div>
    );
  }

  componentDidMount() {}

}