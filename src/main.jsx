import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from './components/main'
import ProtecdedRoute from './prodected.route'
import LeftNav from './components/leftnav'
import Header from './components/header'
import HomePage from './pages/homepage'
import SignIn from './pages/signin'
import SignUp from './pages/signup'

const router = createBrowserRouter([
  {
    path: '/',
    element: 
    <>
      <LeftNav />
      <ProtecdedRoute>
        <Main>
          <Header />
          <HomePage />
        </Main>
      </ProtecdedRoute>
    </>
  },
  {
    path: '/signin',
    element: 
    <>
      <LeftNav />
      <Main>
        <SignIn />
      </Main>
    </>
  },
  {
    path: '/signup',
    element: 
    <>
      <LeftNav />
      <Main>
        <SignUp />
      </Main>
    </>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
