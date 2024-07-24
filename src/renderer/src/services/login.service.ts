import { Login } from '@renderer/interfaces/login.interface'
import { User } from '@renderer/interfaces/user.interface'

export async function loginService({ email, password }: Login): Promise<User> {
  const result: User = await new Promise((resolve) =>
    setTimeout(() => {
      if (email === 'adm@gmail.com' && password === '123123') {
        resolve({
          id: '2651dd63-94a0-4c38-b977-100c27d48c51',
          name: 'Victor',
          email: email,
          access: {
            id: 'ec7fdeb5-214a-4962-8f35-ec840b430f80',
            name: 'ADM',
          },
        })
      } else if (email === 'user@gmail.com' && password === '123123') {
        resolve({
          id: '5215f7c4-51df-4a02-8655-dfe60dd8d110',
          name: 'leo',
          email: email,
          access: {
            id: '74ce4b77-9fff-42ae-864c-bd51078ddcab',
            name: 'PDV',
          },
        })
      } else {
        throw new Error('Usuario nao existem!')
      }
    }, 1000),
  )

  return result
}
