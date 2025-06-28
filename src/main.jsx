import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";

import Home from "../src/Home";
import About from "../src/About";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from '../Root.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, 
    Component: Home},

      { path: "about",
     Component: About },
    
    
    ],
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
