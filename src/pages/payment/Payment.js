import React, { useState } from 'react'

import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";



const Payment = () => {
    const [ name , setName ] = useState('')
    const [ cvc , setcvc ] = useState('')
    const [ expiry , setexpiry ] = useState('')
    const [number, setnumber] = useState('')
    const [focus, setfocus] = useState("");
    return (
      <div className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-n3 mb-5 ">
              {" "}
              <Cards
                cvc={cvc}
                expiry={expiry}
                focused={focus}
                name={name}
                number={number}
              />
            </div>
            <div className="col-md-8">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="number">Card Number</label>
                    <input
                      type="number"
                      className="form-control"
                      name="number"
                      placeholder="Card Number"
                      value={number}
                      onChange={(e) => setnumber(e.target.value)}
                      onFocus={(e) => setfocus(e.target.name)}
                      min="1"
                      max="16"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="expiry">Expiry Date</label>
                    <input
                      type="number"
                      className="form-control"
                      name="expiry"
                      placeholder="MM/YY Expiry"
                      value={expiry}
                      onChange={(e) => setexpiry(e.target.value)}
                      onFocus={(e) => setfocus(e.target.name)}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-8">
                    <label htmlFor="name">Name On Card</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter the name on card"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      onFocus={(e) => setfocus(e.target.name)}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="cvc">CVV Code</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="cvc"
                      placeholder="Enter CVV code"
                      onChange={(e) => setcvc(e.target.value)}
                      value={cvc}
                      onFocus={(e) => setfocus(e.target.name)}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary col-12">
                  Check Out
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Payment
