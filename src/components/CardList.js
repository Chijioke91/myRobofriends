import React from 'react';
import Card from './Cards';

const CardList = ({ robots }) =>
  robots.map(robot => <Card key={robot.id} robot={robot} />);

export default CardList;
