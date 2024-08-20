import React from 'react';
import './ProductListingPage.css'; 

const ProductListingPage = () => {
  const products = [
    {
      id: 1,
      name: 'Aloe Vera',
      description: 'Aloe Vera is a medicinal plant.',
      price: 15,
      image: 'aloe-vera.jpg',
      category: 'Medicinal Plants'
    },
    {
      id: 2,
      name: 'Lavender',
      description: 'Lavender is an aromatic plant.',
      price: 10,
      image: 'lavender.jpg',
      category: 'Aromatic Plants'
    },
    // Add more plant objects here
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
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
