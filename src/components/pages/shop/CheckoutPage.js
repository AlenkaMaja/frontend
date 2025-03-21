import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QRCode from "./QRCode";
import "./Shop.css";

const CheckoutPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(localCart);
  }, []);

  const totalPrice = () => {
    return cart
      .reduce((total, item) => total + (item.price * item.quantity), 0)
      .toFixed(2);
  };

  return (
    <>
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <h2>Checkout form</h2>
        </div>
        <div className="row g-5">
          {/* Cart Summary */}
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">{cart.length}</span>
            </h4>
            <ul className="list-group mb-3">
              {cart.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">{item.title}</h6>
                    <small className="text-muted">Qty: {item.quantity}</small>
                  </div>
                  <span className="text-muted">{(item.price * item.quantity).toFixed(2)} EUR</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total</span>
                <strong>{totalPrice()} EUR</strong>
              </li>
            </ul>
            <form className="card p-2">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Promo code" />
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </form>
          </div>
          
          <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" noValidate="">
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder=""
                defaultValue=""
                required=""
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder=""
                defaultValue=""
                required=""
              />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  required=""
                />
                <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label">
                Email <span className="text-muted">(Optional)</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="1234 Main St"
                required=""
              />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="address2" className="form-label">
                Address 2 <span className="text-muted">(Optional)</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="address2"
                placeholder="Apartment or suite"
              />
            </div>
            <div className="col-md-5">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="City Name"
                required=""
              />
              
              
            </div>
            <div className="col-md-4">
              <label htmlFor="state" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                id="country"
                placeholder="Country Name"
                required=""
              />
              
              
            </div>
            <div className="col-md-3">
              <label htmlFor="zip" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="zip"
                placeholder=""
                required=""
              />
              <div className="invalid-feedback">Zip code required.</div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="same-address"
            />
            <label className="form-check-label" htmlFor="same-address">
              Shipping address is the same as my billing address
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="save-info"
            />
            <label className="form-check-label" htmlFor="save-info">
              Save this information for next time
            </label>
          </div>
          <hr className="my-4" />
          <h4 className="mb-3">Payment</h4>
          <div className="my-3">
            <div className="form-check">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                className="form-check-input"
                defaultChecked=""
                required=""
              />
              <label className="form-check-label" htmlFor="credit">
                Credit card
              </label>
            </div>
            <div className="form-check">
              <input
                id="debit"
                name="paymentMethod"
                type="radio"
                className="form-check-input"
                required=""
              />
              <label className="form-check-label" htmlFor="debit">
                Debit card
              </label>
            </div>
            <div className="form-check">
              <input
                id="paypal"
                name="paymentMethod"
                type="radio"
                className="form-check-input"
                required=""
              />
              <label className="form-check-label" htmlFor="paypal">
                PayPal
              </label>
            </div>
          </div>
          <div className="row gy-3">
            <div className="col-md-6">
              <label htmlFor="cc-name" className="form-label">
                Name on card
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-name"
                placeholder=""
                required=""
              />
              <small className="text-muted">
                Full name as displayed on card
              </small>
              <div className="invalid-feedback">Name on card is required</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="cc-number" className="form-label">
                Credit card number
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-number"
                placeholder=""
                required=""
              />
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="cc-expiration" className="form-label">
                Expiration
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-expiration"
                placeholder=""
                required=""
              />
              <div className="invalid-feedback">Expiration date required</div>
            </div>
            <div className="col-md-3">
              <label htmlFor="cc-cvv" className="form-label">
                CVV
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-cvv"
                placeholder=""
                required=""
              />
              <div className="invalid-feedback">Security code required</div>
            </div>
          </div>  
        </form>
        <Link to="/payment" className="btn btn-success mt-3">Proceed to Payment</Link>
           
          </div>
        </div>
      </main>
    </div>

        <div class="checkoutPage-card">
           <div className="container">
            <div className="row">
                <div className="col-md-4 me-0 mt-5 pt-2">
                    <img src="/ASA/img/ship-boat-svgrepo-com.svg" height={200} width={200} alt="boat-order"/>
                </div>
                <div className="col-md-8 pt-2 mt-5 mb-5">
                    <h3><span>Booking successful</span></h3>
                    <h1><strong>Thank you for your reservation!</strong></h1>
                    <h4>Your reservation number is:#123456</h4>
                    <p>You can check it and add all necessary travel documents, as well make an order of optional services or additional watersport equipment in "My Booking" section</p>
                    <Link to="/My booking" class="btn btn-outline-dark btn-lg ms-5 mt-3">My booking</Link>
                </div>
            </div>
           </div> 
        </div> 
    </>
    );
}
export default CheckoutPage; 