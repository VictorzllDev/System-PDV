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
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@renderer/components/ui/dialog'
import { Input } from '@renderer/components/ui/input'
import { Label } from '@renderer/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@renderer/components/ui/select'
import { useLogin } from '@renderer/hooks/useLogin.hook'
import { changeSettings } from '@renderer/redux/settings/slice'
import { RootState } from '@renderer/redux/store'
import { IHandleLogin } from '@renderer/types/login.types'
import { ISettings, IThemes } from '@renderer/types/settings.types'
import { showNotification } from '@renderer/utils/notification.utils'
import { IconLoader3, IconSettings } from '@tabler/icons-react'
import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function Login() {
  const SETTINGS = useSelector((state: RootState) => state.settings)
  const [settings, setSettings] = useState<ISettings>(SETTINGS)
  const dispatch = useDispatch()

  const { mutate, isPending } = useLogin()

  const handleLogin = async (e: FormEvent<IHandleLogin>): Promise<void> => {
    e.preventDefault()

    const email = e.currentTarget.email.value
    const password = e.currentTarget.password.value

    if (!email || !password)
      return showNotification.Warn({
        title: 'Campos obrigatórios não preenchidos',
        description:
          'Por favor, preencha o campo de e-mail e a senha para continuar.',
      })

    mutate({ email, password })
  }

  const handleSaveSettings = (settings: ISettings): void => {
    dispatch(changeSettings(settings))
    showNotification.Success({ title: 'Alterações Salvas com Sucesso' })
  }

  return (
    <main className="flex h-screen items-center justify-center bg-background">
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
              {isPending ? <IconLoader3 className="animate-spin" /> : 'Entrar'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Dialog modal>
        <DialogTrigger>
          <div className="fixed right-0 top-0 p-5">
            <IconSettings className="text-primary" />
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
                API
              </Label>
              <Input
                id="api-url"
                defaultValue={SETTINGS.API_URL}
                onChange={(e) =>
                  setSettings({ ...settings, API_URL: e.target.value })
                }
                placeholder="https://exemplo.api/v1"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="api-url" className="text-right">
                Tema
              </Label>
              <Select
                defaultValue={(SETTINGS.THEME as IThemes) || 'light'}
                onValueChange={(e) =>
                  setSettings({
                    ...settings,
                    THEME: (e.valueOf() as IThemes) || 'light',
                  })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="destructive">Cancelar</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button onClick={() => handleSaveSettings(settings)}>
                Salvar alterações
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}
