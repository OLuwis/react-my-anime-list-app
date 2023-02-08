import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import HomePage from './Pages/HomePage';
import SectionPage from './Pages/SectionPage';
import SearchPage from './Pages/SearchPage';
import FullPage from './Pages/FullPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/top/:id?",
        element: <SectionPage />
      },
      {
        path: "/:id?",
        element: <SearchPage />
      },
      {
        path: "/anime/:id/full",
        element: <FullPage />
      },
      {
        path: "/manga/:id/full",
        element: <FullPage />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)