import React, { useEffect, useState }  from "react";

const Exchange = () => {
const [currencyRates, setCurrencyRates] = useState({});
const [amount, setAmount] = useState(1);
const [currency, setCurrency] = useState("EUR");
    
useEffect(() => {
  fetch(`https://api.frankfurter.dev/v1/latest?base=${currency}`)
  .then((response) => response.json())
  .then((data) => {
    console.log("Fetched data:", data);
    setCurrencyRates(data);
  })
  .catch((error) => console.error("Error fetching data:", error));
}, [currency]);
           
 if (!currencyRates.rates) return <p>Loading...</p>;

 const rates = currencyRates.rates;

  return ( 
   <div className="container blog">
    <h1>Exchange Rates</h1>  
      <div>
        <select
        name="currency"
        id="currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}>  
        {Object.keys(rates).map((currencyKey) => ( 
          <option key={currencyKey} value={currencyKey}>
            {currencyKey}
          </option>
        ))}
      </select>
        <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)}/>

        {Object.keys(currencyRates.rates).map((currency) => (
          <p key={currency}> 
          <strong>{currency}:</strong> 
          {currencyRates.rates[currency] * amount}
          </p>
        ))}
      </div>
  </div>
);
};

export default Exchange; 


