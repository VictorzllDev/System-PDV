import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Toaster } from './components/ui/sonner'
import { RootState } from './redux/store'

export function App(): JSX.Element {
  const { THEME } = useSelector((state: RootState) => state.settings)

  return (
    <div className={THEME}>
      <Outlet />
      <Toaster />
    </div>
  )
}
