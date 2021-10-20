import React from 'react';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero';
import { faqData } from '../../data/dataStore';

class Faq extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
  }

  render(){
    return (
      <Container>
        <Hero titleText={faqData.title} image={faqData.image} />
        <p>{ faqData.description }</p>
      </Container>
    );
  }
}

export default Faq;