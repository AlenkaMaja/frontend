import React from "react";
import { Link } from "react-router-dom";
import './Shop.css';

const CheckoutPage = () => {

    return (
        <div class="checkoutPage-card">
           <div className="container">
            <div className="row">
                <div className="col-md-6 me-0 mt-5 pt-2">
                    <img src="/ASA/img/ship-boat-svgrepo-com.svg" height={200} width={200} alt="boat-order"/>
                </div>
                <div className="col-md-6 pt-2 mt-5 mb-5">
                    <h3><span>Booking successful</span></h3>
                    <h1><strong>Thank you for your reservation!</strong></h1>
                    <h4>Your reservation number is:#123456</h4>
                    <p>You can check it and add all necessary travel documents, as well make an order of optional services or additional watersport equipment in "My Booking" section</p>
                    <Link to="/My booking" class="btn btn-outline-dark btn-lg ms-5 mt-3">My booking</Link>
                </div>
            </div>
           </div> 
        </div> 
    );
}
export default CheckoutPage;