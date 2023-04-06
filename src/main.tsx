import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from './App'
import Fretify from './pages/Fretify';
import Muunifi from './pages/Muunifi';
import NPM from './pages/NPM';
import './styles/global.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
  },
  {
    path: "fretify",
    element: (
      <Fretify />
    ),
  },
  {
    path: "muunifi",
    element: (
      <Muunifi />
    ),
  },
  {
    path: "jd-react-select",
    element: (
      <NPM />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
