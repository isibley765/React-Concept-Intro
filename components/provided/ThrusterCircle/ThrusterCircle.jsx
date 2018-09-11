import React, { Component } from 'react';


export default class ThrusterCircle extends Component {

  constructor(props) {
    super(props);
    this.state = {off: 0+(props.disable)};

    this.onClick = this.onClick.bind(this);
    //console.log(props.disable);
  }

  onClick(e) {
      this.setState(() => {
          return {off: (1-this.state.off)}
      }, () => {
        this.props.rend(this.state.off, this.props.indx);
        //console.log(this.state.off);
      });
  }

  /*
    This bit gets complicated, a very involved open source CSS class set was
    adopted to make the circle bars work. Little bit steep for today's intro,
    feel free to just call it black magic for now
*/
  render() {
    return (
        <div className={this.props.className}>
            <div className={this.state.off===0?("c100 "+"p"+this.props.val+" select thruster-off "+ //thrusters
                (this.props.val > 70? 'thruster-red' : this.props.val > 55? 'thruster-orange' : 'thruster-green')):
                "c100 "+"p"+this.props.val+" thruster-off thruster-grey"} onClick={this.onClick}>
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
