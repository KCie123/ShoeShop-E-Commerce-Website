import React, { useState, useEffect } from 'react';
import './App.css';
import { FaUser, FaShoppingCart, FaShoePrints } from 'react-icons/fa';

import runningShoes from './images/running_shoes.webp';
import casualSneakers from './images/sneakers.webp';
import dressShoes from './images/dress_shoes.webp';
import cozySlippers from './images/slippers.webp';
import hikingBoots from './images/hiking_boots.webp';

import logo1 from './images/logo1.webp';
import logo2 from './images/logo2.webp';
import logo3 from './images/logo3.webp';
import logo4 from './images/logo4.webp';

const Header = ({ cartItems, toggleCart, setCurrentPage }) => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <FaShoePrints className="text-2xl mr-2" />
          <h1 className="text-2xl font-bold">ShoeShop</h1>
        </div>
        <nav className="space-x-4">
          <a href="#" className="nav-link hover:font-bold" onClick={() => setCurrentPage('home')}>Home</a>
          <a href="#" className="nav-link hover:font-bold" onClick={() => setCurrentPage('shop')}>Shop</a>
          <a href="#" className="nav-link hover:font-bold" onClick={() => setCurrentPage('about')}>About</a>
          <a href="#" className="nav-link hover:font-bold" onClick={() => setCurrentPage('contact')}>Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleCart} className="relative icon-button">
            <FaShoppingCart />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItems.length}
              </span>
            )}
          </button>
          <button className="icon-button">
            <FaUser />
          </button>
        </div>
      </div>
    </header>
  );
};

const ProductCard = ({ product, addToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000);
  };

  return (
    <div className="bg-black rounded-lg shadow-md overflow-hidden product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="p-4">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <button onClick={handleAddToCart} className={`add-to-cart-btn w-full ${isAdded ? 'added' : ''}`}>
          {isAdded ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

const ProductGrid = ({ products, addToCart }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} addToCart={addToCart} />
    ))}
  </div>
);

const Cart = ({ cartItems, removeFromCart }) => (
  <div className="bg-black p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center mb-4 border-b pb-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
            <div className="flex-grow">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
          </div>
        ))}
        <div className="text-xl font-bold mt-4">
          Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
        </div>
      </div>
    )}
  </div>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 mt-auto">
    <p>&copy; 2023 ShoeShop. All rights reserved.</p>
  </footer>
);

