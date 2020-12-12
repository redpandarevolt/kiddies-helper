import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img alt="minions" src={`https://robohash.org/${props.minions.id}?set=set2&size=180x180`} />
        <h2>{ props.minions.name}</h2>
        <p> { props.minions.email}  </p>
        <p> {props.minions.address['zipcode']}</p>
    </div>
);