import React from 'react';
import styles from './titlebar.css';


//<img src={require('../assets/ieee.png')} />

class Titlebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: props.text? props.text : "Purdue ROV 2018"};
        /* saves either the value of props.text, or the default */

    }

    // Possibly our most straightforward component
    render() {
        return (
            <div className={styles.title}>
                {this.state.text}
            </div>
        )
    }
}

export default Titlebar