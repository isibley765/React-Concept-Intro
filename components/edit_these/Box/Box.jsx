import React, { Component } from 'react';
import styles from "./Box.css";


export default class Box extends Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    var weight = 2.86*this.props.weight;

    return (
      <div className={styles.container} >
        <div className={styles.theBox} style={{
            backgroundColor: this.props.color,
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