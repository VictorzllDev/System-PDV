import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './App'
import { Login } from './pages'

export function Routes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Login />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
