import React from "react"

export default function InputForm () {

  return (
    <div className="input-form" >
      <form className="input-amount-form">
        <input className="input-amount" type="text"></input>
        <select className="currency-select"></select>
      </form>
    </div>
  )

}