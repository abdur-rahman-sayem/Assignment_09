import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home.jsx';
import Apps from './pages/Apps.jsx';
import Installation from './pages/Installation.jsx';
import MainLayout from './Layouts/MainLayout.jsx';
import Error from './pages/Error.jsx';
import CardDetails from './pages/CardDetails.jsx';
import { ToastContainer } from 'react-toastify';
import ErrorApp from './Components/ErrorApp.jsx';
import PageLoader from './Components/PageLoader.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement:<Error></Error>,
    hydrateFallbackElement:<p>loading</p>,
    children: [
       {
        path: "/",
        Component: () => <PageLoader><Home /></PageLoader>,
      },
      {
        path: "/apps",
        Component: () => <PageLoader><Apps /></PageLoader>,
      },
      {
        path: "/installation",
        Component: () => <PageLoader><Installation /></PageLoader>,
      },
      {
        path: "/card/:id",
        Component: () => <PageLoader><CardDetails /></PageLoader>,
      },
      {
        path: "/errorApp",
        Component: () => <PageLoader><ErrorApp /></PageLoader>,
      }
    ]
  }

  // {
  //   path:"*",
  //   element:<Error></Error>
  // },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
 <ToastContainer />
  </StrictMode>,
)
