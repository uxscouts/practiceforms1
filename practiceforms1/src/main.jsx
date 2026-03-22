{/*
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/}

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home'; // Assume you have these components
import About from './pages/About';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Layout from './components/Layout'; // For a common layout
import ErrorPage from './pages/ErrorPage'; // Optional error page

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />, // Renders if an error occurs in its children
    children: [
      { index: true, element: <Home /> }, // Index route for the parent path (/)
      { path: 'about', element: <About /> },
       { path: 'booking', element: <Booking /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  // You can add more top-level routes here if needed
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap your application with the RouterProvider */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
