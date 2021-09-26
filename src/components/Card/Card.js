import React from 'react';
import './Card.css'

const Card = (props) => {
    const card = props.card;
    let totalDeath = 0;
    for(let i=0 ;i<card.length;i++){
        const country = card[i];
        console.log(country)
        const death = country.Death;
        totalDeath = totalDeath + death;
    }
    return (
        <div>
            <h3>Country select: {card.length}</h3>
            <h3>Total Death:{totalDeath} </h3>
            {
                card.map(country => <p>{country.name}</p>)
            }
        </div>
    );
};

export default Card;