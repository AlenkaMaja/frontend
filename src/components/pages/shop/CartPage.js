import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Shop.css';

const CartPage = () => {

    const [cart, setCart] = useState([]);
    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(localCart);
    }, []);

    const totalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    }

    const removeItem = (id) => {
        
        const updatedCart = cart.filter((item)=> item.id !== id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    }


    return (

<>
    <div className="cart container">
        <div className="page-header">
            <div className="py-5 text-center container">
                <img className="d-block mx-auto mb-4" src="/ASA/img/shopping-cart-svgrepo-com.svg" alt="shopping-cart" width="72" height="57"/>
                <div className="row">
                    <h2 className="col-md-8 m-auto">Cart</h2>
                    <p className="lead col-md-8 m-auto">Below are all the products you have selected on the Shop page. You can remove them and return to the store for other items before you proceed to checkout where you need to fill out the checkout form and proceed to payment.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="container py-5">
    
        <table className="carttable table-hover" style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
        <thead>
         <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Single price</th>
            <th>Total price</th>
            <th>Remove</th>
         </tr>
        </thead>
        <tbody>  
            {cart.map((item) => (
            <tr key={item.id}>
                <td><img src={item.thumbnail} alt={item.title} width="44" /></td>
                <td><strong>{item.title}</strong></td>
                <td><span>{item.quantity}</span></td>
                <td><span>{item.price} EUR</span></td>
                <td><span>{item.price * item.quantity} EUR</span></td>
                <td><button onClick={()=> removeItem(item.id)}>X</button></td>
            </tr>
        ))}
        </tbody>
        <tfoot>
            <tr>
            <td colspan="5"><h4>Total price: </h4></td>
            <td><span>{totalPrice()} EUR</span></td>
            </tr>
        </tfoot> 
       </table>
       <Link to="/checkout" className="btn btn-outline-secondary">Checkout</Link>
    </div>
      
       
</> 
);
}
export default CartPage;