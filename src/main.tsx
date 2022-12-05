import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
const Login = React.lazy(() => import('./Login'))
const Home = React.lazy(() => import('./Home'))
const Support = React.lazy(() => import('./Support'))

const Loading = () => <div>Loading...</div>;

const router = createBrowserRouter([{
  path: "/",
  children: [{
    element: <Suspense fallback={<Loading />}><Home /></Suspense>,
    index: true

  }, {
    path: "login",
    element: <Suspense fallback={<Loading />}><Login /></Suspense>,
  }, {
    path: "support",
    element: <Suspense fallback={<Loading />}><Support /></Suspense>,
  }]
}])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
