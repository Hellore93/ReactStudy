import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
class Column extends React.Component {
    static propTypes = {
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      cards: PropTypes.array,
      addCards: PropTypes.func,
    }
    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }
    render(){
      const {title, icon, cards, addCards} = this.props;
      return(
        <section className = {styles.component}>
          <h3 className={styles.title}>
            <span>
              <Icon name={icon}/>
            </span>
            {title}
          </h3>
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={addCards}/>
          </div>
          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      );
    }
}

export default Column;