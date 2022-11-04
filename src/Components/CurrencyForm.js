import React, { useState } from "react"

export default function CurrencyForm () {
  const [amount, setAmount] = useState(0);

  const handleUpdate = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
  };

  

  return (
    <div className="input-form" >
      <form className="input-amount-form" onSubmit={handleSubmit}>
        <input className="input-amount" type="integer" value={amount} onChange={handleUpdate} ></input>
        <select className="currency-select"></select>
        <p>Amount in USD: {amount} </p>
      </form>
    </div>
  );

}