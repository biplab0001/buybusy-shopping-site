import React from "react";

const OrderItem = ({ item }) => {
  return (
    <div className="order-item">
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Quantity: {item.quantity}</p>
      <p>Total Price: ${item.price * item.quantity}</p>
    </div>
  );
};

export default OrderItem;