const PopularShoes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const popularShoes = [
    { id: 1, name: "Running Shoes", price: 89.99, image: runningShoes, description: "Lightweight and comfortable" },
    { id: 2, name: "Casual Sneakers", price: 59.99, image: casualSneakers, description: "Stylish everyday wear" },
    { id: 3, name: "Dress Shoes", price: 129.99, image: dressShoes, description: "Elegant and formal" },
    { id: 4, name: "Cozy Slippers", price: 29.99, image: cozySlippers, description: "Warm and comfortable" },
    { id: 5, name: "Hiking Boots", price: 149.99, image: hikingBoots, description: "Durable and waterproof" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % popularShoes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + popularShoes.length) % popularShoes.length);
  };

  return (
    <div className="popular-shoes">
      <h2 className="popular-shoes-title">Popular Shoes</h2>
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {popularShoes.map((shoe) => (
            <div key={shoe.id} className="w-full flex-shrink-0 p-4">
              <div className="shoe-image-container">
                <img src={shoe.image} alt={shoe.name} className="shoe-image" />
              </div>
              <div className="shoe-info">
                <h3 className="shoe-name">{shoe.name}</h3>
                <p className="shoe-description">{shoe.description}</p>
                <p className="shoe-price">${shoe.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="slider-arrow left">←</button>
        <button onClick={nextSlide} className="slider-arrow right">→</button>
      </div>
    </div>
  );
};

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="container mx-auto px-4 py-8 relative overflow-hidden">
      {/* Existing content */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Step into Style</h1>
          <p className="text-xl mb-6 animate-fade-in animation-delay-300">Discover the perfect shoes for every occasion.</p>
          <button onClick={() => setCurrentPage('shop')} className="shop-now-button animate-bounce">Shop Now</button>
        </div>
        <div className="md:w-1/2">
          <img src={runningShoes} alt="Featured Shoe" className="w-full h-auto rounded-lg shadow-lg featured-image animate-float" />
        </div>
      </div>
      <div className="mb-12">
        <PopularShoes />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="feature-card bg-black p-6 rounded-lg shadow-md animate-slide-in-left">
          <h2 className="text-2xl font-semibold mb-4">Featured Collection</h2>
          <p className="mb-4">Discover our latest arrivals and bestsellers.</p>
          <button onClick={() => setCurrentPage('shop')} className="visible-button">Shop Now</button>
        </div>
        <div className="feature-card bg-black p-6 rounded-lg shadow-md animate-slide-in-right">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="mb-4">At ShoeShop, we're passionate about providing high-quality footwear for every occasion. Our curated collection features the latest trends and timeless classics to keep you stepping in style.</p>
          <button onClick={() => setCurrentPage('about')} className="visible-button">Learn More</button>
        </div>
      </div>
      <div className="mt-12 bg-black p-6 rounded-lg animate-fade-in animation-delay-600">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Brands</h2>
        <div className="flex justify-around items-center">
          <img src={logo1} alt="Brand 1" className="h-20 animate-pulse" />
          <img src={logo2} alt="Brand 2" className="h-20 animate-pulse animation-delay-150" />
          <img src={logo3} alt="Brand 3" className="h-20 animate-pulse animation-delay-300" />
          <img src={logo4} alt="Brand 4" className="h-20 animate-pulse animation-delay-450" />
        </div>
      </div>
    </div>
  );
};

const ShopPage = ({ products, addToCart }) => {
  const [category, setCategory] = useState('all');

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);

  return (
    <div className="shop-page-container">
      <h1 className="text-4xl font-bold text-center mb-8 mt-16">Shop Our Collection</h1>
      <div className="mb-8 flex justify-center">
        <div className="filter-container">
          <label className="mr-2">Filter by:</label>
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            className="filter-select"
          >
            <option value="all">All</option>
            <option value="shoes">Shoes</option>
            <option value="slippers">Slippers</option>
            <option value="boots">Boots</option>
          </select>
        </div>
      </div>
      <ProductGrid products={filteredProducts} addToCart={addToCart} />
    </div>
  );
};

const AboutPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-center mb-8">About ShoeShop</h1>
    <div className="bg-black p-6 rounded-lg shadow-md">
      <p className="mb-4">Founded in 2023, ShoeShop has quickly become a leading destination for footwear enthusiasts. Our mission is to provide our customers with the perfect blend of style, comfort, and quality.</p>
      <p className="mb-4">We carefully curate our collection to offer a wide range of options for every occasion, from casual everyday wear to elegant formal shoes. Our team of experienced buyers works tirelessly to bring you the latest trends and timeless classics from renowned brands and up-and-coming designers.</p>
      <p className="mb-4">At ShoeShop, we believe that the right pair of shoes can boost your confidence and elevate your entire outfit. That's why we're committed to helping you find the perfect fit, both in terms of size and style.</p>
      <p>Our dedication to customer satisfaction extends beyond our product selection. We pride ourselves on providing exceptional customer service, fast shipping, and hassle-free returns. When you shop with us, you're not just buying shoes – you're investing in an experience.</p>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
    <div className="bg-black p-6 rounded-lg shadow-md">
      <p className="mb-4">We'd love to hear from you! If you have any questions, comments, or concerns, please don't hesitate to reach out.</p>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Customer Service</h2>
        <p>Email: support@shoeshop.com</p>
        <p>Phone: (555) 123-4567</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Business Hours</h2>
        <p>Monday - Friday: 9am - 5pm EST</p>
        <p>Saturday: 10am - 4pm EST</p>
        <p>Sunday: Closed</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Address</h2>
        <p>123 Shoe Lane</p>
        <p>Footwear City, FC 12345</p>
        <p>United States</p>
      </div>
    </div>
  </div>
);

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleCart = () => {
    setShowCart(!showCart);
    if (showCart) {
      setCurrentPage('home');
    }
  };

  const products = [
    { id: 1, name: "Running Shoes", description: "Lightweight and comfortable", price: 89.99, image: runningShoes, category: "shoes" },
    { id: 2, name: "Casual Sneakers", description: "Stylish everyday wear", price: 59.99, image: casualSneakers, category: "shoes" },
    { id: 3, name: "Dress Shoes", description: "Elegant and formal", price: 129.99, image: dressShoes, category: "shoes" },
    { id: 4, name: "Cozy Slippers", description: "Warm and comfortable", price: 29.99, image: cozySlippers, category: "slippers" },
    { id: 5, name: "Hiking Boots", description: "Durable and waterproof", price: 149.99, image: hikingBoots, category: "boots" },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'shop':
        return <ShopPage products={products} addToCart={addToCart} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen dark-mode">
      <Header 
        cartItems={cartItems} 
        toggleCart={toggleCart}
        setCurrentPage={setCurrentPage}
      />
      <main className="flex-grow bg-gray-900">
        {showCart ? (
          <div className="container mx-auto px-4 py-8">
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          </div>
        ) : (
          renderPage()
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
