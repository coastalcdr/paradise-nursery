import React from 'react';
import './ShoppingCartPage.css';

const ShoppingCartPage = ({ cartItems, onRemoveFromCart, onClearCart }) => {
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert('Thank you for your purchase!');
    onClearCart(); // Clear the cart after checkout
  };

  return (
    <div className="shopping-cart-page">
      <h1>Your Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>${item.price} each</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => onRemoveFromCart(item.id)} className="remove-button">Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-summary">
        <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
        <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
        <a href="/products" className="button-link continue-shopping-button">Continue Shopping</a>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
