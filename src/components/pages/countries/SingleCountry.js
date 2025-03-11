import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const SingleCountry = () => { 
    
    const {name} = useParams();
    const { languages, flags, population } = SingleCountry;
    const [singleCountry,setSingleCountry] = useState(null);

    useEffect(
        () => {

            fetch("https://restcountries.com/v3.1/alpha/" + name)
            .then(response => response.json())
            .then(data => setSingleCountry(data))
        }, [name]
    );
    if(!singleCountry) return <p>Loading...</p>;
   

    return (
<>
<div className="single-country container">
    <div className="row">
        <div className="col-md-10 m-auto">
            <h2>Details for {name}</h2>
            <img src={flags[0]} alt={'${name.common} flag'} style={{width:'100px'}}/>
            <p><strong>Official Name:</strong> {name}</p>
        <p><strong>Languages:</strong> {languages}</p>
        <p><strong>Population:</strong> {population}</p>
        </div>
            
       {console.log(singleCountry)}
       </div>
    </div>

</>
   
    );
};

export default SingleCountry;