import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faqData } from '../../data/dataStore';

class Faq extends React.Component {
  render() {
    return (
      <Container>
        <Hero titleText={faqData.title} image={faqData.image} />
        <p>{ faqData.description }</p>
      </Container>
    );
  }
}
export default Faq;