import React from 'react';
import Listing from './Listing';
import { Container } from './~reusables/atoms/Container';

const Listings = props => {
  return (
    <Container direction="column">
      {props.data.children.map((el, idx) => (
        <Listing key={idx} data={el.data} />
      ))}
    </Container>
  );
};

export default Listings;
