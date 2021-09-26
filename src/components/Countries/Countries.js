import React, { useEffect, useState } from 'react';
import country from "../../data/countries.json"
import Card from '../Card/Card';
import CountryDetails from '../CountryDetails/CountryDetails';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] =useState([]);
    const[card, setCard] = useState([]);
    useEffect(() => {
        setCountries(country)
    },[]);
    const cardHandler = (singleCountry) => {
        const totalcountry  = [...card, singleCountry ];
        setCard(totalcountry);
    }
    console.log(card);
    return (
        <div className="countries">
            <div className="row ">
            <div className="row col-md-8 row-cols-1 row-cols-md-3 g-4 ">
                {
                    countries.map((singleCountry) => (
                        <CountryDetails key={singleCountry.id}
                         singleCountry={singleCountry} 
                         cardHandler ={cardHandler}
                         >
                        </CountryDetails>
                    ))
                }
            </div>
            <div className="col-md-4 card-body">
                <h1>Total</h1>
                <Card card ={card}></Card>
            </div>
            </div>
            

        </div>
    );
};

export default Countries;