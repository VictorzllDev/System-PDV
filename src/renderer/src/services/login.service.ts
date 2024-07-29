import { ILogin } from '@renderer/types/login.types'
import { IUser } from '@renderer/types/user.types'
import axios, { AxiosResponse } from 'axios'

export async function loginService(
  API_URL: string,
  data: ILogin,
): Promise<IUser> {
  if (API_URL.endsWith('/')) API_URL = API_URL.slice(0, -1)

  const result: AxiosResponse<IUser> = await axios.post(`${API_URL}/auth`, data)

  return result.data
}
