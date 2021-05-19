import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    const cardsArray = robots.map(user => {
        return (
            <Card id={user.id} name={user.name} email={user.email} key={`robot${user.id}`} />
        );
    })

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
            {cardsArray}
        </div>
    );
};

export default CardList;