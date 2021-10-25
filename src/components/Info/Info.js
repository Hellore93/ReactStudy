import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { infoData } from '../../data/dataStore';

class Info extends React.Component {
  render() {
    return (
      <Container>
        <Hero titleText={infoData.title} image={infoData.image} />
        <p>{ infoData.description }</p>
      </Container>
    );
  }
}
export default Info;