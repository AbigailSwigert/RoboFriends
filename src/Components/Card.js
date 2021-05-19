import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-3' style={{ height: '350px', width: '250px' }}>
            <img src={`https://robohash.org/${id}?size=200x200`} alt='robots' />
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    );
};

export default Card;