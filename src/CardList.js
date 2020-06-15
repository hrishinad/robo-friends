import React, { Fragment } from 'react';
import Card from './Card';
import Faker from 'faker';

const CardList = () => {
    const cardArray = [];
    for (let i = 0; i < 10; i++) {
        const newId = Faker.random.uuid();
        cardArray.push(<Card 
            key={newId} 
            id={newId} 
            fname={Faker.name.firstName()} 
            lname={Faker.name.lastName()} 
            adjective={Faker.hacker.adjective()} 
            domain={Faker.internet.domainSuffix()}
        />);
    };
    return (
        <Fragment>
            {cardArray}
        </Fragment>
    );
};

export default CardList;