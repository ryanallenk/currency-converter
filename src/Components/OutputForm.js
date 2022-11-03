import React from "react"

export default function OutputForm () {

  return (
    <div className="output-form" >
      <form className="output-amount-form">
        <input className="output-amount" type="text"></input>
        <select className="currency-select"></select>
      </form>
    </div>
  )

}