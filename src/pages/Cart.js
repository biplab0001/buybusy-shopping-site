import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate("/myorder");
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price * item.quantity}</p>
            <p>Quantity: {item.quantity}</p>
            <div className="cart-buttons">
              <button onClick={() => dispatch(increaseQuantity(item.id))}>
                +
              </button>
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                disabled={item.quantity <= 1}
              >
                -
              </button>
            </div>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <button className="purchase-button" onClick={handlePurchase}>
          Purchase
        </button>
      )}
    </div>
  );
};

export default Cart;
