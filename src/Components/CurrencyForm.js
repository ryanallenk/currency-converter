import React, { useState } from "react"

export default function CurrencyForm () {
  const [amount, setAmount] = useState(0);

  const update = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  }
  return (
    <div className="input-form" >
      <form className="input-amount-form">
        <input className="input-amount" type="integer" value={amount} onChange={update}></input>
        <select className="currency-select"></select>
      </form>
    </div>
  );

}