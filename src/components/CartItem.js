import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Price: ${item.price * item.quantity}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
      <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
      <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
    </div>
  );
};

export default CartItem;