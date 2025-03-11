import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Countries.css'
const Countries = () => { 
    const[countries, setCountries] = useState ([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json ())
        .then((data) => setCountries(data))
    }, []);

    return (
    <>
       <div className="countries-container">
        {countries.map((country) => (
        <p key={country.cca3}>
            <Link to={"/countries/" + country.cca3}>
             {country.name.common}
            </Link>
        </p>
        ))}
       </div>
    </>
    );
};

export default Countries;