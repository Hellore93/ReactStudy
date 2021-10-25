import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';

class SearchResults extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    cards: PropTypes.array,
  }
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  render(){
    const {title, icon, cards} = this.props;
    return(
      <section className = {styles.component}>
        <h3 className={styles.title}>
          <span>
            <Icon name={icon}/>
          </span>
          {title}
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResults;