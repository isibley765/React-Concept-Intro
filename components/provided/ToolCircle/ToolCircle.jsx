import React, { Component } from 'react';


export default class ToolCircle extends Component {

  constructor(props) {
    super(props);
    this.state = {off: 0+(props.disable)};

    this.onClick = this.onClick.bind(this);
    //console.log(props.disable);
  }

  onClick(e) {
      this.setState(function(state, props) {
          return {off: (1-state.off)}
      }, function() {
        this.props.rend(this.state.off, this.props.indx);
        //console.log(this.state.off);
      });
  }
  
/*
    This should look very familiar to ThrusterCircle, just simplified a bit.
    Please feel free to also call this black magiC as well.
    Uses the same props parameters as ThrusterCircle, feel free to use this.
*/
  render() {
    return (
        <div className={this.props.className}>
            <div className={"c100 "+"p"+this.props.val+" select thruster-off "+ //tools
                (this.props.val > 0? 'thruster-green' : this.props.val < 0? 'thruster-red' : 'thruster-grey') }>
                <span>{Math.round(this.props.val)}%</span>
                <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                </div>
            </div>
        </div>
    );
  }

}
