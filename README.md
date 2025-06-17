# React Portfolio Routing Example

This project demonstrates client-side routing in a React application using [React Router v7](https://reactrouter.com/en/main) and [Vite](https://vitejs.dev/).

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## 🗂️ Project Structure

```
src/
  main.jsx         # Entry point, sets up RouterProvider
  router.jsx       # Routing configuration
  App.jsx          # Main app component
  pages/
    Home.jsx
    ProjectOne.jsx
    ProjectTwo.jsx
    ProjectThree.jsx
    ProjectFour.jsx
```

---

## 🛣️ How Routing is Set Up

Routing is managed in [`src/router.jsx`](src/router.jsx):

- Uses `createBrowserRouter` from `react-router-dom`.
- Each route maps a path (e.g., `/ProjectOne`) to a React component.

Example from [`src/router.jsx`](src/router.jsx):

```jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProjectOne from "./pages/ProjectOne";
import ProjectTwo from "./pages/ProjectTwo";
import ProjectThree from "./pages/ProjectThree";
import ProjectFour from "./pages/ProjectFour";
import Home from "./pages/Home";

export const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/ProjectOne", element: <ProjectOne /> },
    { path: "/ProjectTwo", element: <ProjectTwo /> },
    { path: "/ProjectThree", element: <ProjectThree /> },
    { path: "/ProjectFour", element: <ProjectFour /> },
    { path: "/Home", element: <Home /> },
]);
```

The router is provided to your app in [`src/main.jsx`](src/main.jsx):

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
```

---

## 🏠 Navigation

- The Home page (`/`) provides buttons to navigate to each project page.
- Each project page includes a "Back to Home" button.

Example from [`src/pages/Home.jsx`](src/pages/Home.jsx):

```jsx
<button onClick={() => window.location.href = '/ProjectOne'}>
  Go to Project One
</button>
```

---

## 📚 Resources

- [React Router Documentation](https://reactrouter.com/en/main)
