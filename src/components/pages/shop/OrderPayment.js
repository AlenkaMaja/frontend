import React, { useEffect, useState } from "react";
import QRCode from "./QRCode";
import { Link } from "react-router-dom";

const OrderPayment = () => {
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({});

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(localCart);

    const savedForm = JSON.parse(localStorage.getItem("paymentDetails")) || {};
    setForm(savedForm);
  }, []);

  const totalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Order Payment</h2>
      {cart.length > 0 ? (
        <>
          <h4>Total Amount: {totalPrice()} EUR</h4>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">{item.title}</h6>
                  <small className="text-muted">Quantity: {item.quantity}</small>
                </div>
                <span className="text-muted">{(item.price * item.quantity).toFixed(2)} EUR</span>
              </li>
            ))}
          </ul>

          <div className="qr-code-container">
            <QRCode form={form} />
          </div>
        </>
      ) : (
        <p className="text-danger text-center">No items in cart.</p>
      )}

      <Link to="/" className="btn btn-primary mt-4">Back to Home</Link>
    </div>
  );
};

export default OrderPayment;

