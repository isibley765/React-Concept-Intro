import React from 'react';  // We are using React, pulling the library in is important
import {render} from 'react-dom'; // This is the method to render the content on the page

import Card from './components/provided/Card/Card.jsx';  // User-defined template, just gives a nice outline to data items
import CamView from './components/provided/CamView/CamView.jsx'  // Our camera component, should integrate with the webcam
import Titlebar from './components/provided/Titlebar/Titlebar.jsx';  // Titlebar... should be fairly obvious
import ThrusterInfo from './components/provided/ThrusterInfo/ThrusterInfo.jsx';  // Our initial starting component for the students to witness

import ListValues from './components/edit_these/ListValues/ListValues.jsx';

class App extends React.Component { // This takes the React Component class, and lets us build on top of it
  /*
    All classes have constructors/initialization functions
    These set class-specific variables, and can access the class functions defined below it
    if so desired

    props is the variable that holds an object passed to it by the parent component
    For example with syntax: The ThrusterInfo component below is passed an object 
    like:
        { thrusters: [...], disabled: [...], rend: <function address location> }

      NOTE: you can change this.state, but you SHOULDN'T attempt to change props, unless you want
      to be debugging your code for the next 12 hours
  */
  constructor(props) {
    super(props);   // This always goes as the first thing in any constructor call in any class

    this.state = {    // The ONLY PLACE you should directly write values to this.state
        thrusters: [.0, .0, .0, .0, .0, .0, .0, .0],
        disabled_thrusters: [false, false, false, false, false, false, false, false],
        box: {
          color: "grey",
          weight: 10
        }
    }

    /*
      Keeps the 'this' pointer of the function changeDisabled to the 'this'
      pointer of the class, so we can access this.state, i.e. App.state,
      without losing reference to the class
    */
    this.changeDisabled = this.changeDisabled.bind(this);
    this.slideRender = this.slideRender.bind(this);
    this.listRender = this.listRender.bind(this);
  }

  /*
      Every class in React needs 2 things: a constructor function, and a render function
      The render function is called every time that the component realizes data passed to it has changed
      (so if we changed this.state.disabled_thrusters[2] to true, the ThrusterInfo component would update)

      ALL RENDER FUNCTIONS need an outer tag of some kind, that enclose the rest of the tags in the return () call
  */
  render () {
    return (
      <div className="main">
          <div className="titlebar">
          <Titlebar/>
          </div>
          <div className="main-container">
              <div className="camera-width full-height center">
                <CamView></CamView>
              </div>
              <div className="data-width full-height">
                  <div className="data-column">
                    <Card>
                      <ThrusterInfo
                        thrusters={this.state.thrusters}
                        disabled={this.state.disabled_thrusters}
                        rend={this.changeDisabled}
                      />
                    </Card>
                    <Card>
                      <ListValues
                        rend={this.listRender}
                        slideRend={this.slideRender}
                        slide={this.state.box.weight}
                      />
                    </Card>
                  </div>
              </div>
          </div>
      </div>
    );
  }

  componentDidMount() {   // When this successfully "mounts" onto the page, run the following function
    var that = this;
    window.react = this;

    setInterval(() => {   // All this does is show the UI changes when the values of this.state are changed
      var thrustNew = this.state.thrusters;

      for(var i = 0; i < thrustNew.length; i++) {
          if (this.state.disabled_thrusters[i]) {   // Pretending a thruster is actually "disabled"
              thrustNew[i] = 0;
          } else {                                  // Normal value change upon thruster disabled being false
              thrustNew[i] = Math.random();
          }
      }

      /*
        A special method to change this.state; allows React to look at the "before and after" of the object
        and decide what will change on the page, so it can target just those items, rather than rerender
        the whole page at once. That's much more expensive, and slower by far -- hence, we like React
      */
      this.setState({
        thrusters: thrustNew
      })
    }, 3000);
    
  }

  /*
    User defined function to update the this.state value of thrusters
    Pass the name of this function to a child component to let the child
    edit the state values of the parent
  */
  changeDisabled(dis) {
    this.setState({
      thrusters: dis
    });
  }

  listRender(listing) {
    var boxCopy = this.state.box;
    boxCopy.color = listing;

    this.setState({
      box: boxCopy
    });
  }

  slideRender(val) {
    var boxCopy = this.state.box;
    boxCopy.weight = val;

    this.setState({
      box: boxCopy
    });
  }

}


/*
    This renders the App class in React onto the html
    element in main.html that has an id of 'app'
*/
render(<App/>, document.getElementById('app'));
