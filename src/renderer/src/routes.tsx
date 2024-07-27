import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from 'react-router-dom'
import { App } from './App'
import { Home, Login, PDV } from './pages'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { useEffect } from 'react'

export function Routes() {
  const user = useSelector((state: RootState) => state.user[0])

  function RouterPrivate({ Component, access }) {
    if (user?.access?.name === access) return <Component />
    else return <Redirect />
  }

  function Redirect() {
    const navigate = useNavigate()
    useEffect(() => {
      navigate('/')
    }, [])

    return <span />
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Redirect />,
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
