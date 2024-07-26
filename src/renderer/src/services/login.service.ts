import { ILogin } from '@renderer/types/login.types'
import { IUser } from '@renderer/types/user.types'
import axios, { AxiosResponse } from 'axios'

export async function loginService(
  apiUrl: string,
  data: ILogin,
): Promise<IUser> {
  if (apiUrl.endsWith('/')) apiUrl = apiUrl.slice(0, -1)

  const result: AxiosResponse<IUser> = await axios.post(`${apiUrl}/auth`, data)

  return result.data
}
