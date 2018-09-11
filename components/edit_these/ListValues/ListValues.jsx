import React, { Component } from 'react';
import styles from "./ListValues.css";

import ListItem from "../ListItem/ListItem.jsx";
import Slider from "../Slider/Slider.jsx";


export default class ListValues extends Component {

/*
  This component takes 1 OR 3 properties, with an optional array
    props.rend        required      Renders value from the list locally, and then passes to the parent
    props.slide       optional      Required for slider render, number value between 0 and 100
    props.slideRend   optional      Connects slider value to the passed props.slide value
                                    If props.slideRend doesn't update parent props.slide, slider won't move

    props.list        optional      If you want to define your own list in index.jsx, pass it through this parameter
*/
  constructor(props) {
    super(props);
    // Ternary operators: (if statement == true) ? (return first item) : (else return second);
    this.state = {
        listings: props.list? props.list : [
          "red", "blue", "green", "purple", "black"
        ],
        choice: "Dropdown"
    }  // This saves a list passed from a parent if present, else it saves a preset default list

    this.renderChoice = this.renderChoice.bind(this);
    this.renderList = this.renderList.bind(this);
    this.toggleList = this.toggleList.bind(this);
    
  }

/*
  Keys are important for React for rendering, they're like a special ID
  A key allows React to remember which list elements were there before and which weren't

  So, if you insert a new element in the middle of the list, it knows just to insert a
  new element instead of re-rendering the whole list every time. Much faster
*/
  renderList() {
    return this.state.listings.map((val, i) => {
        return (
            <ListItem key={val+i} />
        )
    })
  }

  renderChoice(listing) {   // Intercept the update, change local state, and then propogate up to parent render
      this.setState({
        choice: listing
      })

      if(this.props.rend) {
        this.props.rend(listing);
      }
  }

  toggleList() {
      $("."+styles.ddlist).toggle();
  }

  render() {
    return (
      <div className={styles.ddwrap}>
        {this.props.slide && 
        <Slider />}
        <div className="dd-header">
          <button className={styles.dropclick} onClick={this.toggleList}>{this.state.choice}</button>
        </div>
        <ul className={styles.ddlist}>
          {this.renderList()}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    $("."+styles.ddlist).hide();
  }

}