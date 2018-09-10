import React, { Component } from 'react';
import ThrusterCircle from '../ThrusterCircle/ThrusterCircle.jsx';
import ToolCircle from '../ToolCircle/ToolCircle.jsx';
import styles from "./ThrusterInfo.css";


export default class ThrusterInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {'disabled': null};
    this.state.disabled = props.disabled;


    this.rendDisabled = this.rendDisabled.bind(this);
    this.rendFirstFour = this.rendFirstFour.bind(this);
  }

  rendDisabled(val, indx) {       // Disables the thruster that was just clicked on
    let discpy = this.state.disabled;
    discpy[indx] = val;
    this.setState({
      disabled: discpy
    }, function() {
      this.props.rend(this.state.disabled);
    });
  }

  rendFirstFour() { // Dynamic rendering of 4 of the thrusters; the cleaner method than typing them all out like below
    return ["topLeft", "topRight", "bottomLeft", "bottomRight"].map((val, i) => {
      return (
        <ThrusterCircle key={val+i} className={styles[val]} indx={i} rend={this.rendDisabled} val={Math.round(this.props.thrusters[i]*100)} disable={this.state.disabled[i]}/>
      );
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.horizontal}>
          {this.rendFirstFour()}
        </div>
        <div className={styles.vertical}>
          <ThrusterCircle className={styles.topLeft} indx={4} rend={this.rendDisabled} val={Math.round(this.props.thrusters[4]*100)} disable={this.state.disabled[4]}/>
          <ThrusterCircle className={styles.topRight} indx={5} rend={this.rendDisabled} val={Math.round(this.props.thrusters[5]*100)} disable={this.state.disabled[5]}/>
          <ThrusterCircle className={styles.bottomLeft} indx={6} rend={this.rendDisabled} val={Math.round(this.props.thrusters[6]*100)} disable={this.state.disabled[6]}/>
          <ThrusterCircle className={styles.bottomRight} indx={7} rend={this.rendDisabled} val={Math.round(this.props.thrusters[7]*100)} disable={this.state.disabled[7]}/>
        </div>
      </div>
    );
  }
}
