
# THJ Shopping E-commerce Platform

This platform allows users to browse gadgets by category, view product details, add items to a cart and wishlist, and sort products by price. The site is built with React, using several packages to enhance functionality and user experience.

### User Interface (UI)
- Home Page: Display gadgets, and categories.
- Order History Page: Show past orders details information including name, image, description, price.
- Product Detail Page: Show detailed information about a selected product, including name, image, description, price, rating, and stock available.
- Dashboard Page: Showing cart and wishlist added data

### Shopping Features
- Add to Cart: Users can add products to the cart, with options to remove items.
- Wishlist: Users can add or remove items from their wishlist.
- Pricing Sorting: Users can sort products by price (high to low) in cart added product.
- Purchase: User can purchase by clicking purchase button.

### Notifications and Ratings
- Notifications: Use react-toastify to show alerts when an item is added to the cart, wishlist, or removed.
- Product Ratings: Display user ratings for each product with react-rating-stars-component and react-stars.
### Core Libraries and Dependencies
- React: Main framework for building the UI.
- React Router: (react-router-dom) for navigation between pages like home, dashboard, order history and product details.
- React Helmet Async: (react-helmet-async) for managing dynamic title show.
- React Icons: (react-icons) for adding icons to buttons, links, and product ratings.
- React Toastify: (react-toastify) for displaying notifications on user actions.
- React Rating Stars Component: (react-rating-stars-component and react-stars) for displaying star ratings on product pages.

### State Management and Data Handling
- Cart and Wishlist Management: Handle cart and wishlist states, allowing users to view, add, and remove items across pages.
- Order History Management: Handle order history state when user purchase product.

# This project use list of fundamental React Concept
- Components: Building the UI with reusable functional components.
- JSX: Using JSX syntax to define the component structure, making it easy to write HTML-like code within JavaScript for rendering UI element
- State Management: Using the useState hook for managing local component states, such as tracking cart items, wishlist or order history.
- Effects (useEffect): Using the useEffect hook for side effects, like fetching product data from an JSON file.

- Routing: Using react-router-dom to handle client-side routing for pages like the home page, product details, dashboard page and order history providing a seamless user experience across pages without page reloads.

- Event Handling: Attaching event handlers to respond to user actions, like adding an item to the cart, sorting products by price, or removing an item from the wishlist.

- Conditional Rendering: Dynamically displaying elements based on certain conditions, such as showing a "No Product Add Cart and Wishlist".
- useLocation: useLocation help render different components or styles based on the current path. For instance, user is on the /dashboard page, might want to navbar color change.

# Used for handling and managing data(Context API)
In this project, Context API is used to handle and manage global state, making data accessible across components without passing props down multiple levels. This is particularly helpful for managing features like the cart, wishlist, and order history.

- Provide Global State: With Context, create a central store for data (e.g., cart items, wishlist items, order history items), which all components can access and update as needed.

- Avoid Prop Drilling: Instead of passing data through multiple layers of components, Context allows direct access to state, simplifying component structure.
# Features in THAJ Shopping

### 1. Category-Wise Product Display:

- Users can browse products by category, making it easy to find specific types of gadgets. Each category displays relevant items, allowing for a streamlined shopping experience..
### 2. Product Details Page:

- Each product has a dedicated details page, displaying comprehensive information like in stock, images, descriptions, price, and user ratings. This feature helps users make informed purchasing decisions.
### 3. Add to Cart and Wishlist:

- Users can add products to their cart or wishlist for easy access. This allows them to keep track of items they’re interested in, whether they’re ready to purchase now or later.

### 4. Price Sorting:
- Users can sort products by price (high to low), enabling cart items.
### 5. Notifications and Alerts:
- Using react-toastify, the package provides real-time notifications for actions like adding items to the cart or wishlist, enhancing user feedback and engagement.
### 6. Order History:
- User purchase product. User easy access to details about past orders. 
### 7. Delete cart and Wishlist item:
- User can delete or remove added cart and wishlist item.



## 🔗 Live Link

https://thajshopping.netlify.app/