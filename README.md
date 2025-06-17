# Private Routing in React

This project demonstrates how to implement **private routes** in a React application using [`react-router-dom`](https://reactrouter.com/) and custom hooks for session management.

## ✨ Features

- **PrivateRoute** component to protect routes
- Simulated session authentication with a custom hook
- Redirects unauthenticated users to the Home page
- Loading state while session is being determined

---

## 📁 Project Structure

```
src/
  components/
    PrivateRoute.jsx
    UseSession.jsx
  pages/
    Home.jsx
    ProjectOne.jsx
    ProjectTwo.jsx
    ProjectThree.jsx
    ProjectFour.jsx
  App.jsx
  router.jsx
  main.jsx
```

---

## 🔒 How Private Routing Works

### 1. Session Management

The [`useSession`](src/components/UseSession.jsx) hook simulates checking for an authenticated session:

```jsx
import { useState, useEffect } from 'react';

const useSession = () => {
  const [session, setSession] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setSession(true); // Simulate authentication
    }, 300);
  }, []);

  return { session };
};

export default useSession;
```

---

### 2. PrivateRoute Component

The [`PrivateRoute`](src/components/PrivateRoute.jsx) component uses the session state to determine access:

```jsx
import React from "react";
import { Navigate } from "react-router-dom";
import useSession from "./UseSession";

const PrivateRoute = ({ children }) => {
  const { session } = useSession();

  if (session === undefined) {
    return <div>Please Wait...</div>;
  }

  return <>{ session ? children : <Navigate to="/Home" /> }</>;
};

export default PrivateRoute;
```

---

### 3. Usage in Router

In [`router.jsx`](src/router.jsx), wrap protected routes with `PrivateRoute`:

```jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/Error";
import ProjectOne from "./pages/ProjectOne";
import PrivateRoute from "./components/PrivateRoute";

export const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  { path: "/ProjectOne", element: <PrivateRoute><ProjectOne /></PrivateRoute> },
  // ...other routes
]);
```

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

---

## 📚 References

- [React Router Documentation](https://reactrouter.com/)
- [React Docs](https://react.dev/)
