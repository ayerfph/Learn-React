# Supabase React Auth System

A React + Vite application using **Supabase** for authentication, **Redux Toolkit** for state management, **React Router** for navigation, and **Tailwind CSS** for styling.

---

## 🚀 Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Supabase](https://supabase.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📁 Project Structure

```plaintext
src/
  App.tsx
  main.tsx
  router.tsx
  store.ts
  supabaseClient.ts
  context/
    AuthContext.tsx
  components/
    Dashboard.tsx
    PrivateRoute.tsx
    Signin.tsx
    Signup.tsx
  counter/
    counterSlice.ts
  assets/
  index.css
```

---

## 🔑 Authentication Flow

### 1. Supabase Client

- **`src/supabaseClient.ts`**  
  Initializes the Supabase client using environment variables.

### 2. Auth Context

- **`src/context/AuthContext.tsx`**  
  Provides authentication state and functions via React Context:
  - `signUpNewUser`
  - `signInUser`
  - `signOut`
  - Tracks current user session and updates on auth state changes.

### 3. Routing

- **`src/router.tsx`**  
  Defines routes for `/`, `/signup`, `/signin`, `/dashboard`.
  - `/dashboard` is protected by `PrivateRoute`.

### 4. Protected Routes

- **`src/components/PrivateRoute.tsx`**  
  Redirects unauthenticated users to `/signup`.

### 5. Auth Pages

- **`src/components/Signup.tsx`**  
  Sign up form. Redirects to `/dashboard` on success.
- **`src/components/Signin.tsx`**  
  Sign in form. Redirects to `/dashboard` on success.

### 6. Dashboard

- **`src/components/Dashboard.tsx`**  
  Displays the logged-in user's email and a sign out button.

---

## 🗃️ Redux Example

- **`src/counter/counterSlice.ts`**  
  Example Redux slice for a counter.
- **`src/store.ts`**  
  Configures Redux store with the counter reducer.

---

## 🎨 Styling

- **`src/index.css`**  
  Tailwind CSS for styling.

---

## 🛠️ Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Set up environment variables:**  
   Create a `.env` file with your Supabase credentials.

3. **Start the development server:**
   ```sh
   npm run dev
   ```

---

## ➕ Adding Features

- **Add protected pages:**  
  Wrap them in `<PrivateRoute>` in `router.tsx`.
- **Expand Redux:**  
  Add new slices and include them in `store.ts`.

---

## 📄 File References

- [`src/context/AuthContext.tsx`](src/context/AuthContext.tsx)
- [`src/components/Signup.tsx`](src/components/Signup.tsx)
- [`src/components/Signin.tsx`](src/components/Signin.tsx)
- [`src/components/PrivateRoute.tsx`](src/components/PrivateRoute.tsx)
- [`src/components/Dashboard.tsx`](src/components/Dashboard.tsx)
- [`src/router.tsx`](src/router.tsx)
- [`src/store.ts`](src/store.ts)
- [`src/counter/counterSlice.ts`](src/counter/counterSlice.ts)

---

## 📝 Notes

- **Session Persistence:**  
  Session is managed in context and updates on auth state changes.
- **Error Handling:**  
  Errors are displayed in the UI for sign in/up.
- **Customization:**  
  Expand Redux, add routes, or customize UI as needed.

---

**For more details, see the code in each referenced file.**
