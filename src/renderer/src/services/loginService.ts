import { ILogin } from '@renderer/interfaces/ILogin'
import { IUser } from '@renderer/interfaces/IUser'

export async function loginService({
  email,
  password,
}: ILogin): Promise<IUser> {
  const result: IUser = await new Promise((resolve, reject) =>
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
        reject({
          message: 'E-mail ou senha está incorreto',
        })
      }
    }, 1000),
  )

  return result
}