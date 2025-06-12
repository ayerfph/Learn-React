import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { store } from './store.js'
import { Provider } from 'react-redux'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <>
      <h1 className='text-center pt-4 text-3xl'>React Supabase Auth</h1>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
      </>
    </Provider>
  </StrictMode>,
)
