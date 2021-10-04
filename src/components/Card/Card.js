import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
    static propTypes = {
      title: PropTypes.node,
    }
    render(){
      return(
        <main className = {styles.Component}>
          <h3 className = {styles.title}>
            {this.props.title}
          </h3>
        </main>
      );
    }
}

export default Card;