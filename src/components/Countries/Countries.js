import React, { useEffect, useState } from 'react';
import country from "../../data/countries.json"
import CountryDetails from '../CountryDetails/CountryDetails';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] =useState([]);
    useEffect(() => {
        setCountries(country)
    },[]);
    console.log(countries);
    return (
        <div className="countries">
            <div className="row ">
            <div className="row col-md-8 row-cols-1 row-cols-md-3 g-4 ">
                {
                    countries.map((singleCountry) => (
                        <CountryDetails key={singleCountry.id} singleCountry={singleCountry}>
                        </CountryDetails>
                    ))
                }
            </div>
            <div className="col-md-4">
                <h1>Count</h1>
            </div>
            </div>
            

        </div>
    );
};

export default Countries;