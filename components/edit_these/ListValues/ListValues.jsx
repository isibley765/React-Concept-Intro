import React, { Component } from 'react';
import styles from "./ListValues.css";

import ListItem from "../ListItem/ListItem.jsx";


export default class ListValues extends Component {


  // Ternary operators: (if statement == true) ? (return first item) : (else return second);
  constructor(props) {
    super(props);
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
            <ListItem key={val+i} listing={val} rend={this.renderChoice}/>
        )
    })
  }

  renderChoice(listing) {   // Intercept the update, change local state, and then propogate up to parent render
      this.setState({
        choice: listing
      })

      this.props.rend(listing);
  }

  toggleList() {
      $("."+styles.ddlist).toggle();
  }

  render() {
    return (
      <div className={styles.ddwrap}>
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