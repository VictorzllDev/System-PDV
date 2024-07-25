import { ILogin } from '@renderer/interfaces/ILogin'
import { IUser } from '@renderer/interfaces/IUser'
import axios, { AxiosResponse } from 'axios'

export async function loginService(
  apiUrl: string,
  data: ILogin,
): Promise<IUser> {
  if (apiUrl.endsWith('/')) apiUrl = apiUrl.slice(0, -1)

  const result: AxiosResponse<IUser> = await axios.post(`${apiUrl}/auth`, data)

  return result.data
}
