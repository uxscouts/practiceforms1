
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home'; 
import About from './pages/About';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Layout from './components/Layout'; 
import ErrorPage from './pages/ErrorPage'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />, 
    children: [
      { index: true, element: <Home /> }, 
      { path: 'about', element: <About /> },
       { path: 'booking', element: <Booking /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



// main.jsx
{/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
  */}