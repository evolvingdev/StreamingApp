import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/Main';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Main />
      </>
    ),
  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

