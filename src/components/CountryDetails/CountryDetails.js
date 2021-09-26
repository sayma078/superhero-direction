import React from 'react';
import './CountryDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'


const CountryDetails = (props) => {
    // console.log(props.singleCountry);
    const {name, Capital, Region, Cases, Death, img } = props.singleCountry;
    const cardHandler =props.cardHandler;
    return (
        <div className="col ">
        <div className="card h-100 card-info">
          <img src={img} className="card-img-top" alt="..."/>
          <div className="card-body ">
            <h2 className="card-title">{name}</h2>
            <h4>{Capital}</h4>
            <h6>Region: {Region}</h6>
            <p>Cases: {Cases}</p>
            <p>Death: {Death}</p>
            <br/>
            <button onClick={() => cardHandler(props.singleCountry)} className="btn bg-danger text-light button"><FontAwesomeIcon icon={faCheckCircle} /> Click</button>
          </div>
        </div>
      </div>
    );
};

export default CountryDetails;