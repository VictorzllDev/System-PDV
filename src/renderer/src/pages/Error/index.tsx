import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@renderer/components/ui/card'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function Error() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }, [])

  return (
    <main className="grid h-screen place-items-center">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Error</CardTitle>
          <CardDescription>OPS, Voce nao deveria estar aqui!</CardDescription>
        </CardHeader>
      </Card>
    </main>
  )
}
