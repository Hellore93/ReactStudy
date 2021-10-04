import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';

Column.propTypes = {
  icon: PropTypes.node,
};
class Column extends React.Component {
    static propTypes = {
      title: PropTypes.string.isRequired,
    }

    addCard(title){
      this.setState(state => (
        {
          cards: [
            ...state.cards,
            {
              key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
              title,
            },
          ],
        }
      ));
    }
    render(){
      return(
        <section className = {styles.component}>
          <h3 className={styles.title}>
            <span>
              <Icon name={this.props.icon}/>
            </span>
            {this.props.title}
          </h3>
          <div className={styles.creator}>
            <Card text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          </div>
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          </div>
        </section>
      );
    }
}

export default Column;