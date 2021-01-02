import React, { useState } from 'react'

import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import ModalComponent from '../../components/modal/Modal';



const Payment = () => {
    const [ name , setName ] = useState('')
    const [ cvc , setcvc ] = useState('')
    const [ expiry , setexpiry ] = useState('')
    const [number, setnumber] = useState('')
  const [focus, setfocus] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // closemodalBox
  const closedModal = () => setIsModalOpen(!isModalOpen);

  // handling form submission
 const handleSubmit = e => {
    e.preventDefault()
  
    setIsModalOpen(!isModalOpen);
  }
    return (
      <div className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 mt-n3 mb-5 ">
              {" "}
              <Cards
                cvc={cvc}
                expiry={expiry}
                focused={focus}
                name={name}
                number={number}
              />
            </div>
            <div className="col-md-6 col-lg-8">
              <form>
                <h3>Payment Card Details</h3>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="number">Card Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="number"
                      placeholder="Card Number"
                      value={number}
                      onChange={(e) => setnumber(e.target.value)}
                      onFocus={(e) => setfocus(e.target.name)}
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
                <h3>Billing Address</h3>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="firstNAme">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstNAme"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="LatsName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="LatsName"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="Email">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="Email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="telephone">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="telephone"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress2">Address 2</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    {/* <select id="inputState" className="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select> */}
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  className="btn btn-primary col-12"
                >
                  Check Out
                </button>
              </form>
            </div>
            {/* modal */}
            <ModalComponent isModalOpen={isModalOpen} onCloseModal={closedModal}/>
          </div>
        </div>
      </div>
    );
}

export default Payment
