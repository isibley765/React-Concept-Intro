import React, { Component } from 'react';
import styles from "./Card.css";


export default class Card extends Component {

  constructor(props) {
    super(props);
    
  }

  /*
    Dynamic rendering function; returns html to the render function to put in its place
    You can also do this in-line within the return () body; can you find an example below?
*/
  makeTitle(here) {
      if(here === true) {
          return (
              <div className={styles.fitTitle}>
                <h1 className={styles.title}>{this.props.title}</h1>
                <hr className={styles.squashed}/>
              </div>  
          )
      } else {
          return null;
      }
  }

  render() {            // Can you find where the child component is placed inside of this Card component?
      return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={this.props.title!=undefined?styles.mainContainerBot:styles.mainContainerAll}>
                    {this.makeTitle(this.props.title != undefined)}

                    {this.props.show &&
                    <p>I'm showing! You've freed me!</p>}

                    <div className={styles.inner}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        </div>
      )
  }
}