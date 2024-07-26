import { Button } from '@renderer/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@renderer/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@renderer/components/ui/dialog'
import { Input } from '@renderer/components/ui/input'
import { Label } from '@renderer/components/ui/label'
import { changeApiUrl } from '@renderer/redux/settings/slice'
import { RootState } from '@renderer/redux/store'
import { loginAction } from '@renderer/redux/user/slice'
import { loginService } from '@renderer/services/login.service'
import { IHandleLogin } from '@renderer/types/login.types'
import { showNotification } from '@renderer/utils/notification.utils'
import { IconSettings } from '@tabler/icons-react'
import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const settings = useSelector((state: RootState) => state.settings)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [apiUrl, setApiUrl] = useState<string>(settings.apiUrl)

  const handleLogin = async (e: FormEvent<IHandleLogin>): Promise<void> => {
    e.preventDefault()

    const data = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    }

    if (!data.email || !data.password)
      return showNotification.Warn({
        title: 'Campos obrigatórios não preenchidos',
        description:
          'Por favor, preencha o campo de e-mail e a senha para continuar.',
      })
    try {
      const result = await loginService(settings.apiUrl, data)

      dispatch(loginAction(result))
      navigate(`/${result.access.name.toLowerCase()}`)
      showNotification.Success({
        title: 'Login realizado com sucesso',
        description: `Você agora está logado. Bem-vindo de volta!`,
      })
    } catch (err: any) {
      if (err.response?.data?.message) {
        showNotification.Error({
          title: 'ERROR',
          description: err.response.data.message,
        })
      } else {
        showNotification.Error({
          title: 'Erro de conexão com a API',
          description:
            'Verifique se a URL da API está correta e se o servidor está acessível.',
        })
      }
    }
  }

  const handleApiUrl = (apiUrl: string): void => {
    dispatch(changeApiUrl(apiUrl))
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
              <Label htmlFor="password">Senha</Label>
              <Input type="password" id="password" placeholder="********" />
            </div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>

      <Dialog>
        <DialogTrigger>
          <div className="fixed right-0 top-0 p-5">
            <IconSettings className="dark:text-slate-100" />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Configurações</DialogTitle>
            <DialogDescription>
              Faça alterações nas suas configurações aqui. Clique em salvar
              quando terminar.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="api-url" className="text-right">
                API URL
              </Label>
              <Input
                id="api-url"
                defaultValue={settings.apiUrl}
                onChange={(e) => setApiUrl(e.target.value)}
                placeholder="https://exemplo.api/v1"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => handleApiUrl(apiUrl)}>
              Salvar alterações
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}
