import React, { useState } from 'react';
import './ShoppingCartPage.css'; 

const ShoppingCartPage = () => {
  
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Aloe Vera',
      price: 15,
      quantity: 2,
      image: 'aloe-vera.jpg',
    },
    {
      id: 2,
      name: 'Lavender',
      price: 10,
      quantity: 1,
      image: 'lavender.jpg',
    },
  ]);

  const handleIncreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart-page">
      <h1>Your Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h2>{item.name}</h2>
              <p>${item.price} each</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
              <div className="cart-item-quantity">
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </div>
              <button onClick={() => handleRemoveItem(item.id)} className="remove-button">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total Cost: ${totalCost}</h2>
        <button className="checkout-button">Checkout</button>
        <button className="continue-shopping-button">Continue Shopping</button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
