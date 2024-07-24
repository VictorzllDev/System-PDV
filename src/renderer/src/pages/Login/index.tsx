import { Label } from '@radix-ui/react-label'
import { Button } from '@renderer/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@renderer/components/ui/card'
import { Input } from '@renderer/components/ui/input'
import { IHandleLogin } from '@renderer/interfaces/ILogin'
import { loginAction } from '@renderer/redux/user/slice'
import { loginService } from '@renderer/services/loginService'
import { FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin = async (e: FormEvent<IHandleLogin>): Promise<void> => {
    e.preventDefault()

    const data = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    }

    if (!data.email || !data.password) return

    try {
      const result = await loginService(data)

      dispatch(loginAction(result))
      navigate(`/${result.access.name.toLowerCase()}`)
    } catch (err: any) {
      if (err.message) {
        alert(err.message)
      } else {
        alert('Falha no login. Por favor, tente novamente.')
      }
    }
  }

  return (
    <main className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-3xl">Login</CardTitle>
          <CardDescription>Bem Vindo ao System PDV.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">E-Mail</Label>
              <Input type="email" id="email" placeholder="exemplo@system.com" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="********" />
            </div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
