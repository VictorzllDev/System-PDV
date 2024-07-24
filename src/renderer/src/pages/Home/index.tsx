import { Button } from '@renderer/components/ui/button'
import { RootState } from '@renderer/redux/store'
import { actionLogout } from '@renderer/redux/user/slice'
import { useDispatch, useSelector } from 'react-redux'

export function Home() {
  const user = useSelector((state: RootState) => state.user[0])

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(actionLogout())
  }

  return (
    <main>
      <div className="4xl">{user.name}</div>
      <Button onClick={handleClick}>Haha</Button>
    </main>
  )
}
