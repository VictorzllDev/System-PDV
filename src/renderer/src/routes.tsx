import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './App'
import { Error, Home, Login, PDV } from './pages'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'

export function Routes() {
  const user = useSelector((state: RootState) => state.user[0])

  function RouterPrivate({ Component, access }) {
    if (user?.access?.name === access) return <Component />
    else return <Error />
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Login />,
        },
        {
          path: '/adm',
          element: <RouterPrivate Component={Home} access="ADM" />,
        },
        {
          path: '/pdv',
          element: <RouterPrivate Component={PDV} access="PDV" />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
