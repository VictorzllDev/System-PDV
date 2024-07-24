import { Button } from '@renderer/components/ui/button'
import { RootState } from '@renderer/redux/store'
import { logoutAction } from '@renderer/redux/user/slice'
import { useDispatch, useSelector } from 'react-redux'

export function Home() {
  const user = useSelector((state: RootState) => state.user[0])
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(logoutAction())
  }

  return (
    <main>
      <h1>ADM</h1>
      <div className="2xl">{JSON.stringify(user)}</div>
      <Button onClick={handleClick}>logout</Button>
    </main>
  )
}
