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
import { HandleLogin } from '@renderer/interfaces/login.interface'
import { login } from '@renderer/services/login.service'
import React from 'react'

export function Login() {
  const handleLogin = async (e: React.FormEvent<HandleLogin>): Promise<any> => {
    e.preventDefault()

    const data = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    }

    console.log('init')
    const result = await login(data)
    console.log(result)
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
