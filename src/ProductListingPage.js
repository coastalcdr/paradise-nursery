import React from 'react';
import './ProductListingPage.css'; 
import aloeVeraImage from './assets/images/aloe-vera.jpg';
import lavenderImage from './assets/images/lavender.jpg';

const ProductListingPage = ({ onAddToCart }) => {
  const products = [
    {
      id: 1,
      name: 'Aloe Vera',
      description: 'Aloe Vera is a medicinal plant.',
      price: 15,
      image: aloeVeraImage,
      category: 'Medicinal Plants'
    },
    {
      id: 2,
      name: 'Lavender',
      description: 'Lavender is an aromatic plant.',
      price: 10,
      image: lavenderImage,
      category: 'Aromatic Plants'
    },
  ];

  return (
    <div className="product-listing-page">
      <h1>Our Plants</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
