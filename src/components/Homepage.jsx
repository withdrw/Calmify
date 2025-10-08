import React, { useState, useRef } from 'react';
import './Homepage.css';

const Homepage = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const allProductsRef = useRef(null);

  const bestSellingProducts = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 129.99,
      rating: '★★★★★',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.'
    }
  ];

  const allProducts = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 129.99,
      rating: '★★★★★',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      rating: '★☆☆☆☆',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 79.99,
      rating: '★★★★',
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Running Shoes',
      price: 89.99,
      rating: '★★☆',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      name: 'Laptop Backpack',
      price: 49.99,
      rating: '★★★',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      name: 'Wireless Mouse',
      price: 29.99,
      rating: '★★☆',
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const scrollToProduct = (index) => {
    setCurrentProductIndex(index);
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const productWidth = scrollContainer.offsetWidth;
      scrollContainer.scrollTo({
        left: index * productWidth,
        behavior: 'smooth'
      });
    }
  };

  const nextProduct = () => {
    const nextIndex = (currentProductIndex + 1) % allProducts.length;
    scrollToProduct(nextIndex);
  };

  const prevProduct = () => {
    const prevIndex = (currentProductIndex - 1 + allProducts.length) % allProducts.length;
    scrollToProduct(prevIndex);
  };

  const scrollToAllProducts = () => {
    if (allProductsRef.current) {
      allProductsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homepage">
      <section className="best-sellers-fullpage">
        <div className="container">
          <div className="best-seller-content">
            <div className="best-seller-info">
              <h1>Best Seller</h1>
              <h2>{bestSellingProducts[0].name}</h2>
              <div className="product-rating">{bestSellingProducts[0].rating}</div>
              <div className="product-price">${bestSellingProducts[0].price}</div>
              <p className="product-description">
                {bestSellingProducts[0].description}
              </p>
              <div className="button-group">
                <button className="add-to-cart-btn">Add to Cart</button>
                <button className="view-all-btn" onClick={scrollToAllProducts}>
                  View All Products
                </button>
              </div>
            </div>
            <div className="best-seller-image">
              <img src={bestSellingProducts[0].image} alt={bestSellingProducts[0].name} />
            </div>
          </div>
          <div className="scroll-indicator">
            <span>Scroll down to see all products</span>
            <div className="arrow">↓</div>
          </div>
        </div>
      </section>
      <section className="all-products-fullpage" ref={allProductsRef}>
        <div className="container">
          <div className="section-header">
            <h2>Our Products</h2>
            <p>Explore our complete collection</p>
          </div>

          <div className="products-carousel">
            <button className="carousel-btn carousel-prev" onClick={prevProduct}>
              ‹
            </button>
            
            <div className="products-scroll-container" ref={scrollContainerRef}>
              <div className="products-scroll">
                {allProducts.map((product, index) => (
                  <div 
                    key={product.id} 
                    className={`product-slide ${index === currentProductIndex ? 'active' : ''}`}
                  >
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <div className="product-rating">{product.rating}</div>
                      <div className="product-price">${product.price}</div>
                      <button className="view-options-btn">View Options</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="carousel-btn carousel-next" onClick={nextProduct}>
              ›
            </button>
          </div>
          <div className="product-indicators">
            {allProducts.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentProductIndex ? 'active' : ''}`}
                onClick={() => scrollToProduct(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;