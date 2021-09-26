import React from 'react';
import './CountryDetails.css'

const CountryDetails = (props) => {
    const {Name, Capital, Region, Cases, Death, img } = props.singleCountry;
    return (
        <div class="col ">
        <div class="card h-100 card-info">
          <img src={img} class="card-img-top" alt="..."/>
          <div class="card-body ">
            <h2 class="card-title">{Name}</h2>
            <h4>{Capital}</h4>
            <h6>Region: {Region}</h6>
            <p>Cases: {Cases}</p>
            <p>Death: {Death}</p>
          </div>
        </div>
      </div>
    );
};

export default CountryDetails;