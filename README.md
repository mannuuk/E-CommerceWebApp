# Product List Application

## Project Overview

This project is a dynamic product listing application that fetches product data from an external API and displays it with interactive features like filtering, sorting, infinite scrolling, and a product details modal. The application is fully responsive and optimized for both mobile and desktop views. It follows best practices for code structure, performance optimization, and modularity.

## Features

- **Product List View**: Displays a list of products fetched from an API using https://fakestoreapi.in/api.
- **Infinite Scrolling**: Dynamically loads more products as the user scrolls down using the **react-infinite-scroll-component**.
- **Filtering and Sorting**: Allows users to filter products by category and to sort by price.
- **Product Details Modal**: Clicking on a product opens a modal with more detailed information.
- **Responsive Design**: Supports both mobile and desktop layouts.
- **Optimized Code**: Follows modular, reusable components and performance best practices.

## Design Decisions

### 1. **Architecture**

- The application follows a **component-based architecture**, which promotes reusability and maintainability. We break down the UI into smaller, self-contained components such as `Pages`, `PageHeader`, `ProductCard`, `Filter`, `ProductDetailsModal`, `Spinner`, etc.
- **State management**: State is managed using **React's useState**.

### 2. **Tech Stack**

- **React** for the UI framework.
- **Tanstack Query** for data fetching, caching, and managing loading and error states.
- **Axios** for making API requests and handling responses.
- **react-infinite-scroll-component** for implementing the infinite scrolling feature.
- **Tailwind CSS** for utility-first CSS styling.
- **Headless UI** for accessible, unstyled UI components like modals, dropdowns, and switches.
- **@heroicons/react** for using accessible, customizable icons in the app.
- **CSS Grid** for layout and **Media Queries** for responsive design.

### 3. **Design Patterns**

- **Container-Presenter Pattern**: We used the container-presenter pattern for separating logic and UI. Components like `ProductList` and `Filter` manage the logic, while `ProductCard` handles the UI rendering.
- **Lazy Loading**: **React.lazy** is used to load components only when they are needed, which helps to reduce the initial bundle size.

### 4. **Performance Optimizations**

- **Image Optimization**: All images are optimized for web usage with reduced file sizes. We use **lazy loading** for images, which helps to only load images when they are in the viewport.
- **Infinite Scrolling**: The infinite scroll functionality uses the **react-infinite-scroll-component**, which fetches data only when necessary, preventing unnecessary re-fetching.
- **Memoization**: React.lazy() and React’s **useMemo** hooks are used to memoize expensive calculations and event handlers to avoid unnecessary re-renders.

## Features Breakdown

### 1. **Product List View**

- Products are fetched using **Tanstack Query** and **Axios** from the **fake store API** (or any other provided API).
- Each product displays its name, price, category, and image.
- Infinite scrolling is implemented with the **react-infinite-scroll-component**, fetching more products as the user reaches the bottom of the page.

### 2. **Filtering and Sorting**

- **Filters**: Users can filter products by category.
- **Sorting**: Users can sort products by price (low-to-high or high-to-low).
- Both filter and sorting options are applied **without page reload**, providing a seamless experience.
- Filters are implemented as **controlled components**, making the data flow predictable.
- Both are managed in Frontend side.

### 3. **Product Details Modal**

- When a user clicks on a product, a modal opens with more detailed information about the product.
- Data for the modal is loaded dynamically to optimize performance. The modal is built using **Headless UI** components for accessibility.

### 4. **Responsive Design**

- The application uses a **CSS grid layout** for desktop and a **list layout** for mobile.
- Media queries are used to switch between layouts, ensuring the application works seamlessly across devices of all sizes.

### 5. **Error Handling and Loading States**

- **Error handling and loading states** are managed by **Tanstack Query**.
- **Loading**: While the data is being fetched, Tanstack Query provides a loading state to show spinners or placeholders.
- **Error handling**: If the API request fails, Tanstack Query automatically manages error states and allows for displaying user-friendly error messages.

## Known Limitations & Enhancements

- **Pagination**: While infinite scrolling is implemented, pagination could provide a better UX in certain scenarios (e.g., if users want to navigate between pages).

## Clone the repository:

git clone https://github.com/your-username/product-list-app.git

cd E-CommerceWebApp

### `npm install or yarn install`

## Available Scripts

In the project directory, you can run:

### `npm start or yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test or yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build or yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject or yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
