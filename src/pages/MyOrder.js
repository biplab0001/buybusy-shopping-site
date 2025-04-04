import React from "react";
import { useSelector } from "react-redux";
import "./MyOrder.css";

const MyOrder = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="myorder-container">
      <h1>My Orders</h1>
      {cartItems.length === 0 ? (
        <p>You have no past orders.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="order-item">
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Total Price: ${item.price * item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrder;