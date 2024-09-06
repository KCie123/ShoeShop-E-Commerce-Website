# ShoeShop E-Commerce Website

This project is an e-commerce web application built with React, designed for selling shoes online. It features a dynamic homepage, a product catalog, shopping cart functionality, and more. The project uses React components to render different sections of the site and manage the state of the shopping cart.

## Project Description
The ShoeShop e-commerce website allows users to browse a collection of shoes, view product details, add items to the cart, and manage their cart. The homepage features popular shoe collections, brand logos, and buttons for navigating between pages like "Shop", "About", and "Contact". The project uses CSS for styling and animations, giving users a smooth and interactive experience.

### Key Features:
- **Product Catalog:** Displays a list of shoes with product details like price, description, and images.
- **Shopping Cart:** Allows users to add/remove items from the cart and displays the total price.
- **Homepage Slider:** Shows popular shoes in a slider format with animations.
- **Filter Products:** Users can filter products based on categories such as shoes, slippers, or boots.
- **Responsive Design:** The website adapts to different screen sizes using CSS and media queries.
- **Animations:** Includes hover effects and dynamic transitions on buttons, images, and sliders.

## Technologies Used:
- **React:** JavaScript library for building user interfaces.
- **React Icons:** Used for icons such as shopping cart and user icons.
- **CSS (App.css):** Custom styling and animations.
- **JavaScript (ES6):** Handles dynamic updates and interactions.
- **HTML5:** Structuring the web pages.

## How to Install and Run the Project

### Prerequisites
- **Node.js** (version 12.x or higher)
- **npm** or **yarn** (for managing dependencies)

### Steps
1. Clone the Repository:
   ```bash
   git clone https://github.com/yourusername/shoeshop-ecommerce.git
   cd shoeshop-ecommerce

2. Install dependencies:
   ```bash
   npm install

3. Run the application:
   ```bash
   npm start

4. Open the browser and navigate to http://localhost:3000.

### File Structure
      
      ShoeShop
      │
      ├── public/                   # Public assets and the index.html
      ├── src/                      # Source files for the React components and CSS
      │   ├── App.js                # Main application component
      │   ├── App.css               # Global styles and animations
      │   ├── components/           # React components (Header, Footer, ProductGrid, etc.)
      │   └── images/               # Image assets for the products and brands
      ├── package.json              # Project dependencies and scripts
      └── README.md                 # This documentation file

## Class Descriptions

### `App.js`
- **Manages the state** of the application, including the cart items and the current page being viewed.
- **Contains components** for:
  - **Header:** Displays navigation links and the shopping cart icon.
  - **HomePage:** Displays the featured products, collections, and brand logos.
  - **ShopPage:** Lists products with filtering options and add-to-cart functionality.
  - **Cart:** Shows items added to the cart and allows users to remove items.
  - **Footer:** Displays a footer with branding information.

### `Header`
- **Props:**
  - `cartItems`: Array of items currently in the cart.
  - `toggleCart`: Function to toggle the cart view.
  - `setCurrentPage`: Function to set the current page (home, shop, etc.).
- **Displays** navigation links (Home, Shop, About, Contact) and the cart icon with the number of items.

### `ProductCard`
- **Props:**
  - `product`: Object containing product details like name, price, and image.
  - `addToCart`: Function to add the product to the cart.
- **Displays** the product image, name, price, and a button to add the item to the cart.

### `ProductGrid`
- **Props:**
  - `products`: Array of product objects.
  - `addToCart`: Function to add products to the cart.
- **Renders** a grid of `ProductCard` components.

### `Cart`
- **Props:**
  - `cartItems`: Array of items currently in the cart.
  - `removeFromCart`: Function to remove an item from the cart.
- **Displays** a list of items in the cart, with the ability to remove items and shows the total cost.

### `Footer`
- **Displays** branding and copyright information.

