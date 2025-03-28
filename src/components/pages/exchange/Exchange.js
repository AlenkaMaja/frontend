import React, { useEffect, useState }  from "react";
import "./Exchange.css"

const Exchange = () => {
  const [exchangeRates, setExchangeRates] = useState({ rates: {} });
  const [currencies, setCurrencies] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
      fetch('https://api.frankfurter.app/latest')
          .then(response => response.json())
          .then(data => setExchangeRates(data));
  }, []);

  useEffect(() => {
      fetch("https://api.frankfurter.app/currencies")
          .then(response => response.json())
          .then(data => setCurrencies(data));
  }, []);

  const convertCurrency = () => {
      if (fromCurrency === "EUR") {
          setConvertedAmount((amount * exchangeRates.rates[toCurrency]).toFixed(2));
      } else if (toCurrency === "EUR") {
          setConvertedAmount((amount / exchangeRates.rates[fromCurrency]).toFixed(2));
      } else {
          const amountInEur = amount / exchangeRates.rates[fromCurrency];
          setConvertedAmount((amountInEur * exchangeRates.rates[toCurrency]).toFixed(2));
      }
  };

  return (
      <div className="container exchange">
        <div className="col-md-12 ms-5 mt-3 mb-3">
          <h1>Exchange</h1>
          
    
            <div className="row mt-3 mb-5">
                <div className="col-md-3">
                <img src="/ASA/img/exchange-euro-rounded.svg" height={200} width={200} alt="exchange icon"/> 
                </div>
                <div className="col-md-9">    
                <h2>Convert charter fee to your own currency</h2>
                </div> 
            </div>
         
          <p>You want to know how much the charter fee, which is charged in Euro currency, is in your domestic currency?
            Just put the amount of your charter fee, select your own currency and click on the button convert!
          </p>
          </div>
          <label>
              Amount:
              <input 
                  type="number" 
                  value={amount} 
                  onChange={(e) => setAmount(e.target.value)} 
              />
          </label> 
          <div className="container">
          <p>
              <label>
                  From:
                  <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                      {Object.keys(currencies).map(currency => (
                          <option key={currency} value={currency}>{currency} - {currencies[currency]}</option>
                      ))}
                  </select>
              </label>
          
              <label>
                  To:
                  <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                      {Object.keys(currencies).map(currency => (
                          <option key={currency} value={currency}>{currency} - {currencies[currency]}</option>
                      ))}
                  </select>
              </label>
                <div className="exchange-btn-right">     
              <button onClick={convertCurrency}>Convert</button> 
         
              {convertedAmount !== null && (
                  <h2>{amount} {fromCurrency} = {convertedAmount} {toCurrency}</h2>
              )}
              </div>
          </p> 
        </div>  
      </div> 
     
  );
};

export default Exchange;
